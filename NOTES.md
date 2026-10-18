# NOTES.md

> 這份文件是給「未來的我」看的。
> 旅行 App 這條 pipeline 已經完成，但可能擱置數週或數月。
> 下次回來時，從這裡開始。

---

## 這個專案是什麼

一個**純前端的旅行 App**，加上一條**自動化部署 pipeline**。

- **App**：顯示行程（單一 HTML 檔 + config.js）
- **Grok Bot**：規劃行程、查機票、產出 config.js
- **Worker**：接收 Grok Bot 的部署請求，寫入 GitHub
- **GitHub**：儲存 config.js，自動部署到 GitHub Pages

---

## 架構圖
我（PM）
↓ 需求、偏好、反饋
Grok Bot（規劃、查資料、產出 config.js）
↓ HTTP POST（帶 X-Deploy-Secret）
Cloudflare Worker（驗證、存舊版、寫入 GitHub）
↓
GitHub repo（lazy-enthusiast/see-world）
↓ 自動部署
我的 App（顯示 config.js）

---

## 關鍵網址與位置

| 項目 | 位置 |
|------|------|
| App | https://lazy-enthusiast.github.io/see-world/ |
| GitHub repo | https://github.com/lazy-enthusiast/see-world |
| Worker | https://see-world-worker.davchan-clp.workers.dev |
| Cloudflare dashboard | https://dash.cloudflare.com |
| xAI console | https://console.x.ai |

---

## 關鍵設定與 secret

**Worker 的 secret：`DEPLOY_SECRET`**
- 存在 Cloudflare → Workers → see-world-worker → Settings → Variables and Secrets
- 值：我設定的隨機字串（存在密碼管理器）

**Worker 的環境變數：`GITHUB_TOKEN`**
- 存在 Cloudflare 同上位置
- 是 GitHub fine-grained PAT，名稱 `see-world-worker-deploy`
- 權限：`lazy-enthusiast/see-world` 的 Contents: Read and write
- 到期日：2026-12-26（過期前要重建）

**Grok Bot 需要知道的：**
- Worker 網址
- `X-Deploy-Secret` 的值（存在 Grok Bot 對話裡）

---

## 這條 pipeline 怎麼運作

### 我（PM）要做的事

1. **開 Grok Bot 對話**
2. **給它 preferences.md 和 SCHEMA.md**
3. **告訴它這次的任務**（目的地、天數、出發日）
4. **它出 proposal → 我給意見 → 它修改**
5. **我滿意後，它產出 config.js**
6. **它呼叫 Worker 部署**
7. **App 下拉重整，看到新行程**

### Grok Bot 呼叫 Worker 的格式
```
POST https://see-world-worker.davchan-clp.workers.dev/deploy
Headers:
  Content-Type: application/json
  X-Deploy-Secret: <從密碼管理器／Grok 對話取得，勿寫進 repo>
Body:
{
  "path": "config.js",
  "content": "完整檔案內容",
  "message": "auto: update config.js for Osaka"
}
```

**回傳**：`{ ok: true, path, commit, url }`

> ⚠️ **絕對不要**把真實 `X-Deploy-Secret` 寫進本檔或任何會推上 GitHub 的文件。
> 此 repo 為公開；舊 commit 若曾洩漏 secret，應在 Cloudflare 輪換 `DEPLOY_SECRET`。

---

## config.js 的結構（重點）

完整的結構見 `SCHEMA.md`。這裡只列重點：

- `THEME_CONFIG`：主題配色
- `CONFIG`：旅程 meta（startDate、duration、travelers、buildTime）
- `DESTINATION`：主要目的地，**必須有 `slug`**（例如 `"kyoto"`）
- `CITIES`：多城市陣列
- `TRIP_INFO`：航班、住宿、簽證、緊急聯絡
- `ITINERARY`：扁平 timeline（所有行程點）
- `INSPIRATIONS`：Plan B 池
- `DAILY_EXTRAS`：每日購物清單
- `BUDGET`：預算
- `PHRASE_DATA`：常用短語

