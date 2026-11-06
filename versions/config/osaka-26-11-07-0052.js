// buildTime: 2026-11-05T16:32:53.485Z
// ============================================================
// 🧳 客製化設定檔 config.js —— 大阪二月（v5q：Feb 7–14, 2027・7 晚；QA FAIL 修（今雪刪 timed／一之傳 12:30／鍵善刪 timed／稅入房價）；刪奈良／瑠璃絵硬塞／太陽之塔；Feb 9 Nintendo OSAKA＋寶塚 13:00；Feb 11 龍力；Feb 12 杯麵＋Pearl Pearl＋梵高；Feb 13 白鹿＋すみえもん；Feb 14 純回程；航班 TBD；酒店改期 TBD）
// 結構契約見 schema.json／SCHEMA.md；facts as-of Nov 4–5, 2026；散文 to14／to14_zh
// 座標：國土地理院／既有 v5p pins；4 位小數；交通項目用出發點
// ============================================================

// 1. 🎨 主題顏色（藍綠點睛＋黑白灰米；字體 Noto Sans TC）
const THEME_CONFIG = {
  "accentColor": "#2A7F7A",
  "accentText": "#FFFFFF",
  "backgroundColor": "#FAF8F4",
  "cardColor": "#F2EFE9",
  "textColor": "#1F1F1F",
  "textSubColor": "#7A766F",
  "borderColor": "#E4DFD6",
  "googleFontsUrl": "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;500;700&display=swap",
  "fontHeading": "\"Noto Sans TC\", sans-serif",
  "fontBody": "\"Noto Sans TC\", sans-serif"
};

// 2. 🗓️ 旅程設定
const CONFIG = {
  "ui": {
    "browserTitle": "大阪二月",
    "headerTitle": "大阪二月",
    "homeTimezone": "Asia/Hong_Kong",
    "homeTimeLabel": "香港"
  },
  "startDate": "2027-02-07",
  "duration": 8,
  "travelers": {
    "type": "solo",
    "count": 1,
    "note": "一人旅行"
  },
  "baseCurrency": "HKD",
  "tripCurrency": "JPY"
};

// 3. 📍 目的地
const DESTINATION = {
  "name": "大阪",
  slug: "osaka",
  "lat": 34.6937,
  "lon": 135.5023,
  "timezone": "Asia/Tokyo",
  "currency": "jpy",
  "currencyLabel": "JPY",
  "baseCurrency": "HKD"
};

// 4. 🏙️ 城市
const CITIES = [
  {
    "id": "osaka",
    "name": "大阪",
    "lat": 34.6983,
    "lon": 135.5027,
    "timezone": "Asia/Tokyo",
    "days": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "color": "#2A7F7A"
  },
  {
    "id": "kyoto",
    "name": "京都",
    "lat": 35.0116,
    "lon": 135.7681,
    "timezone": "Asia/Tokyo",
    "days": [
      4
    ],
    "color": "#9AA8A3"
  },
  {
    "id": "kobe",
    "name": "神戶",
    "lat": 34.71,
    "lon": 135.2486,
    "timezone": "Asia/Tokyo",
    "days": [
      3,
      6,
      7
    ],
    "color": "#8C8378"
  }
];

// TRANSIT_CONFIG（SCHEMA v1.16）：只作除錯用；App 交通 modal 不顯示下班車、不呼叫即時 API。
// 全部 liveApi 為 null（保留欄位），providers 留空。
const TRANSIT_CONFIG = {
  "providers": []
};

// 5. ✈️ 航班與住宿
const TRIP_INFO = {
  "visa": {
    "type": "香港特區護照免簽入境日本（短期逗留）",
    "number": null,
    "note": "香港特區護照可免簽短期入境日本；出發前預填 Visit Japan Web（入境及海關申報）。Nov 1, 2026 起日本退稅改為出境時於機場海關確認後退款，購物要帶護照。",
    "expiry": null
  },
  "flights": [
    {
      "type": "去程",
      "flight": "HK Express UO898",
      "date": "Feb 7",
      "dep": "HKG TBD",
      "arr": "KIX TBD",
      "note": "未訂；航班／時刻 TBD。假設 UO898；按實際訂位再填。",
      "bookingRef": null
    },
    {
      "type": "回程",
      "flight": "HK Express UO851",
      "date": "Feb 14",
      "dep": "KIX TBD",
      "arr": "HKG TBD",
      "note": "未訂；航班／時刻 TBD。假設 UO851；按實際訂位再填。",
      "bookingRef": null
    }
  ],
  "hotels": [
    {
      "cityId": "osaka",
      "name": "天然溫泉 浪華之湯 Dormy Inn 大阪谷町（天然温泉 浪華の湯 ドーミーイン大阪谷町）",
      "address": "〒540-0026 大阪府大阪市中央区内本町2-1-9",
      "phone": "+81-6-6945-5489",
      "checkIn": "Feb 7, 2027（15:00 起）",
      "checkOut": "Feb 14, 2027（午前／早上；改期 TBD）",
      "bookingRef": "0AN0UPYV"
    }
  ],
  "emergency": [
    {
      "name": "警察（日本）",
      "phone": "110"
    },
    {
      "name": "救護車／消防（日本）",
      "phone": "119"
    },
    {
      "name": "日本觀光局訪日旅客熱線（24 小時，有中文）",
      "phone": "+81-50-3816-2787"
    },
    {
      "name": "香港入境處 協助在外香港居民 24 小時熱線",
      "phone": "+852 1868"
    },
    {
      "name": "酒店 Dormy Inn 大阪谷町",
      "phone": "+81-6-6945-5489"
    }
  ]
};

