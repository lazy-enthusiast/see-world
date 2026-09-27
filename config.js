// ============================================================
// 🧳 客製化設定檔 config.js
// 結構契約見 SCHEMA.md
// ============================================================

// 1. 🎨 主題顏色
const THEME_CONFIG = {
  accentColor: "#000000",
  accentText: "#FFFFFF",
  backgroundColor: "#FFFFFF",
  cardColor: "#F9F9F9",
  textColor: "#111111",
  textSubColor: "#777777",
  borderColor: "#EEEEEE",
  googleFontsUrl: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;500;700&display=swap",
  fontHeading: '"Noto Sans JP", sans-serif',
  fontBody: '"Noto Sans JP", sans-serif'
};

// 2. 🗓️ 旅程設定
const CONFIG = {
  ui: {
    browserTitle: "Kyoto Test Trip",
    headerTitle: "京都五月",
    homeTimezone: "Asia/Hong_Kong",
    homeTimeLabel: "HKG"
  },
  startDate: "2026-05-15",
  duration: 5,
  travelers: {
    type: "solo",
    count: 1,
    note: ""
  },
  baseCurrency: "HKD",
  tripCurrency: "JPY"
};

// 3. 📍 目的地
const DESTINATION = {
  name: "京都 Kyoto",
  lat: 35.0116,
  lon: 135.7681,
  timezone: "Asia/Tokyo",
  currency: "jpy",
  currencyLabel: "JPY",
  baseCurrency: "HKD"
};

const CITIES = [];

// 4. ✈️ 航班與住宿
const TRIP_INFO = {
  visa: {
    type: "日本短期滯在",
    number: "VJW-TEST-001",
    note: "已截圖保存",
    expiry: null
  },
  flights: [
    {
      type: "去程", flight: "CX506", date: "05/15",
      dep: "HKG 10:20", arr: "KIX 15:10",
      note: "T1 登機 / 睡飽再出門", bookingRef: "TEST-PNR"
    },
    {
      type: "回程", flight: "CX569", date: "05/19",
      dep: "KIX 17:40", arr: "HKG 20:55",
      note: "15:30 抵達機場", bookingRef: "TEST-PNR"
    }
  ],
  hotels: [
    {
      cityId: null,
      name: "Dormy Inn Premium Kyoto Ekimae",
      address: "京都市下京區東塩小路町558-8",
      phone: "+81753715489",
      checkIn: "2026-05-15",
      checkOut: "2026-05-19",
      bookingRef: null
    }
  ],
  emergency: [
    { name: "警察局", phone: "110" },
    { name: "救護車", phone: "119" },
    { name: "外交部急難救助", phone: "+81-80-1009-7179" }
  ]
};

