/**
 * see-world Worker — /transit 實時到站代理
 *
 * 合併說明見 worker/README.md。
 * 若取代整個 Cloudflare Worker，請務必保留既有 /deploy 邏輯。
 */

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Max-Age': '86400'
};

const PROVIDERS = new Set(['odpt', 'mock']);

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    const url = new URL(request.url);

    // --- transit ---
    if (url.pathname === '/transit' || url.pathname.endsWith('/transit')) {
      if (request.method !== 'GET') {
        return jsonResponse({ ok: false, error: 'method_not_allowed' }, 405);
      }
      return handleTransit(url, env);
    }

    // --- deploy：請保留／貼上你現有的 /deploy 實作 ---
    // if (url.pathname === '/deploy' || url.pathname.endsWith('/deploy')) { ... }

    return jsonResponse({
      ok: false,
      error: 'not_found',
      hint: 'Routes: GET /transit (merge your existing /deploy handler if missing)'
    }, 404);
  }
};

async function handleTransit(url, env) {
  const provider = (url.searchParams.get('provider') || '').trim();
  const stopId = (url.searchParams.get('stopId') || '').trim();
  const lineId = (url.searchParams.get('lineId') || '').trim() || null;
  const direction = (url.searchParams.get('direction') || '').trim() || null;

  if (!provider || !PROVIDERS.has(provider)) {
    return jsonResponse({
      ok: false,
      error: 'invalid_provider',
      allowed: [...PROVIDERS]
    }, 400);
  }
  if (!stopId) {
    return jsonResponse({ ok: false, error: 'missing_stopId' }, 400);
  }

  try {
    if (provider === 'mock') {
      return jsonResponse(mockArrivals(stopId));
    }
    if (provider === 'odpt') {
      return jsonResponse(await fetchOdptArrivals(env, stopId, lineId, direction));
    }
    return jsonResponse({ ok: false, error: 'provider_not_implemented' }, 501);
  } catch (e) {
    const msg = e && e.message ? e.message : String(e);
    const status = e && e.status ? e.status : 502;
    return jsonResponse({ ok: false, error: 'upstream_failed', detail: msg }, status);
  }
}

function mockArrivals(stopId) {
  const now = new Date();
  const fmt = (mins) => {
    const d = new Date(now.getTime() + mins * 60000);
    return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  };
  return {
    ok: true,
    provider: 'mock',
    updatedAt: now.toISOString(),
    stopId,
    arrivals: [
      { time: fmt(3), dest: '（測試）下一班', delayMin: 0, platform: '1' },
      { time: fmt(8), dest: '（測試）再下一班', delayMin: null, platform: '1' },
      { time: fmt(14), dest: '（測試）第三班', delayMin: 2, platform: '2' }
    ]
  };
}

async function fetchOdptArrivals(env, stopId, lineId, direction) {
  const key = env.TRANSIT_ODPT_KEY;
  if (!key) {
    const err = new Error('TRANSIT_ODPT_KEY not configured on Worker');
    err.status = 503;
    throw err;
  }

  const params = new URLSearchParams({
    'acl:consumerKey': key,
    'odpt:station': stopId
  });
  if (lineId) params.set('odpt:railway', lineId);
  if (direction) params.set('odpt:railDirection', direction);

  const apiUrl = `https://api.odpt.org/api/v4/odpt:StationTimetable?${params.toString()}`;
  const res = await fetch(apiUrl, {
    headers: { Accept: 'application/json' }
  });
  if (!res.ok) {
    const err = new Error(`ODPT HTTP ${res.status}`);
    err.status = res.status === 401 || res.status === 403 ? 502 : 502;
    throw err;
  }

  const data = await res.json();
  const arrivals = normalizeOdptTimetable(data);
  return {
    ok: true,
    provider: 'odpt',
    updatedAt: new Date().toISOString(),
    stopId,
    arrivals
  };
}

/** Map ODPT StationTimetable → unified arrivals (upcoming only, max 8). */
function normalizeOdptTimetable(data) {
  const rows = Array.isArray(data) ? data : [];
  const now = new Date();
  const nowMin = now.getHours() * 60 + now.getMinutes();
  const collected = [];

  for (const doc of rows) {
    const objects = doc['odpt:stationTimetableObject'] || doc.stationTimetableObject || [];
    for (const obj of objects) {
      const time = obj['odpt:departureTime'] || obj['odpt:arrivalTime'] || null;
      if (!time || typeof time !== 'string') continue;
      const parts = time.split(':');
      if (parts.length < 2) continue;
      const tMin = parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
      // keep today upcoming + small wrap window after midnight
      let delta = tMin - nowMin;
      if (delta < -30) delta += 24 * 60;
      if (delta < -5 || delta > 180) continue;

      const destRaw =
        obj['odpt:destinationStation'] ||
        obj['odpt:destinationStationTitle'] ||
        obj['dc:title'] ||
        null;
      let dest = null;
      if (typeof destRaw === 'string') {
        dest = destRaw.replace(/^odpt\.Station:[^.]+\.[^.]+\./, '');
      } else if (Array.isArray(destRaw) && destRaw.length) {
        const first = destRaw[0];
        dest = typeof first === 'string'
          ? first.replace(/^odpt\.Station:[^.]+\.[^.]+\./, '')
          : null;
      }

      const delay = obj['odpt:delay'] != null ? Number(obj['odpt:delay']) : null;
      const platform = obj['odpt:platformNumber'] || obj['odpt:platformName'] || null;

      collected.push({
        time,
        dest: dest || '—',
        delayMin: Number.isFinite(delay) ? Math.round(delay / 60) : null,
        platform: platform != null ? String(platform) : null,
        _delta: delta
      });
    }
  }

  collected.sort((a, b) => a._delta - b._delta);
  return collected.slice(0, 8).map(({ time, dest, delayMin, platform }) => ({
    time,
    dest,
    delayMin,
    platform
  }));
}

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      ...CORS_HEADERS
    }
  });
}
