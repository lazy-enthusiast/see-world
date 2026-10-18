// buildTime: 2026-10-18T19:19:25.034Z
// ============================================================
// 🧳 客製化設定檔 config.js —— 大阪 2027 年 2 月（v5：酒店改 Dormy Inn 大阪谷町、全程交通重排、超市宵夜；按 SCHEMA v1.12 調整）
// 結構契約見 schema.json／SCHEMA.md（v1.12；v5d：聯絡欄位、靈感攻略、標題只寫地點、去資料來源字眼、取消皮革工作坊）
// 座標：國土地理院地址檢索（番地級）／OSM Nominatim（地標、車站），4 位小數；交通項目用出發點
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
    "browserTitle": "大阪 2027 年 2 月",
    "headerTitle": "大阪二月",
    "homeTimezone": "Asia/Hong_Kong",
    "homeTimeLabel": "香港"
  },
  "startDate": "2027-02-07",
  "duration": 9,
  "travelers": {
    "type": "solo",
    "count": 1,
    "note": "Dav，一人旅行"
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
      8,
      9
    ],
    "color": "#2A7F7A"
  },
  {
    "id": "nara",
    "name": "奈良",
    "lat": 34.684,
    "lon": 135.8263,
    "timezone": "Asia/Tokyo",
    "days": [
      3
    ],
    "color": "#6B7F7A"
  },
  {
    "id": "kobe",
    "name": "神戶",
    "lat": 34.71,
    "lon": 135.2486,
    "timezone": "Asia/Tokyo",
    "days": [
      6,
      7
    ],
    "color": "#8C8378"
  }
];

// 本趟到站 provider 宣告（不含 API key；key 在 Cloudflare Worker）；所有 liveApi 為 null，所以不宣告 provider
const TRANSIT_CONFIG = {
  "providers": []
};