**關鍵規則**：
- `DESTINATION.slug` 必填（全小寫、連字號分隔）
- 交通要獨立成 `type: "transport"`
- 每個 item 的 `id` 由程式生成，LLM 不編

---

## 版本管理

**Worker 會自動存舊版 config.js 到 `versions/config/`**：
versions/config/{slug}-{YY-MM-DD-HHMM}.js

- `slug`：從 `DESTINATION.slug` 讀
- 時間戳：香港時間（HKT）
- 檔名範例：`kyoto-26-09-27-1430.js`

**preferences.md 不存版本**（直接覆蓋）。

---

## 更新提示機制

**App 啟動時會自動檢查 config.js 有沒有更新：**

- Worker **必須**在每次寫入 `config.js` 時，於檔案開頭加一行 `// buildTime: <時間>`（硬條件，不可省略）
- App 啟動時 fetch 最新 config.js：優先比對 `buildTime`；若沒有該行，則改比對檔案內容 hash
- 如果不同，顯示「有新版本，請下拉重整」

---

## 待辦事項（下次回來時）

### 必須做

- [ ] **確認 GitHub token 還在有效期內**（2026-12-26 到期）
- [ ] **確認 Worker 的 secret 還記得**（在密碼管理器；勿寫進本檔）
- [ ] **若 secret 曾出現在公開 commit，到 Cloudflare 輪換 `DEPLOY_SECRET`**

### 想做的

- [x] **Grok Bot 可自行產出 config.js 並經 Worker 部署／歸檔**（2026-10-18 已接上）
- [ ] **實戰驗證：大阪二月行程產出品質**（含當地特殊活動、節奏是否夠緊）
- [ ] **決定是否課金 Grok Bot / Cursor Pro**
  - 課金時機：真的要去旅行時

### 未解的問題

- [ ] **Grok Bot 規劃「不夠緊湊」**
  - 它排得安全，但不夠有驚喜
  - 已寫進 preferences.md，待實戰驗證

---

## 重要決策記錄

| 日期 | 決策 | 理由 |
|------|------|------|
| 2026-09-27 | 規劃在 Grok Bot 做，App 只顯示 | 分離「規劃」與「顯示」 |
| 2026-09-27 | Worker 加 X-Deploy-Secret 認證 | 避免網址洩漏被濫用 |
| 2026-09-27 | config.js 存舊版到 versions/config/ | 可回溯 |
| 2026-09-27 | preferences.md 直接覆蓋，不存版本 | 只做加法，手動刪即可 |
| 2026-09-27 | 版本檔名用 `{slug}-{YY-MM-DD-HHMM}` | HKT 時間、slug 識別 |
| 2026-09-27 | DESTINATION 加 slug 欄位 | 檔名、agent 識別用 |
| 2026-10-18 | 公開文件不再寫真實 Deploy Secret | 此 repo 公開，secret 只留密碼管理器／Bot 對話 |
| 2026-10-18 | `schema.json` 為 Worker 機器契約；`SCHEMA.md` 為人／Bot 說明 | 避免雙份契約漂移 |
| 2026-10-18 | App 補齊 BUDGET／CITIES／status 顯示；更新檢測加 hash fallback | 契約與畫面一致 |

---

## 契約來源（給 Bot／未來的我）

| 檔案 | 角色 |
|------|------|
| `schema.json` | **機器契約**：Worker 驗證以此為準 |
| `SCHEMA.md` | **人類／Bot 說明**：欄位語意、LLM 規則、UI 行為；須與 `schema.json` 同步 |
| `preferences.md` | 旅遊偏好（最高優先參考） |

---

## 下次從哪裡開始

**如果我 3 個月後回來，第一件事：**

1. 打開 `https://lazy-enthusiast.github.io/see-world/` 確認 App 還活著
2. 打開 Cloudflare dashboard 確認 Worker 還活著
3. 打開 Grok Bot 對話，確認 secret 還在（密碼管理器）
4. 確認 GitHub PAT 未過期（2026-12-26）
5. 看 `preferences.md` 和 `SCHEMA.md` 有沒有要更新的
6. **然後，開始規劃下一趟旅行**

---

*最後更新：2026-10-18*
