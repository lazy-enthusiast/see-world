// ============================================================
// 🧳 客製化設定檔 config.js
// 下次要規劃新行程時，只需要修改「這個檔案」，
// 完全不需要碰 index.html！
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
    headerTitle: "KYOTO <span>SOLO</span>",
    homeTimezone: "Asia/Hong_Kong",
    homeTimeLabel: "HKG"
  },
  startDate: "2026-05-15", // 出發日
  duration: 5
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

// 4. ✈️ 航班與住宿
const TRIP_INFO = {
  visa: {
    type: "日本短期滯在",
    number: "VJW-TEST-001",
    note: "已截圖保存"
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
      name: "Dormy Inn Premium Kyoto Ekimae",
      address: "京都市下京區東塩小路町558-8",
      phone: "+81753715489"
    }
  ],
  emergency: [
    { name: "警察局", phone: "110" },
    { name: "救護車", phone: "119" },
    { name: "外交部急難救助", phone: "+81-80-1009-7179" }
  ]
};

// 5. 🗺️ 行程細節
const USER_ITINERARY = {
  "day1": {
    "events": [
      {
        "time": "15:10", "title": "抵達關西機場", "type": "交通",
        "address": "Kansai Airport", "tags": ["入境"], "moodColor": "#333",
        "note": "順利通關，領取行李。"
      },
      {
        "time": "16:14", "title": "Haruka 特急", "type": "移動",
        "address": "Kansai Airport Station", "tags": ["JR", "直達"], "moodColor": "#007AFF",
        "note": "前往京都 (Kyoto)，車程 75 分鐘。記得用 QR Code 取票。"
      },
      {
        "time": "18:00", "title": "Check-in 放行李", "type": "住宿",
        "address": "京都市下京區東塩小路町558-8", "address_local": "京都市下京区東塩小路町558-8",
        "coords": [34.9868, 135.7599], "tags": ["Dormy Inn"], "moodColor": "#000",
        "note": "先去大浴場洗把臉，換輕鬆衣服。"
      },
      {
        "time": "19:00", "title": "Lopia / 伊勢丹超市", "type": "購物",
        "address": "京都車站周邊", "tags": ["超市巡禮", "最愛"], "moodColor": "#FF9500",
        "note": "Lopia 在 Yodobashi 地下，買當季水果 (草莓/水蜜桃) 和優格。伊勢丹 B2 買熟食。"
      }
    ],
    "inspiration": [
      { "title": "京都塔夜景", "tag": "PHOTO", "note": "就在飯店對面，天氣好可以拍一下。", "type": "景點" }
    ],
    "shopping": ["大瓶礦泉水", "泡澡粉", "休足時間"]
  },
  "day2": {
    "events": [
      {
        "time": "10:30", "title": "下鴨神社 (散步)", "type": "祈福",
        "address": "京都市左京区下鴨泉川町59", "coords": [35.0391, 135.7730],
        "tags": ["能量景點", "森林"], "moodColor": "#34C759",
        "note": "這裡的「糺之森」空氣很好，適合散步，可以買蕾絲御守。"
      },
      {
        "time": "13:00", "title": "獨食午餐: Grill Capital Touyoutei", "type": "美食",
        "address": "京都市北区上贺茂岩ケ垣内町28-3", "tags": ["百年洋食", "漢堡排"], "moodColor": "#FF2D55",
        "note": "必吃整顆番茄沙拉。即使一個人吃也很自在。"
      },
      {
        "time": "15:00", "title": "Lisn Kyoto (香水/線香)", "type": "購物",
        "address": "京都市下京区烏丸通四条下ル COCON KARASUMA 1F", "coords": [35.0034, 135.7593],
        "tags": ["香氛", "設計"], "moodColor": "#AF52DE",
        "note": "挑選幾款喜歡的線香，店內設計非常現代，不會有傳統沈重感。"
      }
    ],
    "inspiration": [
      { "title": "Inoda Coffee", "tag": "TIRED", "note": "走累了可以去喝杯咖啡，本店氣氛最好。", "type": "休息" }
    ],
    "shopping": ["Lisn 線香禮盒", "神社御守"]
  },
  "day3": {
    "events": [
      {
        "time": "11:00", "title": "寺町通古物店巡禮", "type": "逛街",
        "address": "寺町通二条", "coords": [35.0125, 135.7678],
        "tags": ["古物", "茶道具"], "moodColor": "#A2845E",
        "note": "這一帶有很多老字號古董店、紙店 (一保堂茶舖也在附近)。"
      },
      {
        "time": "15:00", "title": "Sfera Building", "type": "設計",
        "address": "京都市東山区縄手通新橋上ル西之町200",
        "tags": ["現代工藝"], "moodColor": "#8E8E93",
        "note": "很有質感的選物店，適合挑選有品味的紀念品。"
      },
      {
        "time": "18:00", "title": "Cave de K (Wine Bar)", "type": "小酌",
        "address": "京都市中京区", "tags": ["紅酒", "安靜"], "moodColor": "#5856D6",
        "note": "氣氛很好的酒吧，適合獨自喝一杯，服務人員專業且有距離感 (安全)。"
      }
    ],
    "inspiration": [
      { "title": "鴨川散步", "tag": "PHOTO", "note": "黃昏時分去鴨川邊坐坐。", "type": "風景" }
    ],
    "shopping": ["一保堂抹茶", "古董小盤子"]
  },
  "day4": {
    "events": [
      {
        "time": "14:00", "title": "預約按摩: Olive Spa", "type": "放鬆",
        "address": "京都祇園店", "coords": [35.0050, 135.7750],
        "tags": ["SPA", "按摩"], "moodColor": "#FF9F0A",
        "note": "已預約 100 分鐘精油療程。注重隱私，非常安全。"
      },
      {
        "time": "17:00", "title": "超市補貨 & 整理行李", "type": "整理",
        "address": "Dormy Inn", "tags": ["休息"], "moodColor": "#000",
        "note": "把這幾天買的東西整理好，最後再去一次樓下超市買明天飛機上吃的零食。"
      }
    ],
    "inspiration": [
      { "title": "飯店免費拉麵", "tag": "RAINY", "note": "如果懶得出去吃晚餐，21:30 飯店有免費夜鳴拉麵。", "type": "宵夜" }
    ],
    "shopping": ["伴手禮最後確認"]
  },
  "day5": {
    "events": [
      {
        "time": "11:00", "title": "Check-out", "type": "住宿",
        "address": "Dormy Inn", "tags": ["退房"], "moodColor": "#000",
        "note": "行李寄放櫃台，去車站附近吃最後的午餐。"
      },
      {
        "time": "14:15", "title": "搭乘 Haruka", "type": "交通",
        "address": "Kyoto Station", "tags": ["JR"], "moodColor": "#007AFF",
        "note": "預計 15:35 抵達關西機場。"
      },
      {
        "time": "17:40", "title": "飛機起飛 (CX569)", "type": "航班",
        "address": "KIX T1", "tags": ["回程"], "moodColor": "#333",
        "note": "再見京都！預計 20:55 抵達香港。"
      }
    ],
    "inspiration": [],
    "shopping": ["免稅店巧克力"]
  }
};

// 6. 🗣️ 常用短語
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
