# config.js 結構契約（Schema）

本文件定義 `config.js` 的結構。
- **前端（index.html）** 依此渲染。
- **LLM** 依此生成。
- **Worker** 依此驗證。

---

## 頂層區塊

| 變數 | 用途 | 可為空 |
|---|---|---|
| `THEME_CONFIG` | 主題配色與字體 | ❌ |
| `CONFIG` | 旅程 meta（日期、旅伴、貨幣） | ❌ |
| `DESTINATION` | 主要目的地 / 起點 | ❌ |
| `CITIES` | 多城市列表 | ✅（單城可留空陣列） |
| `TRIP_INFO` | 航班、住宿、簽證、緊急聯絡 | ✅ |
| `ITINERARY` | 扁平 timeline（核心） | ❌ |
| `INSPIRATIONS` | Plan B 池（替代方案） | ✅ |
| `DAILY_EXTRAS` | 每日購物清單 | ✅ |
| `BUDGET` | 預算預估與實際花費 | ✅ |
| `PHRASE_DATA` | 常用短語 | ✅ |

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
        liveApi: null
      }
    }
  ]
};
```

### 交通的 `from` / `to` 設計原則

- **`from` / `to`（字串）為必填**
- **`fromEventId` / `toEventId`（id）為可選**
- LLM 生成時，id 欄位一律 `null`

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

### 行程卡片 → 附近備案

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

---

## 版本

- v1.0 — 2026-09-27 — 初版
- v1.1 — 2026-09-27 — `alternatives` 併入 `INSPIRATIONS`；`nearEventId`；`tag` 改情境