// 5. 🗺️ 行程（扁平 timeline）
const ITINERARY = {
  items: [
    // ---------- Day 1 ----------
    {
      id: "evt_d1_01",
      day: 1, time: "15:10", timeHint: null,
      type: "arrival",
      title: "抵達關西機場",
      cityId: null,
      address: "Kansai Airport",
      addressLocal: null,
      coords: [34.4347, 135.2329],
      tags: ["入境"],
      moodColor: "#333333",
      note: "順利通關，領取行李。",
      phone: null, openHours: null, price: null,
      cost: { amount: 0, currency: "JPY", category: "other" },
      status: "confirmed",
      source: "user"
    },
    {
      id: "trp_d1_01",
      day: 1, time: "16:14", timeHint: null,
      type: "transport",
      title: "Haruka 特急",
      cityId: null,
      address: "Kansai Airport Station",
      addressLocal: null,
      coords: null,
      tags: ["JR", "直達"],
      moodColor: "#007AFF",
      note: "前往京都，車程 75 分鐘。記得用 QR Code 取票。",
      phone: null, openHours: null, price: null,
      cost: { amount: 3600, currency: "JPY", category: "transport" },
      status: "confirmed",
      source: "user",
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
    },
    {
      id: "evt_d1_02",
      day: 1, time: "18:00", timeHint: null,
      type: "hotel",
      title: "Check-in 放行李",
      cityId: null,
      address: "京都市下京區東塩小路町558-8",
      addressLocal: "京都市下京区東塩小路町558-8",
      coords: [34.9868, 135.7599],
      tags: ["Dormy Inn"],
      moodColor: "#000000",
      note: "先去大浴場洗把臉，換輕鬆衣服。",
      phone: null, openHours: null, price: null,
      cost: { amount: 0, currency: "JPY", category: "hotel" },
      status: "confirmed",
      source: "user"
    },
    {
      id: "evt_d1_03",
      day: 1, time: "19:00", timeHint: null,
      type: "shop",
      title: "Lopia / 伊勢丹超市",
      cityId: null,
      address: "京都車站周邊",
      addressLocal: null,
      coords: null,
      tags: ["超市巡禮", "最愛"],
      moodColor: "#FF9500",
      note: "Lopia 在 Yodobashi 地下，買當季水果和優格。伊勢丹 B2 買熟食。",
      phone: null, openHours: null, price: null,
      cost: { amount: 2000, currency: "JPY", category: "shop" },
      status: "confirmed",
      source: "user"
    },

    // ---------- Day 2 ----------
    {
      id: "evt_d2_01",
      day: 2, time: "10:30", timeHint: null,
      type: "sight",
      title: "下鴨神社（散步）",
      cityId: null,
      address: "京都市左京区下鴨泉川町59",
      addressLocal: null,
      coords: [35.0391, 135.7730],
      tags: ["能量景點", "森林"],
      moodColor: "#34C759",
      note: "「糺之森」空氣很好，適合散步，可以買蕾絲御守。",
      phone: null, openHours: null, price: null,
      cost: { amount: 0, currency: "JPY", category: "other" },
      status: "confirmed",
      source: "user"
    },
    {
      id: "trp_d2_01",
      day: 2, time: "12:30", timeHint: null,
      type: "transport",
      title: "前往 Grill Capital",
      cityId: null,
      address: "京都市北区",
      addressLocal: null,
      coords: null,
      tags: ["巴士"],
      moodColor: "#007AFF",
      note: "搭巴士約 20 分鐘。",
      phone: null, openHours: null, price: null,
      cost: { amount: 230, currency: "JPY", category: "transport" },
      status: "confirmed",
      source: "user",
      transport: {
        mode: "bus",
        from: "下鴨神社",
        to: "上賀茂神社附近",
        fromEventId: null,
        toEventId: null,
        operator: null,
        line: null,
        durationMin: 20,
        liveApi: null
      }
    },
    {
      id: "evt_d2_02",
      day: 2, time: "13:00", timeHint: null,
      type: "food",
      title: "獨食午餐：Grill Capital Touyoutei",
      cityId: null,
      address: "京都市北区上贺茂岩ケ垣内町28-3",
      addressLocal: null,
      coords: null,
      tags: ["百年洋食", "漢堡排"],
      moodColor: "#FF2D55",
      note: "必吃整顆番茄沙拉。即使一個人吃也很自在。",
      phone: null, openHours: null, price: null,
      cost: { amount: 2500, currency: "JPY", category: "food" },
      status: "confirmed",
      source: "user"
    },
    {
      id: "evt_d2_03",
      day: 2, time: "15:00", timeHint: null,
      type: "shop",
      title: "Lisn Kyoto（香水 / 線香）",
      cityId: null,
      address: "京都市下京区烏丸通四条下ル COCON KARASUMA 1F",
      addressLocal: null,
      coords: [35.0034, 135.7593],
      tags: ["香氛", "設計"],
      moodColor: "#AF52DE",
      note: "挑選幾款喜歡的線香，店內設計非常現代。",
      phone: null, openHours: null, price: null,
      cost: { amount: 3000, currency: "JPY", category: "shop" },
      status: "confirmed",
      source: "user"
    },

    // ---------- Day 3 ----------
    {
      id: "evt_d3_01",
      day: 3, time: "11:00", timeHint: null,
      type: "sight",
      title: "寺町通古物店巡禮",
      cityId: null,
      address: "寺町通二条",
      addressLocal: null,
      coords: [35.0125, 135.7678],
      tags: ["古物", "茶道具"],
      moodColor: "#A2845E",
      note: "這一帶有很多老字號古董店、紙店（一保堂茶舖也在附近）。",
      phone: null, openHours: null, price: null,
      cost: { amount: 0, currency: "JPY", category: "other" },
      status: "confirmed",
      source: "user"
    },
    {
      id: "evt_d3_02",
      day: 3, time: "15:00", timeHint: null,
      type: "sight",
      title: "Sfera Building",
      cityId: null,
      address: "京都市東山区縄手通新橋上ル西之町200",
      addressLocal: null,
      coords: null,
      tags: ["現代工藝"],
      moodColor: "#8E8E93",
      note: "很有質感的選物店，適合挑選有品味的紀念品。",
      phone: null, openHours: null, price: null,
      cost: { amount: 0, currency: "JPY", category: "other" },
      status: "confirmed",
      source: "user"
    },
    {
      id: "evt_d3_03",
      day: 3, time: "18:00", timeHint: null,
      type: "food",
      title: "Cave de K（Wine Bar）",
      cityId: null,
      address: "京都市中京区",
      addressLocal: null,
      coords: null,
      tags: ["紅酒", "安靜"],
      moodColor: "#5856D6",
      note: "氣氛很好的酒吧，適合獨自喝一杯，服務人員專業且有距離感（安全）。",
      phone: null, openHours: null, price: null,
      cost: { amount: 4000, currency: "JPY", category: "food" },
      status: "confirmed",
      source: "user"
    },

    // ---------- Day 4 ----------
    {
      id: "evt_d4_01",
      day: 4, time: "14:00", timeHint: null,
      type: "rest",
      title: "預約按摩：Olive Spa",
      cityId: null,
      address: "京都祇園店",
      addressLocal: null,
      coords: [35.0050, 135.7750],
      tags: ["SPA", "按摩"],
      moodColor: "#FF9F0A",
      note: "已預約 100 分鐘精油療程。注重隱私，非常安全。",
      phone: null, openHours: null, price: null,
      cost: { amount: 12000, currency: "JPY", category: "other" },
      status: "confirmed",
      source: "user"
    },
    {
      id: "evt_d4_02",
      day: 4, time: "17:00", timeHint: null,
      type: "rest",
      title: "超市補貨 & 整理行李",
      cityId: null,
      address: "Dormy Inn",
      addressLocal: null,
      coords: null,
      tags: ["休息"],
      moodColor: "#000000",
      note: "把這幾天買的東西整理好，最後再去一次樓下超市買明天飛機上吃的零食。",
      phone: null, openHours: null, price: null,
      cost: { amount: 0, currency: "JPY", category: "other" },
      status: "confirmed",
      source: "user"
    },

    // ---------- Day 5 ----------
    {
      id: "evt_d5_01",
      day: 5, time: "11:00", timeHint: null,
      type: "hotel",
      title: "Check-out",
      cityId: null,
      address: "Dormy Inn",
      addressLocal: null,
      coords: null,
      tags: ["退房"],
      moodColor: "#000000",
      note: "行李寄放櫃台，去車站附近吃最後的午餐。",
      phone: null, openHours: null, price: null,
      cost: { amount: 0, currency: "JPY", category: "hotel" },
      status: "confirmed",
      source: "user"
    },
    {
      id: "trp_d5_01",
      day: 5, time: "14:15", timeHint: null,
      type: "transport",
      title: "搭乘 Haruka",
      cityId: null,
      address: "Kyoto Station",
      addressLocal: null,
      coords: null,
      tags: ["JR"],
      moodColor: "#007AFF",
      note: "預計 15:35 抵達關西機場。",
      phone: null, openHours: null, price: null,
      cost: { amount: 3600, currency: "JPY", category: "transport" },
      status: "confirmed",
      source: "user",
      transport: {
        mode: "train",
        from: "Kyoto Station",
        to: "Kansai Airport Station",
        fromEventId: null,
        toEventId: null,
        operator: "JR West",
        line: "Haruka",
        durationMin: 80,
        liveApi: null
      }
    },
    {
      id: "evt_d5_02",
      day: 5, time: "17:40", timeHint: null,
      type: "departure",
      title: "飛機起飛（CX569）",
      cityId: null,
      address: "KIX T1",
      addressLocal: null,
      coords: null,
      tags: ["回程"],
      moodColor: "#333333",
      note: "再見京都！預計 20:55 抵達香港。",
      phone: null, openHours: null, price: null,
      cost: { amount: 0, currency: "JPY", category: "other" },
      status: "confirmed",
      source: "user"
    }
  ]
};

