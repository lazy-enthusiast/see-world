// buildTime: 2026-10-18T23:02:27.404Z
// ============================================================
// 🧳 客製化設定檔 config.js —— 大阪二月（v5h：嚴格重審後重排；2/9 奈良縣立美術館＋奈良町、2/10 京都美術館＋漢字博物館＋月桂冠、2/14 伊丹白雪長壽藏、白鹿西宮藏開、2/12 神戶珍珠、2/7 生日蛋糕、KIX 退稅順序；v5g：京都日、神戶梵高展 4 小時＋HINO、雅釀改 2/13、只用網上預約；v5f：UO 航班、大梵高展、5 間店資料更新、QA 7aaae12 修正；v5：酒店改 Dormy Inn 大阪谷町、全程交通重排、超市宵夜；按 SCHEMA v1.12 調整）
// 結構契約見 schema.json／SCHEMA.md（v1.12；v5d：聯絡欄位、靈感攻略、標題只寫地點、去資料來源字眼、取消皮革工作坊；v5e：加入歷史文化點、古物點減至兩個、早餐改酒店免費咖啡、KIX 手信）
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
    "browserTitle": "大阪二月",
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

// 本趟到站 provider 宣告（不含 API key；ODPT key 放 see-world-transit Worker Secret TRANSIT_ODPT_KEY）。
// ODPT 目錄暫無本趟關西營運商的站碼，所以全部 liveApi 為 null、providers 留空；有真實 odpt.Station id 才填。
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
      "flight": "HK Express UO898",
      "date": "02/07",
      "dep": "HKG 11:50",
      "arr": "KIX 16:25",
      "note": "香港一號客運大樓 → 關西第 1 航廈；HK$2,773；寄艙 20kg 首次訂票 HK$310",
      "bookingRef": null
    },
    {
      "type": "回程",
      "flight": "HK Express UO851",
      "date": "02/15",
      "dep": "KIX 15:15",
      "arr": "HKG 19:00",
      "note": "約 12:30 到關西第 1 航廈（11:40 前後的利木津巴士，車程約 50 分鐘）；HK$2,450；回程建議加購 32kg（約 HK$430）",
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
      "note": "【今次】抵達。\n【航班】HK Express UO898，16:25 抵達關西機場第 1 航廈。\n【入境】出發前填好 Visit Japan Web（入境＋海關申報 QR code），入境連提行李預留 45–60 分鐘（估算）。\n【攻略】出閘後可在便利店 ATM 提取備用現金；之後乘利木津巴士到近鐵上本町（第 1 航廈 1 樓 7 號站）。機場總合案內 24 小時有中文服務。\n【實用】在日本刷卡一律選日圓（JPY）簽賬，不要選港幣（DCC）；ICOCA 用現金增值，博物館未確認收不收卡：可刷卡就用信用卡，另帶備現金；月桂冠大倉記念館不收現金，用信用卡（Visa、Mastercard）簽賬。",
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
      "note": "【上車】第 1 航廈 1 樓入境大堂出閘後，到 7 號巴士站（近鐵上本町／心齋橋線）。先在售票機買票（售票處可用信用卡）。傍晚約 20–30 分鐘一班，車程約 55–60 分鐘；入境順利就搭最近一班；要在 19:00–19:30 到 B2 取生日蛋糕，車程約 60 分鐘，18:30 前上車就趕得上。\n【下車】近鐵上本町（2 樓巴士總站，UH1）下車，直接進近鐵百貨上本町店地庫買晚餐。\n【車資】成人 ¥1,800（售票機或售票處購買）。\n【備案】18:30 前上不了車：B2 蛋糕店開到 20:00，取貨時段過後能否取貨以訂單頁說明為準；或南海空港急行 1 號月台（往難波，始發）→ 天下茶屋轉堺筋線 → 堺筋本町轉中央線到谷町四丁目，轉乘 2 次，IC ¥1,210；或關西空港交通「天滿橋站」線（第 1 航廈 10 號站）直達天滿橋。",
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
      "note": "【今次】生日宵夜採購：先到地庫 2 樓取蛋糕並付款，再到地庫 1 樓買西淺刺身和地酒。\n【攻略】巴士總站在同一座大樓。19:00 先到地庫 2 樓 Henri Charpentier 近鐵上本町店（アンリ・シャルパンティエ 上本町近鉄店）取 12cm 生日蛋糕：首選草莓鮮奶油蛋糕（シャンティ・フレーズ）¥4,536，或網上預約限定的水果撻（きらめくフルーツタルト）¥3,564；不選心形系列（クール）。取貨時報 E 字頭的預約號碼，在櫃位付款，可刷恒生 travel+ 卡。\n【攻略】之後上地庫 1 樓：鮮魚店「西淺」（職人が鮮魚を扱う店 西浅）有刺身、壽司及熟食，買一盒刺身拼盤或幾款切好的刺身；同層「清酒・燒酎」（清酒・焼酎）賣場揀一枝四合瓶（720ml）大阪或奈良地酒做「生日酒」；賣場每星期有不同酒藏來試飲，遇到就試完才買。\n【預約】蛋糕用 Henri Charpentier 店方網店的店舖取貨（店舗受取）網上預約、到店付款，不是網上預付。要先在網店註冊會員（第一步用電郵收一次性密碼）。最遲 2/4（星期四）日本時間 17:00（台北 16:00）前下單，取貨日選 2/7、時間選 19:00；蠟燭、生日牌和保冷劑在下單頁選。取貨日 3 日前日本時間 17:59 前可在網店會員頁取消；之後要聯絡店舖，前一日或當日取消收全額。要準時取貨，遲到店方會來電。2 月初網店多推季節禮盒，只選一般款，款式和價錢出發前 1–2 星期再看。\n【實用】Henri Charpentier 櫃位、鮮魚西淺和洋酒賣場都是 10:00–20:00（星期日一樣）。減價貼紙時間不定，19:00 後到可能有減價。刺身要求保冷劑（保冷剤をお願いします）；蛋糕保冷劑約 2 小時，回房即放冰箱。\n【備案】未能註冊會員或錯過下單時限：在同一層 B2 現場買，Henri Charpentier 櫃位的單件草莓蛋糕（ザ・ショートケーキ）¥853，或 Boul'Mich（ブールミッシュ）的生蛋糕；星期日 19:00 後可能已賣完，有甚麼買甚麼。巴士延誤到 20:00 後，直接回酒店，在樓下 KOHYO 內本町店（營業至 23:00）買。",
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
      "note": "【今次】入住；酒店溫泉：天然溫泉 浪華之湯。\n【攻略】一連 8 晚同一間，不用換酒店。樓頂 13 樓天然溫泉「浪華之湯」連桑拿，住客免費；樓下就是 KOHYO 內本町店超市（07:00–23:00）。\n【免費服務】歡迎飲品 14:30–23:00、06:00–11:00；浴後雪條 15:00–翌日 01:00；夜鳴蕎麥麵（夜鳴きそば）每晚 21:30–23:00；浴後乳酸菌飲品 05:00–10:00。不提供免費酒精飲品。\n【實用】訂房選到店付款（現地払い），全程同價；訂房頁預設是網上付卡，要自己改選現場付款（現地で支払う），網上付卡之後不能改回。在酒店用恒生 travel+ 實體卡簽。房價已包入湯稅，另收宿泊稅（每晚約 ¥200，入住時付），可問前台能否一併簽卡。Check-in 15:00、Check-out 11:00；房間 14㎡、只有淋浴間。",
      "phone": "+81-6-6945-5489",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "Check-in 15:00／Check-out 11:00；大浴場「浪華之湯」（13 樓，男女分開）15:00–翌日 10:00；桑拿 01:00–05:00 暫停",
      "price": "8 晚 ¥118,125（素泊，含稅，已包入湯稅）＋宿泊稅約 ¥1,600（估算，入住時另收）",
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
      "title": "生日宵夜：上本町刺身＋地酒＋蛋糕",
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
      "note": "【今次】生日當晚：房間裏刺身、地酒，再切一個小蛋糕。\n【攻略】蛋糕：19:00 在近鐵地庫 2 樓取的 12cm 草莓鮮奶油蛋糕（シャンティ・フレーズ），網上預約、取貨時付款（預約和備案見近鐵百貨上本町店一項）。\n【攻略】KOHYO（樓下，營業至 23:00）可補一盒壽司或沙律；酒杯可問前台能否借用，或在 KOHYO 買紙杯。\n【額外】吃完休息一會，21:30 後上 13 樓泡浪華之湯：湯上處有免費雪條（15:00–翌日 01:00），13 樓 HATAGO 有免費夜鳴蕎麥麵（夜鳴きそば，21:30–23:00，22:15 後較空），當作生日第二輪。\n【實用】大浴場禁止酒精，留在房間吃；喝酒後休息至少 30 分鐘、多喝水才去泡湯。蛋糕附保冷劑，回房即放冰箱。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": null,
      "price": "刺身＋地酒約 ¥3,000（估算）＋12cm 蛋糕 ¥4,536（取貨時付款）",
      "website": "https://www.suzette-shop.jp/shop/r/r101036/",
      "cost": {
        "amount": 7536,
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
      "id": "evt_d2_03",
      "day": 2,
      "time": "09:30",
      "timeHint": "morning",
      "type": "sight",
      "title": "大阪歷史博物館",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區大手前4-1-32",
      "addressLocal": "大阪府大阪市中央区大手前4丁目1-32 大阪歴史博物館",
      "coords": [
        34.6826,
        135.5205
      ],
      "tags": [
        "歷史",
        "博物館",
        "難波宮"
      ],
      "moodColor": "#6B7F7A",
      "note": "【出門前】酒店 1 樓 Lounge 有住客免費咖啡（06:00–11:00，紙杯可帶走），一杯黑咖啡就出門。\n【攻略】由酒店步行約 8 分鐘（谷町四丁目站 9 號出口旁），一開門就入場。由 10 樓一路向下看，等於坐時光機：10 樓是 7 世紀的難波宮，原大重建的大極殿朱柱和宮廷女官人偶，窗外正正就是難波宮遺址公園，對照著看最震撼；9 樓是豐臣秀吉的大坂城和「天下廚房」商都，看藏屋敷模型和道修町藥商、淀川船運的故事；7 樓是大正至昭和初「大大阪」時代的心齋橋街景。\n【攻略】8 樓「發掘歷史（歷史を掘る）」展示考古發掘的方法，地庫有 5 世紀倉庫群遺跡，可在館外看重建的高床倉庫。看完在門前難波宮遺址公園走 10 分鐘，感受一下 1,300 多年前首都的尺度。\n【額外】8 樓特集展示「探索中世大阪的城」（中世・大阪の城をさぐる）（2/3–4/12，常設展門票已包）。\n【實用】平均看 1–1.5 小時；中、英文語音導覽機 ¥400，不用講日文。10:50 離開，步行回谷町四丁目站。門票可刷卡就用信用卡，另帶備現金。",
      "phone": "+81-6-6946-5728",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "09:30–17:00（入館至 16:30）；逢星期二休（假期則翌日）",
      "price": "常設展成人 ¥600；語音導覽 ¥400",
      "website": "https://www.osakamushis.jp/",
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
      "id": "trp_d2_04",
      "day": 2,
      "time": "10:55",
      "timeHint": "morning",
      "type": "transport",
      "title": "前往谷町九丁目（地鐵谷町線）",
      "cityId": "osaka",
      "address": "大阪地鐵谷町四丁目站 1 號月台",
      "addressLocal": "Osaka Metro 谷町四丁目駅 1番線（谷町線・八尾南方面）",
      "coords": [
        34.6826,
        135.5176
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】由博物館步行約 3 分鐘到谷町四丁目站；1 號月台，谷町線往八尾南方向。\n【下車】約 10:58 到谷町九丁目站，3 號出口步行約 4 分鐘到蚤之市。\n【車資】IC ¥190，ICOCA 拍卡。\n【備案】天氣好可由博物館步行約 20 分鐘（估算）。",
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
      "id": "evt_d2_13",
      "day": 2,
      "time": "11:05",
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
      "note": "【今次】每月 8 日的小型古物市；只逛攤位。\n【攻略】約 10 檔古物、古道具攤沿參道擺開，2/8 正好是市集日；慢慢翻看舊皮件、小首飾，看中就買，議價要客氣：「可以便宜一點嗎？（少し安くなりますか）」。\n【攻略】本趣不入：社殿與境內攝社；只在參道攤位一帶走動。\n【實用】約 07:00–14:00，多數攤檔只收現金；11:50 離開，步行 3–5 分鐘到和sai。",
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
      "id": "trp_d2_14",
      "day": 2,
      "time": "11:50",
      "timeHint": "morning",
      "type": "transport",
      "title": "前往和sai（步行）",
      "cityId": "osaka",
      "address": null,
      "addressLocal": null,
      "coords": [
        34.6651,
        135.5133
      ],
      "tags": [
        "步行"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】由蚤之市沿生玉町的住宅街向南步行。\n【下車】約 3–5 分鐘到和sai（生玉町 5 番，估算）。\n【車資】免費（步行）。\n【備案】下雨可撐傘慢行，路程很短。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "隨時",
      "price": "免費（步行）",
      "website": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "walk",
        "from": "生國魂蚤之市",
        "to": "和sai",
        "fromEventId": null,
        "toEventId": null,
        "operator": null,
        "line": null,
        "durationMin": 5,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "id": "evt_d2_05",
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
      "note": "【今次】午餐；谷町九丁目古民家和食。\n【Tabelog】3.57（106 則評價）\n【攻略】古民家改建的和食店，主打天然魚，對日本酒有講究；午市點當日魚料理定食，配一杯冷酒。\n【預約】用 Tabelog 網上預約 12:00 一位；只訂座位或選不寫人數下限的午市，不要選「魚鍋套餐」（2 名起）。約 12 月中 Tabelog 開放訂位；套餐要前一日訂，網上不能指定座位。\n【實用】星期一 11:30–15:00（L.O. 14:00），星期二、三休；13:15 出發，步行約 5 分鐘到谷町九丁目站。\n【備案】訂不到就 11:30 開門時直接去問一人座位。",
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
      "id": "trp_d2_06",
      "day": 2,
      "time": "13:20",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "前往大國町（地鐵千日前線 → 御堂筋線）",
      "cityId": "osaka",
      "address": "大阪地鐵谷町九丁目站 千日前線 2 號月台",
      "addressLocal": "Osaka Metro 谷町九丁目駅 2番線（千日前線・野田阪神方面）",
      "coords": [
        34.6656,
        135.5168
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】由和sai步行約 5 分鐘到谷町九丁目站（估算）；千日前線 2 號月台，往野田阪神方向。\n【轉車】難波站轉御堂筋線 1 號月台（往天王寺方向），坐 1 個站到大國町。\n【下車】約 13:31 到大國町站，2 號出口向西步行約 6 分鐘到山中酒之店。\n【車資】IC ¥190，ICOCA 拍卡。\n【備案】錯過就搭下一班，千日前線約 5–7 分鐘一班。",
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
        "from": "谷町九丁目",
        "to": "大國町",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵",
        "line": "千日前線 → 御堂筋線",
        "durationMin": 11,
        "stopCount": 3,
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
      "note": "【今次】空堀商店街散步＋昆布老店。\n【歷史】「空堀」即豐臣秀吉 1594 年築大坂城外圍防線「惣構」時挖的無水護城壕，地名一直沿用；這一帶在二戰空襲中倖免，所以留下大量戰前長屋和窄巷，坡道就是當年城郭台地的邊緣。\n【攻略】由松屋町一端沿空堀商店街向東慢行，沿途是長屋改建的小店和本地老商店，坡道多，慢慢走。土居是創業百多年的昆布老店，只用天然真昆布，可請店員介紹熬高湯用和直接食用的分別。天然真昆布（寸切）30g ¥550，輕身易帶，適合買回香港自用；講究一點可買按量計價的一本撰（每 100g ¥2,500）。\n【實用】2/8 星期一營業；16:50 離開，步行約 10 分鐘到長堀居酒屋（估算）。",
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
      "note": "【今次】晚餐；大阪名居酒屋。\n【Tabelog】3.78（488 則評價；居酒屋 WEST 百名店 2026）\n【攻略】大阪居酒屋的標竿級名店，以嚴選食材、刺身及比內地雞料理聞名。招牌蟹膏可樂餅（蟹味噌コロッケ）必點；刺身約 ¥1,300 起，清酒一杯約 ¥850 起。說出喜歡的口味，請店方按料理配全國地酒，先冷酒配刺身，再燙酒配雞料理。\n【預約】用 Tabelog 網上預約，選吧枱一人位；約 12 月中 Tabelog 開放訂位，約 2 星期前一定要訂好。\n【注意】2026 年 8 月起星期一改為營業（17:00–22:00）、星期三休，所以 2/8（一）照常營業；出發前一星期再看店家的臨時休息通知。\n【實用】沒有招牌：是一間白色倉庫風格的獨棟房子，晚上不易認出，先存好地圖位置；由玉造站步行約 10 分鐘，由昆布土居步行約 10 分鐘（估算）。可用信用卡、電子錢包。\n【備案】訂不到就改去 Ponshutagram The Bar（谷町六丁目，星期一 18:00 開，Tabelog 網上訂座位；一人只訂座位，不訂套餐）。",
      "phone": "+81-6-6768-0515",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "星期一、二、四、五 17:00–22:00；六 13:00–22:00；逢星期三、日及假期休",
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
      "note": "【今次】早餐；麵包店。\n【Tabelog】3.72（1,082 則評價；パン WEST 百名店 2026）\n【今次留下的早餐】全程只保留兩頓專程去的早餐，這是其一：麵包百名店，就在酒店步行 3 分鐘。\n【攻略】用國產小麥的麵包百名店，早上有每日麵包 3 款＋沙律＋小菜＋飲品或湯的早餐套餐。\n【實用】07:30 開，星期三、四休；店內用餐至 19:00。不收信用卡，可用 PayPay 或現金。由酒店步行約 3 分鐘（估算）；09:55 出發去谷町四丁目站。",
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
      "title": "前往近鐵奈良（地鐵中央線 → 近鐵奈良線）",
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
      "note": "【上車】谷町四丁目站 1 號月台，中央線往生駒方向（直通近鐵京阪奈線）。\n【轉車】生駒站轉近鐵奈良線快速急行（往近鐵奈良方向），同站轉月台。\n【下車】約 10:51 到近鐵奈良站，東改札 2 號出口出站，沿登大路北側向東步行約 5 分鐘到奈良縣立美術館（估算）。\n【車資】IC ¥860，ICOCA 拍卡。\n【備案】錯過就搭下一班；亦可在谷町九丁目轉近鐵上本町，乘快速急行直達近鐵奈良。",
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
        "mode": "subway",
        "from": "谷町四丁目",
        "to": "近鐵奈良",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵／近鐵",
        "line": "中央線 → 近鐵奈良線快速急行",
        "durationMin": 47,
        "stopCount": 13,
        "liveApi": null
      }
    },
    {
      "id": "evt_d3_17",
      "day": 3,
      "time": "11:00",
      "timeHint": "morning",
      "type": "sight",
      "title": "奈良縣立美術館",
      "cityId": "nara",
      "address": "日本奈良縣奈良市登大路町10-6",
      "addressLocal": "奈良県奈良市登大路町10-6 奈良県立美術館",
      "coords": [
        34.686,
        135.8324
      ],
      "tags": [
        "美術館",
        "奈良墨",
        "和紙"
      ],
      "moodColor": "#6B7F7A",
      "note": "【今次】特別展「傳統文化的現在：墨與和紙的世界」（伝統文化の現在 墨と和紙の世界）。\n【攻略】奈良墨佔全國約九成產量，配上吉野手漉和紙：展出四位當代作家的作品，加上職人工具和影片，看懂一塊墨、一張紙怎樣做出來。看完可以想想在泉勇齋附近的老店買一塊奈良墨做手信。\n【實用】2027/1/16–3/14；09:00–17:00（入場至 16:30），逢星期一休（2/9 星期二照開）；一般 ¥1,200，門票可刷卡就用信用卡，另帶備現金。約 55 分鐘。11:55 出發，經東向商店街步行約 15 分鐘到岡田（估算）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "09:00–17:00（入場至 16:30）；逢星期一休",
      "price": "一般 ¥1,200",
      "website": "https://www.pref.nara.lg.jp/n044/p105072.html",
      "cost": {
        "amount": 1200,
        "currency": "JPY",
        "category": "ticket"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d3_05",
      "day": 3,
      "time": "12:15",
      "timeHint": "afternoon",
      "type": "food",
      "title": "日本料理 岡田（おか田）",
      "cityId": "nara",
      "address": "日本奈良縣奈良市今御門町26-2 Nori 大廈 1 樓",
      "addressLocal": "奈良県奈良市今御門町26-2 Noriビル今御門1F 日本料理 おか田",
      "coords": [
        34.6805,
        135.8303
      ],
      "tags": [
        "懷石",
        "奈良",
        "可預約"
      ],
      "moodColor": "#A0785A",
      "note": "【今次】午餐；奈良日本料理名店的午市懷石。\n【Tabelog】3.82（79 則評價）\n【攻略】用午市價錢吃奈良最高分的日本料理之一：大和野菜、季節魚和奈良地酒，¥8,000 套餐已經很完整。13 座，以吧枱為主。\n【預約】Tabelog 網上可訂 1 位（頁面另寫 2〜8 名），選 12:15 吧枱；約 12 月中 Tabelog 開放訂位。\n【實用】13:40 出發，向東南步行約 20 分鐘到奈良春日山酒造（估算）。\n【備案】訂不到可改割烹 松喜（まつ㐂）（TableCheck 網上訂）或Harishin（はり新）（網上訂）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "星期二至六 11:30–14:00（L.O. 13:00）、18:00–22:00；星期一只開晚市；星期日及假期休",
      "price": "午市套餐 ¥8,000／¥12,000（稅及服務費已含）",
      "website": "https://tabelog.com/nara/A2901/A290101/29011807/",
      "cost": {
        "amount": 8000,
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
      "time": "14:00",
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
      "note": "【今次】試飲與買酒（舊八木酒造，代表酒「升平」）。\n【攻略】奈良町東南、高畑一帶的老酒藏（舊八木酒造），代表酒「升平」。商店已遷往隔鄰的新建築，營業時間內可免費試飲；2 月正值釀酒季。可比較「升平」純米酒和當季新酒，再挑 1–2 支四合瓶帶回。\n【注意】酒藏參觀暫停（重開日期未定），今次只試飲和在商店買酒；試飲不用預約。\n【實用】由岡田步行約 20 分鐘（估算）。14:25 出發，向西步行約 15 分鐘到奈良町熱鬧之家（估算）。",
      "phone": "+81-742-26-2300",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "平日 09:00–17:00；逢星期六、日及假期休",
      "price": "試飲免費；酒藏參觀暫停",
      "website": "https://narakasugayama-shuzo.co.jp/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d3_18",
      "day": 3,
      "time": "14:40",
      "timeHint": "afternoon",
      "type": "sight",
      "title": "奈良町熱鬧之家（奈良町にぎわいの家）",
      "cityId": "nara",
      "address": "日本奈良縣奈良市中新屋町5",
      "addressLocal": "奈良県奈良市中新屋町5 奈良町にぎわいの家",
      "coords": [
        34.6777,
        135.8302
      ],
      "tags": [
        "町家",
        "大正建築",
        "免費"
      ],
      "moodColor": "#6B7F7A",
      "note": "【今次】1917 年古董商大隅家的町家，免費參觀。\n【攻略】主屋、離屋和土藏都保留大正時代的樣子：臨街的格子窗、可以看到天空的挑高廚房、坐在緣側看小庭院；比格子之家更大、生活感更強，兩間連看就明白奈良町商家怎樣過日子。\n【實用】09:00–17:00，逢星期三休（2/9 星期二照開）；免費；脫鞋入內。約 1 小時，15:40 出發，步行約 5 分鐘到格子之家（估算）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "09:00–17:00；逢星期三休",
      "price": "免費",
      "website": "https://naramachi-nigiwainoie.jp/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d3_14",
      "day": 3,
      "time": "15:45",
      "timeHint": "afternoon",
      "type": "sight",
      "title": "奈良町格子之家",
      "cityId": "nara",
      "address": "日本奈良縣奈良市元興寺町44",
      "addressLocal": "奈良県奈良市元興寺町44 ならまち格子の家",
      "coords": [
        34.6787,
        135.8297
      ],
      "tags": [
        "歷史",
        "町家",
        "免費"
      ],
      "moodColor": "#6B7F7A",
      "note": "【攻略】按奈良町傳統商家重建、可以自由入內參觀的町家：臨街是密格子窗（從外面看不見裡面，從裡面看得清外面），屋內「通庭（通り庭）」泥地走廊由門口直通後院，中庭、土藏、陡峭的箱形樓梯（箱階段，樓梯下面是抽屜）都保留原樣。看完再看街上其他町家的格子窗、二樓低矮的蟲籠窗（虫籠窓）和掛在門口的老店招牌，就明白奈良町的生活。\n【實用】免費、15 分鐘即可；脫鞋入內。16:00 出發，步行約 5 分鐘到泉勇齋（估算）。",
      "phone": "+81-742-23-4820",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "09:00–17:00；逢星期一（假期則翌日）及假期翌日休",
      "price": "免費",
      "website": "https://www.city.nara.lg.jp/site/shisetsu/6242.html",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d3_08",
      "day": 3,
      "time": "16:05",
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
      "note": "【今次】奈良地酒試飲。\n【攻略】奈良縣地酒專門店，約 120 款奈良酒可付費試飲（每杯 50cc，¥200 起），可一次比較不同酒藏；晚餐前試 3–4 杯即可，選 2–3 款喜歡的帶回酒店／香港。\n【實用】逢星期四休（假期照開），偶有臨時休息。16:45 出發，步行約 12 分鐘到近鐵奈良站（估算）。",
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
      "id": "trp_d3_15",
      "day": 3,
      "time": "16:59",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "前往新大宮（近鐵奈良線）",
      "cityId": "nara",
      "address": "近鐵奈良站 3 號月台",
      "addressLocal": null,
      "coords": [
        34.6844,
        135.8279
      ],
      "tags": [
        "近鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】近鐵奈良站 3 號月台（始發），急行往國際會館方向。\n【下車】約 17:01 到新大宮站，步行約 4 分鐘到杉乃。\n【車資】IC ¥180，ICOCA 拍卡。\n【備案】錯過就搭下一班普通車，同樣 1 個站。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
      "price": "IC ¥180（ICOCA）",
      "website": null,
      "cost": {
        "amount": 180,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "train",
        "from": "近鐵奈良",
        "to": "新大宮",
        "fromEventId": null,
        "toEventId": null,
        "operator": "近鐵",
        "line": "近鐵奈良線急行",
        "durationMin": 2,
        "stopCount": 1,
        "liveApi": null
      }
    },
    {
      "id": "evt_d3_09",
      "day": 3,
      "time": "17:10",
      "timeHint": "evening",
      "type": "food",
      "title": "杉乃 新大宮店（すぎ乃 新大宮店）",
      "cityId": "nara",
      "address": "日本奈良縣奈良市大宮町6-5-14 Princess Court 大廈 2 樓",
      "addressLocal": "奈良県奈良市大宮町6-5-14 プリンセスコートビル2F すぎ乃 新大宮店",
      "coords": [
        34.6853,
        135.8079
      ],
      "tags": [
        "關東煮",
        "日本酒",
        "吧枱",
        "可預約"
      ],
      "moodColor": "#A0785A",
      "note": "【今次】晚餐；關東煮割烹居酒屋。\n【Tabelog】3.61（146 則評價）\n【攻略】對日本酒很講究，常有十四代、而今等名酒；招牌是竹莢魚豬肉涮涮鍋（あじ豚しゃぶしゃぶ），一人可點套餐（¥4,400 起）或單點關東煮配冷酒。\n【預約】用 Tabelog 或 Hot Pepper 網上預約 17:10 吧枱一位；約 12 月中 Tabelog 開放訂位。\n【注意】吧枱可吸加熱式煙。\n【實用】18:45 結帳，步行約 4 分鐘回新大宮站，直接回大阪酒店。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "星期一至六 17:00–24:00（L.O. 23:00）；星期日休",
      "price": "預算 ¥5,000–7,999；附送小菜（付き出し） ¥500",
      "website": "https://tabelog.com/nara/A2901/A290101/29000349/",
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
      "id": "trp_d3_11",
      "day": 3,
      "time": "18:50",
      "timeHint": "evening",
      "type": "transport",
      "title": "前往谷町四丁目（近鐵奈良線 → 谷町線）",
      "cityId": "nara",
      "address": "近鐵新大宮站 2 號月台（往大阪方向）",
      "addressLocal": "近鉄 新大宮駅 2番線（大阪難波・神戸三宮方面）",
      "coords": [
        34.6853,
        135.8079
      ],
      "tags": [
        "近鐵",
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】由杉乃步行約 4 分鐘到近鐵新大宮站；2 號月台，坐往大阪難波或神戶三宮方向的快速急行或急行（約 10–15 分鐘一班，到站搭下一班）。\n【轉車】大阪上本町站下車，經地下通道步行約 7 分鐘到谷町九丁目站，谷町線往大日方向坐 2 個站。\n【下車】約 19:40 到谷町四丁目站，4 號出口步行約 4 分鐘回酒店。\n【車資】IC ¥780（近鐵 ¥590＋地鐵 ¥190），ICOCA 拍卡。\n【備案】錯過或只有普通車就搭下一班快速急行；行李或酒袋重，可由大阪上本町乘的士回酒店（約 2 km，估算約 ¥1,000）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "約 10–15 分鐘一班，到站搭下一班即可",
      "price": "IC ¥780（ICOCA）",
      "website": null,
      "cost": {
        "amount": 780,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "train",
        "from": "新大宮",
        "to": "谷町四丁目",
        "fromEventId": null,
        "toEventId": null,
        "operator": "近鐵／大阪地鐵",
        "line": "近鐵奈良線快速急行 → 谷町線",
        "durationMin": 50,
        "stopCount": 7,
        "liveApi": null
      }
    },
    {
      "id": "evt_d3_12",
      "day": 3,
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
      "note": "【攻略】奈良一整天走得多，泡露天風呂和一人壺湯舒緩雙腳；晚上早點回來，泡完早點休息；夜鳴蕎麥麵 21:30 開始，晚餐吃得飽可以略過。\n【實用】浴場內嚴禁帶食物及酒精飲品，只可帶補充水分的飲品；有紋身不可入浴。",
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
      "id": "trp_d4_30",
      "day": 4,
      "time": "09:05",
      "timeHint": "morning",
      "type": "transport",
      "title": "前往東山（谷町線 → 京阪本線特急 → 地鐵東西線）",
      "cityId": "kyoto",
      "address": "大阪地鐵谷町四丁目站 2 號月台",
      "addressLocal": null,
      "coords": [
        34.6826,
        135.5176
      ],
      "tags": [
        "地鐵",
        "京阪"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】由酒店步行約 4 分鐘到谷町四丁目站，2 號月台，谷町線往大日方向坐 1 個站到天滿橋。\n【轉車】天滿橋站轉京阪本線特急往出町柳方向（約 10 分鐘一班，到站搭下一班），三條站下車，步行到三條京阪站轉地鐵東西線往六地藏方向坐 1 個站。\n【下車】約 10:25 到東山站，出站後沿東大路通向北走到二條通，再向東走到美術館西側入口（約 15 分鐘，估算）。\n【車資】IC ¥900（地鐵 ¥190＋京阪 ¥490＋京都地鐵 ¥220），ICOCA 拍卡。\n【備案】京阪特急錯過就搭下一班；三條站到美術館也可乘的士（約 5 分鐘，估算）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
      "price": "IC ¥900（ICOCA）",
      "website": null,
      "cost": {
        "amount": 900,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "train",
        "from": "谷町四丁目",
        "to": "東山",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵／京阪電鐵／京都市營地鐵",
        "line": "谷町線 → 京阪本線特急 → 東西線",
        "durationMin": 80,
        "stopCount": 10,
        "liveApi": null
      }
    },
    {
      "id": "evt_d4_31",
      "day": 4,
      "time": "10:40",
      "timeHint": "morning",
      "type": "sight",
      "title": "京都市京瓷美術館（京都市京セラ美術館）",
      "cityId": "kyoto",
      "address": "日本京都府京都市左京區岡崎円勝寺町124",
      "addressLocal": "京都府京都市左京区岡崎円勝寺町124 京都市京セラ美術館",
      "coords": [
        35.0125,
        135.7838
      ],
      "tags": [
        "美術館",
        "漆藝",
        "近代建築"
      ],
      "moodColor": "#6B7F7A",
      "note": "【今次】館藏室冬季特集「塗出時光：京都漆藝映照的近代」（時を塗る－京都のうるしが映した近代）。\n【攻略】由明治到戰後的京漆器：從博覽會出品、宮殿用具到日常器物，看漆藝怎樣跟着時代變；同場還有竹內栖鳳、上村松園等館藏名作。1933 年的帝冠樣式本館本身也值得慢慢看。\n【實用】2027/1/15–3/14；10:00–18:00，逢星期一休（2/10 星期三照開）；市外 ¥730，可網上買票，現場門票可刷卡就用信用卡，另帶備現金。11:50 出發，經二條通、東大路通走回東山站。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "10:00–18:00；逢星期一休",
      "price": "館藏室 市外 ¥730",
      "website": "https://kyotocity-kyocera.museum/exhibition/20270115-20270314",
      "cost": {
        "amount": 730,
        "currency": "JPY",
        "category": "ticket"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d4_32",
      "day": 4,
      "time": "12:05",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "前往祇園四條（地鐵東西線 → 京阪本線）",
      "cityId": "kyoto",
      "address": "京都市營地鐵東山站 1 號月台",
      "addressLocal": null,
      "coords": [
        35.0094,
        135.7795
      ],
      "tags": [
        "地鐵",
        "京阪"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】東山站 1 號月台，東西線往太秦天神川方向坐 1 個站到三條京阪。\n【轉車】步行約 3 分鐘到京阪三條站，坐京阪本線往淀屋橋方向（約 10 分鐘一班，到站搭下一班）1 個站。\n【下車】祇園四條站出站，沿四條通過橋向東，再轉入南側小路，步行約 7 分鐘到京都一之傳 祇園 Hanare（估算）。\n【車資】IC ¥400（京都地鐵 ¥220＋京阪 ¥180），ICOCA 拍卡。\n【備案】趕時間可在東山站一帶乘的士到祇園四條（約 10 分鐘，估算）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
      "price": "IC ¥400（ICOCA）",
      "website": null,
      "cost": {
        "amount": 400,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "train",
        "from": "東山",
        "to": "祇園四條",
        "fromEventId": null,
        "toEventId": null,
        "operator": "京都市營地鐵／京阪電鐵",
        "line": "東西線 → 京阪本線",
        "durationMin": 13,
        "stopCount": 2,
        "liveApi": null
      }
    },
    {
      "id": "evt_d4_33",
      "day": 4,
      "time": "12:30",
      "timeHint": "afternoon",
      "type": "food",
      "title": "京都一之傳 祇園 Hanare（京都一の傳 祇園ハナレ）",
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
      "note": "【今次】午餐；百年西京漬老店的祇園新店（2026 年 5 月開）。\n【攻略】點銀鱈藏味噌燒御膳（銀だらの蔵みそ焼御膳）¥4,900：用自家藏味噌醃漬的銀鱈烤得焦香，配小菜、湯和白飯，一人一份剛好。\n【預約】完全預約制，用 Tabelog 網上預約 12:30 那一輪（另有 11:00、14:00，每輪 1 小時），前一日之前訂；約 12 月中 Tabelog 開放訂位，開放時在日曆選 1 名確認。\n【實用】每日營業，不定休。13:30 出發，沿四條通步行約 3 分鐘到漢字博物館。\n【備案】一人訂不到：吉左衛門（吉左エ門、，東山區弁財天町，午市「葫蘆便當」（ひさご弁当）¥6,600，網上寫明 1–8 人可訂，前一日預約；星期三照開，午市禁煙）。",
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
      "id": "trp_d4_34",
      "day": 4,
      "time": "13:30",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "前往漢字博物館（步行）",
      "cityId": "kyoto",
      "address": null,
      "addressLocal": null,
      "coords": [
        35.0034,
        135.7755
      ],
      "tags": [
        "步行"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】由餐廳回到四條通。\n【下車】沿四條通南側向東步行約 3 分鐘到漢字博物館（估算）。\n【車資】免費。\n【備案】下雨可沿四條通有蓋的店舖簷下走。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "隨時",
      "price": "免費（步行）",
      "website": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "walk",
        "from": "京都一之傳 祇園 Hanare",
        "to": "漢字博物館",
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
      "id": "evt_d4_35",
      "day": 4,
      "time": "13:35",
      "timeHint": "afternoon",
      "type": "sight",
      "title": "漢字博物館（漢字ミュージアム）",
      "cityId": "kyoto",
      "address": "日本京都府京都市東山區祇園町南側551",
      "addressLocal": "京都府京都市東山区祇園町南側551 漢字ミュージアム",
      "coords": [
        35.0033,
        135.7766
      ],
      "tags": [
        "博物館",
        "漢字",
        "互動展示"
      ],
      "moodColor": "#6B7F7A",
      "note": "【今次】漢字的歷史與互動展示。\n【攻略】由甲骨文、金文一路看到日本的假名和國字，2 樓有可以動手玩的互動展示；以香港人的漢字底子看，特別容易看出中日寫法的分別。\n【實用】09:30–17:00（入場至 16:30），逢星期一休；平日 ¥900，門票可刷卡就用信用卡，另帶備現金。出發前看一次 2/10 是否開館和當期企畫展內容。約 1 小時，14:45 出發，步行約 5 分鐘到京阪祇園四條站。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "09:30–17:00（入場至 16:30）；逢星期一休",
      "price": "平日 ¥900",
      "website": "https://www.kanjimuseum.kyoto/",
      "cost": {
        "amount": 900,
        "currency": "JPY",
        "category": "ticket"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d4_36",
      "day": 4,
      "time": "14:55",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "前往中書島（京阪本線特急）",
      "cityId": "kyoto",
      "address": "京阪祇園四條站 2 號月台",
      "addressLocal": null,
      "coords": [
        35.0036,
        135.7722
      ],
      "tags": [
        "京阪"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】京阪祇園四條站 2 號月台，京阪本線特急往淀屋橋方向（約 10 分鐘一班，到站搭下一班）。\n【下車】中書島站北口出站，過橋沿濠川向北步行約 5 分鐘到月桂冠大倉記念館（估算）。\n【車資】IC ¥320，ICOCA 拍卡。\n【備案】特急錯過就搭下一班，或坐準急、普通車（多停幾個站，約 20 分鐘）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
      "price": "IC ¥320（ICOCA）",
      "website": null,
      "cost": {
        "amount": 320,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "train",
        "from": "祇園四條",
        "to": "中書島",
        "fromEventId": null,
        "toEventId": null,
        "operator": "京阪電鐵",
        "line": "京阪本線特急",
        "durationMin": 11,
        "stopCount": 3,
        "liveApi": null
      }
    },
    {
      "id": "evt_d4_37",
      "day": 4,
      "time": "15:20",
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
      "note": "【今次】伏見酒文化資料館＋試飲。\n【攻略】1909 年建成的酒藏改建，按工序陳列真實的釀酒工具，看懂伏見「軟水」釀出柔和口感的道理；最後可試飲幾款月桂冠酒，和 2/13 灘五鄉的「男酒」作對照。\n【實用】09:30–16:30（16:00 前入館）；¥600。不收現金，用信用卡（Visa、Mastercard）簽賬。約 50 分鐘，16:15 出發。",
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
      "id": "trp_d4_38",
      "day": 4,
      "time": "16:15",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "前往伏水酒藏小路（步行）",
      "cityId": "kyoto",
      "address": null,
      "addressLocal": null,
      "coords": [
        34.93,
        135.7608
      ],
      "tags": [
        "步行"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】由記念館門口出發，沿酒藏白牆的南濱一帶向北慢慢走。\n【下車】約 10 分鐘到伏水酒藏小路（估算）。\n【車資】免費。\n【備案】下雨可經大手筋商店街有蓋路段走。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "隨時",
      "price": "免費（步行）",
      "website": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "walk",
        "from": "月桂冠大倉記念館",
        "to": "伏水酒藏小路",
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
      "id": "evt_d4_23",
      "day": 4,
      "time": "16:30",
      "timeHint": "evening",
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
      "note": "【今次】伏見清酒試飲；十八藏飲比。\n【攻略】伏見是與灘並列的日本三大酒鄉之一。小路內的日本酒吧「酒藏」有長約 23 米的吧枱，常備伏見 18 間酒藏的 120 款以上；點「十八藏飲比（十八蔵のきき酒セット）」¥3,280，每杯約 20ml、合共約 2 合，按順序由清爽到濃厚，配一碟小菜，和 2/13 灘五鄉的酒作對照。\n【預約】不用預約；想確保吧枱位可用 TableCheck 網上訂座位（要輸入信用卡）。\n【實用】11:00–22:00（L.O. 21:00），星期二只有酒吧營業；2/10 星期三全館營業。時間充裕：先在小路內慢慢逛、吃一兩款小吃，再坐吧枱點飲比；今晚還有晚餐，飲比之後不再加點。18:35 出發，步行約 8 分鐘到京阪中書島站。",
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
      "id": "trp_d4_24",
      "day": 4,
      "time": "18:51",
      "timeHint": "evening",
      "type": "transport",
      "title": "前往谷町六丁目（京阪本線特急 → 谷町線）",
      "cityId": "osaka",
      "address": "京阪中書島站 2 號月台",
      "addressLocal": null,
      "coords": [
        34.9286,
        135.7605
      ],
      "tags": [
        "京阪",
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】京阪中書島站 2 號月台，特急往淀屋橋方向。\n【轉車】天滿橋站下車，轉谷町線 1 號月台（往八尾南方向），坐 2 個站到谷町六丁目。\n【下車】約 19:39 到谷町六丁目站，步行約 5 分鐘到和 Demekin（和デメキン）。\n【車資】IC ¥650（京阪 ¥460＋地鐵 ¥190），ICOCA 拍卡。\n【備案】錯過就搭下一班特急（約 10–15 分鐘一班）；晚餐時間相應延後。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
      "price": "IC ¥650（ICOCA）",
      "website": null,
      "cost": {
        "amount": 650,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "train",
        "from": "中書島",
        "to": "谷町六丁目",
        "fromEventId": null,
        "toEventId": null,
        "operator": "京阪電車／大阪地鐵",
        "line": "京阪本線特急 → 谷町線",
        "durationMin": 48,
        "stopCount": 6,
        "liveApi": null
      }
    },
    {
      "id": "evt_d4_25",
      "day": 4,
      "time": "19:45",
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
      "note": "【今次】晚餐；谷町六丁目和食居酒屋。\n【Tabelog】3.60（183 則評價）\n【攻略】每日 50 款以上菜式，招牌蓮藕饅頭和釜飯，精選日本酒；一人坐吧枱，點兩三款小菜配一合燙酒，作京都日的收結。\n【預約】用 Tabelog 網上預約；一人只訂座位，不訂套餐。約 12 月中 Tabelog 開放訂位。\n【實用】17:00–22:00，星期一休；單點限 2 小時。21:35 前後步行約 5 分鐘到谷町六丁目站。\n【備案】訂不到改去Ponshutagram（ポン酒タグラム）（谷町六丁目，營業至 23:30，同樣只訂座位）。",
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
      "id": "trp_d4_26",
      "day": 4,
      "time": "21:37",
      "timeHint": "night",
      "type": "transport",
      "title": "前往谷町四丁目（地鐵谷町線）",
      "cityId": "osaka",
      "address": "大阪地鐵谷町六丁目站 2 號月台",
      "addressLocal": null,
      "coords": [
        34.6745,
        135.5168
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】由和 Demekin（和デメキン）步行約 5 分鐘到谷町六丁目站（估算）；2 號月台，谷町線往大日方向。\n【下車】谷町四丁目站 4 號出口步行約 4 分鐘回酒店。\n【車資】IC ¥190，ICOCA 拍卡。\n【備案】天氣好可步行回酒店約 15 分鐘（估算）。",
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
      "id": "evt_d4_13",
      "day": 4,
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
      "note": "【今次】休息。\n【攻略】京都日走得多，泡湯前先喝水休息一會；今晚不再外出。\n【實用】浴場內嚴禁帶食物及酒精飲品，只可帶補充水分的飲品；有紋身不可入浴。",
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
      "time": "09:50",
      "timeHint": "morning",
      "type": "transport",
      "title": "前往中崎町（地鐵谷町線）",
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
      "note": "【出門前】酒店 1 樓 Lounge 有住客免費咖啡（06:00–11:00），一杯黑咖啡就出門。\n【上車】谷町四丁目站 2 號月台，谷町線往大日方向。\n【下車】約 09:59 到中崎町站，步行約 5 分鐘到物差（估算）。\n【車資】IC ¥240，ICOCA 拍卡。\n【備案】谷町線約 5–7 分鐘一班。",
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
        "to": "中崎町",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵 Osaka Metro",
        "line": "谷町線",
        "durationMin": 9,
        "stopCount": 4,
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
      "note": "【今次】香薰沙龍；精油按摩。\n【攻略】中崎町個人經營、完全預約制的私人香薰沙龍，用日本產精油品牌「Kaorito（かおりと）」（每批精油送 GC/MS 分析）和法國藥用級精油。建議選 60 分鐘精油按摩（附碳酸乾式頭療）；店內亦有調香體驗（20ml ¥2,700 起）。可問店主想試哪幾款日本產精油。\n【預約】一人店，用網上（Square）預約 10:15。",
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
      "title": "前往今雪（步行）",
      "cityId": "osaka",
      "address": "大阪地鐵中崎町站",
      "addressLocal": "Osaka Metro 中崎町駅 1番線",
      "coords": [
        34.7072,
        135.5056
      ],
      "tags": [
        "步行"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】由物差沿中崎町小路向東步行。\n【下車】約 6 分鐘到今雪（神山町，估算）。\n【車資】免費（步行）。\n【備案】下雨可撐傘，路程很短。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "隨時",
      "price": "免費（步行）",
      "website": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "walk",
        "from": "物差",
        "to": "今雪",
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
      "id": "evt_d5_06",
      "day": 5,
      "time": "11:55",
      "timeHint": "afternoon",
      "type": "food",
      "title": "讚岐烏冬 今雪（讃岐うどん 今雪）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區神山町3-10 清覺大廈 1 樓",
      "addressLocal": "大阪府大阪市北区神山町3-10 清覚ビル1F 讃岐うどん 今雪",
      "coords": [
        34.703,
        135.5061
      ],
      "tags": [
        "烏冬",
        "百名店",
        "可預約"
      ],
      "moodColor": "#A0785A",
      "note": "【今次】午餐；讚岐手打烏冬。\n【Tabelog】3.73（1,166 則評價；烏冬 WEST 百名店）\n【攻略】讚岐烏冬百名店常客，麵條煙韌、高湯清澈；點一碗冷或熱的招牌烏冬，配一杯日本酒。\n【預約】用 Tabelog 網上「只訂座位」11:55 吧枱一位；每人要點一碗烏冬和一杯飲品，遲到 15 分鐘自動取消。約 12 月中 Tabelog 開放訂位。\n【實用】不定休，2/11 假期營業與否看當月發表的休息日。12:50 出發，向北步行約 15 分鐘到今昔館。\n【備案】今雪一人訂不到或休息：改去天神 土山人（南森町站步行 3 分鐘；午市只接受 ¥2,500 以上松花堂セット的預約，用ぐるなび網上訂，見靈感池）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "11:30–14:30（L.O. 14:00）、18:00–21:00；不定休",
      "price": "預算 ¥1,000–1,999（連一杯清酒約 ¥1,800，估算）",
      "website": "https://tabelog.com/osaka/A2701/A270101/27067874/",
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
      "time": "12:50",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "前往天神橋筋六丁目（步行）",
      "cityId": "osaka",
      "address": "今雪門口",
      "addressLocal": "東梅田駅（Osaka Metro 谷町線） 2番線",
      "coords": [
        34.7006,
        135.4998
      ],
      "tags": [
        "步行"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】由今雪向北步行，經扇町公園旁到天神橋筋六丁目。\n【下車】約 15 分鐘到天神橋筋六丁目站 3 號出口，住宅資訊中心大廈 8 樓就是今昔館（估算）。\n【車資】免費（步行）。\n【備案】不想走路可由扇町站坐堺筋線 1 個站到天神橋筋六丁目。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "隨時",
      "price": "免費（步行）",
      "website": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "walk",
        "from": "今雪",
        "to": "天神橋筋六丁目",
        "fromEventId": null,
        "toEventId": null,
        "operator": null,
        "line": null,
        "durationMin": 15,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "id": "evt_d5_08",
      "day": 5,
      "time": "13:10",
      "timeHint": "afternoon",
      "type": "sight",
      "title": "大阪城市生活今昔館（大阪くらしの今昔館）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區天神橋6-4-20 住宅資訊中心大廈 8 樓",
      "addressLocal": "大阪府大阪市北区天神橋6丁目4-20 住まい情報センタービル8階 大阪くらしの今昔館",
      "coords": [
        34.7107,
        135.5115
      ],
      "tags": [
        "歷史",
        "江戶大坂",
        "室內"
      ],
      "moodColor": "#6B7F7A",
      "note": "【攻略】大阪市立住宅博物館（住まいのミュージアム）。9 樓整層按原大重建了 1830 年代（天保年間）大坂的一條町家街：藥店、吳服店、澡堂、長屋、木戶門都可以走進去、打開抽屜和櫥櫃，燈光和音效會由早到晚轉換，像在江戶大坂過一天。8 樓用精細模型講明治、大正、昭和的大阪住宅和街道，包括戰後的天六一帶。\n【攻略】2 月展示「町家的節分與雛人形」一類季節擺設（按當年展示安排）；室內展覽，雨天也合適。\n【實用】2026 年 9 月至 2027 年 1 月 5 日裝修休館，1 月 6 日起重開；2/11 假期照開（逢星期二休）。約 1.5 小時。14:35 離開，下樓即天神橋筋六丁目站。門票可刷卡就用信用卡，另帶備現金。",
      "phone": "+81-6-6242-1170",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "10:00–17:00（入館至 16:30）；逢星期二休（假期照開）",
      "price": "常設展成人 ¥600",
      "website": "https://www.osaka-angenet.jp/konjyakukan/",
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
      "id": "trp_d5_10",
      "day": 5,
      "time": "14:40",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "前往北濱（地鐵堺筋線）",
      "cityId": "osaka",
      "address": "大阪地鐵天神橋筋六丁目站（堺筋線）",
      "addressLocal": "Osaka Metro 天神橋筋六丁目駅（堺筋線）天下茶屋方面",
      "coords": [
        34.7106,
        135.5113
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】天神橋筋六丁目站 1 號月台，堺筋線往天下茶屋方向。\n【下車】約 14:44 到北濱站，2 號出口步行約 5 分鐘到適塾。\n【車資】IC ¥190，ICOCA 拍卡。\n【備案】堺筋線約 5–7 分鐘一班。",
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
        "from": "天神橋筋六丁目",
        "to": "北濱",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵 Osaka Metro",
        "line": "堺筋線",
        "durationMin": 4,
        "stopCount": 3,
        "liveApi": null
      }
    },
    {
      "id": "evt_d5_16",
      "day": 5,
      "time": "14:50",
      "timeHint": "afternoon",
      "type": "sight",
      "title": "適塾",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區北濱3-3-8",
      "addressLocal": "大阪府大阪市中央区北浜3丁目3-8 適塾",
      "coords": [
        34.6905,
        135.5053
      ],
      "tags": [
        "歷史",
        "重要文化財",
        "幕末"
      ],
      "moodColor": "#6B7F7A",
      "note": "【攻略】由北濱站步行約 5 分鐘。1838 年蘭學者兼醫生緒方洪庵開設的私塾，原址原樣保存的町家（國家重要文化財），是大阪市中心唯一倖存的江戶時代學塾建築。福澤諭吉、大村益次郎等 1,000 多名塾生在這裡學荷蘭文和西洋醫學，後來成為大阪大學的源頭。\n【攻略】必看 2 樓塾生大部屋：每人只分到一張榻榻米的位置，按成績排座位，柱上還留著塾生用刀刻下的痕跡；另一間放著當年爭著翻查、被翻到破爛的荷蘭文辭典「Doeff 辭典室（ヅーフ部屋）」。1 樓展示洪庵推廣種痘、對抗霍亂的文物。\n【實用】脫鞋入內要穿襪；樓梯很陡、天花低，小心碰頭。約 40 分鐘（16:00 閉館）。2/11 是假期，適塾照開。15:50 出發，步行約 5 分鐘回北濱站。門票可刷卡就用信用卡，另帶備現金。",
      "phone": "+81-6-6231-1970",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "10:00–16:00；逢星期一（假期照開）及假期翌日（遇六日或假期照開）休",
      "price": "成人 ¥400",
      "website": "https://www.tekijuku.osaka-u.ac.jp/",
      "cost": {
        "amount": 400,
        "currency": "JPY",
        "category": "ticket"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d5_17",
      "day": 5,
      "time": "16:00",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "前往南森町（地鐵堺筋線）",
      "cityId": "osaka",
      "address": "大阪地鐵北濱站 2 號月台",
      "addressLocal": null,
      "coords": [
        34.6914,
        135.5068
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】北濱站 2 號月台，堺筋線往北千里方向。\n【下車】約 16:01 到南森町站，4B 出口出來就是天神橋筋二丁目。\n【車資】IC ¥190，ICOCA 拍卡。\n【備案】天氣好可沿堺筋向北步行約 20 分鐘（估算）。",
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
      "id": "evt_d5_11",
      "day": 5,
      "time": "16:05",
      "timeHint": "afternoon",
      "type": "sight",
      "title": "天神橋筋商店街",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區天神橋 2 丁目（天神橋筋商店街南段）",
      "addressLocal": "大阪府大阪市北区天神橋2丁目 天神橋筋商店街",
      "coords": [
        34.6965,
        135.5117
      ],
      "tags": [
        "散步",
        "商店街",
        "清酒"
      ],
      "moodColor": "#8C8378",
      "note": "【今次】散步（天二 → 天五）。\n【攻略】日本最長的商店街之一（南北約 2.6 公里），由天二向北慢慢走到天五，沿途是江戶時代起的門前町商店街，人情味重、遊客少。可試：街頭可樂餅、玉子燒等小吃（淺嚐即止，留肚晚餐）；可買：老派乾貨、漬物、廚具小物。\n【攻略】只在商店街走，不入沿途宮社境內。\n【清酒】附近有地酒專門店「稻田酒店」（見靈感池），2/11 假期是否營業未確定；休息就改去 JR 大阪站的山中酒之店。\n【實用】約 17:20 走到天五一帶準備晚餐，黑兔食堂就在附近。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "商店街全日開放；各店約 10:00–20:00（各店不同）",
      "price": "免費（小吃約 ¥200–500）",
      "website": "https://www.tenjin123.com/",
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
      "note": "【今次】晚餐；創作中華居酒屋。\n【Tabelog】3.68（849 則評價；居酒屋 WEST 百名店 2026、2025）\n【攻略】以中華料理技法配清酒的人氣居酒屋，連續兩年入選居酒屋百名店。坐吧枱（10 位）點當日推介的中華小菜，請店員按菜式配清酒，價錢比北新地親民。\n【預約】用 Tabelog 網上預約 17:30 吧枱一人位；約 12 月中 Tabelog 開放訂位，假期晚上人多，一開放就訂。\n【實用】星期二及第 4 個星期三休，假期照常營業（2/11 星期四營業）。",
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
      "id": "trp_d6_16",
      "day": 6,
      "time": "09:10",
      "timeHint": "morning",
      "type": "transport",
      "title": "前往三之宮（谷町線 → JR 神戶線新快速）",
      "cityId": "osaka",
      "address": "大阪地鐵谷町四丁目站 2 號月台",
      "addressLocal": null,
      "coords": [
        34.6826,
        135.5176
      ],
      "tags": [
        "地鐵",
        "JR"
      ],
      "moodColor": "#2A7F7A",
      "note": "【出門前】酒店 Lounge 免費咖啡，09:05 前後出門。\n【上車】谷町四丁目站 2 號月台，谷町線往大日方向（約 5 分鐘一班），坐 3 個站到東梅田。\n【轉車】東梅田步行約 6 分鐘到 JR 大阪站 5 號月台，坐 JR 神戶線新快速往姬路方向（約 15 分鐘一班，到站搭下一班）。\n【下車】約 09:52 到 JR 三之宮站，西口出閘後向南步行約 10 分鐘到舊居留地江戶町的 Pearl Pearl Kobe（估算）。\n【車資】IC ¥660（地鐵 ¥240＋JR ¥420），ICOCA 拍卡。\n【備案】錯過新快速就坐下一班或 JR 神戶線快速，晚 15 分鐘到也不影響 11:30 午餐。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
      "price": "IC ¥660（ICOCA）",
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
        "to": "三之宮",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵／JR 西日本",
        "line": "谷町線 → JR 神戶線新快速",
        "durationMin": 42,
        "stopCount": 6,
        "liveApi": null
      }
    },
    {
      "id": "evt_d6_23",
      "day": 6,
      "time": "10:05",
      "timeHint": "morning",
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
      "note": "【今次】神戶珍珠：陳列室直接看單顆珍珠（ルース）和整條珍珠（連材），排出來比較再選。\n【攻略】神戶是日本珍珠加工和批發的集中地；這間位於舊居留地辦公大樓 6 樓的陳列室有網店沒有的商品，可以只看、只問、只報價。參考價：Akoya 耳夾 ¥7,700–8,800、Akoya 戒指約 ¥14,300–16,500、淡水 baby pearl 項鏈 ¥13,200；7.5–8mm Akoya 項鏈連耳環套裝約 ¥153,450。另有換線、改款服務。\n【攻略】防假貨要點：①分清材質：Akoya（あこや）是日本海水養殖、正圓、光澤（テリ）強；淡水珍珠多數不是正圓、便宜但是真珍珠；「貝殼粉核仿珠（貝パール）」「棉珠（コットンパール）」「仿製品（イミテーション）」都是仿製品，外觀完美無瑕、很輕或手感暖的要小心。②「花珠」不是法定標準，只有獨立鑑別機構發出的「花珠鑑別書」才有意義；店家自己發的「保証書」效力較弱。③問珠層厚度（巻き），用放大鏡看鑽孔邊緣有沒有翹起的塗層。④Akoya 調色很常見，「無調色」較貴。⑤耳環兩顆大小、光澤、顏色要一致。⑥看清 K18、K14、Pt900、SV925 刻印。⑦收據寫明珍珠種類、尺寸（mm）和金屬。\n【日文】「これはあこや真珠ですか？淡水ですか？」（這是 Akoya 還是淡水？）；「鑑別書はありますか？」（有鑑別書嗎？）；「巻きは厚いですか？」（珠層厚嗎？）；「左右のバランスを見せてください。」（請讓我看看左右是否配對。）；「免税できますか？パスポートあります。」（可以免稅嗎？我有護照。）\n【實用】10:00–17:00，星期六、日和假日休（2/12 星期五照開）；有英文服務；接受 VISA、Master、JCB、AMEX、銀聯和 PayPay，可用恒生 travel+ 卡。可辦免稅：2026-11-01 起改為退稅方式，購買時出示護照正本、先付含稅價，離境時在關西機場寄艙前到海關確認；珍珠放手提行李。大樓入口不顯眼，認住「東町・江戶町大廈」。11:10 出發，步行約 12 分鐘到伊藤 Grill（估算）。\n【備案】想再比較：北野坂的 SHINYU SHOP（有英文、中文）和 Pearl Clinic；平價手信可去三宮中心街的 PELMOIR（見靈感池）。",
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
      "id": "trp_d6_24",
      "day": 6,
      "time": "11:10",
      "timeHint": "morning",
      "type": "transport",
      "title": "前往伊藤 Grill（步行）",
      "cityId": "kobe",
      "address": null,
      "addressLocal": null,
      "coords": [
        34.69,
        135.1946
      ],
      "tags": [
        "步行"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】東町・江戶町大廈門口出發，沿舊居留地向西經大丸神戶店一帶步行（估算約 12 分鐘）。\n【下車】元町通 1 丁目伊藤 Grill 門口。\n【車資】免費。\n【備案】下雨可經大丸神戶店和元町商店街有蓋路段走；如改吃 Propeller，由陳列室步行約 5 分鐘到三宮・花時計前站旁（11:00 入座，要在 10:50 前離開陳列室）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "隨時",
      "price": "免費（步行）",
      "website": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "walk",
        "from": "Pearl Pearl Kobe",
        "to": "伊藤 Grill",
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
      "id": "evt_d6_17",
      "day": 6,
      "time": "11:30",
      "timeHint": "morning",
      "type": "food",
      "title": "伊藤 Grill（伊藤グリル）",
      "cityId": "kobe",
      "address": "日本兵庫縣神戶市中央區元町通1-6-6",
      "addressLocal": "兵庫県神戸市中央区元町通1-6-6 伊藤グリル",
      "coords": [
        34.6884,
        135.188
      ],
      "tags": [
        "洋食",
        "百名店",
        "可預約"
      ],
      "moodColor": "#A0785A",
      "note": "【今次】午餐；1923 年創業的神戶洋食老店。\n【Tabelog】3.68（495 則評價；洋食 WEST 百名店 2025）\n【攻略】正宗「神戶味道」：炸牛排（ビフカツ）、燉牛舌，平日也有日替午餐；坐吧枱看廚師在鐵板前工作。\n【預約】用 Tabelog 網上預約；午市只訂座位，11:30 一位。約 12 月中 Tabelog 開放訂位，網上名額有限，一開放就訂。\n【實用】另收 10% 服務費。星期五 11:30–13:30（L.O.），星期二、三休，另有不定休（2 月休息日約前月底發表）。12:30 出發，步行約 7 分鐘到神戶市立博物館（估算）。今早已買珍珠的話，袋子小心放好，博物館有儲物櫃。\n【備案】一人訂不到：改去 Propeller 牛扒（三宮・花時計前站旁，11:00 入座（要在 10:50 前離開珍珠陳列室），店方寫一人可訂，用 Tabelog 或 Hot Pepper 網上訂；離博物館約 8 分鐘，見靈感池）。Gyu-ru Le Monde（ギュール ルモンテ）的套餐 2 人起、另收 10% 服務費，一人不適合訂套餐。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "星期五 11:30–13:30（L.O.）；星期二、三休，另有不定休",
      "price": "午市 ¥4,000–4,999（估算）＋10% 服務費",
      "website": "https://tabelog.com/hyogo/A2801/A280102/28000847/",
      "cost": {
        "amount": 4400,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d6_08",
      "day": 6,
      "time": "12:40",
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
      "note": "【今次】特別展「大梵高展：阿爾勒的吊橋（大ゴッホ展 アルルの跳ね橋）」（2027/2/6–5/30）；今日留足 4 小時。\n【攻略】展品來自荷蘭庫勒－慕勒美術館（Kröller-Müller），第 II 期集中梵高在阿爾勒、聖雷米和奧維爾的晚年畫作。必看：《阿爾勒的吊橋（朗格魯瓦橋）》（1888 年 3 月）——被視為荷蘭國寶，很少借出國外，約 70 年來首次在日本展出；《夜間普羅旺斯的鄉間小路》（1890 年 5 月）；《約瑟夫．魯蘭肖像》（1889 年 2–3 月）；《悲傷的老人（在永恆之門）》（1890 年 5 月）；《盛開的栗樹》（1890 年 5 月）。\n【攻略】出發前在 e-tix 買普通觀覽券預售票 ¥2,600（賣到 2/5 23:59 日本時間；有英文介面、接受國際信用卡，QR 碼以電郵寄出）；開展後窗口只賣當日票 ¥2,800。平日不用日時預約，可能要排隊。\n【攻略】博物館本身是 1935 年的舊橫濱正金銀行神戶支店，希臘神殿式大柱是舊居留地地標，進館前看一眼。\n【實用】2/12 星期五開到 20:00（19:30 前入場）。12:40 入館、約 16:40 出館，約 4 小時慢慢看完第 II 期晚年作品；中段可在館內休息區坐一坐。第 I 期約 53 萬人次，下午 14:00 前後人最多。出館後步行約 5 分鐘到南京町。",
      "phone": "+81-78-391-0035",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "09:30–17:30（星期五、六至 20:00）；展室入場至閉館前 30 分鐘；逢星期一休（星期一為假期則開館）",
      "price": "大梵高展 預售 ¥2,600（至 2/5 23:59 日本時間）；當日票 ¥2,800",
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
      "id": "evt_d6_18",
      "day": 6,
      "time": "16:45",
      "timeHint": "afternoon",
      "type": "sight",
      "title": "南京町春節祭",
      "cityId": "kobe",
      "address": "日本兵庫縣神戶市中央區榮町通1-3（南京町廣場）",
      "addressLocal": "兵庫県神戸市中央区栄町通1-3 南京町広場",
      "coords": [
        34.688,
        135.1884
      ],
      "tags": [
        "節慶",
        "春節",
        "免費"
      ],
      "moodColor": "#6B7F7A",
      "note": "【今次】春節祭（2027/2/7、2/11–2/14）；看完梵高展後順路。\n【攻略】神戶華僑的春節活動：舞獅「採青」由南京町廣場周邊店舖出發，另有舞台表演；各店有春節限定小吃。2/12 是平日，人流比週末少。小吃淺嚐即止，留肚晚餐。\n【實用】免費；各日節目約 1 月發表，出發前看當日時間表。18:10 出發，步行約 15 分鐘到播州地酒 HINO。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "春節祭期間，節目時間約 1 月公布",
      "price": "免費（小吃另計）",
      "website": "https://www.nankinmachi.or.jp/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d6_19",
      "day": 6,
      "time": "18:10",
      "timeHint": "evening",
      "type": "transport",
      "title": "前往播州地酒 HINO（步行）",
      "cityId": "kobe",
      "address": null,
      "addressLocal": null,
      "coords": [
        34.688,
        135.1884
      ],
      "tags": [
        "步行"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】由南京町廣場向北，經元町商店街、JR 元町站東口一帶走。\n【下車】約 15 分鐘到北長狭通 2 丁目的播州地酒 HINO（TSK 三宮大廈 4 樓，估算）。\n【車資】免費（步行）。\n【備案】改去稻妻（イナズマ）的話，由南京町步行約 5–7 分鐘就到。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "隨時",
      "price": "免費（步行）",
      "website": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "walk",
        "from": "南京町",
        "to": "播州地酒 HINO",
        "fromEventId": null,
        "toEventId": null,
        "operator": null,
        "line": null,
        "durationMin": 15,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "id": "evt_d6_20",
      "day": 6,
      "time": "18:30",
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
      "note": "【今次】晚餐；一人慢慢喝兵庫地酒。\n【Tabelog】3.64（251 則評價；居酒屋 WEST 百名店 2024–2026）\n【攻略】常備兵庫地酒 150 款以上，以播州為主，也有灘五鄉的酒；點刺身五點和冬季播州關東煮，請店員按口味配酒，比較播州和明天灘五鄉的分別。\n【預約】用 Tabelog 網上預約 18:30 吧枱一位；店方寫「前一個月 15 日左右開始接受」，即約 1/15 開放。\n【實用】星期一至六 18:00–22:00，星期日休；另收席料 ¥500（包お通し）。22:00 打烊前離店，步行約 7–8 分鐘到 JR 三之宮站。\n【備案】訂不到改去稻妻（日本酒バル・米屋 イナズマ，JR 元町站步行 3 分鐘，離南京町最近；Tabelog 或ヒトサラ網上訂，見靈感池）。",
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
      "id": "trp_d6_21",
      "day": 6,
      "time": "22:00",
      "timeHint": "night",
      "type": "transport",
      "title": "前往谷町四丁目（JR 神戶線新快速 → 谷町線）",
      "cityId": "kobe",
      "address": "JR 三之宮站",
      "addressLocal": null,
      "coords": [
        34.6946,
        135.1955
      ],
      "tags": [
        "JR",
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】由播州地酒 HINO 步行約 7–8 分鐘到 JR 三之宮站；JR 神戶線新快速往大阪方向（約 15 分鐘一班，車程約 21 分鐘，到站搭下一班）。\n【轉車】大阪站下車，步行約 10 分鐘到東梅田站 1 號月台，谷町線往八尾南方向坐 3 個站。\n【下車】谷町四丁目站 4 號出口步行約 4 分鐘回酒店。\n【車資】IC ¥660（JR ¥420＋地鐵 ¥240），ICOCA 拍卡。\n【備案】阪急神戶三宮站乘阪急神戶本線到大阪梅田（約 30–38 分鐘，IC ¥330），步行到東梅田轉谷町線；錯過地鐵就由大阪站乘的士到谷町四丁目，約 10–15 分鐘（估算）。出發前再看一次 2/12（星期五）尾班車時間。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "22:00 打烊前離店後搭車；最遲 22:45 前離開三宮",
      "price": "IC ¥660（ICOCA）",
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
        "from": "三之宮",
        "to": "谷町四丁目",
        "fromEventId": null,
        "toEventId": null,
        "operator": "JR 西日本／大阪地鐵",
        "line": "JR 神戶線新快速 → 谷町線",
        "durationMin": 50,
        "stopCount": 6,
        "liveApi": null
      }
    },
    {
      "id": "evt_d6_14",
      "day": 6,
      "time": "23:00",
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
      "note": "【今次】休息。\n【攻略】今晚喝了酒，回酒店先喝水休息；想泡湯就明早 06:00 後再泡（大浴場開到 10:00）。\n【實用】浴場內嚴禁帶食物及酒精飲品，只可帶補充水分的飲品；有紋身不可入浴。",
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
      "note": "【出門前】酒店 1 樓 Lounge 有住客免費咖啡（06:00–11:00，紙杯可帶走），今天試飲多，出門前可在樓下 KOHYO 或便利店買個飯糰墊胃。\n【上車】由酒店步行約 4 分鐘到谷町四丁目站 4 號出口；2 號月台，谷町線往大日方向，建議坐前／中段車廂，東梅田轉阪神較近。\n【轉車】東梅田站下車，站內步行約 6 分鐘到阪神大阪梅田站 2 號月台（始發），乘阪神本線特急往須磨浦公園方向到魚崎。\n【下車】魚崎站步行約 10 分鐘到菊正宗酒造記念館（估算）。\n【車資】IC ¥540（地鐵 ¥240＋阪神 ¥300），ICOCA 拍卡。\n【備案】阪神特急約 10 分鐘一班；錯過就搭下一班。",
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
        "記念館",
        "試飲"
      ],
      "moodColor": "#6B7F7A",
      "note": "【今次】菊正宗酒造記念館（平日開放，2/13 星期六照開）。\n【攻略】菊正宗以「生酛」辛口出名。記念館展示舊酒藏的釀酒工具（國家重要有形民俗文化財），有季節生原酒試飲和酒藏雪糕；記念館限定「奉献」「菊絵徳利」適合作手信。\n【額外】藏開日往年在 2 月第一個星期六（2026 年是 2/7），2027 年很可能是 2/6，Dav 那時還未到；如 12 月宣布在 2/13 舉行，就順道參加（10:00–15:00，免費新酒試飲、酒粕湯）。\n【實用】逢星期二休。11:25 出發，步行約 7 分鐘到浜福鶴吟釀工房（估算）。",
      "phone": "+81-78-854-1029",
      "whatsapp": null,
      "line": null,
      "messenger": "https://m.me/kikumasamune.jp",
      "openHours": "09:30–16:30（入館至 16:00）；逢星期二休",
      "price": "免費入場；部分試飲收費",
      "website": "https://www.kikumasamune.co.jp/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d7_20",
      "day": 7,
      "time": "11:25",
      "timeHint": "morning",
      "type": "transport",
      "title": "前往浜福鶴吟釀工房（步行）",
      "cityId": "kobe",
      "address": null,
      "addressLocal": null,
      "coords": [
        34.7086,
        135.2679
      ],
      "tags": [
        "步行"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】菊正宗酒造記念館門口出發，向南步行約 7 分鐘（估算）。\n【下車】浜福鶴吟釀工房門口（魚崎南町）。\n【車資】免費。\n【備案】下雨可在記念館門口截的士，約 3 分鐘（估算）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "隨時",
      "price": "免費（步行）",
      "website": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "walk",
        "from": "菊正宗酒造記念館",
        "to": "浜福鶴吟釀工房",
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
      "id": "evt_d7_04",
      "day": 7,
      "time": "11:35",
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
      "note": "【今次】小山本家酒造，隔著玻璃看釀酒。\n【攻略】灘五鄉中少數可以看到真實釀酒現場的酒藏：隔著玻璃看蒸米、製麴、醪發酵和榨酒，2 月釀造季最有看頭。入口處可免費試飲生酒；付費試飲處可比較吟釀、大吟釀。可買工房限定、按量販售的秘藏酒帶回香港。\n【實用】免費入場，10 人以下不用預約；由菊正宗步行約 7 分鐘（估算）。12:08 離開，步行約 8 分鐘到阪神魚崎站（估算）。逢星期一休，星期一為假期則翌日休（2/13 星期六照開）。",
      "phone": "+81-78-411-8339",
      "whatsapp": null,
      "line": "https://lin.ee/YbByNGl",
      "messenger": "https://m.me/hamafukutsuru",
      "openHours": "10:00–17:00（免費試飲至 16:50；付費試飲 L.O. 16:15）；逢星期一休（星期一為假期則翌日休）",
      "price": "免費入場；生酒免費試飲；付費試飲按酒款收費",
      "website": "https://www.hamafukutsuru.co.jp/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d7_16",
      "day": 7,
      "time": "12:20",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "前往西宮（阪神本線）",
      "cityId": "kobe",
      "address": "阪神魚崎站 1 號月台",
      "addressLocal": null,
      "coords": [
        34.7138,
        135.2686
      ],
      "tags": [
        "阪神"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】由浜福鶴步行約 8 分鐘到阪神魚崎站（估算）；1 號月台（大阪梅田方向），坐快速急行或特急（約 10 分鐘一班，到站搭下一班），約 7 分鐘。\n【下車】阪神西宮站；出閘後向南步行約 20 分鐘到辰馬本家酒造（建石町，估算），或在站前坐巴士到「交通公園前」再步行約 5 分鐘。\n【車資】IC ¥200，ICOCA 拍卡。\n【備案】阪神特急、快速急行約 10 分鐘一班，錯過搭下一班；人多或下雨可在阪神西宮站乘的士，約 5 分鐘（估算）。",
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
        "from": "魚崎",
        "to": "西宮",
        "fromEventId": null,
        "toEventId": null,
        "operator": "阪神電鐵",
        "line": "阪神本線快速急行",
        "durationMin": 7,
        "stopCount": 2,
        "liveApi": null
      }
    },
    {
      "id": "evt_d7_16",
      "day": 7,
      "time": "12:50",
      "timeHint": "afternoon",
      "type": "food",
      "title": "辰馬本家酒造 白鹿",
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
      "note": "【今次】午餐；白鹿一年一度的「西宮藏開」（往年 2 月第 2 個星期六，10:00–15:00）。\n【攻略】重點是當日限定的無濾過生原酒：2026 年有純米大吟釀鮮榨無過濾生原酒、純米糯米四段釀鮮榨無過濾生原酒、純米鮮榨生酒三款，全部有料試飲；另有藏開限定瓶裝酒 1 款，沒有福箱。午餐在飲食攤解決：壽司、粕汁、出汁卷蛋，配新酒剛好；酒造唄表演可留意。\n【實用】免費入場、不用預約；只收現金，帶散紙和保冷袋。人多時會限制入場，13:00 後人流較少。2027 年日期約 12 月中發表。如 2027 年藏開主題不合，就改去酒林（さかばやし）備案。14:25 出發，步行約 10 分鐘到酒博物館（估算）。\n【備案】藏開不在 2/13 或取消，就改去酒林（さかばやし）「御影膳（みかげ膳）」（用 Hot Pepper 網上訂 13:15）：浜福鶴之後由阪神魚崎坐到石屋川，下午接神戶酒心館東明藏、白鶴酒造資料館，由 JR 住吉經尼崎到北新地（見靈感池）。",
      "phone": "+81-798-32-2727",
      "whatsapp": null,
      "line": null,
      "messenger": "https://m.me/hakushika.tatsuumahonke",
      "openHours": "往年 10:00–15:00（2027 年日期約 12 月中發表）",
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
      "id": "trp_d7_17",
      "day": 7,
      "time": "14:25",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "前往酒博物館（步行）",
      "cityId": "kobe",
      "address": null,
      "addressLocal": null,
      "coords": [
        34.7292,
        135.3358
      ],
      "tags": [
        "步行"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】藏開會場門口出發，向北步行約 10 分鐘到鞍掛町（估算）。\n【下車】酒博物館（白鹿記念酒造博物館）門口。\n【車資】免費。\n【備案】下雨或酒袋太重，可在會場附近截的士，約 3 分鐘（估算）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "隨時",
      "price": "免費（步行）",
      "website": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "walk",
        "from": "辰馬本家酒造",
        "to": "酒博物館",
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
      "id": "evt_d7_18",
      "day": 7,
      "time": "14:35",
      "timeHint": "afternoon",
      "type": "sight",
      "title": "酒博物館（酒ミュージアム）",
      "cityId": "kobe",
      "address": "日本兵庫縣西宮市鞍掛町8-21",
      "addressLocal": "兵庫県西宮市鞍掛町8-21 酒ミュージアム（白鹿記念酒造博物館）",
      "coords": [
        34.7278,
        135.3378
      ],
      "tags": [
        "清酒",
        "歷史",
        "博物館"
      ],
      "moodColor": "#6B7F7A",
      "note": "【今次】白鹿記念酒造博物館：「酒蔵館」＋「記念館」。\n【攻略】酒蔵館用明治時代的舊酒藏改建，按釀酒季節陳列真實的木桶、酒槽和工具，看懂西宮「宮水」和灘酒的關係；記念館有季節展覽。藏開的熱鬧之後，在這裏慢慢看、坐一坐。\n【實用】10:00–17:00（入館至 16:30），逢星期二休；共通券 ¥500。館內有 ¥100 退還式儲物櫃，可暫放酒袋。15:45 出發，步行約 3 分鐘到白鹿 Classics。門票可刷卡就用信用卡，另帶備現金。",
      "phone": "+81-798-33-0008",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "10:00–17:00（入館至 16:30）；逢星期二休",
      "price": "記念館＋酒蔵館共通券 ¥500",
      "website": "https://sake-museum.jp/",
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
      "id": "evt_d7_19",
      "day": 7,
      "time": "15:50",
      "timeHint": "afternoon",
      "type": "shop",
      "title": "白鹿 Classics（白鹿クラシックス）",
      "cityId": "kobe",
      "address": "日本兵庫縣西宮市鞍掛町7-7",
      "addressLocal": "兵庫県西宮市鞍掛町7-7 白鹿クラシックス",
      "coords": [
        34.7285,
        135.3383
      ],
      "tags": [
        "清酒",
        "直營店",
        "即場入瓶"
      ],
      "moodColor": "#8C8378",
      "note": "【今次】白鹿直營店；不趕時間，買酒、稍作休息。\n【攻略】店內即場入瓶的「即場入瓶（量り売り）」原酒（しぼりたて原酒、辛口各 ¥1,265）只在這裏買到；另有直營店限定「西宮郷」系列（大吟釀生貯藏酒、純米吟釀生貯藏酒、特別純米山田錦）。GAJO 晚餐有 8 款配對酒，下午只買不喝。\n【實用】商店 10:00–18:00，逢星期二休（餐廳午市 L.O. 14:30，下午不用）。16:40 出發，步行約 15 分鐘到阪神西宮站。",
      "phone": "+81-798-35-0286",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "商店 10:00–18:00；逢星期二休",
      "price": "即場入瓶（量り売り）原酒 ¥1,265 起",
      "website": "https://classics.hakushika.co.jp/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d7_10",
      "day": 7,
      "time": "16:40",
      "timeHint": "evening",
      "type": "transport",
      "title": "前往北新地（阪神本線直通特急）",
      "cityId": "kobe",
      "address": "白鹿 Classics 門口 → 阪神西宮站",
      "addressLocal": "阪神 西宮駅 2番線（大阪梅田方面）",
      "coords": [
        34.7285,
        135.3383
      ],
      "tags": [
        "阪神"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】由白鹿 Classics 步行約 15 分鐘到阪神西宮站（估算）；2 號月台，坐直通特急或特急往大阪梅田（約 10 分鐘一班，到站搭下一班；月台以站內顯示為準），車程約 16 分鐘。\n【下車】阪神大阪梅田站，經地下街向南步行約 10 分鐘到北新地雅釀（估算）；16:40 出發約 17:25 到，比 17:45 的緩衝時間早約 20 分鐘，可在附近慢慢走，17:55 前到店門口。\n【車資】IC ¥280，ICOCA 拍卡。\n【備案】17:15 前在阪神西宮站上車，仍可在 17:45 前到店；酒袋重可在白鹿 Classics 門口截的士到阪神西宮站（約 5 分鐘，估算）。阪神停駛時，乘的士到 JR 西宮站，坐 JR 神戶線快速到尼崎轉 JR 東西線到北新地（IC ¥320，約 18 分鐘）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "約 10 分鐘一班，到站搭下一班即可",
      "price": "IC ¥280（ICOCA）",
      "website": null,
      "cost": {
        "amount": 280,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "train",
        "from": "西宮",
        "to": "大阪梅田（步行到北新地）",
        "fromEventId": null,
        "toEventId": null,
        "operator": "阪神電鐵",
        "line": "阪神本線直通特急",
        "durationMin": 17,
        "stopCount": 3,
        "liveApi": null
      }
    },
    {
      "id": "evt_d7_14",
      "day": 7,
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
        "網上預約"
      ],
      "moodColor": "#A0785A",
      "note": "【今次】晚餐；日本酒配對套餐（18:00 一齊開始，約 20:15 完）。\n【Tabelog】3.72（78 則評價）\n【攻略】今次行程的日本酒配對大餐：只有 8 個吧枱位，18:00 一齊開始的套餐。店方不靠調味料，以冰溫熟成、發酵及精準火候帶出食材原味。選「日本酒配對（ペアリング）」¥29,000：8 款酒合共約 2 合；想試稀有酒可升級 Premium 配對 ¥40,000，只要料理則 ¥23,500。中午已在白鹿藏開試飲，下午只買不喝。\n【預約】用 TableCheck 網上訂 1 位；約 2026-12-15 18:00（日本時間）開放 2/13 的位，一開放就訂。要登記信用卡（只作預先授權，餐費當日在店內付）。取消費：2/10 起收 50%、2/11 起 70%、2/12 起 100%；遲到 15 分鐘當作取消。Tabelog 寫「土曜不定休」，訂位前再看一下 2/13 有沒有休息。\n【備案】2/13 當日休息：改去北新地的馳走屋純平（見靈感池），只在 Tabelog 有網上一人空位時才訂。\n【實用】TableCheck 要填有沒有食物過敏、確認不搽濃烈香水；遲到會減少菜式。服裝 smart casual。餐費在店內用恒生 travel+ 實體卡簽（店方收主要信用卡）。",
      "phone": "+81-50-3145-9210",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "星期六 12:00–14:15、18:00–20:15（一齊開始）；土曜不定休；星期日及假期休",
      "price": "日本酒配對套餐 ¥29,000（稅及服務費全包）；只要料理 ¥23,500；Premium 日本酒配對 ¥40,000",
      "website": "https://www.tablecheck.com/ja/gajo",
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
      "id": "trp_d7_15",
      "day": 7,
      "time": "20:20",
      "timeHint": "evening",
      "type": "transport",
      "title": "前往谷町四丁目（步行＋地鐵谷町線）",
      "cityId": "osaka",
      "address": "北新地 雅釀門口 → 大阪地鐵東梅田站 1 號月台",
      "addressLocal": null,
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
      "id": "evt_d7_12",
      "day": 7,
      "time": "20:50",
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
      "note": "【攻略】今日藏開試飲加配對晚餐，回酒店先喝水、休息半小時；想泡湯就泡短一點，或明早再泡。\n【實用】浴場內嚴禁帶食物及酒精飲品，只可帶補充水分的飲品；有紋身不可入浴。",
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
      "id": "evt_d8_19",
      "day": 8,
      "time": "09:30",
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
        "朝湯",
        "慢活"
      ],
      "moodColor": "#9AA8A3",
      "note": "【今次】最後一個整天，酒店慢慢起身。\n【攻略】不用趕：先上 13 樓泡朝湯，再在 Lounge 喝免費咖啡，執一執行李。\n【實用】大浴場 15:00–翌日 10:00，10:00 前泡完；10:40 出門。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "大浴場 15:00–翌日 10:00",
      "price": "住客免費",
      "website": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d8_20",
      "day": 8,
      "time": "10:40",
      "timeHint": "morning",
      "type": "transport",
      "title": "前往谷町九丁目（地鐵谷町線）",
      "cityId": "osaka",
      "address": "大阪地鐵谷町四丁目站 1 號月台",
      "addressLocal": null,
      "coords": [
        34.6826,
        135.5176
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】由酒店步行約 4 分鐘到谷町四丁目站；1 號月台，谷町線往八尾南方向（約 5 分鐘一班）。\n【下車】谷町九丁目站出站，向東步行約 8 分鐘到 Ajikuraya（小橋町，估算）。\n【車資】IC ¥190，ICOCA 拍卡。\n【備案】天氣好可由酒店步行約 25 分鐘（估算）。",
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
      "id": "evt_d8_04",
      "day": 8,
      "time": "11:00",
      "timeHint": "morning",
      "type": "food",
      "title": "Ajikuraya 大阪燒（お好み焼き あじくらや）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市天王寺區小橋町13-18 Richheim Arte 上本町 1 樓",
      "addressLocal": "大阪府大阪市天王寺区小橋町13-18 リッチハイムアルテ上本町1F お好み焼き あじくらや",
      "coords": [
        34.6665,
        135.524
      ],
      "tags": [
        "大阪燒",
        "百名店",
        "可預約"
      ],
      "moodColor": "#A0785A",
      "note": "【今次】午餐；大阪燒百名店。\n【Tabelog】3.59（570 則評價；お好み焼き 百名店 2025）\n【攻略】上本町的大阪燒名店，全是鐵板枱，店員在面前煎好；點經典豬肉大阪燒或午市定食。\n【預約】用 Hot Pepper「只訂座位（席のみ予約）」網上訂 11:00 一位（1 名起），約 12 月中開放訂位，當天 11:00 前截止；只訂位而沒有通知就不到，每人收 ¥3,000。\n【實用】70 座，沒有吧枱；混雜時限坐 90 分鐘。12:10 前後結帳，步行約 8 分鐘回谷町九丁目站。\n【備案】沒有位就改去 Imanara（炭と蕎麦と酒 今なら 谷町本店，谷町六丁目，星期日 12:00 開，用 Tabelog 或 Hot Pepper 網上訂，見靈感池）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "每日 11:00–24:00（L.O. 23:30）；只在年末年始休",
      "price": "午市 ¥1,000–1,999（午市定食，白飯大盛免費）",
      "website": "https://tabelog.com/osaka/A2701/A270205/27103780/",
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
      "id": "trp_d8_21",
      "day": 8,
      "time": "12:15",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "前往伊丹（谷町線 → 阪急神戶本線 → 伊丹線）",
      "cityId": "osaka",
      "address": "大阪地鐵谷町九丁目站 2 號月台",
      "addressLocal": null,
      "coords": [
        34.6651,
        135.5175
      ],
      "tags": [
        "地鐵",
        "阪急"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】由 Ajikuraya 步行約 8 分鐘到谷町九丁目站；2 號月台，谷町線往大日方向坐 5 個站到東梅田。\n【轉車】東梅田步行約 10 分鐘到阪急大阪梅田站，坐阪急神戶本線（約 10 分鐘一班）到塚口，轉阪急伊丹線（始發）到伊丹。\n【下車】約 13:12 到阪急伊丹站，步行約 6 分鐘到白雪長壽藏（估算）。\n【車資】IC ¥480（地鐵 ¥240＋阪急 ¥240），ICOCA 拍卡。\n【備案】錯過就搭下一班；在塚口等伊丹線約 10 分鐘一班。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
      "price": "IC ¥480（ICOCA）",
      "website": null,
      "cost": {
        "amount": 480,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "train",
        "from": "谷町九丁目",
        "to": "阪急伊丹",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵／阪急電鐵",
        "line": "谷町線 → 阪急神戶本線 → 阪急伊丹線",
        "durationMin": 44,
        "stopCount": 13,
        "liveApi": null
      }
    },
    {
      "id": "evt_d8_22",
      "day": 8,
      "time": "13:20",
      "timeHint": "afternoon",
      "type": "sight",
      "title": "白雪 Brewery Village 長壽藏（白雪ブルワリービレッジ長寿蔵）",
      "cityId": "osaka",
      "address": "日本兵庫縣伊丹市中央3-4-15",
      "addressLocal": "兵庫県伊丹市中央3-4-15 白雪ブルワリービレッジ長寿蔵",
      "coords": [
        34.7813,
        135.4176
      ],
      "tags": [
        "清酒",
        "伊丹",
        "試飲"
      ],
      "moodColor": "#6B7F7A",
      "note": "【今次】伊丹清酒：小西酒造「白雪」的酒藏資料館、商店和餐廳。\n【攻略】伊丹是清酒「諸白」的發祥地之一，比灘更早出名；長壽藏用江戶時代的酒藏改建。先上 2 樓資料館（約 30 分鐘）看按工序排列的舊釀酒工具，再到商店有料試飲藏元限定酒和自家精釀啤酒，選一兩支四合瓶。如遇「白雪藏祭」（白雪蔵まつり），有鏡開和先到先得的記念枡，人多、部分攤檔只收現金。\n【實用】資料館 11:30–17:00、商店 10:00–19:00、餐廳 11:30–21:00，逢星期二休（2/14 星期日照開）。約 2 小時，15:30 出發。\n【備案】白雪藏祭往年在 2 月第 2 個星期日（2026 年 2/8，10:00–16:00），2027 年日期是推算，約 1 月上旬公佈；不在 2/14 也照常參觀資料館和商店，行程不變。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "資料館 11:30–17:00；商店 10:00–19:00；餐廳 11:30–21:00；逢星期二休",
      "price": "入場免費；試飲約 ¥1,500（估算）",
      "website": "https://www.konishi.co.jp/choujugura/",
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
      "id": "trp_d8_28",
      "day": 8,
      "time": "15:30",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "前往伊丹老松酒造直賣所（步行）",
      "cityId": "osaka",
      "address": null,
      "addressLocal": null,
      "coords": [
        34.7813,
        135.4176
      ],
      "tags": [
        "步行"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】由長壽藏門口出發，沿石板路的酒藏通向南走。\n【下車】約 3 分鐘到伊丹老松酒造直賣所（估算）。\n【車資】免費。\n【備案】下雨可撐傘慢行，路程很短。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "隨時",
      "price": "免費（步行）",
      "website": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "walk",
        "from": "白雪長壽藏",
        "to": "伊丹老松酒造直賣所",
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
      "id": "evt_d8_27",
      "day": 8,
      "time": "15:35",
      "timeHint": "afternoon",
      "type": "shop",
      "title": "伊丹老松酒造直賣所（伊丹老松酒造直売所）",
      "cityId": "osaka",
      "address": "日本兵庫縣伊丹市中央3-1-8",
      "addressLocal": "兵庫県伊丹市中央3-1-8 伊丹老松酒造直売所",
      "coords": [
        34.7807,
        135.417
      ],
      "tags": [
        "伊丹郷町",
        "清酒",
        "試飲"
      ],
      "moodColor": "#8C8378",
      "note": "【今次】伊丹另一間老酒藏的直賣所：試飲、買酒。\n【攻略】1688 年創業，江戶時代獻給將軍的「御免酒」；週末有有料試飲（約 ¥200 一杯），和剛才的白雪對比一下伊丹酒淡麗偏辛的風格，喜歡就買一支四合瓶；門口有釀酒用的地下水。來回只走長壽藏到阪急伊丹站之間這一段石板路和街道，看兩旁的老酒藏白牆和町家。\n【實用】09:30–18:00，公眾假期休息（2/14 星期日照開）。約 30 分鐘，16:05 出發，向西步行約 5 分鐘到阪急伊丹站大樓。\n【備案】已經喝夠就略過試飲，只買酒或看看門口的地下水，提早去超市。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "09:30–18:00；公眾假期休息",
      "price": "有料試飲約 ¥200",
      "website": "https://oimatsu.biz/",
      "cost": {
        "amount": 200,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d8_29",
      "day": 8,
      "time": "16:05",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "前往阪急伊丹站大樓（步行）",
      "cityId": "osaka",
      "address": null,
      "addressLocal": null,
      "coords": [
        34.7807,
        135.417
      ],
      "tags": [
        "步行"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】由老松直賣所門口出發，沿中央三丁目的街道向西走。\n【下車】約 5 分鐘到阪急伊丹站大樓（伊丹 Reita）1 樓（估算）。\n【車資】免費。\n【備案】下雨可撐傘慢行；酒袋重就走慢一點，時間充裕。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "隨時",
      "price": "免費（步行）",
      "website": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "walk",
        "from": "伊丹老松酒造直賣所",
        "to": "阪急伊丹站大樓",
        "fromEventId": null,
        "toEventId": null,
        "operator": null,
        "line": null,
        "durationMin": 5,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "id": "evt_d8_31",
      "day": 8,
      "time": "16:10",
      "timeHint": "afternoon",
      "type": "shop",
      "title": "Ikari 超市 阪急伊丹店（いかりスーパー 阪急伊丹店）",
      "cityId": "osaka",
      "address": "日本兵庫縣伊丹市西台1-1-1 伊丹 Reita 1 樓",
      "addressLocal": "兵庫県伊丹市西台1-1-1 伊丹リータ1F いかりスーパー 阪急伊丹店",
      "coords": [
        34.7801,
        135.4138
      ],
      "tags": [
        "超市",
        "手信",
        "伊丹"
      ],
      "moodColor": "#8C8378",
      "note": "【今次】阪神地區的高級超市：買手信和明早的輕食。\n【攻略】Ikari 是阪神一帶的老牌高級超市，自家品牌的果醬、醬汁、餅乾和調味料包裝精美又輕身，適合做手信；壽司和麵包是這間分店的人氣部門，可買一個麵包做明早機場前的早餐。晚餐 18:00 開始，現在只買不吃。\n【實用】09:30–21:00；在阪急伊丹站大樓 1 樓，上 3 樓就是阪急伊丹站。約 40 分鐘，16:50 上 3 樓坐車。\n【實用】不買要冷藏的東西；果醬、醬汁等液體回酒店後放寄艙行李。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "09:30–21:00",
      "price": "手信約 ¥1,000–2,000（估算，不計入預算）",
      "website": "https://www.ikarisuper.com/info/author/h_itami",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d8_23",
      "day": 8,
      "time": "16:50",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "前往谷町六丁目（阪急伊丹線 → 阪急神戶本線 → 谷町線）",
      "cityId": "osaka",
      "address": "阪急伊丹站",
      "addressLocal": null,
      "coords": [
        34.7801,
        135.4138
      ],
      "tags": [
        "阪急",
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】由超市上 3 樓到阪急伊丹站（始發），伊丹線往塚口（約 10 分鐘一班，到站搭下一班）。\n【轉車】塚口站轉阪急神戶本線往大阪梅田；大阪梅田步行約 10 分鐘到東梅田站 1 號月台，谷町線往八尾南方向坐 4 個站。\n【下車】約 17:40 到谷町六丁目站，6 號出口步行約 2 分鐘到 Ponshutagram（估算）。\n【車資】IC ¥480（阪急 ¥240＋地鐵 ¥240），ICOCA 拍卡。\n【備案】遲了就搭下一班，18:30 前入座即可；酒袋重可由大阪梅田乘的士到谷町六丁目（約 15 分鐘，估算）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，到站搭下一班即可",
      "price": "IC ¥480（ICOCA）",
      "website": null,
      "cost": {
        "amount": 480,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "train",
        "from": "阪急伊丹",
        "to": "谷町六丁目",
        "fromEventId": null,
        "toEventId": null,
        "operator": "阪急電鐵／大阪地鐵",
        "line": "阪急伊丹線 → 阪急神戶本線 → 谷町線",
        "durationMin": 45,
        "stopCount": 12,
        "liveApi": null
      }
    },
    {
      "id": "evt_d8_14",
      "day": 8,
      "time": "18:00",
      "timeHint": "evening",
      "type": "food",
      "title": "Ponshutagram The Bar（ポン酒タグラム The Bar）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區安堂寺町1-3-13 谷町森岡大廈 1 樓",
      "addressLocal": "大阪府大阪市中央区安堂寺町1-3-13 谷町もりおかビル1F ポン酒タグラム The Bar",
      "coords": [
        34.6761,
        135.5184
      ],
      "tags": [
        "日本酒吧",
        "吧枱",
        "可預約"
      ],
      "moodColor": "#A0785A",
      "note": "【今次】晚餐；最後一晚的清酒總結。\n【Tabelog】3.59（191 則評價）\n【攻略】全吧枱 16 座的日本酒吧，每月換一個產地主題，約 30–40 款；點名物下酒菜拼盤，配三四杯小杯比較，作整個旅程的清酒收結。\n【預約】用 Tabelog 網上預約 18:00–18:30 入座一位；一人只訂座位，不訂套餐。約 12 月中 Tabelog 開放訂位。\n【實用】18:00–23:30（L.O. 23:00），無定休；席料 ¥1,000（包一杯酒和一款小菜）。20:30 前後結帳，步行約 2 分鐘到谷町六丁目站，直接回酒店。\n【備案】訂不到改去和 Demekin（和デメキン）（谷町六丁目，星期日 17:00–22:00，一人只訂座位）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "18:00–23:30（L.O. 23:00）；無定休",
      "price": "預算 ¥4,000–4,999（席料 ¥1,000 另計）",
      "website": "https://tabelog.com/osaka/A2701/A270204/27127179/",
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
      "id": "trp_d8_10",
      "day": 8,
      "time": "20:35",
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
      "note": "【上車】由 Ponshutagram 步行約 2 分鐘到谷町六丁目站；2 號月台，谷町線往大日方向。\n【下車】谷町四丁目站 4 號出口步行約 4 分鐘回酒店。\n【車資】IC ¥190，ICOCA 拍卡。\n【備案】天氣好可步行回酒店約 15 分鐘（估算）。",
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
      "time": "20:50",
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
      "note": "【今次】最後一晚。\n【攻略】最後一晚，桑拿＋冷水池＋外氣浴來兩輪。\n【實用】浴場內嚴禁帶食物及酒精飲品，只可帶補充水分的飲品；有紋身不可入浴。泡完回房收拾行李：把今日和前幾天買的清酒用防震包裝好、量行李重量，今晚不再外出。",
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
      "time": "08:30",
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
      "note": "【今次】最後一次朝湯。\n【攻略】朝湯開到 10:00；泡完到 1 樓 Lounge 拿杯免費咖啡（06:00–11:00）；泡完喝免費乳酸菌飲品（05:00–10:00）。\n【實用】浴場內嚴禁帶食物及酒精飲品，只可帶補充水分的飲品；有紋身不可入浴。",
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
      "note": "【上車】由酒店步行約 4 分鐘到谷町四丁目站 4 號出口，帶行李可找升降機出入口（按站內指示）；1 號月台，谷町線往八尾南方向。\n【下車】經地下通道到近鐵上本町／近鐵百貨（估算 5 分鐘）。\n【車資】IC ¥190，ICOCA 拍卡。\n【備案】的士由酒店到近鐵上本町約 10 分鐘（估算）。",
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
      "note": "【今次】地庫 1 樓 和洋酒賣場：最後買酒。\n【攻略】10:00 開門，用約 1 小時補買奈良、大阪地酒（賣場不時有試飲推廣）；要求防震包裝（緩衝材で包んでください）。退稅要帶護照，離境時在機場海關辦理。\n【實用】行李可寄放在大阪上本町站的投幣儲物櫃（大型櫃位置及空位以現場為準）。11:30 前到 2 樓巴士總站。",
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
      "note": "【上車】近鐵上本町 2 樓巴士總站 UH1 乘車處，先在售票機買票（只售單程票）。約 30 分鐘一班，車程約 50 分鐘；11:40 前後到站，到站搭下一班即可。不設預約，先到先上，大件行李交司機放車底。\n【下車】第 1 航廈國際線出發層下車，直接辦理登機。\n【車資】成人 ¥1,800（售票機購買）。\n【備案】谷町九丁目 → 天王寺（谷町線）轉 JR 特急 HARUKA 或關空快速到關西機場（到站搭下一班）。",
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
      "id": "evt_d9_10",
      "day": 9,
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
      "note": "【今次】出境後買酒：機場限定清酒。\n【攻略】手提上機的清酒一定要在出境保安檢查之後買：第 1 航廈 2 樓的 KIX DUTY FREE 是機場直營的大型免稅店（約 2,500㎡），日本酒、燒酎、梅酒齊全，有不少只在機場免稅店發售的限定酒。關西地酒可留意：奈良「梅乃宿」機場限定桐箱純米大吟釀 720ml ¥3,600、大阪「大門」關西國際機場限定純米大吟釀 720ml ¥4,000、大阪「莊之鄉（荘の郷）」免稅店限定大吟釀金標 720ml ¥8,700、大阪「片野櫻」純米大吟釀 花一片 ¥4,300（免稅價，以當日為準）；灘五鄉的白鶴等大廠酒亦有。店內活動區不定期有酒藏試飲，見到就試。\n【攻略】想買的限定酒可以預先網上預訂（出發前 25 日至出發前 3 小時），到專用取貨櫃枱付款，不用排隊，熱門酒不怕賣光。保安檢查前買的清酒，超過 100ml 一律不能帶過保安，一定要在櫃位寄艙前放進寄艙行李，所以寄艙前想清楚。\n【實用】直飛香港不用轉機，免稅酒直接手提上機；保留收據，免稅密封袋（STEB）只在轉機時才需要原封不動。HK Express 手提行李（隨身小物＋手提箱）合共 7kg，在禁區買的免稅酒和手信全部計入，超重要在閘口付費寄艙；酒多就用市區買的、以氣泡紙包好放寄艙（回程已建議加購 32kg）。\n【其他手信】寄艙前（2 樓國內線樓層）：551 蓬萊即蒸豬肉包和燒賣（07:00–21:00），出境區沒有分店，想吃就在寄艙後、過保安前吃，或買作最後小食。出境後（2 樓）：「TASTE OF JAPAN 關西旅日記」和北翼「SOUVENIR 關西旅日記」有機場限定的「Mukashin Kubomi（むか新 くぼみ）」抹茶／可可生朱古力酥餅（關西三機場限定）、京都 Malebranche「茶之菓（茶の菓）」濃茶貓舌餅、Henri Charpentier 金塊盒費南雪；配清酒的鹹點可選帆立貝、蝦、昆布口味的海鮮仙貝。以上都是固體食物，可以手提上機；奶油蛋糕卷之類要冷藏的就不建議。\n【入境香港】清酒、梅酒、葡萄酒等酒精濃度 30% 或以下的酒類不用繳稅；30% 以上的烈酒（例如威士忌）每位 18 歲以上旅客可免稅帶 1 公升，持香港身份證要離港滿 24 小時，超出就走紅通道申報。\n【時間】HK Express 櫃位 12:15 開、14:15 截止，登機閘口 14:45 關。約 12:30 到機場，先到海關確認退稅，再寄艙（珍珠放手提），出境後約 13:05 起逛約 35 分鐘，13:45 午餐，14:30 前到閘口。",
      "phone": "072-455-4195",
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
      "note": "【今次】UO851 回程登機（15:15 起飛）。\n【攻略】2026-11-01 起免稅改為退稅方式：到機場先帶護照和免稅品到海關確認退稅，之後才去 HK Express 櫃位寄艙，再過保安；寄艙後就不能辦。珍珠放手提行李；買酒留到出境後的 KIX DUTY FREE，手提上機。\n【登機流程】約 12:30 到第 1 航廈 4 樓國際線出發大堂 → 海關確認退稅（帶護照、免稅品和收據；免稅品要放在手提或未寄艙的行李）→ HK Express 櫃位辦理登機及寄艙（櫃位截止時間以確認信為準）→ 保安檢查及出境審查 → KIX DUTY FREE 買酒 → 禁區午餐 → 按登機證時間到閘口。\n【航班】HK Express UO851，15:15 起飛，19:00 到香港。回程建議加購 32kg 寄艙（約 HK$430）。\n【實用】退稅重點：退稅款由店舖或其退稅代理退回，不是海關；購物時要登記退款方式（例如恒生 travel+ 卡）；同一張收據的貨品要齊全帶到機場；每間店每日滿 ¥5,000（不含稅）才可退稅。\n【實用】HK Express 客服可用 WhatsApp 聯絡（每日 08:00–20:00；用上方「聯絡」icon）。",
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
    "note": "【重點】新梅田食道街。\n【備案】2/11 中崎町一帶想吃平價立食時順道吃。\n【Tabelog】3.49（約 1,460 則評價）\n【攻略】新梅田食道街代表性的老字號立食串炸店，昭和風味濃厚，椰菜任吃。先點若雞、豬肉、蓮藕等經典串，再試口碑推介的巨型大蝦串；醬汁共用，切勿二度蘸醬。配一杯生啤或熱清酒，第一晚輕鬆收結。\n【實用】全店站立（約 70 位），不設預約，一人最自然；可用信用卡及 IC 卡；2025 年 4 月起全店禁煙。星期日及假期營業至 21:30。",
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
    "note": "【重點】蛋包飯始祖。\n【攻略】1922 年創業的洋食店，被視為蛋包飯（オムライス）的發祥店。本店是 1950 年建成的數寄屋造日式老屋，座敷圍著小中庭，在和室吃洋食很有味道。必點招牌雞肉蛋包飯（チキンオムライス）：蛋皮薄、內裡半熟，配特製番茄醬；配菜炸雞（唐揚げ）亦是名物。\n【備案】2/8 和sai 沒有位時，可坐千日前線到難波，步行到心齋橋吃；一般席不設預約，直接去。",
    "type": "food",
    "cityId": "osaka",
    "address": "日本大阪府大阪市中央區西心齋橋2-7-27",
    "addressLocal": "大阪府大阪市中央区西心斎橋2-7-27 北極星 心斎橋本店",
    "coords": [
      34.6697,
      135.4988
    ],
    "nearEventId": "trp_d2_06",
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
    "note": "【重點】燙酒專門。\n【攻略】女店主中村美穗由大阪名酒舖「山中酒店（山中酒の店）」自立，2020 年由博勞町搬到谷町六丁目古民家；米芝蓮 Bib Gourmand（2022–2025）。常備 60–70 款適合燙熱的西日本清酒，說出口味請店員挑選即可。必吃三款前菜（¥600）、招牌炙燒鴨里脊（たたき）；店主推介生原酒熱燗配芝士。一人女客比例高，最後一晚的清酒總結。\n【備案】2/8 長堀訂不到時同區的燙酒名店；沒有網上預約，只可 16:00 開門時直接去問一人吧枱位。",
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
    "openHours": "星期一至六 16:00–22:00；日 15:00–22:00；逢星期三及每月第 3 個星期四休",
    "price": "預算 ¥6,000–7,999",
    "website": "https://tabelog.com/osaka/A2701/A270204/27117661/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_004",
    "title": "奈良國立博物館",
    "tag": "RAINY",
    "note": "【重點】名品展。\n【攻略】下雨時的室內選擇：名品展看奈良的佛教美術，青銅器館（中國古代青銅器）免費入場，可以慢慢看。館內商店有文具和明信片，輕身好帶作手信。\n【備案】2/9 下雨時：2/6–3/14 有「新收藏品」特集；佛像館翻新閉館中，青銅器館免費參觀。",
    "type": "sight",
    "cityId": "nara",
    "address": "日本奈良縣奈良市登大路町50",
    "addressLocal": "奈良県奈良市登大路町50 奈良国立博物館",
    "coords": [
      34.6831,
      135.8383
    ],
    "nearEventId": "evt_d3_17",
    "phone": "+81-50-5542-8600",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "09:30–17:00；逢星期一休",
    "price": "名品展一般 ¥700",
    "website": "https://www.narahaku.go.jp/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_007",
    "title": "太閤之湯（太閤の湯）",
    "tag": "TIRED",
    "note": "【重點】有馬溫泉。\n【攻略】有馬溫泉最大型的日歸溫泉設施，一次過泡齊金泉、銀泉，入館費已包岩盤浴，可以慢慢泡一個下午；館內有食堂和休息區，泡累了可以躺一躺。\n【備案】今次 2/12 已不去有馬；日後想泡久一點時：金泉、銀泉、岩盤浴一次；2/12（星期五）營業。阪急巴士來回＋入館套票 ¥3,870。",
    "type": "rest",
    "cityId": "kobe",
    "address": "日本兵庫縣神戶市北區有馬町池之尻292-2",
    "addressLocal": "兵庫県神戸市北区有馬町池の尻292-2 有馬温泉 太閤の湯",
    "coords": [
      34.7978,
      135.2512
    ],
    "nearEventId": null,
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
    "note": "【重點】北新地。\n【攻略】北新地小吧枱居酒屋，冬天主打河豚、甲魚，配全國地酒；一個人坐吧枱最自然，請店主按當晚菜式配酒。介意煙味要留意：店內可吸加熱煙。\n【備案】2/13 雅釀訂不到或休息時：Tabelog 3.62、居酒屋 WEST 百名店 2026；吧枱 7 位，河豚、甲魚及地酒；單點另收 ¥1,100 前菜費，可吸加熱煙。\n【預約】只在 Tabelog 有網上空位時才用；沒有網上名額就不去。",
    "type": "food",
    "cityId": "osaka",
    "address": "日本大阪府大阪市北區曾根崎新地1-5-25 5 樓",
    "addressLocal": "大阪府大阪市北区曽根崎新地1-5-25 ジェイ・プライド梅田永楽ビル5F 馳走や純平",
    "coords": [
      34.6979,
      135.4977
    ],
    "nearEventId": "evt_d7_14",
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
    "note": "【重點】展覽「詞語重疊之地」（コトバの重なる場所）。\n【攻略】美術館主體在地下，入口的銀色鋼管結構是拍照位。今次展覽「詞語重疊之地」以文字與語言為主題，適合慢慢看；就在中之島美術館旁，人多時可即時改去。\n【備案】2/11 適塾之後想看展覽時，由適塾步行約 15 分鐘（估算）；展期至 2027/3/14，假期照開。",
    "type": "sight",
    "cityId": "osaka",
    "address": "日本大阪府大阪市北區中之島4-2-55",
    "addressLocal": "大阪府大阪市北区中之島4-2-55 国立国際美術館",
    "coords": [
      34.6917,
      135.4922
    ],
    "nearEventId": "evt_d5_16",
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
    "note": "【重點】乾式頭療。\n【攻略】完全私人房的乾式頭療（ドライヘッドスパ），不用濕頭、不用洗頭，做完可以直接出街；行了一整天、頭重腳累時很適合，75 分鐘一節。\n【備案】物差沙龍約不到時的備案：乾式頭療不用濕頭，做完可直接外出；全私人房。",
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
    "note": "【重點】新梅田食道街。\n【攻略】「竹輪半熟蛋天婦羅冷汁烏冬（ちく玉天ぶっかけ）」的發祥店：大條竹輪天婦羅＋半熟蛋天婦羅，配蔥、薑和檸檬，點冷的最吃得出麵的煙韌。先在門外食券機買券（只收現金）再排隊，麵賣完即止，早點去。\n【備案】2/11 今雪和土山人都沒有位時：Tabelog 3.77、烏冬 WEST 百名店 2024；不設預約、只收現金，星期二休（2/11 星期四營業）。",
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
    "title": "十三市",
    "tag": "SHOP",
    "note": "【重點】每月 13 日的小型市集；只逛攤位。\n【攻略】古道具、花和小物攤檔，比大型古董市更有街坊味；慢慢翻古道具攤，找有個性又不貴的舊皮件或小物，帶現金和環保袋。\n【攻略】本趣不入：社殿；市集在境內舉行，只在攤位一帶走動。\n【備案】2/13 未排入：開市時間未定，而且灘五鄉一整天加 18:00 雅釀，沒有空檔。想去就 09:00 前後先到（阪急梅田 → 十三 3 分鐘，¥170），逛 30 分鐘再由阪急十三坐神戶本線到御影，菊正宗改為最後一站。",
    "type": "shop",
    "cityId": "osaka",
    "address": "日本大阪府大阪市淀川區十三東2-6-39",
    "addressLocal": "大阪府大阪市淀川区十三東2-6-39 十三市",
    "coords": [
      34.7205,
      135.4846
    ],
    "nearEventId": "trp_d7_02",
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
    "id": "ins_014",
    "title": "白雪 長壽藏（伊丹）",
    "tag": "TIME",
    "note": "【重點】藏祭。\n【攻略】白雪（小西酒造）在伊丹的酒藏祭，可試新酒、逛攤位；平日去亦可，長壽藏有商店和博物館，可試飲和買限定酒。\n【備案】藏祭往年在 2 月第 2 個星期日舉行；JR 大阪 → 伊丹約 16 分鐘，與行程各日路線不順，只作參考。",
    "type": "sight",
    "cityId": "osaka",
    "address": "日本兵庫縣伊丹市中央3-4-15 白雪 Brewery Village 長壽藏",
    "addressLocal": "兵庫県伊丹市中央3-4-15 白雪ブルワリービレッジ長寿蔵",
    "coords": [
      34.7811,
      135.4172
    ],
    "nearEventId": null,
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
    "id": "ins_019",
    "title": "Charkha（チャルカ）",
    "tag": "SHOP",
    "note": "【重點】東歐古紙與手工藝雜貨。\n【攻略】專賣東歐古紙、舊鈕扣和手工藝品的小店，小物價錢親民，適合找有個性的小手信；營業日少，去之前先確認。\n【備案】只在星期四至六 13:00–18:00 營業，常有長假和臨時休息；行程中只有 2/11（星期四假期）日子對得上，要先確認當天營業才去。",
    "type": "shop",
    "cityId": "osaka",
    "address": "日本大阪府大阪市中央區瓦屋町1-5-23",
    "addressLocal": "大阪府大阪市中央区瓦屋町1-5-23 チャルカ",
    "coords": [
      34.6716,
      135.515
    ],
    "nearEventId": null,
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
    "id": "ins_023",
    "title": "稻田酒店",
    "tag": "SHOP",
    "note": "【重點】天神橋筋六丁目，地酒專門店＋立飲（角打ち）。\n【攻略】最接近住吉酒販風格的一間：全國地酒及燒酎專門酒屋，有季節限定及稀有銘柄，店內設立飲試酒區，配自家關東煮和每日手作小菜；不用訂位，歡迎一人來。例如：福井「一本義 辛爽系 無濾過 吟釀」一升瓶 ¥4,400（含稅）。可在 2/11 黑兔食堂晚餐前提早 30 分鐘到，先在立飲區喝一兩杯再買酒。\n【實用】店舖 11:00–21:30、立飲區 14:00–21:00；假期營業時店舖至 20:30、立飲區至 20:00；星期日休，假期不定休，2/11 假期是否營業未確定，出發前一星期再查。店舖可用現金、信用卡、PayPay，立飲區只收現金。\n【備案】如 2/11 休息，改去 JR 大阪站 Eki Marché 的山中酒之店（11:00–23:00，見靈感池）買酒和試飲。天神橋筋六丁目站步行約 3 分鐘。",
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
    "openHours": "店舖 11:00–21:30／立飲區 14:00–21:00；假期營業時店舖至 20:30、立飲區至 20:00；星期日休，假期不定休",
    "price": "立飲區按杯計（只收現金）；一升瓶 ¥4,400 例",
    "website": "https://osaka-saketen.jp/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_024",
    "title": "山中酒之店 Eki Marché 大阪店（山中酒の店）",
    "tag": "SHOP",
    "note": "【重點】JR 大阪站，自助試飲機。\n【攻略】大阪地酒專門老店「山中酒之店」的梅田分店：自助式日本酒試飲機常設 54 款，可外賣、可堂飲。試了喜歡再買，就像住吉酒販的試飲台。2/10 早上在大阪站轉車時就在旁邊，回程想買酒時最順路。\n【實用】11:00–23:00（L.O. 22:00），JR 大阪站 1 樓櫻橋口附近。每杯價錢以店內標示為準（本店試飲幣 ¥350／60ml 作參考）。",
    "type": "shop",
    "cityId": "osaka",
    "address": "日本大阪府大阪市北區梅田3-1-1 JR 大阪站 Eki Marché 大阪",
    "addressLocal": "大阪府大阪市北区梅田3-1-1 JR大阪駅 エキマルシェ大阪 山中酒の店",
    "coords": [
      34.7019,
      135.4963
    ],
    "nearEventId": "trp_d6_16",
    "phone": "+81-6-6348-3955",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "11:00–23:00（L.O. 22:00）",
    "price": "試飲每杯以店內標示為準",
    "website": "https://osaka.ekimaru.com/shopguide/detail/55",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_026",
    "title": "Stand Utsutsuyo（スタンド うつつよ）",
    "tag": "SOLO",
    "note": "【重點】谷町四丁目，自家濁酒醸造所。\n【攻略】米芝蓮必比登日本酒料理店 Utsutsuyo（日本酒餐昧 うつつよ）的立飲店，店內附設大阪市內首間濁酒醸造所（大阪どぶろく醸造所）；自家濁酒每杯 ¥800，3 款 70ml 套裝 ¥2,200，另有每月飲比套裝 45ml×3 ¥980 起，濁酒可買瓶裝外賣。由酒店步行約 5 分鐘；2/10 由和 Demekin（和デメキン）回酒店前，想再喝一杯或買一枝濁酒外賣時順路。\n【實用】星期一至五 17:00–22:30，六及假期 16:00–22:30；星期日、假期的星期一休；不設預約。谷町四丁目站 6 號出口步行約 5 分鐘。",
    "type": "food",
    "cityId": "osaka",
    "address": "日本大阪府大阪市中央區鎗屋町1-1-12",
    "addressLocal": "大阪府大阪市中央区鎗屋町1-1-12 スタンド うつつよ",
    "coords": [
      34.683,
      135.5157
    ],
    "nearEventId": "trp_d4_26",
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
    "note": "【重點】酒店樓下超市。\n【攻略】酒店隔鄰，步行約 1 分鐘；以鮮魚見稱的關西超市，晚上可買刺身、壽司盒、關東煮和清酒，回房做簡單宵夜。減價貼紙時間不定，一般傍晚後較多。\n【實用】07:00–23:00，不定休。",
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
    "note": "【重點】營業至午夜的超市。\n【攻略】回酒店泡湯前想多買宵夜或酒、樓下 KOHYO 選擇不夠時的後備：營業到 00:00，有食品及酒類；減價時間不定。\n【實用】09:00–翌日 00:00；堺筋本町站 3、6 號出口向南步行約 3 分鐘；由酒店步行約 11 分鐘（估算）。不接受 PiTaPa。",
    "type": "shop",
    "cityId": "osaka",
    "address": "日本大阪府大阪市中央區久太郎町1-7-5",
    "addressLocal": "大阪府大阪市中央区久太郎町1-7-5 ライフ堺筋本町店",
    "coords": [
      34.6807,
      135.5076
    ],
    "nearEventId": "trp_d8_10",
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
    "note": "【攻略】谷町四丁目站步行 1 分鐘，50 款以上日本酒以原價供應，有新政、九平次、鳳凰美田、寫樂等；每月有指定銘柄日（例如第一、第四個星期四「十四代之日」）。連鎖居酒屋。\n【Tabelog】3.37（110 則評價）\n【備案】2/14 Ponshutagram、和 Demekin（和デメキン）都沒有位時：星期日 12:00 開，用網上訂位；吃完步行回酒店。\n【實用】平日 15:00–23:30，六日及假期 12:00–23:30，沒有固定休息日；全席禁煙。單點另收入場費 ¥540；遲到 15 分鐘沒有通知會自動取消訂位。可用信用卡及交通 IC 卡。",
    "type": "food",
    "cityId": "osaka",
    "address": "日本大阪府大阪市中央區谷町4-4-15 谷4 Plaza 1 樓",
    "addressLocal": "大阪府大阪市中央区谷町4-4-15 谷4プラザ1F 日本酒原価酒蔵 谷町4丁目店",
    "coords": [
      34.6806,
      135.5175
    ],
    "nearEventId": "evt_d8_14",
    "phone": "+81-50-5487-1817",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "星期一至五 15:00–23:30；六、日及假期 12:00–23:30（料理 L.O. 22:30）；沒有固定休息日",
    "price": "原價日本酒（每杯價錢按銘柄）",
    "website": "https://tabelog.com/osaka/A2701/A270104/27143338/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_033",
    "title": "天然溫泉 浪花之湯（なにわの湯）",
    "tag": "TIRED",
    "note": "【重點】天六附近大樓天台的天然溫泉。\n【攻略】露天區有源泉湯、壺湯、岩風呂和寢湯，逛完今昔館想泡個大型露天浴時可改來；毛巾可租或買。\n【實用】天神橋筋六丁目站 5 號出口向北步行約 10 分鐘；週末人多，下午 3 點左右較好。",
    "type": "rest",
    "cityId": "osaka",
    "address": "日本大阪府大阪市北區長柄西1-7-31",
    "addressLocal": "大阪府大阪市北区長柄西1-7-31 天然温泉 なにわの湯",
    "coords": [
      34.7154,
      135.5138
    ],
    "nearEventId": "evt_d5_08",
    "phone": "+81-6-6882-4126",
    "whatsapp": null,
    "line": "@911ukflz",
    "messenger": null,
    "openHours": "平日 10:00–翌日 01:00；週末及假期 08:00–翌日 01:00（最後入場 24:00）",
    "price": "週末成人 ¥1,000；平日 ¥850 左右",
    "website": "https://naniwanoyu.com/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_034",
    "title": "大阪中之島美術館",
    "tag": "RAINY",
    "note": "【重點】中之島。\n【攻略】2022 年開館的黑色方盒建築，收藏大阪近現代美術和設計；看完可沿中之島河岸散步。\n【備案】2/11 適塾之後想多看一間美術館時：展覽「創作女性的 100 年」（2027/1/9–3/22），逢星期一休，2/11 假期照開；用網上預售票，入場至 16:30。由適塾步行約 15 分鐘（估算）。",
    "type": "sight",
    "cityId": "osaka",
    "address": "日本大阪府大阪市北區中之島4-3-1",
    "addressLocal": "大阪府大阪市北区中之島4-3-1 大阪中之島美術館",
    "coords": [
      34.6924,
      135.4914
    ],
    "nearEventId": "evt_d5_16",
    "phone": "+81-6-4301-7285",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "10:00–17:00（入場至 16:30）；逢星期一休",
    "price": "一般 ¥1,900（前售 ¥1,700）",
    "website": "https://nakka-art.jp/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_035",
    "title": "本家柴藤",
    "tag": "FOOD",
    "note": "【重點】大阪鰻魚老字號。\n【Tabelog】3.57（465 則評價）\n【攻略】點招牌鰻魚飯配肝吸湯；大阪做法把鰻魚夾在飯中間蒸焗，口感比關東做法更軟。\n【備案】2/11 不在行程內：逢星期日、一休，假期營業與否要看店方通知；沒有網上預約，只可直接去。大阪做法將鰻魚夾在飯中間蒸焗的「大阪鰻魚飯（大阪まむし）」。\n【注意】店方要求不用香水、不用有香味的柔順劑。",
    "type": "food",
    "cityId": "osaka",
    "address": "日本大阪府大阪市中央區高麗橋2-5-2",
    "addressLocal": "大阪府大阪市中央区高麗橋2-5-2 本家柴藤",
    "coords": [
      34.69,
      135.5046
    ],
    "nearEventId": "evt_d5_16",
    "phone": "+81-6-6231-4810",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "10:30–17:00 L.O.（18:00 關門）；逢星期日、一休",
    "price": "大阪鰻魚飯「菊」¥4,920；預算 ¥6,000–7,999",
    "website": "https://tabelog.com/osaka/A2701/A270102/27000005/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_036",
    "title": "Wayanpuri 大阪梅田店（ワヤンプリ）",
    "tag": "TIRED",
    "note": "【重點】頭療專門店。\n【攻略】選 60 分鐘頭皮護理療程，療程前說明想集中放鬆頸膊。\n【備案】2/11 物差約不到時：頭皮診斷、毛孔清洗和頸膊護理的私人房療程；用網上預約（Hot Pepper Beauty 或店方網上表格），假期 10:00–19:00。60 分鐘 ¥12,000。",
    "type": "rest",
    "cityId": "osaka",
    "address": "日本大阪府大阪市北區梅田2-4-7 櫻橋 Nikko 大廈 7 樓",
    "addressLocal": "大阪府大阪市北区梅田2-4-7 桜橋ニコービル7F ヘッドスパ専門店ワヤンプリ 大阪梅田店",
    "coords": [
      34.6984,
      135.4943
    ],
    "nearEventId": "evt_d5_04",
    "phone": "+81-6-6342-5999",
    "whatsapp": null,
    "line": "@dxy4773n",
    "messenger": "https://m.me/wayanpuri.jp",
    "openHours": "平日 11:30–20:30；六 11:00–20:00；日及假期 10:00–19:00；無休",
    "price": "60 分鐘（施術 40 分鐘）¥12,000",
    "website": "https://www.wayanpuri.com/access_umeda.php",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_037",
    "title": "Kiji 本店（お好み焼 きじ 本店）",
    "tag": "FOOD",
    "note": "【重點】大阪燒老店；新梅田食道街。\n【Tabelog】3.66（2,201 則評價；大阪燒 百名店 2025）\n【攻略】坐吧枱看店主在鐵板前煎；點招牌牛筋大阪燒配一杯啤酒或燒酎。\n【備案】2/11 想吃平價大阪燒時：不設預約、只收現金，假日排隊很長；星期日休。吧枱 7 位，一人可坐吧枱。",
    "type": "food",
    "cityId": "osaka",
    "address": "日本大阪府大阪市北區角田町9-20 新梅田食道街 1 樓",
    "addressLocal": "大阪府大阪市北区角田町9-20 新梅田食道街1F お好み焼 きじ 本店",
    "coords": [
      34.7035,
      135.4977
    ],
    "nearEventId": "evt_d5_04",
    "phone": "+81-6-6361-5804",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "星期一至六 11:45–21:15（料理 L.O. 20:30）；星期日休",
    "price": "預算 ¥1,000–1,999；連生啤約 ¥2,200（估算，只收現金）",
    "website": "https://tabelog.com/osaka/A2701/A270101/27000297/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_038",
    "title": "天神 土山人",
    "tag": "FOOD",
    "note": "【重點】石臼磨粉手打蕎麥；南森町。\n【Tabelog】3.58（約 320 則評價；蕎麥 WEST 百名店 2024）\n【攻略】點松花堂便當套餐，配石臼磨粉的手打蕎麥；冷蕎麥最能吃出麵香。\n【備案】2/11 今雪一人訂不到或休息時的午餐：午市只接受 ¥2,500 以上「松花堂便當套餐（松花堂セット）」的預約，用Gurunavi（ぐるなび）網上訂 1 位；星期三休，假期營業按店方時間表。南森町站 4B 出口步行約 3 分鐘，由中崎町沿天神橋筋向南約 15–20 分鐘（估算）。約 12 月中 Tabelog 開放訂位。",
    "type": "food",
    "cityId": "osaka",
    "address": "日本大阪府大阪市北區天神橋2-1-18",
    "addressLocal": "大阪府大阪市北区天神橋2-1-18 天神 土山人",
    "coords": [
      34.6958,
      135.5118
    ],
    "nearEventId": "evt_d5_06",
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "11:00–15:00（L.O. 14:30）；星期三休",
    "price": "午市 ¥1,000–1,999；松花堂便當套餐（松花堂セット） ¥2,500 起",
    "website": "https://tabelog.com/osaka/A2701/A270103/27104346/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_039",
    "title": "鰻 大山（鰻 おおやま）",
    "tag": "FOOD",
    "note": "【重點】有馬溫泉；現烤鰻魚。\n【Tabelog】3.53（34 則評價）\n【攻略】點現烤鰻魚飯；賣完即止，開門時到。\n【備案】今次 2/12 已不去有馬，只作日後參考：沒有網上預約，只可 11:00 開門直接去；賣完即止，信用卡只收 AMEX。",
    "type": "food",
    "cityId": "kobe",
    "address": "日本兵庫縣神戶市北區有馬町1137",
    "addressLocal": "兵庫県神戸市北区有馬町1137 鰻 おおやま",
    "coords": [
      34.7968,
      135.2479
    ],
    "nearEventId": null,
    "phone": "+81-78-958-5375",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "11:00–18:00（賣完即止）；不定休",
    "price": "午市預算 ¥4,000–5,999",
    "website": "https://tabelog.com/hyogo/A2801/A280112/28066508/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_040",
    "title": "金之湯（金の湯）",
    "tag": "TIRED",
    "note": "【重點】有馬名物「金泉」。\n【攻略】茶褐色的「金泉」含鐵和鹽分，浸 10 分鐘左右就出來休息；門口有免費足湯。\n【備案】今次 2/12 已不去有馬：想改去有馬泡湯時，含鐵質和鹽分的茶褐色溫泉，平日 ¥650；第 2、4 個星期二休。泡完在門口一帶走走就好，後面的斜路不用上去。",
    "type": "rest",
    "cityId": "kobe",
    "address": "日本兵庫縣神戶市北區有馬町833",
    "addressLocal": "兵庫県神戸市北区有馬町833 有馬温泉 金の湯",
    "coords": [
      34.7968,
      135.2479
    ],
    "nearEventId": null,
    "phone": "+81-78-904-0680",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "08:00–22:00（最後入場 21:30）；第 2、4 個星期二休",
    "price": "成人平日 ¥650；金銀共通券 ¥1,200",
    "website": "https://arimaspa-kingin.jp/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_042",
    "title": "灰吹屋 西田筆店",
    "tag": "SHOP",
    "note": "【重點】有馬人形筆。\n【攻略】筆尾小人偶在寫字時會冒出來；店家會即場示範，可買一支做手信。\n【備案】今次 2/12 已不去有馬：手工製作、筆尾會冒出小人偶頭的有馬人形筆；逢星期三、四休。",
    "type": "shop",
    "cityId": "kobe",
    "address": "日本兵庫縣神戶市北區有馬町1160",
    "addressLocal": "兵庫県神戸市北区有馬町1160 灰吹屋 西田筆店",
    "coords": [
      34.7963,
      135.2488
    ],
    "nearEventId": null,
    "phone": "+81-78-904-0761",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "10:00–16:00；逢星期三、四休",
    "price": "人形筆 1 支（紙盒）¥3,300；2 支裝 ¥4,900；大號 2 支（木盒）¥9,000",
    "website": null,
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_043",
    "title": "炸豬扒與葡萄酒 日月（トンカツとワイン 日月）",
    "tag": "FOOD",
    "note": "【重點】炸豬扒百名店；吧枱廚師發辦（おまかせ）午市。\n【Tabelog】4.06（309 則評價；炸豬扒百名店 2026）\n【攻略】6 座吧枱廚師發辦，炸豬扒按不同部位分次上，配葡萄酒或日本酒。\n【備案】2/12 想把午餐吃得隆重一點時：星期五午市 11:30 或 13:00 一齊開始，廚師發辦（おまかせ） ¥5,900（另收手續費 ¥390）；只接受 OMAKASE 網上預約，約 2027-01-01 12:00（日本時間）開放 2/12 的位；4 日前起取消收 50%。6 座全是吧枱；到博物館約步行 15 分鐘（估算），選 11:30 那輪才不影響梵高展。",
    "type": "food",
    "cityId": "kobe",
    "address": "日本兵庫縣神戶市中央區中山手通1-22-10 象大廈 5 樓",
    "addressLocal": "兵庫県神戸市中央区中山手通1-22-10 象ビルヂング5F トンカツとワイン 日月",
    "coords": [
      34.6979,
      135.1915
    ],
    "nearEventId": "evt_d6_08",
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "星期五午市 11:30／13:00 一齊開始；星期二、三休",
    "price": "午市廚師發辦（おまかせ） ¥5,900＋手續費 ¥390",
    "website": "https://tabelog.com/hyogo/A2801/A280101/28066651/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_044",
    "title": "Propeller 牛扒（プロペラ）",
    "tag": "FOOD",
    "note": "【重點】牛扒百名店；離博物館最近。\n【Tabelog】3.65（915 則評價；牛扒百名店 2025）\n【攻略】午市點牛扒或漢堡扒定食，坐近鐵板看廚師煎。\n【備案】2/12 伊藤 Grill 一人訂不到時的午餐：午市只接受 11:00 的預約，店方寫一人可訂（お一人様から），用 Tabelog 或 Hot Pepper 網上訂；約 12 月中 Tabelog 開放訂位。三宮・花時計前站步行 1 分鐘，到神戶市立博物館約 8 分鐘；11:00 入座、12:15 吃完就去看展。",
    "type": "food",
    "cityId": "kobe",
    "address": "日本兵庫縣神戶市中央區磯上通8-1-14",
    "addressLocal": "兵庫県神戸市中央区磯上通8-1-14 プロペラ",
    "coords": [
      34.6913,
      135.1961
    ],
    "nearEventId": "evt_d6_17",
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "每日 11:00–15:30；無休",
    "price": "午市 ¥2,000–2,999（估算）",
    "website": "https://tabelog.com/hyogo/A2801/A280101/28040503/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_045",
    "title": "稻妻（日本酒バル・米屋 イナズマ）",
    "tag": "FOOD",
    "note": "【重點】米農家經營的日本酒酒吧（バル）；離南京町最近。\n【Tabelog】3.53（289 則評價）\n【攻略】點網上預約限定的日本酒配對套餐（¥2,980），配炭燒和自家種米的白飯。\n【備案】2/12 播州地酒 HINO 訂不到，或想在南京町留久一點時：50 款以上日本酒，炭燒和自家種米的白飯；網上預約限定「日本酒配對套餐（日本酒ペアリングセット）」¥2,980。用 Tabelog 或Hitosara（ヒトサラ）網上訂，約 12 月中 Tabelog 開放訂位；店方寫 1–2 人坐吧枱。JR 元町站步行 3 分鐘，南京町步行約 5–7 分鐘（估算）。",
    "type": "food",
    "cityId": "kobe",
    "address": "日本兵庫縣神戶市中央區北長狹通3-10-1 KS 大廈 1 樓",
    "addressLocal": "兵庫県神戸市中央区北長狭通3-10-1 KSビル1F 日本酒バル・米屋 イナズマ",
    "coords": [
      34.6919,
      135.1884
    ],
    "nearEventId": "evt_d6_20",
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "平日 18:00–23:00（料理 L.O. 22:00）；不定休",
    "price": "預算 ¥4,000–5,999",
    "website": "https://tabelog.com/hyogo/A2801/A280102/28042842/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_046",
    "title": "Imanara 谷町本店（炭と蕎麦と酒 今なら 谷町本店）",
    "tag": "FOOD",
    "note": "【重點】蕎麥、炭燒、河內鴨和日本酒。\n【Tabelog】3.50（344 則評價）\n【攻略】點河內鴨蕎麥或炭燒拼盤，配一兩杯日本酒。\n【備案】2/14 Ajikuraya 沒有位時的午餐：星期日 12:00–16:00（L.O. 15:30），用 Tabelog 或 Hot Pepper 網上訂座位，約 12 月中 Tabelog 開放訂位；吧枱 10 座，可吸加熱式煙；連鎖店。谷町六丁目站 3 號出口步行 1 分鐘。",
    "type": "food",
    "cityId": "osaka",
    "address": "日本大阪府大阪市中央區谷町6-2-21",
    "addressLocal": "大阪府大阪市中央区谷町6-2-21 炭と蕎麦と酒 今なら 谷町本店",
    "coords": [
      34.6741,
      135.5174
    ],
    "nearEventId": "evt_d8_04",
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "星期日及假期 12:00–16:00；每日 17:00–翌日 02:00",
    "price": "午市 ¥1,000–1,999",
    "website": "https://tabelog.com/osaka/A2701/A270204/27081930/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_047",
    "title": "酒林（さかばやし）",
    "tag": "FOOD",
    "note": "【重點】藏開不在 2/13 或取消時的午餐（Dav 指定備案）。\n【Tabelog】3.48（約 300 則評價）\n【攻略】點御影膳，加自家製手舀豆腐和酒粕雪糕，配福壽生原酒。\n【備案】在 Hot Pepper 網上預約「御影膳（みかげ膳）」¥3,500（1 名起），訂 13:15；已開放訂位，前一日 17:00 截止，前一日 15:00 起取消收全額；逢星期三休。路線：浜福鶴之後由阪神魚崎站坐特急到御影轉普通車到石屋川（IC ¥160），步行約 6 分鐘；推介自家製手舀豆腐（¥680）和酒粕雪糕（¥500）。之後步行到神戶酒心館東明藏和白鶴酒造資料館，由 JR 住吉坐 JR 神戶線快速到尼崎轉 JR 東西線到北新地（約 15 分鐘一班，車程約 27 分鐘，IC ¥410）。",
    "type": "food",
    "cityId": "kobe",
    "address": "日本兵庫縣神戶市東灘區御影塚町1-8-17 神戶酒心館內",
    "addressLocal": "兵庫県神戸市東灘区御影塚町1-8-17 神戸酒心館 蔵の料亭 さかばやし",
    "coords": [
      34.71,
      135.2486
    ],
    "nearEventId": "evt_d7_16",
    "phone": "+81-78-841-2612",
    "whatsapp": null,
    "line": null,
    "messenger": "https://m.me/shushinkan.fukuju",
    "openHours": "午市 11:30–15:00（L.O. 14:30）；星期三休",
    "price": "御影膳（みかげ膳） ¥3,500（Hot Pepper 網上預約，1 名起）",
    "website": "https://www.hotpepper.jp/strJ003599046/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_048",
    "title": "神戶酒心館 東明藏",
    "tag": "TIME",
    "note": "【重點】福壽 FUKUJU 藏元商店。\n【攻略】先免費試飲，再買藏元限定酒和酒粕。\n【備案】走酒林（さかばやし）備案路線時，午餐後順路：免費試飲藏直採生酒和微發泡「FUKUJU KEG DRAFT」，藏元限定酒和酒粕適合帶回香港。10:00–18:30。",
    "type": "shop",
    "cityId": "kobe",
    "address": "日本兵庫縣神戶市東灘區御影塚町1-8-17",
    "addressLocal": "兵庫県神戸市東灘区御影塚町1-8-17 神戸酒心館 蔵元ショップ 東明蔵",
    "coords": [
      34.71,
      135.2486
    ],
    "nearEventId": "evt_d7_16",
    "phone": "+81-78-841-1121",
    "whatsapp": null,
    "line": null,
    "messenger": "https://m.me/shushinkan.fukuju",
    "openHours": "10:00–18:30（1/1–1/3 休）",
    "price": "免費試飲",
    "website": "https://www.shushinkan.co.jp/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_049",
    "title": "白鶴酒造資料館",
    "tag": "TIME",
    "note": "【重點】1743 年創業的白鶴，大正初年的本店壹號藏改建的資料館。\n【攻略】按釀酒工序一路看，最後到試飲區試季節限定酒。\n【備案】走酒林（さかばやし）備案路線時的下午點：按洗米、蒸米、製麴、搾酒工序看真實尺寸的工具和藏人人偶；季節限定酒可免費試一杯。入館免費，最後入館 16:00；之後向北步行約 15 分鐘到 JR 住吉站。",
    "type": "sight",
    "cityId": "kobe",
    "address": "日本兵庫縣神戶市東灘區住吉南町4-5-5",
    "addressLocal": "兵庫県神戸市東灘区住吉南町4丁目5-5 白鶴酒造資料館",
    "coords": [
      34.7136,
      135.2621
    ],
    "nearEventId": "evt_d7_16",
    "phone": "+81-78-822-8907",
    "whatsapp": null,
    "line": null,
    "messenger": "https://m.me/HAKUTSURU.SAKE.BREWING",
    "openHours": "09:30–16:30（最後入館 16:00）；年末年始休",
    "price": "免費入館；高級酒付費試飲",
    "website": "https://www.hakutsuru.co.jp/community/shiryo/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_051",
    "title": "PELMOIR（ペルモワ）",
    "tag": "SHOP",
    "note": "【重點】平價 Akoya 入門珍珠，適合做手信。\n【攻略】揀字母吊墜或細粒耳環做手信；先問是 Akoya 還是淡水珍珠。\n【備案】梵高展後、去南京町之前有空就順路：三宮中心街 2 丁目，各線三宮站向西步行約 5 分鐘。主打 ¥1,000–3,000 的字母吊墜項鏈、護身符造型飾物；另有由珍珠鑽孔開始做飾物的體驗（是否要預約未核實）。\n【實用】11:00–19:00，星期三休（另有臨時休業）；英文服務不明，可以指着商品、用計算機溝通；免稅與否現場問「可以免稅嗎？」（免税できますか？）。",
    "type": "shop",
    "cityId": "kobe",
    "address": "日本兵庫縣神戶市中央區三宮町2-10-23（三宮中心街 2 丁目）",
    "addressLocal": "兵庫県神戸市中央区三宮町2-10-23 ペルモワ",
    "coords": [
      34.6908,
      135.1908
    ],
    "nearEventId": "evt_d6_08",
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "11:00–19:00；星期三休（另有臨時休業）",
    "price": "¥1,000–3,000",
    "website": "https://centergai2.com/shopguide/15_pelmoir/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_052",
    "title": "SHINYU SHOP（真優直營店）",
    "tag": "SHOP",
    "note": "【重點】珍珠卸商直營，有英文、中文服務和珠寶顧問。\n【攻略】可請珠寶顧問把同價位的 Akoya 並排比較光澤和珠層厚度。\n【備案】想再比較才去：北野坂一帶，三宮站步行約 10 分鐘，與日月只隔一條街；可以直接走入看貨。參考價：Akoya 耳釘 ¥18,000 起、9mm Akoya 耳釘 ¥33,000。隔鄰的 Pearl Clinic 北野坂本店（10:00–17:00，星期三休）是不主動推銷的自助選購方式，有英文、中文。\n【實用】10:00–18:00（休息日有兩個說法，星期五照開）；會到外地參展，曾臨時休業，出發前看店方「新着情報」。免稅要現場問。",
    "type": "shop",
    "cityId": "kobe",
    "address": "日本兵庫縣神戶市中央區中山手通1-23-16 Shanti 大廈 1 樓",
    "addressLocal": "兵庫県神戸市中央区中山手通1-23-16 シャンティビル1階 SHINYU SHOP",
    "coords": [
      34.6976,
      135.1915
    ],
    "nearEventId": "evt_d6_08",
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "10:00–18:00",
    "price": "¥10,000–300,000",
    "website": "https://shinyu-kobe.com/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_053",
    "title": "Mie Royal Pearl（ミエロイヤルパール）",
    "tag": "SHOP",
    "note": "【重點】三重縣珍珠卸商直營，標榜「一件起批發價」（1 点から卸価格）；大阪唯一每天開到 20:00 的選擇。\n【攻略】單件起計批發價，適合和神戶的報價比較；看 8mm 左右 Akoya 時要求看鑑別書。\n【備案】神戶買不到合心意的，可在大阪任何一晚由酒店去：心齋橋站步行約 4 分鐘（由谷町六丁目坐長堀鶴見綠地線 2 個站）。參考價：單件 ¥5,500 起；8–8.5mm Akoya 項鏈 ¥74,800–96,800。\n【實用】10:00–20:00，年中無休；可辦免稅（新制度下的流程現場問）；語言服務未核實。",
    "type": "shop",
    "cityId": "osaka",
    "address": "日本大阪府大阪市中央區南船場3-3-28 1 樓",
    "addressLocal": "大阪府大阪市中央区南船場3-3-28 1F 三重真珠専門店 Mie Royal Pearl",
    "coords": [
      34.6767,
      135.5031
    ],
    "nearEventId": "evt_d1_05",
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "10:00–20:00；年中無休",
    "price": "¥5,500 起",
    "website": "https://www.mieroyalpearl.jp/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_054",
    "title": "中之島香雪美術館",
    "tag": "RAINY",
    "note": "【重點】2/10 不去京都時的方案 B（大阪中之島）。\n【攻略】展覽「樂茶碗」（RAKU WARE，2027/1/23–3/28）；看完在中之島一帶吃石臼自家製粉烏冬（青空 blue 本店，平野町，星期三照開，只接受 11:30 的網上表格預約），下午看大阪中之島美術館「創作女性的 100 年」，傍晚回酒店，晚餐照舊和 Demekin。\n【實用】10:00–17:00，逢星期一休；網上預售 ¥1,400。地址未逐字核對。",
    "type": "sight",
    "cityId": "osaka",
    "address": "日本大阪府大阪市北區中之島3-2-4 中之島 Festival Tower West 4 樓",
    "addressLocal": "大阪府大阪市北区中之島3-2-4 中之島フェスティバルタワー・ウエスト4F 中之島香雪美術館",
    "coords": [
      34.693,
      135.4955
    ],
    "nearEventId": "evt_d4_31",
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "10:00–17:00；逢星期一休",
    "price": "網上預售 ¥1,400",
    "website": "https://www.kosetsu-museum.or.jp/nakanoshima/",
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
      "ICOCA（用現金增值）",
      "恒生 travel+ 卡：酒店到店付款、刷卡選日圓"
    ]
  },
  "2": {
    "shopping": [
      "大阪歷史博物館中文語音導覽（¥400）",
      "生國魂蚤之市：現金、小環保袋",
      "山中酒之店：試飲後買一兩支四合瓶（要防震包裝）",
      "土居天然真昆布（輕身好帶）",
      "退稅：帶護照（2026-11 起出境時退稅）"
    ]
  },
  "3": {
    "shopping": [
      "奈良縣立美術館：可刷卡就用信用卡，另帶備現金",
      "奈良春日山酒造「升平」（免費試飲後再買）",
      "奈良地酒（泉勇齋）"
    ]
  },
  "4": {
    "shopping": [
      "京都日：信用卡和 ICOCA，另帶備現金",
      "伏見酒（伏水酒藏小路）",
      "月桂冠大倉記念館：不收現金，用信用卡（Visa、Mastercard）"
    ]
  },
  "5": {
    "shopping": [
      "日本產精油（物差）",
      "適塾：穿襪（脫鞋入內）",
      "天神橋筋商店街小吃（少量，留肚晚餐）"
    ]
  },
  "6": {
    "shopping": [
      "梵高展預售票（e-tix，2/5 前買）",
      "梵高展圖錄／明信片",
      "播州地酒（HINO）",
      "南京町春節小吃（少量）",
      "珍珠：帶護照（退稅）、恒生 travel+ 卡，珍珠放手提"
    ]
  },
  "7": {
    "shopping": [
      "浜福鶴工房限定秘藏酒",
      "菊正宗記念館限定酒",
      "酒粕",
      "白鹿藏開：現金、保冷袋",
      "全日 smart casual（晚餐雅釀）"
    ]
  },
  "8": {
    "shopping": [
      "白雪藏祭：攤檔要帶現金",
      "保暖：圍巾、手套、暖包",
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
    "total": 261871,
    "currency": "JPY",
    "byCategory": {
      "hotel": 119725,
      "food": 113616,
      "transport": 13850,
      "ticket": 9180,
      "shop": 0,
      "other": 5500
    },
    "note": "日圓為日本當地估算：酒店＝Dormy Inn 大阪谷町 8 晚 ¥118,125（素泊，含稅，房價已包入湯稅）＋宿泊稅約 ¥1,600（每晚約 ¥200 估算，入住時另收）；早餐＝酒店 Lounge 免費咖啡；另有 1 頓專程早餐（2/9 麵包店）已計入餐飲；交通＝各段 IC／巴士車資；門票＝體驗、試飲及入場費；其他＝香薰按摩；購物（皮件、清酒）未估。機票 HK$5,223（去 HK$2,773＋回 HK$2,450）＋行李約 HK$740 另計（港幣）。"
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