// 5. ✈️ 航班與住宿
const TRIP_INFO = {
  "visa": {
    "type": "香港特區護照免簽入境日本（短期逗留）",
    "number": null,
    "note": "香港特區護照可免簽短期入境日本；出發前預填 Visit Japan Web（入境及海關申報）。2026-11-01 起日本退稅改為出境時於機場海關確認後退款，購物要帶護照。",
    "expiry": null
  },
  "flights": [
    {
      "type": "去程",
      "flight": "HK Express HX（航班號待確認）",
      "date": "02/07",
      "dep": "HKG 11:50",
      "arr": "KIX 16:25",
      "note": "香港一號客運大樓 → 關西第 1 航廈；HK$2,773；寄艙 20kg 首次訂票 HK$310",
      "bookingRef": null
    },
    {
      "type": "回程",
      "flight": "HK Express HX（航班號待確認）",
      "date": "02/15",
      "dep": "KIX 15:15",
      "arr": "HKG 18:55",
      "note": "約 12:31 巴士到關西第 1 航廈；HK$2,450；回程建議加購 32kg（約 HK$430）",
      "bookingRef": null
    }
  ],
  "hotels": [
    {
      "cityId": "osaka",
      "name": "天然溫泉 浪華之湯 Dormy Inn 大阪谷町（天然温泉 浪華の湯 ドーミーイン大阪谷町）",
      "address": "〒540-0026 大阪府大阪市中央区内本町2-1-9",
      "phone": "+81-6-6945-5489",
      "checkIn": "2027-02-07（15:00 起）",
      "checkOut": "2027-02-15（11:00 前）",
      "bookingRef": null
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
      "id": "evt_d1_01",
      "day": 1,
      "time": "16:25",
      "timeHint": "afternoon",
      "type": "arrival",
      "title": "關西國際機場 第 1 航廈",
      "cityId": "osaka",
      "address": "日本大阪府泉佐野市泉州空港北1 關西國際機場第 1 航廈",
      "addressLocal": "大阪府泉佐野市泉州空港北1 関西国際空港 第1ターミナル",
      "coords": [
        34.4343,
        135.2442
      ],
      "tags": [
        "入境"
      ],
      "moodColor": "#3A3A3A",
      "note": "【今次】抵達。\n【航班】HK Express（HX）16:25 抵達關西機場第 1 航廈（航班號待訂票後確認）。\n【入境】出發前填好 Visit Japan Web（入境＋海關申報 QR code），入境連提行李預留 45–60 分鐘（估算）。\n【攻略】出閘後可在便利店 ATM 提取備用現金；之後乘利木津巴士到近鐵上本町（第 1 航廈 1 樓 7 號站）。機場總合案內 24 小時有中文服務。",
      "phone": "+81-72-455-2500",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "機場總合案內 24 小時",
      "price": "不適用",
      "website": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
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
      "note": "【上車】第 1 航廈 1 樓入境大堂出閘後，到 7 號巴士站（近鐵上本町／心齋橋線）。先在售票機買票（售票處可用信用卡）。\n【班次】傍晚約 20–30 分鐘一班，車程約 55–60 分鐘；入境順利就搭最近一班，慢了搭下一班也可以，百貨地庫 20:00 才關門。\n【下車】近鐵上本町（2 樓巴士總站，UH1）下車，直接進近鐵百貨上本町店地庫買晚餐。\n【備案】南海空港急行 1 號月台（往難波，始發）→ 天下茶屋轉堺筋線 → 堺筋本町轉中央線到谷町四丁目，轉乘 2 次，IC ¥1,210；或關西空港交通「天滿橋站」線（第 1 航廈 10 號站）直達天滿橋。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "約 20–30 分鐘一班（傍晚），到站搭下一班即可",
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
      "note": "【今次】地庫 1 樓：西淺鮮魚刺身＋和洋酒（第一晚宵夜採購）。\n【攻略】巴士總站在同一座大樓，下車即到地庫 1 樓。鮮魚店「西淺」（職人が鮮魚を扱う店 西浅）有刺身、壽司及熟食，買一盒刺身拼盤或幾款切好的刺身；同層和洋酒賣場買一枝四合瓶（720ml）大阪或奈良地酒，作為第一晚的「超市宵夜」。\n【實用】鮮魚西淺 10:00–20:00；和洋酒賣場同為 10:00–20:00。減價貼紙時間不定，19:00 後到可能有減價（待確認）。刺身要求保冷劑（保冷剤をお願いします）。\n【備案】如巴士延誤到 20:00 後，直接回酒店，在樓下 KOHYO 內本町店（營業至 23:00）買。",
      "phone": "+81-6-6773-8002",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "10:00–20:00",
      "price": "刺身約 ¥1,000–2,000＋地酒四合瓶約 ¥1,500–2,500（估算）",
      "website": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d1_04",
      "day": 1,
      "time": "19:46",
      "timeHint": "evening",
      "type": "transport",
      "title": "前往谷町四丁目（地鐵谷町線）",
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
      "note": "【上車】由近鐵百貨地庫經地下通道步行約 5 分鐘到谷町九丁目站（估算）；2 號月台，谷町線往大日方向。\n【下車】谷町四丁目站 4 號出口步行約 4 分鐘回酒店。\n【車資】IC ¥190，ICOCA 拍卡。\n【備案】行李多可在上本町乘的士到酒店，約 2 km（車資估算約 ¥1,000）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
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
        "to": "谷町四丁目",
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
      "id": "evt_d1_05",
      "day": 1,
      "time": "19:55",
      "timeHint": "evening",
      "type": "hotel",
      "title": "Dormy Inn 大阪谷町",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區內本町2-1-9（Dormy Inn 大阪谷町）",
      "addressLocal": "〒540-0026 大阪府大阪市中央区内本町2-1-9 天然温泉 浪華の湯 ドーミーイン大阪谷町",
      "coords": [
        34.6835,
        135.5139
      ],
      "tags": [
        "天然溫泉",
        "樓下超市"
      ],
      "moodColor": "#3A3A3A",
      "note": "【今次】入住；酒店溫泉：天然溫泉 浪華之湯。\n【攻略】一連 8 晚同一間，不用換酒店。樓頂 13 樓天然溫泉「浪華之湯」連桑拿，住客免費；樓下就是 KOHYO 內本町店超市（07:00–23:00）。\n【免費服務】歡迎飲品 14:30–23:00、06:00–11:00；浴後雪條 15:00–翌日 01:00；夜鳴蕎麥麵（夜鳴きそば）每晚 21:30–23:00；浴後乳酸菌飲品 05:00–10:00。不提供免費酒精飲品。\n【實用】Check-in 15:00、Check-out 11:00；房間 14㎡、只有淋浴間。",
      "phone": "+81-6-6945-5489",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "Check-in 15:00／Check-out 11:00；大浴場「浪華之湯」（13 樓，男女分開）15:00–翌日 10:00；桑拿 01:00–05:00 暫停",
      "price": "8 晚 ¥118,125（素泊，含稅）＋宿泊稅現場支付（約 ¥1,600，估算）",
      "website": "https://dormy-hotels.com/dormyinn/hotels/osakatanimachi/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d1_06",
      "day": 1,
      "time": "20:15",
      "timeHint": "evening",
      "type": "food",
      "title": "Dormy Inn 大阪谷町 房間",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區內本町2-1-9（Dormy Inn 大阪谷町） 客房",
      "addressLocal": "〒540-0026 大阪府大阪市中央区内本町2-1-9 天然温泉 浪華の湯 ドーミーイン大阪谷町",
      "coords": [
        34.6835,
        135.5139
      ],
      "tags": [
        "超市宵夜",
        "刺身",
        "清酒"
      ],
      "moodColor": "#A0785A",
      "note": "【今次】超市宵夜：上本町刺身＋地酒，在房間慢慢吃。\n【攻略】第一晚不再出梅田，像在福岡一樣：在近鐵百貨買好的刺身配地酒，回房間慢慢吃；想加料可到樓下 KOHYO 補一盒壽司或沙律。\n【攻略】KOHYO 必看：刺身拼盤、握壽司盒、關東煮及小菜；晚上常有減價貼紙（時間不定，待確認）。酒杯可問前台借（待確認），或在 KOHYO 買紙杯。\n【實用】酒店休息室可否自帶酒水未確認（可電郵酒店查詢）；大浴場禁止酒精，建議留在房間吃。喝酒後休息至少 30 分鐘、多喝水才去泡湯。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "—",
      "price": "刺身＋地酒約 ¥3,000（估算）",
      "website": null,
      "cost": {
        "amount": 3000,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d1_07",
      "day": 1,
      "time": "21:30",
      "timeHint": "night",
      "type": "rest",
      "title": "浪華之湯",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區內本町2-1-9（Dormy Inn 大阪谷町）",
      "addressLocal": "〒540-0026 大阪府大阪市中央区内本町2-1-9 天然温泉 浪華の湯 ドーミーイン大阪谷町 13F 大浴場",
      "coords": [
        34.6835,
        135.5139
      ],
      "tags": [
        "天然溫泉",
        "夜鳴蕎麥麵"
      ],
      "moodColor": "#9AA8A3",
      "note": "【今次】天然溫泉＋免費夜鳴蕎麥麵。\n【攻略】吃完宵夜休息一會再上 13 樓泡湯：先浸室內的生駒山天然溫泉，再到露天風呂和一人壺湯，桑拿後用冷水池降溫、到外湯區外氣浴。\n【攻略】21:30–23:00 有免費夜鳴蕎麥麵（13 樓 HATAGO），小碗醬油拉麵，餓的話就吃半碗。\n【實用】浴場內嚴禁帶食物及酒精飲品，只可帶補充水分的飲品；有紋身不可入浴。",
      "phone": "+81-6-6945-5489",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "大浴場「浪華之湯」（13 樓，男女分開）15:00–翌日 10:00；桑拿 01:00–05:00 暫停",
      "price": "住客免費",
      "website": "https://dormy-hotels.com/dormyinn/hotels/osakatanimachi/spa/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d2_01",
      "day": 2,
      "time": "09:00",
      "timeHint": "morning",
      "type": "food",
      "title": "喫茶 Monaco（モナコ）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區谷町3-5-2",
      "addressLocal": "大阪府大阪市中央区谷町3丁目5-2 モナコ（MONACO）",
      "coords": [
        34.6832,
        135.5171
      ],
      "tags": [
        "老喫茶",
        "現金"
      ],
      "moodColor": "#A0785A",
      "note": "【今次】早餐；谷町四丁目老喫茶。\n【Tabelog】3.31（99 則評價）\n【攻略】谷町四丁目 3 號出口即到的昭和老喫茶，三層大舖，平日早上有多士、蛋、BLT 三文治等早餐套餐（約 ¥450–500，現價待確認）。\n【實用】只收現金、全席禁煙；平日 08:00–17:30，日 11:30–15:30，星期六休。由酒店步行約 5 分鐘（估算）。09:50 前結帳，下樓即入谷町四丁目站。",
      "phone": "+81-6-6941-3908",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "星期一至五 08:00–17:30；日 11:30–15:30；六休",
      "price": "早餐套餐約 ¥800（估算，只收現金）",
      "website": "https://tabelog.com/osaka/A2701/A270104/27017721/",
      "cost": {
        "amount": 800,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d2_02",
      "day": 2,
      "time": "09:55",
      "timeHint": "morning",
      "type": "transport",
      "title": "前往谷町九丁目（地鐵谷町線）",
      "cityId": "osaka",
      "address": "大阪地鐵谷町四丁目站（谷町線）1 號月台",
      "addressLocal": "Osaka Metro 谷町四丁目駅 1番線（谷町線・八尾南方面）／3番出口から入場",
      "coords": [
        34.6826,
        135.5176
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】Monaco 門口就是谷町四丁目站 3 號出口；1 號月台，谷町線往八尾南方向。\n【下車】谷町九丁目站 3 號出口，步行約 4 分鐘到生國魂神社。\n【車資】IC ¥190，ICOCA 拍卡。\n【備案】谷町線約 5–7 分鐘一班；或由酒店步行約 25 分鐘（估算）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
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
        "from": "谷町四丁目",
        "to": "谷町九丁目",
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
      "id": "evt_d2_03",
      "day": 2,
      "time": "10:15",
      "timeHint": "morning",
      "type": "sight",
      "title": "生國魂神社",
      "cityId": "osaka",
      "address": "日本大阪府大阪市天王寺區生玉町13-9 生國魂神社表參道",
      "addressLocal": "大阪府大阪市天王寺区生玉町13-9 生國魂神社",
      "coords": [
        34.6651,
        135.5133
      ],
      "tags": [
        "市集",
        "古物"
      ],
      "moodColor": "#6B7F7A",
      "note": "【今次】古物市（生國魂蚤の市）。\n【攻略】每月 8 日在表參道擺的小型古物市，約 10 檔，但檔主多是專業古道具商，舊器皿、古布、小飾物值得慢慢翻看。看中後可先問「品相怎樣？（状態はどうですか）」，議價要客氣。\n【實用】07:00 開，好貨早上就被買走；多數攤檔只收現金。小雨照開，撲空就直接去心齋橋。",
      "phone": "+81-6-6771-0002",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "每月 8 日 07:00–14:00（小雨照開）",
      "price": "免費入場",
      "website": "https://ikutamajinja.jp/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d2_04",
      "day": 2,
      "time": "11:35",
      "timeHint": "morning",
      "type": "transport",
      "title": "前往心齋橋（地鐵千日前線→御堂筋線）",
      "cityId": "osaka",
      "address": "大阪地鐵谷町九丁目站",
      "addressLocal": "Osaka Metro 谷町九丁目駅 2番線",
      "coords": [
        34.6671,
        135.5158
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】谷町九丁目站 2 號月台，千日前線往野田阪神方向。\n【轉車】難波站轉御堂筋線 2 號月台（往新大阪方向），坐 1 個站到心齋橋。\n【下車】心齋橋站步行約 2 分鐘到西家（出口號碼待確認，可能是 5 號出口）。\n【車資】IC ¥190，ICOCA 拍卡。\n【備案】由生國魂神社乘的士約 10 分鐘（估算）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
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
        "to": "心齋橋",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵 Osaka Metro",
        "line": "千日前線 → 御堂筋線",
        "durationMin": 10,
        "stopCount": 3,
        "liveApi": null
      }
    },
    {
      "id": "evt_d2_05",
      "day": 2,
      "time": "12:00",
      "timeHint": "afternoon",
      "type": "food",
      "title": "西家 本店（うどんちり本家 にし家 本店）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區東心齋橋1-18-18",
      "addressLocal": "〒542-0083 大阪府大阪市中央区東心斎橋1-18-18 うどんちり本家 にし家",
      "coords": [
        34.6737,
        135.5024
      ],
      "tags": [
        "一人鍋",
        "可預約",
        "地酒"
      ],
      "moodColor": "#A0785A",
      "note": "【今次】午餐：烏冬鍋。\n【Tabelog】3.59（1,031 則評價）\n【攻略】1957 年創業，「烏冬海鮮鍋（うどんちり）」是其註冊商標：活蝦、蛤蜊及季節蔬菜的海鮮鍋，蘸特製柚子醋，最後加入自家製大阪烏冬，烏冬可任添。這個鍋很適合配酒，店內備有日本各地地酒，可配一合冷酒。\n【預約】一人鍋套餐要網上預約（10 人以下 24 小時網上受理）；一人鍋套餐（きり）¥6,000 起，另有（かえで）¥6,500，以預約頁面為準。不想吃鍋可單點御膳 ¥1,958 起。",
      "phone": "+81-50-5385-3448",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "星期一至六 11:00–22:30（L.O. 22:00）；日及假期至 22:00；1/1 休、另有不定休",
      "price": "一人鍋套餐 ¥6,000–6,500＋地酒一合，約 ¥7,500（估算）",
      "website": "https://tabelog.com/osaka/A2701/A270201/27000825/",
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
      "id": "trp_d2_06",
      "day": 2,
      "time": "13:25",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "前往大國町（地鐵御堂筋線）",
      "cityId": "osaka",
      "address": "大阪地鐵心齋橋站 御堂筋線 1 號月台",
      "addressLocal": "心斎橋駅（Osaka Metro 御堂筋線）1番線（なんば・天王寺方面）",
      "coords": [
        34.6749,
        135.502
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】由西家步行約 3 分鐘到心齋橋站（估算）；御堂筋線 1 號月台，往天王寺方向。\n【下車】大國町站 2 號出口，向西步行約 6 分鐘到山中酒之店。\n【車資】IC ¥190，ICOCA 拍卡。\n【備案】御堂筋線約 3–5 分鐘一班；亦可在難波站下車步行約 20 分鐘（估算）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
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
        "mode": "train",
        "from": "心齋橋",
        "to": "大國町",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵",
        "line": "御堂筋線",
        "durationMin": 4,
        "stopCount": 2,
        "liveApi": null
      }
    },
    {
      "id": "evt_d2_07",
      "day": 2,
      "time": "13:40",
      "timeHint": "afternoon",
      "type": "shop",
      "title": "山中酒之店 本店（山中酒の店）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市浪速區敷津西1-10-19",
      "addressLocal": "大阪府大阪市浪速区敷津西1-10-19 山中酒の店",
      "coords": [
        34.6588,
        135.4935
      ],
      "tags": [
        "清酒",
        "試飲",
        "手信"
      ],
      "moodColor": "#8C8378",
      "note": "【今次】自助試飲＋買地酒。\n【攻略】1970 年創業的地酒專門店，大國町住宅區裡一幢白色現代建築，店內幾乎全是地酒，最接近住吉酒販的感覺。2 樓試飲室用專用代幣自助試飲（每個 ¥350，一杯 60ml），常開 50 款以上，不用講日文；試到喜歡的，可以一合瓶（¥110 瓶，散賣）或四合瓶買走。3 樓整層是日本酒雪櫃，按火入、生酒、大吟釀分三室，冷，記得帶外套。\n【實用】入口在正面右手樓梯上 2 樓。買酒要求防震包裝（緩衝材で包んでください）。酒與小菜配對試飲只在星期二至五，2/8 星期一不設，所以今次只做自助試飲。",
      "phone": "+81-6-6631-3959",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "一至五 10:00–19:00；六及假期 10:00–18:00；日休",
      "price": "試飲代幣 1 個 ¥350（60ml）；一合瓶散賣 ¥110 瓶＋酒價",
      "website": "https://yamanaka-sake.jp/",
      "cost": {
        "amount": 1050,
        "currency": "JPY",
        "category": "ticket"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d2_12",
      "day": 2,
      "time": "15:15",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "前往松屋町（地鐵御堂筋線 → 長堀鶴見綠地線）",
      "cityId": "osaka",
      "address": "大阪地鐵大國町站 御堂筋線（往新大阪方向）",
      "addressLocal": "大国町駅（Osaka Metro 御堂筋線）梅田・新大阪方面",
      "coords": [
        34.6529,
        135.4972
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】由山中酒之店步行約 6 分鐘回大國町站 2 號出口（估算）；御堂筋線往新大阪方向月台。\n【轉車】心齋橋站轉長堀鶴見綠地線 1 號月台（往門真南方向），坐 2 個站到松屋町。\n【下車】松屋町站步行約 5 分鐘到空堀商店街西端（估算）。\n【車資】IC ¥240，ICOCA 拍卡。\n【備案】酒買多了可在大國町截的士直接到空堀商店街，約 15 分鐘（估算）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
      "price": "IC ¥240（ICOCA）",
      "website": null,
      "cost": {
        "amount": 240,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "train",
        "from": "大國町",
        "to": "松屋町",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵",
        "line": "御堂筋線 → 長堀鶴見綠地線",
        "durationMin": 16,
        "stopCount": 4,
        "liveApi": null
      }
    },
    {
      "id": "evt_d2_08",
      "day": 2,
      "time": "15:45",
      "timeHint": "afternoon",
      "type": "shop",
      "title": "昆布土居（こんぶ土居）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區谷町7-6-38",
      "addressLocal": "大阪府大阪市中央区谷町7-6-38 こんぶ土居",
      "coords": [
        34.6735,
        135.5155
      ],
      "tags": [
        "空堀",
        "老店",
        "手信"
      ],
      "moodColor": "#8C8378",
      "note": "【今次】空堀商店街散步＋昆布老店。\n【攻略】由松屋町一端沿空堀商店街向東慢行，沿途是長屋改建的小店和本地老商店，坡道多，慢慢走。土居是創業百多年的昆布老店，只用天然真昆布，可請店員介紹熬高湯用和直接食用的分別。天然真昆布（寸切）30g ¥550，輕身易帶，適合買回香港自用；講究一點可買按量計價的一本撰（每 100g ¥2,500）。\n【實用】2/8 星期一營業；16:50 離開，步行約 10 分鐘到長堀居酒屋（估算）。",
      "phone": "+81-6-6761-3914",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "09:30–18:00；逢星期日及假期休",
      "price": "天然真昆布（寸切）30g ¥550；一本撰 每 100g ¥2,500（按量計價）",
      "website": "https://www.konbudoi.jp/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d2_09",
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
      "note": "【今次】晚餐；大阪名居酒屋。\n【Tabelog】3.78（488 則評價；居酒屋 WEST 百名店 2026）\n【攻略】大阪居酒屋的標竿級名店，以嚴選食材、刺身及比內地雞料理聞名。招牌蟹膏可樂餅（蟹味噌コロッケ）必點；刺身約 ¥1,300 起，清酒一杯約 ¥850 起。說出喜歡的口味，請店方按料理配全國地酒，先冷酒配刺身，再燙酒配雞料理。\n【預約】打電話預約，一般建議約 2 星期前預約；吧枱 12 位，指定吧枱一人位。\n【注意】2026 年 8 月起改為星期一營業（17:00–22:00）、星期三休，但仍有星期一休的說法，訂位時必須確認 2/8（一）營業。如不營業，改去燗之美穗（安堂寺町，步行約 10 分鐘，見靈感）。",
      "phone": "+81-6-6768-0515",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "星期二至五 17:00–22:00；六 13:00–22:00；2026-08 起星期一 17:00–22:00、星期三休（訂位時確認）",
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
      "id": "trp_d2_10",
      "day": 2,
      "time": "20:20",
      "timeHint": "evening",
      "type": "transport",
      "title": "前往谷町四丁目（地鐵谷町線）",
      "cityId": "osaka",
      "address": "大阪地鐵谷町六丁目站 2 號月台",
      "addressLocal": "Osaka Metro 谷町六丁目駅 2番線（谷町線・大日方面）",
      "coords": [
        34.6761,
        135.5157
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】由長堀居酒屋步行約 15 分鐘到谷町六丁目站（估算）；2 號月台，谷町線往大日方向。\n【下車】谷町四丁目站 4 號出口步行約 4 分鐘回酒店。\n【車資】IC ¥190，ICOCA 拍卡。\n【備案】長堀居酒屋門口截的士回酒店約 10 分鐘（估算）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
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
        "from": "谷町六丁目",
        "to": "谷町四丁目",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵 Osaka Metro",
        "line": "谷町線",
        "durationMin": 2,
        "stopCount": 1,
        "liveApi": null
      }
    },
    {
      "id": "evt_d2_11",
      "day": 2,
      "time": "20:30",
      "timeHint": "evening",
      "type": "rest",
      "title": "浪華之湯",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區內本町2-1-9（Dormy Inn 大阪谷町）",
      "addressLocal": "〒540-0026 大阪府大阪市中央区内本町2-1-9 天然温泉 浪華の湯 ドーミーイン大阪谷町 13F 大浴場",
      "coords": [
        34.6835,
        135.5139
      ],
      "tags": [
        "天然溫泉",
        "桑拿"
      ],
      "moodColor": "#9AA8A3",
      "note": "【攻略】喝完清酒不要立即泡太熱的水，先休息 30 分鐘、多喝水再上 13 樓；21:30 後有免費夜鳴蕎麥麵。\n【實用】浴場內嚴禁帶食物及酒精飲品，只可帶補充水分的飲品；有紋身不可入浴。",
      "phone": "+81-6-6945-5489",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "大浴場「浪華之湯」（13 樓，男女分開）15:00–翌日 10:00；桑拿 01:00–05:00 暫停",
      "price": "住客免費",
      "website": "https://dormy-hotels.com/dormyinn/hotels/osakatanimachi/spa/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d3_01",
      "day": 3,
      "time": "09:00",
      "timeHint": "morning",
      "type": "food",
      "title": "Boulangerie & cafe gout（ブーランジュリー&カフェ グウ）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區內本町1-1-10 Rinsan 大廈 1 樓",
      "addressLocal": "大阪府大阪市中央区内本町1-1-10 リンサンビル 1F ブーランジュリー&カフェ グウ",
      "coords": [
        34.6835,
        135.516
      ],
      "tags": [
        "麵包百名店",
        "PayPay"
      ],
      "moodColor": "#A0785A",
      "note": "【今次】早餐；麵包店。\n【Tabelog】3.72（1,082 則評價；パン WEST 百名店 2026）\n【攻略】用國產小麥的麵包百名店，早上有每日麵包 3 款＋沙律＋小菜＋飲品或湯的早餐套餐。\n【實用】07:30 開，星期三、四休；店內用餐至 19:00。不收信用卡，可用 PayPay 或現金。由酒店步行約 3 分鐘（估算）；09:50 出發去谷町四丁目站。",
      "phone": "+81-6-6585-0833",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "星期一、二、五、六、日 07:30–20:00（店內用餐至 19:00）；三、四休",
      "price": "早餐套餐 ¥600 起",
      "website": "https://tabelog.com/osaka/A2701/A270104/27075014/",
      "cost": {
        "amount": 700,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d3_02",
      "day": 3,
      "time": "10:04",
      "timeHint": "morning",
      "type": "transport",
      "title": "前往新石切（地鐵中央線直通）",
      "cityId": "osaka",
      "address": "大阪地鐵谷町四丁目站（中央線）1 號月台",
      "addressLocal": "Osaka Metro 谷町四丁目駅 1番線（中央線・生駒方面）",
      "coords": [
        34.6826,
        135.5176
      ],
      "tags": [
        "地鐵",
        "近鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】由 gout 步行約 3 分鐘到谷町四丁目站（估算）；中央線 1 號月台，往生駒方向。\n【實用】中央線直通近鐵京阪奈線，不用轉車；住谷町四丁目比由梅田出發少轉一次車。\n【下車】新石切站步行約 7 分鐘到石切劍箭神社。\n【車資】IC ¥540，ICOCA 拍卡。\n【備案】中央線約 8–10 分鐘一班，錯過可乘下一班。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
      "price": "IC ¥540（ICOCA）",
      "website": null,
      "cost": {
        "amount": 540,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "subway",
        "from": "谷町四丁目",
        "to": "新石切",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵／近鐵",
        "line": "中央線 → 近鐵京阪奈線直通",
        "durationMin": 18,
        "stopCount": 8,
        "liveApi": null
      }
    },
    {
      "id": "evt_d3_03",
      "day": 3,
      "time": "10:30",
      "timeHint": "morning",
      "type": "sight",
      "title": "石切劍箭神社（石切劔箭神社）",
      "cityId": "osaka",
      "address": "日本大阪府東大阪市東石切町1-1-1",
      "addressLocal": "大阪府東大阪市東石切町1-1-1 石切劔箭神社",
      "coords": [
        34.682,
        135.6462
      ],
      "tags": [
        "靈性",
        "個人參拜"
      ],
      "moodColor": "#6B7F7A",
      "note": "【今次】百度參拜（お百度参り）。\n【攻略】石切劍箭神社以「百度參拜（お百度参り）」聞名，完全個人修行：先在本殿右邊授與所領百度紐，本殿前二禮二拍手一禮，然後在本殿和鳥居附近的百度石之間來回，每圈摺一條紐記數；完成後再參拜，把紐放入賽錢箱左邊的奉納箱。不一定要 100 次，自己決定次數也可以。\n【實用】100 次約 1 小時；要趕 11:46 近鐵，時間不夠就減少次數。",
      "phone": "+81-72-982-3621",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "境內 24 小時；百度紐授與 08:00–16:30",
      "price": "免費（香油隨意）",
      "website": "https://www.ishikiri.or.jp/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d3_04",
      "day": 3,
      "time": "11:46",
      "timeHint": "morning",
      "type": "transport",
      "title": "前往近鐵奈良（近鐵）",
      "cityId": "nara",
      "address": "近鐵新石切站",
      "addressLocal": "近鉄 新石切駅 1番線",
      "coords": [
        34.6801,
        135.6409
      ],
      "tags": [
        "近鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】新石切站 1 號月台，近鐵京阪奈線往學研奈良登美丘方向。\n【轉車】生駒站轉近鐵奈良線 3 號月台（往近鐵奈良方向）。\n【下車】近鐵奈良站步行約 15 分鐘到玄，或乘的士約 5 分鐘（估算）；玄最後入店 13:00。出口號碼待確認。\n【車資】IC ¥550，ICOCA 拍卡。\n【備案】錯過就等下一班，到奈良後改乘的士。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
      "price": "IC ¥550（ICOCA）",
      "website": null,
      "cost": {
        "amount": 550,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "train",
        "from": "新石切",
        "to": "近鐵奈良",
        "fromEventId": null,
        "toEventId": null,
        "operator": "近畿日本鐵道",
        "line": "近鐵京阪奈線 → 近鐵奈良線",
        "durationMin": 32,
        "stopCount": 8,
        "liveApi": null
      }
    },
    {
      "id": "evt_d3_05",
      "day": 3,
      "time": "12:35",
      "timeHint": "afternoon",
      "type": "food",
      "title": "蕎麥 玄（そば 玄）",
      "cityId": "nara",
      "address": "日本奈良縣奈良市福智院町23-2",
      "addressLocal": "奈良県奈良市福智院町23-2 玄",
      "coords": [
        34.6768,
        135.8343
      ],
      "tags": [
        "蕎麥",
        "百名店",
        "要預約",
        "現金"
      ],
      "moodColor": "#A0785A",
      "note": "【今次】午餐；奈良町手打蕎麥。\n【Tabelog】4.03（585 則評價；蕎麥 WEST 百名店 2025）\n【攻略】奈良町古民家裡的手打蕎麥名店，奈良評分最高的蕎麥店之一。午市只做蕎麥，按預約份數供應；建議點兩款不同蕎麥比較香氣，最後喝蕎麥湯（蕎麦湯）收結，可配一小杯奈良地酒。\n【預約】完全預約制。午市要電話預約蕎麥份數（每日約 40 份），通常要提早致電；最後入店 13:00，遲到可能失去座位。只收現金。",
      "phone": "+81-742-27-6868",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "星期二至五 午市 11:30–13:00（最後入店）、晚市 18:00–21:00；星期日、一休",
      "price": "午市約 ¥3,000–4,000（只收現金）",
      "website": "https://tabelog.com/nara/A2901/A290101/29000052/",
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
      "id": "evt_d3_06",
      "day": 3,
      "time": "13:40",
      "timeHint": "afternoon",
      "type": "sight",
      "title": "奈良春日山酒造",
      "cityId": "nara",
      "address": "日本奈良縣奈良市高畑町915",
      "addressLocal": "奈良県奈良市高畑町915 奈良春日山酒造",
      "coords": [
        34.6766,
        135.8384
      ],
      "tags": [
        "清酒",
        "酒藏",
        "試飲"
      ],
      "moodColor": "#6B7F7A",
      "note": "【今次】試飲與酒藏參觀（舊八木酒造，代表酒「升平」）。\n【攻略】奈良町東南、高畑一帶的老酒藏（舊八木酒造），代表酒「升平」。商店已遷往隔鄰的新建築，營業時間內可免費試飲；2 月正值釀酒季。可比較「升平」純米酒和當季新酒，再挑 1–2 支四合瓶帶回。\n【預約】試飲不用預約；酒藏參觀免費、最多 20 人，須提前致電預約，可詢問一人參觀是否可行，講解以日語為主。由玄步行約 6 分鐘（估算）；14:15 出發，步行約 25 分鐘（或乘的士）到錦光園。",
      "phone": "+81-742-26-2300",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "平日 09:00–17:00；逢星期六、日及假期休",
      "price": "試飲免費；酒藏參觀免費（須預約）",
      "website": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d3_07",
      "day": 3,
      "time": "14:45",
      "timeHint": "afternoon",
      "type": "sight",
      "title": "錦光園",
      "cityId": "nara",
      "address": "日本奈良縣奈良市三條町547",
      "addressLocal": "〒630-8244 奈良県奈良市三条町547 錦光園",
      "coords": [
        34.6814,
        135.8228
      ],
      "tags": [
        "手作",
        "工藝",
        "要預約"
      ],
      "moodColor": "#6B7F7A",
      "note": "【今次】手握奈良墨體驗（にぎり墨）。\n【攻略】由室町時代傳承至今的奈良墨工房。流程：墨的歷史講解 → 職人示範入模 → 親手握住溫暖柔軟的生墨，留下指紋和手形 → 放入桐箱帶走。手幾乎不會弄髒。帶回香港後放在陰涼處，3 個月內不要打開，讓它慢慢乾透。\n【預約】要預約，前一日 21:00 前；訂 14:45。由春日山酒造步行約 25 分鐘（估算）。取消要體驗前一日 12:00 前，否則全額收費。可加購參觀製墨現場 ¥1,650。",
      "phone": "+81-742-22-3319",
      "whatsapp": null,
      "line": "https://lin.ee/jpln9Ki",
      "messenger": "https://m.me/kinkoenjp",
      "openHours": "體驗 09:00 起（受理至 17:00）；年中無休",
      "price": "成人 ¥3,300（連桐箱）",
      "website": "https://kinkoen.jp/",
      "cost": {
        "amount": 3300,
        "currency": "JPY",
        "category": "ticket"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d3_08",
      "day": 3,
      "time": "16:00",
      "timeHint": "afternoon",
      "type": "shop",
      "title": "奈良泉勇齋（なら泉勇斎）",
      "cityId": "nara",
      "address": "日本奈良縣奈良市西寺林町22",
      "addressLocal": "奈良県奈良市西寺林町22 なら泉勇斎",
      "coords": [
        34.6797,
        135.8294
      ],
      "tags": [
        "清酒",
        "試飲"
      ],
      "moodColor": "#8C8378",
      "note": "【今次】奈良地酒試飲。\n【攻略】奈良縣地酒專門店，約 120 款奈良酒可付費試飲（每杯 50cc，¥200 起），可一次比較不同酒藏；晚餐前試 3–4 杯即可，選 2–3 款喜歡的帶回酒店／香港。\n【實用】逢星期四休（假期照開），偶有臨時休息。16:45 出發，步行約 10 分鐘到鶴由（估算）。",
      "phone": "+81-742-26-6078",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "11:00–20:00；逢星期四休",
      "price": "試飲 50cc ¥200 起",
      "website": "https://www.naraizumi.jp/",
      "cost": {
        "amount": 1000,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d3_09",
      "day": 3,
      "time": "17:00",
      "timeHint": "evening",
      "type": "food",
      "title": "鶴由（つる由）",
      "cityId": "nara",
      "address": "日本奈良縣奈良市脇戶町22-1",
      "addressLocal": "奈良県奈良市脇戸町22-1 つる由",
      "coords": [
        34.6781,
        135.8286
      ],
      "tags": [
        "日本料理",
        "奈良地酒",
        "要預約"
      ],
      "moodColor": "#A0785A",
      "note": "【今次】晚餐；奈良町日本料理。\n【Tabelog】3.78（256 則評價；The Tabelog Award 2026 Bronze；日本料理 WEST 百名店 2025）\n【攻略】奈良町的日本料理名店，獲 The Tabelog Award 2026 Bronze，是今次行程最高級的一餐。季節會席以大和食材為主，請店方以奈良地酒配餐（剛在泉勇齋試過的酒藏可順便問）。\n【預約】打電話；人氣高，建議 2–3 個月前（約 2026 年 11–12 月）致電，指定 17:00 晚市及一人位；有一人午市預約的例子，一人晚市要先確認。\n【實用】約 19:15 結束，步行約 10–15 分鐘到興福寺一帶看瑠璃繪（估算）。",
      "phone": "+81-742-26-7798",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "12:00–14:00、17:00–21:30；星期一休",
      "price": "晚市預算 ¥20,000–29,999（連清酒）",
      "website": "https://tabelog.com/nara/A2901/A290101/29000969/",
      "cost": {
        "amount": 25000,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d3_10",
      "day": 3,
      "time": "19:15",
      "timeHint": "evening",
      "type": "sight",
      "title": "幸福迴廊 奈良瑠璃繪（しあわせ回廊 なら瑠璃絵）",
      "cityId": "nara",
      "address": "日本奈良縣奈良市 奈良公園一帶（春日大社、興福寺、東大寺）",
      "addressLocal": "奈良県奈良市 奈良公園一帯（興福寺 周辺）",
      "coords": [
        34.683,
        135.8319
      ],
      "tags": [
        "期間限定",
        "夜間參拜"
      ],
      "moodColor": "#6B7F7A",
      "note": "【攻略】2027 年 2/8–2/14 舉行。參考 2026 年：春日大社、興福寺、東大寺有夜間特別參拜，琉璃色燈光迴廊，另有瑠璃繪市集和免費「夜參燈籠導賞（夜參り提灯）」（每條路線每日 1 次、約 10 人、先到先得）。不必拍照打卡，選一間寺社慢慢夜參拜已很有氣氛。\n【實用】2027 年詳細節目未定；夜間戶外很冷，帶圍巾手套。查詢：奈良瑠璃繪（なら瑠璃絵）實行委員會。",
      "phone": "+81-742-30-6560",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "2027/2/8–2/14，約 18:00–21:00（按 2026 年）",
      "price": "入場免費；個別夜間特別參拜或收費（出發前再確認）",
      "website": "https://rurie.jp/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d3_11",
      "day": 3,
      "time": "20:48",
      "timeHint": "evening",
      "type": "transport",
      "title": "前往谷町四丁目（近鐵→京阪奈線直通）",
      "cityId": "nara",
      "address": "近鐵奈良站 1 號月台",
      "addressLocal": "近鉄奈良駅 1番線（近鉄奈良線 快速急行・大阪難波行き）",
      "coords": [
        34.684,
        135.8263
      ],
      "tags": [
        "近鐵",
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】近鐵奈良站 1 號月台（始發），快速急行往大阪難波方向。\n【轉車】生駒站同站轉近鐵京阪奈線 2 號月台（往夢洲方向，直通地鐵中央線），坐到谷町四丁目不用再轉車。\n【下車】谷町四丁目站 4 號出口步行約 4 分鐘回酒店。\n【車資】IC ¥860，ICOCA 拍卡。\n【備案】快速急行直達大阪上本町（約 21:20 到），再轉谷町線由谷町九丁目坐 2 個站到谷町四丁目（班次待確認）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
      "price": "IC ¥860（ICOCA）",
      "website": null,
      "cost": {
        "amount": 860,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "train",
        "from": "近鐵奈良",
        "to": "谷町四丁目",
        "fromEventId": null,
        "toEventId": null,
        "operator": "近畿日本鐵道／大阪地鐵",
        "line": "近鐵奈良線快速急行 → 近鐵京阪奈線（直通中央線）",
        "durationMin": 47,
        "stopCount": 13,
        "liveApi": null
      }
    },
    {
      "id": "evt_d3_12",
      "day": 3,
      "time": "21:50",
      "timeHint": "night",
      "type": "rest",
      "title": "浪華之湯",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區內本町2-1-9（Dormy Inn 大阪谷町）",
      "addressLocal": "〒540-0026 大阪府大阪市中央区内本町2-1-9 天然温泉 浪華の湯 ドーミーイン大阪谷町 13F 大浴場",
      "coords": [
        34.6835,
        135.5139
      ],
      "tags": [
        "天然溫泉",
        "桑拿"
      ],
      "moodColor": "#9AA8A3",
      "note": "【攻略】奈良一整天走得多，泡露天風呂和一人壺湯舒緩雙腳；夜鳴蕎麥麵 23:00 結束，奈良晚餐吃得飽可以略過。\n【實用】浴場內嚴禁帶食物及酒精飲品，只可帶補充水分的飲品；有紋身不可入浴。",
      "phone": "+81-6-6945-5489",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "大浴場「浪華之湯」（13 樓，男女分開）15:00–翌日 10:00；桑拿 01:00–05:00 暫停",
      "price": "住客免費",
      "website": "https://dormy-hotels.com/dormyinn/hotels/osakatanimachi/spa/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d4_01",
      "day": 4,
      "time": "08:35",
      "timeHint": "morning",
      "type": "transport",
      "title": "前往東梅田（地鐵谷町線）",
      "cityId": "osaka",
      "address": "大阪地鐵谷町四丁目站 2 號月台",
      "addressLocal": "Osaka Metro 谷町四丁目駅 2番線（谷町線・大日方面）／4番出口から入場",
      "coords": [
        34.6826,
        135.5176
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】由酒店步行約 4 分鐘到谷町四丁目站 4 號出口；2 號月台，谷町線往大日方向。\n【下車】東梅田站往北新地方向出口，步行約 12 分鐘到倫敦茶室堂島本店（估算）。\n【車資】IC ¥240，ICOCA 拍卡。\n【備案】谷町線約 5 分鐘一班。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
      "price": "IC ¥240（ICOCA）",
      "website": null,
      "cost": {
        "amount": 240,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "subway",
        "from": "谷町四丁目",
        "to": "東梅田",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵 Osaka Metro",
        "line": "谷町線",
        "durationMin": 7,
        "stopCount": 3,
        "liveApi": null
      }
    },
    {
      "id": "evt_d4_02",
      "day": 4,
      "time": "09:00",
      "timeHint": "morning",
      "type": "food",
      "title": "倫敦茶室 堂島本店（ロンドンティールーム）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區曾根崎新地2-1-23 JPR 大廈 B1",
      "addressLocal": "大阪府大阪市北区曽根崎新地2-1-23 JPRビルB1F ロンドンティールーム 堂島本店",
      "coords": [
        34.6975,
        135.4953
      ],
      "tags": [
        "英式紅茶",
        "百名店"
      ],
      "moodColor": "#A0785A",
      "note": "【今次】早餐套餐。\n【Tabelog】3.69（1,264 則評價；咖啡店 WEST 百名店 2025）\n【攻略】平日 09:00 開。今天點早餐多士套餐（¥700，連紅茶），加點招牌煮込式皇家奶茶（ロイヤルミルクティー）；明天（2/11 假期）再來吃完全預約制的英式早餐。\n【實用】店舖與西梅田站 8 號出口直結，09:50 結帳即可趕 09:56 地鐵。",
      "phone": "+81-6-6347-0107",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "星期一至五 09:00–20:00；六日及假期 08:00–20:00（L.O. 19:00）；早餐至 11:00",
      "price": "早餐多士套餐 ¥700（連紅茶）",
      "website": "https://tabelog.com/osaka/A2701/A270101/27002171/",
      "cost": {
        "amount": 900,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d4_03",
      "day": 4,
      "time": "09:56",
      "timeHint": "morning",
      "type": "transport",
      "title": "前往肥後橋（地鐵四橋線）",
      "cityId": "osaka",
      "address": "大阪地鐵西梅田站",
      "addressLocal": "Osaka Metro 西梅田駅（四つ橋線） 2番線",
      "coords": [
        34.6995,
        135.4957
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】倫敦茶室與西梅田站 8 號出口直結；四橋線 2 號月台（始發）往北加賀屋方向。\n【下車】肥後橋站 4 號出口向西步行約 10 分鐘到大阪中之島美術館。\n【車資】IC ¥190，ICOCA 拍卡。\n【備案】由堂島步行約 20 分鐘到美術館（估算）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
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
        "from": "西梅田",
        "to": "肥後橋",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵 Osaka Metro",
        "line": "四橋線",
        "durationMin": 2,
        "stopCount": 1,
        "liveApi": null
      }
    },
    {
      "id": "evt_d4_04",
      "day": 4,
      "time": "10:10",
      "timeHint": "morning",
      "type": "sight",
      "title": "大阪中之島美術館",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區中之島4-3-1",
      "addressLocal": "大阪府大阪市北区中之島4-3-1 大阪中之島美術館",
      "coords": [
        34.6924,
        135.4914
      ],
      "tags": [
        "展覽",
        "期間限定"
      ],
      "moodColor": "#6B7F7A",
      "note": "【今次】展覽「創作女性的 100 年」（つくる女性の100年）。\n【攻略】2027/1/9–3/22 在 5 樓展室舉行，以近百年來創作的日本女性為主題。平日早上人較少，可慢慢看；美術館建築本身（黑色立方體）也值得留意。\n【實用】網上 etix／ART PASS 預先買票；入場至 16:30。問詢：大阪市總合 熱線（なにわコール）。",
      "phone": "+81-6-4301-7285",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "10:00–17:00（入場至 16:30）；逢星期一休",
      "price": "一般 ¥1,900（前售 ¥1,700）",
      "website": "https://nakka-art.jp/",
      "cost": {
        "amount": 1900,
        "currency": "JPY",
        "category": "ticket"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d4_05",
      "day": 4,
      "time": "12:14",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "前往浪華橋（京阪中之島線）",
      "cityId": "osaka",
      "address": "京阪中之島站",
      "addressLocal": "京阪 中之島駅（中之島線） 1番線",
      "coords": [
        34.6909,
        135.4868
      ],
      "tags": [
        "京阪"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】美術館步行約 5 分鐘到京阪中之島站；1 號月台（始發）往出町柳方向。\n【下車】浪華橋站步行約 5 分鐘到柴藤（出口號碼待確認）。\n【車資】IC ¥240，ICOCA 拍卡。\n【備案】沿中之島河邊散步約 25 分鐘（估算）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
      "price": "IC ¥240（ICOCA）",
      "website": null,
      "cost": {
        "amount": 240,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "train",
        "from": "中之島",
        "to": "浪華橋（なにわ橋）",
        "fromEventId": null,
        "toEventId": null,
        "operator": "京阪電氣鐵道",
        "line": "京阪中之島線",
        "durationMin": 5,
        "stopCount": 3,
        "liveApi": null
      }
    },
    {
      "id": "evt_d4_06",
      "day": 4,
      "time": "12:30",
      "timeHint": "afternoon",
      "type": "food",
      "title": "本家柴藤",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區高麗橋2-5-2",
      "addressLocal": "大阪府大阪市中央区高麗橋2-5-2 本家柴藤",
      "coords": [
        34.69,
        135.5046
      ],
      "tags": [
        "鰻魚",
        "老字號",
        "可預約"
      ],
      "moodColor": "#A0785A",
      "note": "【今次】午餐；大阪鰻魚老字號。\n【Tabelog】3.57（465 則評價）\n【攻略】創業約 300 年、第十五代傳人經營的大阪鰻魚老店。必吃「大阪鰻魚飯（大阪まむし）」：大阪做法將鰻魚夾在飯中間蒸焗，「菊」¥4,920 起；與 D6 有馬的現烤鰻魚可作比較。\n【注意】店方要求客人不要用香水、不要用有香味的柔順劑——當日早上不要塗精油。逢星期日、一休，可電話預約；L.O. 17:00。",
      "phone": "+81-6-6231-4810",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "10:30–17:00 L.O.（18:00 關門）；逢星期日、一休",
      "price": "大阪鰻魚飯「菊」¥4,920；預算 ¥6,000–7,999",
      "website": "https://tabelog.com/osaka/A2701/A270102/27000005/",
      "cost": {
        "amount": 4920,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d4_07",
      "day": 4,
      "time": "13:44",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "前往南森町（地鐵堺筋線）",
      "cityId": "osaka",
      "address": "大阪地鐵北濱站",
      "addressLocal": "Osaka Metro 北浜駅（堺筋線） 2番線",
      "coords": [
        34.6915,
        135.5076
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】北濱站 2 號月台，堺筋線往天神橋筋六丁目方向。\n【下車】南森町站 4A 出口，沿天神橋筋商店街步行約 5 分鐘到摩芙瑠。\n【車資】IC ¥190，ICOCA 拍卡。\n【備案】由柴藤步行約 20 分鐘到摩芙瑠（估算）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
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
        "from": "北濱",
        "to": "南森町",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵 Osaka Metro",
        "line": "堺筋線",
        "durationMin": 1,
        "stopCount": 1,
        "liveApi": null
      }
    },
    {
      "id": "evt_d4_08",
      "day": 4,
      "time": "14:00",
      "timeHint": "afternoon",
      "type": "shop",
      "title": "摩芙瑠（アンティークカメオ＆ジュエリー まーぶる）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區天神橋1-19-16 前川大廈 2 樓",
      "addressLocal": "大阪府大阪市北区天神橋1-19-16 マエカワビル2F まーぶる",
      "coords": [
        34.695,
        135.5118
      ],
      "tags": [
        "古董首飾",
        "cameo"
      ],
      "moodColor": "#8C8378",
      "note": "【今次】古董浮雕首飾店。\n【攻略】40 多年老店，老闆前川光永親自去歐洲入貨，出版過幾本浮雕寶石（cameo）專書。主力喬治亞時期至 1940 年代古董首飾和 cameo，可請老闆講解雕工、材質和年代分別。\n【實用】只開星期三至六 13:30–17:00（2/10 星期三正常營業）；其他日子可電話預約。",
      "phone": "+81-6-6353-3147",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "星期三至六 13:30–17:00",
      "price": "按貨品標價",
      "website": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d4_09",
      "day": 4,
      "time": "15:26",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "前往北新地（JR 東西線）",
      "cityId": "osaka",
      "address": "JR 大阪天滿宮站",
      "addressLocal": "JR 大阪天満宮駅（JR東西線） 1番線",
      "coords": [
        34.6973,
        135.5126
      ],
      "tags": [
        "JR"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】JR 大阪天滿宮站 1 號月台，JR 東西線區間快速往塚口方向。\n【下車】北新地站 10 號出口，步行約 1 分鐘到 Wayanpuri。\n【車資】IC ¥150，ICOCA 拍卡。\n【備案】南森町站乘谷町線到東梅田，再步行約 8 分鐘（估算）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
      "price": "IC ¥150（ICOCA）",
      "website": null,
      "cost": {
        "amount": 150,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "train",
        "from": "大阪天滿宮",
        "to": "北新地",
        "fromEventId": null,
        "toEventId": null,
        "operator": "JR 西日本",
        "line": "JR 東西線區間快速",
        "durationMin": 2,
        "stopCount": 1,
        "liveApi": null
      }
    },
    {
      "id": "evt_d4_10",
      "day": 4,
      "time": "15:45",
      "timeHint": "afternoon",
      "type": "rest",
      "title": "Wayanpuri 大阪梅田店（ワヤンプリ）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區梅田2-4-7 櫻橋 Nikko 大廈 7 樓",
      "addressLocal": "大阪府大阪市北区梅田2-4-7 桜橋ニコービル7F ヘッドスパ専門店ワヤンプリ 大阪梅田店",
      "coords": [
        34.6984,
        135.4943
      ],
      "tags": [
        "頭療",
        "要預約"
      ],
      "moodColor": "#9AA8A3",
      "note": "【今次】頭療專門店。\n【攻略】創業 21 年的頭療專門店，先做頭皮診斷，再做毛孔清洗和頸膊護理；整個療程（包括更衣、化妝）都在私人房間。看展、逛街之後，選「頸膊放鬆集中療程（首肩コリ改善集中）」頸膊加強版最適合。\n【預約】全預約制，電話或網上預約 15:45。",
      "phone": "+81-6-6342-5999",
      "whatsapp": null,
      "line": "@dxy4773n",
      "messenger": "https://m.me/wayanpuri.jp",
      "openHours": "平日 11:30–20:30；六 11:00–20:00；日及假期 10:00–19:00；無休",
      "price": "60 分鐘（施術 40 分鐘）¥12,000",
      "website": "https://www.wayanpuri.com/access_umeda.php",
      "cost": {
        "amount": 12000,
        "currency": "JPY",
        "category": "other"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d4_11",
      "day": 4,
      "time": "17:15",
      "timeHint": "evening",
      "type": "food",
      "title": "Kiji 本店（お好み焼 きじ 本店）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區角田町9-20 新梅田食道街 1 樓",
      "addressLocal": "大阪府大阪市北区角田町9-20 新梅田食道街1F お好み焼 きじ 本店",
      "coords": [
        34.7035,
        135.4977
      ],
      "tags": [
        "大阪燒",
        "百名店",
        "現金",
        "排隊"
      ],
      "moodColor": "#A0785A",
      "note": "【今次】晚餐：大阪燒；新梅田食道街。\n【Tabelog】3.66（2,201 則評價；大阪燒 百名店 2025）\n【攻略】1954 年開業的大阪燒老店，大阪燒百名店常客。經典豬肉大阪燒（豚玉）最穩妥，也可加點炒麵（焼きそば）；配一杯生啤，是今次行程最「大阪」的一頓平價晚餐。吧枱 7 位，一人可坐吧枱看師傅在鐵板上煎。\n【實用】不設預約、只收現金；人氣極高，假日可排 30 人以上，平日晚上也要預留排隊時間。料理 L.O. 20:30。頭療後直接步行到新梅田食道街（約 10 分鐘，估算），17:15 平日傍晚排隊較短。星期日休。",
      "phone": "+81-6-6361-5804",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "星期一至六 11:45–21:15（料理 L.O. 20:30）；星期日休",
      "price": "預算 ¥1,000–1,999；連生啤約 ¥2,200（估算，只收現金）",
      "website": "https://tabelog.com/osaka/A2701/A270101/27000297/",
      "cost": {
        "amount": 2200,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d4_12",
      "day": 4,
      "time": "18:42",
      "timeHint": "evening",
      "type": "transport",
      "title": "前往谷町四丁目（地鐵谷町線）",
      "cityId": "osaka",
      "address": "大阪地鐵東梅田站 1 號月台",
      "addressLocal": "Osaka Metro 東梅田駅 1番線（谷町線・喜連瓜破／八尾南方面）",
      "coords": [
        34.7006,
        135.4998
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】由新梅田食道街步行約 7 分鐘到東梅田站（估算）；1 號月台，谷町線往八尾南方向。\n【下車】谷町四丁目站 4 號出口步行約 4 分鐘回酒店。\n【車資】IC ¥240，ICOCA 拍卡。\n【備案】谷町線約 5 分鐘一班。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
      "price": "IC ¥240（ICOCA）",
      "website": null,
      "cost": {
        "amount": 240,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "subway",
        "from": "東梅田",
        "to": "谷町四丁目",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵 Osaka Metro",
        "line": "谷町線",
        "durationMin": 7,
        "stopCount": 3,
        "liveApi": null
      }
    },
    {
      "id": "evt_d4_13",
      "day": 4,
      "time": "19:00",
      "timeHint": "evening",
      "type": "rest",
      "title": "浪華之湯",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區內本町2-1-9（Dormy Inn 大阪谷町）",
      "addressLocal": "〒540-0026 大阪府大阪市中央区内本町2-1-9 天然温泉 浪華の湯 ドーミーイン大阪谷町 13F 大浴場",
      "coords": [
        34.6835,
        135.5139
      ],
      "tags": [
        "天然溫泉",
        "桑拿"
      ],
      "moodColor": "#9AA8A3",
      "note": "【今次】休息。\n【攻略】頭療後頭皮很放鬆，泡浴時不用再用力洗頭；今晚早點休息。改動：原本頭療後先回酒店再出梅田吃晚餐，改為頭療後直接吃 Kiji 才回酒店，少走一轉。\n【實用】浴場內嚴禁帶食物及酒精飲品，只可帶補充水分的飲品；有紋身不可入浴。",
      "phone": "+81-6-6945-5489",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "大浴場「浪華之湯」（13 樓，男女分開）15:00–翌日 10:00；桑拿 01:00–05:00 暫停",
      "price": "住客免費",
      "website": "https://dormy-hotels.com/dormyinn/hotels/osakatanimachi/spa/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d5_01",
      "day": 5,
      "time": "08:37",
      "timeHint": "morning",
      "type": "transport",
      "title": "前往東梅田（地鐵谷町線）",
      "cityId": "osaka",
      "address": "大阪地鐵谷町四丁目站 2 號月台",
      "addressLocal": "Osaka Metro 谷町四丁目駅 2番線（谷町線・大日方面）／4番出口から入場",
      "coords": [
        34.6826,
        135.5176
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】由酒店步行約 4 分鐘到谷町四丁目站 4 號出口；2 號月台，谷町線往大日方向。\n【下車】東梅田站步行約 12 分鐘到倫敦茶室堂島本店（估算）。\n【車資】IC ¥240，ICOCA 拍卡。\n【備案】谷町線約 5–7 分鐘一班。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
      "price": "IC ¥240（ICOCA）",
      "website": null,
      "cost": {
        "amount": 240,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "subway",
        "from": "谷町四丁目",
        "to": "東梅田",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵 Osaka Metro",
        "line": "谷町線",
        "durationMin": 7,
        "stopCount": 3,
        "liveApi": null
      }
    },
    {
      "id": "evt_d5_02",
      "day": 5,
      "time": "09:00",
      "timeHint": "morning",
      "type": "food",
      "title": "倫敦茶室 堂島本店（ロンドンティールーム）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區曾根崎新地2-1-23 JPR 大廈 B1",
      "addressLocal": "大阪府大阪市北区曽根崎新地2-1-23 JPRビルB1F ロンドンティールーム 堂島本店",
      "coords": [
        34.6975,
        135.4953
      ],
      "tags": [
        "英式紅茶",
        "百名店",
        "要預約"
      ],
      "moodColor": "#A0785A",
      "note": "【今次】英式早餐。\n【Tabelog】3.69（1,264 則評價；咖啡店 WEST 百名店 2025）\n【攻略】1983 年創業的英國紅茶專門店，也是煮込式皇家奶茶（ロイヤルミルクティー）的發祥店。假期 08:00 開；09:00–11:00 有完全預約制的 English Breakfast（¥3,000），配一壺專門店紅茶慢慢享用；不想太飽可改點早餐多士套餐（¥700，連紅茶，供應至 11:00）。\n【預約】English Breakfast 只接受電話預約（10:00–20:00 受理，開店後 1 小時內不接聽）；遲到 15 分鐘自動取消。",
      "phone": "+81-6-6347-0107",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "星期一至五 09:00–20:00；六日及假期 08:00–20:00（L.O. 19:00）；早餐至 11:00",
      "price": "English Breakfast ¥3,000（完全預約制）；多士套餐 ¥700",
      "website": "https://tabelog.com/osaka/A2701/A270101/27002171/",
      "cost": {
        "amount": 3000,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d5_03",
      "day": 5,
      "time": "09:58",
      "timeHint": "morning",
      "type": "transport",
      "title": "前往中崎町（地鐵谷町線）",
      "cityId": "osaka",
      "address": "大阪地鐵東梅田站（谷町線）",
      "addressLocal": "Osaka Metro 東梅田駅（谷町線） 2番線",
      "coords": [
        34.7006,
        135.4998
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】東梅田站 2 號月台，谷町線往大日方向。\n【下車】中崎町站 2 號出口，步行約 4 分鐘到物差沙龍。\n【車資】IC ¥190，ICOCA 拍卡。\n【備案】由堂島直接步行約 20 分鐘（估算）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
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
        "from": "東梅田",
        "to": "中崎町",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵 Osaka Metro",
        "line": "谷町線",
        "durationMin": 1,
        "stopCount": 1,
        "liveApi": null
      }
    },
    {
      "id": "evt_d5_04",
      "day": 5,
      "time": "10:15",
      "timeHint": "morning",
      "type": "rest",
      "title": "物差（アロマサロン ものさし）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區中崎西4-1-30",
      "addressLocal": "大阪府大阪市北区中崎西4-1-30 アロマサロンものさし",
      "coords": [
        34.709,
        135.5046
      ],
      "tags": [
        "精油",
        "SPA",
        "要預約"
      ],
      "moodColor": "#9AA8A3",
      "note": "【今次】香薰沙龍；精油按摩。\n【攻略】中崎町個人經營、完全預約制的私人香薰沙龍，用日本產精油品牌「Kaorito（かおりと）」（每批精油送 GC/MS 分析）和法國藥用級精油。建議選 60 分鐘精油按摩（附碳酸乾式頭療）；店內亦有調香體驗（20ml ¥2,700 起）。可問店主想試哪幾款日本產精油。\n【預約】一人店，電話未必接聽，用網上（Square）預約最穩妥。",
      "phone": "+81-80-1498-5189",
      "whatsapp": null,
      "line": "https://lin.ee/IKJycWN",
      "messenger": "https://m.me/asmonosashi",
      "openHours": "日及假期 09:00–21:00（完全預約制）",
      "price": "精油按摩 60 分鐘 ¥7,000（首次 ¥5,500）",
      "website": "https://aroma-monosashi.com/",
      "cost": {
        "amount": 5500,
        "currency": "JPY",
        "category": "other"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d5_05",
      "day": 5,
      "time": "11:45",
      "timeHint": "morning",
      "type": "transport",
      "title": "前往東梅田（地鐵谷町線）",
      "cityId": "osaka",
      "address": "大阪地鐵中崎町站",
      "addressLocal": "Osaka Metro 中崎町駅 1番線",
      "coords": [
        34.7072,
        135.5056
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】中崎町站 1 號月台，谷町線往八尾南方向。\n【下車】東梅田站步行約 5 分鐘到大阪站前第 3 大廈 B2 的烏冬棒（出口號碼待確認）。\n【車資】IC ¥190，ICOCA 拍卡。\n【備案】步行約 15 分鐘（估算）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
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
        "from": "中崎町",
        "to": "東梅田",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵 Osaka Metro",
        "line": "谷町線",
        "durationMin": 2,
        "stopCount": 1,
        "liveApi": null
      }
    },
    {
      "id": "evt_d5_06",
      "day": 5,
      "time": "12:00",
      "timeHint": "afternoon",
      "type": "food",
      "title": "烏冬棒 大阪本店（うどん棒）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區梅田1-1-3 大阪站前第 3 大廈 B2",
      "addressLocal": "大阪府大阪市北区梅田1-1-3 大阪駅前第3ビル B2F うどん棒 大阪本店",
      "coords": [
        34.6984,
        135.4999
      ],
      "tags": [
        "烏冬",
        "百名店",
        "排隊"
      ],
      "moodColor": "#A0785A",
      "note": "【今次】午餐；讚岐手打烏冬。\n【Tabelog】3.78（2,967 則評價；烏冬 WEST 百名店 2024）\n【攻略】2004 年開業的讚岐烏冬名店，堅持每朝手打。最人氣是冷天烏冬（冷天うどん）¥800，名物是什錦烏冬（ちゃんぽんうどん）¥800；想專心吃麵與湯可點冷湯烏冬（ひやかけ）。店家對日本酒有講究，可配一杯清酒。\n【實用】不設預約，口碑排隊約 20–30 分鐘；假期只開 11:00–15:00，麵賣完即止。星期一休，另有不定休（每月更新），出發前確認。",
      "phone": "+81-6-6458-5518",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "星期二至五 11:00–15:00、17:30–20:00；六日及假期 11:00–15:00；星期一休、不定休",
      "price": "預算 ¥1,000–1,999（連一杯清酒約 ¥1,800，估算）",
      "website": "https://tabelog.com/osaka/A2701/A270101/27003766/",
      "cost": {
        "amount": 1800,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d5_07",
      "day": 5,
      "time": "13:09",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "前往中崎町（地鐵谷町線）",
      "cityId": "osaka",
      "address": "大阪地鐵東梅田站",
      "addressLocal": "東梅田駅（Osaka Metro 谷町線） 2番線",
      "coords": [
        34.7006,
        135.4998
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】東梅田站 2 號月台，谷町線往大日方向。\n【下車】中崎町站 2 號出口旁就是 Guignol。\n【車資】IC ¥190，ICOCA 拍卡。\n【備案】由大阪站前第 3 大廈步行約 15 分鐘（估算）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
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
        "mode": "train",
        "from": "東梅田",
        "to": "中崎町",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵",
        "line": "谷町線",
        "durationMin": 1,
        "stopCount": 1,
        "liveApi": null
      }
    },
    {
      "id": "evt_d5_08",
      "day": 5,
      "time": "13:15",
      "timeHint": "afternoon",
      "type": "shop",
      "title": "Guignol（ギニョール）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區中崎2-3-28",
      "addressLocal": "大阪府大阪市北区中崎2-3-28 Guignol",
      "coords": [
        34.708,
        135.5061
      ],
      "tags": [
        "歐洲 brocante",
        "古道具",
        "中崎町"
      ],
      "moodColor": "#8C8378",
      "note": "【今次】歐洲舊貨與作家作品店，中崎町。\n【攻略】中崎町老屋區的小店，兼營歐洲 brocante（日常舊貨）、古董和日本作家作品。沒有名牌包，多是舊餐具、舊布、鈕扣、皮革小物這類生活舊物，價錢以日常用品為主；皮件有沒有貨要看當日。逛完可在中崎町小巷走一圈再去梅田。\n【實用】逢星期一、二休，另有臨時休息；2/11 是假期，出發前確認營業。14:35 離開，步行約 20 分鐘到 Hilton Plaza West（估算），趕 15:00 香水體驗。按貨品標價。",
      "phone": "+81-6-6359-1388",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "12:00–19:00；逢星期一、二休（另有臨時休息）",
      "price": "按貨品標價",
      "website": "https://guignol.jp/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d5_09",
      "day": 5,
      "time": "15:00",
      "timeHint": "afternoon",
      "type": "shop",
      "title": "LIBRA NATUTHERAPY（ライブラナチュテラピー）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區梅田2-2-2 Hilton Plaza WEST 3 樓",
      "addressLocal": "大阪府大阪市北区梅田2-2-2 ヒルトンプラザWEST 3F ライブラナチュテラピー",
      "coords": [
        34.6998,
        135.4952
      ],
      "tags": [
        "手作",
        "精油",
        "可預約"
      ],
      "moodColor": "#8C8378",
      "note": "【今次】香水調製體驗。\n【攻略】1988 年西宮創立的日本香薰品牌，自設 GC-MS 分析和無菌室入樽；有自家水蒸氣蒸餾的柚子和木曾檜等日本產精油。「溫和香水調製（優しい香水作り）」體驗約 60 分鐘，由約 100 種純精油調出自己的香水（包診斷、瓶和盒）。可順便問心儀精油有沒有成分分析表。\n【預約】體驗 12:00／15:00 兩場，建議預約 15:00。",
      "phone": "+81-90-9994-8706",
      "whatsapp": null,
      "line": "https://lin.ee/J2exijc",
      "messenger": "https://m.me/libranatutherapy",
      "openHours": "11:00–20:00；香水體驗 12:00／15:00",
      "price": "10ml ¥4,950（15ml ¥5,940）",
      "website": "https://aroma-libra.com/",
      "cost": {
        "amount": 4950,
        "currency": "JPY",
        "category": "ticket"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d5_10",
      "day": 5,
      "time": "16:10",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "前往天神橋筋六丁目（地鐵谷町線）",
      "cityId": "osaka",
      "address": "大阪地鐵東梅田站 2 號月台",
      "addressLocal": "Osaka Metro 東梅田駅 2番線（谷町線・大日方面）",
      "coords": [
        34.7006,
        135.4998
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】由 Hilton Plaza West 步行約 5 分鐘到東梅田站（估算）；2 號月台，谷町線往大日方向。\n【下車】天神橋筋六丁目站出站，就是天神橋筋商店街北端（天六）。\n【車資】IC ¥190，ICOCA 拍卡。\n【備案】谷町線約 5–7 分鐘一班；亦可由中崎町沿商店街方向步行約 15 分鐘（估算）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
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
        "from": "東梅田",
        "to": "天神橋筋六丁目",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵 Osaka Metro",
        "line": "谷町線",
        "durationMin": 4,
        "stopCount": 2,
        "liveApi": null
      }
    },
    {
      "id": "evt_d5_11",
      "day": 5,
      "time": "16:20",
      "timeHint": "afternoon",
      "type": "sight",
      "title": "天神橋筋商店街",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區天神橋 6 丁目（天神橋筋商店街北端）",
      "addressLocal": "大阪府大阪市北区天神橋6丁目 天神橋筋商店街",
      "coords": [
        34.7095,
        135.5117
      ],
      "tags": [
        "散步",
        "商店街",
        "清酒"
      ],
      "moodColor": "#8C8378",
      "note": "【今次】散步（天六 → 天五）。\n【攻略】日本最長的商店街之一（南北約 2.6 公里），晚餐前只走北段天六至天五一帶，人情味重、遊客少。可試：街頭可樂餅、玉子燒等小吃（淺嚐即止，留肚晚餐）；可買：老派乾貨、漬物、廚具小物。\n【清酒】附近有地酒專門店「稻田酒店」（見靈感池），2/11 假期是否營業待確認。\n【實用】約 17:20 走回天六一帶準備晚餐，黑兔食堂就在附近。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "商店街全日開放；各店約 10:00–20:00（各店不同）",
      "price": "免費（小吃約 ¥200–500）",
      "website": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d5_13",
      "day": 5,
      "time": "17:30",
      "timeHint": "evening",
      "type": "food",
      "title": "黑兔食堂（食堂 黒うさぎ）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區天神橋5-8-6",
      "addressLocal": "大阪府大阪市北区天神橋5-8-6 食堂 黒うさぎ",
      "coords": [
        34.708,
        135.511
      ],
      "tags": [
        "居酒屋",
        "清酒",
        "百名店",
        "可預約"
      ],
      "moodColor": "#A0785A",
      "note": "【今次】晚餐；創作中華居酒屋。\n【Tabelog】3.68（849 則評價；居酒屋 WEST 百名店 2026、2025）\n【攻略】以中華料理技法配清酒的人氣居酒屋，連續兩年入選居酒屋百名店。坐吧枱（10 位）點當日推介的中華小菜，請店員按菜式配清酒，價錢比北新地親民。\n【預約】網上預約優先，或打電話；假期晚上人多，建議 1 個月前預約 17:30 吧枱位。\n【實用】星期二及第 4 個星期三休，假期照常營業（2/11 星期四營業）。",
      "phone": "+81-50-5600-5707",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "15:00–24:00；星期二及第 4 個星期三休，假期營業",
      "price": "預算 ¥4,000–5,999（連清酒）",
      "website": "https://tabelog.com/osaka/A2701/A270103/27136227/",
      "cost": {
        "amount": 5500,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d5_14",
      "day": 5,
      "time": "19:40",
      "timeHint": "evening",
      "type": "transport",
      "title": "前往谷町四丁目（地鐵谷町線）",
      "cityId": "osaka",
      "address": "大阪地鐵天神橋筋六丁目站 1 號月台",
      "addressLocal": "Osaka Metro 天神橋筋六丁目駅 1番線（谷町線・八尾南方面）",
      "coords": [
        34.7106,
        135.5113
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】由黑兔食堂步行約 5 分鐘到天神橋筋六丁目站（估算）；1 號月台，谷町線往八尾南方向。\n【下車】谷町四丁目站 4 號出口步行約 4 分鐘回酒店。\n【車資】IC ¥240，ICOCA 拍卡。\n【備案】谷町線約 5–7 分鐘一班；的士回酒店約 15 分鐘（估算）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
      "price": "IC ¥240（ICOCA）",
      "website": null,
      "cost": {
        "amount": 240,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "subway",
        "from": "天神橋筋六丁目",
        "to": "谷町四丁目",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵 Osaka Metro",
        "line": "谷町線",
        "durationMin": 11,
        "stopCount": 5,
        "liveApi": null
      }
    },
    {
      "id": "evt_d5_15",
      "day": 5,
      "time": "20:00",
      "timeHint": "night",
      "type": "rest",
      "title": "浪華之湯",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區內本町2-1-9（Dormy Inn 大阪谷町）",
      "addressLocal": "〒540-0026 大阪府大阪市中央区内本町2-1-9 天然温泉 浪華の湯 ドーミーイン大阪谷町 13F 大浴場",
      "coords": [
        34.6835,
        135.5139
      ],
      "tags": [
        "天然溫泉",
        "桑拿"
      ],
      "moodColor": "#9AA8A3",
      "note": "【今次】今晚收工。\n【攻略】晚餐後回酒店泡湯收工，今晚不再外出：內湯（生駒山天然氡溫泉）＋露天壺湯＋高溫桑拿；之後到 13 樓湯上處休息。21:30 起有免費夜鳴蕎麥麵。\n【實用】浴場內嚴禁帶食物及酒精飲品，只可帶補充水分的飲品；有紋身不可入浴。",
      "phone": "+81-6-6945-5489",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "大浴場「浪華之湯」（13 樓，男女分開）15:00–翌日 10:00；桑拿 01:00–05:00 暫停",
      "price": "住客免費",
      "website": "https://dormy-hotels.com/dormyinn/hotels/osakatanimachi/spa/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d6_01",
      "day": 6,
      "time": "08:15",
      "timeHint": "morning",
      "type": "food",
      "title": "Dormy Inn 餐廳 HATAGO",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區內本町2-1-9（Dormy Inn 大阪谷町） 13 樓",
      "addressLocal": "〒540-0026 大阪府大阪市中央区内本町2-1-9 天然温泉 浪華の湯 ドーミーイン大阪谷町 13F レストラン HATAGO",
      "coords": [
        34.6835,
        135.5139
      ],
      "tags": [
        "酒店早餐"
      ],
      "moodColor": "#A0785A",
      "note": "【今次】早餐：Dormy Inn 自助早餐（13 樓）。\n【攻略】Dormy Inn 全線共通的和洋自助早餐，加上大阪「當地逸品」：水菜「哈哩哈哩烏冬」（はりはりうどん）和大阪燒；小鉢橫丁一口一碟，可以每樣少少試。\n【攻略】今日 09:50 巴士對號入座，在酒店吃最省時；午餐要吃鰻魚，早餐適量即可。09:10 出門。\n【實用】06:30–09:30（最後入場 09:00），只限住客；成人 ¥2,000（含稅）。如訂房時未含早餐，可在前台加購（加購方法待確認）。",
      "phone": "+81-6-6945-5489",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "06:30–09:30（最後入場 09:00）",
      "price": "成人 ¥2,000（含稅）",
      "website": "https://dormy-hotels.com/dormyinn/hotels/osakatanimachi/breakfast/",
      "cost": {
        "amount": 2000,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d6_02",
      "day": 6,
      "time": "09:18",
      "timeHint": "morning",
      "type": "transport",
      "title": "前往東梅田（地鐵谷町線）",
      "cityId": "osaka",
      "address": "大阪地鐵谷町四丁目站 2 號月台",
      "addressLocal": "Osaka Metro 谷町四丁目駅 2番線（谷町線・大日方面）／4番出口から入場",
      "coords": [
        34.6826,
        135.5176
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】由酒店步行約 4 分鐘到谷町四丁目站 4 號出口；2 號月台，谷町線往大日方向。\n【下車】東梅田站經地下街步行約 10 分鐘到阪急三番街巴士總站（估算）。\n【車資】IC ¥240，ICOCA 拍卡。\n【備案】09:10 後的谷町線約 5 分鐘一班；行李不多，可提早一班。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
      "price": "IC ¥240（ICOCA）",
      "website": null,
      "cost": {
        "amount": 240,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "subway",
        "from": "谷町四丁目",
        "to": "東梅田",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵 Osaka Metro",
        "line": "谷町線",
        "durationMin": 7,
        "stopCount": 3,
        "liveApi": null
      }
    },
    {
      "id": "trp_d6_03",
      "day": 6,
      "time": "09:50",
      "timeHint": "morning",
      "type": "transport",
      "title": "前往有馬溫泉（阪急高速巴士）",
      "cityId": "kobe",
      "address": "大阪梅田 阪急三番街高速巴士總站",
      "addressLocal": "大阪梅田（阪急三番街）高速バスターミナル",
      "coords": [
        34.7047,
        135.4991
      ],
      "tags": [
        "高速巴士",
        "要預約"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】大阪梅田 阪急三番街高速巴士總站（阪急大阪梅田站茶屋町閘口樓下）。1–4 號站沒有固定，巴士約開車前 10 分鐘入站，按電子顯示板找有馬溫泉班次。\n【車票】全車對號入座，要預先買指定班次（建議 09:50 特急班，車程約 55 分鐘）；今次只買單程，回程改乘鐵路經神戶元町。\n【預約／付款】乘車日前一個月同日 09:00 開賣（即 2027/1/12 09:00），可經発車オーライネット網上、電話或窗口購買；ICOCA 不能代替訂座車票（待確認）。\n【下車】有馬溫泉巴士站，步行到鰻 大山（步行時間待確認）。\n【備案】鐵路約 72 分鐘、轉 3 次。",
      "phone": "+81-570-089006",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "全車對號入座：按已買車票的班次上車（建議 09:50 特急班）",
      "price": "成人單程 ¥1,400",
      "website": null,
      "cost": {
        "amount": 1400,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "bus",
        "from": "大阪梅田（阪急三番街）",
        "to": "有馬溫泉",
        "fromEventId": null,
        "toEventId": null,
        "operator": "阪急觀光巴士",
        "line": "大阪梅田－有馬溫泉線（特急）",
        "durationMin": 55,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "id": "evt_d6_04",
      "day": 6,
      "time": "11:15",
      "timeHint": "morning",
      "type": "food",
      "title": "鰻 大山（鰻 おおやま）",
      "cityId": "kobe",
      "address": "日本兵庫縣神戶市北區有馬町1137",
      "addressLocal": "兵庫県神戸市北区有馬町1137 鰻 おおやま",
      "coords": [
        34.7968,
        135.2479
      ],
      "tags": [
        "鰻魚",
        "吧枱",
        "可預約"
      ],
      "moodColor": "#A0785A",
      "note": "【今次】午餐；有馬溫泉。\n【Tabelog】3.53（34 則評價）\n【攻略】2023 年開業的鰻魚專門店，點餐後才開鰻現烤，口碑讚皮脆肉厚。大將一人主理，按組逐一烤製，預留約 75 分鐘。與 D4 柴藤的大阪蒸焗式鰻魚飯做法不同，可比較。\n【預約】可電話預約（受理 11:00–18:30）訂 11:15，同時確認 2/12 營業（不定休）。賣完即止。\n【備案】如休息，改在溫泉街小吃；有馬多數名店星期二、三休，選擇有限。",
      "phone": "+81-78-958-5375",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "11:00–18:00（賣完即止）；不定休",
      "price": "午市預算 ¥5,000–5,999",
      "website": "https://tabelog.com/hyogo/A2801/A280112/28066508/",
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
      "id": "evt_d6_05",
      "day": 6,
      "time": "12:40",
      "timeHint": "afternoon",
      "type": "rest",
      "title": "金之湯（金の湯）",
      "cityId": "kobe",
      "address": "日本兵庫縣神戶市北區有馬町833",
      "addressLocal": "兵庫県神戸市北区有馬町833 有馬温泉 金の湯",
      "coords": [
        34.7968,
        135.2479
      ],
      "tags": [
        "溫泉",
        "金泉"
      ],
      "moodColor": "#9AA8A3",
      "note": "【今次】有馬溫泉。\n【攻略】有馬名物「金泉」：含鐵質和鹽分的茶褐色溫泉，保溫力強。泡 10–15 分鐘就起來休息，不要一次泡太久。門外有免費足湯。2026 年 3 月翻新後已重開。\n【實用】毛巾可在館內購買；今次只泡金之湯（平日 ¥650），13:30 起來，留時間逛溫泉街；想加泡銀之湯可改買兩館共通券 ¥1,200。第 2、4 個星期二休（2/12 星期五照開）。",
      "phone": "+81-78-904-0680",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "08:00–22:00（最後入場 21:30）；第 2、4 個星期二休",
      "price": "成人平日 ¥650；金銀共通券 ¥1,200",
      "website": "https://arimaspa-kingin.jp/",
      "cost": {
        "amount": 650,
        "currency": "JPY",
        "category": "ticket"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d6_06",
      "day": 6,
      "time": "13:35",
      "timeHint": "afternoon",
      "type": "shop",
      "title": "灰吹屋 西田筆店",
      "cityId": "kobe",
      "address": "日本兵庫縣神戶市北區有馬町1160",
      "addressLocal": "兵庫県神戸市北区有馬町1160 灰吹屋 西田筆店",
      "coords": [
        34.7963,
        135.2488
      ],
      "tags": [
        "傳統工藝",
        "手信",
        "有馬"
      ],
      "moodColor": "#8C8378",
      "note": "【今次】有馬人形筆。\n【攻略】有馬唯一仍然手工製作「有馬人形筆」的老店：筆桿以彩色絲線手捲編出花紋，提筆寫字時筆尾會冒出一個小人偶頭。既可寫字作畫，也可當擺設，是溫泉街上最有本地味道的手作。可請店主示範機關，挑一支自用；人形筆 1 支（紙盒）¥3,300，2 支裝 ¥4,900，大號 2 支（木盒）¥9,000。\n【實用】2/12 星期五營業（逢星期三、四休）；14:00 前結帳，步行到神戶電鐵有馬溫泉站（估算約 5 分鐘）。",
      "phone": "+81-78-904-0761",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "10:00–16:00；逢星期三、四休",
      "price": "人形筆 1 支（紙盒）¥3,300；2 支裝 ¥4,900；大號 2 支（木盒）¥9,000",
      "website": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d6_07",
      "day": 6,
      "time": "14:09",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "前往元町（神戶電鐵→北神線→JR）",
      "cityId": "kobe",
      "address": "神戶電鐵有馬溫泉站",
      "addressLocal": "有馬温泉駅（神鉄有馬線） 1・2番線",
      "coords": [
        34.7993,
        135.2465
      ],
      "tags": [
        "鐵路"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】有馬溫泉站 1／2 號月台（始發），神鐵有馬線往有馬口。\n【轉車】有馬口轉 3 號月台（往新開地）→ 谷上轉神戶市營地下鐵北神線 5 號月台（始發，往西神中央）→ 三宮下車，步行約 2 分鐘到 JR 三之宮站 3 號月台（往須磨方向），坐 1 個站到元町。共轉 3 次。\n【下車】JR 元町站往南步行約 10 分鐘到海岸通（估算；出口待確認）。\n【車資】IC ¥870（神鐵／地下鐵 ¥720＋JR ¥150），ICOCA 拍卡。\n【備案】三宮站直接步行到海岸通約 20 分鐘（估算），或乘的士。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
      "price": "IC ¥870（ICOCA）",
      "website": null,
      "cost": {
        "amount": 870,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "train",
        "from": "有馬溫泉",
        "to": "元町",
        "fromEventId": null,
        "toEventId": null,
        "operator": "神戶電鐵／神戶市營地下鐵／JR 西日本",
        "line": "神鐵有馬線 → 北神線 → JR 神戶線",
        "durationMin": 38,
        "stopCount": 9,
        "liveApi": null
      }
    },
    {
      "id": "evt_d6_08",
      "day": 6,
      "time": "15:00",
      "timeHint": "afternoon",
      "type": "shop",
      "title": "創作鞄 槌井（創作鞄槌井）",
      "cityId": "kobe",
      "address": "日本兵庫縣神戶市中央區海岸通4-3-20 甲南大廈 103",
      "addressLocal": "兵庫県神戸市中央区海岸通4-3-20 甲南ビル103 創作鞄槌井",
      "coords": [
        34.6855,
        135.1844
      ],
      "tags": [
        "皮具",
        "工房",
        "手工"
      ],
      "moodColor": "#8C8378",
      "note": "【今次】神戶皮革店（看貨買貨）。\n【攻略】皮革職人槌井仁基 2012 年開設的工房兼店舖，店後就是工作枱，袋、銀包和小皮件全部手工製作，也接受全訂製。沒有名牌標籤，看的是皮革和車縫。可以請職人介紹皮革種類和用久後的變化，摸一摸不同的植鞣皮。參考價（稅前）：三摺銀包 ¥6,500、經典二摺銀包 ¥22,500、長銀包 ¥28,000；訂製要數星期，可留下聯絡方法日後寄港。\n【實用】只在星期四至日營業（2/12 星期五照開）；隔鄰就是 Wicked。",
      "phone": "+81-78-381-5545",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "11:00–18:00；逢星期一、二、三休",
      "price": "三摺銀包 ¥6,500；二摺銀包 ¥22,500；長銀包 ¥28,000（稅前）",
      "website": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d6_09",
      "day": 6,
      "time": "15:45",
      "timeHint": "afternoon",
      "type": "shop",
      "title": "Wicked（ウィキッド）",
      "cityId": "kobe",
      "address": "日本兵庫縣神戶市中央區海岸通4-3-17 清和大廈 1 樓 11 號",
      "addressLocal": "兵庫県神戸市中央区海岸通4-3-17 清和ビル1F 11号 Wicked",
      "coords": [
        34.6853,
        135.1841
      ],
      "tags": [
        "古皮具",
        "歐洲 vintage"
      ],
      "moodColor": "#8C8378",
      "note": "【今次】歐洲古著與古皮具店。\n【攻略】元町海岸通的古著店，主打 1940–90 年代歐洲 vintage：舊皮鞋、皮革製品、歐洲工作服和軍品。多是沒有品牌的舊貨，正好用來尋找有歲月痕跡的皮件。看中皮件時，先檢查邊油、縫線和五金，再問價。\n【實用】14:00 開門，逢星期四休（2/12 星期五照開）；以男裝為主，皮件數量要看當日貨源。按貨品標價。",
      "phone": "+81-78-351-6760",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "14:00–20:00；逢星期四休",
      "price": "按貨品標價",
      "website": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d6_10",
      "day": 6,
      "time": "16:20",
      "timeHint": "afternoon",
      "type": "shop",
      "title": "雜駁商會（雑駁商会）",
      "cityId": "kobe",
      "address": "日本兵庫縣神戶市中央區元町通2-8-6 村田大廈 2 樓",
      "addressLocal": "兵庫県神戸市中央区元町通2-8-6 村田ビル2F 雑駁商会",
      "coords": [
        34.6889,
        135.1874
      ],
      "tags": [
        "古道具",
        "古皮具",
        "雜貨"
      ],
      "moodColor": "#8C8378",
      "note": "【今次】古道具雜貨店。\n【攻略】元町商店街樓上的古道具店，名字取「雜駁」之意：不分國家、年代或品牌，舊衣、古道具、傢具和各種雜物都有。慢慢翻，或許會遇到沒有牌子、但皮質很好的舊銀包、皮袋或皮帶。小件古物價錢一般親民，帶現金較方便。\n【實用】13:00 開，逢星期三、四休（2/12 星期五照開）；16:55 離開，步行約 5 分鐘到 JR 元町站（估算）。按貨品標價。",
      "phone": "+81-90-8483-9977",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "13:00–19:00；逢星期三、四休",
      "price": "按貨品標價",
      "website": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d6_11",
      "day": 6,
      "time": "17:07",
      "timeHint": "evening",
      "type": "transport",
      "title": "前往北新地（JR 神戶線快速→JR 東西線）",
      "cityId": "kobe",
      "address": "JR 元町站",
      "addressLocal": "元町駅（JR神戸線） 3・4番線",
      "coords": [
        34.6894,
        135.1872
      ],
      "tags": [
        "JR"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】JR 元町站 3／4 號月台，JR 神戶線快速往米原方向。\n【轉車】尼崎站轉 6 號月台 JR 東西線快速（往木津方向）到北新地。\n【下車】北新地站步行約 5 分鐘到雅釀（估算；出口號碼待確認）。\n【車資】IC ¥420，ICOCA 拍卡。\n【備案】JR 神戶線新快速直達大阪站，再步行約 12 分鐘（估算）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
      "price": "IC ¥420（ICOCA）",
      "website": null,
      "cost": {
        "amount": 420,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "train",
        "from": "元町",
        "to": "北新地",
        "fromEventId": null,
        "toEventId": null,
        "operator": "JR 西日本",
        "line": "JR 神戶線快速 → JR 東西線快速",
        "durationMin": 36,
        "stopCount": 11,
        "liveApi": null
      }
    },
    {
      "id": "evt_d6_12",
      "day": 6,
      "time": "18:00",
      "timeHint": "evening",
      "type": "food",
      "title": "雅釀 GAJO（雅醸）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區曾根崎新地1-7-6 新日本新地大廈東館 1 樓",
      "addressLocal": "大阪府大阪市北区曾根崎新地1-7-6 新日本新地ビル東館1F 雅醸（GAJO）",
      "coords": [
        34.6969,
        135.5003
      ],
      "tags": [
        "日本酒配對",
        "吧枱",
        "要預約"
      ],
      "moodColor": "#A0785A",
      "note": "【今次】晚餐；日本酒配對套餐。\n【Tabelog】3.72（78 則評價）\n【攻略】今次行程的日本酒配對大餐：只有 8 個吧枱位，18:00 一起開始的 10 品套餐。店方不靠調味料，以冰溫熟成、發酵及精準火候帶出食材原味。建議選「通常日本酒配對（ペアリング）」¥29,000；想試稀有酒可升級「Premium 配對」¥40,000。\n【預約】完全預約制，網上或打電話；1–8 名可訂。取消費：72 小時前 50%、48 小時前 70%、24 小時前 100%。服裝 smart casual：今日由早上出門就穿 smart casual，不用回酒店更衣。",
      "phone": "+81-50-3145-9210",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "星期一至五 12:00–14:15、18:00–20:15（一起開始）、21:00–02:00；六不定休；日及假期休",
      "price": "日本酒配對套餐 ¥29,000（稅及服務費全包）；只要料理 ¥23,500",
      "website": "https://tabelog.com/osaka/A2701/A270101/27126021/",
      "cost": {
        "amount": 29000,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d6_13",
      "day": 6,
      "time": "20:15",
      "timeHint": "evening",
      "type": "transport",
      "title": "前往谷町四丁目（步行＋地鐵谷町線）",
      "cityId": "osaka",
      "address": "北新地 雅釀門口 → 大阪地鐵東梅田站 1 號月台",
      "addressLocal": "Osaka Metro 東梅田駅 1番線（谷町線・八尾南方面）（北新地から徒歩約8分）",
      "coords": [
        34.6994,
        135.4977
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】由雅釀步行約 8 分鐘到東梅田站（估算）；1 號月台，谷町線往八尾南方向。\n【下車】谷町四丁目站 4 號出口步行約 4 分鐘回酒店。\n【車資】IC ¥240，ICOCA 拍卡。\n【備案】北新地截的士回酒店約 15 分鐘（估算）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
      "price": "IC ¥240（ICOCA）",
      "website": null,
      "cost": {
        "amount": 240,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "subway",
        "from": "北新地（步行到東梅田）",
        "to": "谷町四丁目",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵 Osaka Metro",
        "line": "谷町線",
        "durationMin": 17,
        "stopCount": 3,
        "liveApi": null
      }
    },
    {
      "id": "evt_d6_14",
      "day": 6,
      "time": "20:45",
      "timeHint": "evening",
      "type": "rest",
      "title": "浪華之湯",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區內本町2-1-9（Dormy Inn 大阪谷町）",
      "addressLocal": "〒540-0026 大阪府大阪市中央区内本町2-1-9 天然温泉 浪華の湯 ドーミーイン大阪谷町 13F 大浴場",
      "coords": [
        34.6835,
        135.5139
      ],
      "tags": [
        "天然溫泉",
        "桑拿"
      ],
      "moodColor": "#9AA8A3",
      "note": "【攻略】今日已在有馬泡過金之湯，晚上只需簡單沖身或泡一會；喝過配對清酒，休息 30 分鐘再泡。\n【實用】浴場內嚴禁帶食物及酒精飲品，只可帶補充水分的飲品；有紋身不可入浴。",
      "phone": "+81-6-6945-5489",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "大浴場「浪華之湯」（13 樓，男女分開）15:00–翌日 10:00；桑拿 01:00–05:00 暫停",
      "price": "住客免費",
      "website": "https://dormy-hotels.com/dormyinn/hotels/osakatanimachi/spa/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d7_01",
      "day": 7,
      "time": "08:30",
      "timeHint": "morning",
      "type": "food",
      "title": "Dormy Inn 餐廳 HATAGO",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區內本町2-1-9（Dormy Inn 大阪谷町） 13 樓",
      "addressLocal": "〒540-0026 大阪府大阪市中央区内本町2-1-9 天然温泉 浪華の湯 ドーミーイン大阪谷町 13F レストラン HATAGO",
      "coords": [
        34.6835,
        135.5139
      ],
      "tags": [
        "酒店早餐"
      ],
      "moodColor": "#A0785A",
      "note": "【今次】早餐：Dormy Inn 自助早餐（13 樓）。\n【攻略】Dormy Inn 全線共通的和洋自助早餐，加上大阪「當地逸品」：水菜「哈哩哈哩烏冬」（はりはりうどん）和大阪燒；小鉢橫丁一口一碟，可以每樣少少試。\n【攻略】今日要試飲多間酒藏，早餐吃飽一點墊胃（雞蛋料理、白飯、味噌湯）。09:30 出門。\n【實用】06:30–09:30（最後入場 09:00），只限住客；成人 ¥2,000（含稅）。如訂房時未含早餐，可在前台加購（加購方法待確認）。",
      "phone": "+81-6-6945-5489",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "06:30–09:30（最後入場 09:00）",
      "price": "成人 ¥2,000（含稅）",
      "website": "https://dormy-hotels.com/dormyinn/hotels/osakatanimachi/breakfast/",
      "cost": {
        "amount": 2000,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d7_02",
      "day": 7,
      "time": "09:38",
      "timeHint": "morning",
      "type": "transport",
      "title": "前往魚崎（谷町線→阪神本線特急）",
      "cityId": "osaka",
      "address": "大阪地鐵谷町四丁目站 2 號月台",
      "addressLocal": "Osaka Metro 谷町四丁目駅 2番線（谷町線・大日方面）／4番出口から入場",
      "coords": [
        34.6826,
        135.5176
      ],
      "tags": [
        "地鐵",
        "阪神"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】由酒店步行約 4 分鐘到谷町四丁目站 4 號出口；2 號月台，谷町線往大日方向，建議坐前／中段車廂，東梅田轉阪神較近。\n【轉車】東梅田站下車，站內步行約 6 分鐘到阪神大阪梅田站 2 號月台（始發），乘阪神本線特急往須磨浦公園方向到魚崎。\n【下車】魚崎站步行到菊正宗藏開會場（按當日指示）。\n【車資】IC ¥540（地鐵 ¥240＋阪神 ¥300），ICOCA 拍卡。\n【備案】阪神特急約 10 分鐘一班；錯過就搭下一班。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
      "price": "IC ¥540（ICOCA）",
      "website": null,
      "cost": {
        "amount": 540,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "train",
        "from": "谷町四丁目",
        "to": "魚崎",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵／阪神電鐵",
        "line": "谷町線 → 阪神本線特急",
        "durationMin": 44,
        "stopCount": 8,
        "liveApi": null
      }
    },
    {
      "id": "evt_d7_03",
      "day": 7,
      "time": "10:35",
      "timeHint": "morning",
      "type": "sight",
      "title": "菊正宗酒造記念館",
      "cityId": "kobe",
      "address": "日本兵庫縣神戶市東灘區魚崎西町1-9-1",
      "addressLocal": "兵庫県神戸市東灘区魚崎西町1-9-1 菊正宗酒造記念館",
      "coords": [
        34.7086,
        135.2679
      ],
      "tags": [
        "清酒",
        "藏開",
        "試飲"
      ],
      "moodColor": "#6B7F7A",
      "note": "【今次】菊正宗 藏開（或酒造記念館）。\n【攻略】菊正宗以「生酛」辛口出名。藏開日（往年 2 月星期六 10:00–15:00，免費入場）有生酛搾立新酒免費試飲、付費試飲、酒藏參觀和酒粕湯；平日記念館也有季節生原酒試飲、酒藏雪糕。記念館限定「奉献」「菊絵徳利」適合作手信。\n【注意】2027 年藏開日期未定（很可能是 2/6 或 2/13），12 月至 1 月再確認；記念館逢星期二休。",
      "phone": "+81-78-854-1029",
      "whatsapp": null,
      "line": null,
      "messenger": "https://m.me/kikumasamune.jp",
      "openHours": "記念館 09:30–16:30（入館至 16:00）；藏開往年 10:00–15:00",
      "price": "免費入場；部分試飲收費",
      "website": "https://www.kikumasamune.co.jp/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d7_04",
      "day": 7,
      "time": "12:05",
      "timeHint": "afternoon",
      "type": "sight",
      "title": "浜福鶴 吟釀工房",
      "cityId": "kobe",
      "address": "日本兵庫縣神戶市東灘區魚崎南町4-4-6",
      "addressLocal": "兵庫県神戸市東灘区魚崎南町4-4-6 浜福鶴吟醸工房",
      "coords": [
        34.7094,
        135.273
      ],
      "tags": [
        "清酒",
        "酒藏",
        "試飲"
      ],
      "moodColor": "#6B7F7A",
      "note": "【今次】小山本家酒造，隔著玻璃看釀酒。\n【攻略】灘五鄉中少數可以看到真實釀酒現場的酒藏：隔著玻璃看蒸米、製麴、醪發酵和榨酒，2 月釀造季最有看頭。入口處可免費試飲生酒；付費試飲處可比較吟釀、大吟釀。可買工房限定、按量販售的秘藏酒帶回香港。\n【實用】免費入場，10 人以下不用預約；由菊正宗步行約 7 分鐘（估算）。12:40 離開，步行約 8 分鐘到阪神魚崎站（估算）。逢星期一休（2/13 星期六照開）。",
      "phone": "+81-78-411-8339",
      "whatsapp": null,
      "line": "https://lin.ee/YbByNGl",
      "messenger": "https://m.me/hamafukutsuru",
      "openHours": "10:00–17:00（免費試飲至 16:50；付費試飲 L.O. 16:15）；逢星期一休（假期照開）",
      "price": "免費入場；生酒免費試飲；付費試飲按酒款收費",
      "website": "https://www.hamafukutsuru.co.jp/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d7_05",
      "day": 7,
      "time": "12:53",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "前往石屋川（阪神本線）",
      "cityId": "kobe",
      "address": "阪神魚崎站",
      "addressLocal": "魚崎駅（阪神本線） 2番線",
      "coords": [
        34.7138,
        135.2686
      ],
      "tags": [
        "阪神"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】魚崎站 2 號月台，阪神特急往須磨浦公園方向。\n【轉車】御影站轉 4 號月台普通車（往高速神戶方向），坐 1 個站到石屋川。\n【下車】石屋川站步行約 6 分鐘到酒林（估算）。\n【車資】IC ¥160，ICOCA 拍卡。\n【備案】由浜福鶴步行約 30 分鐘到酒林，或乘的士約 10 分鐘（估算）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
      "price": "IC ¥160（ICOCA）",
      "website": null,
      "cost": {
        "amount": 160,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "train",
        "from": "魚崎",
        "to": "石屋川",
        "fromEventId": null,
        "toEventId": null,
        "operator": "阪神電鐵",
        "line": "阪神本線特急 → 阪神本線普通",
        "durationMin": 4,
        "stopCount": 2,
        "liveApi": null
      }
    },
    {
      "id": "evt_d7_06",
      "day": 7,
      "time": "13:15",
      "timeHint": "afternoon",
      "type": "food",
      "title": "酒林（さかばやし）",
      "cityId": "kobe",
      "address": "日本兵庫縣神戶市東灘區御影塚町1-8-17 神戶酒心館內",
      "addressLocal": "兵庫県神戸市東灘区御影塚町1-8-17 神戸酒心館 蔵の料亭 さかばやし",
      "coords": [
        34.71,
        135.2486
      ],
      "tags": [
        "酒藏料亭",
        "豆腐",
        "可預約"
      ],
      "moodColor": "#A0785A",
      "note": "【今次】午餐；神戶酒心館酒藏料亭。\n【Tabelog】3.48（約 300 則評價）\n【攻略】「福壽」酒藏附設的料亭，主打自家製豆腐和蕎麥麵，配藏元生原酒。推介「御影膳（みかげ膳）」¥3,500；必試自家製手舀豆腐（すくい豆腐，¥680）和酒粕雪糕（¥500）。\n【預約】電話預約 13:15（可預約一年內）；逢星期三休。由阪神石屋川站步行約 6 分鐘（估算）。",
      "phone": "+81-78-841-2612",
      "whatsapp": null,
      "line": null,
      "messenger": "https://m.me/shushinkan.fukuju",
      "openHours": "午市 11:30–15:00（L.O. 14:30）；星期三休",
      "price": "御影膳 ¥3,500",
      "website": "https://tabelog.com/hyogo/A2801/A280106/28000407/",
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
      "id": "evt_d7_07",
      "day": 7,
      "time": "14:45",
      "timeHint": "afternoon",
      "type": "shop",
      "title": "神戶酒心館 東明藏",
      "cityId": "kobe",
      "address": "日本兵庫縣神戶市東灘區御影塚町1-8-17",
      "addressLocal": "兵庫県神戸市東灘区御影塚町1-8-17 神戸酒心館 蔵元ショップ 東明蔵",
      "coords": [
        34.71,
        135.2486
      ],
      "tags": [
        "清酒",
        "試飲"
      ],
      "moodColor": "#8C8378",
      "note": "【今次】福壽 FUKUJU。\n【攻略】福壽的藏元商店，有免費試飲和季節推介酒；必試藏直採生酒（純米、大吟釀生原酒）和微發泡「FUKUJU KEG DRAFT」。藏元限定酒和酒粕適合帶回香港。晚上還有居酒屋，試飲適可而止。\n【實用】16:20 前出發，沿河向南步行約 8 分鐘到阪神石屋川站。",
      "phone": "+81-78-841-1121",
      "whatsapp": null,
      "line": null,
      "messenger": "https://m.me/shushinkan.fukuju",
      "openHours": "10:00–18:30（1/1–1/3 休）",
      "price": "免費試飲",
      "website": "https://www.shushinkan.co.jp/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d7_08",
      "day": 7,
      "time": "16:33",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "前往芦屋（阪神本線）",
      "cityId": "kobe",
      "address": "阪神石屋川站",
      "addressLocal": "阪神 石屋川駅 1番線",
      "coords": [
        34.7135,
        135.2501
      ],
      "tags": [
        "阪神"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】石屋川站 1 號月台，普通車往大阪梅田方向。\n【轉車】御影站轉 1 號月台直通特急（往大阪梅田方向）到芦屋。\n【下車】阪神芦屋站就在芦屋川上，出站即可沿河散步。\n【車資】IC ¥200，ICOCA 拍卡。\n【備案】乘普通車直達芦屋（時間較長，班次待確認）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
      "price": "IC ¥200（ICOCA）",
      "website": null,
      "cost": {
        "amount": 200,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "train",
        "from": "石屋川",
        "to": "芦屋（阪神）",
        "fromEventId": null,
        "toEventId": null,
        "operator": "阪神電氣鐵道",
        "line": "阪神本線普通 → 阪神本線直通特急",
        "durationMin": 8,
        "stopCount": 3,
        "liveApi": null
      }
    },
    {
      "id": "evt_d7_09",
      "day": 7,
      "time": "16:45",
      "timeHint": "afternoon",
      "type": "sight",
      "title": "芦屋川",
      "cityId": "kobe",
      "address": "日本兵庫縣芦屋市 阪神芦屋站一帶 芦屋川",
      "addressLocal": "兵庫県芦屋市 阪神芦屋駅周辺 芦屋川",
      "coords": [
        34.7279,
        135.3038
      ],
      "tags": [
        "散步",
        "河畔"
      ],
      "moodColor": "#6B7F7A",
      "note": "【今次】河畔散步。\n【攻略】芦屋川是關西有名的高級住宅區河道，兩岸松林步道清靜，適合試酒後醒一醒酒。沿河堤向北慢行，再折返茶屋之町；2 月日落約 17:40，看完黃昏就去 JR 芦屋站。\n【實用】免費；河邊風大，帶圍巾。17:35 沿河向北步行約 10 分鐘到 JR 芦屋站（估算），乘 17:45 新快速。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "全日開放",
      "price": "免費",
      "website": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d7_10",
      "day": 7,
      "time": "17:45",
      "timeHint": "evening",
      "type": "transport",
      "title": "前往天滿橋（JR 神戶線新快速→谷町線）",
      "cityId": "osaka",
      "address": "JR 芦屋站 1 號月台",
      "addressLocal": "JR 芦屋駅 1番線（JR神戸線 新快速・長浜行き）",
      "coords": [
        34.7339,
        135.3069
      ],
      "tags": [
        "JR",
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】芦屋川散步後向北步行約 10 分鐘到 JR 芦屋站（估算）；1 號月台，JR 神戶線新快速往長濱方向。\n【轉車】JR 大阪站下車，步行約 6 分鐘到東梅田站 1 號月台，谷町線往八尾南方向坐 2 個站到天滿橋。\n【下車】天滿橋站直通京阪 City Mall，到地庫 2 樓 Frest 超市內的魚喜。\n【車資】IC ¥510（JR ¥320＋地鐵 ¥190），ICOCA 拍卡。\n【備案】阪神芦屋站直通特急到大阪梅田（約 20 分鐘，IC ¥300），再轉谷町線。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
      "price": "IC ¥510（ICOCA）",
      "website": null,
      "cost": {
        "amount": 510,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "train",
        "from": "JR 芦屋",
        "to": "天滿橋",
        "fromEventId": null,
        "toEventId": null,
        "operator": "JR 西日本／大阪地鐵",
        "line": "JR 神戶線新快速 → 谷町線",
        "durationMin": 31,
        "stopCount": 4,
        "liveApi": null
      }
    },
    {
      "id": "evt_d7_11",
      "day": 7,
      "time": "18:20",
      "timeHint": "evening",
      "type": "shop",
      "title": "魚喜 天滿橋",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區天滿橋京町1-1 京阪 City Mall 地庫 2 樓 Frest 天滿橋店內",
      "addressLocal": "大阪府大阪市中央区天満橋京町1-1 京阪シティモール B2F フレスト天満橋店内 魚喜",
      "coords": [
        34.6904,
        135.5171
      ],
      "tags": [
        "刺身",
        "壽司",
        "超市"
      ],
      "moodColor": "#8C8378",
      "note": "【今次】京阪 City Mall 地庫 2 樓，鮮魚壽司專門：宵夜採購。\n【攻略】魚喜是大阪老牌鮮魚專門店，在天滿橋 Frest 超市內設刺身及壽司專櫃，選擇比樓下 KOHYO 多；買一盒刺身（鯛、鰤、吞拿魚等當季魚）或握壽司，配今日在灘五鄉買的酒。\n【實用】星期六營業至 21:00（平日至 22:00）。減價時間不定，傍晚後較大機會有減價貼紙（待確認）。刺身要保冷劑。\n【下車後】由天滿橋步行約 12 分鐘回酒店（估算），或谷町線坐 1 個站到谷町四丁目。",
      "phone": "+81-6-6966-6385",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "10:00–22:00（六、日、假期至 21:00）",
      "price": "刺身或壽司約 ¥1,500–2,500（估算）",
      "website": "https://www.uoki.co.jp/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d7_12",
      "day": 7,
      "time": "19:00",
      "timeHint": "evening",
      "type": "rest",
      "title": "浪華之湯",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區內本町2-1-9（Dormy Inn 大阪谷町）",
      "addressLocal": "〒540-0026 大阪府大阪市中央区内本町2-1-9 天然温泉 浪華の湯 ドーミーイン大阪谷町 13F 大浴場",
      "coords": [
        34.6835,
        135.5139
      ],
      "tags": [
        "天然溫泉",
        "桑拿"
      ],
      "moodColor": "#9AA8A3",
      "note": "【攻略】今日試飲多，先休息、多喝水才泡；刺身先放房間雪櫃。泡完再吃宵夜。\n【實用】浴場內嚴禁帶食物及酒精飲品，只可帶補充水分的飲品；有紋身不可入浴。",
      "phone": "+81-6-6945-5489",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "大浴場「浪華之湯」（13 樓，男女分開）15:00–翌日 10:00；桑拿 01:00–05:00 暫停",
      "price": "住客免費",
      "website": "https://dormy-hotels.com/dormyinn/hotels/osakatanimachi/spa/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d7_13",
      "day": 7,
      "time": "20:00",
      "timeHint": "evening",
      "type": "food",
      "title": "Dormy Inn 大阪谷町 房間",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區內本町2-1-9（Dormy Inn 大阪谷町） 客房",
      "addressLocal": "〒540-0026 大阪府大阪市中央区内本町2-1-9 天然温泉 浪華の湯 ドーミーイン大阪谷町",
      "coords": [
        34.6835,
        135.5139
      ],
      "tags": [
        "超市宵夜",
        "刺身",
        "清酒"
      ],
      "moodColor": "#A0785A",
      "note": "【今次】超市宵夜：魚喜刺身＋今日灘五鄉買的酒。\n【攻略】中午已在酒林吃了正式的酒藏料理，晚餐改為輕鬆宵夜：魚喜刺身配今日買的浜福鶴工房限定酒、菊正宗藏開新酒或福壽，一邊比較一邊吃，像在福岡的晚上。想加一枝當地酒，可到谷町四丁目的 Stand Utsutsuyo（スタンド うつつよ）買自家釀濁酒（星期六 16:00–22:30，可外賣瓶裝），或在樓下 KOHYO 補小菜。\n【改動】原本的芦屋「食堂 Kifune」移到靈感池（INS），想吃正式晚餐可改回 18:00 訂位。\n【實用】休息室可否自帶酒水未確認；大浴場禁止酒精，建議在房間吃。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "—",
      "price": "刺身＋小菜約 ¥2,500（估算；酒已在酒藏買）",
      "website": null,
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
      "id": "evt_d8_01",
      "day": 8,
      "time": "08:00",
      "timeHint": "morning",
      "type": "food",
      "title": "Boulangerie & cafe gout（ブーランジュリー&カフェ グウ）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區內本町1-1-10 Rinsan 大廈 1 樓",
      "addressLocal": "大阪府大阪市中央区内本町1-1-10 リンサンビル 1F ブーランジュリー&カフェ グウ",
      "coords": [
        34.6835,
        135.516
      ],
      "tags": [
        "麵包百名店",
        "PayPay"
      ],
      "moodColor": "#A0785A",
      "note": "【今次】早餐；麵包店。\n【Tabelog】3.72（1,082 則評價；パン WEST 百名店 2026）\n【攻略】星期日 07:30 照開，早餐套餐（每日麵包 3 款＋沙律＋小菜＋飲品）¥600 起；選第一天沒吃過的麵包。\n【實用】不收信用卡，可用 PayPay 或現金。08:55 出發去谷町四丁目站。",
      "phone": "+81-6-6585-0833",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "07:30–20:00（三、四休）",
      "price": "早餐套餐 ¥600 起",
      "website": "https://tabelog.com/osaka/A2701/A270104/27075014/",
      "cost": {
        "amount": 700,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d8_02",
      "day": 8,
      "time": "09:04",
      "timeHint": "morning",
      "type": "transport",
      "title": "前往四天王寺前夕陽丘（地鐵谷町線）",
      "cityId": "osaka",
      "address": "大阪地鐵谷町四丁目站 1 號月台",
      "addressLocal": "Osaka Metro 谷町四丁目駅 1番線（谷町線・八尾南方面）／4番出口から入場",
      "coords": [
        34.6826,
        135.5176
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】由 gout 步行約 3 分鐘到谷町四丁目站 4 號出口（估算）；1 號月台，谷町線往八尾南方向。\n【下車】四天王寺前夕陽丘站 4 號出口步行約 5 分鐘到四天王寺（估算）。\n【車資】IC ¥190，ICOCA 拍卡。\n【備案】谷町線約 5–7 分鐘一班。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
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
        "from": "谷町四丁目",
        "to": "四天王寺前夕陽丘",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵 Osaka Metro",
        "line": "谷町線",
        "durationMin": 5,
        "stopCount": 3,
        "liveApi": null
      }
    },
    {
      "id": "evt_d8_03",
      "day": 8,
      "time": "09:20",
      "timeHint": "morning",
      "type": "shop",
      "title": "四天王寺",
      "cityId": "osaka",
      "address": "日本大阪府大阪市天王寺區四天王寺1-11-18 四天王寺境內",
      "addressLocal": "大阪府大阪市天王寺区四天王寺1-11-18 四天王寺 境内",
      "coords": [
        34.6547,
        135.5168
      ],
      "tags": [
        "市集",
        "古董",
        "現金"
      ],
      "moodColor": "#8C8378",
      "note": "【今次】四天會古董市（四天会蚤の市）。\n【保留早開始】四天會古董市 07:00 開，好貨早上被買走；早內 午市只有 11:30 一場可預約。\n【攻略】每月第 2 個星期日在四天王寺境內舉行，約 100 檔古董和古道具，是今次行程找古皮具、古首飾的最好機會。先快速逛一圈記下心儀攤檔，午飯後再回來逛第二圈議價。\n【實用】入場免費；很多攤檔只收現金，帶足夠現金和小環保袋；雨天照開。",
      "phone": "+81-6-6771-0066",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "每月第 2 個星期日 07:00–16:00（雨天照開）",
      "price": "免費入場（多數攤檔只收現金）",
      "website": "https://www.shitennoji.or.jp/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d8_04",
      "day": 8,
      "time": "11:30",
      "timeHint": "morning",
      "type": "food",
      "title": "早內（はやうち）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市天王寺區四天王寺1-12-16",
      "addressLocal": "大阪府大阪市天王寺区四天王寺1-12-16 四天王寺 はやうち",
      "coords": [
        34.6556,
        135.5139
      ],
      "tags": [
        "蕎麥",
        "百名店",
        "可預約"
      ],
      "moodColor": "#A0785A",
      "note": "【今次】午餐；四天王寺蕎麥麵。\n【Tabelog】3.68（497 則評價；蕎麥 WEST 百名店 2025、2024）\n【攻略】蕎麥百名店（2024、2025），店主出身名店「土山人」。午市只有 11:30 一起開始的「午市蕎麥膳（お昼の蕎麦膳）」（¥5,200）接受預約；單點人氣是柚子香鴨汁蒸籠（¥1,800）。\n【預約】電話預約 11:30 蕎麥膳；不預約要排隊。逢星期三休。",
      "phone": "+81-6-6773-2858",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "星期一二四五 11:30–15:00（L.O.）；六日 11:30–15:00、17:00–20:30（L.O.）；星期三休",
      "price": "午市蕎麥膳 ¥5,200",
      "website": "https://tabelog.com/osaka/A2701/A270203/27049805/",
      "cost": {
        "amount": 5200,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d8_05",
      "day": 8,
      "time": "12:45",
      "timeHint": "afternoon",
      "type": "shop",
      "title": "四天王寺 第二圈",
      "cityId": "osaka",
      "address": "日本大阪府大阪市天王寺區四天王寺1-11-18 四天王寺境內",
      "addressLocal": "大阪府大阪市天王寺区四天王寺1-11-18 四天王寺 境内",
      "coords": [
        34.6547,
        135.5168
      ],
      "tags": [
        "市集",
        "古董"
      ],
      "moodColor": "#8C8378",
      "note": "【今次】四天會古董市 第二圈。\n【攻略】回到早上記下的心儀攤檔，下午檔主較願意議價。可說「可以便宜一點嗎？（少し安くなりますか）」。14:10 前走回四天王寺前夕陽丘站。",
      "phone": "+81-6-6771-0066",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "07:00–16:00",
      "price": "免費入場",
      "website": "https://www.shitennoji.or.jp/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d8_06",
      "day": 8,
      "time": "14:20",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "前往天神橋筋六丁目（地鐵谷町線）",
      "cityId": "osaka",
      "address": "大阪地鐵四天王寺前夕陽丘站",
      "addressLocal": "Osaka Metro 四天王寺前夕陽ヶ丘駅 2番線",
      "coords": [
        34.6588,
        135.5142
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】四天王寺前夕陽丘站 2 號月台，谷町線往大日方向。\n【下車】天神橋筋六丁目站 5 號出口向北步行約 10 分鐘到浪花之湯。\n【車資】IC ¥240，ICOCA 拍卡。\n【備案】谷町線約 5–7 分鐘一班。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
      "price": "IC ¥240（ICOCA）",
      "website": null,
      "cost": {
        "amount": 240,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "subway",
        "from": "四天王寺前夕陽丘",
        "to": "天神橋筋六丁目",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵 Osaka Metro",
        "line": "谷町線",
        "durationMin": 16,
        "stopCount": 8,
        "liveApi": null
      }
    },
    {
      "id": "evt_d8_07",
      "day": 8,
      "time": "14:45",
      "timeHint": "afternoon",
      "type": "rest",
      "title": "天然溫泉 浪花之湯（なにわの湯）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區長柄西1-7-31",
      "addressLocal": "大阪府大阪市北区長柄西1-7-31 天然温泉 なにわの湯",
      "coords": [
        34.7154,
        135.5138
      ],
      "tags": [
        "溫泉",
        "露天"
      ],
      "moodColor": "#9AA8A3",
      "note": "【攻略】大樓天台的天然溫泉，露天區有源泉湯、壺湯、岩風呂、寢湯，逛完古董市泡個露天浴最舒服。\n【實用】毛巾可租／買；週末人多，下午 3 點左右較好。16:05 離開，步行約 10 分鐘回天神橋筋六丁目站。A 案：如白雪「藏祭（蔵まつり）」確定在 2/14，可改去伊丹（見靈感）。",
      "phone": "+81-6-6882-4126",
      "whatsapp": null,
      "line": "@911ukflz",
      "messenger": null,
      "openHours": "平日 10:00–翌日 01:00；週末及假期 08:00–翌日 01:00（最後入場 24:00）",
      "price": "週末成人 ¥1,000",
      "website": "https://naniwanoyu.com/",
      "cost": {
        "amount": 1000,
        "currency": "JPY",
        "category": "ticket"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d8_08",
      "day": 8,
      "time": "16:19",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "前往谷町六丁目（地鐵谷町線）",
      "cityId": "osaka",
      "address": "大阪地鐵天神橋筋六丁目站",
      "addressLocal": "Osaka Metro 天神橋筋六丁目駅 1番線",
      "coords": [
        34.7103,
        135.5108
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】天神橋筋六丁目站 1 號月台，谷町線往八尾南方向。\n【下車】谷町六丁目站步行約 2 分鐘到燗之美穗（約 130m；出口號碼待確認）。\n【車資】IC ¥240，ICOCA 拍卡。\n【備案】谷町線約 5–7 分鐘一班。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
      "price": "IC ¥240（ICOCA）",
      "website": null,
      "cost": {
        "amount": 240,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "subway",
        "from": "天神橋筋六丁目",
        "to": "谷町六丁目",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵 Osaka Metro",
        "line": "谷町線",
        "durationMin": 13,
        "stopCount": 6,
        "liveApi": null
      }
    },
    {
      "id": "evt_d8_09",
      "day": 8,
      "time": "16:45",
      "timeHint": "afternoon",
      "type": "food",
      "title": "燗之美穗（燗の美穂）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區安堂寺町2-2-14",
      "addressLocal": "大阪府大阪市中央区安堂寺町2-2-14 燗の美穂",
      "coords": [
        34.6761,
        135.5157
      ],
      "tags": [
        "清酒",
        "燙酒",
        "吧枱",
        "Bib Gourmand"
      ],
      "moodColor": "#A0785A",
      "note": "【今次】晚餐；燙酒專門。\n【Tabelog】3.43（120 則評價；米芝蓮 Bib Gourmand）\n【攻略】女店主中村美穗由大阪名酒舖「山中酒店（山中酒の店）」自立，2020 年由博勞町搬到谷町六丁目古民家；米芝蓮 Bib Gourmand（2022–2025）。常備 60–70 款適合燙熱的西日本清酒，說出口味請店員挑選即可。必吃三款前菜（¥600）、招牌炙燒鴨里脊（たたき）；店主推介生原酒熱燗配芝士。一人女客比例高，最後一晚的清酒總結。\n【預約】只有 11 個吧枱位，開門後經常滿座，建議電話預約星期日 16:45（星期日 15:00 開）。\n【注意】地址已搬遷（舊博勞町地址不再適用）；2027 年 2 月休息日要看店主 blog。",
      "phone": "+81-6-7222-2510",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "星期一至六 16:00–22:00；日 15:00–22:00；休息日不定，出發前確認",
      "price": "預算 ¥6,000–7,999（連燙酒）",
      "website": "https://tabelog.com/osaka/A2701/A270204/27117661/",
      "cost": {
        "amount": 7000,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d8_10",
      "day": 8,
      "time": "19:00",
      "timeHint": "evening",
      "type": "transport",
      "title": "前往谷町四丁目（地鐵谷町線）",
      "cityId": "osaka",
      "address": "大阪地鐵谷町六丁目站 2 號月台",
      "addressLocal": "Osaka Metro 谷町六丁目駅 2番線（谷町線・大日方面）",
      "coords": [
        34.6761,
        135.5157
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】由燗之美穗步行到谷町六丁目站（約 5 分鐘，估算）；2 號月台，谷町線往大日方向。\n【下車】谷町四丁目站 4 號出口步行約 4 分鐘回酒店。\n【車資】IC ¥190，ICOCA 拍卡。\n【備案】天氣好可步行回酒店約 15 分鐘（估算）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
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
        "from": "谷町六丁目",
        "to": "谷町四丁目",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵 Osaka Metro",
        "line": "谷町線",
        "durationMin": 1,
        "stopCount": 1,
        "liveApi": null
      }
    },
    {
      "id": "evt_d8_11",
      "day": 8,
      "time": "19:15",
      "timeHint": "evening",
      "type": "rest",
      "title": "浪華之湯",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區內本町2-1-9（Dormy Inn 大阪谷町）",
      "addressLocal": "〒540-0026 大阪府大阪市中央区内本町2-1-9 天然温泉 浪華の湯 ドーミーイン大阪谷町 13F 大浴場",
      "coords": [
        34.6835,
        135.5139
      ],
      "tags": [
        "天然溫泉",
        "桑拿"
      ],
      "moodColor": "#9AA8A3",
      "note": "【今次】最後一晚。\n【攻略】最後一晚，桑拿＋冷水池＋外氣浴來兩輪；之後在房間把清酒用防震包裝好、量行李重量。\n【實用】浴場內嚴禁帶食物及酒精飲品，只可帶補充水分的飲品；有紋身不可入浴。",
      "phone": "+81-6-6945-5489",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "大浴場「浪華之湯」（13 樓，男女分開）15:00–翌日 10:00；桑拿 01:00–05:00 暫停",
      "price": "住客免費",
      "website": "https://dormy-hotels.com/dormyinn/hotels/osakatanimachi/spa/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d9_01",
      "day": 9,
      "time": "08:00",
      "timeHint": "morning",
      "type": "rest",
      "title": "浪華之湯",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區內本町2-1-9（Dormy Inn 大阪谷町）",
      "addressLocal": "〒540-0026 大阪府大阪市中央区内本町2-1-9 天然温泉 浪華の湯 ドーミーイン大阪谷町 13F 大浴場",
      "coords": [
        34.6835,
        135.5139
      ],
      "tags": [
        "天然溫泉",
        "朝湯"
      ],
      "moodColor": "#9AA8A3",
      "note": "【今次】最後一次朝湯。\n【攻略】朝湯開到 10:00；泡完喝免費乳酸菌飲品（05:00–10:00）。\n【實用】浴場內嚴禁帶食物及酒精飲品，只可帶補充水分的飲品；有紋身不可入浴。",
      "phone": "+81-6-6945-5489",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "大浴場「浪華之湯」（13 樓，男女分開）15:00–翌日 10:00；桑拿 01:00–05:00 暫停",
      "price": "住客免費",
      "website": "https://dormy-hotels.com/dormyinn/hotels/osakatanimachi/spa/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d9_02",
      "day": 9,
      "time": "08:40",
      "timeHint": "morning",
      "type": "food",
      "title": "Dormy Inn 餐廳 HATAGO",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區內本町2-1-9（Dormy Inn 大阪谷町） 13 樓",
      "addressLocal": "〒540-0026 大阪府大阪市中央区内本町2-1-9 天然温泉 浪華の湯 ドーミーイン大阪谷町 13F レストラン HATAGO",
      "coords": [
        34.6835,
        135.5139
      ],
      "tags": [
        "酒店早餐"
      ],
      "moodColor": "#A0785A",
      "note": "【今次】早餐：Dormy Inn 自助早餐（13 樓）。\n【攻略】Dormy Inn 全線共通的和洋自助早餐，加上大阪「當地逸品」：水菜「哈哩哈哩烏冬」（はりはりうどん）和大阪燒；小鉢橫丁一口一碟，可以每樣少少試。\n【攻略】最後一頓，試大阪燒和哈哩哈哩烏冬；注意 09:00 最後入場。\n【實用】06:30–09:30（最後入場 09:00），只限住客；成人 ¥2,000（含稅）。如訂房時未含早餐，可在前台加購（加購方法待確認）。",
      "phone": "+81-6-6945-5489",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "06:30–09:30（最後入場 09:00）",
      "price": "成人 ¥2,000（含稅）",
      "website": "https://dormy-hotels.com/dormyinn/hotels/osakatanimachi/breakfast/",
      "cost": {
        "amount": 2000,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d9_03",
      "day": 9,
      "time": "09:45",
      "timeHint": "morning",
      "type": "hotel",
      "title": "Dormy Inn 大阪谷町",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區內本町2-1-9（Dormy Inn 大阪谷町）",
      "addressLocal": "〒540-0026 大阪府大阪市中央区内本町2-1-9 天然温泉 浪華の湯 ドーミーイン大阪谷町",
      "coords": [
        34.6835,
        135.5139
      ],
      "tags": [
        "退房"
      ],
      "moodColor": "#3A3A3A",
      "note": "【今次】退房。\n【攻略】比 11:00 退房時間早一點走，留時間在上本町最後買酒。退房前檢查清酒包裝及行李重量（回程建議加購 32kg）。行李重可請前台叫的士直接到近鐵上本町（約 2 km，車資估算約 ¥1,000）。",
      "phone": "+81-6-6945-5489",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "Check-out 11:00",
      "price": "不適用",
      "website": "https://dormy-hotels.com/dormyinn/hotels/osakatanimachi/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d9_04",
      "day": 9,
      "time": "10:01",
      "timeHint": "morning",
      "type": "transport",
      "title": "前往谷町九丁目（地鐵谷町線）",
      "cityId": "osaka",
      "address": "大阪地鐵谷町四丁目站 1 號月台",
      "addressLocal": "Osaka Metro 谷町四丁目駅 1番線（谷町線・八尾南方面）／4番出口（エレベーター位置は駅で確認）",
      "coords": [
        34.6826,
        135.5176
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】由酒店步行約 4 分鐘到谷町四丁目站 4 號出口，帶行李可找升降機出入口（位置待確認）；1 號月台，谷町線往八尾南方向。\n【下車】經地下通道到近鐵上本町／近鐵百貨（估算 5 分鐘）。\n【車資】IC ¥190，ICOCA 拍卡。\n【備案】的士由酒店到近鐵上本町約 10 分鐘（估算）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
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
        "from": "谷町四丁目",
        "to": "谷町九丁目",
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
      "id": "evt_d9_05",
      "day": 9,
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
      "note": "【今次】地庫 1 樓 和洋酒賣場：最後買酒。\n【攻略】10:00 開門，用約 1 小時補買奈良、大阪地酒（賣場不時有試飲推廣）；要求防震包裝（緩衝材で包んでください）。退稅要帶護照，離境時在機場海關辦理。\n【實用】行李可寄放在大阪上本町站的投幣儲物櫃（大型櫃位置及空位待確認）。11:30 前到 2 樓巴士總站。",
      "phone": "+81-6-6775-1111",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "10:00–20:00",
      "price": "按貨品標價",
      "website": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d9_06",
      "day": 9,
      "time": "11:40",
      "timeHint": "morning",
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
      "note": "【上車】近鐵上本町 2 樓巴士總站 UH1 乘車處，先在售票機買票（只售單程票）。\n【班次】約 30 分鐘一班，車程約 50 分鐘；建議約 11:40 前到站，早到可搭早一班。不設預約，先到先上，大件行李交司機放車底。\n【下車】第 1 航廈國際線出發層下車，直接辦理登機。\n【備案】谷町九丁目 → 天王寺（谷町線）轉 JR 特急 HARUKA 或關空快速到關西機場（班次待確認）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "約 30 分鐘一班，先到先上，到站搭下一班即可",
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
      "id": "evt_d9_07",
      "day": 9,
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
      "note": "【今次】午餐；關西機場第 1 航廈禁區。\n【Tabelog】3.02（1 則評價）\n【攻略】出境後的和食 food court（約 280 座位），有和牛、海鮮及季節食材定食，燒物、炸物、刺身一次吃到。評分樣本極少，只作方便之選；真正的美食已在前八天完成。\n【實用】辦完退稅（海關確認）及出境後再去吃；可用信用卡。",
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
      "id": "evt_d9_08",
      "day": 9,
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
      "note": "【今次】HX 回程登機（15:15 起飛）。\n【登機流程】12:31 巴士到第 1 航廈 4 樓國際線出發大堂 → HX 櫃位辦理登機及寄艙（櫃位截止時間以確認信為準）→ 海關確認退稅（帶護照及免稅單據）→ 保安檢查及出境審查 → 禁區午餐 → 按登機證時間到閘口。\n【航班】HK Express（HX）15:15 起飛（航班號待訂票後確認）。回程建議加購 32kg 寄艙（約 HK$430）。\n【實用】HK Express 客服可用 WhatsApp 聯絡（每日 08:00–20:00；用上方「聯絡」icon）。",
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
    "title": "串炸松葉 總本店（串かつ 松葉 総本店）",
    "tag": "FOOD",
    "note": "【重點】新梅田食道街。\n原本 2/7 第一晚晚餐；酒店改到谷町後，第一晚改為上本町刺身宵夜，不再專程去梅田。可改在 2/10 頭療後（Kiji 隔鄰同一條食道街）或 2/11 中崎町一帶時順道吃。\n【Tabelog】3.49（約 1,460 則評價）\n【攻略】新梅田食道街代表性的老字號立食串炸店，昭和風味濃厚，椰菜任吃。先點若雞、豬肉、蓮藕等經典串，再試口碑推介的巨型大蝦串；醬汁共用，切勿二度蘸醬。配一杯生啤或熱清酒，第一晚輕鬆收結。\n【實用】全店站立（約 70 位），不設預約，一人最自然；可用信用卡及 IC 卡；2025 年 4 月起全店禁煙。星期日及假期營業至 21:30。",
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
    "source": "ai"
  },
  {
    "id": "ins_002",
    "title": "北極星 心齋橋本店",
    "tag": "RAINY",
    "note": "【重點】蛋包飯始祖。\n【攻略】1922 年創業的洋食店，被視為蛋包飯（オムライス）的發祥店。本店是 1950 年建成的數寄屋造日式老屋，座敷圍著小中庭，在和室吃洋食很有味道。必點招牌雞肉蛋包飯（チキンオムライス）：蛋皮薄、內裡半熟，配特製番茄醬；配菜炸雞（唐揚げ）亦是名物。\n2/8 午餐備案：老洋房和室座位；一般席不設預約，下雨也不用走遠。",
    "type": "food",
    "cityId": "osaka",
    "address": "日本大阪府大阪市中央區西心齋橋2-7-27",
    "addressLocal": "大阪府大阪市中央区西心斎橋2-7-27 北極星 心斎橋本店",
    "coords": [
      34.6697,
      135.4988
    ],
    "nearEventId": "evt_d2_05",
    "phone": "+81-6-6211-7829",
    "whatsapp": null,
    "line": null,
    "messenger": "https://m.me/hokkyokusei.shinsaibashi",
    "openHours": "11:30–21:00（L.O. 閉店前 30 分鐘）",
    "price": "雞肉蛋包飯約 ¥1,180",
    "website": "https://www.hokkyokusei.biz/shoplist.php",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_003",
    "title": "燗之美穗（燗の美穂）",
    "tag": "FOOD",
    "note": "【重點】燙酒專門。\n【攻略】女店主中村美穗由大阪名酒舖「山中酒店（山中酒の店）」自立，2020 年由博勞町搬到谷町六丁目古民家；米芝蓮 Bib Gourmand（2022–2025）。常備 60–70 款適合燙熱的西日本清酒，說出口味請店員挑選即可。必吃三款前菜（¥600）、招牌炙燒鴨里脊（たたき）；店主推介生原酒熱燗配芝士。一人女客比例高，最後一晚的清酒總結。\n2/8 長堀居酒屋星期一不營業或訂不到時的備案：同一區步行約 10 分鐘，星期一 16:00 開；Tabelog 3.43、米芝蓮 Bib Gourmand；D8 亦會再去。",
    "type": "food",
    "cityId": "osaka",
    "address": "日本大阪府大阪市中央區安堂寺町2-2-14",
    "addressLocal": "大阪府大阪市中央区安堂寺町2-2-14 燗の美穂",
    "coords": [
      34.6761,
      135.5157
    ],
    "nearEventId": "evt_d2_09",
    "phone": "+81-6-7222-2510",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "星期一至六 16:00–22:00；日 15:00–22:00",
    "price": "預算 ¥6,000–7,999",
    "website": "https://tabelog.com/osaka/A2701/A270204/27117661/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_004",
    "title": "奈良國立博物館",
    "tag": "RAINY",
    "note": "【重點】名品展。\n【攻略】下雨時的室內選擇：名品展看奈良的佛教美術，青銅器館（中國古代青銅器）免費入場，可以慢慢看。館內商店有佛像主題文具和明信片，輕身好帶作手信。瑠璃繪期間開到 18:00，看完直接走到會場。\n2/9 下雨備案：瑠璃繪期間（2/8–14）開到 18:00；2/6–3/14 有「新收藏品」特集；佛像館翻新閉館中，青銅器館免費參觀。",
    "type": "sight",
    "cityId": "nara",
    "address": "日本奈良縣奈良市登大路町50",
    "addressLocal": "奈良県奈良市登大路町50 奈良国立博物館",
    "coords": [
      34.6831,
      135.8383
    ],
    "nearEventId": "evt_d3_09",
    "phone": "+81-50-5542-8600",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "瑠璃繪期間開到 18:00",
    "price": "名品展一般 ¥700",
    "website": "https://www.narahaku.go.jp/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_005",
    "title": "春日荷茶屋",
    "tag": "FOOD",
    "note": "【重點】萬葉粥。\n【攻略】春日大社參道上的茶屋，招牌萬葉粥每月換配料，2 月加入節分大豆，清淡暖胃，適合作輕便午餐；坐下歇腳再去參拜，不用趕。\n2/9 午餐備案：春日大社參道茶屋，2 月萬葉粥配節分大豆；1–3 月逢星期一休，2/9 星期二照常營業。",
    "type": "food",
    "cityId": "nara",
    "address": "日本奈良縣奈良市春日野町160 春日大社境內",
    "addressLocal": "奈良県奈良市春日野町160 春日大社 春日荷茶屋",
    "coords": [
      34.6823,
      135.8434
    ],
    "nearEventId": "evt_d3_05",
    "phone": "+81-742-27-2718",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "10:30–16:30（L.O. 16:00）",
    "price": "萬葉粥 ¥1,200",
    "website": null,
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_006",
    "title": "春日大社",
    "tag": "SOLO",
    "note": "【重點】開運除厄祈禱。\n【攻略】到祈禱所申請個人「開運除厄」祈禱，神職人員會為你唸祝詞，儀式莊重而不趕，只需填表、不用多講日文。之後沿迴廊看懸掛的銅燈籠和石燈籠參道，可求一個鹿形籤（鹿みくじ）作紀念。\n個人祈禱不用預約，當日到祈禱所申請；可與瑠璃繪同日安排，亦可與石切二選一，減輕 2/9 行程。",
    "type": "sight",
    "cityId": "nara",
    "address": "日本奈良縣奈良市春日野町160",
    "addressLocal": "奈良県奈良市春日野町160 春日大社",
    "coords": [
      34.6805,
      135.8461
    ],
    "nearEventId": "evt_d3_09",
    "phone": "+81-742-22-7788",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "祈禱受付 09:00–16:00",
    "price": "小祈禱初穗料 ¥5,000 起",
    "website": "https://www.kasugataisha.or.jp/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_007",
    "title": "太閤之湯（太閤の湯）",
    "tag": "TIRED",
    "note": "【重點】有馬溫泉。\n【攻略】有馬溫泉最大型的日歸溫泉設施，一次過泡齊金泉、銀泉，入館費已包岩盤浴，可以慢慢泡一個下午；館內有食堂和休息區，泡累了可以躺一躺。\n想泡久一點或金之湯臨時休館時的備案：金泉、銀泉、岩盤浴一次；2/12（星期五）營業。阪急巴士來回＋入館套票 ¥3,870。",
    "type": "rest",
    "cityId": "kobe",
    "address": "日本兵庫縣神戶市北區有馬町池之尻292-2",
    "addressLocal": "兵庫県神戸市北区有馬町池の尻292-2 有馬温泉 太閤の湯",
    "coords": [
      34.7978,
      135.2512
    ],
    "nearEventId": "evt_d6_04",
    "phone": "+81-78-904-2291",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "10:00–22:00（最後入館 21:00）",
    "price": "平日成人 ¥2,750（另加入湯稅 ¥75）",
    "website": "https://www.taikounoyu.com/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_008",
    "title": "馳走屋純平（馳走や純平）",
    "tag": "FOOD",
    "note": "【重點】北新地。\n【攻略】北新地小吧枱居酒屋，冬天主打河豚、甲魚，配全國地酒；一個人坐吧枱最自然，請店主按當晚菜式配酒。介意煙味要留意：店內可吸加熱煙。\n2/12 雅釀訂不到或想省錢時的備案：Tabelog 3.62、居酒屋 WEST 百名店 2026；吧枱 7 位，河豚、甲魚及地酒；單點另收 ¥1,100 前菜費，可吸加熱煙。",
    "type": "food",
    "cityId": "osaka",
    "address": "日本大阪府大阪市北區曾根崎新地1-5-25 5 樓",
    "addressLocal": "大阪府大阪市北区曽根崎新地1-5-25 ジェイ・プライド梅田永楽ビル5F 馳走や純平",
    "coords": [
      34.6979,
      135.4977
    ],
    "nearEventId": "evt_d6_12",
    "phone": "+81-6-6341-5228",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "星期一至六 17:30–23:00；星期日休，假期不定",
    "price": "預算 ¥8,000–14,999",
    "website": "https://tabelog.com/osaka/A2701/A270101/27014760/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_009",
    "title": "國立國際美術館",
    "tag": "RAINY",
    "note": "【重點】展覽「詞語重疊之地」（コトバの重なる場所）。\n【攻略】美術館主體在地下，入口的銀色鋼管結構是拍照位。今次展覽「詞語重疊之地」以文字與語言為主題，適合慢慢看；就在中之島美術館旁，人多時可即時改去。\n2/10 中之島美術館人多時改去，就在旁邊；星期三開到 17:00，展期至 2027/3/14。",
    "type": "sight",
    "cityId": "osaka",
    "address": "日本大阪府大阪市北區中之島4-2-55",
    "addressLocal": "大阪府大阪市北区中之島4-2-55 国立国際美術館",
    "coords": [
      34.6917,
      135.4922
    ],
    "nearEventId": "evt_d4_04",
    "phone": "+81-6-6447-4680",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "10:00–17:00；星期五至 20:00",
    "price": "一般 ¥1,800（夜間 ¥1,600）",
    "website": "https://www.nmao.go.jp/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_010",
    "title": "Ojas spa 梅田店",
    "tag": "TIRED",
    "note": "【重點】乾式頭療。\n【攻略】完全私人房的乾式頭療（ドライヘッドスパ），不用濕頭、不用洗頭，做完可以直接出街；行了一整天、頭重腳累時很適合，75 分鐘一節。\n物差沙龍約不到時的備案：乾式頭療不用濕頭，做完可直接外出；全私人房。",
    "type": "rest",
    "cityId": "osaka",
    "address": "日本大阪府大阪市北區豐崎3-14-6 M-style 301",
    "addressLocal": "大阪府大阪市北区豊崎3-14-6 M-style 301 Ojas spa 梅田店",
    "coords": [
      34.7105,
      135.4983
    ],
    "nearEventId": "evt_d5_04",
    "phone": "+81-6-6147-4996",
    "whatsapp": null,
    "line": "https://lin.ee/5bLcHaW",
    "messenger": null,
    "openHours": "11:00–24:00；不定休",
    "price": "乾式頭療 75 分鐘 ¥8,000",
    "website": "https://ojas-spa.com/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_011",
    "title": "梅田 釜竹烏冬（梅田 釜たけうどん）",
    "tag": "FOOD",
    "note": "【重點】新梅田食道街。\n【攻略】「ちく玉天ぶっかけ」的發祥店：大條竹輪天婦羅＋半熟蛋天婦羅，配蔥、薑和檸檬，點冷的最吃得出麵的煙韌。先在門外食券機買券（只收現金）再排隊，麵賣完即止，早點去。\n2/11 烏冬棒排隊太長時的備案：Tabelog 3.77、烏冬 WEST 百名店 2024；不設預約、只收現金，星期二休（2/11 星期四營業）。",
    "type": "food",
    "cityId": "osaka",
    "address": "日本大阪府大阪市北區角田町9-25 新梅田食道街 1 樓",
    "addressLocal": "大阪府大阪市北区角田町9-25 新梅田食道街1F 梅田 釜たけうどん",
    "coords": [
      34.7039,
      135.4978
    ],
    "nearEventId": "evt_d5_06",
    "phone": "+81-6-6363-7746",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "11:00–14:30；星期二休",
    "price": "預算 ～¥1,999",
    "website": "https://tabelog.com/osaka/A2701/A270101/27052204/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_012",
    "title": "神津神社",
    "tag": "SHOP",
    "note": "【重點】十三市。\n【攻略】每月 13 日在神津神社舉行的小型市集，有古道具、花和占卜攤檔，比大型古董市更有街坊味。慢慢翻古道具攤，找有個性又不貴的舊皮件或小物；帶現金和環保袋。\n2/13 B 案早上：每月 13 日舉行（2/13 星期六照開），古道具、花、占卜攤檔；阪急梅田 → 十三 3 分鐘（¥170），之後再去魚崎。",
    "type": "shop",
    "cityId": "osaka",
    "address": "日本大阪府大阪市淀川區十三東2-6-39 神津神社",
    "addressLocal": "〒532-0023 大阪府大阪市淀川区十三東2-6-39 神津神社 十三市",
    "coords": [
      34.7205,
      135.4846
    ],
    "nearEventId": "evt_d7_03",
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "約 09:00/10:00–15:00（時間未定）",
    "price": "免費入場",
    "website": null,
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_013",
    "title": "白鹿 西宮",
    "tag": "TIME",
    "note": "【重點】藏開。\n【攻略】白鹿（辰馬本家酒造）一年一度的藏開，重點是當日限定的搾立無濾過生原酒，新鮮帶氣泡感；攤位多數只收現金，帶保冷袋買酒。\n2/13 另一個藏開選擇：往年 2 月星期六 10:00–15:00，當日限定搾立無濾過生原酒；只收現金。2027 年日期未定。",
    "type": "sight",
    "cityId": "kobe",
    "address": "日本兵庫縣西宮市建石町2-10 辰馬本家酒造",
    "addressLocal": "兵庫県西宮市建石町2-10 辰馬本家酒造 白鹿",
    "coords": [
      34.7292,
      135.3358
    ],
    "nearEventId": "evt_d7_03",
    "phone": "+81-798-32-2727",
    "whatsapp": null,
    "line": null,
    "messenger": "https://m.me/hakushika.tatsuumahonke",
    "openHours": "往年 10:00–15:00（2027 未定）",
    "price": "免費入場；試飲另收費",
    "website": "https://www.hakushika.co.jp/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_014",
    "title": "白雪 長壽藏（伊丹）",
    "tag": "TIME",
    "note": "【重點】藏祭。\n【攻略】白雪（小西酒造）在伊丹的酒藏祭，可試新酒、逛攤位；平日去亦可，長壽藏有商店和博物館，可試飲和買限定酒。\n如果確定 2/14：每年 2 月第 2 個星期日舉行，JR 大阪 → 伊丹約 16 分鐘；平日長壽藏亦有商店和博物館。",
    "type": "sight",
    "cityId": "osaka",
    "address": "日本兵庫縣伊丹市中央3-4-15 白雪 Brewery Village 長壽藏",
    "addressLocal": "兵庫県伊丹市中央3-4-15 白雪ブルワリービレッジ長寿蔵",
    "coords": [
      34.7811,
      135.4172
    ],
    "nearEventId": "evt_d8_07",
    "phone": "+81-72-773-0524",
    "whatsapp": null,
    "line": null,
    "messenger": "https://m.me/konishi1550",
    "openHours": "往年 10:00–16:00（2027 未定）；長壽藏商店 10:00–19:00，星期二休",
    "price": "免費入場",
    "website": "https://www.konishi.co.jp/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_015",
    "title": "奈良瑠璃繪（なら瑠璃絵）",
    "tag": "PHOTO",
    "note": "【重點】最後一晚（2/14）。\n【攻略】最後一晚人流最多，若想再看可提早到，先在奈良公園一帶看燈飾，再找位置等煙花；帶暖包，散場後車站非常擠，預留時間回大阪。\n2026 年模式最後一晚有奈良公園煙花，人流很多；2/9 已經去過，不建議重複。",
    "type": "sight",
    "cityId": "nara",
    "address": "日本奈良縣奈良市 奈良公園",
    "addressLocal": "奈良県奈良市 奈良公園",
    "coords": [
      34.6829,
      135.8546
    ],
    "nearEventId": "evt_d8_07",
    "phone": "+81-742-30-6560",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "約 18:00–21:00（按 2026 年）",
    "price": "免費",
    "website": "https://rurie.jp/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_016",
    "title": "日本料理 岡田（おか田）",
    "tag": "FOOD",
    "note": "【重點】奈良。\n【攻略】奈良的日本料理名店，午市套餐以季節食材為主，一人也可預約；想在奈良吃一頓正式會席料理時改用。\n2/9 玄訂不到時的午市備案：Tabelog 3.82；米芝蓮一星，完全預約制，一人可訂，TableCheck 網上預約。午市套餐 ¥8,000／¥12,000；星期日及假期休。",
    "type": "food",
    "cityId": "nara",
    "address": "日本奈良縣奈良市今御門町26-2 Nori 大廈 1 樓",
    "addressLocal": "奈良県奈良市今御門町26-2 Noriビル1階 おか田",
    "coords": [
      34.6805,
      135.8303
    ],
    "nearEventId": "evt_d3_05",
    "phone": "+81-742-93-8119",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "11:30–14:00、18:00–22:00；星期日及假期休",
    "price": "午市套餐 ¥8,000／¥12,000",
    "website": "https://tabelog.com/nara/A2901/A290101/29011807/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_018",
    "title": "MIVU（神戸革工房MIVU）",
    "tag": "SHOP",
    "note": "【重點】神戶訂製皮革工房。\n【攻略】Tor Road 一帶的訂製皮革工房（不用上課，只是訂製）：可選皮革和顏色訂製銀包、卡片套等小皮件，想要一個真正屬於自己的銀包可以來看看樣板；製作期約 2–8 星期，問清楚可否寄往香港。\n想訂製一個屬於自己的皮銀包時的備案：在 Tor Road 一帶，可選皮革和顏色訂製小皮件，製作期約 2–8 星期，可問能否寄往香港。逢星期三休。",
    "type": "shop",
    "cityId": "kobe",
    "address": "日本兵庫縣神戶市中央區北長狹通3-12-1 Cross 大廈 1 樓",
    "addressLocal": "兵庫県神戸市中央区北長狭通3-12-1 クロスビル1F MIVU",
    "coords": [
      34.6928,
      135.1881
    ],
    "nearEventId": "evt_d6_08",
    "phone": "+81-78-333-0312",
    "whatsapp": null,
    "line": "https://lin.ee/GUKysMA",
    "messenger": null,
    "openHours": "11:30–19:30；逢星期三休",
    "price": "按訂製內容報價",
    "website": "https://mivu.jp/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_019",
    "title": "Charkha（チャルカ）",
    "tag": "SHOP",
    "note": "【重點】東歐古紙與手工藝雜貨。\n【攻略】專賣東歐古紙、舊鈕扣和手工藝品的小店，小物價錢親民，適合找有個性的小手信；營業日少，去之前先確認。\n喜歡東歐古紙、舊鈕扣和手工藝品時的備案：只在星期四至六 13:00–18:00 營業，常有長假和臨時休息，2/11（星期四假期）是否營業須先確認。",
    "type": "shop",
    "cityId": "osaka",
    "address": "日本大阪府大阪市中央區瓦屋町1-5-23",
    "addressLocal": "大阪府大阪市中央区瓦屋町1-5-23 チャルカ",
    "coords": [
      34.6716,
      135.515
    ],
    "nearEventId": "evt_d5_08",
    "phone": "+81-6-6764-0711",
    "whatsapp": null,
    "line": null,
    "messenger": "https://m.me/CHARKHA.zakka",
    "openHours": "星期四至六 13:00–18:00（不定期長休）",
    "price": "按貨品標價",
    "website": "https://www.charkha.net/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_020",
    "title": "奈良豐澤酒造（奈良豊澤酒造）",
    "tag": "TIME",
    "note": "【重點】酒藏參觀；帶解。\n【攻略】1868 年創業的奈良老酒藏，代表酒「豐祝」（豊祝），堅持人手製麴；參觀可看蒸米、麴室和仕込藏，之後試飲。隔鄰直營店有只在藏元發售的生酒，適合買回酒店。\n想正式參觀奈良酒藏時的備案：2 月逢星期三、六 10:30 或 15:30 開始，完全預約制，致電預約，1–40 人，¥500（附手信）。與奈良日（2/9 星期二）日期不合，而且在帶解，離奈良町較遠，所以只列備案。",
    "type": "sight",
    "cityId": "nara",
    "address": "日本奈良縣奈良市今市町405",
    "addressLocal": "奈良県奈良市今市町405 奈良豊澤酒造",
    "coords": [
      34.642,
      135.816
    ],
    "nearEventId": "evt_d3_06",
    "phone": "+81-742-61-7636",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "酒藏參觀：2 月逢星期三、六 10:30／15:30（須預約）",
    "price": "參觀 ¥500（附手信）",
    "website": "https://www.nara-toyosawa.jp/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_021",
    "title": "白鶴酒造資料館",
    "tag": "TIME",
    "note": "【重點】灘五鄉大型酒藏資料館。\n【攻略】大正時代酒藏改建的資料館，展示傳統釀酒工序和工具；季節限定酒可免費試飲，高級酒付費試飲，再在商店挑一兩支帶走。\n浜福鶴之後時間充裕時可加：大正時代酒藏改建的資料館，展示傳統釀酒工具；季節限定酒免費試飲，高級酒付費試飲。由浜福鶴步行約 15 分鐘（估算）。",
    "type": "sight",
    "cityId": "kobe",
    "address": "日本兵庫縣神戶市東灘區住吉南町4-5-5",
    "addressLocal": "兵庫県神戸市東灘区住吉南町4-5-5 白鶴酒造資料館",
    "coords": [
      34.7102,
      135.2617
    ],
    "nearEventId": "evt_d7_04",
    "phone": "+81-78-822-8907",
    "whatsapp": null,
    "line": "@509tckzy",
    "messenger": "https://m.me/HAKUTSURU.SAKE.BREWING",
    "openHours": "09:30–16:30（入館至 16:00）；年末年始休",
    "price": "免費入館；高級酒試飲收費",
    "website": "https://www.hakutsuru.co.jp/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_022",
    "title": "食堂 Kifune（食堂 きふね）",
    "tag": "FOOD",
    "note": "【重點】芦屋居酒屋。\n原本 2/13 晚餐；v5 改為灘五鄉酒配魚喜刺身的房間宵夜。想吃正式晚餐可改回：17:35 散步後步行到店，18:00 入座，飯後由阪神芦屋站乘直通特急到大阪梅田再轉谷町線（約 50 分鐘，估算）。\n【Tabelog】3.70（175 則評價；居酒屋 WEST 百名店 2026）\n【攻略】連續三年入選居酒屋百名店的芦屋小店，店方對清酒、燒酎及葡萄酒都很講究。在吧枱點當日推介小菜，請店主按菜配清酒，順便和今天灘五鄉試過的酒作比較。\n【預約】吧枱 6 位＋枱 4 位，建議電話預約，指定 18:00 吧枱一人位。可用信用卡。\n【實用】18:00 開門，不定休，訂位時確認 2/13 營業。",
    "type": "food",
    "cityId": "osaka",
    "address": "日本兵庫縣芦屋市茶屋之町11-5",
    "addressLocal": "兵庫県芦屋市茶屋之町11-5 食堂 きふね",
    "coords": [
      34.7295,
      135.3072
    ],
    "nearEventId": "evt_d7_13",
    "phone": "+81-80-1604-8597",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "18:00–翌日 01:00；不定休",
    "price": "預算 ¥5,000–7,999（連酒）",
    "website": "https://tabelog.com/hyogo/A2803/A280302/28058371/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_023",
    "title": "稻田酒店",
    "tag": "SHOP",
    "note": "【重點】天神橋筋六丁目，地酒專門店＋角打ち。\n【攻略】最接近住吉酒販風格的一間：全國地酒及燒酎專門酒屋，有季節限定及稀有銘柄，店內設立飲試酒區（角打ち），配關東煮和每日手作小菜。例如：福井「一本義 辛爽系 無濾過 吟釀」一升瓶 ¥4,400（含稅）。可在 2/11 黑兔食堂晚餐前提早 30 分鐘到，先在立飲區喝一兩杯再買酒。\n【實用】店舖 11:00–21:30、立飲區 14:00–21:00；假期營業時店舖至 20:30、立飲區至 20:00；星期日休，假期不定休（2/11 是否營業待確認）。店舖可用現金、信用卡、PayPay，立飲區只收現金。天神橋筋六丁目站步行約 3 分鐘。",
    "type": "shop",
    "cityId": "osaka",
    "address": "日本大阪府大阪市北區浪花町6-4",
    "addressLocal": "大阪府大阪市北区浪花町6-4 稲田酒店",
    "coords": [
      34.7076,
      135.5097
    ],
    "nearEventId": "evt_d5_13",
    "phone": "+81-6-6371-0636",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "店舖 11:00–21:30／立飲區 14:00–21:00；日休、假期不定休",
    "price": "立飲區每杯價錢待確認；一升瓶 ¥4,400 例",
    "website": "https://osaka-saketen.jp/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_024",
    "title": "山中酒之店 Eki Marché 大阪店（山中酒の店）",
    "tag": "SHOP",
    "note": "【重點】JR 大阪站，自助試飲機。\n【攻略】大阪地酒專門老店「山中酒之店」的梅田分店：自助式日本酒試飲機常設 54 款，可外賣、可堂飲。試了喜歡再買，就像住吉酒販的試飲台。2/10 頭療後或 2/11 LIBRA 之後最順路。\n【實用】11:00–23:00（L.O. 22:00），JR 大阪站 1 樓櫻橋口附近。每杯價錢待確認（本店試飲幣 ¥350／60ml 作參考）。",
    "type": "shop",
    "cityId": "osaka",
    "address": "日本大阪府大阪市北區梅田3-1-1 JR 大阪站 Eki Marché 大阪",
    "addressLocal": "大阪府大阪市北区梅田3-1-1 JR大阪駅 エキマルシェ大阪 山中酒の店",
    "coords": [
      34.7019,
      135.4963
    ],
    "nearEventId": "evt_d4_10",
    "phone": "+81-6-6348-3955",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "11:00–23:00（L.O. 22:00）",
    "price": "試飲每杯待確認",
    "website": "https://osaka.ekimaru.com/shopguide/detail/55",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_026",
    "title": "Stand Utsutsuyo（スタンド うつつよ）",
    "tag": "SOLO",
    "note": "【重點】谷町四丁目，自家濁酒醸造所。\n【攻略】米芝蓮必比登日本酒料理店 Utsutsuyo（日本酒餐昧 うつつよ）的立飲店，店內附設大阪市內首間濁酒醸造所（大阪どぶろく醸造所）；自家濁酒每杯 ¥800，3 款 70ml 套裝 ¥2,200，另有每月飲比套裝 45ml×3 ¥980 起，濁酒可買瓶裝外賣。由酒店步行約 5 分鐘，適合沒有晚餐安排的晚上，或買一枝回房配超市刺身。\n【實用】星期一至五 17:00–22:30，六及假期 16:00–22:30；星期日、假期的星期一休；不設預約。谷町四丁目站 6 號出口步行約 5 分鐘。",
    "type": "food",
    "cityId": "osaka",
    "address": "日本大阪府大阪市中央區鎗屋町1-1-12",
    "addressLocal": "大阪府大阪市中央区鎗屋町1-1-12 スタンド うつつよ",
    "coords": [
      34.683,
      135.5157
    ],
    "nearEventId": "evt_d7_13",
    "phone": "+81-6-7777-5412",
    "whatsapp": null,
    "line": "@162bhomb",
    "messenger": null,
    "openHours": "一至五 17:00–22:30；六及假期 16:00–22:30；日休",
    "price": "濁酒每杯 ¥800；3 款套裝 ¥2,200",
    "website": "https://www.ututuyo.jp/stand.html",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_027",
    "title": "KOHYO 內本町店",
    "tag": "TIRED",
    "note": "【重點】酒店樓下超市。\n【攻略】酒店隔鄰，步行約 1 分鐘；以鮮魚見稱的關西超市，晚上可買刺身、壽司盒、關東煮和清酒，回房做簡單宵夜。減價貼紙時間不定，一般傍晚後較多（待確認）。\n【實用】07:00–23:00，不定休。",
    "type": "shop",
    "cityId": "osaka",
    "address": "日本大阪府大阪市中央區內本町2-2-10",
    "addressLocal": "大阪府大阪市中央区内本町2-2-10 KOHYO内本町店",
    "coords": [
      34.6833,
      135.5138
    ],
    "nearEventId": "evt_d8_11",
    "phone": "+81-6-6944-5040",
    "whatsapp": null,
    "line": "@rxu5960x",
    "messenger": null,
    "openHours": "07:00–23:00",
    "price": "刺身拼盤約 ¥800–1,500（估算）",
    "website": "https://www.daiei.co.jp/stores/4473/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_028",
    "title": "Life 堺筋本町店",
    "tag": "TIME",
    "note": "【重點】營業至午夜的超市。\n【攻略】KOHYO 23:00 關門後的後備：營業到 00:00，有食品及酒類。減價時間不定（待確認）。\n【實用】09:00–翌日 00:00；堺筋本町站 3、6 號出口向南步行約 3 分鐘；由酒店步行約 11 分鐘（估算）。不接受 PiTaPa。",
    "type": "shop",
    "cityId": "osaka",
    "address": "日本大阪府大阪市中央區久太郎町1-7-5",
    "addressLocal": "大阪府大阪市中央区久太郎町1-7-5 ライフ堺筋本町店",
    "coords": [
      34.6807,
      135.5076
    ],
    "nearEventId": "evt_d8_11",
    "phone": "+81-6-6261-1801",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "09:00–翌日 00:00",
    "price": "按貨品標價",
    "website": "https://store.lifecorp.jp/detail/west408/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_029",
    "title": "日本酒原價酒藏 谷町四丁目店（日本酒原価酒蔵）",
    "tag": "SOLO",
    "note": "【攻略】谷町四丁目站步行 1 分鐘，50 款以上日本酒以原價供應，有新政、九平次、鳳凰美田、寫樂等；每月有指定銘柄日（例如第一、第四個星期四「十四代之日」）。2/10 頭療後早回酒店的晚上，想再喝一杯可以來。連鎖居酒屋，評分待確認。\n【實用】平日 15:00–23:30，六日及假期 12:00–23:30，不定休；全席禁煙。",
    "type": "food",
    "cityId": "osaka",
    "address": "日本大阪府大阪市中央區谷町4-4-15 谷4 Plaza 1 樓",
    "addressLocal": "大阪府大阪市中央区谷町4-4-15 谷4プラザ1F 日本酒原価酒蔵 谷町4丁目店",
    "coords": [
      34.6806,
      135.5175
    ],
    "nearEventId": "evt_d4_13",
    "phone": "+81-50-5487-1817",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "平日 15:00–23:30；六日及假期 12:00–23:30",
    "price": "原價日本酒（每杯價錢按銘柄）",
    "website": "https://kejv400.gorp.jp/",
    "status": "wishlist",
    "source": "ai"
  }
];

// 8. 🛒 每日購物
const DAILY_EXTRAS = {
  "1": {
    "shopping": [
      "Visit Japan Web 入境 QR code",
      "利木津巴士車票（售票機可用信用卡）",
      "近鐵百貨地庫：刺身要保冷劑",
      "ICOCA／信用卡拍卡"
    ]
  },
  "2": {
    "shopping": [
      "古物市用現金",
      "山中酒之店：試飲後買一兩支四合瓶（要防震包裝）",
      "土居天然真昆布（輕身好帶）",
      "退稅：帶護照（2026-11 起出境時退稅）"
    ]
  },
  "3": {
    "shopping": [
      "玄午市只收現金",
      "奈良春日山酒造「升平」（免費試飲後再買）",
      "手握奈良墨（桐箱，3 個月內勿開）",
      "奈良地酒（泉勇齋）"
    ]
  },
  "4": {
    "shopping": [
      "古董首飾／cameo",
      "頭療推介的護髮產品（按需要）",
      "大阪燒店只收現金"
    ]
  },
  "5": {
    "shopping": [
      "日本產精油",
      "自調香水 10ml",
      "Guignol 歐洲舊貨（生活小物）",
      "天神橋筋商店街小吃（少量，留肚晚餐）"
    ]
  },
  "6": {
    "shopping": [
      "溫泉毛巾",
      "有馬人形筆",
      "槌井／Wicked／雜駁商會：沒有品牌的舊皮件（帶現金）",
      "全日 smart casual（晚餐雅釀）"
    ]
  },
  "7": {
    "shopping": [
      "藏開限定新酒",
      "浜福鶴工房限定秘藏酒",
      "酒粕",
      "現金（藏開攤位多數只收現金）",
      "今晚宵夜用的酒（浜福鶴／菊正宗／福壽）"
    ]
  },
  "8": {
    "shopping": [
      "四天會古皮具／古首飾（現金）",
      "清酒防震包裝（明早近鐵百貨上本町 B1 最後補買）"
    ]
  },
  "9": {
    "shopping": [
      "近鐵百貨上本町 B1 最後買酒（防震包裝）",
      "回程 32kg 行李",
      "機場退稅確認"
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
    "total": 297155,
    "currency": "JPY",
    "byCategory": {
      "hotel": 119725,
      "food": 132220,
      "transport": 14860,
      "ticket": 12850,
      "shop": 0,
      "other": 17500
    },
    "note": "日圓為日本當地估算：酒店＝Dormy Inn 大阪谷町 8 晚 ¥118,125（素泊，含稅）＋宿泊稅約 ¥1,600（每晚約 ¥200 估算，現場支付）；早餐＝3 次 Dormy 自助早餐 ¥2,000＋附近喫茶／麵包店；交通＝各段 IC／巴士車資；門票＝體驗、試飲及入場費；其他＝香薰按摩、頭療；購物（皮件、清酒）未估。機票 HK$5,223（去 HK$2,773＋回 HK$2,450）＋行李約 HK$740 另計（港幣）。"
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
  }
];