// 6. 💡 靈感池 / Plan B（不綁天）
const INSPIRATIONS = [
  {
    id: "ins_001",
    title: "京都國立博物館",
    tag: "RAINY",
    note: "如果不去 Lisn，走路 5 分鐘可到，常設展很值得。",
    type: "sight",
    cityId: null,
    address: "京都市東山区茶屋町527",
    addressLocal: null,
    coords: [34.9900, 135.7728],
    nearEventId: "evt_d2_03",
    status: "wishlist",
    source: "user"
  },
  {
    id: "ins_002",
    title: "京都塔夜景",
    tag: "PHOTO",
    note: "就在飯店對面，天氣好可以拍一下。",
    type: "sight",
    cityId: null,
    address: "京都塔",
    addressLocal: null,
    coords: [34.9876, 135.7591],
    nearEventId: "evt_d1_03",
    status: "wishlist",
    source: "user"
  },
  {
    id: "ins_003",
    title: "Inoda Coffee",
    tag: "TIRED",
    note: "走累了可以去喝杯咖啡，本店氣氛最好。",
    type: "rest",
    cityId: null,
    address: "京都市中京区堺町通三条下ル道祐町140",
    addressLocal: null,
    coords: null,
    nearEventId: null,
    status: "wishlist",
    source: "user"
  },
  {
    id: "ins_004",
    title: "鴨川散步",
    tag: "PHOTO",
    note: "黃昏時分去鴨川邊坐坐。",
    type: "sight",
    cityId: null,
    address: "鴨川",
    addressLocal: null,
    coords: null,
    nearEventId: null,
    status: "wishlist",
    source: "user"
  },
  {
    id: "ins_005",
    title: "飯店免費拉麵",
    tag: "RAINY",
    note: "如果懶得出去吃晚餐，21:30 飯店有免費夜鳴拉麵。",
    type: "rest",
    cityId: null,
    address: "Dormy Inn",
    addressLocal: null,
    coords: null,
    nearEventId: "evt_d4_02",
    status: "wishlist",
    source: "user"
  }
];