// 6. 🗺️ 行程
const ITINERARY = {
  "items": [
    {
      "timeHint": "afternoon",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null,
      "tags": [
        "入境"
      ],
      "moodColor": "#333333",
      "id": "evt_d1_01",
      "day": 1,
      "time": "16:25",
      "type": "arrival",
      "title": "關西國際機場 第 1 航廈",
      "cityId": "osaka",
      "address": "Kansai Airport Terminal 1",
      "addressLocal": "大阪府泉佐野市泉州空港北1 関西国際空港 第1ターミナル",
      "coords": [
        34.4343,
        135.2442
      ],
      "note": "【入境】出發前填好 Visit Japan Web；入境連提行李預留 45–60 分鐘。\n【攻略】便利店 ATM 提備用現金；利木津巴士在第 1 航廈 1 樓 7 號站。\n【實用】航班時刻 TBD（假設 UO898）；刷卡選日圓（JPY）。",
      "openHours": "機場總合案內 24 小時",
      "price": null
    },
    {
      "id": "trp_d1_02",
      "day": 1,
      "time": "17:55",
      "timeHint": "evening",
      "type": "transport",
      "title": "前往近鐵上本町（機場利木津巴士）",
      "cityId": "osaka",
      "address": "關西國際機場第 1 航廈 1 樓 利木津巴士 7 號站",
      "addressLocal": "関西空港 第1ターミナル 1階 リムジンバス 7番のりば（近鉄上本町・心斎橋行き）",
      "coords": [
        34.4343,
        135.2442
      ],
      "tags": [
        "機場巴士"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】第 1 航廈 1 樓 7 號站（近鐵上本町線）；先在售票機買票（可刷卡）。\n【下車】近鐵上本町 2 樓巴士總站。\n【車資】成人 ¥1,800。\n【備案】南海空港急行往難波 → 轉地鐵到谷町四丁目（IC 約 ¥1,210）。\n【實用】實際班次按抵達時刻再核；航班 TBD。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "約 20–30 分鐘一班（傍晚）",
      "price": "成人 ¥1,800",
      "website": null,
      "cost": {
        "amount": 1800,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "bus",
        "from": "關西機場第 1 航廈",
        "to": "近鐵上本町",
        "fromEventId": null,
        "toEventId": null,
        "operator": "關西空港交通／近鐵巴士",
        "line": "近鐵上本町／心齋橋線",
        "durationMin": 61,
        "stopCount": 1,
        "liveApi": null
      }
    },
    {
      "id": "evt_d1_03",
      "day": 1,
      "time": "19:00",
      "timeHint": "evening",
      "type": "shop",
      "title": "近鐵百貨上本町店",
      "cityId": "osaka",
      "address": "日本大阪府大阪市天王寺區上本町6-1-55 近鐵百貨上本町店 地庫 1 樓",
      "addressLocal": "大阪府大阪市天王寺区上本町6-1-55 近鉄百貨店上本町店 B1F 鮮魚 西浅／和洋酒売場",
      "coords": [
        34.6659,
        135.5195
      ],
      "tags": [
        "百貨地庫",
        "刺身",
        "清酒"
      ],
      "moodColor": "#8C8378",
      "note": "【攻略】B1 可買甜品／便當作過渡；正式宵夜改 KOHYO。\n【實用】抵達夜可略過，直接轉谷町。",
      "phone": "+81-6-6773-8002",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "10:00–20:00",
      "price": "12cm 蛋糕 ¥4,536（取貨時付款）＋刺身約 ¥1,000–2,000＋地酒四合瓶約 ¥1,500–2,500（估算）",
      "website": "https://www.d-kintetsu.co.jp/uehonmachi/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d1_04",
      "day": 1,
      "time": "19:30",
      "timeHint": "evening",
      "type": "transport",
      "title": "前往內本町（地鐵谷町線）",
      "cityId": "osaka",
      "address": "大阪地鐵谷町九丁目站（谷町線）2 號月台",
      "addressLocal": "Osaka Metro 谷町九丁目駅 2番線（谷町線・大日方面）／近鉄百貨店上本町店 B1 から地下通路",
      "coords": [
        34.665,
        135.5175
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】近鐵上本町方向轉谷町線。\n【下車】內本町一帶，步行 KOHYO。\n【車資】IC ¥190。\n【備案】由上本町步行亦可。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，不用趕指定班次",
      "price": "IC ¥190（ICOCA）",
      "website": null,
      "cost": {
        "amount": 190,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "subway",
        "from": "谷町九丁目",
        "to": "內本町",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵 Osaka Metro",
        "line": "谷町線",
        "durationMin": 3,
        "stopCount": 2,
        "liveApi": null
      }
    },
    {
      "timeHint": "evening",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": null,
      "cost": {
        "amount": 3000,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null,
      "tags": [
        "超市",
        "宵夜"
      ],
      "moodColor": "#A0785A",
      "id": "evt_d1_06",
      "day": 1,
      "time": "19:45",
      "type": "shop",
      "title": "KOHYO 內本町店（コーヨー 内本町店）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區內本町2丁目",
      "addressLocal": "大阪府大阪市中央区内本町 KOHYO",
      "coords": [
        34.6833,
        135.5138
      ],
      "note": "【攻略】酒店隔鄰鮮魚超市：刺身、壽司、關東煮和清酒做生日宵夜回房。\n【實用】07:00–23:00；walk-in；傍晚後減價貼紙較多。\n【備案】串炸松葉（新梅田）或近鐵上本町 B1 甜品／超市（見靈感）。",
      "openHours": "07:00–23:00",
      "price": "宵夜自選（估算 ¥2,000–4,000）"
    },
    {
      "id": "trp_d1_06b",
      "day": 1,
      "time": "20:10",
      "timeHint": "evening",
      "type": "transport",
      "title": "前往 Dormy Inn（步行）",
      "cityId": "osaka",
      "address": "KOHYO 內本町店",
      "addressLocal": "大阪府大阪市中央区内本町 KOHYO",
      "coords": [
        34.6833,
        135.5138
      ],
      "tags": [
        "步行"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】KOHYO 出門。\n【下車】回酒店入住。\n【車資】免費。\n【備案】隔鄰即到。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "步行約 3 分鐘",
      "price": "免費",
      "website": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "walk",
        "from": "KOHYO",
        "to": "Dormy Inn 谷町",
        "fromEventId": null,
        "toEventId": null,
        "operator": null,
        "line": null,
        "durationMin": 3,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "timeHint": "evening",
      "phone": "+81-6-6945-5489",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": "https://www.dormy-hotels.com/dormyinn/hotels/osaka_tanimachi/",
      "cost": {
        "amount": 97750,
        "currency": "JPY",
        "category": "hotel"
      },
      "status": "confirmed",
      "source": "ai",
      "transport": null,
      "tags": [
        "酒店",
        "溫泉"
      ],
      "moodColor": "#2A7F7A",
      "id": "evt_d1_05",
      "day": 1,
      "time": "20:20",
      "type": "hotel",
      "title": "Dormy Inn 大阪谷町",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區內本町2-1-9",
      "addressLocal": "大阪府大阪市中央区内本町2-1-9 天然温泉 浪華の湯 ドーミーイン大阪谷町",
      "coords": [
        34.6835,
        135.5139
      ],
      "note": "【攻略】7 晚同一間（Feb 7 入／Feb 14 午前出；改期 TBD）：標準方案（ドーミーインスタンダードプラン＜素泊まり＞）禁煙雙人房；13 樓天然溫泉浪華之湯連桑拿，住客免費；酒店對面 KOHYO 超市。\n【免費服務】歡迎飲品、浴後雪條、夜鳴蕎麥麵（夜鳴きそば，21:30–23:00）、朝早乳酸菌飲品。\n【預約】Jalan 確認編號 0AN0UPYV（原 8 晚；改 7 晚／Feb 14 CO 未完成）；到店付款（現地払い）；Feb 6 取消收 50%，當日 100%。\n【實用】到店用恒生 travel+ 實體卡付日圓；宿泊稅估 Feb 13 ¥500、其餘每晚 ¥200，共約 ¥1,700；入湯稅每晚 ¥150×7＝約 ¥1,050；入住時付（以酒店為準）。1、4、13 樓有吸煙亭，盡量離遠。",
      "openHours": "入住 15:00 起；退房 Feb 14 午前（改期 TBD）",
      "price": "7 晚約 ¥95,000（同方案市價 as-of Nov 4, 2026；已訂 0AN0UPYV 原 8 晚 ¥109,000，改期後以確認為準）＋稅約 ¥2,750（合計約 ¥97,750）"
    },
    {
      "timeHint": "night",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": "https://www.dormy-hotels.com/dormyinn/hotels/osaka_tanimachi/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null,
      "tags": [
        "溫泉",
        "酒店"
      ],
      "moodColor": "#2A7F7A",
      "id": "evt_d1_07",
      "day": 1,
      "time": "21:30",
      "type": "rest",
      "title": "浪華之湯",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區內本町2-1-9",
      "addressLocal": "大阪府大阪市中央区内本町2-1-9 天然温泉 浪華の湯 ドーミーイン大阪谷町",
      "coords": [
        34.6835,
        135.5139
      ],
      "note": "【攻略】13 樓天然溫泉連桑拿，住客免費；收工即泡。\n【實用】15:00–翌日 10:00；同層有吸煙亭，離遠坐。",
      "openHours": "15:00–翌日 10:00（住客）",
      "price": "住客免費"
    },
    {
      "timeHint": "morning",
      "type": "transport",
      "cityId": "osaka",
      "tags": [
        "步行"
      ],
      "moodColor": "#2A7F7A",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "openHours": "步行約 10–15 分鐘",
      "price": "免費",
      "id": "trp_d2_01",
      "day": 2,
      "time": "09:15",
      "title": "前往生國魂蚤之市（步行）",
      "address": "Dormy Inn 大阪谷町",
      "addressLocal": "大阪府大阪市中央区内本町2-1-9 天然温泉 浪華の湯 ドーミーイン大阪谷町",
      "coords": [
        34.6835,
        135.5139
      ],
      "note": "【上車】酒店步行出發。\n【下車】生玉表參道一帶攤位。\n【車資】免費。\n【備案】谷町九丁目站出再步行約 5 分鐘。",
      "transport": {
        "mode": "walk",
        "from": "Dormy Inn 谷町",
        "to": "生國魂蚤之市",
        "fromEventId": null,
        "toEventId": null,
        "operator": null,
        "line": null,
        "durationMin": 12,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "id": "evt_d2_02",
      "day": 2,
      "time": "09:30",
      "timeHint": "morning",
      "type": "shop",
      "title": "生國魂蚤之市（生國魂蚤の市）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市天王寺區生玉町13-9（表參道一帶）",
      "addressLocal": "大阪府大阪市天王寺区生玉町13-9 表参道 蚤の市",
      "coords": [
        34.6651,
        135.5133
      ],
      "tags": [
        "市集",
        "古物",
        "現金"
      ],
      "moodColor": "#8C8378",
      "note": "【今次】每月 8 日小型古物市；只逛攤位，不參拜。\n【攻略】約 10 檔古道具攤沿表參道；議價客氣問「可以便宜一點嗎？（少し安くなりますか）」。\n【實用】多數只收現金；07:00–14:00。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "每月 8 日 07:00–14:00 左右",
      "price": "免費入場（多數攤檔只收現金）",
      "website": "https://ikutamajinja.jp/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "timeHint": "morning",
      "type": "transport",
      "cityId": "osaka",
      "tags": [
        "步行"
      ],
      "moodColor": "#2A7F7A",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "openHours": "步行約 5–8 分鐘",
      "price": "免費",
      "id": "trp_d2_03",
      "day": 2,
      "time": "11:40",
      "title": "前往和sai（步行）",
      "address": "生國魂蚤之市",
      "addressLocal": "大阪府大阪市天王寺区生玉町13-9",
      "coords": [
        34.6651,
        135.5133
      ],
      "note": "【上車】蚤市攤位步行。\n【下車】和sai。\n【車資】免費。\n【備案】時間夠可先看大阪歷史博物館（月曜開；見靈感）再赴午。",
      "transport": {
        "mode": "walk",
        "from": "生國魂蚤之市",
        "to": "和sai",
        "fromEventId": null,
        "toEventId": null,
        "operator": null,
        "line": null,
        "durationMin": 7,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "id": "evt_d2_04",
      "day": 2,
      "time": "12:00",
      "timeHint": "afternoon",
      "type": "food",
      "title": "和sai",
      "cityId": "osaka",
      "address": "日本大阪府大阪市天王寺區生玉町5-26",
      "addressLocal": "大阪府大阪市天王寺区生玉町5-26 和sai",
      "coords": [
        34.6642,
        135.5135
      ],
      "tags": [
        "和食",
        "天然魚",
        "日本酒",
        "可預約"
      ],
      "moodColor": "#A0785A",
      "note": "【Tabelog】3.57\n【攻略】古民家和食，天然魚；點當日魚料理定食配一杯冷酒。\n【預約】Tabelog 網上訂 12:00、1 位，只訂座位；約 Dec 中旬開放。\n【實用】Feb 8（一）營業；全席禁煙。\n【備案】訂不到或趕 Pokémon：北極星 心齋橋本店蛋包飯（オムライス）（見靈感；walk-in）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "星期一 11:30–15:00（L.O. 14:00）；星期二、三休",
      "price": "午市 ¥1,000–1,999（連一杯日本酒約 ¥2,500，估算）",
      "website": "https://tabelog.com/osaka/A2701/A270202/27125938/",
      "cost": {
        "amount": 2500,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "timeHint": "afternoon",
      "type": "transport",
      "cityId": "osaka",
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": null,
      "cost": {
        "amount": 190,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "openHours": "班次頻密，不用趕指定班次",
      "price": "IC ¥190",
      "id": "trp_d2_05",
      "day": 2,
      "time": "13:30",
      "title": "前往心齋橋（地鐵）",
      "address": "和sai 附近",
      "addressLocal": "大阪府大阪市天王寺区生玉町",
      "coords": [
        34.6642,
        135.5135
      ],
      "note": "【上車】谷町九丁目或近站，轉御堂筋線往心齋橋。\n【下車】心齋橋站，步行至大丸心齋橋本館。\n【車資】IC 約 ¥190。\n【備案】步行約 20–25 分鐘亦可。",
      "transport": {
        "mode": "train",
        "from": "谷町九丁目",
        "to": "心齋橋",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵",
        "line": "谷町線／御堂筋線",
        "durationMin": 15,
        "stopCount": 3,
        "liveApi": null
      }
    },
    {
      "timeHint": "afternoon",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": "https://osaka.pokemon-cafe.jp/",
      "cost": {
        "amount": 3500,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null,
      "tags": [
        "驚喜",
        "咖啡",
        "必訂"
      ],
      "moodColor": "#E8A33D",
      "id": "evt_d2_06",
      "day": 2,
      "time": "14:00",
      "type": "food",
      "title": "寶可夢咖啡 OSAKA（ポケモンカフェ Osaka）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區心齋橋筋1-7-1 大丸心齋橋本館 9F",
      "addressLocal": "大阪府大阪市中央区心斎橋筋1-7-1 大丸心斎橋店本館9F Pokémon Café",
      "coords": [
        34.6734,
        135.5013
      ],
      "note": "【今次】驚喜；大丸心齋橋本館 9F；停留約 90 分鐘。\n【攻略】Seat C（1–6 人）可一人；跳過節日限定餐。同層 Pokémon Center DX、PARCO 美少女戰士 Store 可 walk-in。\n【預約】官網必訂（不收電話／電郵）；Feb輪次估 Jan 1, 2027 18:00 JST 開搶（待 NEWS）。\n【實用】10:00–20:00；館內禁煙；可刷卡（含銀聯）。",
      "openHours": "10:00–20:00（預約制；最後入店約 18:00 輪；L.O. 19:00）",
      "price": "套餐視輪次；另加飲"
    },
    {
      "timeHint": "afternoon",
      "type": "transport",
      "cityId": "osaka",
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": null,
      "cost": {
        "amount": 190,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "openHours": "班次頻密，不用趕指定班次",
      "price": "IC ¥190",
      "id": "trp_d2_07",
      "day": 2,
      "time": "16:00",
      "title": "前往長堀（地鐵）",
      "address": "大丸心齋橋",
      "addressLocal": "大阪府大阪市中央区心斎橋筋1-7-1",
      "coords": [
        34.6734,
        135.5013
      ],
      "note": "【上車】心齋橋／長堀橋方向。\n【下車】松屋町或近上町，步行至長堀。\n【車資】IC 約 ¥190。\n【備案】訂不到長堀改燗之美穗（谷町六；見靈感）。",
      "transport": {
        "mode": "train",
        "from": "心齋橋",
        "to": "松屋町",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵",
        "line": "長堀鶴見綠地線",
        "durationMin": 10,
        "stopCount": 2,
        "liveApi": null
      }
    },
    {
      "id": "evt_d2_08",
      "day": 2,
      "time": "17:00",
      "timeHint": "evening",
      "type": "food",
      "title": "長堀（ながほり）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區上町1-3-9",
      "addressLocal": "大阪府大阪市中央区上町1-3-9 ながほり",
      "coords": [
        34.6765,
        135.5257
      ],
      "tags": [
        "居酒屋",
        "清酒",
        "百名店",
        "要預約"
      ],
      "moodColor": "#A0785A",
      "note": "【Tabelog】3.70\n【攻略】上町居酒屋；月曜開；點店主推薦小菜配清酒。\n【預約】Tabelog 網上訂；Feb 日曆 Nov 4, 2026 仍未開。\n【實用】全席禁煙；可刷卡。\n【備案】燗之美穗（谷町六；walk-in；16:00 開門問位）。",
      "phone": "+81-6-6768-0515",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "星期一、二、四、五 17:00–22:00（星期一由 Aug 2026 起營業）；六 13:00–22:00；逢星期三、日及假期休",
      "price": "預算 ¥10,000–14,999（連清酒）",
      "website": "https://tabelog.com/osaka/A2701/A270204/27000581/",
      "cost": {
        "amount": 12000,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "timeHint": "evening",
      "type": "transport",
      "cityId": "osaka",
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": null,
      "cost": {
        "amount": 190,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "openHours": "班次頻密，不用趕指定班次",
      "price": "IC ¥190",
      "id": "trp_d2_09",
      "day": 2,
      "time": "20:20",
      "title": "前往谷町四丁目（地鐵谷町線）",
      "address": "長堀附近",
      "addressLocal": "大阪府大阪市中央区上町",
      "coords": [
        34.6765,
        135.5257
      ],
      "note": "【上車】近站轉谷町線。\n【下車】谷町四丁目，回酒店。\n【車資】IC 約 ¥190。\n【備案】的士約 10 分鐘。",
      "transport": {
        "mode": "train",
        "from": "谷町九丁目",
        "to": "谷町四丁目",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵",
        "line": "谷町線",
        "durationMin": 5,
        "stopCount": 2,
        "liveApi": null
      }
    },
    {
      "timeHint": "night",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": "https://www.dormy-hotels.com/dormyinn/hotels/osaka_tanimachi/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null,
      "tags": [
        "溫泉",
        "酒店"
      ],
      "moodColor": "#2A7F7A",
      "id": "evt_d2_10",
      "day": 2,
      "time": "20:40",
      "type": "rest",
      "title": "浪華之湯",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區內本町2-1-9",
      "addressLocal": "大阪府大阪市中央区内本町2-1-9 天然温泉 浪華の湯 ドーミーイン大阪谷町",
      "coords": [
        34.6835,
        135.5139
      ],
      "note": "【攻略】13 樓天然溫泉連桑拿，住客免費；收工即泡。\n【實用】15:00–翌日 10:00；同層有吸煙亭，離遠坐。",
      "openHours": "15:00–翌日 10:00（住客）",
      "price": "住客免費"
    },
    {
      "timeHint": "morning",
      "type": "transport",
      "cityId": "osaka",
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": null,
      "cost": {
        "amount": 190,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "openHours": "班次頻密，不用趕指定班次",
      "price": "IC ¥190",
      "id": "trp_d3_01",
      "day": 3,
      "time": "09:40",
      "title": "前往東梅田（地鐵谷町線）",
      "address": "谷町四丁目站",
      "addressLocal": "Osaka Metro 谷町四丁目駅",
      "coords": [
        34.6826,
        135.5176
      ],
      "note": "【上車】谷町四丁目站 2 號月台，谷町線往大日。\n【下車】東梅田，步行入 LUCUA 南館。\n【車資】IC ¥190。\n【備案】約 15–20 分鐘含步行上 13F。",
      "transport": {
        "mode": "train",
        "from": "谷町四丁目",
        "to": "東梅田",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵",
        "line": "谷町線",
        "durationMin": 12,
        "stopCount": 3,
        "liveApi": null
      }
    },
    {
      "timeHint": "morning",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": "https://www.nintendo.com/jp/officialstore/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null,
      "tags": [
        "驚喜",
        "任天堂",
        "購物"
      ],
      "moodColor": "#E8A33D",
      "id": "evt_d3_02",
      "day": 3,
      "time": "10:00",
      "type": "shop",
      "title": "任天堂大阪專門店（Nintendo OSAKA）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區梅田3-1-3 LUCUA 南館 13F",
      "addressLocal": "大阪府大阪市北区梅田3-1-3 LUCUA osaka 南館 13F Nintendo OSAKA",
      "coords": [
        34.7019,
        135.4963
      ],
      "note": "【今次】驚喜；LUCUA 南館 13F；主機／amiibo／限定商品。\n【攻略】平日通常不用整理券；可順路同層 CAPCOM STORE 只睇店（カフェ另計、可略）。11:10 前離店；簡食改梅田站內／寶塚站便利店（釜竹見靈感；今雪 walk-in 不定休，有餘力才去）。\n【實用】10:00–20:00；walk-in；館內禁煙。\n【硬限制】須 11:10 前離店，趕阪急寶塚 13:00 開演。",
      "openHours": "10:00–20:00",
      "price": "免費入場（商品另計）"
    },
    {
      "timeHint": "morning",
      "type": "transport",
      "cityId": "kobe",
      "tags": [
        "私鐵"
      ],
      "moodColor": "#2A7F7A",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": null,
      "cost": {
        "amount": 320,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "openHours": "急行約 10 分鐘一班",
      "price": "IC ¥320",
      "id": "trp_d3_04",
      "day": 3,
      "time": "11:15",
      "title": "前往寶塚（阪急寶塚線急行）",
      "address": "阪急大阪梅田",
      "addressLocal": "阪急大阪梅田駅 宝塚線",
      "coords": [
        34.705,
        135.498
      ],
      "note": "【上車】阪急大阪梅田寶塚線急行；最遲約 11:25 上車。\n【下車】寶塚站，徒歩約 8–10 分鐘到大劇場。\n【車資】IC 約 ¥320。\n【備案】準急／普通多約 5–10 分鐘；建議 12:00–12:15 到場。",
      "transport": {
        "mode": "train",
        "from": "阪急大阪梅田",
        "to": "寶塚",
        "fromEventId": null,
        "toEventId": null,
        "operator": "阪急",
        "line": "寶塚線急行",
        "durationMin": 35,
        "stopCount": 5,
        "liveApi": null
      }
    },
    {
      "timeHint": "afternoon",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": "https://kageki.hankyu.co.jp/",
      "cost": {
        "amount": 8000,
        "currency": "JPY",
        "category": "ticket"
      },
      "status": "pending",
      "source": "ai",
      "transport": null,
      "tags": [
        "驚喜",
        "歌劇",
        "必訂"
      ],
      "moodColor": "#E8A33D",
      "id": "evt_d3_05",
      "day": 3,
      "time": "13:00",
      "type": "sight",
      "title": "寶塚大劇場",
      "cityId": "kobe",
      "address": "日本兵庫縣寶塚市榮町1-1-57",
      "addressLocal": "兵庫県宝塚市栄町1-1-57 宝塚大劇場",
      "coords": [
        34.8077,
        135.3462
      ],
      "note": "【今次】驚喜；宙組『The London Way』『Ivresse Vague』・Feb 9 13:00（約 3 小時連休）。\n【攻略】開場＝開演 30 分前；建議 12:00–12:15 到。無英語字幕／耳機（僅網上英／繁中劇情概要）。手塚治虫記念館休館→可逛寶塚歌劇之殿堂（2–3F・¥500）。途經小神社，只經過、不參拜。\n【預約】外國人 ARS（ars-takarazuka.triplabo.jp；護照；1 席 OK）＋一般前售 Jan 9, 2027。\n【實用】票 ¥3,500–14,000；敷地全禁煙・無吸煙所。",
      "openHours": "開演 13:00；開場＝開演 30 分前",
      "price": "一般席 ¥3,500–14,000"
    },
    {
      "timeHint": "afternoon",
      "type": "transport",
      "cityId": "osaka",
      "tags": [
        "私鐵",
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": null,
      "cost": {
        "amount": 510,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "openHours": "班次頻密，不用趕指定班次",
      "price": "IC ¥510",
      "id": "trp_d3_06",
      "day": 3,
      "time": "16:30",
      "title": "前往谷町六丁目（阪急→地鐵）",
      "address": "寶塚大劇場",
      "addressLocal": "兵庫県宝塚市栄町1-1-57",
      "coords": [
        34.8077,
        135.3462
      ],
      "note": "【上車】寶塚站阪急往大阪梅田。\n【轉車】梅田轉谷町線到谷町六丁目。\n【下車】燗之美穗一帶。\n【車資】IC 約 ¥510。\n【備案】散場人潮可稍等後一班。",
      "transport": {
        "mode": "train",
        "from": "寶塚",
        "to": "谷町六丁目",
        "fromEventId": null,
        "toEventId": null,
        "operator": "阪急／大阪地鐵",
        "line": "寶塚線→谷町線",
        "durationMin": 55,
        "stopCount": 8,
        "liveApi": null
      }
    },
    {
      "timeHint": "evening",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": "https://tabelog.com/osaka/A2701/A270204/27117661/",
      "cost": {
        "amount": 5000,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null,
      "tags": [
        "清酒",
        "燙酒"
      ],
      "moodColor": "#A0785A",
      "id": "evt_d3_07",
      "day": 3,
      "time": "18:00",
      "type": "food",
      "title": "燗之美穗（燗の美穂）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區谷町",
      "addressLocal": "大阪府大阪市中央区谷町六丁目 燗の美穂",
      "coords": [
        34.6761,
        135.5157
      ],
      "note": "【Tabelog】3.43\n【攻略】散場後回谷町；米芝蓮 Bib；燙酒／清酒強；walk-in，16:00 開門問位。\n【實用】全席禁煙。\n【備案】日本酒原價酒藏 谷町四丁目（酒店近）或酒店 Lounge。",
      "openHours": "星期一至六 16:00–22:00；日 15:00–22:00；逢星期三及每月第 3 個星期四休",
      "price": "小菜＋酒估算 ¥4,000–6,000"
    },
    {
      "timeHint": "evening",
      "type": "transport",
      "cityId": "osaka",
      "tags": [
        "步行"
      ],
      "moodColor": "#2A7F7A",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "openHours": "步行約 10 分鐘",
      "price": "免費",
      "id": "trp_d3_08",
      "day": 3,
      "time": "20:30",
      "title": "前往谷町四丁目（步行）",
      "address": "燗之美穗",
      "addressLocal": "大阪府大阪市中央区谷町六丁目",
      "coords": [
        34.6761,
        135.5157
      ],
      "note": "【上車】店外步行。\n【下車】回酒店。\n【車資】免費。\n【備案】谷町線一站亦可。",
      "transport": {
        "mode": "walk",
        "from": "谷町六丁目",
        "to": "Dormy Inn 谷町",
        "fromEventId": null,
        "toEventId": null,
        "operator": null,
        "line": null,
        "durationMin": 10,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "timeHint": "night",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": "https://www.dormy-hotels.com/dormyinn/hotels/osaka_tanimachi/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null,
      "tags": [
        "溫泉",
        "酒店"
      ],
      "moodColor": "#2A7F7A",
      "id": "evt_d3_09",
      "day": 3,
      "time": "20:50",
      "type": "rest",
      "title": "浪華之湯",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區內本町2-1-9",
      "addressLocal": "大阪府大阪市中央区内本町2-1-9 天然温泉 浪華の湯 ドーミーイン大阪谷町",
      "coords": [
        34.6835,
        135.5139
      ],
      "note": "【攻略】13 樓天然溫泉連桑拿，住客免費；收工即泡。\n【實用】15:00–翌日 10:00；同層有吸煙亭，離遠坐。",
      "openHours": "15:00–翌日 10:00（住客）",
      "price": "住客免費"
    },
    {
      "id": "trp_d4_01",
      "day": 4,
      "time": "09:05",
      "timeHint": "morning",
      "type": "transport",
      "title": "前往祇園四條（谷町線 → 京阪本線特急）",
      "cityId": "kyoto",
      "address": "谷町四丁目站",
      "addressLocal": "Osaka Metro 谷町四丁目駅",
      "coords": [
        34.6826,
        135.5176
      ],
      "tags": [
        "地鐵",
        "京阪"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】谷町四丁目站谷町線往東。\n【轉車】京橋或適站轉京阪本線特急往出町柳。\n【下車】祇園四條，步行至一之傳。\n【車資】IC 約 ¥600–700。\n【備案】時間緊則略過鍵善，直奔一之傳 12:30。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，不用趕指定班次",
      "price": "IC 約 ¥660",
      "website": null,
      "cost": {
        "amount": 660,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "train",
        "from": "谷町四丁目",
        "to": "祇園四條",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵／京阪",
        "line": "谷町線→京阪本線特急",
        "durationMin": 80,
        "stopCount": 12,
        "liveApi": null
      }
    },
    {
      "id": "evt_d4_03",
      "day": 4,
      "time": "11:20",
      "timeHint": "afternoon",
      "type": "food",
      "title": "鍵善良房 四條本店（鍵善良房 四条本店）",
      "cityId": "kyoto",
      "address": "日本京都府京都市東山區祇園町北側264",
      "addressLocal": "〒605-0073 京都府京都市東山区祇園町北側264",
      "coords": [
        35.004,
        135.7748
      ],
      "tags": [
        "和菓子",
        "葛切",
        "休息"
      ],
      "moodColor": "#A0785A",
      "note": "【攻略】和菓子；午膳前短逛（時間緊可略，直奔一之傳）。\n【實用】全席禁煙；水曜應開；walk-in／或排隊；唔使預約。",
      "phone": "+81-75-561-1818",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "喫茶 10:00–18:00（L.O. 17:30）；逢星期一休（假期則翌平日）",
      "price": "葛切 ¥1,600",
      "website": "https://www.kagizen.co.jp/pages/shops-honten",
      "cost": {
        "amount": 1600,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d4_02",
      "day": 4,
      "time": "12:30",
      "timeHint": "afternoon",
      "type": "food",
      "title": "一之傳 祇園別館（一の傳 祇園ハナレ）",
      "cityId": "kyoto",
      "address": "日本京都府京都市東山區祇園町南側566",
      "addressLocal": "京都府京都市東山区祇園町南側566 京都一の傳 祇園ハナレ",
      "coords": [
        35.0034,
        135.7755
      ],
      "tags": [
        "西京漬",
        "午市御膳",
        "網上預約"
      ],
      "moodColor": "#A0785A",
      "note": "【Tabelog】3.08\n【攻略】日本料理御膳約 ¥4,900；限時約 1 小時。\n【預約】Tabelog 全預約；不定休⚠️出發前再核。\n【實用】全席禁煙。\n【備案】祇園綺羅良（祇をん きらら；見靈感）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "午市 11:00、12:30、14:00 三輪；不定休",
      "price": "銀鱈藏味噌燒御膳 ¥4,900",
      "website": "https://tabelog.com/kyoto/A2601/A260301/26044729/",
      "cost": {
        "amount": 4900,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "timeHint": "afternoon",
      "type": "transport",
      "cityId": "kyoto",
      "tags": [
        "私鐵"
      ],
      "moodColor": "#2A7F7A",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": null,
      "cost": {
        "amount": 270,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "openHours": "班次頻密，不用趕指定班次",
      "price": "IC ¥270",
      "id": "trp_d4_04",
      "day": 4,
      "time": "14:00",
      "title": "前往中書島（京阪本線特急）",
      "address": "祇園四條",
      "addressLocal": "京阪本線 祇園四条駅",
      "coords": [
        35.0036,
        135.7722
      ],
      "note": "【上車】京阪祇園四條往大阪方向特急。\n【下車】中書島，步行至月桂冠。\n【車資】IC 約 ¥270。\n【備案】普通車多停幾站。",
      "transport": {
        "mode": "train",
        "from": "祇園四條",
        "to": "中書島",
        "fromEventId": null,
        "toEventId": null,
        "operator": "京阪",
        "line": "京阪本線特急",
        "durationMin": 15,
        "stopCount": 4,
        "liveApi": null
      }
    },
    {
      "id": "evt_d4_05",
      "day": 4,
      "time": "14:30",
      "timeHint": "afternoon",
      "type": "sight",
      "title": "月桂冠大倉記念館",
      "cityId": "kyoto",
      "address": "日本京都府京都市伏見區南濱町247",
      "addressLocal": "京都府京都市伏見区南浜町247 月桂冠大倉記念館",
      "coords": [
        34.93,
        135.7608
      ],
      "tags": [
        "清酒",
        "資料館",
        "試飲"
      ],
      "moodColor": "#6B7F7A",
      "note": "【攻略】酒造紀念館；¥600 walk-in。\n【實用】09:30–16:30。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "09:30–16:30（16:00 前入館）",
      "price": "¥600（不收現金，用信用卡）",
      "website": "https://www.gekkeikan.co.jp/enjoy/museum/access/",
      "cost": {
        "amount": 600,
        "currency": "JPY",
        "category": "ticket"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "timeHint": "afternoon",
      "type": "transport",
      "cityId": "kyoto",
      "tags": [
        "步行"
      ],
      "moodColor": "#2A7F7A",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "openHours": "步行約 5–8 分鐘",
      "price": "免費",
      "id": "trp_d4_06",
      "day": 4,
      "time": "15:30",
      "title": "前往伏水酒藏小路（步行）",
      "address": "月桂冠大倉記念館",
      "addressLocal": "京都府京都市伏見区南浜町247",
      "coords": [
        34.93,
        135.7608
      ],
      "note": "【上車】紀念館步行。\n【下車】伏水酒藏小路。\n【車資】免費。\n【備案】小路內各店 TableCheck。",
      "transport": {
        "mode": "walk",
        "from": "月桂冠大倉記念館",
        "to": "伏水酒藏小路",
        "fromEventId": null,
        "toEventId": null,
        "operator": null,
        "line": null,
        "durationMin": 6,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "id": "evt_d4_07",
      "day": 4,
      "time": "15:45",
      "timeHint": "afternoon",
      "type": "food",
      "title": "伏水酒藏小路（伏水酒蔵小路）",
      "cityId": "kyoto",
      "address": "日本京都府京都市伏見區平野町82-2",
      "addressLocal": "京都府京都市伏見区平野町82-2 伏水酒蔵小路",
      "coords": [
        34.9325,
        135.7605
      ],
      "tags": [
        "清酒",
        "伏見",
        "試飲"
      ],
      "moodColor": "#A0785A",
      "note": "【今次】伏見清酒飲比。\n【攻略】日本酒吧「酒藏」吧枱；點十八藏飲比配小菜。\n【預約】可 TableCheck 訂吧枱。\n【實用】Feb 10（三）營業；全席禁煙。附近有小神社，只經過、不參拜。\n【備案】小路內立飲；或轉北新地和 Demekin。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "11:00–22:00（L.O. 21:00）；星期二只有日本酒吧「酒藏」營業",
      "price": "十八藏飲比 ¥3,280（含稅）",
      "website": "https://www.tablecheck.com/ja/shops/fushimi-sakagura-kouji/reserve",
      "cost": {
        "amount": 3280,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "timeHint": "evening",
      "type": "transport",
      "cityId": "osaka",
      "tags": [
        "私鐵",
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": null,
      "cost": {
        "amount": 700,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "openHours": "班次頻密，不用趕指定班次",
      "price": "IC ¥700",
      "id": "trp_d4_08",
      "day": 4,
      "time": "18:30",
      "title": "前往北新地（京阪→地鐵）",
      "address": "伏水酒藏小路",
      "addressLocal": "京都府京都市伏見区",
      "coords": [
        34.9325,
        135.7605
      ],
      "note": "【上車】京阪往大阪。\n【轉車】適站轉地鐵到肥後橋／淀屋橋一帶北新地。\n【下車】和 Demekin。\n【車資】IC 約 ¥700。\n【備案】趕收工改日本酒原價酒藏 谷町四丁目（酒店近）。",
      "transport": {
        "mode": "train",
        "from": "中書島",
        "to": "北新地",
        "fromEventId": null,
        "toEventId": null,
        "operator": "京阪／大阪地鐵",
        "line": "京阪本線→地鐵",
        "durationMin": 55,
        "stopCount": 10,
        "liveApi": null
      }
    },
    {
      "id": "evt_d4_09",
      "day": 4,
      "time": "19:40",
      "timeHint": "evening",
      "type": "food",
      "title": "和 Demekin（和デメキン）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區上本町西3-3-30",
      "addressLocal": "大阪府大阪市中央区上本町西3-3-30 和デメキン",
      "coords": [
        34.6732,
        135.5191
      ],
      "tags": [
        "和食",
        "居酒屋",
        "日本酒",
        "可預約"
      ],
      "moodColor": "#A0785A",
      "note": "【攻略】北新地立飲／小菜；水曜應開（月休）。\n【預約】Tabelog 網上訂座位（只訂座位）；約 Dec 中旬開放。\n【實用】全席禁煙。\n【備案】日本酒原價酒藏 谷町四丁目。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "17:00–22:00；星期一休",
      "price": "預算 ¥4,000–4,999（單點，只訂座位）",
      "website": "https://tabelog.com/osaka/A2701/A270204/27110023/",
      "cost": {
        "amount": 5000,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "timeHint": "evening",
      "type": "transport",
      "cityId": "osaka",
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": null,
      "cost": {
        "amount": 230,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "openHours": "班次頻密，不用趕指定班次",
      "price": "IC ¥230",
      "id": "trp_d4_10",
      "day": 4,
      "time": "21:30",
      "title": "前往谷町四丁目（地鐵谷町線）",
      "address": "北新地",
      "addressLocal": "大阪府大阪市北区",
      "coords": [
        34.697,
        135.5
      ],
      "note": "【上車】近站轉谷町線。\n【下車】谷町四丁目，回酒店。\n【車資】IC 約 ¥230。\n【備案】的士約 15 分鐘。",
      "transport": {
        "mode": "train",
        "from": "東梅田",
        "to": "谷町四丁目",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵",
        "line": "谷町線",
        "durationMin": 10,
        "stopCount": 3,
        "liveApi": null
      }
    },
    {
      "timeHint": "night",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": "https://www.dormy-hotels.com/dormyinn/hotels/osaka_tanimachi/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null,
      "tags": [
        "溫泉",
        "酒店"
      ],
      "moodColor": "#2A7F7A",
      "id": "evt_d4_11",
      "day": 4,
      "time": "21:50",
      "type": "rest",
      "title": "浪華之湯",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區內本町2-1-9",
      "addressLocal": "大阪府大阪市中央区内本町2-1-9 天然温泉 浪華の湯 ドーミーイン大阪谷町",
      "coords": [
        34.6835,
        135.5139
      ],
      "note": "【攻略】13 樓天然溫泉連桑拿，住客免費；收工即泡。\n【實用】15:00–翌日 10:00；同層有吸煙亭，離遠坐。",
      "openHours": "15:00–翌日 10:00（住客）",
      "price": "住客免費"
    },
    {
      "timeHint": "morning",
      "type": "transport",
      "cityId": "osaka",
      "tags": [
        "JR",
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": null,
      "cost": {
        "amount": 1640,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "openHours": "班次頻密，不用趕指定班次",
      "price": "IC ¥1,640",
      "id": "trp_d5_01",
      "day": 5,
      "time": "08:40",
      "title": "前往網干（谷町線 → JR 新快速）",
      "address": "谷町四丁目站",
      "addressLocal": "Osaka Metro 谷町四丁目駅",
      "coords": [
        34.6826,
        135.5176
      ],
      "note": "【上車】谷町四丁目→東梅田→JR 大阪，JR 神戶線新快速往姬路方向至網干。\n【下車】JR 網干，徒歩約 3–5 分鐘到本田商店。\n【車資】IC 大阪↔網干約 ¥1,640。\n【備案】推 10:30 場；單程約 1 小時 35–50 分。",
      "transport": {
        "mode": "train",
        "from": "谷町四丁目",
        "to": "網干",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵／JR 西日本",
        "line": "谷町線→JR 神戶線新快速",
        "durationMin": 100,
        "stopCount": 15,
        "liveApi": null
      }
    },
    {
      "timeHint": "morning",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": "https://www.taturiki.com/",
      "cost": {
        "amount": 2000,
        "currency": "JPY",
        "category": "ticket"
      },
      "status": "pending",
      "source": "ai",
      "transport": null,
      "tags": [
        "清酒",
        "利酒會"
      ],
      "moodColor": "#6B7F7A",
      "id": "evt_d5_02",
      "day": 5,
      "time": "10:30",
      "type": "sight",
      "title": "龍力 新酒利酒會（本田商店）",
      "cityId": "osaka",
      "address": "日本兵庫縣姬路市網干區高田361-1",
      "addressLocal": "兵庫県姫路市網干区高田361-1 本田商店",
      "coords": [
        34.8142,
        134.5816
      ],
      "note": "【今次】建國記念日假日場；往年 10:30／14:00；推 10:30 接午膳。\n【攻略】試飲新酒；可自帶食物；唔入蔵；禮貌避濃香。\n【預約】只網上 Air 預約（不收電話）；往年 Jan 上旬 10:00 開放；1 人 OK。\n【實用】當日現金 ¥2,000；約 1.5 小時。",
      "openHours": "假日場往年 10:30–12:00／14:00–15:30（2027 約 Jan 上旬公布）",
      "price": "當日現金 ¥2,000／人"
    },
    {
      "timeHint": "afternoon",
      "type": "transport",
      "cityId": "osaka",
      "tags": [
        "的士"
      ],
      "moodColor": "#2A7F7A",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": null,
      "cost": {
        "amount": 2200,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "openHours": "的士隨時",
      "price": "的士約 ¥2,200",
      "id": "trp_d5_03",
      "day": 5,
      "time": "12:15",
      "title": "前往和之味處（的士）",
      "address": "JR 網干",
      "addressLocal": "JR 網干駅",
      "coords": [
        34.8142,
        134.5816
      ],
      "note": "【上車】JR 網干站前的士。\n【下車】和之味處（太子町太田）。\n【車資】約 ¥2,000–2,500（約 8–12 分／2.4 km）。\n【備案】改 Gusto 姬路網干店（徒歩約 9 分；見靈感）。",
      "transport": {
        "mode": "taxi",
        "from": "JR 網干",
        "to": "和之味處",
        "fromEventId": null,
        "toEventId": null,
        "operator": null,
        "line": null,
        "durationMin": 10,
        "stopCount": 1,
        "liveApi": null
      }
    },
    {
      "timeHint": "afternoon",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": "https://www.hotpepper.jp/strJ000490168/",
      "cost": {
        "amount": 2000,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null,
      "tags": [
        "和食",
        "烏冬"
      ],
      "moodColor": "#A0785A",
      "id": "evt_d5_04",
      "day": 5,
      "time": "12:30",
      "type": "food",
      "title": "和之味處（和の味処 いろり）",
      "cityId": "osaka",
      "address": "日本兵庫縣揖保郡太子町太田2222-1",
      "addressLocal": "兵庫県揖保郡太子町太田2222-1 和の味処 いろり",
      "coords": [
        34.8311,
        134.6007
      ],
      "note": "【攻略】自家製烏冬＋和膳；午餐全席禁煙（晚分煙→只排午）。\n【預約】Hot Pepper（店評約 4.1）；Hot Pepper 網上訂（只訂座位／席のみ）／1 人；Feb 日曆 Nov 4, 2026 未開。\n【實用】祝日 11:00–14:00（L.O. 14）；可刷卡（滿 ¥2,000）。\n【備案】Gusto 姬路網干店（全席禁煙；walk-in）。",
      "openHours": "祝日 11:00–14:00（L.O. 14）；月休（祝則改火）",
      "price": "午餐估算 ¥1,500–2,500"
    },
    {
      "timeHint": "afternoon",
      "type": "transport",
      "cityId": "osaka",
      "tags": [
        "JR",
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": null,
      "cost": {
        "amount": 1640,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "openHours": "班次頻密，不用趕指定班次",
      "price": "IC 約 ¥1,640",
      "id": "trp_d5_05",
      "day": 5,
      "time": "14:20",
      "title": "前往天神橋（JR→地鐵）",
      "address": "網干站一帶",
      "addressLocal": "JR 網干駅",
      "coords": [
        34.8311,
        134.6007
      ],
      "note": "【上車】的士或巴士回 JR 網干，新快速往大阪。\n【轉車】大阪／東梅田轉谷町線到天神橋筋四丁目。\n【下車】天神橋筋四丁目；沿天神橋筋商店街逛到 17:30 黒兔，唔經酒店。\n【車資】IC 約 ¥1,640＋短程。\n【備案】若揀 14:00 利酒場則利酒後直回、午餐改輕食。",
      "transport": {
        "mode": "train",
        "from": "網干",
        "to": "天神橋筋四丁目",
        "fromEventId": null,
        "toEventId": null,
        "operator": "JR 西日本／大阪地鐵",
        "line": "JR 神戶線→谷町線",
        "durationMin": 110,
        "stopCount": 15,
        "liveApi": null
      }
    },
    {
      "timeHint": "evening",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": "https://tabelog.com/osaka/A2701/A270103/27136227/",
      "cost": {
        "amount": 5000,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null,
      "tags": [
        "食堂",
        "清酒"
      ],
      "moodColor": "#A0785A",
      "id": "evt_d5_06",
      "day": 5,
      "time": "17:30",
      "type": "food",
      "title": "黑兔食堂（食堂 黒うさぎ）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區天神橋",
      "addressLocal": "大阪府大阪市北区天神橋 食堂 黒うさぎ",
      "coords": [
        34.708,
        135.511
      ],
      "note": "【Tabelog】3.68\n【攻略】中華技法配清酒；坐吧枱點當日小菜。\n【預約】官網優先＋Tabelog 網上訂；假日 15:00–24:00。\n【實用】全席禁煙（店外吸煙）。\n【備案】稻田酒店立飲／淺野日本酒店。",
      "openHours": "15:00–24:00；星期二及第 4 個星期三休，假期營業",
      "price": "估算 ¥4,000–6,000"
    },
    {
      "timeHint": "evening",
      "type": "transport",
      "cityId": "osaka",
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": null,
      "cost": {
        "amount": 230,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "openHours": "班次頻密，不用趕指定班次",
      "price": "IC ¥230",
      "id": "trp_d5_07",
      "day": 5,
      "time": "20:00",
      "title": "前往谷町四丁目（地鐵谷町線）",
      "address": "天神橋筋",
      "addressLocal": "大阪府大阪市北区天神橋",
      "coords": [
        34.708,
        135.511
      ],
      "note": "【上車】天神橋筋四丁目等地鐵站。\n【下車】谷町四丁目，回酒店。\n【車資】IC 約 ¥230。\n【備案】的士約 15 分鐘。",
      "transport": {
        "mode": "train",
        "from": "天神橋筋四丁目",
        "to": "谷町四丁目",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵",
        "line": "谷町線",
        "durationMin": 12,
        "stopCount": 4,
        "liveApi": null
      }
    },
    {
      "timeHint": "night",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": "https://www.dormy-hotels.com/dormyinn/hotels/osaka_tanimachi/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null,
      "tags": [
        "溫泉",
        "酒店"
      ],
      "moodColor": "#2A7F7A",
      "id": "evt_d5_08",
      "day": 5,
      "time": "20:20",
      "type": "rest",
      "title": "浪華之湯",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區內本町2-1-9",
      "addressLocal": "大阪府大阪市中央区内本町2-1-9 天然温泉 浪華の湯 ドーミーイン大阪谷町",
      "coords": [
        34.6835,
        135.5139
      ],
      "note": "【攻略】13 樓天然溫泉連桑拿，住客免費；收工即泡。\n【實用】15:00–翌日 10:00；同層有吸煙亭，離遠坐。",
      "openHours": "15:00–翌日 10:00（住客）",
      "price": "住客免費"
    },
    {
      "id": "trp_d6_01",
      "day": 6,
      "time": "08:40",
      "timeHint": "morning",
      "type": "transport",
      "title": "前往池田（谷町線 → 阪急寶塚線急行）",
      "cityId": "osaka",
      "address": "大阪地鐵谷町四丁目站 2 號月台",
      "addressLocal": null,
      "coords": [
        34.6826,
        135.5176
      ],
      "tags": [
        "地鐵",
        "阪急"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】谷町四丁目站 2 號月台，谷町線往大日 3 個站到東梅田。\n【轉車】步行到阪急大阪梅田，寶塚線急行到池田。\n【下車】池田站東口，步行約 5 分鐘。\n【車資】IC ¥520。\n【備案】準急或多約 5–10 分鐘。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，不用趕指定班次",
      "price": "IC ¥520（ICOCA）",
      "website": null,
      "cost": {
        "amount": 520,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "train",
        "from": "谷町四丁目",
        "to": "池田",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵／阪急電鐵",
        "line": "谷町線 → 阪急寶塚線",
        "durationMin": 38,
        "stopCount": 8,
        "liveApi": null
      }
    },
    {
      "id": "evt_d6_02",
      "day": 6,
      "time": "09:30",
      "timeHint": "morning",
      "type": "sight",
      "title": "杯麵博物館 大阪池田（カップヌードルミュージアム 大阪池田）",
      "cityId": "osaka",
      "address": "日本大阪府池田市滿壽美町8-25",
      "addressLocal": "大阪府池田市満寿美町8-25 カップヌードルミュージアム 大阪池田",
      "coords": [
        34.8178,
        135.4264
      ],
      "tags": [
        "驚喜",
        "博物館",
        "體驗"
      ],
      "moodColor": "#6B7F7A",
      "note": "【今次】杯麵博物館；五開✅；盡早完成 My CUP。\n【攻略】入館先領 My CUP 號碼票；設計杯身、揀 4 款配料（約 45 分鐘）。雞湯工房若節日主題則跳過。\n【實用】入館免費；My CUP ¥500 現金售票機；全場禁煙；09:30–16:30（入館至 15:30）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "09:30–16:30（入館至 15:30）；逢星期二休",
      "price": "入館免費；My CUPNOODLES Factory ¥500",
      "website": "https://www.cupnoodles-museum.jp/ja/osaka_ikeda/",
      "cost": {
        "amount": 500,
        "currency": "JPY",
        "category": "ticket"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d6_03",
      "day": 6,
      "time": "11:20",
      "timeHint": "morning",
      "type": "transport",
      "title": "前往伊丹（阪急寶塚線 → JR 寶塚線）",
      "cityId": "osaka",
      "address": "阪急池田站 1 號月台",
      "addressLocal": null,
      "coords": [
        34.8218,
        135.4256
      ],
      "tags": [
        "阪急",
        "JR"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】阪急池田往大阪方向，轉 JR／阪急至伊丹。\n【下車】伊丹，步行至長壽藏。\n【車資】IC 約 ¥220–350。\n【備案】極趕 Pearl 可改 Ikari 熟食後直去神戶。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，不用趕指定班次",
      "price": "IC ¥350（ICOCA）",
      "website": null,
      "cost": {
        "amount": 350,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "train",
        "from": "池田",
        "to": "JR 伊丹",
        "fromEventId": null,
        "toEventId": null,
        "operator": "阪急電鐵／JR 西日本",
        "line": "阪急寶塚線 → JR 寶塚線",
        "durationMin": 25,
        "stopCount": 3,
        "liveApi": null
      }
    },
    {
      "id": "evt_d6_04",
      "day": 6,
      "time": "12:00",
      "timeHint": "afternoon",
      "type": "food",
      "title": "白雪酒藏餐廳 長壽藏（白雪ブルワリーレストラン長寿蔵）",
      "cityId": "osaka",
      "address": "日本兵庫縣伊丹市中央3-4-15",
      "addressLocal": "兵庫県伊丹市中央3-4-15 白雪ブルワリービレッジ 白雪ブルワリーレストラン長寿蔵",
      "coords": [
        34.7813,
        135.4176
      ],
      "tags": [
        "午餐",
        "精釀啤酒",
        "清酒"
      ],
      "moodColor": "#A0785A",
      "note": "【Tabelog】3.49\n【攻略】縮時短坐即走；商店／資料館可跳。白雪蔵祭規律日＝Feb 14（已回程）→本日非主疊。\n【預約】可網上訂（只訂座位）；趕 Pearl＋梵高則改 Ikari 超市熟食。\n【實用】午市 14:00 前落單；全席禁煙；五開。",
      "phone": "+81-72-773-1111",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "11:30–21:00（午市 L.O. 14:00）；逢星期二休",
      "price": "午市約 ¥1,000–1,999；連飲品約 ¥2,500",
      "website": "https://tabelog.com/hyogo/A2803/A280306/28003767/",
      "cost": {
        "amount": 2500,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "timeHint": "afternoon",
      "type": "transport",
      "cityId": "kobe",
      "tags": [
        "JR",
        "私鐵"
      ],
      "moodColor": "#2A7F7A",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": null,
      "cost": {
        "amount": 500,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "openHours": "班次頻密，不用趕指定班次",
      "price": "IC 約 ¥500",
      "id": "trp_d6_05",
      "day": 6,
      "time": "13:15",
      "title": "前往三之宮（阪急／JR）",
      "address": "伊丹長壽藏",
      "addressLocal": "兵庫県伊丹市",
      "coords": [
        34.7813,
        135.4176
      ],
      "note": "【上車】伊丹站轉往神戶三宮／元町。\n【下車】三宮或元町，步行至 Pearl Pearl。\n【車資】IC 約 ¥400–600。\n【備案】須 17:00 前到 Pearl；留緩衝。",
      "transport": {
        "mode": "train",
        "from": "伊丹",
        "to": "三宮",
        "fromEventId": null,
        "toEventId": null,
        "operator": "阪急／JR",
        "line": "神戶方向",
        "durationMin": 40,
        "stopCount": 8,
        "liveApi": null
      }
    },
    {
      "id": "evt_d6_06",
      "day": 6,
      "time": "15:00",
      "timeHint": "afternoon",
      "type": "shop",
      "title": "Pearl Pearl Kobe（パール・パール・コウベ）",
      "cityId": "kobe",
      "address": "日本兵庫縣神戶市中央區江戶町98-1 東町・江戶町大廈 6 樓",
      "addressLocal": "兵庫県神戸市中央区江戸町98-1 東町・江戸町ビル6F パール・パール・コウベ",
      "coords": [
        34.69,
        135.1946
      ],
      "tags": [
        "珍珠",
        "舊居留地",
        "可免稅"
      ],
      "moodColor": "#8C8378",
      "note": "【今次】必排買珍珠；平日 10–17；須 17:00 前到店。\n【攻略】比較單顆與連材；問珠層、鑑別書、金屬刻印。\n【日文】「これはあこや真珠ですか？淡水ですか？」\n【實用】五開✅；walk-in；排在梵高前。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "10:00–17:00；星期六、日及假日休",
      "price": "¥7,700 起（店內價錢範圍 ¥20,000–800,000）",
      "website": "https://www.pkobe.jp/page/40",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "timeHint": "afternoon",
      "type": "transport",
      "cityId": "kobe",
      "tags": [
        "步行"
      ],
      "moodColor": "#2A7F7A",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "openHours": "步行約 8–12 分鐘",
      "price": "免費",
      "id": "trp_d6_07",
      "day": 6,
      "time": "16:30",
      "title": "前往神戶市立博物館（步行）",
      "address": "Pearl Pearl Kobe",
      "addressLocal": "兵庫県神戸市中央区",
      "coords": [
        34.69,
        135.1946
      ],
      "note": "【上車】Pearl 步行。\n【下車】神戶市立博物館。\n【車資】免費。\n【備案】南京町春節祭＝縮或靈感（不參與祈願）；伊藤 Grill 僅靈感。",
      "transport": {
        "mode": "walk",
        "from": "Pearl Pearl",
        "to": "神戶市立博物館",
        "fromEventId": null,
        "toEventId": null,
        "operator": null,
        "line": null,
        "durationMin": 10,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "id": "evt_d6_08",
      "day": 6,
      "time": "16:45",
      "timeHint": "afternoon",
      "type": "sight",
      "title": "神戶市立博物館",
      "cityId": "kobe",
      "address": "日本兵庫縣神戶市中央區京町24",
      "addressLocal": "兵庫県神戸市中央区京町24 神戸市立博物館",
      "coords": [
        34.6879,
        135.1914
      ],
      "tags": [
        "美術",
        "梵高",
        "特別展"
      ],
      "moodColor": "#6B7F7A",
      "note": "【今次】大梵高展「阿爾的吊橋」（アルルの跳ね橋）；主軸；五開至 20:00；留充裕觀展。\n【攻略】平日不用預約優先；必看《阿爾勒的吊橋》等。\n【預約】前售至 Feb 5 23:59（¥2,600）；之後當日票 ¥2,800。\n【實用】展室入場至閉館前 30 分鐘。",
      "phone": "+81-78-391-0035",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "09:30–17:30（星期五、六至 20:00）；展室入場至閉館前 30 分鐘；逢星期一休（星期一為假期則開館）",
      "price": "大梵高展 預售 ¥2,600（至 Feb 5 23:59 日本時間）；當日票 ¥2,800",
      "website": "https://e-tix.jp/vangogh_kobe/",
      "cost": {
        "amount": 2600,
        "currency": "JPY",
        "category": "ticket"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "timeHint": "evening",
      "type": "transport",
      "cityId": "kobe",
      "tags": [
        "步行"
      ],
      "moodColor": "#2A7F7A",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "openHours": "步行約 10 分鐘",
      "price": "免費",
      "id": "trp_d6_09",
      "day": 6,
      "time": "19:45",
      "title": "前往播州地酒 HINO（步行）",
      "address": "神戶市立博物館",
      "addressLocal": "兵庫県神戸市中央区京町24",
      "coords": [
        34.6879,
        135.1914
      ],
      "note": "【上車】博物館步行至三宮。\n【下車】播州地酒 HINO。\n【車資】免費。\n【備案】Propeller／Inazuma（見靈感）。",
      "transport": {
        "mode": "walk",
        "from": "神戶市立博物館",
        "to": "ひの",
        "fromEventId": null,
        "toEventId": null,
        "operator": null,
        "line": null,
        "durationMin": 10,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "id": "evt_d6_10",
      "day": 6,
      "time": "20:00",
      "timeHint": "evening",
      "type": "food",
      "title": "播州地酒 HINO（播州地酒 ひの）",
      "cityId": "kobe",
      "address": "日本兵庫縣神戶市中央區北長狹通2-4-7 TSK 三宮大廈 4 樓",
      "addressLocal": "兵庫県神戸市中央区北長狭通2-4-7 TSK三宮ビル4F 播州地酒 ひの",
      "coords": [
        34.6921,
        135.1903
      ],
      "tags": [
        "兵庫地酒",
        "居酒屋",
        "百名店",
        "可預約"
      ],
      "moodColor": "#A0785A",
      "note": "【Tabelog】3.64\n【攻略】三宮清酒吧；席料 ¥500。\n【預約】Tabelog 網上訂；約 Jan 15, 2027 開 Feb。\n【實用】全席禁煙。\n【備案】Propeller／Inazuma。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "星期一至六 18:00–22:00；星期日休",
      "price": "預算 ¥6,000–7,999＋席料 ¥500",
      "website": "https://tabelog.com/hyogo/A2801/A280101/28023316/",
      "cost": {
        "amount": 7500,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "timeHint": "evening",
      "type": "transport",
      "cityId": "osaka",
      "tags": [
        "JR",
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": null,
      "cost": {
        "amount": 660,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "openHours": "班次頻密，不用趕指定班次",
      "price": "IC ¥660",
      "id": "trp_d6_11",
      "day": 6,
      "time": "22:00",
      "title": "前往谷町四丁目（JR→地鐵）",
      "address": "三宮",
      "addressLocal": "兵庫県神戸市中央区",
      "coords": [
        34.6921,
        135.1903
      ],
      "note": "【上車】JR 三宮新快速往大阪。\n【轉車】大阪／東梅田轉谷町線。\n【下車】谷町四丁目，回酒店。\n【車資】IC ¥660。\n【備案】末班前出發。",
      "transport": {
        "mode": "train",
        "from": "三宮",
        "to": "谷町四丁目",
        "fromEventId": null,
        "toEventId": null,
        "operator": "JR 西日本／大阪地鐵",
        "line": "JR 神戶線→谷町線",
        "durationMin": 50,
        "stopCount": 8,
        "liveApi": null
      }
    },
    {
      "timeHint": "night",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": "https://www.dormy-hotels.com/dormyinn/hotels/osaka_tanimachi/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null,
      "tags": [
        "溫泉",
        "酒店"
      ],
      "moodColor": "#2A7F7A",
      "id": "evt_d6_12",
      "day": 6,
      "time": "23:00",
      "type": "rest",
      "title": "浪華之湯",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區內本町2-1-9",
      "addressLocal": "大阪府大阪市中央区内本町2-1-9 天然温泉 浪華の湯 ドーミーイン大阪谷町",
      "coords": [
        34.6835,
        135.5139
      ],
      "note": "【攻略】13 樓天然溫泉連桑拿，住客免費；收工即泡。\n【實用】15:00–翌日 10:00；同層有吸煙亭，離遠坐。",
      "openHours": "15:00–翌日 10:00（住客）",
      "price": "住客免費"
    },
    {
      "timeHint": "morning",
      "type": "transport",
      "cityId": "kobe",
      "tags": [
        "私鐵",
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": null,
      "cost": {
        "amount": 500,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "openHours": "班次頻密，不用趕指定班次",
      "price": "IC ¥500",
      "id": "trp_d7_01",
      "day": 7,
      "time": "09:20",
      "title": "前往西宮（谷町線→阪神）",
      "address": "谷町四丁目站",
      "addressLocal": "Osaka Metro 谷町四丁目駅",
      "coords": [
        34.6826,
        135.5176
      ],
      "note": "【上車】谷町四丁目→東梅田→阪神本線往西宮。\n【下車】西宮，步行至白鹿蔵開會場。\n【車資】IC 約 ¥400–540。\n【備案】若 2027 未公布或非當日→灘館路線（菊正宗／浜福鶴／酒博物館；見靈感）。",
      "transport": {
        "mode": "train",
        "from": "谷町四丁目",
        "to": "西宮",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵／阪神",
        "line": "谷町線→阪神本線",
        "durationMin": 45,
        "stopCount": 8,
        "liveApi": null
      }
    },
    {
      "id": "evt_d7_02",
      "day": 7,
      "time": "10:30",
      "timeHint": "morning",
      "type": "food",
      "title": "白鹿 西宮蔵開（辰馬本家酒造）",
      "cityId": "kobe",
      "address": "日本兵庫縣西宮市建石町2-10 辰馬本家酒造",
      "addressLocal": "兵庫県西宮市建石町2-10 辰馬本家酒造 白鹿",
      "coords": [
        34.7292,
        135.3358
      ],
      "tags": [
        "清酒",
        "藏開",
        "攤位午餐"
      ],
      "moodColor": "#A0785A",
      "note": "【今次】規律推 Feb 13＝Feb第 2 六；往年 10:00–15:00；只現金。\n【攻略】有料試飲當日限定；午餐攤位輕食。飲酒優先→即使節日主題仍可。途經小神社，只經過、不參拜。\n【實用】2027 日期約 Dec 中公布。\n【備案】非當日→菊正宗／浜福鶴／酒博物館／白鹿 Classics；午改酒林（見靈感）。",
      "phone": "+81-798-32-2727",
      "whatsapp": null,
      "line": null,
      "messenger": "https://m.me/hakushika.tatsuumahonke",
      "openHours": "往年 10:00–15:00（2027 年日期約 Dec 中旬發表）",
      "price": "免費入場；攤位午餐＋有料試飲約 ¥3,500（現金，估算）",
      "website": "https://www.hakushika.co.jp/",
      "cost": {
        "amount": 3500,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "timeHint": "afternoon",
      "type": "transport",
      "cityId": "osaka",
      "tags": [
        "私鐵",
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": null,
      "cost": {
        "amount": 400,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "openHours": "班次頻密，不用趕指定班次",
      "price": "IC ¥400",
      "id": "trp_d7_03",
      "day": 7,
      "time": "15:30",
      "title": "前往北新地（阪神→地鐵）",
      "address": "西宮白鹿",
      "addressLocal": "兵庫県西宮市",
      "coords": [
        34.7292,
        135.3358
      ],
      "note": "【上車】阪神往大阪梅田。\n【轉車】適站到北新地。\n【下車】燒鳥店附近；約 15:00 前後蔵開收束後回阪。\n【車資】IC 約 ¥400。\n【備案】勿再塞遠點。",
      "transport": {
        "mode": "train",
        "from": "西宮",
        "to": "北新地",
        "fromEventId": null,
        "toEventId": null,
        "operator": "阪神／大阪地鐵",
        "line": "阪神本線",
        "durationMin": 35,
        "stopCount": 6,
        "liveApi": null
      }
    },
    {
      "id": "evt_d7_04",
      "title": "燒鳥 Sumiemon（焼き鳥すみえもん）",
      "note": "【Tabelog】3.62\n【攻略】特選串套餐 ¥6,280＋席料 ¥550＋飲；U 字吧枱。\n【預約】Tabelog／TableCheck 網上訂；Feb 日曆估 Nov 中, 2026 開。\n【實用】六開；日・祝休；全席禁煙。途經小神社，只經過、不參拜。\n【備案】玄盛；GAJO 僅高預算備註（唔作主選）。",
      "type": "food",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區曾根崎新地1-3-3 好陽大廈 1 樓",
      "addressLocal": "大阪府大阪市北区曽根崎新地1-3-3 好陽ビル 1F 焼き鳥すみえもん",
      "coords": [
        34.6973,
        135.4969
      ],
      "phone": "+81-6-6616-8683",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "星期一至六 18:00–23:00；星期日及假期休",
      "price": "套餐 ¥6,280＋席料 ¥550（約 ¥6,830，飲品另計）",
      "website": "https://tabelog.com/osaka/A2701/A270101/27148344/",
      "status": "pending",
      "source": "ai",
      "day": 7,
      "time": "18:00",
      "timeHint": "evening",
      "transport": null,
      "cost": {
        "amount": 6830,
        "currency": "JPY",
        "category": "food"
      },
      "tags": [
        "燒鳥",
        "北新地"
      ],
      "moodColor": "#A0785A"
    },
    {
      "timeHint": "evening",
      "type": "transport",
      "cityId": "osaka",
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": null,
      "cost": {
        "amount": 230,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "openHours": "班次頻密，不用趕指定班次",
      "price": "IC ¥230",
      "id": "trp_d7_05",
      "day": 7,
      "time": "20:30",
      "title": "前往谷町四丁目（地鐵谷町線）",
      "address": "北新地",
      "addressLocal": "大阪府大阪市北区曽根崎新地",
      "coords": [
        34.6973,
        135.4969
      ],
      "note": "【上車】近站轉谷町線。\n【下車】谷町四丁目，回酒店。\n【車資】IC 約 ¥230。\n【備案】的士約 15 分鐘。",
      "transport": {
        "mode": "train",
        "from": "東梅田",
        "to": "谷町四丁目",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵",
        "line": "谷町線",
        "durationMin": 10,
        "stopCount": 3,
        "liveApi": null
      }
    },
    {
      "timeHint": "night",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": "https://www.dormy-hotels.com/dormyinn/hotels/osaka_tanimachi/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null,
      "tags": [
        "溫泉",
        "酒店"
      ],
      "moodColor": "#2A7F7A",
      "id": "evt_d7_06",
      "day": 7,
      "time": "20:50",
      "type": "rest",
      "title": "浪華之湯",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區內本町2-1-9",
      "addressLocal": "大阪府大阪市中央区内本町2-1-9 天然温泉 浪華の湯 ドーミーイン大阪谷町",
      "coords": [
        34.6835,
        135.5139
      ],
      "note": "【攻略】13 樓天然溫泉連桑拿，住客免費；收工即泡。\n【實用】15:00–翌日 10:00；同層有吸煙亭，離遠坐。",
      "openHours": "15:00–翌日 10:00（住客）",
      "price": "住客免費"
    },
    {
      "timeHint": "morning",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": "https://www.dormy-hotels.com/dormyinn/hotels/osaka_tanimachi/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null,
      "tags": [
        "溫泉"
      ],
      "moodColor": "#2A7F7A",
      "id": "evt_d8_01",
      "day": 8,
      "time": "08:00",
      "type": "rest",
      "title": "浪華之湯",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區內本町2-1-9",
      "addressLocal": "大阪府大阪市中央区内本町2-1-9 天然温泉 浪華の湯 ドーミーイン大阪谷町",
      "coords": [
        34.6835,
        135.5139
      ],
      "note": "【攻略】退房前極早可泡；以實際 CO 時間為準。\n【實用】住客；同層吸煙亭離遠。",
      "openHours": "至退房前（住客）",
      "price": "住客免費"
    },
    {
      "timeHint": "morning",
      "phone": "+81-6-6945-5489",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": "https://www.dormy-hotels.com/dormyinn/hotels/osaka_tanimachi/",
      "cost": null,
      "status": "confirmed",
      "source": "ai",
      "transport": null,
      "tags": [
        "退房"
      ],
      "moodColor": "#2A7F7A",
      "id": "evt_d8_02",
      "day": 8,
      "time": "09:30",
      "type": "hotel",
      "title": "Dormy Inn 大阪谷町",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區內本町2-1-9",
      "addressLocal": "大阪府大阪市中央区内本町2-1-9 天然温泉 浪華の湯 ドーミーイン大阪谷町",
      "coords": [
        34.6835,
        135.5139
      ],
      "note": "【攻略】午前／早上 Check-out（改期 TBD）。\n【實用】行李可先寄放再輕食；Lounge 或近鐵上本町 B1。",
      "openHours": "退房 Feb 14 午前（改期 TBD）",
      "price": null
    },
    {
      "timeHint": "morning",
      "type": "transport",
      "cityId": "osaka",
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "website": null,
      "cost": {
        "amount": 190,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "openHours": "班次頻密，不用趕指定班次",
      "price": "IC ¥190",
      "id": "trp_d8_03",
      "day": 8,
      "time": "10:00",
      "title": "前往近鐵上本町（地鐵谷町線）",
      "address": "谷町四丁目站",
      "addressLocal": "Osaka Metro 谷町四丁目駅",
      "coords": [
        34.6826,
        135.5176
      ],
      "note": "【上車】谷町四丁目往天王寺／谷町九。\n【下車】谷町九丁目，步行近鐵上本町。\n【車資】IC ¥190。\n【備案】直接酒店叫利木津亦可。",
      "transport": {
        "mode": "train",
        "from": "谷町四丁目",
        "to": "谷町九丁目",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵",
        "line": "谷町線",
        "durationMin": 5,
        "stopCount": 2,
        "liveApi": null
      }
    },
    {
      "id": "evt_d8_04",
      "day": 8,
      "time": "10:15",
      "timeHint": "morning",
      "type": "shop",
      "title": "近鐵百貨上本町店",
      "cityId": "osaka",
      "address": "日本大阪府大阪市天王寺區上本町6-1-55 近鐵百貨上本町店 地庫 1 樓",
      "addressLocal": "大阪府大阪市天王寺区上本町6-1-55 近鉄百貨店上本町店 B1F 和洋酒売場",
      "coords": [
        34.6659,
        135.5195
      ],
      "tags": [
        "清酒",
        "百貨地庫"
      ],
      "moodColor": "#8C8378",
      "note": "【攻略】B1 輕食／手信；回程日不硬排正餐。\n【實用】按起飛時刻留足去機場時間。",
      "phone": "+81-6-6775-1111",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "10:00–20:00",
      "price": "按貨品標價",
      "website": "https://www.d-kintetsu.co.jp/uehonmachi/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d8_05",
      "day": 8,
      "time": "11:40",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "前往關西機場第 1 航廈（利木津巴士）",
      "cityId": "osaka",
      "address": "近鐵上本町 2 樓巴士總站（UH1）",
      "addressLocal": "近鉄上本町（2階バスターミナル）UH1 のりば（関西空港行き）",
      "coords": [
        34.6659,
        135.5195
      ],
      "tags": [
        "機場巴士"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】近鐵上本町利木津往關西機場。\n【下車】第 1 航廈。\n【車資】成人 ¥1,800。\n【備案】時刻按 UO851 TBD 再核；預留 1–1.5 小時車程＋值機。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "約 30 分鐘一班",
      "price": "成人 ¥1,800",
      "website": null,
      "cost": {
        "amount": 1800,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "bus",
        "from": "近鐵上本町",
        "to": "關西機場第 1 航廈",
        "fromEventId": null,
        "toEventId": null,
        "operator": "關西空港交通／近鐵巴士",
        "line": "近鐵上本町／心齋橋線",
        "durationMin": 51,
        "stopCount": 1,
        "liveApi": null
      }
    },
    {
      "id": "evt_d8_06",
      "day": 8,
      "time": "13:05",
      "timeHint": "afternoon",
      "type": "shop",
      "title": "KIX DUTY FREE",
      "cityId": "osaka",
      "address": "日本大阪府泉佐野市泉州空港北1 關西國際機場第 1 航廈 2 樓（出境保安檢查後）",
      "addressLocal": "大阪府泉佐野市泉州空港北1 関西国際空港 第1ターミナル 2F 国際線出国エリア KIX DUTY FREE",
      "coords": [
        34.4343,
        135.2442
      ],
      "tags": [
        "清酒",
        "免稅",
        "手信"
      ],
      "moodColor": "#8C8378",
      "note": "【攻略】退稅後再買手信。\n【實用】航班時刻 TBD。",
      "phone": "+81-72-455-4195",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "06:00–26:00（按航班情況調整）",
      "price": "機場限定純米大吟釀 720ml 約 ¥3,600–8,700（免稅價）",
      "website": "https://www.kixdutyfree.jp/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d8_07",
      "day": 8,
      "time": "13:45",
      "timeHint": "afternoon",
      "type": "food",
      "title": "佐海屋",
      "cityId": "osaka",
      "address": "關西國際機場第 1 航廈 2 樓 國際線出境保安檢查後",
      "addressLocal": "関西国際空港 第1ターミナル 2F 国際線 出国審査後エリア 佐海屋",
      "coords": [
        34.4343,
        135.2442
      ],
      "tags": [
        "和食",
        "禁區"
      ],
      "moodColor": "#A0785A",
      "note": "【攻略】禁區內輕食備案。\n【實用】航班 TBD。",
      "phone": "+81-72-455-2500",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "06:30–24:55（按航班調整）",
      "price": "定食按餐牌（約 ¥1,500，估算）",
      "website": "https://tabelog.com/osaka/A2705/A270503/27158190/",
      "cost": {
        "amount": 1500,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d8_08",
      "day": 8,
      "time": "15:15",
      "timeHint": "afternoon",
      "type": "departure",
      "title": "關西國際機場 第 1 航廈",
      "cityId": "osaka",
      "address": "關西國際機場第 1 航廈",
      "addressLocal": "関西国際空港 第1ターミナル",
      "coords": [
        34.4343,
        135.2442
      ],
      "tags": [
        "航班"
      ],
      "moodColor": "#3A3A3A",
      "note": "【實用】回程 UO851 時刻 TBD；按實際起飛填。\n【攻略】純回程日；不排劇場／遠遊。",
      "phone": "+852 3951 7229",
      "whatsapp": "+85239517229",
      "line": null,
      "messenger": null,
      "openHours": "15:15 起飛（登機閘口截止時間以登機證為準）",
      "price": "機票 HK$2,450",
      "website": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    }
  ]
};

// 7. 💡 靈感池／後備方案
const INSPIRATIONS = [
  {
    "id": "ins_001",
    "title": "北極星 心齋橋本店",
    "tag": "FOOD",
    "note": "【攻略】1922 年創業蛋包飯（オムライス）發祥店；點雞肉蛋包飯（チキンオムライス）和唐揚。\n【備案】Feb 8 和sai 沒位或趕 Pokémon 時；一般席不設預約。\n【實用】店內全面禁煙（店外吸煙）。",
    "type": "food",
    "cityId": "osaka",
    "address": "日本大阪府大阪市中央區西心齋橋2-7-27",
    "addressLocal": "大阪府大阪市中央区西心斎橋2-7-27 北極星 心斎橋本店",
    "coords": [
      34.6697,
      135.4988
    ],
    "nearEventId": "evt_d2_04",
    "phone": "+81-6-6211-7829",
    "whatsapp": null,
    "line": null,
    "messenger": "https://m.me/hokkyokusei.shinsaibashi",
    "openHours": "11:30–21:00（L.O. 閉店前 30 分鐘）",
    "price": "雞肉蛋包飯約 ¥1,180",
    "website": "https://www.hokkyokusei.biz/shoplist.php",
    "status": "wishlist",
    "source": "ai",
    "tags": []
  },
  {
    "id": "ins_002",
    "title": "燗之美穗（燗の美穂）",
    "tag": "FOOD",
    "note": "【攻略】燙酒／清酒強；walk-in。\n【備案】Feb 8 長堀訂不到、或 Feb 9 晚。\n【實用】全席禁煙；16:00 開門問位。",
    "type": "food",
    "cityId": "osaka",
    "address": "日本大阪府大阪市中央區安堂寺町2-2-14",
    "addressLocal": "大阪府大阪市中央区安堂寺町2-2-14 燗の美穂",
    "coords": [
      34.6761,
      135.5157
    ],
    "nearEventId": "evt_d2_08",
    "phone": "+81-6-7222-2510",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "星期一至六 16:00–22:00；日 15:00–22:00；逢星期三及每月第 3 個星期四休",
    "price": "預算 ¥6,000–7,999",
    "website": "https://tabelog.com/osaka/A2701/A270204/27117661/",
    "status": "wishlist",
    "source": "ai",
    "tags": []
  },
  {
    "id": "ins_003",
    "title": "梅田 釜竹烏冬（梅田 釜たけうどん）",
    "tag": "FOOD",
    "note": "【攻略】梅田輕食；walk-in；現金食券。\n【備案】今雪不定休時。\n【實用】全席禁煙。",
    "type": "food",
    "cityId": "osaka",
    "address": "日本大阪府大阪市北區角田町9-25 新梅田食道街 1 樓",
    "addressLocal": "大阪府大阪市北区角田町9-25 新梅田食道街1F 梅田 釜たけうどん",
    "coords": [
      34.7039,
      135.4978
    ],
    "nearEventId": "evt_d3_02",
    "phone": "+81-6-6363-7746",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "11:00–14:30；星期二休",
    "price": "預算 ～¥1,999",
    "website": "https://tabelog.com/osaka/A2701/A270101/27052204/",
    "status": "wishlist",
    "source": "ai",
    "tags": []
  },
  {
    "id": "ins_004",
    "title": "KOHYO 內本町店（コーヨー 内本町店）",
    "tag": "TIRED",
    "note": "【攻略】酒店隔鄰超市；已排 Feb 7 主宵夜。\n【備案】其他晚回房補給。",
    "type": "shop",
    "cityId": "osaka",
    "address": "日本大阪府大阪市中央區內本町2-2-10",
    "addressLocal": "大阪府大阪市中央区内本町2-2-10 KOHYO内本町店",
    "coords": [
      34.6833,
      135.5138
    ],
    "nearEventId": "evt_d1_06",
    "phone": "+81-6-6944-5040",
    "whatsapp": null,
    "line": "@rxu5960x",
    "messenger": null,
    "openHours": "07:00–23:00",
    "price": "刺身拼盤約 ¥800–1,500（估算）",
    "website": "https://www.daiei.co.jp/stores/4473/",
    "status": "wishlist",
    "source": "ai",
    "tags": []
  },
  {
    "id": "ins_005",
    "title": "日本酒原價酒藏 谷町四丁目店（日本酒原価酒蔵）",
    "tag": "SOLO",
    "note": "【攻略】酒店近；原價日本酒。\n【備案】Feb 9／10 晚趕收工。\n【實用】入場費 ¥540；全席禁煙。",
    "type": "food",
    "cityId": "osaka",
    "address": "日本大阪府大阪市中央區谷町4-4-15 谷4 Plaza 1 樓",
    "addressLocal": "大阪府大阪市中央区谷町4-4-15 谷4プラザ1F 日本酒原価酒蔵 谷町4丁目店",
    "coords": [
      34.6806,
      135.5175
    ],
    "nearEventId": "evt_d3_07",
    "phone": "+81-50-5487-1817",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "星期一至五 15:00–23:30；六、日及假期 12:00–23:30（料理 L.O. 22:30）；沒有固定休息日",
    "price": "原價日本酒（每杯價錢按銘柄）",
    "website": "https://tabelog.com/osaka/A2701/A270104/27143338/",
    "status": "wishlist",
    "source": "ai",
    "tags": []
  },
  {
    "id": "ins_006",
    "title": "串炸松葉 總本店（串かつ 松葉 総本店）",
    "tag": "FOOD",
    "note": "【攻略】新梅田串炸；抵達夜出街備案。\n【實用】walk-in。",
    "type": "food",
    "cityId": "osaka",
    "address": "日本大阪府大阪市北區角田町9-20 新梅田食道街 1 樓",
    "addressLocal": "大阪府大阪市北区角田町9-20 新梅田食道街1F 串かつ専門店 松葉 総本店",
    "coords": [
      34.7035,
      135.4977
    ],
    "nearEventId": "evt_d1_06",
    "phone": "+81-6-6312-6615",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "星期一至六 11:00–22:00；日及假期 11:00–21:30",
    "price": "預算 ¥1,000–1,999；連一兩杯酒約 ¥2,500（估算）",
    "website": "https://tabelog.com/osaka/A2701/A270101/27001927/",
    "status": "wishlist",
    "source": "ai",
    "tags": []
  },
  {
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "website": null,
    "status": "wishlist",
    "source": "ai",
    "tags": [],
    "id": "ins_007",
    "tag": "RAINY",
    "nearEventId": "evt_d2_02",
    "type": "sight",
    "cityId": "osaka",
    "title": "大阪歷史博物館",
    "address": "日本大阪府大阪市中央區大手前4-1-32",
    "addressLocal": "大阪府大阪市中央区大手前4-1-32",
    "coords": [
      34.6826,
      135.5205
    ],
    "note": "【攻略】月曜開；特集包常設票。\n【備案】Feb 8 蚤市後時間夠再去。\n【實用】館內禁煙。",
    "openHours": "09:30–17:00；逢星期二休（假期則翌日）",
    "price": "常設視特集"
  },
  {
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "website": null,
    "status": "wishlist",
    "source": "ai",
    "tags": [],
    "id": "ins_008",
    "tag": "SHOP",
    "nearEventId": "evt_d3_02",
    "type": "shop",
    "cityId": "osaka",
    "title": "CAPCOM STORE OSAKA",
    "address": "日本大阪府大阪市北區梅田3-1-3 LUCUA 南館 13F",
    "addressLocal": "大阪府大阪市北区梅田3-1-3 LUCUA osaka 南館13F",
    "coords": [
      34.7019,
      135.4963
    ],
    "note": "【攻略】同層只睇店；咖啡店另計可略。\n【備案】Nintendo 順路。\n【實用】10:00–20:00；walk-in。",
    "openHours": "10:00–20:00",
    "price": "免費入場"
  },
  {
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "website": null,
    "status": "wishlist",
    "source": "ai",
    "tags": [],
    "id": "ins_009",
    "tag": "TIME",
    "nearEventId": "evt_d3_02",
    "type": "sight",
    "cityId": "osaka",
    "title": "天滿市場／中崎町（未選）",
    "address": "日本大阪府大阪市北區",
    "addressLocal": "大阪府大阪市北区天満・中崎町",
    "coords": [
      34.7068,
      135.5135
    ],
    "note": "【攻略】Sandy 未選；僅靈感、唔硬塞。\n【備案】他朝有餘力。\n【實用】市集 walk-in。",
    "openHours": "市場各店約 08:00–18:00",
    "price": null
  },
  {
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "website": null,
    "status": "wishlist",
    "source": "ai",
    "tags": [],
    "id": "ins_010",
    "tag": "TIME",
    "nearEventId": "evt_d3_05",
    "type": "sight",
    "cityId": "osaka",
    "title": "奈良瑠璃絵（なら瑠璃絵・他晚靈感）",
    "address": "日本奈良縣奈良市",
    "addressLocal": "奈良公園一帶",
    "coords": [
      34.685,
      135.84
    ],
    "note": "【攻略】Feb 8–14 18:00–21:00；免費燈光／市集。\n【備案】已取消硬塞；他晚有餘力可選。\n【實用】只逛燈光市集，不參拜；❄️ 保暖。",
    "openHours": "Feb 8–14 18:00–21:00",
    "price": "免費（有料區可選）"
  },
  {
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "website": null,
    "status": "wishlist",
    "source": "ai",
    "tags": [],
    "id": "ins_011",
    "tag": "FOOD",
    "nearEventId": "evt_d4_02",
    "type": "food",
    "cityId": "kyoto",
    "title": "祇園綺羅良（祇をん きらら）",
    "address": "日本京都府京都市東山區",
    "addressLocal": "京都府京都市東山区 祇をん きらら",
    "coords": [
      35.003,
      135.7745
    ],
    "note": "【攻略】午彩御膳約 ¥2–3k。\n【備案】一之傳訂不到。\n【預約】Tabelog／OWST。\n【實用】全席禁煙。",
    "openHours": "以店曆為準",
    "price": "午約 ¥2,000–3,000"
  },
  {
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "website": null,
    "status": "wishlist",
    "source": "ai",
    "tags": [],
    "id": "ins_012",
    "tag": "FOOD",
    "nearEventId": "evt_d5_04",
    "type": "food",
    "cityId": "osaka",
    "title": "Gusto 姬路網干店（ガスト 姫路網干店）",
    "address": "日本兵庫縣姬路市網干區和久114-1",
    "addressLocal": "兵庫県姫路市網干区和久114-1 ガスト",
    "coords": [
      34.8099,
      134.5851
    ],
    "note": "【攻略】家庭餐廳；全席禁煙；walk-in。\n【備案】和之味處訂不到或距離遠。\n【實用】祝日 08:00–23:30；JR 網干徒歩約 9 分。",
    "openHours": "祝日 08:00–23:30",
    "price": "套餐約 ¥1,000"
  },
  {
    "id": "ins_013",
    "title": "稻田酒店",
    "tag": "SHOP",
    "note": "【攻略】天滿一帶立飲。\n【備案】黑兔食堂後輕量清酒。\n【實用】假日開否 Feb 初核。",
    "type": "shop",
    "cityId": "osaka",
    "address": "日本大阪府大阪市北區浪花町6-4",
    "addressLocal": "大阪府大阪市北区浪花町6-4 稲田酒店",
    "coords": [
      34.7076,
      135.5097
    ],
    "nearEventId": "evt_d5_06",
    "phone": "+81-6-6371-0636",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "店舖 11:00–21:30／立飲區 14:00–21:00；假期營業時店舖至 20:30、立飲區至 20:00；星期日休，假期不定休",
    "price": "立飲區按杯計（只收現金）；一升瓶 ¥4,400 例",
    "website": "https://osaka-saketen.jp/",
    "status": "wishlist",
    "source": "ai",
    "tags": []
  },
  {
    "id": "ins_014",
    "title": "Propeller 牛扒（プロペラ）",
    "tag": "FOOD",
    "note": "【攻略】三宮牛扒。\n【備案】HINO 訂不到。",
    "type": "food",
    "cityId": "kobe",
    "address": "日本兵庫縣神戶市中央區磯上通8-1-14",
    "addressLocal": "兵庫県神戸市中央区磯上通8-1-14 プロペラ",
    "coords": [
      34.6913,
      135.1961
    ],
    "nearEventId": "evt_d6_10",
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "每日 11:00–15:30；無休",
    "price": "午市 ¥2,000–2,999（估算）",
    "website": "https://tabelog.com/hyogo/A2801/A280101/28040503/",
    "status": "wishlist",
    "source": "ai",
    "tags": []
  },
  {
    "id": "ins_015",
    "title": "稻妻（日本酒バル・米屋 イナズマ）",
    "tag": "FOOD",
    "note": "【攻略】三宮日本酒吧。\n【備案】HINO 訂不到。",
    "type": "food",
    "cityId": "kobe",
    "address": "日本兵庫縣神戶市中央區北長狹通3-10-1 KS 大廈 1 樓",
    "addressLocal": "兵庫県神戸市中央区北長狭通3-10-1 KSビル1F 日本酒バル・米屋 イナズマ",
    "coords": [
      34.6919,
      135.1884
    ],
    "nearEventId": "evt_d6_10",
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "平日 18:00–23:00（料理 L.O. 22:00）；不定休",
    "price": "預算 ¥4,000–5,999",
    "website": "https://tabelog.com/hyogo/A2801/A280102/28042842/",
    "status": "wishlist",
    "source": "ai",
    "tags": []
  },
  {
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "website": null,
    "status": "wishlist",
    "source": "ai",
    "tags": [],
    "id": "ins_016",
    "tag": "FOOD",
    "nearEventId": "evt_d6_08",
    "type": "food",
    "cityId": "kobe",
    "title": "伊藤 Grill（伊藤グリル）",
    "address": "日本兵庫縣神戶市中央區",
    "addressLocal": "兵庫県神戸市中央区 伊藤グリル",
    "coords": [
      34.6884,
      135.188
    ],
    "note": "【攻略】僅靈感／不強制；午 L.O. 13:30 已過本線時段。\n【備案】有餘力再考慮。\n【實用】不硬塞主線。",
    "openHours": "以店曆為準（午 L.O. 約 13:30）",
    "price": null
  },
  {
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "website": null,
    "status": "wishlist",
    "source": "ai",
    "tags": [],
    "id": "ins_017",
    "tag": "TIME",
    "nearEventId": "evt_d6_08",
    "type": "sight",
    "cityId": "kobe",
    "title": "南京町春節祭",
    "address": "日本兵庫縣神戶市中央區南京町",
    "addressLocal": "兵庫県神戸市中央区南京町",
    "coords": [
      34.688,
      135.1884
    ],
    "note": "【攻略】縮或靈感；攤位多現金；不參與祈願。\n【備案】梵高後時間緊可略。\n【實用】開催期。",
    "openHours": "開催期視當日",
    "price": "免費逛攤"
  },
  {
    "id": "ins_018",
    "title": "酒林（さかばやし）",
    "tag": "FOOD",
    "note": "【攻略】御影・酒心館。\n【預約】Hot Pepper 網上訂。\n【備案】白鹿蔵開不開催時午餐。",
    "type": "food",
    "cityId": "kobe",
    "address": "日本兵庫縣神戶市東灘區御影塚町1-8-17 神戶酒心館內",
    "addressLocal": "兵庫県神戸市東灘区御影塚町1-8-17 神戸酒心館 蔵の料亭 さかばやし",
    "coords": [
      34.71,
      135.2486
    ],
    "nearEventId": "evt_d7_02",
    "phone": "+81-78-841-2612",
    "whatsapp": null,
    "line": null,
    "messenger": "https://m.me/shushinkan.fukuju",
    "openHours": "午市 11:30–15:00（L.O. 14:30）；星期三休",
    "price": "御影膳（みかげ膳） ¥3,500（Hot Pepper 網上預約，1 名起）",
    "website": "https://www.hotpepper.jp/strJ003599046/",
    "status": "wishlist",
    "source": "ai",
    "tags": []
  },
  {
    "id": "ins_019",
    "title": "石挽十割蕎麥 玄盛 北新地本店（石挽き十割蕎麦 玄盛 北新地本店）",
    "tag": "FOOD",
    "note": "【攻略】北新地蕎麥。\n【備案】Sumiemon 訂不到。",
    "type": "food",
    "cityId": "osaka",
    "address": "日本大阪府大阪市北區曾根崎新地1-10-6 北新地 Sirius 大廈 1–4 樓",
    "addressLocal": "大阪府大阪市北区曽根崎新地1-10-6 北新地シリウスビル 1〜4F 石挽き十割蕎麦 玄盛 北新地本店",
    "coords": [
      34.698,
      135.4975
    ],
    "nearEventId": "evt_d7_04",
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "星期一至五 11:30–14:30、17:30–翌日 03:30；星期六、日及假期 11:30–14:30、15:00–21:30（L.O. 21:00）",
    "price": "晚市預算 ¥3,000–3,999",
    "website": "https://tabelog.com/osaka/A2701/A270101/27104902/",
    "status": "wishlist",
    "source": "ai",
    "tags": []
  },
  {
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "website": null,
    "status": "wishlist",
    "source": "ai",
    "tags": [],
    "id": "ins_020",
    "tag": "FOOD",
    "nearEventId": "evt_d7_04",
    "type": "food",
    "cityId": "osaka",
    "title": "雅釀 GAJO（雅醸）",
    "address": "日本大阪府大阪市北區",
    "addressLocal": "大阪府大阪市北区 雅醸",
    "coords": [
      34.6969,
      135.5003
    ],
    "note": "【攻略】僅高預算備註；配對約 ¥29,000；唔作主選。\n【備案】預算充足且想清酒配對時。\n【實用】土曜不定休。",
    "openHours": "以店曆為準；土曜不定休",
    "price": "配對約 ¥29,000"
  },
  {
    "id": "ins_021",
    "title": "十三市",
    "tag": "SHOP",
    "note": "【攻略】只逛攤位，不參拜。\n【備案】本稿不強制排入。\n【實用】現金為主。",
    "type": "shop",
    "cityId": "osaka",
    "address": "日本大阪府大阪市淀川區十三東2-6-39",
    "addressLocal": "大阪府大阪市淀川区十三東2-6-39 十三市",
    "coords": [
      34.7205,
      135.4846
    ],
    "nearEventId": "evt_d7_02",
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "約 09:00/10:00–15:00（時間未定）",
    "price": "免費入場",
    "website": null,
    "status": "wishlist",
    "source": "ai",
    "tags": []
  },
  {
    "id": "ins_022",
    "title": "PELMOIR（ペルモワ）",
    "tag": "SHOP",
    "note": "【攻略】平價 Akoya 入門：¥1,000–3,000 的字母吊墜、細粒耳環做手信；先問是 Akoya 還是淡水。\n【備案】梵高展後、去南京町前有空就順路：三宮中心街 2 丁目，三宮站向西約 5 分鐘。\n【實用】英文服務不明，可指商品、用計算機；免稅現場問（免税できますか？）。",
    "type": "shop",
    "cityId": "kobe",
    "address": "日本兵庫縣神戶市中央區三宮町2-10-23（三宮中心街 2 丁目）",
    "addressLocal": "兵庫県神戸市中央区三宮町2-10-23 ペルモワ",
    "coords": [
      34.6908,
      135.1908
    ],
    "nearEventId": "evt_d6_06",
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "11:00–19:00；星期三休（另有臨時休業）",
    "price": "¥1,000–3,000",
    "website": "https://centergai2.com/shopguide/15_pelmoir/",
    "status": "wishlist",
    "source": "ai",
    "tags": []
  },
  {
    "id": "ins_023",
    "title": "SHINYU SHOP（真優 直営店）",
    "tag": "SHOP",
    "note": "【攻略】珍珠卸商直營，有英文、中文顧問；請顧問把同價位 Akoya 並排比光澤和珠層。價位：Akoya 耳釘 ¥18,000 起。\n【備案】想再比較才去：北野坂，三宮站步行約 10 分鐘；隔鄰 Pearl Clinic 不主動推銷。\n【實用】免稅現場問；曾臨時休業，出發前看店方「新着情報」。",
    "type": "shop",
    "cityId": "kobe",
    "address": "日本兵庫縣神戶市中央區中山手通1-23-16 Shanti 大廈 1 樓",
    "addressLocal": "兵庫県神戸市中央区中山手通1-23-16 シャンティビル1階 SHINYU SHOP",
    "coords": [
      34.6976,
      135.1915
    ],
    "nearEventId": "evt_d6_06",
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "10:00–18:00",
    "price": "¥10,000–300,000",
    "website": "https://shinyu-kobe.com/",
    "status": "wishlist",
    "source": "ai",
    "tags": []
  },
  {
    "id": "ins_024",
    "title": "神戶酒心館 東明藏",
    "tag": "TIME",
    "note": "【攻略】灘備案館巡。\n【備案】白鹿非當日。",
    "type": "shop",
    "cityId": "kobe",
    "address": "日本兵庫縣神戶市東灘區御影塚町1-8-17",
    "addressLocal": "兵庫県神戸市東灘区御影塚町1-8-17 神戸酒心館 蔵元ショップ 東明蔵",
    "coords": [
      34.71,
      135.2486
    ],
    "nearEventId": "evt_d7_02",
    "phone": "+81-78-841-1121",
    "whatsapp": null,
    "line": null,
    "messenger": "https://m.me/shushinkan.fukuju",
    "openHours": "10:00–18:30（Jan 1–3 休）",
    "price": "免費試飲",
    "website": "https://www.shushinkan.co.jp/",
    "status": "wishlist",
    "source": "ai",
    "tags": []
  },
  {
    "id": "ins_025",
    "title": "白鶴酒造資料館",
    "tag": "TIME",
    "note": "【攻略】灘備案。\n【備案】白鹿非當日。",
    "type": "sight",
    "cityId": "kobe",
    "address": "日本兵庫縣神戶市東灘區住吉南町4-5-5",
    "addressLocal": "兵庫県神戸市東灘区住吉南町4丁目5-5 白鶴酒造資料館",
    "coords": [
      34.7136,
      135.2621
    ],
    "nearEventId": "evt_d7_02",
    "phone": "+81-78-822-8907",
    "whatsapp": null,
    "line": null,
    "messenger": "https://m.me/HAKUTSURU.SAKE.BREWING",
    "openHours": "09:30–16:30（最後入館 16:00）；年末年始休",
    "price": "免費入館；高級酒付費試飲",
    "website": "https://www.hakutsuru.co.jp/community/shiryo/",
    "status": "wishlist",
    "source": "ai",
    "tags": []
  },
  {
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "website": null,
    "status": "wishlist",
    "source": "ai",
    "tags": [],
    "id": "ins_026",
    "tag": "TIME",
    "nearEventId": "evt_d7_02",
    "type": "sight",
    "cityId": "kobe",
    "title": "菊正宗酒造記念館",
    "address": "日本兵庫縣神戶市東灘區",
    "addressLocal": "兵庫県神戸市東灘区",
    "coords": [
      34.7086,
      135.2679
    ],
    "note": "【攻略】灘備案；火休→六開。\n【備案】白鹿非當日。\n【實用】09:30–16:30。",
    "openHours": "09:30–16:30；逢星期二休",
    "price": "入場視館"
  },
  {
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "website": null,
    "status": "wishlist",
    "source": "ai",
    "tags": [],
    "id": "ins_027",
    "tag": "TIME",
    "nearEventId": "evt_d7_02",
    "type": "sight",
    "cityId": "kobe",
    "title": "浜福鶴 吟釀工房",
    "address": "日本兵庫縣神戶市東灘區",
    "addressLocal": "兵庫県神戸市東灘区",
    "coords": [
      34.7094,
      135.273
    ],
    "note": "【攻略】灘備案；月休祝則翌日→六開。\n【備案】白鹿非當日。\n【實用】10:00–17:00。",
    "openHours": "10:00–17:00；逢星期一休（祝則翌日）",
    "price": "入場視館"
  },
  {
    "id": "ins_028",
    "title": "伊丹老松酒造直賣所（伊丹老松酒造直売所）",
    "tag": "SHOP",
    "note": "【攻略】伊丹；日休＝Feb 12 五唔關。\n【備案】僅資訊。",
    "type": "shop",
    "cityId": "osaka",
    "address": "日本兵庫縣伊丹市中央3-1-8",
    "addressLocal": "兵庫県伊丹市中央3-1-8 伊丹老松酒造 直売所",
    "coords": [
      34.7807,
      135.417
    ],
    "nearEventId": "evt_d6_04",
    "phone": "+81-72-782-2470",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "星期一至五 09:00–18:00；星期六 09:00–17:00；星期日及假期休",
    "price": "有料試飲約 ¥200 一杯",
    "website": "https://oimatsu.biz/",
    "status": "wishlist",
    "source": "ai",
    "tags": []
  }
];

// 8. 🛒 每日購物
const DAILY_EXTRAS = {
  "1": {
    "shopping": [
      "生日蛋糕／刺身（KOHYO）",
      "大瓶礦泉水"
    ]
  },
  "2": {
    "shopping": [
      "蚤市小物（可選）",
      "Pokémon 限定（可選）"
    ]
  },
  "3": {
    "shopping": [
      "Nintendo／amiibo（可選）",
      "寶塚周邊（可選）"
    ]
  },
  "4": {
    "shopping": [
      "伏見酒手信（可選）"
    ]
  },
  "5": {
    "shopping": [
      "龍力酒粕手信（利酒會含）"
    ]
  },
  "6": {
    "shopping": [
      "My CUP 杯麵",
      "珍珠（Pearl Pearl）"
    ]
  },
  "7": {
    "shopping": [
      "白鹿限定（現金）"
    ]
  },
  "8": {
    "shopping": [
      "機場手信／退稅"
    ]
  }
};

// 9. 💰 預算
const BUDGET = {
  "categories": [
    "transport",
    "food",
    "hotel",
    "shop",
    "ticket",
    "other"
  ],
  "estimates": {
    "total": 197360,
    "currency": "JPY",
    "byCategory": {
      "transport": 16300,
      "food": 69610,
      "hotel": 97750,
      "ticket": 13700,
      "shop": 0,
      "other": 0
    },
    "note": "7 晚酒店約 ¥97,750（含宿泊稅／入湯稅約 ¥2,750；市價 as-of Nov 4, 2026；已訂 0AN0UPYV 原 8 晚 ¥109,000，改期 TBD）；航班 TBD 未計；匯率參考 0.053。行程內可見 cost 加總約 ¥197,360。"
  },
  "expenses": []
};

// 10. 🗣️ 常用短語
const PHRASE_DATA = [
  {
    "category": "餐廳",
    "items": [
      {
        "term_primary": "一人です",
        "term_secondary": "一位",
        "term_pronounce": "Hitori desu"
      },
      {
        "term_primary": "予約した陳です",
        "term_secondary": "我有訂位，姓陳",
        "term_pronounce": "Yoyaku shita Chan desu"
      },
      {
        "term_primary": "カウンター席でお願いします",
        "term_secondary": "麻煩坐吧枱",
        "term_pronounce": "Kauntā-seki de onegai shimasu"
      },
      {
        "term_primary": "おすすめは？",
        "term_secondary": "有甚麼推介？",
        "term_pronounce": "Osusume wa?"
      }
    ]
  },
  {
    "category": "清酒",
    "items": [
      {
        "term_primary": "辛口の純米酒はありますか",
        "term_secondary": "有沒有辛口純米酒？",
        "term_pronounce": "Karakuchi no junmai-shu wa arimasu ka"
      },
      {
        "term_primary": "ぬる燗でお願いします",
        "term_secondary": "請溫到「溫燗」（約 40°C）",
        "term_pronounce": "Nurukan de onegai shimasu"
      },
      {
        "term_primary": "試飲できますか",
        "term_secondary": "可以試飲嗎？",
        "term_pronounce": "Shiin dekimasu ka"
      },
      {
        "term_primary": "蔵開き限定のお酒はどれですか",
        "term_secondary": "哪款是藏開限定酒？",
        "term_pronounce": "Kurabiraki gentei no osake wa dore desu ka"
      }
    ]
  },
  {
    "category": "購物／古物",
    "items": [
      {
        "term_primary": "これを見せてください",
        "term_secondary": "請讓我看看這個",
        "term_pronounce": "Kore o misete kudasai"
      },
      {
        "term_primary": "状態はどうですか",
        "term_secondary": "品相怎樣？",
        "term_pronounce": "Jōtai wa dō desu ka"
      },
      {
        "term_primary": "少し安くなりますか",
        "term_secondary": "可以便宜一點嗎？",
        "term_pronounce": "Sukoshi yasuku narimasu ka"
      },
      {
        "term_primary": "免税の手続きはできますか",
        "term_secondary": "可以辦退稅嗎？",
        "term_pronounce": "Menzei no tetsuzuki wa dekimasu ka"
      }
    ]
  },
  {
    "category": "精油／SPA",
    "items": [
      {
        "term_primary": "成分分析表（GC-MS）は見られますか",
        "term_secondary": "可以看成分分析表（GC-MS）嗎？",
        "term_pronounce": "Seibun bunseki-hyō wa miraremasu ka"
      },
      {
        "term_primary": "日本産の精油はどれですか",
        "term_secondary": "哪些是日本產精油？",
        "term_pronounce": "Nihon-san no seiyu wa dore desu ka"
      },
      {
        "term_primary": "もう少し弱めでお願いします",
        "term_secondary": "力度輕一點",
        "term_pronounce": "Mō sukoshi yowame de onegai shimasu"
      }
    ]
  },
  {
    "category": "交通／緊急",
    "items": [
      {
        "term_primary": "この電車は梅田に行きますか",
        "term_secondary": "這班車去梅田嗎？",
        "term_pronounce": "Kono densha wa Umeda ni ikimasu ka"
      },
      {
        "term_primary": "このホテルまでお願いします",
        "term_secondary": "請載我去這間酒店",
        "term_pronounce": "Kono hoteru made onegai shimasu"
      },
      {
        "term_primary": "助けてください",
        "term_secondary": "請幫幫我",
        "term_pronounce": "Tasukete kudasai"
      },
      {
        "term_primary": "警察を呼んでください",
        "term_secondary": "請報警",
        "term_pronounce": "Keisatsu o yonde kudasai"
      }
    ]
  },
  {
    "category": "珍珠",
    "items": [
      {
        "term_primary": "これはあこや真珠ですか？淡水ですか？",
        "term_secondary": "這是 Akoya 還是淡水珍珠？",
        "term_pronounce": "Kore wa akoya shinju desu ka? Tansui desu ka?"
      },
      {
        "term_primary": "鑑別書はありますか？",
        "term_secondary": "有鑑別書嗎？",
        "term_pronounce": "Kanbetsusho wa arimasu ka?"
      },
      {
        "term_primary": "巻きは厚いですか？",
        "term_secondary": "珠層厚嗎？",
        "term_pronounce": "Maki wa atsui desu ka?"
      },
      {
        "term_primary": "左右のバランスを見せてください。",
        "term_secondary": "請讓我看看左右是否配對。",
        "term_pronounce": "Sayū no baransu o misete kudasai."
      },
      {
        "term_primary": "免税できますか？パスポートあります。",
        "term_secondary": "可以免稅嗎？我有護照。",
        "term_pronounce": "Menzei dekimasu ka? Pasupōto arimasu."
      }
    ]
  }
];
