// buildTime: 2026-10-18T16:37:20.335Z
// ============================================================
// 🧳 客製化設定檔 config.js —— 大阪 2027 年 2 月（v4：v3＋去陳套化（獨立皮革工房、古道具、酒藏試飲））
// 結構契約見 schema.json／SCHEMA.md
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
    "headerTitle": "大阪二月・清酒與手作",
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
      "note": "香港一號客運大樓 → 關西第 1 航廈；HK$2,773（Google Flights 2026-10-18）；寄艙 20kg 首次訂票 HK$310",
      "bookingRef": null
    },
    {
      "type": "回程",
      "flight": "HK Express HX（航班號待確認）",
      "date": "02/15",
      "dep": "KIX 15:15",
      "arr": "HKG 18:55",
      "note": "約 13:00 到關西第 1 航廈；HK$2,450；回程建議加購 32kg（約 HK$430）",
      "bookingRef": null
    }
  ],
  "hotels": [
    {
      "cityId": "osaka",
      "name": "Hotel Elcient 大阪梅田（ホテル エルシエント大阪梅田）",
      "address": "〒530-0057 大阪府大阪市北区曽根崎1-2-7",
      "phone": "+81-6-6360-2200",
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
      "name": "酒店 Hotel Elcient 大阪梅田",
      "phone": "+81-6-6360-2200"
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
      "title": "抵達關西國際機場第 1 航廈",
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
      "note": "【航班】HK Express（HX）16:25 抵達關西機場第 1 航廈（航班號待訂票後確認）。\n【入境】出發前填好 Visit Japan Web（入境＋海關申報 QR code），入境連提行李預留 45–60 分鐘（估算）。\n【攻略】出閘後可在便利店 ATM 提取備用現金；之後乘巴士直達梅田。機場總合案內 24 小時有中文服務。",
      "phone": "+81-72-455-2500",
      "openHours": "機場總合案內 24 小時",
      "price": "不適用",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d1_02",
      "day": 1,
      "time": "17:40",
      "timeHint": "evening",
      "type": "transport",
      "title": "機場利木津巴士：關西機場第 1 航廈 5 號站 → 大阪站前（Herbis 大阪）",
      "cityId": "osaka",
      "address": "關西國際機場第 1 航廈 1 樓 利木津巴士 5 號站",
      "addressLocal": "関西空港 第1ターミナル 1階 リムジンバス 5番のりば（大阪駅前（梅田）行き）",
      "coords": [
        34.4343,
        135.2442
      ],
      "tags": [
        "機場巴士"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】第 1 航廈 1 樓國際線入境大堂出閘後，到 1 樓利木津巴士 5 號站（大阪站前（梅田）線，關西空港交通、阪急觀光巴士官方資料）。先在售票機買票；2026 年 3 月起此線可用信用卡感應付款，ICOCA 能否使用待確認。\n【班次】目標 17:40 一班（17:25 開出的一班也可以，如入境快）；17:40 → 18:40 到 Hotel 阪急 Respire 大阪（UM9）、18:50 到 Herbis 大阪（UM2）。官方註明第 1 航廈 08:45–19:30 開出的班次不停阪急三番街。\n【下車】Herbis 大阪（UM2）步行約 15 分鐘到酒店（估算），行李多可乘的士。大件行李交司機放車底。\n【備案】南海空港急行（1 號月台，往難波）17:39 → 新今宮轉 JR 關空快速 → 18:43 到 JR 大阪，IC ¥1,170（Yahoo! 乘換案內）。",
      "phone": null,
      "openHours": "第 1 航廈開出 17:25、17:40、17:50、18:00…（2026-01-27 版官方時刻表）",
      "price": "成人 ¥1,800（售票機買票，或信用卡感應付款）",
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
        "to": "大阪站前（Herbis 大阪）",
        "fromEventId": null,
        "toEventId": null,
        "operator": "阪急觀光巴士／關西空港交通",
        "line": "大阪站前（梅田）線",
        "durationMin": 70,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "id": "evt_d1_03",
      "day": 1,
      "time": "19:05",
      "timeHint": "evening",
      "type": "hotel",
      "title": "入住：Hotel Elcient 大阪梅田",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區曾根崎1-2-7（Hotel Elcient 大阪梅田）",
      "addressLocal": "〒530-0057 大阪府大阪市北区曽根崎1-2-7 ホテル エルシエント大阪梅田",
      "coords": [
        34.6983,
        135.5027
      ],
      "tags": [
        "大浴場",
        "Lounge"
      ],
      "moodColor": "#3A3A3A",
      "note": "【攻略】一連 8 晚同一間，不用換酒店。住客可免費用 2 樓大浴場（有桑拿）和 Premium Lounge；房內毛巾帶到大浴場使用。\n【實用】Check-in 15:00、Check-out 11:00；退房後可寄存行李。",
      "phone": "+81-6-6360-2200",
      "openHours": "Check-in 15:00／Check-out 11:00；大浴場（2 樓，設桑拿，住客專用）16:00–翌日 01:00、06:00–09:00",
      "price": "8 晚約 ¥127,330＋宿泊稅約 ¥3,000（2026-10-18 報價）",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d1_04",
      "day": 1,
      "time": "19:30",
      "timeHint": "evening",
      "type": "food",
      "title": "晚餐：串炸松葉 總本店（串かつ 松葉 総本店，新梅田食道街）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區角田町9-20 新梅田食道街 1 樓",
      "addressLocal": "大阪府大阪市北区角田町9-20 新梅田食道街1F 串かつ専門店 松葉 総本店",
      "coords": [
        34.7035,
        135.4977
      ],
      "tags": [
        "串炸",
        "立食",
        "清酒"
      ],
      "moodColor": "#A0785A",
      "note": "【Tabelog】3.49（約 1,460 則評價；立食串炸老字號（分數略低於 3.5，以名店身分保留））https://tabelog.com/osaka/A2701/A270101/27001927/\n【攻略】新梅田食道街代表性的老字號立食串炸店，昭和風味濃厚，椰菜任吃。先點若雞、豬肉、蓮藕等經典串，再試口碑推介的巨型大蝦串；醬汁共用，切勿二度蘸醬。配一杯生啤或熱清酒，第一晚輕鬆收結。\n【實用】全店站立（約 70 位），不設預約，一人最自然；可用信用卡及 IC 卡；2025 年 4 月起全店禁煙。由酒店步行約 12 分鐘（估算）。星期日及假期營業至 21:30。",
      "phone": "+81-6-6312-6615",
      "openHours": "星期一至六 11:00–22:00；日及假期 11:00–21:30（Tabelog）",
      "price": "Tabelog 預算 ¥1,000–1,999；連一兩杯酒約 ¥2,500（估算）",
      "cost": {
        "amount": 2500,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null,
      "link": "https://tabelog.com/osaka/A2701/A270101/27001927/"
    },
    {
      "id": "evt_d1_05",
      "day": 1,
      "time": "20:30",
      "timeHint": "evening",
      "type": "rest",
      "title": "酒店大浴場＋Lounge Bar Time",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區曾根崎1-2-7（Hotel Elcient 大阪梅田）",
      "addressLocal": "〒530-0057 大阪府大阪市北区曽根崎1-2-7 ホテル エルシエント大阪梅田",
      "coords": [
        34.6983,
        135.5027
      ],
      "tags": [
        "大浴場"
      ],
      "moodColor": "#9AA8A3",
      "note": "【攻略】先到 Premium Lounge 的 Bar Time 喝一杯（住客免費，最後入場 20:40），之後到 2 樓大浴場泡浴，消除旅途疲勞。",
      "phone": "+81-6-6360-2200",
      "openHours": "Lounge 11:00–21:00（Bar Time 最後入場 20:40）；大浴場（2 樓，設桑拿，住客專用）16:00–翌日 01:00、06:00–09:00",
      "price": "住客免費",
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
      "title": "早餐：Madura 喫茶店（マヅラ喫茶店）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區梅田1-3-1 大阪站前第 1 大廈 B1",
      "addressLocal": "大阪府大阪市北区梅田1-3-1 大阪駅前第1ビル B1F マヅラ喫茶店",
      "coords": [
        34.6989,
        135.4965
      ],
      "tags": [
        "老喫茶",
        "現金"
      ],
      "moodColor": "#A0785A",
      "note": "【Tabelog】3.59（1,019 則評價）https://tabelog.com/osaka/A2701/A270101/27004819/\n【攻略】1947 年創業、1970 年遷入大阪站前第 1 大廈的老牌純喫茶，太空船般的裝潢是大阪市「活建築博物館（生きた建築ミュージアム）」之一。09:00–11:00 早餐套餐：多士或半份蛋三文治配熱咖啡 ¥500，自家烘焙咖啡單點 ¥350。\n【實用】只收現金；分煙制有煙味，介意可改吃酒店早餐。09:45 前結帳，步行約 5 分鐘到東梅田站。星期日及假期休，2/8 星期一照常營業。",
      "phone": "+81-6-6345-3400",
      "openHours": "星期一至六 09:00 起；日及假期休",
      "price": "早餐套餐 ¥500（只收現金）",
      "cost": {
        "amount": 500,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null,
      "link": "https://tabelog.com/osaka/A2701/A270101/27004819/"
    },
    {
      "id": "trp_d2_02",
      "day": 2,
      "time": "09:59",
      "timeHint": "morning",
      "type": "transport",
      "title": "地鐵谷町線：東梅田 → 谷町九丁目",
      "cityId": "osaka",
      "address": "大阪地鐵東梅田站（谷町線）",
      "addressLocal": "Osaka Metro 東梅田駅（谷町線）",
      "coords": [
        34.7006,
        135.4998
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【路線】東梅田站 1 號月台，谷町線往八尾南方向，09:59 開 → 10:10 到谷町九丁目（直達、11 分鐘、不用轉車；Yahoo! 乘換案內）。\n【上車】由酒店步行約 7 分鐘到東梅田站 7 號出口（酒店官方資料）。\n【下車】谷町九丁目站 3 號出口，步行約 4 分鐘到生國魂神社（Osaka Metro 官方景點資料）。\n【車資】IC ¥240，ICOCA 拍卡。\n【備案】谷町線約 5–7 分鐘一班，錯過就等下一班。",
      "phone": null,
      "openHours": "建議班次 09:59 → 10:10",
      "price": "IC ¥240（ICOCA）",
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
        "to": "谷町九丁目",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵 Osaka Metro",
        "line": "谷町線（往八尾南）",
        "durationMin": 11,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "id": "evt_d2_03",
      "day": 2,
      "time": "10:15",
      "timeHint": "morning",
      "type": "sight",
      "title": "生國魂神社古物市（生國魂蚤の市）",
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
      "note": "【攻略】每月 8 日在表參道擺的小型古物市，約 10 檔，但檔主多是專業古道具商，舊器皿、古布、小飾物值得慢慢翻看。看中後可先問「品相怎樣？（状態はどうですか）」，議價要客氣。\n【實用】07:00 開，好貨早上就被買走；多數攤檔只收現金。小雨照開，撲空就直接去心齋橋。",
      "phone": "+81-6-6771-0002",
      "openHours": "每月 8 日 07:00–14:00（小雨照開）",
      "price": "免費入場",
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
      "title": "地鐵千日前線→御堂筋線：谷町九丁目 → 心齋橋",
      "cityId": "osaka",
      "address": "大阪地鐵谷町九丁目站",
      "addressLocal": "Osaka Metro 谷町九丁目駅",
      "coords": [
        34.6671,
        135.5158
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【路線】谷町九丁目站 2 號月台，千日前線往野田阪神方向，11:35 開 → 11:38 到難波；轉御堂筋線 2 號月台往新大阪方向，11:44 開 → 11:45 到心齋橋（轉乘 1 次，共 10 分鐘；Yahoo! 乘換案內）。\n【下車】心齋橋站步行約 2 分鐘到西家（出口號碼待確認；第三方資料指 5 號出口）。\n【車資】IC ¥190，ICOCA 拍卡。\n【備案】由生國魂神社乘的士約 10 分鐘（估算）。",
      "phone": null,
      "openHours": "建議班次 11:35 → 11:45",
      "price": "IC ¥190（ICOCA）",
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
        "line": "千日前線（往野田阪神）→ 御堂筋線（往新大阪）",
        "durationMin": 10,
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
      "title": "午餐：西家烏冬鍋本家（うどんちり本家 にし家 本店）",
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
      "note": "【Tabelog】3.59（1,031 則評價）https://tabelog.com/osaka/A2701/A270201/27000825/\n【攻略】1957 年創業，「烏冬海鮮鍋（うどんちり）」是其註冊商標：活蝦、蛤蜊及季節蔬菜的海鮮鍋，蘸特製柚子醋，最後加入自家製大阪烏冬，烏冬可任添。官網稱此鍋「適合配酒」，店內備有日本各地地酒，可配一合冷酒。\n【預約】一人鍋套餐要在官網預約（10 人以下 24 小時網上受理）；官網價為一人鍋套餐（きり）¥6,000 起，Tabelog 另列一人鍋套餐（かえで）¥6,500，以預約頁面為準。不想吃鍋可單點御膳 ¥1,958 起。",
      "phone": "+81-50-5385-3448",
      "openHours": "星期一至六 11:00–22:30（L.O. 22:00）；日及假期至 22:00；1/1 休、另有不定休（官網）",
      "price": "一人鍋套餐 ¥6,000–6,500＋地酒一合，約 ¥7,500（估算）",
      "cost": {
        "amount": 7500,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null,
      "link": "https://tabelog.com/osaka/A2701/A270201/27000825/"
    },
    {
      "id": "trp_d2_06",
      "day": 2,
      "time": "13:28",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "地鐵長堀鶴見綠地線：心齋橋 → 玉造",
      "cityId": "osaka",
      "address": "大阪地鐵心齋橋站",
      "addressLocal": "心斎橋駅（Osaka Metro 長堀鶴見緑地線）",
      "coords": [
        34.6749,
        135.502
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【路線】心齋橋站 1 號月台，長堀鶴見綠地線往門真南方向，13:28 開 → 13:34 到玉造（直達、6 分鐘；Yahoo! 乘換案內）。\n【下車】玉造站步行約 7 分鐘到 CRAFT HOUSE 510（官網；出口號碼待確認）。\n【車資】IC ¥190，ICOCA 拍卡。\n【備案】下一班約 5 分鐘後；或在谷町六丁目站下車，沿空堀商店街步行約 15 分鐘（估算）。",
      "phone": null,
      "openHours": "建議班次 13:28 → 13:34",
      "price": "IC ¥190（ICOCA）",
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
        "to": "玉造",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵",
        "line": "長堀鶴見綠地線（往門真南）",
        "durationMin": 6,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "id": "evt_d2_07",
      "day": 2,
      "time": "14:00",
      "timeHint": "afternoon",
      "type": "shop",
      "title": "皮革工房 CRAFT HOUSE 510 手縫卡片套體驗（クラフトハウス510）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市天王寺區空堀町15-9",
      "addressLocal": "大阪府大阪市天王寺区空堀町15-9 クラフトハウス510",
      "coords": [
        34.674,
        135.5261
      ],
      "tags": [
        "皮具",
        "手作體驗",
        "要預約"
      ],
      "moodColor": "#8C8378",
      "note": "【攻略】空堀一帶的獨立皮革工房兼教室，平日也替客人做燒印、刻印。不用成為會員也可報一次性「體驗」課程，一人參加沒有問題：先揀皮革顏色，再由導師教打孔和手縫收邊（かがり縫い），約 1–2 小時完成一個卡片套（¥3,300）。手快可改做零錢包（¥3,600）或鎖匙包（¥3,800）。這是自己親手做的小皮件，用得越久顏色越深，正好補回當年沒買下的那個錢包。\n【預約】須預約：電話 06-6762-1353（09:00–18:00）或電郵 info@ch-510.com，指定 2/8（星期一）14:00–16:00 一節；不定休，預約時確認當日開課。導師以日語教學，可在電郵中說明是初學者。Asoview 亦有網上預約頁。",
      "phone": "+81-6-6762-1353",
      "openHours": "體驗 11:00–13:00、14:00–16:00（其他時段可商量）；不定休，須預約",
      "price": "卡片套（かがり縫い）¥3,300；零錢包 ¥3,600；鎖匙包 ¥3,800",
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
      "id": "evt_d2_08",
      "day": 2,
      "time": "16:10",
      "timeHint": "afternoon",
      "type": "shop",
      "title": "空堀商店街散步＋昆布老店 土居（こんぶ土居）",
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
      "note": "【攻略】由工房沿空堀商店街向西慢行約 15 分鐘（估算），沿途是長屋改建的小店和本地老商店。土居是創業百多年的昆布老店，只用天然真昆布，可請店員介紹熬高湯用和直接食用的分別。天然真昆布（寸切）30g ¥550，輕身易帶，適合買回香港自用；講究一點可買按量計價的一本撰（每 100g ¥2,500）。\n【實用】2/8 星期一營業；16:50 離開，步行約 10 分鐘到長堀居酒屋（估算）。",
      "phone": "+81-6-6761-3914",
      "openHours": "09:30–18:00；逢星期日及假期休",
      "price": "天然真昆布（寸切）30g ¥550；一本撰 每 100g ¥2,500（按量計價）",
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
      "title": "晚餐：長堀居酒屋（ながほり，大阪名居酒屋）",
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
      "note": "【Tabelog】3.78（488 則評價；居酒屋 WEST 百名店 2026（2021、2022、2024、2025 亦入選））https://tabelog.com/osaka/A2701/A270204/27000581/\n【攻略】大阪居酒屋的標竿級名店，以嚴選食材、刺身及比內地雞料理聞名。招牌蟹膏可樂餅（蟹味噌コロッケ）必點；刺身約 ¥1,300 起，清酒一杯約 ¥850 起（BRUTUS 介紹）。說出喜歡的口味，請店方按料理配全國地酒，先冷酒配刺身，再燙酒配雞料理。\n【預約】電話 06-6768-0515，一般建議約 2 星期前預約；吧枱 12 位，指定吧枱一人位。\n【注意】Tabelog 店方公告 2026 年 8 月起改為星期一營業（17:00–22:00）、星期三休，但頁首仍顯示星期一休，訂位時必須確認 2/8（一）營業。如不營業，改去燗之美穗（安堂寺町，步行約 10 分鐘，見靈感）。",
      "phone": "+81-6-6768-0515",
      "openHours": "星期二至五 17:00–22:00；六 13:00–22:00；2026-08 起星期一 17:00–22:00、星期三休（Tabelog 店方公告，訂位時確認）",
      "price": "Tabelog 預算 ¥10,000–14,999（連清酒）",
      "cost": {
        "amount": 12000,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null,
      "link": "https://tabelog.com/osaka/A2701/A270204/27000581/"
    },
    {
      "id": "trp_d2_10",
      "day": 2,
      "time": "20:20",
      "timeHint": "evening",
      "type": "transport",
      "title": "地鐵谷町線：谷町六丁目 → 東梅田",
      "cityId": "osaka",
      "address": "大阪地鐵谷町六丁目站",
      "addressLocal": "Osaka Metro 谷町六丁目駅（谷町線）",
      "coords": [
        34.6761,
        135.5157
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】由長堀居酒屋步行約 15 分鐘到谷町六丁目站（估算）；2 號月台，谷町線往大日方向。\n【路線】20:20 開 → 20:29 到東梅田（直達、9 分鐘；Yahoo! 乘換案內）。\n【下車】東梅田站 7 號出口步行約 7 分鐘回酒店（酒店官方資料）。\n【車資】IC ¥240，ICOCA 拍卡。\n【備案】長堀居酒屋門口截的士回酒店約 15 分鐘（估算）。",
      "phone": null,
      "openHours": "建議班次 20:20 → 20:29（約 5–7 分鐘一班）",
      "price": "IC ¥240（ICOCA）",
      "cost": {
        "amount": 240,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "subway",
        "from": "谷町六丁目",
        "to": "東梅田",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵 Osaka Metro",
        "line": "谷町線（往大日）",
        "durationMin": 8,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "id": "evt_d2_11",
      "day": 2,
      "time": "20:30",
      "timeHint": "evening",
      "type": "rest",
      "title": "酒店大浴場",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區曾根崎1-2-7（Hotel Elcient 大阪梅田）",
      "addressLocal": "〒530-0057 大阪府大阪市北区曽根崎1-2-7 ホテル エルシエント大阪梅田",
      "coords": [
        34.6983,
        135.5027
      ],
      "tags": [
        "大浴場"
      ],
      "moodColor": "#9AA8A3",
      "note": "【攻略】喝完清酒不要立即泡太熱的水，先休息 30 分鐘、多喝水再去大浴場；大浴場開到凌晨 1 點。",
      "phone": "+81-6-6360-2200",
      "openHours": "大浴場（2 樓，設桑拿，住客專用）16:00–翌日 01:00、06:00–09:00",
      "price": "住客免費",
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
      "title": "早餐：純喫茶 Sunshine（サンシャイン，大阪站前第 3 大廈）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區梅田1-1-3 大阪站前第 3 大廈 B2",
      "addressLocal": "大阪府大阪市北区梅田1-1-3 大阪駅前第3ビル B2F サンシャイン",
      "coords": [
        34.6984,
        135.4999
      ],
      "tags": [
        "老喫茶",
        "熱香餅"
      ],
      "moodColor": "#A0785A",
      "note": "【Tabelog】3.57（424 則評價；喫茶店 百名店 2022（遷址前舊店））https://tabelog.com/osaka/A2701/A270101/27149249/\n【攻略】曾入選喫茶店百名店的老牌喫茶，2025 年 5 月遷到大阪站前第 3 大廈地庫。招牌是厚身熱香餅（ホットケーキ）配壺裝紅茶或自家烘焙咖啡，口碑一致好評。\n【實用】不設預約，繁忙時用發券機取票等位；平日 07:30 開，09:00 到一般較快入座。09:40 前結帳，步行約 5 分鐘到東梅田站。可用信用卡及 PayPay。",
      "phone": "+81-6-6313-6797",
      "openHours": "星期一至五 07:30–19:45（L.O. 19:15）；六日及假期 08:00–18:30（L.O. 18:00）",
      "price": "Tabelog 預算 ¥1,000–1,999",
      "cost": {
        "amount": 1300,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null,
      "link": "https://tabelog.com/osaka/A2701/A270101/27149249/"
    },
    {
      "id": "trp_d3_02",
      "day": 3,
      "time": "09:53",
      "timeHint": "morning",
      "type": "transport",
      "title": "地鐵谷町線→中央線（直通近鐵京阪奈線）：東梅田 → 新石切",
      "cityId": "osaka",
      "address": "大阪地鐵東梅田站（谷町線）",
      "addressLocal": "Osaka Metro 東梅田駅（谷町線）",
      "coords": [
        34.7006,
        135.4998
      ],
      "tags": [
        "地鐵",
        "近鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【路線】東梅田站 1 號月台，谷町線往八尾南方向，09:53 開 → 10:00 到谷町四丁目；轉中央線 1 號月台往生駒方向（直通近鐵京阪奈線），10:04 開 → 10:22 到新石切（轉乘 1 次，共 29 分鐘；Yahoo! 乘換案內）。\n【上車】酒店步行約 7 分鐘到東梅田站 7 號出口。\n【下車】新石切站步行約 7 分鐘到石切神社（出口號碼待確認）。\n【車資】IC ¥590，ICOCA 拍卡（Osaka Metro 與近鐵直通，一次拍卡即可）。\n【備案】中央線約 10 分鐘一班。",
      "phone": null,
      "openHours": "建議班次 09:53 → 10:22",
      "price": "IC ¥590（ICOCA）",
      "cost": {
        "amount": 590,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "subway",
        "from": "東梅田",
        "to": "新石切",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵／近鐵",
        "line": "谷町線（往八尾南）→ 中央線（往生駒，直通近鐵京阪奈線）",
        "durationMin": 29,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "id": "evt_d3_03",
      "day": 3,
      "time": "10:30",
      "timeHint": "morning",
      "type": "sight",
      "title": "石切劍箭神社 百度參拜（お百度参り）",
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
      "note": "【攻略】石切劍箭神社以「百度參拜（お百度参り）」聞名，完全個人修行：先在本殿右邊授與所領百度紐，本殿前二禮二拍手一禮，然後在本殿和鳥居附近的百度石之間來回，每圈摺一條紐記數；完成後再參拜，把紐放入賽錢箱左邊的奉納箱。不一定要 100 次，自己決定次數也可以。\n【實用】100 次約 1 小時；要趕 11:46 近鐵，時間不夠就減少次數。",
      "phone": "+81-72-982-3621",
      "openHours": "境內 24 小時；百度紐授與 08:00–16:30",
      "price": "免費（香油隨意）",
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
      "title": "近鐵：新石切 → 近鐵奈良",
      "cityId": "nara",
      "address": "近鐵新石切站",
      "addressLocal": "近鉄 新石切駅",
      "coords": [
        34.6801,
        135.6409
      ],
      "tags": [
        "近鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【路線】新石切站 1 號月台，近鐵京阪奈線往學研奈良登美丘方向，11:46 開 → 11:52 到生駒；轉近鐵奈良線 3 號月台往近鐵奈良方向，11:58 開 → 12:18 到近鐵奈良（轉乘 1 次，共 32 分鐘；Yahoo! 乘換案內）。\n【下車】近鐵奈良站步行約 15 分鐘到玄（Tabelog），或乘的士約 5 分鐘（估算）；玄最後入店 13:00。出口號碼待確認。\n【車資】IC ¥550，ICOCA 拍卡。\n【備案】錯過就等下一班，到奈良後改乘的士。",
      "phone": null,
      "openHours": "建議班次 11:46 → 12:18",
      "price": "IC ¥550（ICOCA）",
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
        "line": "近鐵京阪奈線（往學研奈良登美丘）→ 近鐵奈良線（往近鐵奈良）",
        "durationMin": 32,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "id": "evt_d3_05",
      "day": 3,
      "time": "12:35",
      "timeHint": "afternoon",
      "type": "food",
      "title": "午餐：蕎麥 玄（そば 玄，奈良町手打蕎麥）",
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
      "note": "【Tabelog】4.03（585 則評價；蕎麥 WEST 百名店 2025（2017–2024 多次入選））https://tabelog.com/nara/A2901/A290101/29000052/\n【攻略】奈良町古民家裡的手打蕎麥名店，Tabelog 奈良最高分蕎麥店之一。午市只做蕎麥，按預約份數供應；建議點兩款不同蕎麥比較香氣，最後喝蕎麥湯（蕎麦湯）收結，可配一小杯奈良地酒。\n【預約】完全預約制。午市要電話 0742-27-6868 預約蕎麥份數（每日約 40 份），通常要提早致電；最後入店 13:00，遲到可能失去座位。只收現金。",
      "phone": "+81-742-27-6868",
      "openHours": "星期二至五 午市 11:30–13:00（最後入店）、晚市 18:00–21:00；星期日、一休（Tabelog）",
      "price": "午市約 ¥3,000–4,000（Tabelog；只收現金）",
      "cost": {
        "amount": 3500,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null,
      "link": "https://tabelog.com/nara/A2901/A290101/29000052/"
    },
    {
      "id": "evt_d3_06",
      "day": 3,
      "time": "13:40",
      "timeHint": "afternoon",
      "type": "sight",
      "title": "奈良春日山酒造 試飲與酒藏參觀（舊八木酒造，代表酒「升平」）",
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
      "note": "【攻略】奈良町東南、高畑一帶的老酒藏（舊八木酒造），代表酒「升平」。商店已遷往隔鄰的新建築，營業時間內可免費試飲；2 月正值釀酒季。可比較「升平」純米酒和當季新酒，再挑 1–2 支四合瓶帶回。\n【預約】試飲不用預約；酒藏參觀免費、最多 20 人，須提前致電 0742-26-2300 預約，可詢問一人參觀是否可行，講解以日語為主。由玄步行約 6 分鐘（估算）；14:15 出發，步行約 25 分鐘（或乘的士）到錦光園。",
      "phone": "+81-742-26-2300",
      "openHours": "平日 09:00–17:00；逢星期六、日及假期休",
      "price": "試飲免費；酒藏參觀免費（須預約）",
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
      "title": "錦光園 手握奈良墨體驗（にぎり墨）",
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
      "note": "【攻略】由室町時代傳承至今的奈良墨工房。流程：墨的歷史講解 → 職人示範入模 → 親手握住溫暖柔軟的生墨，留下指紋和手形 → 放入桐箱帶走。手幾乎不會弄髒。帶回香港後放在陰涼處，3 個月內不要打開，讓它慢慢乾透。\n【預約】要預約，前一日 21:00 前；訂 14:45。由春日山酒造步行約 25 分鐘（估算）。取消要體驗前一日 12:00 前，否則全額收費。可加購參觀製墨現場 ¥1,650。",
      "phone": "+81-742-22-3319",
      "openHours": "體驗 09:00 起（受理至 17:00）；年中無休",
      "price": "成人 ¥3,300（連桐箱）",
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
      "title": "奈良泉勇齋（なら泉勇斎，奈良地酒試飲）",
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
      "note": "【攻略】奈良縣地酒專門店，約 120 款奈良酒可付費試飲（每杯 50cc，¥200 起），可一次比較不同酒藏；晚餐前試 3–4 杯即可，選 2–3 款喜歡的帶回酒店／香港。\n【實用】逢星期四休（假期照開），偶有臨時休息。16:45 出發，步行約 10 分鐘到鶴由（估算）。",
      "phone": "+81-742-26-6078",
      "openHours": "11:00–20:00；逢星期四休",
      "price": "試飲 50cc ¥200 起",
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
      "title": "晚餐：鶴由（つる由，奈良町日本料理）",
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
      "note": "【Tabelog】3.78（256 則評價；The Tabelog Award 2026 Bronze；日本料理 WEST 百名店 2025）https://tabelog.com/nara/A2901/A290101/29000969/\n【攻略】奈良町的日本料理名店，獲 The Tabelog Award 2026 Bronze，是今次行程最高級的一餐。季節會席以大和食材為主，請店方以奈良地酒配餐（剛在泉勇齋試過的酒藏可順便問）。\n【預約】電話 0742-26-7798；人氣高，建議 2–3 個月前（約 2026 年 11–12 月）致電，指定 17:00 晚市及一人位；Tabelog 口碑有一人午市預約例子，一人晚市要先確認。\n【實用】約 19:15 結束，步行約 10–15 分鐘到興福寺一帶看瑠璃繪（估算）。",
      "phone": "+81-742-26-7798",
      "openHours": "12:00–14:00、17:00–21:30；星期一休（Tabelog）",
      "price": "Tabelog 晚市預算 ¥20,000–29,999（連清酒）",
      "cost": {
        "amount": 25000,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null,
      "link": "https://tabelog.com/nara/A2901/A290101/29000969/"
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
      "note": "【攻略】2027 年 2/8–2/14 舉行（奈良國立博物館官網已確認日期）。參考 2026 年：春日大社、興福寺、東大寺有夜間特別參拜，琉璃色燈光迴廊，另有瑠璃繪市集和免費「夜參燈籠導賞（夜參り提灯）」（每條路線每日 1 次、約 10 人、先到先得）。不必拍照打卡，選一間寺社慢慢夜參拜已很有氣氛。\n【實用】2027 年詳細節目未公布；夜間戶外很冷，帶圍巾手套。查詢：奈良瑠璃繪（なら瑠璃絵）實行委員會。",
      "phone": "+81-742-30-6560",
      "openHours": "2027/2/8–2/14，約 18:00–21:00（按 2026 年）",
      "price": "入場免費；個別夜間特別參拜或收費（出發前再確認）",
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
      "title": "近鐵奈良線→地鐵御堂筋線：近鐵奈良 → 梅田",
      "cityId": "nara",
      "address": "近鐵奈良站",
      "addressLocal": "近鉄奈良駅",
      "coords": [
        34.684,
        135.8263
      ],
      "tags": [
        "近鐵",
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【路線】近鐵奈良站 1 號月台（始發），近鐵奈良線快速急行往大阪難波方向，20:48 開 → 21:24 到大阪難波；步行轉地鐵難波站御堂筋線 2 號月台往新大阪方向，21:31 開 → 21:39 到梅田（轉乘 1 次，共 51 分鐘；Yahoo! 乘換案內）。\n【下車】梅田站經地下街步行約 12 分鐘回酒店（估算）。\n【車資】IC ¥920，ICOCA 拍卡。\n【備案】JR 奈良 → 大阪約 60 分鐘。",
      "phone": null,
      "openHours": "建議班次 20:48 → 21:39",
      "price": "IC ¥920（ICOCA）",
      "cost": {
        "amount": 920,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "train",
        "from": "近鐵奈良",
        "to": "梅田",
        "fromEventId": null,
        "toEventId": null,
        "operator": "近畿日本鐵道／大阪地鐵",
        "line": "近鐵奈良線快速急行（往大阪難波）→ 御堂筋線（往新大阪）",
        "durationMin": 51,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "id": "evt_d3_12",
      "day": 3,
      "time": "22:00",
      "timeHint": "night",
      "type": "rest",
      "title": "酒店大浴場",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區曾根崎1-2-7（Hotel Elcient 大阪梅田）",
      "addressLocal": "〒530-0057 大阪府大阪市北区曽根崎1-2-7 ホテル エルシエント大阪梅田",
      "coords": [
        34.6983,
        135.5027
      ],
      "tags": [
        "大浴場"
      ],
      "moodColor": "#9AA8A3",
      "note": "【攻略】走了一整天石階和夜參拜，泡個熱水浴放鬆雙腳；大浴場開到凌晨 1 點。",
      "phone": "+81-6-6360-2200",
      "openHours": "大浴場（2 樓，設桑拿，住客專用）16:00–翌日 01:00、06:00–09:00",
      "price": "住客免費",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d4_01",
      "day": 4,
      "time": "09:00",
      "timeHint": "morning",
      "type": "food",
      "title": "早餐：倫敦茶室 堂島本店（ロンドンティールーム）早餐套餐",
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
      "note": "【Tabelog】3.69（1,264 則評價；咖啡店 WEST 百名店 2025）https://tabelog.com/osaka/A2701/A270101/27002171/\n【攻略】平日 09:00 開。今天點早餐多士套餐（¥700，連紅茶），加點招牌煮込式皇家奶茶（ロイヤルミルクティー）；明天（2/11 假期）再來吃完全預約制的英式早餐。\n【實用】店舖與西梅田站 8 號出口直結，09:50 結帳即可趕 09:56 地鐵。",
      "phone": "+81-6-6347-0107",
      "openHours": "星期一至五 09:00–20:00；六日及假期 08:00–20:00（L.O. 19:00）；早餐至 11:00",
      "price": "早餐多士套餐 ¥700（連紅茶）",
      "cost": {
        "amount": 900,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null,
      "link": "https://tabelog.com/osaka/A2701/A270101/27002171/"
    },
    {
      "id": "trp_d4_02",
      "day": 4,
      "time": "09:56",
      "timeHint": "morning",
      "type": "transport",
      "title": "地鐵四橋線：西梅田 → 肥後橋",
      "cityId": "osaka",
      "address": "大阪地鐵西梅田站",
      "addressLocal": "Osaka Metro 西梅田駅（四つ橋線）",
      "coords": [
        34.6995,
        135.4957
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】倫敦茶室與西梅田站 8 號出口直結（店方資料）；四橋線 2 號月台（始發）往北加賀屋方向。\n【路線】09:56 開 → 09:58 到肥後橋（直達、2 分鐘；Yahoo! 乘換案內）。\n【下車】肥後橋站 4 號出口向西步行約 10 分鐘到大阪中之島美術館（美術館官方資料）。\n【車資】IC ¥190，ICOCA 拍卡。\n【備案】由堂島步行約 20 分鐘到美術館（估算）。",
      "phone": null,
      "openHours": "建議班次 09:56 → 09:58",
      "price": "IC ¥190（ICOCA）",
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
        "line": "四橋線（往北加賀屋）",
        "durationMin": 2,
        "stopCount": 1,
        "liveApi": null
      }
    },
    {
      "id": "evt_d4_03",
      "day": 4,
      "time": "10:10",
      "timeHint": "morning",
      "type": "sight",
      "title": "大阪中之島美術館「創作女性的 100 年」（つくる女性の100年）",
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
      "note": "【攻略】2027/1/9–3/22 在 5 樓展室舉行，以近百年來創作的日本女性為主題。平日早上人較少，可慢慢看；美術館建築本身（黑色立方體）也值得留意。\n【實用】網上 etix／ART PASS 預先買票；入場至 16:30。問詢：大阪市總合 熱線（なにわコール）。",
      "phone": "+81-6-4301-7285",
      "openHours": "10:00–17:00（入場至 16:30）；逢星期一休",
      "price": "一般 ¥1,900（前售 ¥1,700）",
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
      "id": "trp_d4_04",
      "day": 4,
      "time": "12:14",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "京阪中之島線：中之島 → 浪華橋",
      "cityId": "osaka",
      "address": "京阪中之島站",
      "addressLocal": "京阪 中之島駅（中之島線）",
      "coords": [
        34.6909,
        135.4868
      ],
      "tags": [
        "京阪"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】美術館步行約 5 分鐘到京阪中之島站；1 號月台（始發）往出町柳方向。\n【路線】12:14 開 → 12:19 到浪華橋（直達、5 分鐘；Yahoo! 乘換案內）。\n【下車】浪華橋站步行約 5 分鐘到柴藤（出口號碼待確認）。\n【車資】IC ¥240，ICOCA 拍卡。\n【備案】沿中之島河邊散步約 25 分鐘（估算）。",
      "phone": null,
      "openHours": "建議班次 12:14 → 12:19",
      "price": "IC ¥240（ICOCA）",
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
        "line": "京阪中之島線（往出町柳）",
        "durationMin": 5,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "id": "evt_d4_05",
      "day": 4,
      "time": "12:30",
      "timeHint": "afternoon",
      "type": "food",
      "title": "午餐：本家柴藤（大阪鰻魚老字號）",
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
      "note": "【Tabelog】3.57（465 則評價）https://tabelog.com/osaka/A2701/A270102/27000005/\n【攻略】創業約 300 年、第十五代傳人經營的大阪鰻魚老店。必吃「大阪鰻魚飯（大阪まむし）」：大阪做法將鰻魚夾在飯中間蒸焗，「菊」¥4,920 起；與 D6 有馬的現烤鰻魚可作比較。\n【注意】店方要求客人不要用香水、不要用有香味的柔順劑——當日早上不要塗精油。逢星期日、一休，可電話預約；L.O. 17:00。",
      "phone": "+81-6-6231-4810",
      "openHours": "10:30–17:00 L.O.（18:00 關門）；逢星期日、一休",
      "price": "大阪鰻魚飯「菊」¥4,920（官網）；Tabelog 預算 ¥6,000–7,999",
      "cost": {
        "amount": 4920,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null,
      "link": "https://tabelog.com/osaka/A2701/A270102/27000005/"
    },
    {
      "id": "trp_d4_06",
      "day": 4,
      "time": "13:44",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "地鐵堺筋線：北濱 → 南森町",
      "cityId": "osaka",
      "address": "大阪地鐵北濱站",
      "addressLocal": "Osaka Metro 北浜駅（堺筋線）",
      "coords": [
        34.6915,
        135.5076
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【路線】北濱站 2 號月台，堺筋線往天神橋筋六丁目方向，13:44 開 → 13:45 到南森町（直達、1 個站；Yahoo! 乘換案內）。\n【下車】南森町站 4A 出口，沿天神橋筋商店街步行約 5 分鐘到摩芙瑠。\n【車資】IC ¥190，ICOCA 拍卡。\n【備案】由柴藤步行約 20 分鐘到摩芙瑠（估算）。",
      "phone": null,
      "openHours": "建議班次 13:44 → 13:45",
      "price": "IC ¥190（ICOCA）",
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
        "line": "堺筋線（往天神橋筋六丁目）",
        "durationMin": 1,
        "stopCount": 1,
        "liveApi": null
      }
    },
    {
      "id": "evt_d4_07",
      "day": 4,
      "time": "14:00",
      "timeHint": "afternoon",
      "type": "shop",
      "title": "古董浮雕首飾店 摩芙瑠（アンティークカメオ＆ジュエリー まーぶる）",
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
      "note": "【攻略】40 多年老店，老闆前川光永親自去歐洲入貨，出版過幾本浮雕寶石（cameo）專書。主力喬治亞時期至 1940 年代古董首飾和 cameo，可請老闆講解雕工、材質和年代分別。\n【實用】只開星期三至六 13:30–17:00（2/10 星期三正常營業）；其他日子可電話預約。",
      "phone": "+81-6-6353-3147",
      "openHours": "星期三至六 13:30–17:00",
      "price": "按貨品標價",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d4_08",
      "day": 4,
      "time": "15:26",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "JR 東西線：大阪天滿宮 → 北新地",
      "cityId": "osaka",
      "address": "JR 大阪天滿宮站",
      "addressLocal": "JR 大阪天満宮駅（JR東西線）",
      "coords": [
        34.6973,
        135.5126
      ],
      "tags": [
        "JR"
      ],
      "moodColor": "#2A7F7A",
      "note": "【路線】JR 大阪天滿宮站 1 號月台，JR 東西線區間快速往塚口方向，15:26 開 → 15:28 到北新地（直達、2 分鐘；Yahoo! 乘換案內）。\n【下車】北新地站 10 號出口，步行約 1 分鐘到 Wayanpuri。\n【車資】IC ¥150，ICOCA 拍卡。\n【備案】南森町站乘谷町線到東梅田，再步行約 8 分鐘（估算）。",
      "phone": null,
      "openHours": "建議班次 15:26 → 15:28",
      "price": "IC ¥150（ICOCA）",
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
        "line": "JR 東西線區間快速（往塚口）",
        "durationMin": 2,
        "stopCount": 1,
        "liveApi": null
      }
    },
    {
      "id": "evt_d4_09",
      "day": 4,
      "time": "15:45",
      "timeHint": "afternoon",
      "type": "rest",
      "title": "頭療專門店 Wayanpuri 大阪梅田店（ワヤンプリ）",
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
      "note": "【攻略】創業 21 年的頭療專門店，先做頭皮診斷，再做毛孔清洗和頸膊護理；整個療程（包括更衣、化妝）都在私人房間。看展、逛街之後，選「頸膊放鬆集中療程（首肩コリ改善集中）」頸膊加強版最適合。\n【預約】全預約制，電話或官網預約 15:45。",
      "phone": "+81-6-6342-5999",
      "openHours": "平日 11:30–20:30；六 11:00–20:00；日及假期 10:00–19:00；無休",
      "price": "60 分鐘（施術 40 分鐘）¥12,000",
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
      "id": "evt_d4_10",
      "day": 4,
      "time": "17:15",
      "timeHint": "evening",
      "type": "rest",
      "title": "酒店大浴場、休息",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區曾根崎1-2-7（Hotel Elcient 大阪梅田）",
      "addressLocal": "〒530-0057 大阪府大阪市北区曽根崎1-2-7 ホテル エルシエント大阪梅田",
      "coords": [
        34.6983,
        135.5027
      ],
      "tags": [
        "大浴場"
      ],
      "moodColor": "#9AA8A3",
      "note": "【攻略】頭療後頭皮很放鬆，泡浴時不用再用力洗頭；休息一會，18:20 出門步行到新梅田食道街（約 12 分鐘，估算）。",
      "phone": "+81-6-6360-2200",
      "openHours": "大浴場（2 樓，設桑拿，住客專用）16:00–翌日 01:00、06:00–09:00",
      "price": "住客免費",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d4_11",
      "day": 4,
      "time": "18:30",
      "timeHint": "evening",
      "type": "food",
      "title": "晚餐：大阪燒 Kiji 本店（お好み焼 きじ 本店，新梅田食道街）",
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
      "note": "【Tabelog】3.66（2,201 則評價；大阪燒 百名店 2025（2018、2019、2022–2024 亦入選））https://tabelog.com/osaka/A2701/A270101/27000297/\n【攻略】1954 年開業的大阪燒老店，大阪燒百名店常客。經典豬肉大阪燒（豚玉）最穩妥，也可加點炒麵（焼きそば）；配一杯生啤，是今次行程最「大阪」的一頓平價晚餐。吧枱 7 位，一人可坐吧枱看師傅在鐵板上煎。\n【實用】不設預約、只收現金；人氣極高，假日可排 30 人以上，平日晚上也要預留排隊時間。料理 L.O. 20:30，19:30 前到較穩妥。星期日休。",
      "phone": "+81-6-6361-5804",
      "openHours": "星期一至六 11:45–21:15（料理 L.O. 20:30）；星期日休（Tabelog）",
      "price": "Tabelog 預算 ¥1,000–1,999；連生啤約 ¥2,200（估算，只收現金）",
      "cost": {
        "amount": 2200,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null,
      "link": "https://tabelog.com/osaka/A2701/A270101/27000297/"
    },
    {
      "id": "evt_d5_01",
      "day": 5,
      "time": "09:00",
      "timeHint": "morning",
      "type": "food",
      "title": "早餐：倫敦茶室 堂島本店（ロンドンティールーム）英式早餐",
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
      "note": "【Tabelog】3.69（1,264 則評價；咖啡店 WEST 百名店 2025）https://tabelog.com/osaka/A2701/A270101/27002171/\n【攻略】1983 年創業的英國紅茶專門店，也是煮込式皇家奶茶（ロイヤルミルクティー）的發祥店。假期 08:00 開；09:00–11:00 有完全預約制的 English Breakfast（¥3,000），配一壺專門店紅茶慢慢享用；不想太飽可改點早餐多士套餐（¥700，連紅茶，供應至 11:00）。\n【預約】English Breakfast 只接受電話預約（10:00–20:00 受理，開店後 1 小時內不接聽）；遲到 15 分鐘自動取消。",
      "phone": "+81-6-6347-0107",
      "openHours": "星期一至五 09:00–20:00；六日及假期 08:00–20:00（L.O. 19:00）；早餐至 11:00",
      "price": "English Breakfast ¥3,000（完全預約制）；多士套餐 ¥700",
      "cost": {
        "amount": 3000,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null,
      "link": "https://tabelog.com/osaka/A2701/A270101/27002171/"
    },
    {
      "id": "trp_d5_02",
      "day": 5,
      "time": "09:58",
      "timeHint": "morning",
      "type": "transport",
      "title": "地鐵谷町線：東梅田 → 中崎町",
      "cityId": "osaka",
      "address": "大阪地鐵東梅田站（谷町線）",
      "addressLocal": "Osaka Metro 東梅田駅（谷町線）",
      "coords": [
        34.7006,
        135.4998
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【路線】東梅田站 2 號月台，谷町線往大日方向，09:58 開 → 09:59 到中崎町（直達、1 個站；Yahoo! 乘換案內）。\n【下車】中崎町站 2 號出口，步行約 4 分鐘到物差沙龍。\n【車資】IC ¥190，ICOCA 拍卡。\n【備案】由堂島直接步行約 20 分鐘（估算）。",
      "phone": null,
      "openHours": "建議班次 09:58 → 09:59",
      "price": "IC ¥190（ICOCA）",
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
        "line": "谷町線（往大日）",
        "durationMin": 1,
        "stopCount": 1,
        "liveApi": null
      }
    },
    {
      "id": "evt_d5_03",
      "day": 5,
      "time": "10:15",
      "timeHint": "morning",
      "type": "rest",
      "title": "香薰沙龍 物差（アロマサロン ものさし）精油按摩",
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
      "note": "【攻略】中崎町個人經營、完全預約制的私人香薰沙龍，用日本產精油品牌「Kaorito（かおりと）」（每批精油送 GC/MS 分析）和法國藥用級精油。建議選 60 分鐘精油按摩（附碳酸乾式頭療）；店內亦有調香體驗（20ml ¥2,700 起）。可問店主想試哪幾款日本產精油。\n【預約】一人店，電話未必接聽，用網上（Square）預約最穩妥。",
      "phone": "+81-80-1498-5189",
      "openHours": "日及假期 09:00–21:00（完全預約制）",
      "price": "精油按摩 60 分鐘 ¥7,000（首次 ¥5,500）",
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
      "id": "trp_d5_04",
      "day": 5,
      "time": "11:45",
      "timeHint": "morning",
      "type": "transport",
      "title": "地鐵谷町線：中崎町 → 東梅田",
      "cityId": "osaka",
      "address": "大阪地鐵中崎町站",
      "addressLocal": "Osaka Metro 中崎町駅",
      "coords": [
        34.7072,
        135.5056
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【路線】中崎町站 1 號月台，谷町線往八尾南方向，11:45 開 → 11:47 到東梅田（直達、2 分鐘；Yahoo! 乘換案內）。\n【下車】東梅田站步行約 5 分鐘到大阪站前第 3 大廈 B2 的烏冬棒（Tabelog；出口號碼待確認）。\n【車資】IC ¥190，ICOCA 拍卡。\n【備案】步行約 15 分鐘（估算）。",
      "phone": null,
      "openHours": "建議班次 11:45 → 11:47",
      "price": "IC ¥190（ICOCA）",
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
        "line": "谷町線（往八尾南）",
        "durationMin": 2,
        "stopCount": 1,
        "liveApi": null
      }
    },
    {
      "id": "evt_d5_05",
      "day": 5,
      "time": "12:00",
      "timeHint": "afternoon",
      "type": "food",
      "title": "午餐：烏冬棒 大阪本店（うどん棒，讚岐手打烏冬）",
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
      "note": "【Tabelog】3.78（2,967 則評價；烏冬 WEST 百名店 2024（2017–2022 多次入選））https://tabelog.com/osaka/A2701/A270101/27003766/\n【攻略】2004 年開業的讚岐烏冬名店，堅持每朝手打。最人氣是冷天烏冬（冷天うどん）¥800，名物是什錦烏冬（ちゃんぽんうどん）¥800（店方介紹）；想專心吃麵與湯可點冷湯烏冬（ひやかけ）。店方標示對日本酒有講究，可配一杯清酒。\n【實用】不設預約，口碑排隊約 20–30 分鐘；假期只開 11:00–15:00，麵賣完即止。星期一休，另有不定休（官網每月公布），出發前看 X／官網。",
      "phone": "+81-6-6458-5518",
      "openHours": "星期二至五 11:00–15:00、17:30–20:00；六日及假期 11:00–15:00；星期一休、不定休（Tabelog）",
      "price": "Tabelog 預算 ¥1,000–1,999（連一杯清酒約 ¥1,800，估算）",
      "cost": {
        "amount": 1800,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null,
      "link": "https://tabelog.com/osaka/A2701/A270101/27003766/"
    },
    {
      "id": "trp_d5_06",
      "day": 5,
      "time": "13:09",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "地鐵谷町線：東梅田 → 中崎町",
      "cityId": "osaka",
      "address": "大阪地鐵東梅田站",
      "addressLocal": "東梅田駅（Osaka Metro 谷町線）",
      "coords": [
        34.7006,
        135.4998
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【路線】東梅田站 2 號月台，谷町線往大日方向，13:09 開 → 13:10 到中崎町（直達、1 個站；Yahoo! 乘換案內）。\n【下車】中崎町站 2 號出口旁就是 Guignol（官網）。\n【車資】IC ¥190，ICOCA 拍卡。\n【備案】由大阪站前第 3 大廈步行約 15 分鐘（估算）。",
      "phone": null,
      "openHours": "建議班次 13:09 → 13:10",
      "price": "IC ¥190（ICOCA）",
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
        "line": "谷町線（往大日）",
        "durationMin": 1,
        "stopCount": 1,
        "liveApi": null
      }
    },
    {
      "id": "evt_d5_07",
      "day": 5,
      "time": "13:15",
      "timeHint": "afternoon",
      "type": "shop",
      "title": "歐洲舊貨與作家作品店 Guignol（ギニョール，中崎町）",
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
      "note": "【攻略】中崎町老屋區的小店，兼營歐洲 brocante（日常舊貨）、古董和日本作家作品。沒有名牌包，多是舊餐具、舊布、鈕扣、皮革小物這類生活舊物，價錢以日常用品為主；皮件有沒有貨要看當日。逛完可在中崎町小巷走一圈再去梅田。\n【實用】逢星期一、二休，另有臨時休息；2/11 是假期，出發前查看官網或 Instagram 確認營業。14:35 離開，步行約 20 分鐘到 Hilton Plaza West（估算），趕 15:00 香水體驗。按貨品標價。",
      "phone": "+81-6-6359-1388",
      "openHours": "12:00–19:00；逢星期一、二休（另有臨時休息）",
      "price": "按貨品標價",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d5_08",
      "day": 5,
      "time": "15:00",
      "timeHint": "afternoon",
      "type": "shop",
      "title": "LIBRA NATUTHERAPY 香水調製體驗（ライブラナチュテラピー）",
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
      "note": "【攻略】1988 年西宮創立的日本香薰品牌，自設 GC-MS 分析和無菌室入樽；有自家水蒸氣蒸餾的柚子和木曾檜等日本產精油。「溫和香水調製（優しい香水作り）」體驗約 60 分鐘，由約 100 種純精油調出自己的香水（包診斷、瓶和盒）。可順便問心儀精油有沒有成分分析表。\n【預約】體驗 12:00／15:00 兩場，建議預約 15:00。",
      "phone": "+81-90-9994-8706",
      "openHours": "11:00–20:00；香水體驗 12:00／15:00",
      "price": "10ml ¥4,950（15ml ¥5,940）",
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
      "id": "evt_d5_09",
      "day": 5,
      "time": "16:15",
      "timeHint": "afternoon",
      "type": "rest",
      "title": "酒店大浴場、休息",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區曾根崎1-2-7（Hotel Elcient 大阪梅田）",
      "addressLocal": "〒530-0057 大阪府大阪市北区曽根崎1-2-7 ホテル エルシエント大阪梅田",
      "coords": [
        34.6983,
        135.5027
      ],
      "tags": [
        "大浴場"
      ],
      "moodColor": "#9AA8A3",
      "note": "【攻略】Hilton Plaza 步行回酒店約 10 分鐘；大浴場 16:00 開，人少泡得舒服。",
      "phone": "+81-6-6360-2200",
      "openHours": "大浴場（2 樓，設桑拿，住客專用）16:00–翌日 01:00、06:00–09:00",
      "price": "住客免費",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d5_10",
      "day": 5,
      "time": "18:45",
      "timeHint": "evening",
      "type": "transport",
      "title": "地鐵谷町線：東梅田 → 天神橋筋六丁目",
      "cityId": "osaka",
      "address": "大阪地鐵東梅田站（谷町線）",
      "addressLocal": "Osaka Metro 東梅田駅（谷町線）",
      "coords": [
        34.7006,
        135.4998
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】酒店步行約 7 分鐘到東梅田站 7 號出口；2 號月台，谷町線往大日方向。\n【路線】18:45 開 → 18:48 到天神橋筋六丁目（直達、3 分鐘；Yahoo! 乘換案內）。\n【下車】天神橋筋六丁目站步行約 3 分鐘到黑兔食堂（Tabelog 標示約 200m；出口號碼待確認）。\n【車資】IC ¥190，ICOCA 拍卡。\n【備案】乘的士約 10 分鐘（估算）。",
      "phone": null,
      "openHours": "建議班次 18:45 → 18:48（約 5–7 分鐘一班）",
      "price": "IC ¥190（ICOCA）",
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
        "line": "谷町線（往大日）",
        "durationMin": 3,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "id": "evt_d5_11",
      "day": 5,
      "time": "19:00",
      "timeHint": "evening",
      "type": "food",
      "title": "晚餐：黑兔食堂（食堂 黒うさぎ，創作中華居酒屋）",
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
      "note": "【Tabelog】3.68（849 則評價；居酒屋 WEST 百名店 2026、2025）https://tabelog.com/osaka/A2701/A270103/27136227/\n【攻略】以中華料理技法配清酒的人氣居酒屋，連續兩年入選居酒屋百名店。坐吧枱（10 位）點當日推介的中華小菜，請店員按菜式配清酒，價錢比北新地親民。\n【預約】官網預約（yoyaku-kurousagi.com）優先，或電話 050-5600-5707；假期晚上人多，建議 1 個月前預約。\n【實用】星期二及第 4 個星期三休，假期照常營業（2/11 星期四營業）。",
      "phone": "+81-50-5600-5707",
      "openHours": "15:00–24:00；星期二及第 4 個星期三休，假期營業（Tabelog）",
      "price": "Tabelog 預算 ¥4,000–5,999（連清酒）",
      "cost": {
        "amount": 5500,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null,
      "link": "https://tabelog.com/osaka/A2701/A270103/27136227/"
    },
    {
      "id": "trp_d5_12",
      "day": 5,
      "time": "21:01",
      "timeHint": "night",
      "type": "transport",
      "title": "地鐵谷町線：天神橋筋六丁目 → 東梅田",
      "cityId": "osaka",
      "address": "大阪地鐵天神橋筋六丁目站",
      "addressLocal": "Osaka Metro 天神橋筋六丁目駅",
      "coords": [
        34.7103,
        135.5108
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【路線】天神橋筋六丁目站 1 號月台，谷町線往八尾南方向，21:01 開 → 21:05 到東梅田（直達、4 分鐘；Yahoo! 乘換案內）。\n【下車】東梅田站 7 號出口步行約 7 分鐘回酒店（酒店官方資料）。\n【車資】IC ¥190，ICOCA 拍卡。\n【備案】乘的士約 10 分鐘（估算）。",
      "phone": null,
      "openHours": "建議班次 21:01 → 21:05（約 5–7 分鐘一班）",
      "price": "IC ¥190（ICOCA）",
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
        "to": "東梅田",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵 Osaka Metro",
        "line": "谷町線（往八尾南）",
        "durationMin": 4,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "id": "evt_d6_01",
      "day": 6,
      "time": "09:00",
      "timeHint": "morning",
      "type": "food",
      "title": "早餐：酒店 ENT 自助早餐",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區曾根崎1-2-7（Hotel Elcient 大阪梅田） 1 樓 ENT",
      "addressLocal": "〒530-0057 大阪府大阪市北区曽根崎1-2-7 ホテル エルシエント大阪梅田 1F レストラン＆バー ENT",
      "coords": [
        34.6983,
        135.5027
      ],
      "tags": [
        "自助早餐"
      ],
      "moodColor": "#A0785A",
      "note": "【Tabelog】3.09（7 則評價；酒店早餐，選它是為了趕 09:50 巴士）https://tabelog.com/osaka/A2701/A270101/27127004/\n【攻略】今日 09:50 巴士對號入座，酒店早餐最省時：和洋自助，有章魚燒、大阪燒及日替惣菜。午餐要吃鰻魚，早餐適量即可。\n【實用】09:30 吃完出門，步行約 15 分鐘到阪急三番街巴士站（估算）。",
      "phone": "+81-6-6360-2200",
      "openHours": "06:30–10:00（最後入場 09:45）",
      "price": "住客 ¥2,200",
      "cost": {
        "amount": 2200,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null,
      "link": "https://tabelog.com/osaka/A2701/A270101/27127004/"
    },
    {
      "id": "trp_d6_02",
      "day": 6,
      "time": "09:50",
      "timeHint": "morning",
      "type": "transport",
      "title": "阪急高速巴士：大阪梅田（阪急三番街）→ 有馬溫泉",
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
      "note": "【上車】大阪梅田 阪急三番街高速巴士總站（阪急大阪梅田站茶屋町閘口樓下）。1–4 號站沒有固定，巴士約開車前 10 分鐘入站，按電子顯示板找有馬溫泉班次（阪急觀光巴士官方資料）。\n【班次】特急班 09:50 開 → 10:45 到有馬溫泉（約 55 分鐘，阪急觀光巴士官方時刻表）。全車對號入座，要預先買票；今次只買單程，回程改乘鐵路經神戶元町。\n【預約／付款】乘車日前一個月同日 09:00 開賣（即 2027/1/12 09:00），可經高速巴士預約網站（発車オーライネット）網上、電話 0570-089006 或窗口購買；ICOCA 不能代替訂座車票（待確認）。\n【下車】有馬溫泉巴士站，步行到鰻 大山（步行時間待確認）。\n【備案】鐵路約 72 分鐘、轉 3 次。",
      "phone": "+81-570-089006",
      "openHours": "09:50 → 10:45（梅田發 09:00／09:50／10:10…）",
      "price": "成人單程 ¥1,400",
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
      "id": "evt_d6_03",
      "day": 6,
      "time": "11:15",
      "timeHint": "morning",
      "type": "food",
      "title": "午餐：鰻 大山（鰻 おおやま，有馬溫泉）",
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
      "note": "【Tabelog】3.53（34 則評價）https://tabelog.com/hyogo/A2801/A280112/28066508/\n【攻略】2023 年開業的鰻魚專門店，點餐後才開鰻現烤，口碑讚皮脆肉厚。大將一人主理，按組逐一烤製，預留約 75 分鐘。與 D4 柴藤的大阪蒸焗式鰻魚飯做法不同，可比較。\n【預約】Tabelog 標示可預約：電話 078-958-5375（受理 11:00–18:30）訂 11:15，同時確認 2/12 營業（不定休）。賣完即止。\n【備案】如休息，改在溫泉街小吃；有馬多數名店星期二、三休，選擇有限。",
      "phone": "+81-78-958-5375",
      "openHours": "11:00–18:00（賣完即止）；不定休（Tabelog）",
      "price": "Tabelog 午市預算 ¥5,000–5,999",
      "cost": {
        "amount": 5000,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null,
      "link": "https://tabelog.com/hyogo/A2801/A280112/28066508/"
    },
    {
      "id": "evt_d6_04",
      "day": 6,
      "time": "12:40",
      "timeHint": "afternoon",
      "type": "rest",
      "title": "有馬溫泉 金之湯（金の湯）",
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
      "note": "【攻略】有馬名物「金泉」：含鐵質和鹽分的茶褐色溫泉，保溫力強。泡 10–15 分鐘就起來休息，不要一次泡太久。門外有免費足湯。2026 年 3 月翻新後已重開。\n【實用】毛巾可在館內購買；今次只泡金之湯（平日 ¥650），13:30 起來，留時間逛溫泉街；想加泡銀之湯可改買兩館共通券 ¥1,200。第 2、4 個星期二休（2/12 星期五照開）。",
      "phone": "+81-78-904-0680",
      "openHours": "08:00–22:00（最後入場 21:30）；第 2、4 個星期二休",
      "price": "成人平日 ¥650；金銀共通券 ¥1,200",
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
      "id": "evt_d6_05",
      "day": 6,
      "time": "13:35",
      "timeHint": "afternoon",
      "type": "shop",
      "title": "有馬人形筆 灰吹屋 西田筆店（灰吹屋 西田筆店）",
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
      "note": "【攻略】有馬唯一仍然手工製作「有馬人形筆」的老店：筆桿以彩色絲線手捲編出花紋，提筆寫字時筆尾會冒出一個小人偶頭。既可寫字作畫，也可當擺設，是溫泉街上最有本地味道的手作。可請店主示範機關，挑一支自用；人形筆 1 支（紙盒）¥3,300，2 支裝 ¥4,900，大號 2 支（木盒）¥9,000。\n【實用】2/12 星期五營業（逢星期三、四休）；14:00 前結帳，步行到神戶電鐵有馬溫泉站（估算約 5 分鐘）。",
      "phone": "+81-78-904-0761",
      "openHours": "10:00–16:00；逢星期三、四休",
      "price": "人形筆 1 支（紙盒）¥3,300；2 支裝 ¥4,900；大號 2 支（木盒）¥9,000",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d6_06",
      "day": 6,
      "time": "14:09",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "神戶電鐵→北神線→JR：有馬溫泉 → 元町",
      "cityId": "kobe",
      "address": "神戶電鐵有馬溫泉站",
      "addressLocal": "有馬温泉駅（神鉄有馬線）",
      "coords": [
        34.7993,
        135.2465
      ],
      "tags": [
        "鐵路"
      ],
      "moodColor": "#2A7F7A",
      "note": "【路線】有馬溫泉站 1／2 號月台（始發）往有馬口，14:09 開 → 14:13 到有馬口；轉 3 號月台往新開地，14:14 開 → 14:25 到谷上；轉神戶市營地下鐵北神線 5 號月台（始發）往西神中央，14:27 開 → 14:37 到三宮；步行約 2 分鐘到 JR 三之宮站，3 號月台往須磨，14:46 開 → 14:47 到元町（轉乘 3 次，共 38 分鐘；Yahoo! 乘換案內）。\n【下車】JR 元町站往南步行約 10 分鐘到海岸通（估算；出口待確認）。\n【車資】IC ¥870（神鐵／地下鐵 ¥720＋JR ¥150），ICOCA 拍卡。\n【備案】三宮站直接步行到海岸通約 20 分鐘（估算），或乘的士。",
      "phone": null,
      "openHours": "建議班次 14:09 → 14:47",
      "price": "IC ¥870（ICOCA）",
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
        "line": "神鐵有馬線（往有馬口）→ 神鐵有馬線（往新開地）→ 北神線（往西神中央）→ JR 神戶線（往須磨）",
        "durationMin": 38,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "id": "evt_d6_07",
      "day": 6,
      "time": "15:00",
      "timeHint": "afternoon",
      "type": "shop",
      "title": "創作鞄 槌井（創作鞄槌井，神戶皮革工房）",
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
      "note": "【攻略】皮革職人槌井仁基 2012 年開設的工房兼店舖，店後就是工作枱，袋、銀包和小皮件全部手工製作，也接受全訂製。沒有名牌標籤，看的是皮革和車縫。可以請職人介紹皮革種類和用久後的變化，摸一摸不同的植鞣皮。參考價（官網，稅前）：三摺銀包 ¥6,500、經典二摺銀包 ¥22,500、長銀包 ¥28,000；訂製要數星期，可留下聯絡方法日後寄港。\n【實用】只在星期四至日營業（2/12 星期五照開）；隔鄰就是 Wicked。",
      "phone": "+81-78-381-5545",
      "openHours": "11:00–18:00；逢星期一、二、三休",
      "price": "三摺銀包 ¥6,500；二摺銀包 ¥22,500；長銀包 ¥28,000（官網，稅前）",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d6_08",
      "day": 6,
      "time": "15:45",
      "timeHint": "afternoon",
      "type": "shop",
      "title": "歐洲古著與古皮具店 Wicked（ウィキッド）",
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
      "note": "【攻略】元町海岸通的古著店，主打 1940–90 年代歐洲 vintage：舊皮鞋、皮革製品、歐洲工作服和軍品。多是沒有品牌的舊貨，正好用來尋找有歲月痕跡的皮件。看中皮件時，先檢查邊油、縫線和五金，再問價。\n【實用】14:00 開門，逢星期四休（2/12 星期五照開）；以男裝為主，皮件數量要看當日貨源。按貨品標價。",
      "phone": "+81-78-351-6760",
      "openHours": "14:00–20:00；逢星期四休",
      "price": "按貨品標價",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d6_09",
      "day": 6,
      "time": "16:20",
      "timeHint": "afternoon",
      "type": "shop",
      "title": "古道具雜貨店 雜駁商會（雑駁商会）",
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
      "note": "【攻略】元町商店街樓上的古道具店，名字取「雜駁」之意：不分國家、年代或品牌，舊衣、古道具、傢具和各種雜物都有。慢慢翻，或許會遇到沒有牌子、但皮質很好的舊銀包、皮袋或皮帶。小件古物價錢一般親民，帶現金較方便。\n【實用】13:00 開，逢星期三、四休（2/12 星期五照開）；16:55 離開，步行約 5 分鐘到 JR 元町站（估算）。按貨品標價。",
      "phone": "+81-90-8483-9977",
      "openHours": "13:00–19:00；逢星期三、四休",
      "price": "按貨品標價",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d6_10",
      "day": 6,
      "time": "17:07",
      "timeHint": "evening",
      "type": "transport",
      "title": "JR 神戶線快速→JR 東西線：元町 → 北新地",
      "cityId": "kobe",
      "address": "JR 元町站",
      "addressLocal": "元町駅（JR神戸線）",
      "coords": [
        34.6894,
        135.1872
      ],
      "tags": [
        "JR"
      ],
      "moodColor": "#2A7F7A",
      "note": "【路線】JR 元町站 3／4 號月台，JR 神戶線快速往米原方向，17:07 開 → 17:30 到尼崎；轉 6 號月台 JR 東西線快速往木津方向，17:31 開 → 17:43 到北新地（轉乘 1 次，共 36 分鐘；Yahoo! 乘換案內）。\n【下車】北新地站步行約 5 分鐘到雅釀（估算；出口號碼待確認）。\n【車資】IC ¥420，ICOCA 拍卡。\n【備案】JR 神戶線新快速直達大阪站，再步行約 12 分鐘（估算）。",
      "phone": null,
      "openHours": "建議班次 17:07 → 17:43",
      "price": "IC ¥420（ICOCA）",
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
        "line": "JR 神戶線快速（往米原）→ JR 東西線快速（往木津）",
        "durationMin": 36,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "id": "evt_d6_11",
      "day": 6,
      "time": "18:00",
      "timeHint": "evening",
      "type": "food",
      "title": "晚餐：雅釀 GAJO（雅醸，日本酒配對套餐）",
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
      "note": "【Tabelog】3.72（78 則評價）https://tabelog.com/osaka/A2701/A270101/27126021/\n【攻略】今次行程的日本酒配對大餐：只有 8 個吧枱位，18:00 一起開始的 10 品套餐。店方不靠調味料，以冰溫熟成、發酵及精準火候帶出食材原味（Tabelog 店方介紹）。建議選「通常日本酒配對（ペアリング）」¥29,000；想試稀有酒可升級「Premium 配對」¥40,000。\n【預約】完全預約制，Tabelog 網上或電話 050-3145-9210；晚市套餐頁列明 1–8 名可訂。取消費：72 小時前 50%、48 小時前 70%、24 小時前 100%。服裝 smart casual：今日由早上出門就穿 smart casual，不用回酒店更衣。",
      "phone": "+81-50-3145-9210",
      "openHours": "星期一至五 12:00–14:15、18:00–20:15（一起開始）、21:00–02:00；六不定休；日及假期休（Tabelog）",
      "price": "日本酒配對套餐 ¥29,000（Tabelog，稅及服務費全包）；只要料理 ¥23,500",
      "cost": {
        "amount": 29000,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null,
      "link": "https://tabelog.com/osaka/A2701/A270101/27126021/"
    },
    {
      "id": "evt_d6_12",
      "day": 6,
      "time": "20:30",
      "timeHint": "evening",
      "type": "rest",
      "title": "酒店大浴場",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區曾根崎1-2-7（Hotel Elcient 大阪梅田）",
      "addressLocal": "〒530-0057 大阪府大阪市北区曽根崎1-2-7 ホテル エルシエント大阪梅田",
      "coords": [
        34.6983,
        135.5027
      ],
      "tags": [
        "大浴場"
      ],
      "moodColor": "#9AA8A3",
      "note": "【攻略】配對套餐酒量不少，先喝水休息 30 分鐘再泡浴；大浴場開到凌晨 1 點。",
      "phone": "+81-6-6360-2200",
      "openHours": "大浴場（2 樓，設桑拿，住客專用）16:00–翌日 01:00、06:00–09:00",
      "price": "住客免費",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d7_01",
      "day": 7,
      "time": "09:00",
      "timeHint": "morning",
      "type": "food",
      "title": "早餐：酒店 ENT 自助早餐",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區曾根崎1-2-7（Hotel Elcient 大阪梅田） 1 樓 ENT",
      "addressLocal": "〒530-0057 大阪府大阪市北区曽根崎1-2-7 ホテル エルシエント大阪梅田 1F レストラン＆バー ENT",
      "coords": [
        34.6983,
        135.5027
      ],
      "tags": [
        "自助早餐"
      ],
      "moodColor": "#A0785A",
      "note": "【Tabelog】3.09（7 則評價；酒店早餐，今日試酒前墊胃）https://tabelog.com/osaka/A2701/A270101/27127004/\n【攻略】今天要試很多酒，早餐多吃一點墊胃：大阪燒、日替惣菜和沙律都有。09:40 吃完，09:45 出門步行到阪神大阪梅田站（約 10 分鐘，估算）。",
      "phone": "+81-6-6360-2200",
      "openHours": "06:30–10:00（最後入場 09:45）",
      "price": "住客 ¥2,200",
      "cost": {
        "amount": 2200,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null,
      "link": "https://tabelog.com/osaka/A2701/A270101/27127004/"
    },
    {
      "id": "trp_d7_02",
      "day": 7,
      "time": "10:00",
      "timeHint": "morning",
      "type": "transport",
      "title": "阪神本線特急：大阪梅田 → 魚崎",
      "cityId": "kobe",
      "address": "阪神大阪梅田站",
      "addressLocal": "阪神 大阪梅田駅",
      "coords": [
        34.7014,
        135.4971
      ],
      "tags": [
        "阪神"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】酒店步行約 10 分鐘到阪神大阪梅田站（估算）；2 號月台（始發），阪神本線特急往須磨浦公園方向。\n【路線】10:00 開 → 10:22 到魚崎（直達、22 分鐘；Yahoo! 乘換案內）。\n【下車】魚崎站向南步行約 10 分鐘到菊正宗（出口待確認）。\n【車資】IC ¥300，ICOCA 拍卡。\n【備案】下一班特急約 10 分鐘後（估算）。",
      "phone": null,
      "openHours": "建議班次 10:00 → 10:22",
      "price": "IC ¥300（ICOCA）",
      "cost": {
        "amount": 300,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "train",
        "from": "大阪梅田（阪神）",
        "to": "魚崎",
        "fromEventId": null,
        "toEventId": null,
        "operator": "阪神電氣鐵道",
        "line": "阪神本線特急（往須磨浦公園）",
        "durationMin": 22,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "id": "evt_d7_03",
      "day": 7,
      "time": "10:35",
      "timeHint": "morning",
      "type": "sight",
      "title": "菊正宗 藏開（或菊正宗酒造記念館）",
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
      "note": "【攻略】菊正宗以「生酛」辛口出名。藏開日（往年 2 月星期六 10:00–15:00，免費入場）有生酛搾立新酒免費試飲、付費試飲、酒藏參觀和酒粕湯；平日記念館也有季節生原酒試飲、酒藏雪糕。記念館限定「奉献」「菊絵徳利」適合作手信。\n【注意】2027 年藏開日期未公布（很可能是 2/6 或 2/13），12 月至 1 月再確認；記念館逢星期二休。",
      "phone": "+81-78-854-1029",
      "openHours": "記念館 09:30–16:30（入館至 16:00）；藏開往年 10:00–15:00",
      "price": "免費入場；部分試飲收費",
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
      "title": "浜福鶴 吟釀工房（小山本家酒造，隔著玻璃看釀酒）",
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
      "note": "【攻略】灘五鄉中少數可以看到真實釀酒現場的酒藏：隔著玻璃看蒸米、製麴、醪發酵和榨酒，2 月釀造季最有看頭。入口處可免費試飲生酒；付費試飲處可比較吟釀、大吟釀。可買工房限定、按量販售的秘藏酒帶回香港。\n【實用】免費入場，10 人以下不用預約；由菊正宗步行約 7 分鐘（估算）。12:40 離開，步行約 8 分鐘到阪神魚崎站（估算）。逢星期一休（2/13 星期六照開）。",
      "phone": "+81-78-411-8339",
      "openHours": "10:00–17:00（免費試飲至 16:50；付費試飲 L.O. 16:15）；逢星期一休（假期照開）",
      "price": "免費入場；生酒免費試飲；付費試飲按酒款收費",
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
      "title": "阪神本線：魚崎 → 石屋川",
      "cityId": "kobe",
      "address": "阪神魚崎站",
      "addressLocal": "魚崎駅（阪神本線）",
      "coords": [
        34.7138,
        135.2686
      ],
      "tags": [
        "阪神"
      ],
      "moodColor": "#2A7F7A",
      "note": "【路線】魚崎站 2 號月台，特急往須磨浦公園方向，12:53 開 → 12:55 到御影；轉 4 號月台普通車往高速神戶，12:56 開 → 12:57 到石屋川（轉乘 1 次，共 4 分鐘；Yahoo! 乘換案內）。\n【下車】石屋川站步行約 6 分鐘到酒林（估算）。\n【車資】IC ¥160，ICOCA 拍卡。\n【備案】由浜福鶴步行約 30 分鐘到酒林，或乘的士約 10 分鐘（估算）。",
      "phone": null,
      "openHours": "建議班次 12:53 → 12:57",
      "price": "IC ¥160（ICOCA）",
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
        "line": "阪神本線特急（往須磨浦公園）→ 阪神本線普通（往高速神戶）",
        "durationMin": 4,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "id": "evt_d7_06",
      "day": 7,
      "time": "13:15",
      "timeHint": "afternoon",
      "type": "food",
      "title": "午餐：酒林（さかばやし，神戶酒心館酒藏料亭）",
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
      "note": "【Tabelog】3.48（約 300 則評價；酒藏附設料亭，飲品評分 3.91；分數略低於 3.5，以酒藏體驗保留）https://tabelog.com/hyogo/A2801/A280106/28000407/\n【攻略】「福壽」酒藏附設的料亭，主打自家製豆腐和蕎麥麵，配藏元生原酒。推介「御影膳（みかげ膳）」¥3,500；必試自家製手舀豆腐（すくい豆腐，¥680）和酒粕雪糕（¥500）。\n【預約】電話預約 13:15（可預約一年內）；逢星期三休。由阪神石屋川站步行約 6 分鐘（估算）。",
      "phone": "+81-78-841-2612",
      "openHours": "午市 11:30–15:00（L.O. 14:30）；星期三休",
      "price": "御影膳 ¥3,500（官網）",
      "cost": {
        "amount": 3500,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null,
      "link": "https://tabelog.com/hyogo/A2801/A280106/28000407/"
    },
    {
      "id": "evt_d7_07",
      "day": 7,
      "time": "14:45",
      "timeHint": "afternoon",
      "type": "shop",
      "title": "神戶酒心館 東明藏（福壽 FUKUJU）",
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
      "note": "【攻略】福壽的藏元商店，有免費試飲和季節推介酒；必試藏直採生酒（純米、大吟釀生原酒）和微發泡「FUKUJU KEG DRAFT」。藏元限定酒和酒粕適合帶回香港。晚上還有居酒屋，試飲適可而止。\n【實用】16:20 前出發，沿河向南步行約 8 分鐘到阪神石屋川站。",
      "phone": "+81-78-841-1121",
      "openHours": "10:00–18:30（1/1–1/3 休）",
      "price": "免費試飲",
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
      "title": "阪神本線：石屋川 → 芦屋",
      "cityId": "kobe",
      "address": "阪神石屋川站",
      "addressLocal": "阪神 石屋川駅",
      "coords": [
        34.7135,
        135.2501
      ],
      "tags": [
        "阪神"
      ],
      "moodColor": "#2A7F7A",
      "note": "【路線】石屋川站 1 號月台，普通車往大阪梅田方向，16:33 開 → 16:34 到御影；轉 1 號月台直通特急往大阪梅田，16:36 開 → 16:41 到芦屋（轉乘 1 次，共 8 分鐘；Yahoo! 乘換案內）。\n【下車】阪神芦屋站就在芦屋川上，出站即可沿河散步。\n【車資】IC ¥200，ICOCA 拍卡。\n【備案】乘普通車直達芦屋（時間較長，班次待確認）。",
      "phone": null,
      "openHours": "建議班次 16:33 → 16:41",
      "price": "IC ¥200（ICOCA）",
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
        "line": "阪神本線普通（往大阪梅田）→ 阪神本線直通特急（往大阪梅田）",
        "durationMin": 8,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "id": "evt_d7_09",
      "day": 7,
      "time": "16:45",
      "timeHint": "afternoon",
      "type": "sight",
      "title": "芦屋川河畔散步",
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
      "note": "【攻略】芦屋川是關西有名的高級住宅區河道，兩岸松林步道清靜，適合試酒後醒一醒酒。沿河堤向北慢行，再折返茶屋之町；2 月日落約 17:40，看完黃昏剛好去吃晚飯。\n【實用】免費；河邊風大，帶圍巾。17:55 步行到食堂 Kifune（阪神芦屋站約 380m）。",
      "phone": null,
      "openHours": "全日開放",
      "price": "免費",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d7_10",
      "day": 7,
      "time": "18:00",
      "timeHint": "evening",
      "type": "food",
      "title": "晚餐：食堂 Kifune（食堂 きふね，芦屋居酒屋）",
      "cityId": "kobe",
      "address": "日本兵庫縣芦屋市茶屋之町11-5",
      "addressLocal": "兵庫県芦屋市茶屋之町11-5 食堂 きふね",
      "coords": [
        34.7295,
        135.3072
      ],
      "tags": [
        "居酒屋",
        "清酒",
        "百名店",
        "可預約"
      ],
      "moodColor": "#A0785A",
      "note": "【Tabelog】3.70（175 則評價；居酒屋 WEST 百名店 2026（2024、2025 亦入選））https://tabelog.com/hyogo/A2803/A280302/28058371/\n【攻略】連續三年入選居酒屋百名店的芦屋小店，店方對清酒、燒酎及葡萄酒都很講究。在吧枱點當日推介小菜，請店主按菜配清酒，順便和今天灘五鄉試過的酒作比較。\n【預約】吧枱 6 位＋枱 4 位，建議電話預約 080-1604-8597，指定 18:00 吧枱一人位。可用信用卡。\n【實用】18:00 開門，不定休，訂位時確認 2/13 營業。",
      "phone": "+81-80-1604-8597",
      "openHours": "18:00–翌日 01:00；不定休（Tabelog）",
      "price": "Tabelog 預算 ¥5,000–7,999（連酒）",
      "cost": {
        "amount": 6500,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null,
      "link": "https://tabelog.com/hyogo/A2803/A280302/28058371/"
    },
    {
      "id": "trp_d7_11",
      "day": 7,
      "time": "20:10",
      "timeHint": "evening",
      "type": "transport",
      "title": "阪神本線直通特急：芦屋 → 大阪梅田",
      "cityId": "kobe",
      "address": "阪神芦屋站",
      "addressLocal": "阪神 芦屋駅",
      "coords": [
        34.7279,
        135.3038
      ],
      "tags": [
        "阪神"
      ],
      "moodColor": "#2A7F7A",
      "note": "【路線】阪神芦屋站 1 號月台，直通特急往大阪梅田方向，20:10 開 → 20:30 到大阪梅田（直達、20 分鐘；Yahoo! 乘換案內）。\n【下車】阪神大阪梅田站步行約 10 分鐘回酒店（估算）。\n【車資】IC ¥300，ICOCA 拍卡。\n【備案】JR 芦屋站乘 JR 神戶線到大阪（JR 芦屋站在阪神芦屋站以北，步行時間待確認）。",
      "phone": null,
      "openHours": "建議班次 20:10 → 20:30",
      "price": "IC ¥300（ICOCA）",
      "cost": {
        "amount": 300,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "train",
        "from": "芦屋（阪神）",
        "to": "大阪梅田（阪神）",
        "fromEventId": null,
        "toEventId": null,
        "operator": "阪神電氣鐵道",
        "line": "阪神本線直通特急（往大阪梅田）",
        "durationMin": 20,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "id": "evt_d7_12",
      "day": 7,
      "time": "20:45",
      "timeHint": "evening",
      "type": "rest",
      "title": "酒店大浴場",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區曾根崎1-2-7（Hotel Elcient 大阪梅田）",
      "addressLocal": "〒530-0057 大阪府大阪市北区曽根崎1-2-7 ホテル エルシエント大阪梅田",
      "coords": [
        34.6983,
        135.5027
      ],
      "tags": [
        "大浴場"
      ],
      "moodColor": "#9AA8A3",
      "note": "【攻略】試了一天酒，先喝水再泡浴，不要泡太久；大浴場開到凌晨 1 點。",
      "phone": "+81-6-6360-2200",
      "openHours": "大浴場（2 樓，設桑拿，住客專用）16:00–翌日 01:00、06:00–09:00",
      "price": "住客免費",
      "cost": null,
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
      "title": "早餐：純喫茶 Sunshine（サンシャイン，大阪站前第 3 大廈）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區梅田1-1-3 大阪站前第 3 大廈 B2",
      "addressLocal": "大阪府大阪市北区梅田1-1-3 大阪駅前第3ビル B2F サンシャイン",
      "coords": [
        34.6984,
        135.4999
      ],
      "tags": [
        "老喫茶"
      ],
      "moodColor": "#A0785A",
      "note": "【Tabelog】3.57（424 則評價；喫茶店 百名店 2022（遷址前舊店））https://tabelog.com/osaka/A2701/A270101/27149249/\n【保留早開始】四天會古董市 07:00 開，好貨早上被買走；早內 午市只有 11:30 一場可預約。\n【攻略】週末 08:00 開，開門即到可避開人潮。D3 吃過熱香餅的話，今天可試其他早餐，配自家烘焙咖啡。\n【實用】店舖距東梅田站約 220m，08:50 結帳即可趕 09:01 谷町線。",
      "phone": "+81-6-6313-6797",
      "openHours": "星期一至五 07:30–19:45；六日及假期 08:00–18:30（L.O. 18:00）",
      "price": "Tabelog 預算 ¥1,000–1,999",
      "cost": {
        "amount": 1200,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null,
      "link": "https://tabelog.com/osaka/A2701/A270101/27149249/"
    },
    {
      "id": "trp_d8_02",
      "day": 8,
      "time": "09:01",
      "timeHint": "morning",
      "type": "transport",
      "title": "地鐵谷町線：東梅田 → 四天王寺前夕陽丘",
      "cityId": "osaka",
      "address": "大阪地鐵東梅田站（谷町線）",
      "addressLocal": "Osaka Metro 東梅田駅（谷町線）",
      "coords": [
        34.7006,
        135.4998
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【保留早開始】四天會古董市 07:00 開，好貨早上被買走；早內 午市只有 11:30 一場可預約。\n【路線】東梅田站 1 號月台，谷町線往八尾南方向，09:01 開 → 09:14 到四天王寺前夕陽丘（直達、13 分鐘；Yahoo! 乘換案內）。\n【下車】四天王寺前夕陽丘站 4 號出口（第三方資料），向南步行約 5 分鐘到四天王寺（四天王寺官方資料）。\n【車資】IC ¥240，ICOCA 拍卡。\n【備案】谷町線約 5–7 分鐘一班。",
      "phone": null,
      "openHours": "建議班次 09:01 → 09:14",
      "price": "IC ¥240（ICOCA）",
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
        "to": "四天王寺前夕陽丘",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵 Osaka Metro",
        "line": "谷町線（往八尾南）",
        "durationMin": 13,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "id": "evt_d8_03",
      "day": 8,
      "time": "09:20",
      "timeHint": "morning",
      "type": "shop",
      "title": "四天會古董市（四天会蚤の市，四天王寺）",
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
      "note": "【保留早開始】四天會古董市 07:00 開，好貨早上被買走；早內 午市只有 11:30 一場可預約。\n【攻略】每月第 2 個星期日在四天王寺境內舉行，約 100 檔古董和古道具，是今次行程找古皮具、古首飾的最好機會。先快速逛一圈記下心儀攤檔，午飯後再回來逛第二圈議價。\n【實用】入場免費；很多攤檔只收現金，帶足夠現金和小環保袋；雨天照開。",
      "phone": "+81-6-6771-0066",
      "openHours": "每月第 2 個星期日 07:00–16:00（雨天照開）",
      "price": "免費入場（多數攤檔只收現金）",
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
      "title": "午餐：四天王寺 早內（はやうち，蕎麥麵）",
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
      "note": "【Tabelog】3.68（497 則評價；蕎麥 WEST 百名店 2025、2024）https://tabelog.com/osaka/A2701/A270203/27049805/\n【攻略】Tabelog蕎麥百名店（2024、2025），店主出身名店「土山人」。午市只有 11:30 一起開始的「午市蕎麥膳（お昼の蕎麦膳）」（¥5,200）接受預約；單點人氣是柚子香鴨汁蒸籠（¥1,800）。\n【預約】電話預約 11:30 蕎麥膳；不預約要排隊。逢星期三休。",
      "phone": "+81-6-6773-2858",
      "openHours": "星期一二四五 11:30–15:00（L.O.）；六日 11:30–15:00、17:00–20:30（L.O.）；星期三休",
      "price": "午市蕎麥膳 ¥5,200（Tabelog店方資料）",
      "cost": {
        "amount": 5200,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null,
      "link": "https://tabelog.com/osaka/A2701/A270203/27049805/"
    },
    {
      "id": "evt_d8_05",
      "day": 8,
      "time": "12:45",
      "timeHint": "afternoon",
      "type": "shop",
      "title": "四天會古董市 第二圈",
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
      "note": "【攻略】回到早上記下的心儀攤檔，下午檔主較願意議價。可說「可以便宜一點嗎？（少し安くなりますか）」。14:10 前走回四天王寺前夕陽丘站。",
      "phone": "+81-6-6771-0066",
      "openHours": "07:00–16:00",
      "price": "免費入場",
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
      "title": "地鐵谷町線：四天王寺前夕陽丘 → 天神橋筋六丁目",
      "cityId": "osaka",
      "address": "大阪地鐵四天王寺前夕陽丘站",
      "addressLocal": "Osaka Metro 四天王寺前夕陽ヶ丘駅",
      "coords": [
        34.6588,
        135.5142
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【路線】四天王寺前夕陽丘站 2 號月台，谷町線往大日方向，14:20 開 → 14:36 到天神橋筋六丁目（直達、16 分鐘；Yahoo! 乘換案內）。\n【下車】天神橋筋六丁目站 5 號出口向北步行約 10 分鐘到浪花之湯。\n【車資】IC ¥240，ICOCA 拍卡。\n【備案】谷町線約 5–7 分鐘一班。",
      "phone": null,
      "openHours": "建議班次 14:20 → 14:36",
      "price": "IC ¥240（ICOCA）",
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
        "line": "谷町線（往大日）",
        "durationMin": 16,
        "stopCount": null,
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
      "openHours": "平日 10:00–翌日 01:00；週末及假期 08:00–翌日 01:00（最後入場 24:00）",
      "price": "週末成人 ¥1,000",
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
      "title": "地鐵谷町線：天神橋筋六丁目 → 谷町六丁目",
      "cityId": "osaka",
      "address": "大阪地鐵天神橋筋六丁目站",
      "addressLocal": "Osaka Metro 天神橋筋六丁目駅",
      "coords": [
        34.7103,
        135.5108
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【路線】天神橋筋六丁目站 1 號月台，谷町線往八尾南方向，16:19 開 → 16:32 到谷町六丁目（直達、13 分鐘；Yahoo! 乘換案內）。\n【下車】谷町六丁目站步行約 2 分鐘到燗之美穗（約 130m；出口號碼待確認）。\n【車資】IC ¥240，ICOCA 拍卡。\n【備案】谷町線約 5–7 分鐘一班。",
      "phone": null,
      "openHours": "建議班次 16:19 → 16:32",
      "price": "IC ¥240（ICOCA）",
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
        "line": "谷町線（往八尾南）",
        "durationMin": 13,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "id": "evt_d8_09",
      "day": 8,
      "time": "16:45",
      "timeHint": "afternoon",
      "type": "food",
      "title": "晚餐：燗之美穗（燗の美穂，燙酒專門）",
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
      "note": "【Tabelog】3.43（120 則評價；米芝蓮 Bib Gourmand；分數未到 3.5，以燙酒專門吧枱、女店主保留）https://tabelog.com/osaka/A2701/A270204/27117661/\n【攻略】女店主中村美穗由大阪名酒舖「山中酒店（山中酒の店）」自立，2020 年由博勞町搬到谷町六丁目古民家；米芝蓮 Bib Gourmand（2022–2025）。常備 60–70 款適合燙熱的西日本清酒，說出口味請店員挑選即可。必吃三款前菜（¥600）、招牌炙燒鴨里脊（たたき）；店主推介生原酒熱燗配芝士。一人女客比例高，最後一晚的清酒總結。\n【預約】只有 11 個吧枱位，開門後經常滿座，建議電話預約星期日 16:45（星期日 15:00 開）。\n【注意】地址已搬遷（舊博勞町地址不再適用）；2027 年 2 月休息日要看店主 blog。",
      "phone": "+81-6-7222-2510",
      "openHours": "星期一至六 16:00–22:00；日 15:00–22:00（Tabelog）；休息日以 blog 為準",
      "price": "Tabelog 預算 ¥6,000–7,999（連燙酒）",
      "cost": {
        "amount": 7000,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null,
      "link": "https://tabelog.com/osaka/A2701/A270204/27117661/"
    },
    {
      "id": "trp_d8_10",
      "day": 8,
      "time": "18:54",
      "timeHint": "evening",
      "type": "transport",
      "title": "地鐵谷町線：谷町六丁目 → 東梅田",
      "cityId": "osaka",
      "address": "大阪地鐵谷町六丁目站",
      "addressLocal": "Osaka Metro 谷町六丁目駅（谷町線）",
      "coords": [
        34.6761,
        135.5157
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【路線】谷町六丁目站 2 號月台，谷町線往大日方向，18:54 開 → 19:02 到東梅田（直達、8 分鐘；Yahoo! 乘換案內）。\n【下車】東梅田站 7 號出口步行約 7 分鐘回酒店（酒店官方資料）。\n【車資】IC ¥240，ICOCA 拍卡。\n【備案】乘的士約 15 分鐘（估算）。",
      "phone": null,
      "openHours": "建議班次 18:54 → 19:02（約 5–7 分鐘一班）",
      "price": "IC ¥240（ICOCA）",
      "cost": {
        "amount": 240,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "subway",
        "from": "谷町六丁目",
        "to": "東梅田",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵 Osaka Metro",
        "line": "谷町線（往大日）",
        "durationMin": 8,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "id": "evt_d8_11",
      "day": 8,
      "time": "19:15",
      "timeHint": "evening",
      "type": "rest",
      "title": "酒店大浴場",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區曾根崎1-2-7（Hotel Elcient 大阪梅田）",
      "addressLocal": "〒530-0057 大阪府大阪市北区曽根崎1-2-7 ホテル エルシエント大阪梅田",
      "coords": [
        34.6983,
        135.5027
      ],
      "tags": [
        "大浴場"
      ],
      "moodColor": "#9AA8A3",
      "note": "【攻略】最後一晚，先整理清酒和行李，再泡浴；明早 08:00 還有朝湯。",
      "phone": "+81-6-6360-2200",
      "openHours": "大浴場（2 樓，設桑拿，住客專用）16:00–翌日 01:00、06:00–09:00",
      "price": "住客免費",
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
      "title": "最後一次朝湯",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區曾根崎1-2-7（Hotel Elcient 大阪梅田）",
      "addressLocal": "〒530-0057 大阪府大阪市北区曽根崎1-2-7 ホテル エルシエント大阪梅田",
      "coords": [
        34.6983,
        135.5027
      ],
      "tags": [
        "大浴場"
      ],
      "moodColor": "#9AA8A3",
      "note": "【保留早開始】回程日：大浴場 09:00 關、11:00 退房、11:50 巴士，所以朝湯排 08:00–08:45。",
      "phone": "+81-6-6360-2200",
      "openHours": "大浴場朝湯 06:00–09:00",
      "price": "住客免費",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d9_02",
      "day": 9,
      "time": "09:00",
      "timeHint": "morning",
      "type": "food",
      "title": "早餐：酒店 ENT 自助早餐",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區曾根崎1-2-7（Hotel Elcient 大阪梅田） 1 樓 ENT",
      "addressLocal": "〒530-0057 大阪府大阪市北区曽根崎1-2-7 ホテル エルシエント大阪梅田 1F レストラン＆バー ENT",
      "coords": [
        34.6983,
        135.5027
      ],
      "tags": [
        "自助早餐"
      ],
      "moodColor": "#A0785A",
      "note": "【Tabelog】3.09（7 則評價；酒店早餐，回程日最省時）https://tabelog.com/osaka/A2701/A270101/27127004/\n【攻略】最後一頓大阪早餐，記得試章魚燒和季節 smoothie；09:50 前吃完。",
      "phone": "+81-6-6360-2200",
      "openHours": "06:30–10:00（最後入場 09:45）",
      "price": "住客 ¥2,200",
      "cost": {
        "amount": 2200,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null,
      "link": "https://tabelog.com/osaka/A2701/A270101/27127004/"
    },
    {
      "id": "evt_d9_03",
      "day": 9,
      "time": "10:00",
      "timeHint": "morning",
      "type": "shop",
      "title": "阪神梅田本店 地庫 1 樓 最後買酒",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區梅田1-13-13 阪神梅田本店 B1",
      "addressLocal": "大阪府大阪市北区梅田1-13-13 阪神梅田本店 B1F リカーワールド",
      "coords": [
        34.7012,
        135.4986
      ],
      "tags": [
        "清酒"
      ],
      "moodColor": "#8C8378",
      "note": "【攻略】10:00 開門即入，40 分鐘內買完；要求防震包裝。退稅要帶護照，離境時在機場海關辦理。",
      "phone": "+81-6-6345-1201",
      "openHours": "10:00–20:00",
      "price": "按貨品標價",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d9_04",
      "day": 9,
      "time": "11:00",
      "timeHint": "morning",
      "type": "hotel",
      "title": "退房（寄存行李）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區曾根崎1-2-7（Hotel Elcient 大阪梅田）",
      "addressLocal": "〒530-0057 大阪府大阪市北区曽根崎1-2-7 ホテル エルシエント大阪梅田",
      "coords": [
        34.6983,
        135.5027
      ],
      "tags": [
        "退房"
      ],
      "moodColor": "#3A3A3A",
      "note": "【實用】退房前檢查清酒包裝及行李重量（回程建議加購 32kg）。11:30 前出發，步行到阪急三番街利木津巴士 UM1 站約 15 分鐘（估算），行李重可乘的士。",
      "phone": "+81-6-6360-2200",
      "openHours": "Check-out 11:00",
      "price": "不適用",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d9_05",
      "day": 9,
      "time": "11:50",
      "timeHint": "morning",
      "type": "transport",
      "title": "機場利木津巴士：阪急三番街（UM1）→ 關西機場第 1 航廈",
      "cityId": "osaka",
      "address": "大阪站前 阪急三番街巴士站",
      "addressLocal": "阪急三番街（大阪駅前）リムジンバスのりば",
      "coords": [
        34.7047,
        135.4991
      ],
      "tags": [
        "機場巴士"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】阪急三番街利木津巴士 UM1 站（關西機場線 2026-01-27 起由舊新阪急酒店遷到阪急三番街；阪急觀光巴士官方資料）。先在售票機買票，或用信用卡感應付款；ICOCA 能否使用待確認。\n【班次】11:50 開 → 12:50 到第 1 航廈（約 60 分鐘）；如早到可乘 11:40（12:40 到），遲到可乘 12:00（13:00 到）（2026-01-27 版官方時刻表）。不用預約，先到先上，大件行李交司機放車底。\n【下車】第 1 航廈 4 樓國際線出發大堂前下車，直接辦理登機。\n【備案】JR 大阪站 1 號月台 11:53 關空快速往關西機場，12:59 到，IC ¥1,180（Yahoo! 乘換案內）。",
      "phone": null,
      "openHours": "阪急三番街開出 11:30、11:40、11:50、12:00…（2026-01-27 版官方時刻表）",
      "price": "成人 ¥1,800（售票機買票，或信用卡感應付款）",
      "cost": {
        "amount": 1800,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "bus",
        "from": "大阪站前（阪急三番街）",
        "to": "關西機場第 1 航廈",
        "fromEventId": null,
        "toEventId": null,
        "operator": "阪急觀光巴士／關西空港交通",
        "line": "大阪站前（梅田）線",
        "durationMin": 60,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "id": "evt_d9_06",
      "day": 9,
      "time": "13:45",
      "timeHint": "afternoon",
      "type": "food",
      "title": "午餐：佐海屋（關西機場第 1 航廈禁區）",
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
      "note": "【Tabelog】3.02（1 則評價；關西機場禁區選擇有限，評分樣本極少，僅作方便之選）https://tabelog.com/osaka/A2705/A270503/27158190/\n【攻略】出境後的和食 food court（約 280 座位），有和牛、海鮮及季節食材定食，燒物、炸物、刺身一次吃到。Tabelog 評分樣本極少，只作方便之選；真正的美食已在前八天完成。\n【實用】辦完退稅（海關確認）及出境後再去吃；可用信用卡。",
      "phone": "+81-72-455-2500",
      "openHours": "06:30–24:55（按航班調整）",
      "price": "定食按餐牌（約 ¥1,500，估算）",
      "cost": {
        "amount": 1500,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null,
      "link": "https://tabelog.com/osaka/A2705/A270503/27158190/"
    },
    {
      "id": "evt_d9_07",
      "day": 9,
      "time": "15:15",
      "timeHint": "afternoon",
      "type": "departure",
      "title": "HX 回程：關西機場第 1 航廈登機（15:15 起飛）",
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
      "note": "【登機流程】12:50 巴士到第 1 航廈 4 樓國際線出發大堂 → HX 櫃位辦理登機及寄艙（櫃位截止時間以確認信為準）→ 海關確認退稅（帶護照及免稅單據）→ 保安檢查及出境審查 → 禁區午餐 → 按登機證時間到閘口。\n【航班】HK Express（HX）15:15 起飛（航班號待訂票後確認）。回程建議加購 32kg 寄艙（約 HK$430）。\n【實用】HK Express 客服用 WhatsApp +852 3951 7229（每日 08:00–20:00）。",
      "phone": "+852 3951 7229",
      "openHours": "15:15 起飛（登機閘口截止時間以登機證為準）",
      "price": "機票 HK$2,450（Google Flights 2026-10-18 報價）",
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
    "title": "阪急 Oasis 廚房市場（阪急オアシス，LUCUA B2）",
    "tag": "TIRED",
    "note": "2/7 太累不想站著吃串炸時的備案：高級超市熟食及清酒，可回房晚酌；營業至 23:00。",
    "type": "food",
    "cityId": "osaka",
    "address": "日本大阪府大阪市北區梅田3-1-3 LUCUA 大阪 地庫 2 樓",
    "addressLocal": "大阪府大阪市北区梅田3-1-3 ルクア大阪 B2F 阪急オアシス キッチン＆マーケット",
    "coords": [
      34.7033,
      135.4962
    ],
    "nearEventId": "evt_d1_04",
    "status": "wishlist",
    "source": "ai",
    "phone": "+81-6-6454-8116",
    "openHours": "11:00–23:00",
    "price": "熟食＋清酒約 ¥2,500（估算）"
  },
  {
    "id": "ins_002",
    "title": "北極星 心齋橋本店（蛋包飯始祖）",
    "tag": "RAINY",
    "note": "2/8 午餐備案：據稱是蛋包飯發祥店，老洋房和室座位；一般席不設預約，下雨也不用走遠。",
    "type": "food",
    "cityId": "osaka",
    "address": "日本大阪府大阪市中央區西心齋橋2-7-27",
    "addressLocal": "大阪府大阪市中央区西心斎橋2-7-27 北極星 心斎橋本店",
    "coords": [
      34.6697,
      135.4988
    ],
    "nearEventId": "evt_d2_05",
    "status": "wishlist",
    "source": "ai",
    "phone": "+81-6-6211-7829",
    "openHours": "11:30–21:00（L.O. 閉店前 30 分鐘）",
    "price": "雞肉蛋包飯約 ¥1,180（第三方資料）"
  },
  {
    "id": "ins_003",
    "title": "燗之美穗（燗の美穂，燙酒專門）",
    "tag": "FOOD",
    "note": "2/8 長堀居酒屋星期一不營業或訂不到時的備案：同一區步行約 10 分鐘，星期一 16:00 開；Tabelog 3.43、米芝蓮 Bib Gourmand；D8 亦會再去。",
    "type": "food",
    "cityId": "osaka",
    "address": "日本大阪府大阪市中央區安堂寺町2-2-14",
    "addressLocal": "大阪府大阪市中央区安堂寺町2-2-14 燗の美穂",
    "coords": [
      34.6761,
      135.5157
    ],
    "nearEventId": "evt_d2_09",
    "status": "wishlist",
    "source": "ai",
    "phone": "+81-6-7222-2510",
    "openHours": "星期一至六 16:00–22:00；日 15:00–22:00",
    "price": "Tabelog 預算 ¥6,000–7,999"
  },
  {
    "id": "ins_004",
    "title": "奈良國立博物館（名品展）",
    "tag": "RAINY",
    "note": "2/9 下雨備案：瑠璃繪期間（2/8–14）開到 18:00；2/6–3/14 有「新收藏品」特集；佛像館翻新閉館中，青銅器館免費參觀。",
    "type": "sight",
    "cityId": "nara",
    "address": "日本奈良縣奈良市登大路町50",
    "addressLocal": "奈良県奈良市登大路町50 奈良国立博物館",
    "coords": [
      34.6831,
      135.8383
    ],
    "nearEventId": "evt_d3_09",
    "status": "wishlist",
    "source": "ai",
    "phone": "+81-50-5542-8600",
    "openHours": "瑠璃繪期間開到 18:00（其餘時間以官網為準）",
    "price": "名品展一般 ¥700"
  },
  {
    "id": "ins_005",
    "title": "春日荷茶屋（萬葉粥）",
    "tag": "FOOD",
    "note": "2/9 午餐備案：春日大社參道茶屋，2 月萬葉粥配節分大豆；1–3 月逢星期一休，2/9 星期二照常營業。",
    "type": "food",
    "cityId": "nara",
    "address": "日本奈良縣奈良市春日野町160 春日大社境內",
    "addressLocal": "奈良県奈良市春日野町160 春日大社 春日荷茶屋",
    "coords": [
      34.6823,
      135.8434
    ],
    "nearEventId": "evt_d3_05",
    "status": "wishlist",
    "source": "ai",
    "phone": "+81-742-27-2718",
    "openHours": "10:30–16:30（L.O. 16:00）",
    "price": "萬葉粥 ¥1,200"
  },
  {
    "id": "ins_006",
    "title": "春日大社 開運除厄祈禱",
    "tag": "SOLO",
    "note": "個人祈禱不用預約，當日到祈禱所申請；可與瑠璃繪同日安排，亦可與石切二選一，減輕 2/9 行程。",
    "type": "sight",
    "cityId": "nara",
    "address": "日本奈良縣奈良市春日野町160",
    "addressLocal": "奈良県奈良市春日野町160 春日大社",
    "coords": [
      34.6805,
      135.8461
    ],
    "nearEventId": "evt_d3_09",
    "status": "wishlist",
    "source": "ai",
    "phone": "+81-742-22-7788",
    "openHours": "祈禱受付 09:00–16:00",
    "price": "小祈禱初穗料 ¥5,000 起"
  },
  {
    "id": "ins_007",
    "title": "有馬溫泉 太閤之湯（太閤の湯）",
    "tag": "TIRED",
    "note": "想泡久一點或金之湯臨時休館時的備案：金泉、銀泉、岩盤浴一次；2/12（星期五）營業。阪急巴士來回＋入館套票 ¥3,870。",
    "type": "rest",
    "cityId": "kobe",
    "address": "日本兵庫縣神戶市北區有馬町池之尻292-2",
    "addressLocal": "兵庫県神戸市北区有馬町池の尻292-2 有馬温泉 太閤の湯",
    "coords": [
      34.7978,
      135.2512
    ],
    "nearEventId": "evt_d6_03",
    "status": "wishlist",
    "source": "ai",
    "phone": "+81-78-904-2291",
    "openHours": "10:00–22:00（最後入館 21:00）",
    "price": "平日成人 ¥2,750（另加入湯稅 ¥75）"
  },
  {
    "id": "ins_008",
    "title": "馳走屋純平（馳走や純平，北新地）",
    "tag": "FOOD",
    "note": "2/12 雅釀訂不到或想省錢時的備案：Tabelog 3.62、居酒屋 WEST 百名店 2026；吧枱 7 位，河豚、甲魚及地酒；單點另收 ¥1,100 前菜費，可吸加熱煙。https://tabelog.com/osaka/A2701/A270101/27014760/",
    "type": "food",
    "cityId": "osaka",
    "address": "日本大阪府大阪市北區曾根崎新地1-5-25 5 樓",
    "addressLocal": "大阪府大阪市北区曽根崎新地1-5-25 ジェイ・プライド梅田永楽ビル5F 馳走や純平",
    "coords": [
      34.6979,
      135.4977
    ],
    "nearEventId": "evt_d6_11",
    "status": "wishlist",
    "source": "ai",
    "phone": "+81-6-6341-5228",
    "openHours": "星期一至六 17:30–23:00；星期日休，假期不定（Tabelog）",
    "price": "Tabelog 預算 ¥8,000–14,999"
  },
  {
    "id": "ins_009",
    "title": "國立國際美術館「詞語重疊之地」（コトバの重なる場所）",
    "tag": "RAINY",
    "note": "2/10 中之島美術館人多時改去，就在旁邊；星期三開到 17:00，展期至 2027/3/14。",
    "type": "sight",
    "cityId": "osaka",
    "address": "日本大阪府大阪市北區中之島4-2-55",
    "addressLocal": "大阪府大阪市北区中之島4-2-55 国立国際美術館",
    "coords": [
      34.6917,
      135.4922
    ],
    "nearEventId": "evt_d4_03",
    "status": "wishlist",
    "source": "ai",
    "phone": "+81-6-6447-4680",
    "openHours": "10:00–17:00；星期五至 20:00",
    "price": "一般 ¥1,800（夜間 ¥1,600）"
  },
  {
    "id": "ins_010",
    "title": "Ojas spa 梅田店（乾式頭療）",
    "tag": "TIRED",
    "note": "物差沙龍約不到時的備案：乾式頭療不用濕頭，做完可直接外出；全私人房。",
    "type": "rest",
    "cityId": "osaka",
    "address": "日本大阪府大阪市北區豐崎3-14-6 M-style 301",
    "addressLocal": "大阪府大阪市北区豊崎3-14-6 M-style 301 Ojas spa 梅田店",
    "coords": [
      34.7105,
      135.4983
    ],
    "nearEventId": "evt_d5_03",
    "status": "wishlist",
    "source": "ai",
    "phone": "+81-6-6147-4996",
    "openHours": "11:00–24:00；不定休",
    "price": "乾式頭療 75 分鐘 ¥8,000"
  },
  {
    "id": "ins_011",
    "title": "梅田 釜竹烏冬（梅田 釜たけうどん，新梅田食道街）",
    "tag": "FOOD",
    "note": "2/11 烏冬棒排隊太長時的備案：Tabelog 3.77、烏冬 WEST 百名店 2024；不設預約、只收現金，星期二休（2/11 星期四營業）。https://tabelog.com/osaka/A2701/A270101/27052204/",
    "type": "food",
    "cityId": "osaka",
    "address": "日本大阪府大阪市北區角田町9-25 新梅田食道街 1 樓",
    "addressLocal": "大阪府大阪市北区角田町9-25 新梅田食道街1F 梅田 釜たけうどん",
    "coords": [
      34.7039,
      135.4978
    ],
    "nearEventId": "evt_d5_05",
    "status": "wishlist",
    "source": "ai",
    "phone": "+81-6-6363-7746",
    "openHours": "11:00–14:30；星期二休（Tabelog）",
    "price": "Tabelog 預算 ～¥1,999"
  },
  {
    "id": "ins_012",
    "title": "十三市（神津神社）",
    "tag": "SHOP",
    "note": "2/13 B 案早上：每月 13 日舉行（2/13 星期六照開），古道具、花、占卜攤檔；阪急梅田 → 十三 3 分鐘（¥170），之後再去魚崎。",
    "type": "shop",
    "cityId": "osaka",
    "address": "日本大阪府大阪市淀川區十三東2-6-39 神津神社",
    "addressLocal": "〒532-0023 大阪府大阪市淀川区十三東2-6-39 神津神社 十三市",
    "coords": [
      34.7205,
      135.4846
    ],
    "nearEventId": "evt_d7_03",
    "status": "wishlist",
    "source": "ai",
    "phone": null,
    "openHours": "約 09:00/10:00–15:00（官方未寫時間）",
    "price": "免費入場"
  },
  {
    "id": "ins_013",
    "title": "白鹿 西宮藏開",
    "tag": "TIME",
    "note": "2/13 另一個藏開選擇：往年 2 月星期六 10:00–15:00，當日限定搾立無濾過生原酒；只收現金。2027 年日期待公布。",
    "type": "sight",
    "cityId": "kobe",
    "address": "日本兵庫縣西宮市建石町2-10 辰馬本家酒造",
    "addressLocal": "兵庫県西宮市建石町2-10 辰馬本家酒造 白鹿",
    "coords": [
      34.7292,
      135.3358
    ],
    "nearEventId": "evt_d7_03",
    "status": "wishlist",
    "source": "ai",
    "phone": "+81-798-32-2727",
    "openHours": "往年 10:00–15:00（2027 待公布）",
    "price": "免費入場；試飲另收費"
  },
  {
    "id": "ins_014",
    "title": "白雪 藏祭（伊丹）",
    "tag": "TIME",
    "note": "如果確定 2/14：每年 2 月第 2 個星期日舉行，JR 大阪 → 伊丹約 16 分鐘；平日長壽藏亦有商店和博物館。",
    "type": "sight",
    "cityId": "osaka",
    "address": "日本兵庫縣伊丹市中央3-4-15 白雪 Brewery Village 長壽藏",
    "addressLocal": "兵庫県伊丹市中央3-4-15 白雪ブルワリービレッジ長寿蔵",
    "coords": [
      34.7811,
      135.4172
    ],
    "nearEventId": "evt_d8_07",
    "status": "wishlist",
    "source": "ai",
    "phone": "+81-72-773-0524",
    "openHours": "往年 10:00–16:00（2027 待公布）；長壽藏商店 10:00–19:00，星期二休",
    "price": "免費入場"
  },
  {
    "id": "ins_015",
    "title": "奈良瑠璃繪 最後一晚（2/14）",
    "tag": "PHOTO",
    "note": "2026 年模式最後一晚有奈良公園煙花，人流很多；2/9 已經去過，不建議重複。",
    "type": "sight",
    "cityId": "nara",
    "address": "日本奈良縣奈良市 奈良公園",
    "addressLocal": "奈良県奈良市 奈良公園",
    "coords": [
      34.6829,
      135.8546
    ],
    "nearEventId": "evt_d8_07",
    "status": "wishlist",
    "source": "ai",
    "phone": "+81-742-30-6560",
    "openHours": "約 18:00–21:00（按 2026 年）",
    "price": "免費"
  },
  {
    "id": "ins_016",
    "title": "日本料理 岡田（おか田，奈良）",
    "tag": "FOOD",
    "note": "2/9 玄訂不到時的午市備案：Tabelog 3.82；官網自稱米芝蓮一星，完全預約制，一人可訂，TableCheck 網上預約。午市套餐 ¥8,000／¥12,000；星期日及假期休。https://tabelog.com/nara/A2901/A290101/29011807/",
    "type": "food",
    "cityId": "nara",
    "address": "日本奈良縣奈良市今御門町26-2 Nori 大廈 1 樓",
    "addressLocal": "奈良県奈良市今御門町26-2 Noriビル1階 おか田",
    "coords": [
      34.6805,
      135.8303
    ],
    "nearEventId": "evt_d3_05",
    "status": "wishlist",
    "source": "ai",
    "phone": "+81-742-93-8119",
    "openHours": "11:30–14:00、18:00–22:00；星期日及假期休",
    "price": "午市套餐 ¥8,000／¥12,000（Tabelog）"
  },
  {
    "id": "ins_017",
    "title": "神戶北野 皮革手作體驗 First Picture（ファーストピクチャー神戸）",
    "tag": "SOLO",
    "note": "想在神戶多做一次皮革手作時的備案：北野坂一帶，網上預約（reserva.be/faspic），1–4 人可訂、一人可報。卡片套約 40 分鐘 ¥2,420；免縫名片套 ¥2,200；手掌小袋 60 分鐘 ¥2,750。較遊客向，所以列作備案。逢星期二休。",
    "type": "shop",
    "cityId": "kobe",
    "address": "日本兵庫縣神戶市中央區中山手通2-25-7 光榮大廈 1 樓",
    "addressLocal": "兵庫県神戸市中央区中山手通2-25-7 光栄ビル1F ファーストピクチャー神戸",
    "coords": [
      34.6967,
      135.1886
    ],
    "nearEventId": "evt_d6_07",
    "status": "wishlist",
    "source": "ai",
    "phone": "+81-78-251-6003",
    "openHours": "星期一、三、五、六 10:00–17:00；四 10:00–16:30；日及假期 10:00–16:45；逢星期二休",
    "price": "卡片套 ¥2,420；免縫名片套 ¥2,200；手掌小袋 ¥2,750"
  },
  {
    "id": "ins_018",
    "title": "神戶訂製皮革工房 MIVU（神戸革工房MIVU）",
    "tag": "SHOP",
    "note": "想訂製一個屬於自己的皮銀包時的備案：在 Tor Road 一帶，可選皮革和顏色訂製小皮件，製作期約 2–8 星期，可問能否寄往香港。逢星期三休。",
    "type": "shop",
    "cityId": "kobe",
    "address": "日本兵庫縣神戶市中央區北長狹通3-12-1 Cross 大廈 1 樓",
    "addressLocal": "兵庫県神戸市中央区北長狭通3-12-1 クロスビル1F MIVU",
    "coords": [
      34.6928,
      135.1881
    ],
    "nearEventId": "evt_d6_07",
    "status": "wishlist",
    "source": "ai",
    "phone": "+81-78-333-0312",
    "openHours": "11:30–19:30；逢星期三休",
    "price": "按訂製內容報價"
  },
  {
    "id": "ins_019",
    "title": "東歐古紙與手工藝雜貨 Charkha（チャルカ）",
    "tag": "SHOP",
    "note": "喜歡東歐古紙、舊鈕扣和手工藝品時的備案：只在星期四至六 13:00–18:00 營業，常有長假和臨時休息，2/11（星期四假期）是否營業須先查官網。",
    "type": "shop",
    "cityId": "osaka",
    "address": "日本大阪府大阪市中央區瓦屋町1-5-23",
    "addressLocal": "大阪府大阪市中央区瓦屋町1-5-23 チャルカ",
    "coords": [
      34.6716,
      135.515
    ],
    "nearEventId": "evt_d5_07",
    "status": "wishlist",
    "source": "ai",
    "phone": "+81-6-6764-0711",
    "openHours": "星期四至六 13:00–18:00（不定期長休）",
    "price": "按貨品標價"
  },
  {
    "id": "ins_020",
    "title": "奈良豐澤酒造 酒藏參觀（奈良豊澤酒造，帶解）",
    "tag": "TIME",
    "note": "想正式參觀奈良酒藏時的備案：2 月逢星期三、六 10:30 或 15:30 開始，完全預約制，致電 0742-61-7636，1–40 人，¥500（附手信）。與奈良日（2/9 星期二）日期不合，而且在帶解，離奈良町較遠，所以只列備案。",
    "type": "sight",
    "cityId": "nara",
    "address": "日本奈良縣奈良市今市町405",
    "addressLocal": "奈良県奈良市今市町405 奈良豊澤酒造",
    "coords": [
      34.642,
      135.816
    ],
    "nearEventId": "evt_d3_06",
    "status": "wishlist",
    "source": "ai",
    "phone": "+81-742-61-7636",
    "openHours": "酒藏參觀：2 月逢星期三、六 10:30／15:30（須預約）",
    "price": "參觀 ¥500（附手信）"
  },
  {
    "id": "ins_021",
    "title": "白鶴酒造資料館（灘五鄉大型酒藏資料館）",
    "tag": "TIME",
    "note": "浜福鶴之後時間充裕時可加：大正時代酒藏改建的資料館，展示傳統釀酒工具；季節限定酒免費試飲，高級酒付費試飲。由浜福鶴步行約 15 分鐘（估算）。",
    "type": "sight",
    "cityId": "kobe",
    "address": "日本兵庫縣神戶市東灘區住吉南町4-5-5",
    "addressLocal": "兵庫県神戸市東灘区住吉南町4-5-5 白鶴酒造資料館",
    "coords": [
      34.7102,
      135.2617
    ],
    "nearEventId": "evt_d7_04",
    "status": "wishlist",
    "source": "ai",
    "phone": "+81-78-822-8907",
    "openHours": "09:30–16:30（入館至 16:00）；年末年始休",
    "price": "免費入館；高級酒試飲收費"
  }
];

// 8. 🛒 每日購物
const DAILY_EXTRAS = {
  "1": {
    "shopping": [
      "Visit Japan Web 入境 QR code",
      "ICOCA／信用卡拍卡",
      "串炸店可用 IC 卡"
    ]
  },
  "2": {
    "shopping": [
      "古物市用現金",
      "CRAFT HOUSE 510 自選皮革顏色，可問刻印",
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
      "Guignol 歐洲舊貨（生活小物）"
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
      "現金（藏開攤位多數只收現金）"
    ]
  },
  "8": {
    "shopping": [
      "四天會古皮具／古首飾（現金）",
      "清酒防震包裝（明早阪神 B1 最後補買）"
    ]
  },
  "9": {
    "shopping": [
      "清酒防震包裝",
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
    "total": 312900,
    "currency": "JPY",
    "byCategory": {
      "hotel": 130330,
      "food": 137120,
      "transport": 12850,
      "ticket": 15100,
      "shop": 0,
      "other": 17500
    },
    "note": "日圓為日本當地估算：酒店＝Elcient 8 晚約 ¥127,330＋宿泊稅約 ¥3,000；交通＝各段 IC／巴士車資（Yahoo! 乘換案內、官方時刻表）；門票＝體驗及入場費（含皮革手作 ¥3,300）；其他＝香薰按摩、頭療；購物（皮件、清酒）未估。機票 HK$5,223（去 HK$2,773＋回 HK$2,450）＋行李約 HK$740 另計（港幣）。"
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