// 7. 🛒 每日購物
const DAILY_EXTRAS = {
  "1": { shopping: ["大瓶礦泉水", "泡澡粉", "休足時間"] },
  "2": { shopping: ["Lisn 線香禮盒", "神社御守"] },
  "3": { shopping: ["一保堂抹茶", "古董小盤子"] },
  "4": { shopping: ["伴手禮最後確認"] },
  "5": { shopping: ["免稅店巧克力"] }
};

// 8. 💰 預算
const BUDGET = {
  categories: ["transport", "food", "hotel", "shop", "ticket", "other"],
  estimates: null,
  expenses: []
};

// 9. 🗣️ 常用短語
const PHRASE_DATA = [
  {
    category: "購物",
    items: [
      { term_primary: "これを見せてください", term_secondary: "請讓我看這個", term_pronounce: "Kore misete" },
      { term_primary: "カードは使えますか", term_secondary: "可用信用卡嗎", term_pronounce: "Card okay?" },
      { term_primary: "免税できますか", term_secondary: "可以退稅嗎", term_pronounce: "Menzei?" }
    ]
  },
  {
    category: "餐廳",
    items: [
      { term_primary: "一人です", term_secondary: "一位", term_pronounce: "Hitori desu" },
      { term_primary: "おすすめは？", term_secondary: "推薦什麼?", term_pronounce: "Osusume?" }
    ]
  }
];
