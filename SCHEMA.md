# config.js 結構契約（Schema）

本文件定義 `config.js` 的結構（給人與 LLM 讀）。

| 角色 | 依循 |
|------|------|
| **Worker 驗證** | 以 `schema.json` 為準（機器契約） |
| **LLM 生成** | 本文件 + `schema.json`，並讀兩份規劃檔（見下） |
| **前端渲染** | 本文件的「App 支援矩陣」＋下方 UI 行為規範。App **不**顯示 `trips/` |

規劃時讀兩份檔：

- `preferences.md`：Dav 的長期偏好（所有旅程，角色不變）
- `trips/<city>-<YYYY-MM>.md`：只記這一趟的決定與調整（例 `trips/osaka-2027-02.md`；規則見 `trips/README.md`）

兩份都要讀。**這一趟若有衝突，`trips/` 覆蓋 `preferences.md`**，而且只對該趟有效。

修改契約時：**先改 `schema.json`，再同步本文件**，避免兩邊漂移。

---

## 頂層區塊

| 變數 | 用途 | 可為空 | App 是否渲染 |
|---|---|---|---|
| `THEME_CONFIG` | 主題配色與字體 | ❌ | ✅ |
| `CONFIG` | 旅程 meta（日期、旅伴、貨幣） | ❌ | ✅ |
| `DESTINATION` | 主要目的地 / 起點 | ❌ | ✅ |
| `CITIES` | 多城市列表 | ✅（單城可留空陣列） | ✅（卡片城市標籤／色條） |
| `TRIP_INFO` | 航班、住宿、簽證、緊急聯絡 | ✅ | ✅ |
| `ITINERARY` | 扁平 timeline（核心） | ❌ | ✅（含 `status` 徽章） |
| `INSPIRATIONS` | Plan B 池（替代方案） | ✅ | ✅ |
| `DAILY_EXTRAS` | 每日購物清單 | ✅ | ✅ |
| `BUDGET` | 預算預估與實際花費 | ✅ | ✅（資訊頁） |
| `PHRASE_DATA` | 常用短語 | ✅ | ✅ |
| `TRANSIT_CONFIG` | 本趟用到的到站 provider 宣告（無 key） | ✅ | ❌（除錯用；殼不依賴） |

---

## 1. THEME_CONFIG

```js
const THEME_CONFIG = {
  accentColor: "#000000",
  accentText: "#FFFFFF",
  backgroundColor: "#FFFFFF",
  cardColor: "#F9F9F9",
  textColor: "#111111",
  textSubColor: "#777777",
  borderColor: "#EEEEEE",
  googleFontsUrl: "https://...",
  fontHeading: '"Noto Sans JP", sans-serif',
  fontBody: '"Noto Sans JP", sans-serif'
};
```

所有值皆為 CSS 合法字串。

---

## 2. CONFIG

```js
const CONFIG = {
  ui: {
    browserTitle: "Kyoto Solo Trip",
    headerTitle: "KYOTO <span>SOLO</span>",
    homeTimezone: "Asia/Hong_Kong",
    homeTimeLabel: "HKG"
  },
  startDate: "2026-05-15",     // ISO 8601
  duration: 5,                  // 天數
  travelers: {
    type: "solo",               // solo | couple | family | group
    count: 1,
    note: ""
  },
  baseCurrency: "HKD",
  tripCurrency: "JPY"
};
```

---

## 3. DESTINATION + CITIES

```js
const DESTINATION = {
  name: "京都 Kyoto",      // 顯示用（人類看）
  slug: "kyoto",           // 🆕 識別用（全小寫、連字號分隔、無空白）
  lat: 35.0116,
  lon: 135.7681,
  timezone: "Asia/Tokyo",
  currency: "jpy",
  currencyLabel: "JPY",
  baseCurrency: "HKD"
};

const CITIES = [
  {
    id: "osaka",                // slug，全小寫
    name: "大阪 Osaka",
    lat: 34.6937,
    lon: 135.5023,
    timezone: "Asia/Tokyo",
    days: [1],
    color: "#E8A33D"
  }
];
```

- `DESTINATION` 代表**主要 / 起點**。
- `CITIES` 可為空陣列（單城旅行）。

