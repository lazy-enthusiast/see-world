# see-world Worker — transit 代理

App 殼跨旅行重用：API key **只**存在 Cloudflare Secrets，不進 `config.js`。

現況正式 Worker：`https://see-world-worker.davchan-clp.workers.dev`（另有 `/deploy`）。

## 合併進現有 Worker（必要）

`index.js` 是**完整可部署的範本**，含 `/transit`；**沒有**你現有的 `/deploy` 實作。

請擇一：

1. **建議**：把本目錄 `index.js` 裡的 `handleTransit`／`jsonResponse`／CORS 邏輯，合併進 Cloudflare 上現有的 `see-world-worker`（保留原有 `/deploy` 分支）。
2. 或：在 Cloudflare 另建 Worker 只跑 transit，並改 App 裡的 `TRANSIT_WORKER_URL`。

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
