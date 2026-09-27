# See World

一個純前端的旅行 App，加上一條自動化部署 pipeline。

## 這是什麼

- **App**：顯示行程（單一 HTML 檔 + `config.js`）
- **規劃**：由 Grok Bot 負責（研究、查機票、產出 `config.js`）
- **部署**：Grok Bot 呼叫 Cloudflare Worker，自動寫入 GitHub

## 怎麼用

1. 打開 App：https://lazy-enthusiast.github.io/see-world/
2. 行程由 `config.js` 決定
3. 要更新行程時，由 Grok Bot 透過 Worker 部署

## 檔案結構
see-world/
├── index.html # App 主體（含渲染邏輯）
├── config.js # 客製化行程資料（App 讀這個）
├── preferences.md # 旅遊偏好（Grok Bot 讀這個）
├── SCHEMA.md # config.js 的結構契約
├── NOTES.md # 給未來的我的備忘錄
├── sw.js # Service Worker（快取策略）
├── manifest.json # PWA 設定
└── versions/
└── config/ # config.js 的歷史版本

## 相關文件

- **`SCHEMA.md`**：`config.js` 的結構契約
- **`NOTES.md`**：pipeline 的運作方式、從哪裡開始
- **`preferences.md`**：我的旅遊偏好

## 技術架構
Grok Bot（規劃）
↓ HTTP POST（帶 X-Deploy-Secret）
Cloudflare Worker（驗證、存舊版、寫入 GitHub）
↓
GitHub repo
↓ 自動部署
App（顯示）

## 狀態

- ✅ App 前端完成
- ✅ Worker 完成
- ✅ 認證完成
- ✅ 版本管理完成
- ✅ 更新提示完成
- ⏳ 待驗證：Grok Bot 產出完整 `config.js` 的能力
- ⏳ 待驗證：Grok Bot 找當地特殊活動的能力

## 課金狀態

目前使用 Grok Bot 免費額度（已用完，7 天後補充）。
課金時機：真的要去旅行時。
