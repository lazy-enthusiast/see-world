# config.js 結構契約（Schema）

本文件定義 `config.js` 的結構（給人與 LLM 讀）。

| 角色 | 依循 |
|------|------|
| **Worker 驗證** | 以 `schema.json` 為準（機器契約） |
| **LLM 生成** | 本文件 + `schema.json`（語意與規則以本文件為準） |
| **前端渲染** | 本文件的「App 支援矩陣」＋下方 UI 行為規範 |

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
      address: "Kansai Airport",
      addressLocal: null,
      coords: [34.4347, 135.2329],
      tags: ["入境"],
      moodColor: "#333333",
      note: "...",
      phone: null,
      openHours: null,
      price: null,
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

- 整數：從**上車站**搭到**目的站**要經過幾站（下一站 = `1`）
- 不知道就填 `null`；App 有值才顯示「約 N 站」
- LLM 應查乘換案內／官方，勿瞎猜

### `transport.liveApi`（實時到站；可為 `null`）

**禁止**在 config 寫任何 `apiKey`／`token`／帶 key 的 URL。Key 只存在 Cloudflare Worker Secrets；App 殼跨旅行重用，每趟只換公開識別碼。

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
- **`liveApi`**：沒有真實站碼就填 `null`；有把握才填白名單內的 `provider` + `stopId`

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

### `nearEventId` 的用途

- 若有填，代表這個 Plan B **特別靠近某個行程點**
- UI 會在該行程卡片下方顯示「💡 附近備案」按鈕
- 點按鈕 → 切到靈感 tab → 自動 scroll 到該卡片 + 高亮
- LLM 生成時一律填 `null`

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

### 行程卡片

- 左側色條：優先 `moodColor`；若無，且 `cityId` 對得上 `CITIES[].id`，用該城 `color`；再否則用主題 accent
- 若有 `cityId` 且對得到城市：顯示城市名稱小標籤
- `status` 徽章：`confirmed` → 已確認；`pending` → 待定；`wishlist` → 願望（`confirmed` 可較低調）
- 若某個 `ITINERARY.items` 有 `INSPIRATIONS` 指向它（`nearEventId === item.id`），
  則在該卡片下方顯示一個小按鈕：`💡 附近備案 (N)`
- 點按鈕 → 切換到「靈感」tab → 篩選 `nearEventId` 相符的卡片 → 第一個 `scrollIntoView` + 加 `.highlight` class（背景短暫變色）

### 靈感 tab

- 篩選 chip：`全部` / `☔ 雨天` / `☕ 休息` / `📷 拍照` / `🍜 美食` / `🛍️ 購物` / `⏱️ 時間` / `🧍 獨旅`
- 每張卡片顯示：
  - `tag` badge
  - `title`
  - `note`
  - 若有 `nearEventId`：顯示「靠近：<行程標題>」

### 預算（資訊頁）

- 顯示 `BUDGET.estimates`（總額與分類）若存在
- 列出 `BUDGET.expenses`；若為空，可另彙總當日／全程 `ITINERARY.items[].cost` 作為參考
- `estimates` 與 `expenses` 皆空時顯示「尚未填寫預算」

### 更新提示

- Worker 寫入 `config.js` 時檔首必須有 `// buildTime: <時間>`
- App 優先比對 buildTime；缺該行時比對檔案內容 hash

### 交通 modal（資訊密度優先、層級清楚）

顯示重點（依序）：

1. **上車站**（`transport.from`）→ **目的站**（`transport.to`）
2. **幾站／車程**：`stopCount`（有才顯示）、`durationMin`
3. **候車／到站時刻**：有 `liveApi` 時顯示即將到站；並換算「約再等 N 分」；無 live 時可用行程 `time`／`openHours` 作建議班次
4. 營運商、路線、票價、上車點地址（次要、單行）
5. 備註（較短行距）

實時到站：

- 僅 `liveApi` 非 `null` 時打 Worker：`GET /transit?provider=&stopId=…`
- 回傳 `arrivals[{ time, dest, delayMin, platform }]`
- modal 開啟時依 `refreshSec` 輪詢；關閉即停

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
12. **`INSPIRATIONS` 的 `nearEventId` 一律 `null`**
13. **金額一律用數字**，`price` 字串只用於純顯示
14. **`liveApi` 預設 `null`**；僅在查到真實 `stopId` 時填寫；`provider` 必須在白名單
15. **禁止**輸出 `apiKey`、`token`、`secret`、或把 key 拼進 URL／`endpoint`
16. **不要**再填自由字串 `endpoint`（已廢止）；改用 `provider` + `stopId`
17. **`stopCount`**：查得到就填整數（下一站 = 1）；查不到填 `null`，禁止亂填

---

## 版本

- v1.0 — 2026-09-27 — 初版
- v1.1 — 2026-09-27 — `alternatives` 併入 `INSPIRATIONS`；`nearEventId`；`tag` 改情境
- v1.2 — 2026-10-18 — 明訂 `schema.json` 為機器契約；補 App 支援矩陣（BUDGET／CITIES／status／更新檢測）
- v1.3 — 2026-10-18 — `liveApi` 改為 provider+stopId；`TRANSIT_CONFIG`；禁止 key 進 config
- v1.4 — 2026-10-18 — `stopCount`；交通 modal 強調上車站／候車／幾站
