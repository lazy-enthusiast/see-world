# See World

一個純前端的旅行 App，加上一條自動化部署 pipeline。

## 這是什麼

- **App**：顯示行程（單一 HTML 檔 + `config.js`）
- **規劃**：由 Grok Bot 負責（研究、查機票、產出 `config.js`）
- **部署**：Grok Bot 呼叫 Cloudflare Worker，自動寫入 GitHub

## 怎麼用

1. 打開 App：https://lazy-enthusiast.github.io/see-world/
2. 行程由 `config.js` 決定（主題配色也在這裡）
3. 要更新行程時，由 Grok Bot 透過 Worker 部署

## 檔案結構

```
see-world/
├── index.html      # App 主體（含渲染邏輯）
├── config.js       # 客製化行程資料（App 讀這個）
├── preferences.md  # 旅遊偏好（Grok Bot 讀這個）
├── SCHEMA.md       # 給人／Bot 的結構說明
├── schema.json     # Worker 驗證用的機器契約（以此為準）
├── NOTES.md        # pipeline 備忘（勿寫入真實 secret）
├── sw.js           # Service Worker（快取策略）
├── manifest.json   # PWA 設定
├── worker/         # 獨立 Worker：see-world-transit（GET /transit；key 在 Secrets）
└── versions/
    └── config/     # config.js 的歷史版本
```

每趟旅行只換 `config.js`。實時到站用 `transport.liveApi`（僅公開站碼）；API key 只在 Cloudflare（`see-world-transit`），見 `worker/README.md` 與 `SCHEMA.md`。  
部署用的 `/deploy` 仍在另一個 Worker：`see-world-worker`（勿用本目錄 `wrangler deploy` 蓋掉它）。

## 相關文件

- **`SCHEMA.md`**：`config.js` 的結構說明與 LLM 規則
- **`schema.json`**：Worker 驗證契約
- **`NOTES.md`**：pipeline 的運作方式、從哪裡開始
- **`preferences.md`**：旅遊偏好

## 技術架構

```
Grok Bot（規劃）
  ↓ HTTP POST（帶 X-Deploy-Secret；真值不進 repo）
Cloudflare Worker（驗證、存舊版、寫入 GitHub）
  ↓
GitHub repo
  ↓ 自動部署
App（顯示）
```

## 狀態

- ✅ App 前端完成（含收合交通列、交通 modal、實時到站 UI）
- ✅ Deploy Worker（`see-world-worker`）完成
- ✅ Transit Worker（`see-world-transit`）完成；`mock` 可用；`odpt` 待設 `TRANSIT_ODPT_KEY`
- ✅ 認證／版本管理／更新提示完成
- ✅ Grok Bot 可產出 `config.js` 並部署／歸檔
- ⏳ 待實戰驗證：大阪行程產出品質與當地活動發現能力

## 課金狀態

課金時機：真的要去旅行時。