### slug 規則

- 全小寫
- 只含英文字母、數字、連字號
- 不能有空白、中文、特殊符號
- 用途：檔名、版本管理、agent 識別
- **必填**：不存在時 Worker 會拒絕部署

---

## 4. TRIP_INFO

```js
const TRIP_INFO = {
  visa: { type, number, note, expiry },
  flights: [
    { type, flight, date, dep, arr, note, bookingRef }
  ],
  hotels: [
    { cityId, name, address, phone, checkIn, checkOut, bookingRef }
  ],
  emergency: [
    { name, phone }
  ]
};
```

---

## 5. ITINERARY（核心）

```js
const ITINERARY = {
  items: [
    {
      id: "evt_a1b2c3d4",
      day: 1,
      time: "15:10",            // "HH:MM" 或 null
      timeHint: null,           // morning | afternoon | evening | night | null
      type: "arrival",          // 見下方 type 表
      title: "抵達關西機場",
      cityId: "osaka",
      address: "Kansai Airport",           // Latin／英文簡稱或可讀地址
      addressLocal: "大阪府泉佐野市泉州空港北1 関西国際空港 第1ターミナル", // 當地語詳細地址（Maps 優先）
      coords: [34.4347, 135.2329],
      tags: ["入境"],
      moodColor: "#333333",
      note: "...",
      phone: null,
      whatsapp: null,           // 國碼電話；App → wa.me（查不到填 null）
      line: null,               // @id 或 https://line.me/…（查不到填 null）
      messenger: null,          // m.me 帳號或 URL（查不到填 null）
      openHours: null,
      price: null,
      website: null,            // 評論 App／官網 URL（modal「APP/網站」＋名稱）；勿寫進 note
      cost: { amount: 0, currency: "JPY", category: "other" },
      status: "confirmed",      // confirmed | pending | wishlist
      source: "user"            // user | ai | ai-edited
    },

    {
      id: "trp_e5f6g7h8",
      day: 1,
      time: "16:14",
      type: "transport",
      title: "Haruka 特急",
      // ... 其他欄位同上
      transport: {
        mode: "train",
        from: "Kansai Airport Station",
        to: "Kyoto Station",
        fromEventId: null,
        toEventId: null,
        operator: "JR West",
        line: "Haruka",
        durationMin: 75,
        stopCount: null,  // 上車到目的地要搭幾站；不知則 null
        liveApi: null   // 或見下方 liveApi 形狀；無可靠 ID 時保持 null
      }
    }
  ]
};
```

### `transport.stopCount`

- **必填鍵**：每個 `transport` 物件都要有，值為整數或 `null`（不可整段省略）
- 整數：從**上車站**搭到**目的站**要經過幾站（下一站 = `1`）
- 不知道就填 `null`；App 有正整數才顯示「搭 N 站」
- LLM 應查乘換案內／官方，勿瞎猜

### `transport.liveApi`（保留欄位；App 不再顯示）

交通 modal **不**預留「下一班」區塊，也**不**呼叫到站 API。到站後現場等。請把 `liveApi` 填 `null`，不必為了畫面查 `stopId`。

欄位仍留在契約裡，舊 config 不用改格式。**禁止**在 config 寫任何 `apiKey`／`token`／帶 key 的 URL。

```js
liveApi: {
  provider: "odpt",              // 必須在下方白名單
  stopId: "odpt.Station:OsakaMetro.Midosuji.Umeda",
  lineId: null,                  // 可選，依 provider
  direction: null,               // 可選
  refreshSec: 60                 // modal 開啟時輪詢間隔；預設 60
}
```

#### provider 白名單（殼已實作／預留）

