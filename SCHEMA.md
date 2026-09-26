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
| `DAILY_EXTRAS` | 每日靈感與購物清單 | ✅ |
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
  travelers: {                  // 🆕
    type: "solo",               // solo | couple | family | group
    count: 1,
    note: ""                    // 例：「帶長輩，節奏要慢」
  },
  baseCurrency: "HKD",          // 🆕
  tripCurrency: "JPY"           // 🆕
};
```

---

## 3. DESTINATION + CITIES

```js
const DESTINATION = {
  name: "京都 Kyoto",
  lat: 35.0116,
  lon: 135.7681,
  timezone: "Asia/Tokyo",
  currency: "jpy",
  currencyLabel: "JPY",
  baseCurrency: "HKD"
};

const CITIES = [                // 🆕
  {
    id: "osaka",                // slug，全小寫
    name: "大阪 Osaka",
    lat: 34.6937,
    lon: 135.5023,
    timezone: "Asia/Tokyo",
    days: [1],                  // 哪幾天在這
    color: "#E8A33D"            // 可選，UI 標記用
  }
];
```

- `DESTINATION` 代表**主要 / 起點**，保留原有欄位。
- `CITIES` 可為空陣列（單城旅行）。

---

## 4. TRIP_INFO

```js
const TRIP_INFO = {
  visa: {
    type: "日本短期滯在",
    number: "VJW-TEST-001",
    note: "已截圖保存",
    expiry: null                // 可空
  },
  flights: [
    {
      type: "去程",             // 去程 | 回程 | 中段
      flight: "CX506",
      date: "05/15",
      dep: "HKG 10:20",
      arr: "KIX 15:10",
      note: "...",
      bookingRef: "TEST-PNR"
    }
  ],
  hotels: [
    {
      cityId: "kyoto",          // 🆕 對應 CITIES
      name: "Dormy Inn ...",
      address: "...",
      phone: "+81753715489",
      checkIn: "2026-05-15",    // 可選
      checkOut: "2026-05-19",   // 可選
      bookingRef: null
    }
  ],
  emergency: [
    { name: "警察局", phone: "110" }
  ]
};
```

---

## 5. ITINERARY（核心）

```js
const ITINERARY = {
  items: [
    // ---------- 一般行程點 ----------
    {
      id: "evt_a1b2c3d4",       // 由程式生成，不可由 LLM 編
      day: 1,                   // 相對天數，從 1 開始
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
      price: null,              // 顯示用字串，如 "¥1,200"
      cost: {                   // 預估花費
        amount: 0,
        currency: "JPY",
        category: "other"       // transport | food | hotel | shop | ticket | other
      },
      status: "confirmed",      // confirmed | pending | wishlist
      source: "user"            // user | ai | ai-edited
    },

    // ---------- 交通環節（獨立 entity） ----------
    {
      id: "trp_e5f6g7h8",
      day: 1,
      time: "16:14",
      type: "transport",
      title: "Haruka 特急",
      transport: {
        mode: "train",          // train | bus | subway | taxi | walk | ferry | flight
        from: "Kansai Airport Station",   // 必填，人類可讀字串
        to: "Kyoto Station",              // 必填，人類可讀字串
        fromEventId: null,      // 可選，程式事後填
        toEventId: null,        // 可選，程式事後填
        operator: "JR West",
        line: "Haruka",
        durationMin: 75,
        liveApi: {              // 可選，即時資料來源
          provider: "jr-west",
          endpoint: "https://...",
          refreshSec: 60
        }
      },
      note: "...",
      cost: { amount: 3600, currency: "JPY", category: "transport" },
      status: "confirmed",
      source: "user"
    }
  ]
};
```

### 交通的 `from` / `to` 設計原則

- **`from` / `to`（字串）為必填**：這是 LLM 唯一能生成的欄位，也是人類可讀的依據。
- **`fromEventId` / `toEventId`（id）為可選**：
  - LLM 生成時一律填 `null`
  - 前端載入後可選擇性做「自動連結」：若某交通的 `from` 字串**等於**前一個行程點的 `title` 或 `address`，就自動填入 `fromEventId`
  - 未來做拖拽重排時，可讓使用者手動指定
- **設計理由**：字串是 LLM 的語言，id 是程式的語言。兩者並存，各司其職，且不會斷鏈。

### `type` 允許值

| 值 | 用途 |
|---|---|
| `arrival` | 抵達 |
| `departure` | 離開 |
| `transport` | 交通（獨立環節） |
| `food` | 用餐 |
| `sight` | 景點 |
| `hotel` | 住宿 |
| `shop` | 購物 |
| `rest` | 休息 |
| `note` | 純筆記 |

### 排序規則

1. 先按 `day` 升序
2. 再按 `time` 升序
3. `time` 為 `null` 者放當天最後
4. 同 `time` 者按 `type` 優先級（transport → food → sight → shop → rest → note）

---

## 6. DAILY_EXTRAS

```js
const DAILY_EXTRAS = {
  "1": {
    inspiration: [
      { title: "...", tag: "PHOTO", note: "...", type: "景點" }
    ],
    shopping: ["大瓶礦泉水", "泡澡粉"]
  }
};
```

> key 為 `day` 數字的**字串**。

---

## 7. BUDGET

```js
const BUDGET = {
  categories: ["transport", "food", "hotel", "shop", "ticket", "other"],
  estimates: {                  // AI 預估（可選）
    total: 50000,
    currency: "JPY",
    byCategory: {
      transport: 12000,
      food: 15000
    }
  },
  expenses: [                   // 實際花費（旅遊中記錄）
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

## 8. PHRASE_DATA

（不變，略）

---

## LLM 生成規則

LLM 被要求輸出時，**必須遵守**：

1. **只輸出 JSON**，不要 markdown 圍欄，不要解釋
2. **不要編 `id`**——留給 Worker 生成
3. **不要編 `coords`**——沒有真實資料就填 `null`
4. **`type` 只能從允許值選**
5. **`status` 預設 `pending`**，除非使用者明確說已訂
6. **`source` 一律填 `"ai"`**
7. **`day` 從 1 開始，相對出發日**
8. **所有必填欄位不能省**（即使值 `null`）
9. **交通一定要獨立成 `type: "transport"`**，不要塞進一般點
10. **交通的 `from` / `to` 必填字串；`fromEventId` / `toEventId` 一律 `null`**
11. **金額一律用數字**，`price` 字串只用於純顯示

---

## 版本

- v1.0 — 2026-09-27 — 初版，含多城市、交通、預算
