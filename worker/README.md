# see-world Worker — transit 代理

App 殼跨旅行重用：API key **只**存在 Cloudflare Secrets，不進 `config.js`。

| Worker | 網址 | 用途 |
|--------|------|------|
| `see-world-worker` | `https://see-world-worker.davchan-clp.workers.dev` | Grok `/deploy`（勿用本目錄蓋掉） |
| `see-world-transit` | `https://see-world-transit.davchan-clp.workers.dev` | **到站** `/transit`（本目錄部署） |

App 的 `TRANSIT_WORKER_URL` 指向 `see-world-transit`。

## 部署

```bash
cd worker
npx wrangler deploy
```

## （可選）合併進 see-world-worker

若之後想合成單一 Worker：把本目錄邏輯併入 `see-world-worker`，並改回 App URL；合併前務必保留原有 `/deploy`。

## Secrets

| Secret | 用途 |
|--------|------|
| `TRANSIT_ODPT_KEY` | [developer.odpt.org](https://developer.odpt.org/) 發的 consumer key |
| （既有）`DEPLOY_SECRET` / `GITHUB_TOKEN` | 部署用，與 transit 無關 |

設定：Cloudflare → Workers → see-world-worker → Settings → Variables and Secrets。

未設定 `TRANSIT_ODPT_KEY` 時，`provider=odpt` 會回 503；`provider=mock` 不需 key，可供 UI 測試。

## API

```
GET /transit?provider=odpt&stopId=odpt.Station:OsakaMetro.Midosuji.Umeda
GET /transit?provider=mock&stopId=demo-stop
```

可選：`lineId`、`direction`

成功回應：

```json
{
  "ok": true,
  "provider": "odpt",
  "updatedAt": "2026-10-18T15:00:00.000Z",
  "arrivals": [
    { "time": "15:12", "dest": "なかもず", "delayMin": null, "platform": null }
  ]
}
```

## 本地試跑（可選）

```bash
cd worker
npx wrangler dev
```

需已登入 wrangler，並能讀到 Secrets（或在 `.dev.vars` 放 `TRANSIT_ODPT_KEY=...`，且該檔勿提交）。
