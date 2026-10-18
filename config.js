// buildTime: 2026-10-18T14:48:55.582Z
// ============================================================
// 🧳 客製化設定檔 config.js —— 大阪 2027 年 2 月（v2：全繁中、攻略、順路重排）
// 結構契約見 schema.json；未部署，待 Dav 批准
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
    "id": "hong-kong",
    "name": "香港",
    "lat": 22.308,
    "lon": 113.9185,
    "timezone": "Asia/Hong_Kong",
    "days": [
      1,
      9
    ],
    "color": "#3A3A3A"
  },
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
      4,
      7
    ],
    "color": "#8C8378"
  }
];

// 本趟到站 provider 宣告（不含 API key；key 在 Cloudflare Worker）
const TRANSIT_CONFIG = {
  providers: ["odpt", "mock"]
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
      "time": "07:00",
      "timeHint": "morning",
      "type": "food",
      "title": "早餐：在家",
      "cityId": "hong-kong",
      "address": "香港將軍澳（住址不入檔）",
      "addressLocal": null,
      "coords": null,
      "tags": [
        "出發日"
      ],
      "moodColor": "#A0785A",
      "note": "【保留早開始】出發日：HX 11:50 起飛，09:20 前要到機場一號客運大樓 check-in。\n【攻略】在家簡單吃，07:45 前出門；年初二機場人多，寧早勿遲。",
      "phone": null,
      "openHours": "07:00–07:40",
      "price": "不適用（在家）",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d1_02",
      "day": 1,
      "time": "07:45",
      "timeHint": "morning",
      "type": "transport",
      "title": "城巴 A29：寶琳 → 香港國際機場",
      "cityId": "hong-kong",
      "address": "將軍澳寶林巴士總站",
      "addressLocal": "Po Lam Bus Terminus, Tseung Kwan O（寶林巴士總站）",
      "coords": [
        22.3234,
        114.2576
      ],
      "tags": [
        "機場巴士"
      ],
      "moodColor": "#2A7F7A",
      "note": "【保留早開始】出發日：HX 11:50 起飛，09:20 前要到機場一號客運大樓 check-in。\n【交通】城巴 A29 機場快線，車程約 91 分鐘（按 HK GTFS 時刻表）。星期日早上約每 15–20 分鐘一班，八達通付款。\n【提示】行李上車後放行李架；年初二路面一般暢順，但仍預留緩衝。",
      "phone": null,
      "openHours": "星期日早上約每 15–20 分鐘一班（HK GTFS）",
      "price": "HK$44（八達通，按 HK GTFS 車資）",
      "cost": {
        "amount": 44,
        "currency": "HKD",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "bus",
        "from": "將軍澳（寶琳）",
        "to": "香港國際機場一號客運大樓",
        "fromEventId": null,
        "toEventId": null,
        "operator": "城巴 Citybus",
        "line": "A29",
        "durationMin": 91,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "id": "evt_d1_03",
      "day": 1,
      "time": "10:15",
      "timeHint": "morning",
      "type": "food",
      "title": "午餐：正斗粥麵專家（機場禁區店）",
      "cityId": "hong-kong",
      "address": "香港國際機場一號客運大樓 7 樓離港層東大堂 7E182 號舖（禁區）",
      "addressLocal": "Tasty Congee & Noodle Wantun Shop, Shop 7E182, L7 Departures East Hall, Terminal 1, HKIA (Restricted Area)",
      "coords": [
        22.3139,
        113.93
      ],
      "tags": [
        "粥麵",
        "禁區"
      ],
      "moodColor": "#A0785A",
      "note": "【攻略】正斗以鮮蝦雲吞麵和生滾粥出名，出發前吃一碗熱粥麵最穩妥，份量不會太飽，適合登機前。\n【實用】先 check-in 寄艙（20kg 網上預買 HK$310），進入禁區後再用餐；24 小時營業，不用排隊訂位。",
      "phone": "+852 2261 0101",
      "openHours": "24 小時（機場官方資料）",
      "price": "機場店價目未公開，出發前再確認（一般粥麵價錢）",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d1_04",
      "day": 1,
      "time": "11:50",
      "timeHint": "morning",
      "type": "departure",
      "title": "HX 去程：香港 → 大阪關西",
      "cityId": "hong-kong",
      "address": "香港國際機場一號客運大樓",
      "addressLocal": "Hong Kong International Airport Terminal 1",
      "coords": [
        22.3139,
        113.93
      ],
      "tags": [
        "航班"
      ],
      "moodColor": "#3A3A3A",
      "note": "【航班】HK Express（HX）11:50 起飛，16:25 到關西機場第 1 航廈（航班號待訂票後確認）。\n【實用】網上預辦登機；寄艙 20kg 首次訂票加購 HK$310。HK Express 無公開客服熱線，官方用 WhatsApp +852 3951 7229（每日 08:00–20:00）。check-in 截止時間以確認信為準。",
      "phone": "+852 3951 7229",
      "openHours": "11:50 起飛 → 16:25 抵達（日本時間）",
      "price": "機票 HK$2,773（Google Flights 2026-10-18 報價）＋寄艙 HK$310",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d1_05",
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
      "note": "【入境】出發前填好 Visit Japan Web（入境＋海關申報 QR code），入境連提行李預留 45–60 分鐘（估算）。\n【攻略】出閘後可在便利店 ATM 提取備用現金；之後乘巴士直達梅田。機場總合案內 24 小時有中文服務。",
      "phone": "+81-72-455-2500",
      "openHours": "機場總合案內 24 小時",
      "price": "不適用",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d1_06",
      "day": 1,
      "time": "17:30",
      "timeHint": "evening",
      "type": "transport",
      "title": "機場利木津巴士：關西機場 → 大阪站前（阪急三番街）",
      "cityId": "osaka",
      "address": "關西國際機場第 1 航廈 1 樓巴士站",
      "addressLocal": "関西空港 第1ターミナル 1階 バスのりば（大阪駅前（梅田）線）",
      "coords": [
        34.4343,
        135.2442
      ],
      "tags": [
        "機場巴士"
      ],
      "moodColor": "#2A7F7A",
      "note": "【交通】空港利木津巴士「大阪站前（梅田）線」，阪急觀光巴士／關西空港交通等共同運行，車程約 60–70 分鐘，約 18:40 到阪急三番街。\n【實用】不用預約、先到先上；在巴士站附近售票機／櫃位買票，大件行李交司機放車底。下車後步行約 15 分鐘到酒店（估算），行李多可乘短程的士。\n【備案】南海＋JR 鐵路約 71 分鐘、IC ¥1,170（Yahoo! 乘換案內）。",
      "phone": null,
      "openHours": "約每 30 分鐘一班（2026-01-27 版時刻表）",
      "price": "成人單程 ¥1,800",
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
        "to": "大阪站前（阪急三番街）",
        "fromEventId": null,
        "toEventId": null,
        "operator": "阪急觀光巴士／關西空港交通",
        "line": "大阪站前（梅田）線",
        "durationMin": 67,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "id": "evt_d1_07",
      "day": 1,
      "time": "19:00",
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
      "id": "evt_d1_08",
      "day": 1,
      "time": "19:30",
      "timeHint": "evening",
      "type": "shop",
      "title": "晚餐：阪急 Oasis 廚房市場（阪急オアシス キッチン＆マーケット，LUCUA B2）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區梅田3-1-3 LUCUA 大阪 地庫 2 樓",
      "addressLocal": "大阪府大阪市北区梅田3-1-3 ルクア大阪 B2F 阪急オアシス キッチン＆マーケット",
      "coords": [
        34.7033,
        135.4962
      ],
      "tags": [
        "超市巡禮",
        "晚酌"
      ],
      "moodColor": "#8C8378",
      "note": "【攻略】阪急集團高級版超市，熟食、壽司、沙律、清酒啤酒選擇多，場內有 eat-in 區，買完即吃也可以。第一晚不用訂位，買幾款熟食和一瓶本地清酒回房晚酌最輕鬆。\n【實用】JR 大阪站直通；酒店步行約 10 分鐘（估算）。",
      "phone": "+81-6-6454-8116",
      "openHours": "11:00–23:00",
      "price": "預算約 ¥2,500（熟食＋清酒，估算）",
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
      "id": "evt_d1_09",
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
      "note": "【攻略】和洋自助，有大阪名物章魚燒、大阪燒、日替惣菜、約 10 款麵包和季節 smoothie。09:00 入場，約有 45 分鐘慢慢享用。\n【實用】最後入場 09:45；09:50 出門步行到東梅田站（約 7 分鐘）。",
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
      "transport": null
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
      "note": "【交通】09:59 開 → 10:10 到，直達不用轉車（Yahoo! 乘換案內）。出站步行數分鐘到生國魂神社。",
      "phone": null,
      "openHours": "建議班次 09:59 → 10:10",
      "price": "IC ¥240",
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
        "line": "谷町線",
        "durationMin": 11,
        "stopCount": null,
        "liveApi": {
          "provider": "mock",
          "stopId": "demo-higashi-umeda",
          "lineId": null,
          "direction": null,
          "refreshSec": 60
        }
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
      "note": "【交通】11:35 開 → 11:45 到，日本橋／難波換乘 1 次（Yahoo! 乘換案內）。心齋橋站步行 2 分鐘到西家。",
      "phone": null,
      "openHours": "建議班次 11:35 → 11:45",
      "price": "IC ¥190",
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
        "line": "千日前線→御堂筋線",
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
        "可預約"
      ],
      "moodColor": "#A0785A",
      "note": "【攻略】1957 年創業，「烏冬海鮮鍋（うどんちり）」是其註冊商標：活蝦、蛤蜊和季節蔬菜的海鮮鍋，蘸特製柚子醋，最後加入自家製大阪烏冬，烏冬任添。一人鍋套餐（きり）¥6,000 起（前菜＋炸物＋烏冬海鮮鍋）。\n【預約】一人鍋套餐要 2 天前 17:00 前在官網預約；不想吃鍋可單點御膳 ¥1,958 起。",
      "phone": "+81-50-5385-3448",
      "openHours": "星期一至六 11:00–22:30（L.O. 22:00）；日及假期至 22:00；1/1 休、另有不定休",
      "price": "一人烏冬海鮮鍋套餐（きり）¥6,000（官網）",
      "cost": {
        "amount": 6000,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d2_06",
      "day": 2,
      "time": "13:30",
      "timeHint": "afternoon",
      "type": "shop",
      "title": "VINTAGE QOO TOKYO 心齋橋店（古著名牌）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區心齋橋筋1-1-16B MI Cube 心齋橋 1–2 樓",
      "addressLocal": "大阪府大阪市中央区心斎橋筋1-1-16B MIキューブ心斎橋 1-2F VINTAGE QOO TOKYO",
      "coords": [
        34.6749,
        135.502
      ],
      "tags": [
        "vintage",
        "皮具"
      ],
      "moodColor": "#8C8378",
      "note": "【攻略】約 130 坪，專賣 vintage 名牌手袋、皮具和首飾，貨量大，適合慢慢比較皮質和五金。看中記得問品相分級（Rank）和真品保證。\n【退稅】2026-11-01 起日本改為「先付稅、出境時退稅」：要帶護照，購物後 90 日內離境時在機場海關確認，退款方式按店舖安排。",
      "phone": "+81-6-6926-8450",
      "openHours": "11:30–20:00（年末年始除外，全年無休）",
      "price": "按貨品標價",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d2_07",
      "day": 2,
      "time": "14:45",
      "timeHint": "afternoon",
      "type": "shop",
      "title": "ORANGE BOUTIQUE 心齋橋（Hermès 二手專門）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區心齋橋筋2-7-5",
      "addressLocal": "大阪府大阪市中央区心斎橋筋2-7-5 ORANGE BOUTIQUE 心斎橋（宝美堂3号店）",
      "coords": [
        34.6707,
        135.5013
      ],
      "tags": [
        "vintage",
        "皮具"
      ],
      "moodColor": "#8C8378",
      "note": "【攻略】與 QOO 同屬寶美堂集團，2 樓專做 Hermès vintage（Kelly、Constance、Bolide、Evelyne 等）。可請店員拿幾個同款不同年份的比較刻印和皮質。\n【實用】問清品相分級和真品保證；退稅同樣要帶護照。",
      "phone": "+81-6-6484-3733",
      "openHours": "11:30–20:00（年末年始除外）",
      "price": "按貨品標價",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d2_08",
      "day": 2,
      "time": "15:35",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "地鐵長堀鶴見綠地線：心齋橋 → 谷町六丁目",
      "cityId": "osaka",
      "address": "大阪地鐵心齋橋站（長堀鶴見綠地線）",
      "addressLocal": "Osaka Metro 心斎橋駅（長堀鶴見緑地線）",
      "coords": [
        34.6749,
        135.502
      ],
      "tags": [
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【交通】15:35 開 → 15:39 到，直達（Yahoo! 乘換案內）。由 ORANGE BOUTIQUE 走回心齋橋站約 7 分鐘（估算）。谷町六丁目站出站步行約 5 分鐘到空堀「惣」。",
      "phone": null,
      "openHours": "建議班次 15:35 → 15:39",
      "price": "IC ¥190",
      "cost": {
        "amount": 190,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "subway",
        "from": "心齋橋",
        "to": "谷町六丁目",
        "fromEventId": null,
        "toEventId": null,
        "operator": "大阪地鐵 Osaka Metro",
        "line": "長堀鶴見綠地線",
        "durationMin": 4,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "id": "evt_d2_09",
      "day": 2,
      "time": "15:50",
      "timeHint": "afternoon",
      "type": "rest",
      "title": "空堀長屋「惣」＋ Crydderi Cafe 歇腳",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區瓦屋町1-6-2 空堀「惣」1 樓",
      "addressLocal": "大阪府大阪市中央区瓦屋町1-6-2 karahori惣 1F クーデリーカフェ",
      "coords": [
        34.6732,
        135.5134
      ],
      "tags": [
        "長屋",
        "咖啡"
      ],
      "moodColor": "#9AA8A3",
      "note": "【攻略】空堀一帶戰時少受空襲，留有大量大正年代長屋；「惣」是 2002 年由老長屋改建的小店群（約 10 間）。在 Crydderi Cafe 點一杯虹吸咖啡和自家製蛋糕，休息一會再去喝酒。\n【實用】Cafe time 14:00–18:00（L.O.），星期三休（假期照開）。",
      "phone": "+81-6-6762-5664",
      "openHours": "11:00–19:00（Cafe time 14:00–18:00 L.O.）；星期三休",
      "price": "咖啡＋蛋糕按餐牌（出發前再確認）",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d2_10",
      "day": 2,
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
        "吧枱",
        "Bib Gourmand"
      ],
      "moodColor": "#A0785A",
      "note": "【攻略】女店主中村美穗由大阪名酒舖「山中酒店（山中酒の店）」自立，2020 年由博勞町搬到谷町六丁目古民家；米芝蓮 Bib Gourmand（2022–2025）。常備 60–70 款適合燙熱的西日本清酒，說出口味請店員挑選即可。必吃三款前菜（¥600）、招牌河內炙燒鴨里脊（たたき）；店主推介生原酒熱燗配芝士。\n【預約】只有 11 個吧枱位，開門後經常滿座，建議電話預約 16:45。\n【注意】地址已搬遷（舊博勞町地址不再適用）；2027 年 2 月休息日要看店主 blog。",
      "phone": "+81-6-7222-2510",
      "openHours": "星期一至六 16:00–22:00；日 15:00–22:00（Tabelog）；休息日以 blog 為準",
      "price": "預算 ¥4,000–5,000（Tabelog口碑）",
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
      "id": "trp_d2_11",
      "day": 2,
      "time": "18:46",
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
      "note": "【交通】18:46 開 → 18:55 到，直達不用轉車（Yahoo! 乘換案內）；東梅田出站步行 7 分鐘回酒店。",
      "phone": null,
      "openHours": "建議班次 18:46 → 18:55（約 5–7 分鐘一班）",
      "price": "IC ¥240",
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
        "line": "谷町線",
        "durationMin": 9,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "id": "evt_d2_12",
      "day": 2,
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
      "note": "【攻略】喝完燙酒不要立即泡太熱的水，先休息 30 分鐘、多喝水再去大浴場。",
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
      "title": "早餐：新八食堂（しんぱち食堂 西梅田店）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區曾根崎新地2-1-21",
      "addressLocal": "大阪府大阪市北区曾根崎新地2-1-21 しんぱち食堂 西梅田店",
      "coords": [
        34.6977,
        135.4953
      ],
      "tags": [
        "和定食"
      ],
      "moodColor": "#A0785A",
      "note": "【攻略】炭火燒乾物（一夜干）定食專門，即點即燒。店方首推「鯖魚一夜干定食（さば文化干し定食）」，人氣第一是三文魚腩一夜干；早上吃份量剛好。\n【實用】不設預約、全店禁煙；09:40 前出發去東梅田站。",
      "phone": "+81-6-4400-2787",
      "openHours": "08:00–22:00（Tabelog）",
      "price": "定食約 ¥800–1,100（店內價目）",
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
      "note": "【交通】09:53 開 → 10:22 到，谷町四丁目換中央線 1 次，中央線直通近鐵京阪奈線（けいはんな線）到新石切（Yahoo! 乘換案內）。出站步行約 7 分鐘到石切神社。",
      "phone": null,
      "openHours": "建議班次 09:53 → 10:22",
      "price": "IC ¥590",
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
        "line": "谷町線→中央線（直通近鐵京阪奈線）",
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
      "note": "【交通】11:46 開 → 12:18 到，生駒站轉奈良線 1 次（Yahoo! 乘換案內）。近鐵奈良站步行約 10 分鐘到平宗。",
      "phone": null,
      "openHours": "建議班次 11:46 → 12:18",
      "price": "IC ¥550",
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
        "line": "京阪奈線→奈良線",
        "durationMin": 32,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "id": "evt_d3_05",
      "day": 3,
      "time": "12:30",
      "timeHint": "afternoon",
      "type": "food",
      "title": "午餐：柿葉壽司總本家 平宗 奈良店（柿の葉ずし総本家 平宗）",
      "cityId": "nara",
      "address": "日本奈良縣奈良市今御門町30-1",
      "addressLocal": "〒630-8374 奈良県奈良市今御門町30-1 柿の葉ずし 平宗 奈良店",
      "coords": [
        34.6801,
        135.8303
      ],
      "tags": [
        "柿葉壽司",
        "奈良鄉土料理"
      ],
      "moodColor": "#A0785A",
      "note": "【攻略】創業超過 150 年的柿葉壽司老店，近猿澤池。午市推介「茶粥柿葉膳（茶粥・柿の葉膳）」¥1,940（胡麻豆腐＋柿葉壽司 4 件＋奈良茶粥），想吃多一點可點「真秀場套餐（まほろば）」¥2,900；兩款都是 14:30 前限定。1 樓有柿葉壽司外賣可作手信。\n【實用】午市一般客不接受預約（10 人以上先收），一人可直接入座；13:20 前出發步行到錦光園（約 15 分鐘）。",
      "phone": "+81-742-22-0866",
      "openHours": "本館販賣 10:00–20:30；用餐 11:30–20:00（L.O.）；逢星期一休",
      "price": "茶粥柿葉膳 ¥1,940（官網，2026-09 新價）",
      "cost": {
        "amount": 1940,
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
      "time": "13:45",
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
      "note": "【攻略】由室町時代傳承至今的奈良墨工房。流程：墨的歷史講解 → 職人示範入模 → 親手握住溫暖柔軟的生墨，留下指紋和手形 → 放入桐箱帶走。手幾乎不會弄髒。帶回香港後放在陰涼處，3 個月內不要打開，讓它慢慢乾透。\n【預約】要預約，前一日 21:00 前；取消要體驗前一日 12:00 前，否則全額收費。可加購參觀製墨現場 ¥1,650。",
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
      "id": "evt_d3_07",
      "day": 3,
      "time": "15:15",
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
      "note": "【攻略】奈良縣地酒專門店，約 120 款奈良酒可付費試飲（每杯 50cc，¥200 起），可一次比較不同酒藏。選 2–3 款喜歡的帶回酒店／香港。\n【實用】逢星期四休（假期照開），偶有臨時休息。",
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
      "id": "evt_d3_08",
      "day": 3,
      "time": "17:00",
      "timeHint": "evening",
      "type": "food",
      "title": "晚餐：蜻蜓野菜酒場（旨い肴と地酒 野菜酒場 とんぼ）",
      "cityId": "nara",
      "address": "日本奈良縣奈良市小西町5 Arte 館 1 樓 1-G",
      "addressLocal": "奈良県奈良市小西町5 アルテ館1階1-G 野菜酒場 とんぼ",
      "coords": [
        34.6829,
        135.828
      ],
      "tags": [
        "奈良地酒",
        "大和野菜",
        "吧枱"
      ],
      "moodColor": "#A0785A",
      "note": "【攻略】主打大和傳統蔬菜料理和 20 款以上奈良地酒。推介奈良鄉土「飛鳥鍋」（牛奶湯底雞肉鍋）和即點即煮的釜飯；冬天吃鍋配燙酒最暖。\n【實用】吧枱 8 位，可網上預約；近鐵奈良站步行 2 分鐘，吃完步行 8 分鐘到瑠璃繪。",
      "phone": "+81-742-95-5004",
      "openHours": "星期一至五 17:00–23:00；六日及假期 16:00–23:00",
      "price": "預算約 ¥4,500（估算）",
      "cost": {
        "amount": 4500,
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
      "time": "18:20",
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
      "id": "trp_d3_10",
      "day": 3,
      "time": "20:06",
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
      "note": "【交通】20:06 開 → 21:05 到梅田：近鐵急行到大阪難波（經近鐵日本橋），步行換御堂筋線（Yahoo! 乘換案內）。梅田經地下街步行約 12 分鐘回酒店。\n【備案】JR 奈良 → 大阪約 60 分鐘。",
      "phone": null,
      "openHours": "建議班次 20:06 → 21:05",
      "price": "IC ¥920",
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
        "line": "近鐵奈良線急行→御堂筋線",
        "durationMin": 59,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "id": "evt_d3_11",
      "day": 3,
      "time": "21:30",
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
      "title": "早餐：新八食堂（しんぱち食堂 阪急梅田店）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區芝田1-5-14 Shimasada 大廈 1 樓",
      "addressLocal": "大阪府大阪市北区芝田1-5-14 シマサダビル1階 しんぱち食堂 阪急梅田店",
      "coords": [
        34.7063,
        135.4976
      ],
      "tags": [
        "和定食"
      ],
      "moodColor": "#A0785A",
      "note": "【攻略】與 D3 一樣的炭火一夜干定食，今次可試鹽燒銀鮭或鯖魚味醂干。阪急三番街巴士站就在附近，吃完步行過去乘 09:50 巴士。\n【實用】不設預約；09:35 前結帳。",
      "phone": "+81-6-6374-6745",
      "openHours": "07:00–24:00，無休",
      "price": "定食約 ¥800–1,100（店內價目）",
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
      "id": "trp_d4_02",
      "day": 4,
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
      "note": "【交通】特急班 09:50 開 → 10:45 到有馬溫泉（阪急觀光巴士官方時刻表）。全車對號入座，要預先買票。\n【預約】乘車日前一個月同日 09:00 開賣（即 2027/1/10 09:00），可經高速巴士預約網站（発車オーライネット）網上、電話 0570-089006 或窗口購買。\n【備案】鐵路約 72 分鐘、轉 3 次。",
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
      "id": "evt_d4_03",
      "day": 4,
      "time": "11:15",
      "timeHint": "morning",
      "type": "food",
      "title": "午餐：織 Ori by Wellbe（藥膳火鍋膳）",
      "cityId": "kobe",
      "address": "日本兵庫縣神戶市北區有馬町332",
      "addressLocal": "兵庫県神戸市北区有馬町332 織 Ori by Wellbe",
      "coords": [
        34.7958,
        135.25
      ],
      "tags": [
        "藥膳",
        "可預約"
      ],
      "moodColor": "#A0785A",
      "note": "【攻略】有馬溫泉街上的和食店，午市「藥膳火鍋膳」用三田豬肉和地元蔬菜，配紅、白、白濁三款藥膳湯底、自家製醬汁及兵庫產 Kinuhikari 米（キヌヒカリ）白飯，泡溫泉前先吃一餐暖身。\n【預約】網上（Hot Pepper／官網）或電話預約，當日 10:00 截止；訂 11:15。",
      "phone": "+81-78-600-9359",
      "openHours": "午市 11:00–14:00（料理 L.O. 13:00）；星期一、二休",
      "price": "藥膳火鍋膳 ¥2,530（官網）",
      "cost": {
        "amount": 2530,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d4_04",
      "day": 4,
      "time": "12:45",
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
      "note": "【攻略】有馬名物「金泉」：含鐵質和鹽分的茶褐色溫泉，保溫力強。泡 10–15 分鐘就起來休息，不要一次泡太久。門外有免費足湯。2026 年 3 月翻新後已重開。\n【實用】毛巾可在館內購買；建議買金銀兩館共通券 ¥1,200，之後去銀之湯。第 2、4 個星期二休（2/10 星期三照開）。",
      "phone": "+81-78-904-0680",
      "openHours": "08:00–22:00（最後入場 21:30）；第 2、4 個星期二休",
      "price": "成人平日 ¥650；金銀共通券 ¥1,200",
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
      "id": "evt_d4_05",
      "day": 4,
      "time": "14:00",
      "timeHint": "afternoon",
      "type": "rest",
      "title": "有馬溫泉 銀之湯（銀の湯）",
      "cityId": "kobe",
      "address": "日本兵庫縣神戶市北區有馬町1039-1",
      "addressLocal": "兵庫県神戸市北区有馬町1039-1 有馬温泉 銀の湯",
      "coords": [
        34.7955,
        135.249
      ],
      "tags": [
        "溫泉",
        "銀泉"
      ],
      "moodColor": "#9AA8A3",
      "note": "【攻略】「銀泉」是無色透明的碳酸泉和放射能泉，與金泉一濃一清，對比很明顯。泡完在休息區喝水，14:55 前步行到巴士站（約 5–10 分鐘，估算）。\n【實用】用金銀共通券入場；第 1、3 個星期二休。",
      "phone": "+81-78-904-0256",
      "openHours": "09:00–21:00（最後入場 20:30）；第 1、3 個星期二休",
      "price": "成人平日 ¥550（共通券已包）",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d4_06",
      "day": 4,
      "time": "15:10",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "阪急高速巴士：有馬溫泉 → 大阪梅田（阪急三番街）",
      "cityId": "kobe",
      "address": "有馬溫泉 阪急巴士有馬案內所",
      "addressLocal": "有馬温泉（有馬案内所）高速バスのりば",
      "coords": [
        34.7989,
        135.247
      ],
      "tags": [
        "高速巴士",
        "要預約"
      ],
      "moodColor": "#2A7F7A",
      "note": "【交通】特急班 15:10 開 → 16:05 到阪急三番街（官方時刻表）。訂去程時一併訂回程。\n【備案】15:55（急行，經新大阪）→ 16:55。",
      "phone": "+81-570-089006",
      "openHours": "15:10 → 16:05",
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
        "from": "有馬溫泉",
        "to": "大阪梅田（阪急三番街）",
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
      "id": "evt_d4_07",
      "day": 4,
      "time": "16:15",
      "timeHint": "afternoon",
      "type": "shop",
      "title": "阪急梅田本店 地庫 2 樓 和洋酒賣場",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區角田町8-7 阪急梅田本店 B2",
      "addressLocal": "大阪府大阪市北区角田町8-7 阪急うめだ本店 B2F 和洋酒売場",
      "coords": [
        34.7027,
        135.4984
      ],
      "tags": [
        "清酒",
        "試飲",
        "百貨地庫"
      ],
      "moodColor": "#8C8378",
      "note": "【攻略】每星期都有不同酒藏駐場試飲販賣，可直接和藏元聊天。從有馬回來順路，試飲後選一兩瓶限定酒。\n【實用】試飲先付款或憑購買，按當週活動；退稅要帶護照。",
      "phone": "+81-6-6361-1381",
      "openHours": "10:00–20:00",
      "price": "試飲按當週活動（部分免費）",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d4_08",
      "day": 4,
      "time": "17:30",
      "timeHint": "evening",
      "type": "hotel",
      "title": "回酒店休息",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區曾根崎1-2-7（Hotel Elcient 大阪梅田）",
      "addressLocal": "〒530-0057 大阪府大阪市北区曽根崎1-2-7 ホテル エルシエント大阪梅田",
      "coords": [
        34.6983,
        135.5027
      ],
      "tags": [
        "休息"
      ],
      "moodColor": "#3A3A3A",
      "note": "【攻略】放下戰利品，換件衣服再外出吃懷石；酒店步行到北瑞苑約 10 分鐘。",
      "phone": "+81-6-6360-2200",
      "openHours": "大浴場（2 樓，設桑拿，住客專用）16:00–翌日 01:00、06:00–09:00",
      "price": "不適用",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d4_09",
      "day": 4,
      "time": "18:30",
      "timeHint": "evening",
      "type": "food",
      "title": "晚餐：懷石 北瑞苑（晚市）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區曾根崎新地2-3-21 ax 大廈 3 樓",
      "addressLocal": "大阪府大阪市北区曽根崎新地2-3-21 axビル3F 懐石 北瑞苑",
      "coords": [
        34.698,
        135.4944
      ],
      "tags": [
        "懷石",
        "可預約"
      ],
      "moodColor": "#A0785A",
      "note": "【攻略】有馬溫泉老字號旅館「中之坊瑞苑（中の坊瑞苑）」直營的懷石，剛去完有馬，晚上吃他們的料理很有呼應。晚市入門「雪」¥9,900，季節食材為主，可配清酒。官方註明一人亦可。\n【預約】REGLI 網上或電話預約；一般席服務費 10%（包廂 15%）。",
      "phone": "+81-6-6346-0147",
      "openHours": "晚市 17:30–22:00（料理 L.O. 20:00）；星期日及假期晚市休",
      "price": "晚市懷石「雪」¥9,900（官網，另加服務費 10%）",
      "cost": {
        "amount": 10890,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
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
        "要預約"
      ],
      "moodColor": "#A0785A",
      "note": "【攻略】英國紅茶專門店，假期 08:00 開。09:00–11:00 有完全預約制的 English Breakfast（¥3,000），配一壺專門店紅茶慢慢享用；不想太飽可改點早餐多士套餐（¥700，連紅茶，供應至 11:00）。\n【預約】English Breakfast 要預約（電話 10:00–20:00 受理）。",
      "phone": "+81-6-6347-0107",
      "openHours": "星期六日及假期 08:00–20:00；早餐至 11:00",
      "price": "English Breakfast ¥3,000（完全預約制）；多士套餐 ¥700",
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
      "note": "【交通】09:58 開 → 09:59 到，一個站（Yahoo! 乘換案內）。中崎町站 2 號出口步行約 4 分鐘到物差沙龍。也可以由堂島直接步行約 20 分鐘（估算）。",
      "phone": null,
      "openHours": "建議班次 09:58 → 09:59",
      "price": "IC ¥190",
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
        "liveApi": {
          "provider": "odpt",
          "stopId": "odpt.Station:OsakaMetro.Tanimachi.HigashiUmeda",
          "lineId": null,
          "direction": null,
          "refreshSec": 60
        }
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
      "time": "11:51",
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
      "note": "【交通】11:51 開 → 11:53 到（Yahoo! 乘換案內）；東梅田經地下街步行約 10 分鐘到 HERBIS ENT（估算）。",
      "phone": null,
      "openHours": "建議班次 11:51 → 11:53",
      "price": "IC ¥190",
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
      "id": "evt_d5_05",
      "day": 5,
      "time": "12:15",
      "timeHint": "afternoon",
      "type": "food",
      "title": "午餐：銀座天一 大阪店（吧枱天婦羅）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區梅田2-2-22 HERBIS PLAZA ENT 5 樓",
      "addressLocal": "大阪府大阪市北区梅田2-2-22 ハービスPLAZA ENT 5F 銀座 天一",
      "coords": [
        34.6998,
        135.4946
      ],
      "tags": [
        "天婦羅",
        "吧枱",
        "可預約"
      ],
      "moodColor": "#A0785A",
      "note": "【攻略】1930 年創業的江戶前天婦羅老店。坐吧枱看師傅逐件現炸，一人坐也很自然；吧枱午市「梅」¥5,940，蝦、季節魚和蔬菜即炸即吃。\n【預約】官網網上預約，指定吧枱位。",
      "phone": "+81-6-6225-7361",
      "openHours": "午市 11:00–15:00（L.O. 14:30）；晚市 17:00–22:00；跟 HERBIS 休館日",
      "price": "吧枱「梅」¥5,940；枱位天婦羅膳 ¥3,630",
      "cost": {
        "amount": 5940,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d5_06",
      "day": 5,
      "time": "13:45",
      "timeHint": "afternoon",
      "type": "shop",
      "title": "阪神梅田本店 地庫 1 樓 Liquor World（リカーワールド）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區梅田1-13-13 阪神梅田本店 B1",
      "addressLocal": "大阪府大阪市北区梅田1-13-13 阪神梅田本店 B1F リカーワールド",
      "coords": [
        34.7012,
        135.4986
      ],
      "tags": [
        "清酒",
        "站立試飲",
        "百貨地庫"
      ],
      "moodColor": "#8C8378",
      "note": "【攻略】日本最大級百貨公司酒賣場（約 100 坪），有站立試飲角（角打ち），每星期換一個酒藏或主題。順便逛地庫食品館，是大阪人日常的味道。\n【實用】試飲多數收費、按當週活動；退稅帶護照。",
      "phone": "+81-6-6345-1201",
      "openHours": "10:00–20:00",
      "price": "試飲按當週活動",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d5_07",
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
      "id": "evt_d5_08",
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
      "id": "evt_d5_09",
      "day": 5,
      "time": "19:00",
      "timeHint": "evening",
      "type": "food",
      "title": "晚餐：溫燗佐藤 大坂（ぬる燗佐藤 大坂）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區大深町4-20 Grand Front 大阪南館 7 樓",
      "addressLocal": "大阪府大阪市北区大深町4-20 グランフロント大阪南館7F ぬる燗佐藤 大坂",
      "coords": [
        34.7042,
        135.4948
      ],
      "tags": [
        "清酒",
        "可預約"
      ],
      "moodColor": "#A0785A",
      "note": "【攻略】齊集 47 個都道府縣清酒，溫度由 0°C 到 55°C 分 11 級任選，同一款酒可試不同溫度。小食推介牛筋肉豆腐（¥950）、牛油醬油燒帆立貝；有品飲比較套餐（¥1,320 起）。\n【預約】Toreta 網上預約，指定吧枱（9 位）；JR 大阪站步行 1 分鐘，回酒店近。",
      "phone": "+81-6-6131-8948",
      "openHours": "11:00–23:00",
      "price": "晚市平均 ¥5,000–6,000；清酒一杯 ¥710 起",
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
      "id": "evt_d6_01",
      "day": 6,
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
      "note": "【攻略】1947 年創業、1970 年搬入大阪站前第 1 大廈的老牌純喫茶，太空船般的裝潢是大阪市「活建築博物館（生きた建築ミュージアム）」之一。09:00–11:00 早餐套餐：多士或半份蛋三文治＋熱咖啡 ¥500，自家烘焙咖啡單點 ¥350。\n【實用】只收現金；分煙制有煙味，介意可改吃酒店早餐（最後入場 09:45）。星期日及假期休。",
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
      "transport": null
    },
    {
      "id": "trp_d6_02",
      "day": 6,
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
      "note": "【交通】09:56 開 → 09:58 到（Yahoo! 乘換案內）；肥後橋站步行約 10 分鐘到中之島美術館（估算）。",
      "phone": null,
      "openHours": "建議班次 09:56 → 09:58",
      "price": "IC ¥190",
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
      "id": "evt_d6_03",
      "day": 6,
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
      "note": "【攻略】2027/1/9–3/22 在 5 樓展室舉行，以近百年來創作的日本女性為主題。星期五早上人較少，可慢慢看；美術館建築本身（黑色立方體）也值得留意。\n【實用】網上 etix／ART PASS 預先買票；入場至 16:30。問詢：大阪市總合 熱線（なにわコール）。",
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
      "id": "trp_d6_04",
      "day": 6,
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
      "note": "【交通】12:14 開 → 12:19 到（Yahoo! 乘換案內）；美術館步行到中之島站約 5 分鐘，浪華橋站步行約 5 分鐘到柴藤。也可以沿中之島河邊散步約 25 分鐘（估算）。",
      "phone": null,
      "openHours": "建議班次 12:14 → 12:19",
      "price": "IC ¥240",
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
        "line": "中之島線",
        "durationMin": 5,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "id": "evt_d6_05",
      "day": 6,
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
      "note": "【攻略】創業約 300 年、第十五代傳人經營的大阪鰻魚老店。必吃「大阪鰻魚飯（大阪まむし）」：大阪做法將鰻魚夾在飯中間蒸焗，「菊」¥4,920 起。\n【注意】店方要求客人不要用香水、不要用有香味的柔順劑——當日早上不要塗精油。逢星期日、一休，可電話預約。",
      "phone": "+81-6-6231-4810",
      "openHours": "10:30–17:00 L.O.（18:00 關門）；逢星期日、一休",
      "price": "大阪鰻魚飯「菊」¥4,920（官網）",
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
      "id": "trp_d6_06",
      "day": 6,
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
      "note": "【交通】13:44 開 → 13:45 到，一個站（Yahoo! 乘換案內）；南森町站 4A 出口沿天神橋筋商店街步行約 5 分鐘到摩芙瑠。",
      "phone": null,
      "openHours": "建議班次 13:44 → 13:45",
      "price": "IC ¥190",
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
      "id": "evt_d6_07",
      "day": 6,
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
      "note": "【攻略】40 多年老店，老闆前川光永親自去歐洲入貨，出版過幾本浮雕寶石（cameo）專書。主力喬治亞時期至 1940 年代古董首飾和 cameo，可請老闆講解雕工、材質和年代分別。\n【實用】只開星期三至六 13:30–17:00（2/12 星期五正常營業）；其他日子可電話預約。",
      "phone": "+81-6-6353-3147",
      "openHours": "星期三至六 13:30–17:00",
      "price": "按貨品標價",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d6_08",
      "day": 6,
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
      "note": "【交通】15:26 開 → 15:28 到（Yahoo! 乘換案內）；北新地站 10 號出口步行 1 分鐘到 Wayanpuri。",
      "phone": null,
      "openHours": "建議班次 15:26 → 15:28",
      "price": "IC ¥150",
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
        "line": "JR 東西線",
        "durationMin": 2,
        "stopCount": 1,
        "liveApi": null
      }
    },
    {
      "id": "evt_d6_09",
      "day": 6,
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
      "note": "【攻略】創業 21 年的頭療專門店，先做頭皮診斷，再做毛孔清洗和頸膊護理；整個療程（包括更衣、化妝）都在私人房間。走了兩天，選「頸膊放鬆集中療程（首肩コリ改善集中）」頸膊加強版最適合。\n【預約】全預約制，電話或官網預約 15:45。",
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
      "id": "evt_d6_10",
      "day": 6,
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
      "note": "【攻略】頭療後頭皮很放鬆，泡浴時不用再用力洗頭；休息一會再出去吃晚飯。",
      "phone": "+81-6-6360-2200",
      "openHours": "大浴場（2 樓，設桑拿，住客專用）16:00–翌日 01:00、06:00–09:00",
      "price": "住客免費",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d6_11",
      "day": 6,
      "time": "18:30",
      "timeHint": "evening",
      "type": "food",
      "title": "晚餐：日本酒與料理 黑川（日本酒と料理 くろ川）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區曾根崎新地1-10-22 Miya Plaza 8 樓",
      "addressLocal": "大阪府大阪市北区曾根崎新地1-10-22 ミヤプラザ8F 日本酒と料理 くろ川",
      "coords": [
        34.6981,
        135.4976
      ],
      "tags": [
        "清酒",
        "吧枱",
        "要預約"
      ],
      "moodColor": "#A0785A",
      "note": "【攻略】在北新地 8 樓望著夜景品嚐四季和食配清酒，是今次行程最「大人」的一晚。可請店方按料理配清酒，一人坐吧枱聊天也自然。\n【預約】完全預約制（Tabelog／官網網上預約）；店方要求勿用濃香水；服務費 5%。",
      "phone": "+81-6-4300-6722",
      "openHours": "18:00–00:00；不定休（看 Instagram）",
      "price": "預算 ¥10,000–14,999（另加服務費 5%）",
      "cost": {
        "amount": 13000,
        "currency": "JPY",
        "category": "food"
      },
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
      "note": "【攻略】今天要試很多酒，早餐多吃一點墊胃：大阪燒、日替惣菜和沙律都有。09:40 吃完，09:45 出門步行到阪神大阪梅田站（約 10 分鐘，估算）。",
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
      "transport": null
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
      "note": "【交通】10:00 開 → 10:22 到，直達（Yahoo! 乘換案內）；魚崎站向南步行約 10 分鐘到菊正宗。",
      "phone": null,
      "openHours": "建議班次 10:00 → 10:22",
      "price": "IC ¥300",
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
        "line": "阪神本線特急",
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
      "title": "白鶴酒造資料館",
      "cityId": "kobe",
      "address": "日本兵庫縣神戶市東灘區住吉南町4-5-5",
      "addressLocal": "兵庫県神戸市東灘区住吉南町4-5-5 白鶴酒造資料館",
      "coords": [
        34.7102,
        135.2617
      ],
      "tags": [
        "清酒",
        "試飲"
      ],
      "moodColor": "#6B7F7A",
      "note": "【攻略】用大正時代酒藏改建，展示傳統釀酒工具和工序。有季節限定酒免費試飲，另有高級酒付費試飲機；2026 年 8 月商店全面翻新，可買資料館限定酒和微型釀酒廠出品。\n【實用】由菊正宗步行約 8 分鐘（估算）；10 人以下不用預約。",
      "phone": "+81-78-822-8907",
      "openHours": "09:30–16:30（入館至 16:00）；年末年始休",
      "price": "免費入館；高級酒試飲收費",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d7_05",
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
      "note": "【攻略】「福壽」酒藏附設的料亭，主打自家製豆腐和蕎麥麵，配藏元生原酒。推介「御影膳（みかげ膳）」¥3,500；必試自家製手舀豆腐（すくい豆腐，¥680）和酒粕雪糕（¥500）。\n【預約】電話預約 13:15（可預約一年內）；逢星期三休。由白鶴步行約 15 分鐘（估算）。",
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
      "transport": null
    },
    {
      "id": "evt_d7_06",
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
      "note": "【攻略】福壽的藏元商店，有免費試飲和季節推介酒；必試藏直採生酒（純米、大吟釀生原酒）和微發泡「FUKUJU KEG DRAFT」。藏元限定酒和酒粕適合帶回香港。\n【實用】16:10 前出發，沿河向南步行約 8 分鐘到阪神石屋川站。",
      "phone": "+81-78-841-1121",
      "openHours": "10:00–18:30（1/1–1/3 休）",
      "price": "免費試飲",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d7_07",
      "day": 7,
      "time": "16:23",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "阪神本線：石屋川 → 大阪梅田",
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
      "note": "【交通】16:23 開 → 16:52 到，中途轉特急 1 次（Yahoo! 乘換案內）。",
      "phone": null,
      "openHours": "建議班次 16:23 → 16:52",
      "price": "IC ¥320",
      "cost": {
        "amount": 320,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "train",
        "from": "石屋川",
        "to": "大阪梅田（阪神）",
        "fromEventId": null,
        "toEventId": null,
        "operator": "阪神電氣鐵道",
        "line": "阪神本線→特急",
        "durationMin": 29,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "id": "evt_d7_08",
      "day": 7,
      "time": "17:05",
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
      "note": "【攻略】試了一天酒，先喝水再泡浴，不要泡太久。",
      "phone": "+81-6-6360-2200",
      "openHours": "大浴場（2 樓，設桑拿，住客專用）16:00–翌日 01:00、06:00–09:00",
      "price": "住客免費",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d7_09",
      "day": 7,
      "time": "18:30",
      "timeHint": "evening",
      "type": "food",
      "title": "晚餐：新八食堂（しんぱち食堂 西梅田店）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區曾根崎新地2-1-21",
      "addressLocal": "大阪府大阪市北区曾根崎新地2-1-21 しんぱち食堂 西梅田店",
      "coords": [
        34.6977,
        135.4953
      ],
      "tags": [
        "和定食"
      ],
      "moodColor": "#A0785A",
      "note": "【攻略】中午吃得豐富，晚上吃清淡的炭火燒魚定食：推介赤魚一夜干定食或鯖魚味噌煮定食，配一杯小杯生啤。\n【實用】不設預約；備案：懷石 北瑞苑。",
      "phone": "+81-6-4400-2787",
      "openHours": "08:00–22:00（Tabelog）",
      "price": "定食約 ¥800–1,100（店內價目）",
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
      "id": "evt_d8_01",
      "day": 8,
      "time": "08:00",
      "timeHint": "morning",
      "type": "food",
      "title": "早餐：倫敦茶室 堂島本店（ロンドンティールーム）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區曾根崎新地2-1-23 JPR 大廈 B1",
      "addressLocal": "大阪府大阪市北区曽根崎新地2-1-23 JPRビルB1F ロンドンティールーム 堂島本店",
      "coords": [
        34.6975,
        135.4953
      ],
      "tags": [
        "英式紅茶"
      ],
      "moodColor": "#A0785A",
      "note": "【保留早開始】四天會古董市 07:00 開，好貨早上被買走；早內 午市只有 11:30 一場可預約。\n【攻略】今天要早出門，點早餐多士套餐（¥700，連紅茶）就足夠；芝士多士 ¥900。08:45 前結帳步行到東梅田站。",
      "phone": "+81-6-6347-0107",
      "openHours": "星期六日及假期 08:00–20:00；早餐至 11:00",
      "price": "早餐多士套餐 ¥700（連紅茶）",
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
      "note": "【保留早開始】四天會古董市 07:00 開，好貨早上被買走；早內 午市只有 11:30 一場可預約。\n【交通】09:01 開 → 09:14 到，直達（Yahoo! 乘換案內）；出站步行約 5 分鐘到四天王寺。",
      "phone": null,
      "openHours": "建議班次 09:01 → 09:14",
      "price": "IC ¥240",
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
        "line": "谷町線",
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
      "note": "【攻略】Tabelog蕎麥百名店（2024、2025），店主出身名店「土山人」。午市只有 11:30 一起開始的「午市蕎麥膳（お昼の蕎麦膳）」（¥5,200）接受預約；單點人氣是柚子香鴨汁蒸籠（¥1,800）。\n【預約】電話預約 11:30 蕎麥膳；不預約要排隊。逢星期三休。",
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
      "transport": null
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
      "note": "【交通】14:20 開 → 14:36 到，直達（Yahoo! 乘換案內）；天六站 5 號出口向北步行約 10 分鐘到浪花之湯。",
      "phone": null,
      "openHours": "建議班次 14:20 → 14:36",
      "price": "IC ¥240",
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
      "note": "【攻略】大樓天台的天然溫泉，露天區有源泉湯、壺湯、岩風呂、寢湯，逛完古董市泡個露天浴最舒服。\n【實用】毛巾可租／買；週末人多，下午 3 點左右較好。A 案：如白雪「藏祭（蔵まつり）」確定在 2/14，可改去伊丹（見靈感）。",
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
      "time": "16:43",
      "timeHint": "afternoon",
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
      "note": "【交通】16:43 開 → 16:47 到（Yahoo! 乘換案內）。",
      "phone": null,
      "openHours": "建議班次 16:43 → 16:47",
      "price": "IC ¥190",
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
        "line": "谷町線",
        "durationMin": 4,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "id": "evt_d8_09",
      "day": 8,
      "time": "17:15",
      "timeHint": "evening",
      "type": "shop",
      "title": "阪神梅田本店 地庫 1 樓 最後補買清酒",
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
      "note": "【攻略】按這星期試過最喜歡的款式補貨；可請店員用防震包裝。回程行李 32kg，要預先計好瓶數。",
      "phone": "+81-6-6345-1201",
      "openHours": "10:00–20:00",
      "price": "按貨品標價",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d8_10",
      "day": 8,
      "time": "18:30",
      "timeHint": "evening",
      "type": "food",
      "title": "晚餐：與太呂 梅田店（与太呂，天婦羅＋鯛魚飯）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區梅田3-1-1 大丸梅田店 14 樓",
      "addressLocal": "大阪府大阪市北区梅田3-1-1 大丸梅田店14F 与太呂 梅田店",
      "coords": [
        34.7019,
        135.4964
      ],
      "tags": [
        "天婦羅",
        "鯛魚飯",
        "可預約"
      ],
      "moodColor": "#A0785A",
      "note": "【攻略】1927 年創業，以天婦羅和土鍋鯛魚飯出名。注意：「鯛魚飯套餐（鯛めしコース）」（¥6,000）要 2 人以上；一人可點天婦羅套餐（¥7,000）或四季御膳（¥2,480），訂位時可問鯛魚飯能否單點。\n【預約】電話預約，指定吧枱。",
      "phone": "+81-6-6455-5878",
      "openHours": "11:00–22:00（L.O. 21:00，跟大丸營業）",
      "price": "天婦羅套餐 ¥7,000；四季御膳 ¥2,480（大丸官網）",
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
      "note": "【攻略】最後一頓大阪早餐，記得試章魚燒和季節 smoothie；09:50 前吃完。",
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
      "transport": null
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
      "note": "【實用】退房前檢查清酒包裝及行李重量（回程建議加購 32kg）。步行到阪急三番街約 15 分鐘（估算），行李重可乘的士。",
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
      "title": "機場利木津巴士：阪急三番街 → 關西機場第 1 航廈",
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
      "note": "【交通】11:50 或 12:00 班，約 60 分鐘到第 1 航廈（約 12:50／13:00 到；2026-01-27 版時刻表）。不用預約，先到先上。\n【備案】JR 關空快速約 70 分鐘。",
      "phone": null,
      "openHours": "約每 30 分鐘一班",
      "price": "成人單程 ¥1,800",
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
      "note": "【攻略】出境後的和食 food court（約 280 座位），有和牛、海鮮和季節食材定食，燒物、炸物、刺身一次吃到，是最後一頓日本味道。\n【實用】辦完退稅（海關確認）及出境後再去吃；可用信用卡。",
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
      "transport": null
    },
    {
      "id": "evt_d9_07",
      "day": 9,
      "time": "15:15",
      "timeHint": "afternoon",
      "type": "departure",
      "title": "HX 回程：大阪關西 → 香港",
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
      "note": "【航班】HK Express（HX）15:15 起飛，18:55 到香港（航班號待訂票後確認）。回程建議加購 32kg 寄艙（約 HK$430）。\n【實用】HK Express 客服用 WhatsApp +852 3951 7229（每日 08:00–20:00）。",
      "phone": "+852 3951 7229",
      "openHours": "15:15 起飛 → 18:55 抵達（香港時間）",
      "price": "機票 HK$2,450（Google Flights 2026-10-18 報價）",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d9_08",
      "day": 9,
      "time": "19:30",
      "timeHint": "evening",
      "type": "food",
      "title": "晚餐：何洪記（香港機場接機大堂）",
      "cityId": "hong-kong",
      "address": "香港國際機場一號客運大樓 5 樓抵港層接機大堂 5T160 號舖",
      "addressLocal": "Ho Hung Kee, Shop 5T160, L5 Arrivals Meeters & Greeters Hall, Terminal 1, HKIA",
      "coords": [
        22.3139,
        113.93
      ],
      "tags": [
        "雲吞麵"
      ],
      "moodColor": "#A0785A",
      "note": "【攻略】出閘便到，招牌是「正斗鮮蝦雲吞麵」，回到香港第一餐吃一碗熱騰騰的雲吞麵最療癒。\n【實用】非禁區；吃完步行到機場巴士站乘 A29。",
      "phone": "+852 2323 6690",
      "openHours": "07:00–23:30（機場官方資料）",
      "price": "雲吞麵約 HK$60（第三方舊價，出發前再確認）",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d9_09",
      "day": 9,
      "time": "20:15",
      "timeHint": "evening",
      "type": "transport",
      "title": "城巴 A29：香港國際機場 → 寶琳",
      "cityId": "hong-kong",
      "address": "香港國際機場一號客運大樓巴士總站",
      "addressLocal": "Hong Kong International Airport Terminal 1 Bus Terminus",
      "coords": [
        22.3159,
        113.9359
      ],
      "tags": [
        "機場巴士"
      ],
      "moodColor": "#2A7F7A",
      "note": "【交通】星期一晚約每 15–20 分鐘一班（HK GTFS），車程約 91 分鐘，約 21:45 到寶琳。",
      "phone": null,
      "openHours": "星期一晚約每 15–20 分鐘一班（HK GTFS）",
      "price": "HK$44（八達通，按 HK GTFS 車資）",
      "cost": {
        "amount": 44,
        "currency": "HKD",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "bus",
        "from": "香港國際機場",
        "to": "將軍澳（寶琳）",
        "fromEventId": null,
        "toEventId": null,
        "operator": "城巴 Citybus",
        "line": "A29",
        "durationMin": 91,
        "stopCount": null,
        "liveApi": null
      }
    }
  ]
};

// 7. 💡 靈感池／後備方案
const INSPIRATIONS = [
  {
    "id": "ins_001",
    "title": "新八食堂 西梅田店（しんぱち食堂）",
    "tag": "TIRED",
    "note": "2/7 晚餐備案：太累不想逛超市就吃炭火燒魚定食；全店禁煙、不用訂位。",
    "type": "food",
    "cityId": "osaka",
    "address": "日本大阪府大阪市北區曾根崎新地2-1-21",
    "addressLocal": "大阪府大阪市北区曾根崎新地2-1-21 しんぱち食堂 西梅田店",
    "coords": [
      34.6977,
      135.4953
    ],
    "nearEventId": "evt_d1_08",
    "status": "wishlist",
    "source": "ai",
    "phone": "+81-6-4400-2787",
    "openHours": "08:00–22:00（Tabelog）",
    "price": "定食約 ¥800–1,100"
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
    "title": "溫燗佐藤 大坂（ぬる燗佐藤）",
    "tag": "FOOD",
    "note": "燗之美穗滿座或休息時的清酒備案：星期一照開，11 級溫度任選；JR 大阪站 1 分鐘。",
    "type": "food",
    "cityId": "osaka",
    "address": "日本大阪府大阪市北區大深町4-20 Grand Front 大阪南館 7 樓",
    "addressLocal": "大阪府大阪市北区大深町4-20 グランフロント大阪南館7F ぬる燗佐藤 大坂",
    "coords": [
      34.7042,
      135.4948
    ],
    "nearEventId": "evt_d2_10",
    "status": "wishlist",
    "source": "ai",
    "phone": "+81-6-6131-8948",
    "openHours": "11:00–23:00",
    "price": "晚市平均 ¥5,000–6,000"
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
    "nearEventId": "evt_d3_08",
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
    "nearEventId": "evt_d3_08",
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
    "note": "想泡久一點或金之湯臨時休館時的備案：金泉、銀泉、岩盤浴一次；2 月無休館日。阪急巴士來回＋入館套票 ¥3,870。",
    "type": "rest",
    "cityId": "kobe",
    "address": "日本兵庫縣神戶市北區有馬町池之尻292-2",
    "addressLocal": "兵庫県神戸市北区有馬町池の尻292-2 有馬温泉 太閤の湯",
    "coords": [
      34.7978,
      135.2512
    ],
    "nearEventId": "evt_d4_03",
    "status": "wishlist",
    "source": "ai",
    "phone": "+81-78-904-2291",
    "openHours": "10:00–22:00（最後入館 21:00）",
    "price": "平日成人 ¥2,750（另加入湯稅 ¥75）"
  },
  {
    "id": "ins_008",
    "title": "銀座天一 大阪店（晚市）",
    "tag": "FOOD",
    "note": "2/10 晚餐備案：吧枱天婦羅晚市；如果有馬午餐吃得少，可改到這裡。",
    "type": "food",
    "cityId": "osaka",
    "address": "日本大阪府大阪市北區梅田2-2-22 HERBIS PLAZA ENT 5 樓",
    "addressLocal": "大阪府大阪市北区梅田2-2-22 ハービスPLAZA ENT 5F 銀座 天一",
    "coords": [
      34.6998,
      135.4946
    ],
    "nearEventId": "evt_d4_09",
    "status": "wishlist",
    "source": "ai",
    "phone": "+81-6-6225-7361",
    "openHours": "晚市 17:00–22:00",
    "price": "吧枱套餐 ¥5,940–9,900（官網列價）"
  },
  {
    "id": "ins_009",
    "title": "國立國際美術館「詞語重疊之地」（コトバの重なる場所）",
    "tag": "RAINY",
    "note": "2/12 中之島美術館人多時改去，就在旁邊；星期五開到 20:00（入場 19:30），展期至 2027/3/14。",
    "type": "sight",
    "cityId": "osaka",
    "address": "日本大阪府大阪市北區中之島4-2-55",
    "addressLocal": "大阪府大阪市北区中之島4-2-55 国立国際美術館",
    "coords": [
      34.6917,
      135.4922
    ],
    "nearEventId": "evt_d6_03",
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
    "title": "懷石 北瑞苑「四季彩」午市",
    "tag": "FOOD",
    "note": "2/11 午餐備案：有馬中之坊瑞苑直營，一人亦可；日及假期午市照開，官網預約。",
    "type": "food",
    "cityId": "osaka",
    "address": "日本大阪府大阪市北區曾根崎新地2-3-21 ax 大廈 3 樓",
    "addressLocal": "大阪府大阪市北区曽根崎新地2-3-21 axビル3F 懐石 北瑞苑",
    "coords": [
      34.698,
      135.4944
    ],
    "nearEventId": "evt_d5_05",
    "status": "wishlist",
    "source": "ai",
    "phone": "+81-6-6346-0147",
    "openHours": "午市時間以官網為準",
    "price": "四季彩午市 ¥3,960 起（另加服務費 10%）"
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
  }
];

// 8. 🛒 每日購物
const DAILY_EXTRAS = {
  "1": {
    "shopping": [
      "Visit Japan Web 入境 QR code",
      "ICOCA／信用卡拍卡",
      "LUCUA 熟食＋本地清酒"
    ]
  },
  "2": {
    "shopping": [
      "古物市用現金",
      "vintage 皮具（問品相分級、真品保證）",
      "退稅：帶護照（2026-11 起出境時退稅）"
    ]
  },
  "3": {
    "shopping": [
      "手握奈良墨（桐箱，3 個月內勿開）",
      "奈良地酒",
      "柿葉壽司（平宗外賣）"
    ]
  },
  "4": {
    "shopping": [
      "溫泉毛巾",
      "阪急 B2 試飲後買限定酒"
    ]
  },
  "5": {
    "shopping": [
      "日本產精油",
      "自調香水 10ml",
      "阪神 B1 清酒"
    ]
  },
  "6": {
    "shopping": [
      "古董首飾／cameo",
      "頭療推介嘅護髮產品（按需要）"
    ]
  },
  "7": {
    "shopping": [
      "藏開限定新酒",
      "酒粕",
      "現金（藏開攤位多數只收現金）"
    ]
  },
  "8": {
    "shopping": [
      "四天會古皮具／古首飾（現金）",
      "最後一批清酒（防震包裝）"
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
    "total": 266660,
    "currency": "JPY",
    "byCategory": {
      "hotel": 130330,
      "food": 94720,
      "transport": 11760,
      "ticket": 12350,
      "shop": 0,
      "other": 17500
    },
    "note": "日圓為日本當地估算：酒店＝Elcient 8 晚約 ¥127,330＋宿泊稅約 ¥3,000；交通＝各段 IC／巴士車資（Yahoo! 乘換案內、官方時刻表）；其他＝香薰按摩、頭療；購物未估。機票 HK$5,223（去 HK$2,773＋回 HK$2,450）＋行李約 HK$740、香港 A29 巴士 HK$88 另計（港幣）。"
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
