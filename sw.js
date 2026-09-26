// ============================================================
// 🧳 Service Worker
// - config.js        → network-first（永远先拿最新）
// - 其他静态资源      → stale-while-revalidate（先用旧的，背景更新）
// - CACHE_NAME        → 自动带版本，不需要手动改
// ============================================================

const CACHE_VERSION = 'v2'; // 只有「改 sw.js 本身逻辑」时才需要动这里
const CACHE_NAME = `trip-app-${CACHE_VERSION}`;

// 只列「核心骨架」，config.js 不在这里（它走 network-first）
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.png'
];

// ---------- install ----------
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS))
  );
  self.skipWaiting(); // 新版 SW 立刻接手，不等舊的關閉
});

// ---------- activate ----------
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k !== CACHE_NAME && k.startsWith('trip-app-'))
          .map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim(); // 立刻接管所有已開的頁面
});

// ---------- fetch ----------
self.addEventListener('fetch', (event) => {
  const req = event.request;

  // 只處理 GET
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // 只處理同源請求（外部的 API、CDN 讓瀏覽器自己處理）
  if (url.origin !== self.location.origin) return;

  // 1. config.js → network-first
  if (url.pathname.endsWith('/config.js')) {
    event.respondWith(networkFirst(req));
    return;
  }

  // 2. 其他 → stale-while-revalidate
  event.respondWith(staleWhileRevalidate(req));
});

// ---------- 策略實作 ----------

// 先打網路，成功就更新快取；失敗則回快取
async function networkFirst(req) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const fresh = await fetch(req);
    if (fresh && fresh.ok) {
      cache.put(req, fresh.clone());
    }
    return fresh;
  } catch (e) {
    const cached = await cache.match(req);
    if (cached) return cached;
    return new Response('Offline', { status: 503 });
  }
}

// 先回快取（若有），同時背景更新
async function staleWhileRevalidate(req) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(req);

  const fetchPromise = fetch(req)
    .then((res) => {
      if (res && res.ok) cache.put(req, res.clone());
      return res;
    })
    .catch(() => null);

  return cached || (await fetchPromise) || new Response('Offline', { status: 503 });
}