| provider | 用途 | stopId 怎麼來 | Worker Secret |
|----------|------|---------------|---------------|
| `odpt` | 日本公共交通開放資料中心（含大阪 Metro 等有上架者） | [ODPT 開發者／目錄](https://developer.odpt.org/) 查 `odpt.Station:…` | `TRANSIT_ODPT_KEY` |
| `mock` | 僅 UI／離線測試，回傳假到站 | 任意字串即可 | 不需要 |

之後新城市：先在 Worker 加 Secret + 程式分支，再把新 `provider` 名加入本表與 `schema.json`。

### 可選頂層 `TRANSIT_CONFIG`

```js
const TRANSIT_CONFIG = {
  providers: ["odpt"]   // 本趟實際會用到的 provider；仍不含 key
};
```

### 交通的 `from` / `to` 設計原則

- **`from` / `to`（字串）為必填**
- **`fromEventId` / `toEventId`（id）為可選**
- LLM 生成時，id 欄位一律 `null`
- **`liveApi`**：一律填 `null`。App 不顯示下一班、不接實時到站

### `type` 允許值

`arrival` | `departure` | `transport` | `food` | `sight` | `hotel` | `shop` | `rest` | `note`

### 排序規則

1. 按 `day` 升序
2. 按 `time` 升序
3. `time` 為 `null` 者放最後
4. 同 `time` 者按 `type` 優先級：`transport` → `food` → `sight` → `shop` → `rest` → `note`

---

## 6. INSPIRATIONS（Plan B 池）

```js
const INSPIRATIONS = [
  {
    id: "ins_x1y2z3",
    title: "京都國立博物館",
    tag: "RAINY",                    // 見下方 tag 表
    note: "如果不去 Lisn，走路 5 分鐘可到。",
    type: "sight",                   // 沿用 ITINERARY 的 type 表
    cityId: null,
    address: "京都市東山区茶屋町527",
    addressLocal: null,
    coords: [34.9900, 135.7728],
    nearEventId: "evt_d2_03",        // 可選，靠近哪個行程點
    status: "wishlist",              // wishlist | done | skipped
    source: "user"                   // user | ai | ai-edited
  }
];
```

### `tag` 允許值（情境標籤）

| tag | 情境 |
|---|---|
| `RAINY` | 下雨時 |
| `TIRED` | 累了時 |
| `PHOTO` | 想拍照時 |
| `FOOD` | 想吃東西時 |
| `SHOP` | 想購物時 |
| `TIME` | 時間不夠 / 太多時 |
| `SOLO` | 一個人特別適合 |

### `nearEventId` 的用途（請填，方便連到後備）

- 若有填，代表這個 Plan B **特別靠近某個行程點**
- UI 會在該行程卡片下方顯示「附近備案」按鈕
- 點按鈕 → 切到靈感 tab（對應日）→ 自動 scroll 到該卡片 + 高亮
- 靈感卡也會顯示「靠近：\<該行程標題\>」
- **依日歸屬**：有 `nearEventId` 時，用對應 `ITINERARY.items[].day` 決定屬於哪一天；`null` 或 id 找不到 →「未分日」
- App 靈感 tab **跟隨頂部日期選擇器**（與時間軸／購物同一 `selectDay`），只顯示當日備案；**不在列表內重複寫「Day N／日期」**（日期已在選擇器標示）
- **應填**：同一份 `config.js` 裡已存在的 `ITINERARY.items[].id`（例如 `"evt_d2_05"`）
- **填 `null`**：沒有明確靠近的行程點時
- **禁止**編造不存在的 id

---

## 7. DAILY_EXTRAS

```js
const DAILY_EXTRAS = {
  "1": { shopping: ["大瓶礦泉水", "泡澡粉"] },
  "2": { shopping: ["Lisn 線香禮盒"] }
};
```

> key 為 `day` 數字的**字串**。僅包含購物清單。

---

## 8. BUDGET

```js
const BUDGET = {
  categories: ["transport", "food", "hotel", "shop", "ticket", "other"],
  estimates: {
    total: 50000,
    currency: "JPY",
    byCategory: { transport: 12000, food: 15000 }
  },
  expenses: [
    {
      id: "exp_x1y2z3",
      day: 1,
      title: "Haruka 車票",
      amount: 3600,
      currency: "JPY",
      category: "transport",
      note: null,
      timestamp: "2026-05-15T07:14:00Z"
    }
  ]
};
```

---

## 9. PHRASE_DATA

```js
const PHRASE_DATA = [
  {
    category: "購物",
    items: [
      { term_primary, term_secondary, term_pronounce }
    ]
  }
];
```

---

## UI 行為規範

### `address`／`addressLocal`（Maps 與顯示）

| 欄位 | 用途 |
|------|------|
| `address` | Latin／英文可讀地址或簡稱 |
| `addressLocal` | **當地語詳細地址**（日文漢字地址、樓層、のりば等）— Google Maps 導航與 modal「地址」**優先用此欄**；無則退回 `address` |

時間軸非交通卡右側地圖 icon、modal 地址列／地圖按鈕、交通 modal 上車點地圖：皆 `addressLocal || address`。

### 行程卡片

- 左側色條：優先 `moodColor`；若無，且 `cityId` 對得上 `CITIES[].id`，用該城 `color`；再否則用主題 accent
- 若有 `cityId` 且對得到城市：顯示城市名稱小標籤
- `status` 徽章：`confirmed` → 已確認；`pending` → 待定；`wishlist` → 願望（`confirmed` 可較低調）
- **時間軸標題**：顯示時剝除括號內當地語名稱（`Foo（バー）`／`Foo (バー)` → `Foo`）；**modal 標題保留完整 `title`**（可含日文括號）
- 若某個 `ITINERARY.items` 有 `INSPIRATIONS` 指向它（`nearEventId === item.id`），
  則在該卡片下方顯示一個小按鈕：`💡 附近備案 (N)`
- 點按鈕 → 切換到「靈感」tab → 篩選 `nearEventId` 相符的卡片 → 第一個 `scrollIntoView` + 加 `.highlight` class（背景短暫變色）

### 靈感 tab

- **分日方式與正式行程相同**：頂部日期選擇器選哪天，靈感池就只顯示那天的備案（`nearEventId` → 該行程 `day`）。換日期時與時間軸／購物一併更新（`selectDay`）
- **不**在靈感列表上方再放「Day N · 日期」之類標題（避免與日期選擇器重複）
- 篩選 chip：`全部` / `☔ 雨天` / … / `🧍 獨旅`（在**當日**之內再篩 tag）；另有「未分日」（無／無效 `nearEventId`）
- 當日無備案 →「本日無備案」；未分日為空 →「沒有未分日的備案」
- 每張卡片顯示：
  - `tag` badge
  - `title`（時間軸規則：去括號當地語別名）
  - `note`
  - 若有 `nearEventId` 且對得到行程：顯示「靠近：<行程標題>」

### 預算（資訊頁）

- 顯示 `BUDGET.estimates`（總額與分類）若存在
- 列出 `BUDGET.expenses`；若為空，可另彙總當日／全程 `ITINERARY.items[].cost` 作為參考
- `estimates` 與 `expenses` 皆空時顯示「尚未填寫預算」

### 更新提示

- Worker 寫入 `config.js` 時檔首必須有 `// buildTime: <時間>`
- App 優先比對 buildTime；缺該行時比對檔案內容 hash

### 時間軸交通列（收合）

- `type === "transport"` 用**收合列**：時間 + 圖示 + `from → to`（+ 可選車程分鐘）
- 顯示標題優先為 **`前往{transport.to}`**（config 的 `title` 作 tooltip／後備）
- 目的是讓主行程（景點／餐）更醒目；細節進 modal

### Modal 四種任務版面（同一 bottom sheet）

App 依 `type` 選版面（不是四個獨立 modal）：

| 版面 | `type` | 顯示重點 |
|------|--------|----------|
| **交通** | `transport` | `前往{to}`；上車站（地圖 icon）→ 目的地；車程／站數；票價／營運商。不顯示下一班、不接實時 API（到站後現場等）。時間只在時間線。備註一律展開 |
| **航班／閘口** | `arrival`、`departure` | **地址**（優先 `addressLocal`）＋地圖；**聯絡**（撥號＋WhatsApp／LINE／Messenger icon）；備註展開。時間在時間線。無預算欄 |
| **用餐** | `food` | **地址**（優先 `addressLocal`）；**預算**欄；**開放時間**欄；**聯絡**＋**APP/網站**同列兩欄（`website`：依 host 顯示 Tabelog／OpenRice／host 等）；備註展開並列推薦菜；底部可「搜尋預約信」 |
| **到訪** | `sight`、`shop`、`hotel`、`rest`、`note` | **地址**（優先 `addressLocal`）；可選開放時間；**聯絡**（有 `website` 時與 **APP/網站** 同列兩欄）；`hotel` 可有的士卡＋Gmail |

時間線上的交通列**不**再顯示右側地圖 icon（地圖改在 modal 上車點）。

#### 交通版面細節

1. 類型標籤 = `mode`；標題 = **`前往{to}`**
2. 上車站下方小字：**優先月台**（從 `note`／`address` 擷取「N 號月台」）＋清理後的 `line`（**去掉**「往××」等方向字）；無月台才只顯示線路名／上車點
3. 車程只寫 `durationMin`／`stopCount`，不重複起訖站
4. **不要**在 modal 寫下一班、候車倒數或實時到站。到站後現場等。`time` 只給時間線
5. 備註：**略過【路線】／【交通】**；剝除 Yahoo!／官方時刻表字樣；保留【上車】【下車】【車資】【備案】。**一律展開**（不摺疊）

#### 聯絡欄位（景點／店家／餐廳）

Research 時**主動查找**店家公開聯絡管道：**電話、WhatsApp、LINE、Messenger**（或官方一鍵傳訊連結）。查到就填對應 schema 欄位；**禁止**把電話／傳訊帳號／連結塞進 `note`。

| 欄位 | 填法 | App 行為（「聯絡」列） |
|------|------|----------|
| `phone` | 可撥打號碼 | 撥號 icon（可旁顯示號碼） |
| `whatsapp` | 含國碼電話（`+81…` 或純數字） | WhatsApp icon → `wa.me` |
| `line` | `@帳號` 或 `https://line.me/…` | LINE icon |
| `messenger` | 粉專 username 或 `https://m.me/…` | Messenger icon |
| 查不到 | 該欄填 `null`（勿瞎猜） | 不顯示該 icon |

#### 用餐欄位

- `price`／`cost` → UI「預算」
- `openHours` → UI「開放時間」
- `website` → UI 標題固定「**APP/網站**」；下方短文依 **URL host** 顯示 App 名或 host（例：`tabelog.com`→「Tabelog」；`openrice.com`→「OpenRice」；其他已知評論／訂位站類似；一般官網→ host；無法解析→「開啟網頁」）。與「聯絡」同列兩欄。點擊：Tabelog 優先 deep link／Intent，OpenRice 盡量走 App／https，其餘開網頁。**URL 只放 `website`，勿寫進 `note`**
- `note`：**精簡**——列**推薦菜目**與必要實用提示即可；**不要**把評論站 URL、電話、WhatsApp／LINE／Messenger、長評分檔塞進 `note`

給 LLM：`line`（交通線路）可寫「谷町線」或含月台；方向放 note。店家 `line`（LINE 帳號）與交通 `transport.line` 是不同欄位。

---

## LLM 生成規則

1. **只輸出 JSON**，不要 markdown 圍欄，不要解釋
2. **不要編 `id`**——留給 Worker 生成
3. **不要編 `coords`**——沒有真實資料就填 `null`
4. **`type` 只能從允許值選**
5. **`tag` 只能從允許值選**
6. **`status` 預設 `pending`**（items）或 `wishlist`（inspirations）
7. **`source` 一律填 `"ai"`**
8. **`day` 從 1 開始，相對出發日**
9. **所有必填欄位不能省**（即使值 `null`）
10. **交通一定要獨立成 `type: "transport"`**
11. **交通的 `from` / `to` 必填字串；`fromEventId` / `toEventId` 一律 `null`**
12. **`INSPIRATIONS.nearEventId`**：有明確靠近的行程就填該 item 的 `id`（必須已存在於 `ITINERARY.items`）；沒有就填 `null`——**這是「附近備案」按鈕的依據，有就填，勿一律留空**
13. **金額一律用數字**，`price` 字串只用於純顯示
14. **`liveApi` 一律 `null`**。App 不顯示下一班、不接實時到站；不必查 `stopId`
15. **禁止**輸出 `apiKey`、`token`、`secret`、或把 key 拼進 URL／`endpoint`
16. **不要**再填自由字串 `endpoint`（已廢止）；改用 `provider` + `stopId`
17. **每個 `transport` 必須含 `stopCount` 鍵**（不可省略）：查得到填整數（下一站 = `1`）；查不到填 `null`，禁止亂填或省略欄位
18. **`transport.line`**：以線路名為主（可含月台）；**避免**把「（往××）」「往××方向」當主要字串——方向放 note 即可
19. **交通 `note`**：**不要**用【路線】重述 from／to／line／班次（App UI 已顯示）；**不要**寫「Yahoo! 乘換案內」「官方時刻表」等來源標註；優先【上車】（含**月台**）／【下車】／【車資】／【備案】；**不要**硬性規定必須搭某一班——`time` 僅作時間線參考
20. **`phone`／`whatsapp`／`line`／`messenger`**：research 景點／店家／餐廳時**查找**公開電話與傳訊管道；查到填欄位、查不到填 `null`；禁止捏造；**禁止**寫進 `note`
21. **`food`**：務必填 `price`（或 `cost`）與 `openHours`（查不到填 `null`）；`note` 只列推薦菜／精簡實用提示
22. **`addressLocal`**：景點／店家／酒店／上車站盡量填**當地語詳細地址**（給 Google Maps）；`address` 可放 Latin／英文。App 導航優先 `addressLocal`
23. **`title`**：時間軸會剝掉括號當地語（如 `（マヅラ喫茶店）`）；日文店名可放括號內供 modal 顯示，或乾脆只寫中文／英文主標題、日文詳址放 `addressLocal`
24. **`website`**：餐廳優先填當地評論／訂位 App URL（日本 → Tabelog；香港 → OpenRice；其餘依目的地常見站）或官網；查不到填 `null`。**禁止**把評論站／官網連結寫進 `note`——URL 只放 `website`（UI 標題「APP/網站」，下方顯示 App 名或 host）

---

## 版本

- v1.0 — 2026-09-27 — 初版
- v1.1 — 2026-09-27 — `alternatives` 併入 `INSPIRATIONS`；`nearEventId`；`tag` 改情境
- v1.2 — 2026-10-18 — 明訂 `schema.json` 為機器契約；補 App 支援矩陣（BUDGET／CITIES／status／更新檢測）
- v1.3 — 2026-10-18 — `liveApi` 改為 provider+stopId；`TRANSIT_CONFIG`；禁止 key 進 config
- v1.4 — 2026-10-18 — `stopCount`；交通 modal 強調上車站／候車／幾站
- v1.5 — 2026-10-19 — 收合交通列／「前往」標題；modal 去重；上車小字用 line／address
- v1.6 — 2026-10-19 — 修正：`nearEventId` 應填真實行程 id（啟用附近備案），非一律 null
- v1.7 — 2026-10-19 — Modal 四版面：交通／閘口／用餐／到訪
- v1.8 — 2026-10-19 — 上車小字優先月台；note 去【路線】／Yahoo 來源；Grok 規則 18–19
- v1.9 — 2026-10-19 — Modal 去時間；下一班候車；備註展開；WhatsApp／LINE／Messenger；用餐預算／開放時間
- v1.10 — 2026-10-19 — 時間軸標題去括號當地語；Maps／modal 地址優先 `addressLocal`
- v1.11 — 2026-10-19 — `website` 用餐網址／Tabelog；Grok：note 勿塞評論站 URL
- v1.12 — 2026-10-19 — 用餐「聯絡」合併電話＋傳訊；「App」列依 host 顯示跳轉目標；Grok research 聯絡欄位勿塞 note
- v1.13 — 2026-10-19 — 靈感池依 `nearEventId`→`day` 分日；無／無效 id →「未分日」
- v1.14 — 2026-10-19 — 靈感池跟日期選擇器；去掉列表內重複日期標題
- v1.15 — Oct 21, 2026 — 規劃讀 `preferences.md`＋`trips/<city>-<YYYY-MM>.md`；單趟備註覆蓋長期偏好
- v1.16 — Oct 21, 2026 — 交通 modal 不顯示下一班、不接實時到站；`website` 標題改「APP/網站」
