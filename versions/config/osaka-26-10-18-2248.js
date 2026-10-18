// buildTime: 2026-10-18T14:13:28.447Z
// ============================================================
// 🧳 客製化設定檔 config.js —— 大阪 2027/2（草稿 config_draft）
// 結構契約見 SCHEMA.md／schema.json；由 proposal_v2.md 生成，未部署
// coords：GSI 地址檢索（番地級）／OSM Nominatim（POI、站點），4 位小數；transport 用出發點；liveApi 為 null
// ============================================================

// 1. 🎨 主題顏色（藍綠點睛＋黑白灰米）
const THEME_CONFIG = {
  "accentColor": "#2A7F7A",
  "accentText": "#FFFFFF",
  "backgroundColor": "#FAF8F4",
  "cardColor": "#F2EFE9",
  "textColor": "#1F1F1F",
  "textSubColor": "#7A766F",
  "borderColor": "#E4DFD6",
  "googleFontsUrl": "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;500;700&display=swap",
  "fontHeading": "\"Noto Sans JP\", sans-serif",
  "fontBody": "\"Noto Sans JP\", sans-serif"
};

// 2. 🗓️ 旅程設定
const CONFIG = {
  "ui": {
    "browserTitle": "Osaka Feb 2027",
    "headerTitle": "大阪二月・清酒與手作",
    "homeTimezone": "Asia/Hong_Kong",
    "homeTimeLabel": "HKG"
  },
  "startDate": "2027-02-07",
  "duration": 9,
  "travelers": {
    "type": "solo",
    "count": 1,
    "note": "Dav，獨旅"
  },
  "baseCurrency": "HKD",
  "tripCurrency": "JPY"
};

// 3. 📍 目的地
const DESTINATION = {
  "name": "大阪 Osaka",
  slug: "osaka",
  "lat": 34.6937,
  "lon": 135.5023,
  "timezone": "Asia/Tokyo",
  "currency": "jpy",
  "currencyLabel": "JPY",
  "baseCurrency": "HKD"
};

const CITIES = [];

// 4. ✈️ 航班與住宿
const TRIP_INFO = {
  "visa": {
    "type": "香港特區護照免簽入境日本（短期滯在）",
    "number": null,
    "note": "香港特區護照可免簽短期入境日本；出發前預填 Visit Japan Web（入境及海關申報）",
    "expiry": null
  },
  "flights": [
    {
      "type": "去程",
      "flight": "HX（航班號待確認）",
      "date": "02/07",
      "dep": "HKG 11:50",
      "arr": "KIX 16:25",
      "note": "HKG T1；KIX T1；HK$2,773（Google Flights 2026-10-18）；寄艙 20kg 首次訂票 HK$310",
      "bookingRef": null
    },
    {
      "type": "回程",
      "flight": "HX（航班號待確認）",
      "date": "02/15",
      "dep": "KIX 15:15",
      "arr": "HKG 18:55",
      "note": "約 13:00 到 KIX T1；HK$2,450；回程建議 32kg HK$430",
      "bookingRef": null
    }
  ],
  "hotels": [
    {
      "cityId": null,
      "name": "Hotel Elcient 大阪梅田（ホテル エルシエント大阪梅田）",
      "address": "〒530-0057 大阪市北区曽根崎1-2-7",
      "phone": "+81663602200",
      "checkIn": "2027-02-07",
      "checkOut": "2027-02-15",
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
      "name": "香港入境處 協助在外香港居民 24 小時熱線",
      "phone": "+852 1868"
    },
    {
      "name": "酒店 Hotel Elcient 大阪梅田",
      "phone": "+81-6-6360-2200"
    }
  ]
};

// 5. 🗺️ 行程（扁平 timeline）
const ITINERARY = {
  "items": [
    {
      "id": "evt_d1_01",
      "day": 1,
      "time": "07:00",
      "timeHint": null,
      "type": "food",
      "title": "早餐：在家",
      "cityId": null,
      "address": "香港將軍澳（住址不入檔）",
      "addressLocal": null,
      "coords": null,
      "tags": [],
      "moodColor": "#A0785A",
      "note": "07:45 前出門；【保留早開始】出發日：HX 11:50 起飛，需 09:20 前到 HKIA T1 check-in",
      "phone": null,
      "openHours": null,
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "trp_d1_02",
      "day": 1,
      "time": "07:45",
      "timeHint": null,
      "type": "transport",
      "title": "城巴 A29 寶琳 → 機場",
      "cityId": null,
      "address": null,
      "addressLocal": null,
      "coords": [
        22.3234,
        114.2576
      ],
      "tags": [],
      "moodColor": "#2A7F7A",
      "note": "星期日早上每 15–20 分一班（HK GTFS）；年初二人多；【保留早開始】出發日：HX 11:50 起飛，需 09:20 前到 HKIA T1 check-in",
      "phone": null,
      "openHours": null,
      "price": null,
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
        "to": "香港國際機場 T1",
        "fromEventId": null,
        "toEventId": null,
        "operator": "Citybus",
        "line": "A29",
        "durationMin": 91,
        "liveApi": null
      }
    },
    {
      "id": "evt_d1_03",
      "day": 1,
      "time": "10:15",
      "timeHint": null,
      "type": "food",
      "title": "午餐：正斗粥麵專家（HKIA 禁區）",
      "cityId": null,
      "address": "香港國際機場 T1 離港層 L7 離境（北）後美食廣場",
      "addressLocal": null,
      "coords": [
        22.3139,
        113.93
      ],
      "tags": [
        "粥麵"
      ],
      "moodColor": "#A0785A",
      "note": "先 check-in 寄艙（20kg HK$310 預先網上買）；出發日，早吃午餐",
      "phone": null,
      "openHours": "24 小時",
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "evt_d1_04",
      "day": 1,
      "time": "11:50",
      "timeHint": null,
      "type": "departure",
      "title": "HX 去程 HKG → KIX",
      "cityId": null,
      "address": "HKG T1",
      "addressLocal": null,
      "coords": [
        22.3139,
        113.93
      ],
      "tags": [
        "航班"
      ],
      "moodColor": "#3A3A3A",
      "note": "16:25 抵達關西機場第 1 航廈",
      "phone": null,
      "openHours": null,
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "evt_d1_05",
      "day": 1,
      "time": "16:25",
      "timeHint": null,
      "type": "arrival",
      "title": "抵達關西機場 T1",
      "cityId": null,
      "address": "関西国際空港 第1ターミナル",
      "addressLocal": null,
      "coords": [
        34.4343,
        135.2442
      ],
      "tags": [],
      "moodColor": "#3A3A3A",
      "note": "入境＋提行李約 45–60 分（估算）；預先填 Visit Japan Web",
      "phone": null,
      "openHours": null,
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "trp_d1_06",
      "day": 1,
      "time": "17:30",
      "timeHint": null,
      "type": "transport",
      "title": "空港リムジンバス KIX → 阪急三番街",
      "cityId": null,
      "address": null,
      "addressLocal": null,
      "coords": [
        34.4343,
        135.2442
      ],
      "tags": [],
      "moodColor": "#2A7F7A",
      "note": "約 18:40 到；下車步行約 15 分到酒店（估算），行李多可坐短程 taxi",
      "phone": null,
      "openHours": null,
      "price": null,
      "cost": {
        "amount": 1800,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "bus",
        "from": "関西空港 第1ターミナル",
        "to": "阪急三番街",
        "fromEventId": null,
        "toEventId": null,
        "operator": "阪急観光バス／阪神バス／関西空港交通",
        "line": "大阪駅前（梅田）線",
        "durationMin": 67,
        "liveApi": null
      }
    },
    {
      "id": "evt_d1_07",
      "day": 1,
      "time": "19:00",
      "timeHint": null,
      "type": "hotel",
      "title": "Check-in：Hotel Elcient 大阪梅田",
      "cityId": null,
      "address": "大阪市北区曽根崎1-2-7",
      "addressLocal": "大阪市北区曽根崎1-2-7",
      "coords": [
        34.6983,
        135.5027
      ],
      "tags": [
        "大浴場"
      ],
      "moodColor": "#3A3A3A",
      "note": null,
      "phone": "+81663602200",
      "openHours": "Check-in 15:00／Check-out 11:00；大浴場 16:00–25:00、06:00–09:00",
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "evt_d1_08",
      "day": 1,
      "time": "19:30",
      "timeHint": null,
      "type": "shop",
      "title": "晚餐：阪急オアシス キッチン＆マーケット（LUCUA B2）",
      "cityId": null,
      "address": "大阪市北区梅田3-1-3 LUCUA大阪 B2",
      "addressLocal": null,
      "coords": [
        34.7033,
        135.4962
      ],
      "tags": [
        "超市巡禮",
        "晚酌"
      ],
      "moodColor": "#8C8378",
      "note": "買熟食＋清酒回房晚酌；備案：しんぱち食堂 西梅田店",
      "phone": null,
      "openHours": "11:00–23:00",
      "price": null,
      "cost": {
        "amount": 2500,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "evt_d1_09",
      "day": 1,
      "time": "20:30",
      "timeHint": null,
      "type": "rest",
      "title": "酒店大浴場＋Lounge Bar Time",
      "cityId": null,
      "address": "大阪市北区曽根崎1-2-7",
      "addressLocal": null,
      "coords": [
        34.6983,
        135.5027
      ],
      "tags": [],
      "moodColor": "#9AA8A3",
      "note": null,
      "phone": null,
      "openHours": "Bar Time 19:30–21:00（最後入場 20:40）",
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "evt_d2_01",
      "day": 2,
      "time": "09:00",
      "timeHint": null,
      "type": "food",
      "title": "早餐：酒店 ENT 早餐自助",
      "cityId": null,
      "address": "大阪市北区曽根崎1-2-7 1F",
      "addressLocal": null,
      "coords": [
        34.6983,
        135.5027
      ],
      "tags": [],
      "moodColor": "#A0785A",
      "note": "09:00 入場，有約 45 分用餐",
      "phone": null,
      "openHours": "06:30–10:00（最後入場 09:45）",
      "price": null,
      "cost": {
        "amount": 2200,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "trp_d2_02",
      "day": 2,
      "time": "09:59",
      "timeHint": null,
      "type": "transport",
      "title": "谷町線 東梅田 → 谷町九丁目",
      "cityId": null,
      "address": null,
      "addressLocal": null,
      "coords": [
        34.7006,
        135.4998
      ],
      "tags": [],
      "moodColor": "#2A7F7A",
      "note": "09:50 出門，步行 7 分（官方）；09:59→10:10（Yahoo）",
      "phone": null,
      "openHours": null,
      "price": null,
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
        "operator": "Osaka Metro",
        "line": "谷町線",
        "durationMin": 11,
        "liveApi": null
      }
    },
    {
      "id": "evt_d2_03",
      "day": 2,
      "time": "10:15",
      "timeHint": null,
      "type": "sight",
      "title": "生國魂蚤の市",
      "cityId": null,
      "address": "大阪市天王寺区生玉町13-9",
      "addressLocal": null,
      "coords": [
        34.6651,
        135.5133
      ],
      "tags": [
        "市集",
        "古物"
      ],
      "moodColor": "#6B7F7A",
      "note": "10:15–11:20；約 10 檔，細但專業；撲空 → 直接去心齋橋",
      "phone": null,
      "openHours": "07:00–14:00（小雨照開）",
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "trp_d2_04",
      "day": 2,
      "time": "11:35",
      "timeHint": null,
      "type": "transport",
      "title": "千日前線→御堂筋線 谷町九丁目 → 心斎橋",
      "cityId": null,
      "address": null,
      "addressLocal": null,
      "coords": [
        34.6671,
        135.5158
      ],
      "tags": [],
      "moodColor": "#2A7F7A",
      "note": "11:35→11:45（Yahoo，換乘 1 次）",
      "phone": null,
      "openHours": null,
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "subway",
        "from": "谷町九丁目",
        "to": "心斎橋",
        "fromEventId": null,
        "toEventId": null,
        "operator": "Osaka Metro",
        "line": "千日前線→御堂筋線",
        "durationMin": 10,
        "liveApi": null
      }
    },
    {
      "id": "evt_d2_05",
      "day": 2,
      "time": "12:00",
      "timeHint": null,
      "type": "food",
      "title": "午餐：うどんちり本家 にし家 本店",
      "cityId": null,
      "address": "大阪市中央区東心斎橋1-18-18",
      "addressLocal": null,
      "coords": [
        34.6737,
        135.5024
      ],
      "tags": [
        "一人鍋",
        "可預約"
      ],
      "moodColor": "#A0785A",
      "note": "官網網上預約 12:00；備案：北極星 心斎橋本店（不設一般預約）",
      "phone": null,
      "openHours": "月–土 11:00–22:30",
      "price": "一人鍋 ¥6,000 起",
      "cost": {
        "amount": 6000,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "evt_d2_06",
      "day": 2,
      "time": "13:30",
      "timeHint": null,
      "type": "shop",
      "title": "VINTAGE QOO TOKYO 心齋橋店",
      "cityId": null,
      "address": "大阪市中央区心斎橋筋1-1-16B MIキューブ心斎橋 1–2F",
      "addressLocal": null,
      "coords": [
        34.6749,
        135.502
      ],
      "tags": [
        "vintage",
        "皮具"
      ],
      "moodColor": "#8C8378",
      "note": null,
      "phone": null,
      "openHours": "11:30–20:00",
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "evt_d2_07",
      "day": 2,
      "time": "14:45",
      "timeHint": null,
      "type": "shop",
      "title": "ORANGE BOUTIQUE（Hermès vintage）",
      "cityId": null,
      "address": "大阪市中央区心斎橋筋2-7-5",
      "addressLocal": null,
      "coords": [
        34.6707,
        135.5013
      ],
      "tags": [
        "vintage",
        "皮具"
      ],
      "moodColor": "#8C8378",
      "note": "問清品相分級與真品保證",
      "phone": null,
      "openHours": "11:30–20:00",
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "evt_d2_08",
      "day": 2,
      "time": "15:45",
      "timeHint": null,
      "type": "rest",
      "title": "步行往博労町＋休息",
      "cityId": null,
      "address": "心斎橋筋 → 博労町",
      "addressLocal": null,
      "coords": [
        34.6782,
        135.5044
      ],
      "tags": [],
      "moodColor": "#9AA8A3",
      "note": "步行約 15 分（估算）；咖啡店待確認；座標為目的地博労町",
      "phone": null,
      "openHours": null,
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "evt_d2_09",
      "day": 2,
      "time": "16:30",
      "timeHint": null,
      "type": "food",
      "title": "晚餐：燗の美穂（燙酒）",
      "cityId": null,
      "address": "大阪市中央区博労町2-6-14",
      "addressLocal": null,
      "coords": [
        34.6782,
        135.5044
      ],
      "tags": [
        "清酒",
        "吧枱"
      ],
      "moodColor": "#A0785A",
      "note": "16:30 訂吧枱位（電話）；2027/2 休息日待確認；備案 ぬる燗佐藤",
      "phone": "+81662818007",
      "openHours": "16:00–22:00（週日 15:00 起）；週三、第 3 個週四休（2026 blog）",
      "price": null,
      "cost": {
        "amount": 5000,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "trp_d2_10",
      "day": 2,
      "time": "18:48",
      "timeHint": null,
      "type": "transport",
      "title": "堺筋線→谷町線 堺筋本町 → 東梅田",
      "cityId": null,
      "address": null,
      "addressLocal": null,
      "coords": [
        34.6826,
        135.5065
      ],
      "tags": [],
      "moodColor": "#2A7F7A",
      "note": "18:48→18:59（Yahoo）；下車步行 7 分回酒店",
      "phone": null,
      "openHours": null,
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "subway",
        "from": "堺筋本町",
        "to": "東梅田",
        "fromEventId": null,
        "toEventId": null,
        "operator": "Osaka Metro",
        "line": "堺筋線→谷町線",
        "durationMin": 11,
        "liveApi": null
      }
    },
    {
      "id": "evt_d2_11",
      "day": 2,
      "time": "19:15",
      "timeHint": null,
      "type": "rest",
      "title": "酒店大浴場",
      "cityId": null,
      "address": "大阪市北区曽根崎1-2-7",
      "addressLocal": null,
      "coords": [
        34.6983,
        135.5027
      ],
      "tags": [],
      "moodColor": "#9AA8A3",
      "note": null,
      "phone": null,
      "openHours": null,
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "evt_d3_01",
      "day": 3,
      "time": "09:00",
      "timeHint": null,
      "type": "food",
      "title": "早餐：しんぱち食堂 西梅田店",
      "cityId": null,
      "address": "大阪市北区曾根崎新地2-1-21",
      "addressLocal": null,
      "coords": [
        34.6977,
        135.4953
      ],
      "tags": [
        "和定食"
      ],
      "moodColor": "#A0785A",
      "note": "09:00–09:35，09:40 前出發",
      "phone": null,
      "openHours": "官網 07:00–23:00 無休（食べログ 08:00 起）",
      "price": null,
      "cost": {
        "amount": 900,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "trp_d3_02",
      "day": 3,
      "time": "09:53",
      "timeHint": null,
      "type": "transport",
      "title": "谷町線→中央線（けいはんな線）東梅田 → 新石切",
      "cityId": null,
      "address": null,
      "addressLocal": null,
      "coords": [
        34.7006,
        135.4998
      ],
      "tags": [],
      "moodColor": "#2A7F7A",
      "note": "09:53→10:22（Yahoo，換乘 1 次）",
      "phone": null,
      "openHours": null,
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "subway",
        "from": "東梅田",
        "to": "新石切",
        "fromEventId": null,
        "toEventId": null,
        "operator": "Osaka Metro／近鉄",
        "line": "谷町線→中央線（直通けいはんな線）",
        "durationMin": 29,
        "liveApi": null
      }
    },
    {
      "id": "evt_d3_03",
      "day": 3,
      "time": "10:30",
      "timeHint": null,
      "type": "sight",
      "title": "石切劔箭神社 お百度参り",
      "cityId": null,
      "address": "東大阪市（新石切站步行約 7 分）",
      "addressLocal": null,
      "coords": [
        34.682,
        135.6462
      ],
      "tags": [
        "靈性",
        "個人參拜"
      ],
      "moodColor": "#6B7F7A",
      "note": "10:30–11:35，自己來回 100 次；要趕 11:46 車",
      "phone": null,
      "openHours": "境內 24 小時；百度紐授與 08:00–16:30",
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "trp_d3_04",
      "day": 3,
      "time": "11:46",
      "timeHint": null,
      "type": "transport",
      "title": "近鉄 新石切 → 近鉄奈良",
      "cityId": null,
      "address": null,
      "addressLocal": null,
      "coords": [
        34.6801,
        135.6409
      ],
      "tags": [],
      "moodColor": "#2A7F7A",
      "note": "11:46→12:18（Yahoo，生駒換乘）",
      "phone": null,
      "openHours": null,
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "train",
        "from": "新石切",
        "to": "近鉄奈良",
        "fromEventId": null,
        "toEventId": null,
        "operator": "近鉄",
        "line": "けいはんな線→奈良線",
        "durationMin": 32,
        "liveApi": null
      }
    },
    {
      "id": "evt_d3_05",
      "day": 3,
      "time": "12:30",
      "timeHint": null,
      "type": "food",
      "title": "午餐：柿の葉ずし総本家 平宗 奈良店",
      "cityId": null,
      "address": "奈良市今御門町30-1",
      "addressLocal": null,
      "coords": [
        34.6801,
        135.8303
      ],
      "tags": [
        "柿の葉寿司"
      ],
      "moodColor": "#A0785A",
      "note": "12:30–13:20，時間較緊：點柿の葉壽司 set；13:25 前出發步行約 15 分去錦光園。遲了就打電話給錦光園改時段（受理至 17:00）。午市只接受 10 人以上預約，一人直接入；備案：春日荷茶屋",
      "phone": "+81742220866",
      "openHours": "飲食 11:30–20:00（L.O.19:30）；週一休",
      "price": null,
      "cost": {
        "amount": 2000,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "evt_d3_06",
      "day": 3,
      "time": "13:45",
      "timeHint": null,
      "type": "sight",
      "title": "錦光園 にぎり墨體驗",
      "cityId": null,
      "address": "奈良市三条町547",
      "addressLocal": null,
      "coords": [
        34.6814,
        135.8228
      ],
      "tags": [
        "手作",
        "工藝"
      ],
      "moodColor": "#6B7F7A",
      "note": "預約時段 13:45 維持不變；前一天 21:00 前預約；約 40–60 分",
      "phone": "+81742223319",
      "openHours": "體驗 09:00–、受理至 17:00；年中無休",
      "price": "¥3,300（含桐箱）",
      "cost": {
        "amount": 3300,
        "currency": "JPY",
        "category": "ticket"
      },
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "evt_d3_07",
      "day": 3,
      "time": "15:15",
      "timeHint": null,
      "type": "shop",
      "title": "なら泉勇斎（奈良酒試飲）",
      "cityId": null,
      "address": "奈良市西寺林町22",
      "addressLocal": null,
      "coords": [
        34.6797,
        135.8294
      ],
      "tags": [
        "清酒",
        "試飲"
      ],
      "moodColor": "#8C8378",
      "note": "約 120 款奈良地酒，約 50ml 有料試飲",
      "phone": null,
      "openHours": "11:00–20:00；週四休",
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "evt_d3_08",
      "day": 3,
      "time": "17:00",
      "timeHint": null,
      "type": "food",
      "title": "晚餐：旨い肴と地酒 野菜酒場 とんぼ",
      "cityId": null,
      "address": "奈良市小西町5 アルテ館 1F",
      "addressLocal": null,
      "coords": [
        34.6829,
        135.828
      ],
      "tags": [
        "奈良地酒",
        "吧枱"
      ],
      "moodColor": "#A0785A",
      "note": "吧枱 8 位，可網上預約；近鉄奈良站 2 分",
      "phone": null,
      "openHours": "週一–五 17:00–23:00",
      "price": null,
      "cost": {
        "amount": 4500,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "evt_d3_09",
      "day": 3,
      "time": "18:20",
      "timeHint": null,
      "type": "sight",
      "title": "しあわせ回廊 なら瑠璃絵",
      "cityId": null,
      "address": "奈良公園一帯（春日大社・興福寺・東大寺）",
      "addressLocal": null,
      "coords": [
        34.683,
        135.8319
      ],
      "tags": [
        "期間限定",
        "夜間參拜"
      ],
      "moodColor": "#6B7F7A",
      "note": "2027 節目未公布；近鉄奈良站步行約 8 分；座標取興福寺",
      "phone": null,
      "openHours": "2027/2/8–2/14 約 18:00–21:00",
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "trp_d3_10",
      "day": 3,
      "time": "20:06",
      "timeHint": null,
      "type": "transport",
      "title": "近鉄奈良 → 大阪難波 → 御堂筋線 → 梅田",
      "cityId": null,
      "address": null,
      "addressLocal": null,
      "coords": [
        34.684,
        135.8263
      ],
      "tags": [],
      "moodColor": "#2A7F7A",
      "note": "時間不變；下車經地下街步行 12 分，約 21:20 到酒店；備案 JR 奈良→大阪約 60 分",
      "phone": null,
      "openHours": null,
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "train",
        "from": "近鉄奈良",
        "to": "梅田",
        "fromEventId": null,
        "toEventId": null,
        "operator": "近鉄／Osaka Metro",
        "line": "近鉄奈良線快速急行→御堂筋線",
        "durationMin": 59,
        "liveApi": null
      }
    },
    {
      "id": "evt_d3_11",
      "day": 3,
      "time": "21:30",
      "timeHint": null,
      "type": "rest",
      "title": "酒店大浴場",
      "cityId": null,
      "address": "大阪市北区曽根崎1-2-7",
      "addressLocal": null,
      "coords": [
        34.6983,
        135.5027
      ],
      "tags": [],
      "moodColor": "#9AA8A3",
      "note": null,
      "phone": null,
      "openHours": null,
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "evt_d4_01",
      "day": 4,
      "time": "09:00",
      "timeHint": null,
      "type": "food",
      "title": "早餐：しんぱち食堂 阪急梅田店",
      "cityId": null,
      "address": "大阪市北区芝田1-5-14 シマサダビル1階",
      "addressLocal": null,
      "coords": [
        34.7063,
        135.4976
      ],
      "tags": [
        "和定食"
      ],
      "moodColor": "#A0785A",
      "note": "09:00–09:40；三番街巴士站就在旁邊",
      "phone": null,
      "openHours": "07:00–24:00 無休",
      "price": null,
      "cost": {
        "amount": 900,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "trp_d4_02",
      "day": 4,
      "time": "10:00",
      "timeHint": null,
      "type": "transport",
      "title": "阪急高速巴士 阪急三番街 → 有馬溫泉",
      "cityId": null,
      "address": null,
      "addressLocal": null,
      "coords": [
        34.7047,
        135.4991
      ],
      "tags": [],
      "moodColor": "#2A7F7A",
      "note": "約 10:00 班（實際班次待確認；1/10 09:00 起可預約），約 11:00 到；鐵路備案約 72 分",
      "phone": null,
      "openHours": null,
      "price": null,
      "cost": {
        "amount": 1400,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "bus",
        "from": "阪急三番街",
        "to": "有馬温泉",
        "fromEventId": null,
        "toEventId": null,
        "operator": "阪急観光バス",
        "line": "大阪梅田－有馬温泉線",
        "durationMin": 60,
        "liveApi": null
      }
    },
    {
      "id": "evt_d4_03",
      "day": 4,
      "time": "11:15",
      "timeHint": null,
      "type": "food",
      "title": "午餐：織 Ori by Wellbe（藥膳火鍋膳）",
      "cityId": null,
      "address": "神戸市北区有馬町332",
      "addressLocal": null,
      "coords": [
        34.7958,
        135.25
      ],
      "tags": [
        "可預約"
      ],
      "moodColor": "#A0785A",
      "note": "改為先吃午餐：11:15 訂位（ホットペッパー），避開 13:00 L.O.；午市預算約 ¥2,000",
      "phone": null,
      "openHours": "週三–日 11:00–14:00（料理 L.O.13:00）；週一、二休",
      "price": null,
      "cost": {
        "amount": 2000,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "evt_d4_04",
      "day": 4,
      "time": "12:45",
      "timeHint": null,
      "type": "rest",
      "title": "有馬 金の湯",
      "cityId": null,
      "address": "神戸市北区有馬町",
      "addressLocal": null,
      "coords": [
        34.7968,
        135.2479
      ],
      "tags": [
        "溫泉"
      ],
      "moodColor": "#9AA8A3",
      "note": "12:45–13:45；2027 冬季翻新閉館待確認；備案 太閤の湯",
      "phone": null,
      "openHours": "08:00–22:00（最後 21:30）；第 2、4 個週二休",
      "price": "金銀兩館套票 ¥1,200",
      "cost": {
        "amount": 1200,
        "currency": "JPY",
        "category": "ticket"
      },
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "evt_d4_05",
      "day": 4,
      "time": "14:00",
      "timeHint": null,
      "type": "rest",
      "title": "有馬 銀の湯",
      "cityId": null,
      "address": "神戸市北区有馬町",
      "addressLocal": null,
      "coords": [
        34.7955,
        135.249
      ],
      "tags": [
        "溫泉"
      ],
      "moodColor": "#9AA8A3",
      "note": "14:00–15:10",
      "phone": null,
      "openHours": "09:00–21:00（最後 20:30）；第 1、3 個週二休",
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "trp_d4_06",
      "day": 4,
      "time": "15:30",
      "timeHint": null,
      "type": "transport",
      "title": "阪急高速巴士 有馬溫泉 → 大阪梅田",
      "cityId": null,
      "address": null,
      "addressLocal": null,
      "coords": null,
      "tags": [],
      "moodColor": "#2A7F7A",
      "note": "約 15:30 班（待確認），約 16:30 到三番街",
      "phone": null,
      "openHours": null,
      "price": null,
      "cost": {
        "amount": 1400,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "bus",
        "from": "有馬温泉",
        "to": "阪急三番街",
        "fromEventId": null,
        "toEventId": null,
        "operator": "阪急観光バス",
        "line": "大阪梅田－有馬温泉線",
        "durationMin": 60,
        "liveApi": null
      }
    },
    {
      "id": "evt_d4_07",
      "day": 4,
      "time": "16:40",
      "timeHint": null,
      "type": "shop",
      "title": "阪急うめだ本店 B2 和洋酒賣場",
      "cityId": null,
      "address": "大阪市北区角田町8-7",
      "addressLocal": null,
      "coords": [
        34.7027,
        135.4984
      ],
      "tags": [
        "清酒",
        "試飲",
        "超市巡禮"
      ],
      "moodColor": "#8C8378",
      "note": null,
      "phone": null,
      "openHours": "10:00–20:00",
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "evt_d4_08",
      "day": 4,
      "time": "17:45",
      "timeHint": null,
      "type": "hotel",
      "title": "回酒店休息",
      "cityId": null,
      "address": "大阪市北区曽根崎1-2-7",
      "addressLocal": null,
      "coords": [
        34.6983,
        135.5027
      ],
      "tags": [],
      "moodColor": "#3A3A3A",
      "note": null,
      "phone": null,
      "openHours": null,
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "evt_d4_09",
      "day": 4,
      "time": "18:30",
      "timeHint": null,
      "type": "food",
      "title": "晚餐：懐石 北瑞苑（晚市）",
      "cityId": null,
      "address": "大阪市北区曽根崎新地2-3-21 axビル3F",
      "addressLocal": null,
      "coords": [
        34.698,
        135.4944
      ],
      "tags": [
        "懷石",
        "可預約"
      ],
      "moodColor": "#A0785A",
      "note": "時間不變；有馬中の坊瑞苑直營，一人可；REGLI 網上預約；晚市價錢待確認；服務費 10%",
      "phone": null,
      "openHours": "月–土夜 17:30–22:00（料理 L.O.20:00）；日祝夜休",
      "price": null,
      "cost": {
        "amount": 12000,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "evt_d5_01",
      "day": 5,
      "time": "09:00",
      "timeHint": null,
      "type": "food",
      "title": "早餐：ロンドンティールーム 堂島本店",
      "cityId": null,
      "address": "大阪市北区曽根崎新地2-1-23 JPRビルB1F",
      "addressLocal": null,
      "coords": [
        34.6975,
        135.4953
      ],
      "tags": [
        "英式紅茶"
      ],
      "moodColor": "#A0785A",
      "note": "09:00–10:00；假日已確認營業",
      "phone": null,
      "openHours": "土日祝 08:00–20:00；早餐至 11:00",
      "price": null,
      "cost": {
        "amount": 1500,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "trp_d5_02",
      "day": 5,
      "time": "10:15",
      "timeHint": null,
      "type": "transport",
      "title": "四つ橋線 西梅田 → 肥後橋",
      "cityId": null,
      "address": null,
      "addressLocal": null,
      "coords": [
        34.6995,
        135.4957
      ],
      "tags": [],
      "moodColor": "#2A7F7A",
      "note": "10:15→10:16（Yahoo）；下車步行約 10 分（估算）",
      "phone": null,
      "openHours": null,
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "subway",
        "from": "西梅田",
        "to": "肥後橋",
        "fromEventId": null,
        "toEventId": null,
        "operator": "Osaka Metro",
        "line": "四つ橋線",
        "durationMin": 1,
        "liveApi": null
      }
    },
    {
      "id": "evt_d5_03",
      "day": 5,
      "time": "10:30",
      "timeHint": null,
      "type": "sight",
      "title": "大阪中之島美術館「つくる女性の100年」",
      "cityId": null,
      "address": "大阪市北区中之島4-3-1",
      "addressLocal": null,
      "coords": [
        34.6924,
        135.4914
      ],
      "tags": [
        "展覽",
        "期間限定"
      ],
      "moodColor": "#6B7F7A",
      "note": "10:30–11:55",
      "phone": null,
      "openHours": "10:00–17:00（入場至 16:30）；週一休，2/11 開",
      "price": "一般 ¥1,900（前售 ¥1,700）",
      "cost": {
        "amount": 1900,
        "currency": "JPY",
        "category": "ticket"
      },
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "trp_d5_04",
      "day": 5,
      "time": "12:09",
      "timeHint": null,
      "type": "transport",
      "title": "四つ橋線 肥後橋 → 西梅田",
      "cityId": null,
      "address": null,
      "addressLocal": null,
      "coords": [
        34.6912,
        135.4965
      ],
      "tags": [],
      "moodColor": "#2A7F7A",
      "note": "12:09→12:12（Yahoo）",
      "phone": null,
      "openHours": null,
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "subway",
        "from": "肥後橋",
        "to": "西梅田",
        "fromEventId": null,
        "toEventId": null,
        "operator": "Osaka Metro",
        "line": "四つ橋線",
        "durationMin": 3,
        "liveApi": null
      }
    },
    {
      "id": "evt_d5_05",
      "day": 5,
      "time": "12:20",
      "timeHint": null,
      "type": "food",
      "title": "午餐：銀座天一 大阪店（午市）",
      "cityId": null,
      "address": "大阪市北区梅田2-2-22 ハービスPLAZA ENT 5F",
      "addressLocal": null,
      "coords": [
        34.6998,
        135.4946
      ],
      "tags": [
        "天婦羅",
        "吧枱",
        "午市"
      ],
      "moodColor": "#A0785A",
      "note": "12:20 訂位，13:40 離開",
      "phone": "+81662257361",
      "openHours": "11:00–15:00（L.O.14:30）／17:00–22:00",
      "price": "天婦羅膳 ¥3,630；吧枱「梅」¥5,940",
      "cost": {
        "amount": 5940,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "trp_d5_06",
      "day": 5,
      "time": "13:51",
      "timeHint": null,
      "type": "transport",
      "title": "JR 東西線 北新地 → 大阪天満宮",
      "cityId": null,
      "address": null,
      "addressLocal": null,
      "coords": [
        34.6984,
        135.4973
      ],
      "tags": [],
      "moodColor": "#2A7F7A",
      "note": "13:51→13:53（Yahoo）；下車步行約 5 分",
      "phone": null,
      "openHours": null,
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "train",
        "from": "北新地",
        "to": "大阪天満宮",
        "fromEventId": null,
        "toEventId": null,
        "operator": "JR西日本",
        "line": "JR東西線",
        "durationMin": 2,
        "liveApi": null
      }
    },
    {
      "id": "evt_d5_07",
      "day": 5,
      "time": "14:00",
      "timeHint": null,
      "type": "shop",
      "title": "アンティークカメオ＆ジュエリー まーぶる",
      "cityId": null,
      "address": "大阪市北区天神橋1-19-16 マエカワビル2F",
      "addressLocal": null,
      "coords": [
        34.695,
        135.5118
      ],
      "tags": [
        "古董首飾"
      ],
      "moodColor": "#8C8378",
      "note": "14:00–15:20；假日是否營業待確認，先打電話",
      "phone": "+81663533147",
      "openHours": "週三–六 13:30–17:00",
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "trp_d5_08",
      "day": 5,
      "time": "15:36",
      "timeHint": null,
      "type": "transport",
      "title": "谷町線 南森町 → 中崎町",
      "cityId": null,
      "address": null,
      "addressLocal": null,
      "coords": [
        34.6975,
        135.5112
      ],
      "tags": [],
      "moodColor": "#2A7F7A",
      "note": "15:36→15:40（Yahoo）",
      "phone": null,
      "openHours": null,
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "subway",
        "from": "南森町",
        "to": "中崎町",
        "fromEventId": null,
        "toEventId": null,
        "operator": "Osaka Metro",
        "line": "谷町線",
        "durationMin": 4,
        "liveApi": null
      }
    },
    {
      "id": "evt_d5_09",
      "day": 5,
      "time": "16:00",
      "timeHint": null,
      "type": "rest",
      "title": "アロマサロン ものさし（香薰按摩）",
      "cityId": null,
      "address": "大阪市北区 中崎町（詳細地址待確認）",
      "addressLocal": null,
      "coords": null,
      "tags": [
        "精油",
        "SPA"
      ],
      "moodColor": "#9AA8A3",
      "note": "16:00–17:30（原 15:30，順延 30 分）；一人店需預約；用かおりと日本產精油",
      "phone": "+818014985189",
      "openHours": "日祝 09:00–21:00",
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "trp_d5_10",
      "day": 5,
      "time": "17:45",
      "timeHint": null,
      "type": "transport",
      "title": "谷町線 中崎町 → 東梅田",
      "cityId": null,
      "address": null,
      "addressLocal": null,
      "coords": [
        34.7072,
        135.5056
      ],
      "tags": [],
      "moodColor": "#2A7F7A",
      "note": "17:45→17:47（Yahoo）；回酒店大浴場",
      "phone": null,
      "openHours": null,
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "subway",
        "from": "中崎町",
        "to": "東梅田",
        "fromEventId": null,
        "toEventId": null,
        "operator": "Osaka Metro",
        "line": "谷町線",
        "durationMin": 2,
        "liveApi": null
      }
    },
    {
      "id": "evt_d5_11",
      "day": 5,
      "time": "19:00",
      "timeHint": null,
      "type": "food",
      "title": "晚餐：ぬる燗佐藤 大坂",
      "cityId": null,
      "address": "大阪市北区大深町4-20 グランフロント大阪南館7F",
      "addressLocal": null,
      "coords": [
        34.7042,
        135.4948
      ],
      "tags": [
        "清酒",
        "可預約"
      ],
      "moodColor": "#A0785A",
      "note": "時間不變；Toreta 網上預約；吧枱 9 位",
      "phone": "+81661318948",
      "openHours": "11:00–23:00",
      "price": null,
      "cost": {
        "amount": 5000,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "evt_d6_01",
      "day": 6,
      "time": "09:00",
      "timeHint": null,
      "type": "food",
      "title": "早餐：マヅラ喫茶店",
      "cityId": null,
      "address": "大阪市北区梅田1-3-1 大阪駅前第1ビル B1F",
      "addressLocal": null,
      "coords": [
        34.6989,
        135.4965
      ],
      "tags": [
        "老喫茶"
      ],
      "moodColor": "#A0785A",
      "note": "09:00 開門即入，09:00–09:50；只收現金；分煙有煙味 → 介意改酒店早餐（最後入場 09:45）",
      "phone": "+81663453400",
      "openHours": "月–土 09:00 起；日祝休",
      "price": null,
      "cost": {
        "amount": 1000,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "evt_d6_02",
      "day": 6,
      "time": "10:00",
      "timeHint": null,
      "type": "shop",
      "title": "阪神梅田本店 B1 リカーワールド＋食品館",
      "cityId": null,
      "address": "大阪市北区梅田1-13-13",
      "addressLocal": null,
      "coords": [
        34.7012,
        135.4986
      ],
      "tags": [
        "超市巡禮",
        "清酒",
        "角打ち"
      ],
      "moodColor": "#8C8378",
      "note": null,
      "phone": null,
      "openHours": "10:00–20:00",
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "trp_d6_03",
      "day": 6,
      "time": "11:10",
      "timeHint": null,
      "type": "transport",
      "title": "御堂筋線 梅田 → 淀屋橋",
      "cityId": null,
      "address": null,
      "addressLocal": null,
      "coords": [
        34.7034,
        135.4976
      ],
      "tags": [],
      "moodColor": "#2A7F7A",
      "note": "下車步行約 8 分（估算）",
      "phone": null,
      "openHours": null,
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "subway",
        "from": "梅田",
        "to": "淀屋橋",
        "fromEventId": null,
        "toEventId": null,
        "operator": "Osaka Metro",
        "line": "御堂筋線",
        "durationMin": 2,
        "liveApi": null
      }
    },
    {
      "id": "evt_d6_04",
      "day": 6,
      "time": "11:30",
      "timeHint": null,
      "type": "food",
      "title": "午餐：本家柴藤（上方鰻魚）",
      "cityId": null,
      "address": "大阪市中央区高麗橋2-5-2",
      "addressLocal": null,
      "coords": [
        34.69,
        135.5046
      ],
      "tags": [
        "鰻魚",
        "老字號"
      ],
      "moodColor": "#A0785A",
      "note": "勿搽香水／香味柔順劑；午市價錢待確認",
      "phone": "+81662314810",
      "openHours": "10:30–17:00（L.O.）",
      "price": null,
      "cost": {
        "amount": 5000,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "trp_d6_05",
      "day": 6,
      "time": "12:50",
      "timeHint": null,
      "type": "transport",
      "title": "北浜 → 北新地",
      "cityId": null,
      "address": null,
      "addressLocal": null,
      "coords": [
        34.6915,
        135.5076
      ],
      "tags": [],
      "moodColor": "#2A7F7A",
      "note": null,
      "phone": null,
      "openHours": null,
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "subway",
        "from": "北浜",
        "to": "北新地",
        "fromEventId": null,
        "toEventId": null,
        "operator": "Osaka Metro／JR西日本",
        "line": "堺筋線→JR東西線",
        "durationMin": 16,
        "liveApi": null
      }
    },
    {
      "id": "evt_d6_06",
      "day": 6,
      "time": "13:15",
      "timeHint": null,
      "type": "rest",
      "title": "ワヤンプリ 大阪梅田店 頭療",
      "cityId": null,
      "address": "大阪市北区梅田2-4-7 桜橋ニコービル7F",
      "addressLocal": null,
      "coords": [
        34.6984,
        135.4943
      ],
      "tags": [
        "頭療"
      ],
      "moodColor": "#9AA8A3",
      "note": "全預約制、私人房",
      "phone": "+81663425999",
      "openHours": "平日 11:30–20:30",
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "evt_d6_07",
      "day": 6,
      "time": "15:00",
      "timeHint": null,
      "type": "shop",
      "title": "LIBRA NATUTHERAPY 香水作り體驗",
      "cityId": null,
      "address": "大阪市北区梅田2-2-2 ヒルトンプラザWEST 3F",
      "addressLocal": null,
      "coords": [
        34.6998,
        135.4952
      ],
      "tags": [
        "手作",
        "精油"
      ],
      "moodColor": "#8C8378",
      "note": "約 100 種純精油，約 60 分；問 GC-MS 成分表",
      "phone": "+819099948706",
      "openHours": "11:00–20:00；體驗 12:00／15:00",
      "price": "10ml ¥4,950",
      "cost": {
        "amount": 4950,
        "currency": "JPY",
        "category": "ticket"
      },
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "evt_d6_08",
      "day": 6,
      "time": "16:15",
      "timeHint": null,
      "type": "rest",
      "title": "酒店大浴場、休息",
      "cityId": null,
      "address": "大阪市北区曽根崎1-2-7",
      "addressLocal": null,
      "coords": [
        34.6983,
        135.5027
      ],
      "tags": [],
      "moodColor": "#9AA8A3",
      "note": null,
      "phone": null,
      "openHours": null,
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "evt_d6_09",
      "day": 6,
      "time": "18:30",
      "timeHint": null,
      "type": "food",
      "title": "晚餐：日本酒と料理 くろ川",
      "cityId": null,
      "address": "大阪市北区曾根崎新地1-10-22 ミヤプラザ8F",
      "addressLocal": null,
      "coords": [
        34.6981,
        135.4976
      ],
      "tags": [
        "清酒",
        "吧枱",
        "可預約"
      ],
      "moodColor": "#A0785A",
      "note": "完全預約制；店方要求勿用濃香水",
      "phone": null,
      "openHours": "18:00–00:00；不定休（看 IG）",
      "price": "預算 ¥10,000–14,999（服務費 5%）",
      "cost": {
        "amount": 13000,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "evt_d7_01",
      "day": 7,
      "time": "09:00",
      "timeHint": null,
      "type": "food",
      "title": "早餐：酒店 ENT 早餐自助",
      "cityId": null,
      "address": "大阪市北区曽根崎1-2-7 1F",
      "addressLocal": null,
      "coords": [
        34.6983,
        135.5027
      ],
      "tags": [],
      "moodColor": "#A0785A",
      "note": "09:00–09:40",
      "phone": null,
      "openHours": "06:30–10:00（最後入場 09:45）",
      "price": null,
      "cost": {
        "amount": 2200,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "trp_d7_02",
      "day": 7,
      "time": "10:00",
      "timeHint": null,
      "type": "transport",
      "title": "阪神本線 大阪梅田 → 魚崎",
      "cityId": null,
      "address": null,
      "addressLocal": null,
      "coords": [
        34.7014,
        135.4971
      ],
      "tags": [],
      "moodColor": "#2A7F7A",
      "note": "10:00→10:22（Yahoo，特急）；09:45 出門步行約 10 分（估算）。B 案：阪急 10:00 大阪梅田→十三（3 分），十三市 10:10–10:50，11:01 十三→魚崎（11:42 到，Yahoo）",
      "phone": null,
      "openHours": null,
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "train",
        "from": "大阪梅田（阪神）",
        "to": "魚崎",
        "fromEventId": null,
        "toEventId": null,
        "operator": "阪神電気鉄道",
        "line": "阪神本線特急",
        "durationMin": 22,
        "liveApi": null
      }
    },
    {
      "id": "evt_d7_03",
      "day": 7,
      "time": "10:35",
      "timeHint": null,
      "type": "sight",
      "title": "菊正宗 蔵開き（或 菊正宗酒造記念館）",
      "cityId": null,
      "address": "神戸市東灘区魚崎西町1",
      "addressLocal": null,
      "coords": [
        34.7086,
        135.2679
      ],
      "tags": [
        "清酒",
        "蔵開き"
      ],
      "moodColor": "#6B7F7A",
      "note": "A 案 10:35–11:50 藏開き；B 案 11:55–12:30 記念館（常設免費試飲）；白鹿 西宮蔵開為另一選項",
      "phone": null,
      "openHours": "蔵開き 10:00–15:00（2027 日期待公布）；記念館 09:30–16:30 週二休",
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "evt_d7_04",
      "day": 7,
      "time": "12:05",
      "timeHint": null,
      "type": "sight",
      "title": "白鶴酒造資料館",
      "cityId": null,
      "address": "神戸市東灘区住吉南町4-5-5",
      "addressLocal": null,
      "coords": [
        34.7102,
        135.2617
      ],
      "tags": [
        "清酒"
      ],
      "moodColor": "#6B7F7A",
      "note": "12:05–12:50（B 案 12:45–13:10）；免費；阪神住吉站 5 分",
      "phone": null,
      "openHours": "09:30–16:30（最後入館 16:00）",
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "evt_d7_05",
      "day": 7,
      "time": "13:15",
      "timeHint": null,
      "type": "food",
      "title": "午餐：さかばやし（神戸酒心館）",
      "cityId": null,
      "address": "神戸市東灘区御影塚町1-8-17",
      "addressLocal": null,
      "coords": [
        34.71,
        135.2486
      ],
      "tags": [
        "酒藏料亭",
        "可預約"
      ],
      "moodColor": "#A0785A",
      "note": "電話預約 13:15（B 案 13:30 亦在 L.O. 前）；午市會席價錢每月換（待確認）",
      "phone": "+81788412612",
      "openHours": "午市 11:30–15:00（L.O.14:30）；週三休",
      "price": null,
      "cost": {
        "amount": 4000,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "evt_d7_06",
      "day": 7,
      "time": "14:45",
      "timeHint": null,
      "type": "shop",
      "title": "神戸酒心館 東明蔵（福寿）",
      "cityId": null,
      "address": "神戸市東灘区御影塚町1-8-17",
      "addressLocal": null,
      "coords": [
        34.71,
        135.2486
      ],
      "tags": [
        "清酒",
        "試飲"
      ],
      "moodColor": "#8C8378",
      "note": "14:45–16:00",
      "phone": null,
      "openHours": "10:00–18:30",
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "trp_d7_07",
      "day": 7,
      "time": "16:23",
      "timeHint": null,
      "type": "transport",
      "title": "阪神本線 石屋川 → 大阪梅田",
      "cityId": null,
      "address": null,
      "addressLocal": null,
      "coords": [
        34.7135,
        135.2501
      ],
      "tags": [],
      "moodColor": "#2A7F7A",
      "note": "16:23→16:52（Yahoo，換乘 1 次）",
      "phone": null,
      "openHours": null,
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "train",
        "from": "石屋川",
        "to": "大阪梅田（阪神）",
        "fromEventId": null,
        "toEventId": null,
        "operator": "阪神電気鉄道",
        "line": "阪神本線→特急",
        "durationMin": 29,
        "liveApi": null
      }
    },
    {
      "id": "evt_d7_08",
      "day": 7,
      "time": "17:05",
      "timeHint": null,
      "type": "rest",
      "title": "酒店大浴場",
      "cityId": null,
      "address": "大阪市北区曽根崎1-2-7",
      "addressLocal": null,
      "coords": [
        34.6983,
        135.5027
      ],
      "tags": [],
      "moodColor": "#9AA8A3",
      "note": null,
      "phone": null,
      "openHours": null,
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "evt_d7_09",
      "day": 7,
      "time": "18:30",
      "timeHint": null,
      "type": "food",
      "title": "晚餐：しんぱち食堂 西梅田店",
      "cityId": null,
      "address": "大阪市北区曾根崎新地2-1-21",
      "addressLocal": null,
      "coords": [
        34.6977,
        135.4953
      ],
      "tags": [
        "和定食"
      ],
      "moodColor": "#A0785A",
      "note": "時間不變；午餐豐富，晚上清淡；備案 懐石 北瑞苑",
      "phone": null,
      "openHours": "07:00–23:00 無休",
      "price": null,
      "cost": {
        "amount": 1000,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "evt_d8_01",
      "day": 8,
      "time": "08:00",
      "timeHint": null,
      "type": "food",
      "title": "早餐：ロンドンティールーム 堂島本店",
      "cityId": null,
      "address": "大阪市北区曽根崎新地2-1-23 JPRビルB1F",
      "addressLocal": null,
      "coords": [
        34.6975,
        135.4953
      ],
      "tags": [],
      "moodColor": "#A0785A",
      "note": "【保留早開始】四天会古董市 07:00 開，好貨早上被買走；はやうち蕎麦膳只有 11:30 一個可預約時段",
      "phone": null,
      "openHours": "土日祝 08:00–20:00",
      "price": null,
      "cost": {
        "amount": 1500,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "trp_d8_02",
      "day": 8,
      "time": "09:01",
      "timeHint": null,
      "type": "transport",
      "title": "谷町線 東梅田 → 四天王寺前夕陽ケ丘",
      "cityId": null,
      "address": null,
      "addressLocal": null,
      "coords": [
        34.7006,
        135.4998
      ],
      "tags": [],
      "moodColor": "#2A7F7A",
      "note": "【保留早開始】四天会古董市 07:00 開，好貨早上被買走；はやうち蕎麦膳只有 11:30 一個可預約時段",
      "phone": null,
      "openHours": null,
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "subway",
        "from": "東梅田",
        "to": "四天王寺前夕陽ケ丘",
        "fromEventId": null,
        "toEventId": null,
        "operator": "Osaka Metro",
        "line": "谷町線",
        "durationMin": 13,
        "liveApi": null
      }
    },
    {
      "id": "evt_d8_03",
      "day": 8,
      "time": "09:20",
      "timeHint": null,
      "type": "shop",
      "title": "四天会蚤の市（四天王寺）",
      "cityId": null,
      "address": "大阪市天王寺区四天王寺1-11-18",
      "addressLocal": null,
      "coords": [
        34.6547,
        135.5168
      ],
      "tags": [
        "市集",
        "古董"
      ],
      "moodColor": "#8C8378",
      "note": "約 100 檔；古皮具／古首飾；多帶現金；【保留早開始】四天会古董市 07:00 開，好貨早上被買走；はやうち蕎麦膳只有 11:30 一個可預約時段",
      "phone": null,
      "openHours": "07:00–16:00（雨天照開）",
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "evt_d8_04",
      "day": 8,
      "time": "11:30",
      "timeHint": null,
      "type": "food",
      "title": "午餐：四天王寺 はやうち（お昼の蕎麦膳）",
      "cityId": null,
      "address": "大阪市天王寺区四天王寺1-12-16",
      "addressLocal": null,
      "coords": [
        34.6556,
        135.5139
      ],
      "tags": [
        "蕎麥",
        "百名店"
      ],
      "moodColor": "#A0785A",
      "note": null,
      "phone": "+81667732858",
      "openHours": "日 11:30–15:00／17:00–20:00；週三休",
      "price": "蕎麦膳 ¥5,200（11:30 開始，唯一可預約）",
      "cost": {
        "amount": 5200,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "evt_d8_05",
      "day": 8,
      "time": "12:45",
      "timeHint": null,
      "type": "shop",
      "title": "四天会 第二圈",
      "cityId": null,
      "address": "四天王寺",
      "addressLocal": null,
      "coords": [
        34.6547,
        135.5168
      ],
      "tags": [],
      "moodColor": "#8C8378",
      "note": null,
      "phone": null,
      "openHours": null,
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "trp_d8_06",
      "day": 8,
      "time": "14:20",
      "timeHint": null,
      "type": "transport",
      "title": "谷町線 四天王寺前夕陽ケ丘 → 天神橋筋六丁目",
      "cityId": null,
      "address": null,
      "addressLocal": null,
      "coords": [
        34.6588,
        135.5142
      ],
      "tags": [],
      "moodColor": "#2A7F7A",
      "note": null,
      "phone": null,
      "openHours": null,
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "subway",
        "from": "四天王寺前夕陽ケ丘",
        "to": "天神橋筋六丁目",
        "fromEventId": null,
        "toEventId": null,
        "operator": "Osaka Metro",
        "line": "谷町線",
        "durationMin": 16,
        "liveApi": null
      }
    },
    {
      "id": "evt_d8_07",
      "day": 8,
      "time": "14:45",
      "timeHint": null,
      "type": "rest",
      "title": "天然溫泉 なにわの湯",
      "cityId": null,
      "address": "大阪市北区（天神橋筋六丁目站 5 號出口北行約 10 分）",
      "addressLocal": null,
      "coords": [
        34.715,
        135.5137
      ],
      "tags": [
        "溫泉"
      ],
      "moodColor": "#9AA8A3",
      "note": "A 案：白雪 蔵まつり確定 2/14 → 改去伊丹（JR 寶塚線 16 分）",
      "phone": null,
      "openHours": "週末及假日 08:00–25:00",
      "price": "週末 ¥1,000",
      "cost": {
        "amount": 1000,
        "currency": "JPY",
        "category": "ticket"
      },
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "trp_d8_08",
      "day": 8,
      "time": "16:43",
      "timeHint": null,
      "type": "transport",
      "title": "谷町線 天神橋筋六丁目 → 東梅田",
      "cityId": null,
      "address": null,
      "addressLocal": null,
      "coords": [
        34.7103,
        135.5108
      ],
      "tags": [],
      "moodColor": "#2A7F7A",
      "note": null,
      "phone": null,
      "openHours": null,
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "subway",
        "from": "天神橋筋六丁目",
        "to": "東梅田",
        "fromEventId": null,
        "toEventId": null,
        "operator": "Osaka Metro",
        "line": "谷町線",
        "durationMin": 4,
        "liveApi": null
      }
    },
    {
      "id": "evt_d8_09",
      "day": 8,
      "time": "17:15",
      "timeHint": null,
      "type": "shop",
      "title": "阪神梅田本店 B1 最後補買",
      "cityId": null,
      "address": "大阪市北区梅田1-13-13",
      "addressLocal": null,
      "coords": [
        34.7012,
        135.4986
      ],
      "tags": [
        "清酒"
      ],
      "moodColor": "#8C8378",
      "note": null,
      "phone": null,
      "openHours": "10:00–20:00",
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "evt_d8_10",
      "day": 8,
      "time": "18:30",
      "timeHint": null,
      "type": "food",
      "title": "晚餐：与太呂 梅田店",
      "cityId": null,
      "address": "大阪市北区梅田3-1-1 大丸梅田店14F",
      "addressLocal": null,
      "coords": [
        34.7019,
        135.4964
      ],
      "tags": [
        "天婦羅",
        "鯛飯",
        "可預約"
      ],
      "moodColor": "#A0785A",
      "note": null,
      "phone": "+81664555878",
      "openHours": "週六日 11:00–22:00（L.O.21:00）",
      "price": null,
      "cost": {
        "amount": 5500,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "evt_d9_01",
      "day": 9,
      "time": "08:00",
      "timeHint": null,
      "type": "rest",
      "title": "最後一次朝湯",
      "cityId": null,
      "address": "大阪市北区曽根崎1-2-7",
      "addressLocal": null,
      "coords": [
        34.6983,
        135.5027
      ],
      "tags": [],
      "moodColor": "#9AA8A3",
      "note": "【保留早開始】回程日：大浴場 09:00 關、11:00 退房、11:50 巴士，所以朝湯排 08:00–08:45",
      "phone": null,
      "openHours": "06:00–09:00",
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "evt_d9_02",
      "day": 9,
      "time": "09:00",
      "timeHint": null,
      "type": "food",
      "title": "早餐：酒店 ENT 早餐自助",
      "cityId": null,
      "address": "大阪市北区曽根崎1-2-7 1F",
      "addressLocal": null,
      "coords": [
        34.6983,
        135.5027
      ],
      "tags": [],
      "moodColor": "#A0785A",
      "note": "09:00–09:50",
      "phone": null,
      "openHours": "06:30–10:00（最後入場 09:45）",
      "price": null,
      "cost": {
        "amount": 2200,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "evt_d9_03",
      "day": 9,
      "time": "10:00",
      "timeHint": null,
      "type": "shop",
      "title": "阪神梅田本店 B1 最後買酒",
      "cityId": null,
      "address": "大阪市北区梅田1-13-13",
      "addressLocal": null,
      "coords": [
        34.7012,
        135.4986
      ],
      "tags": [
        "清酒"
      ],
      "moodColor": "#8C8378",
      "note": "10:00–10:40",
      "phone": null,
      "openHours": "10:00–20:00",
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "evt_d9_04",
      "day": 9,
      "time": "11:00",
      "timeHint": null,
      "type": "hotel",
      "title": "Check-out（寄存行李）",
      "cityId": null,
      "address": "大阪市北区曽根崎1-2-7",
      "addressLocal": null,
      "coords": [
        34.6983,
        135.5027
      ],
      "tags": [],
      "moodColor": "#3A3A3A",
      "note": "步行到阪急三番街約 15 分（估算）",
      "phone": null,
      "openHours": null,
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "trp_d9_05",
      "day": 9,
      "time": "11:50",
      "timeHint": null,
      "type": "transport",
      "title": "空港リムジンバス 阪急三番街 → KIX T1",
      "cityId": null,
      "address": null,
      "addressLocal": null,
      "coords": [
        34.7047,
        135.4991
      ],
      "tags": [],
      "moodColor": "#2A7F7A",
      "note": "11:50 或 12:00 班，約 12:50／13:00 到（2026-01-27 版時刻表）",
      "phone": null,
      "openHours": null,
      "price": null,
      "cost": {
        "amount": 1800,
        "currency": "JPY",
        "category": "transport"
      },
      "status": "pending",
      "source": "ai",
      "transport": {
        "mode": "bus",
        "from": "阪急三番街",
        "to": "関西空港 第1ターミナル",
        "fromEventId": null,
        "toEventId": null,
        "operator": "阪急観光バス／阪神バス／関西空港交通",
        "line": "大阪駅前（梅田）線",
        "durationMin": 60,
        "liveApi": null
      }
    },
    {
      "id": "evt_d9_06",
      "day": 9,
      "time": "13:45",
      "timeHint": null,
      "type": "food",
      "title": "午餐：佐海屋（KIX T1 保安後）",
      "cityId": null,
      "address": "関西国際空港 第1ターミナル（国際線保安検査後）",
      "addressLocal": null,
      "coords": [
        34.4343,
        135.2442
      ],
      "tags": [],
      "moodColor": "#A0785A",
      "note": "備案：海老一（天婦羅）",
      "phone": null,
      "openHours": "06:30–22:30（官網摘錄）",
      "price": null,
      "cost": {
        "amount": 1500,
        "currency": "JPY",
        "category": "food"
      },
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "evt_d9_07",
      "day": 9,
      "time": "15:15",
      "timeHint": null,
      "type": "departure",
      "title": "HX 回程 KIX → HKG",
      "cityId": null,
      "address": "KIX T1",
      "addressLocal": null,
      "coords": [
        34.4343,
        135.2442
      ],
      "tags": [
        "航班"
      ],
      "moodColor": "#3A3A3A",
      "note": "18:55 抵達香港",
      "phone": null,
      "openHours": null,
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "evt_d9_08",
      "day": 9,
      "time": "19:30",
      "timeHint": null,
      "type": "food",
      "title": "晚餐：何洪記（HKIA 接機大堂）",
      "cityId": null,
      "address": "香港國際機場 T1 抵港層 L5 接機大堂",
      "addressLocal": null,
      "coords": [
        22.3139,
        113.93
      ],
      "tags": [
        "雲吞麵"
      ],
      "moodColor": "#A0785A",
      "note": null,
      "phone": null,
      "openHours": "07:00–23:30",
      "price": null,
      "cost": null,
      "status": "pending",
      "source": "ai"
    },
    {
      "id": "trp_d9_09",
      "day": 9,
      "time": "20:15",
      "timeHint": null,
      "type": "transport",
      "title": "城巴 A29 機場 → 寶琳",
      "cityId": null,
      "address": null,
      "addressLocal": null,
      "coords": [
        22.3159,
        113.9359
      ],
      "tags": [],
      "moodColor": "#2A7F7A",
      "note": "週一晚每 15–20 分一班（HK GTFS）",
      "phone": null,
      "openHours": null,
      "price": null,
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
        "operator": "Citybus",
        "line": "A29",
        "durationMin": 91,
        "liveApi": null
      }
    }
  ]
};

// 6. 💡 靈感池 / Plan B（不綁天）
const INSPIRATIONS = [
  {
    "id": "ins_001",
    "title": "しんぱち食堂 西梅田店",
    "tag": "TIRED",
    "note": "2/7 晚餐備案：07:00–23:00 無休，全席禁煙",
    "type": "food",
    "cityId": null,
    "address": "大阪市北区曾根崎新地2-1-21",
    "addressLocal": null,
    "coords": [
      34.6977,
      135.4953
    ],
    "nearEventId": "evt_d1_08",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_002",
    "title": "北極星 心斎橋本店",
    "tag": "RAINY",
    "note": "2/8 午餐備案：蛋包飯，11:30–21:30，一般席不設預約",
    "type": "food",
    "cityId": null,
    "address": "大阪市中央区西心斎橋2-7-27",
    "addressLocal": null,
    "coords": [
      34.6697,
      135.4988
    ],
    "nearEventId": "evt_d2_05",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_003",
    "title": "ぬる燗佐藤 大坂",
    "tag": "BACKUP",
    "note": "燗の美穂滿座／休息時的清酒備案",
    "type": "food",
    "cityId": null,
    "address": "大阪市北区大深町4-20 グランフロント大阪南館7F",
    "addressLocal": null,
    "coords": [
      34.7042,
      135.4948
    ],
    "nearEventId": "evt_d2_09",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_004",
    "title": "奈良國立博物館",
    "tag": "RAINY",
    "note": "2/9 下雨備案：瑠璃絵期間開到 18:00；佛像館翻新閉館",
    "type": "sight",
    "cityId": null,
    "address": "奈良市登大路町50",
    "addressLocal": null,
    "coords": [
      34.6831,
      135.8383
    ],
    "nearEventId": "evt_d3_07",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_005",
    "title": "春日荷茶屋（萬葉粥）",
    "tag": "BACKUP",
    "note": "2/9 午餐備案：10:30–16:30（L.O.16:00），週一休",
    "type": "food",
    "cityId": null,
    "address": "奈良市春日野町160 春日大社境內",
    "addressLocal": null,
    "coords": [
      34.6823,
      135.8434
    ],
    "nearEventId": "evt_d3_05",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_006",
    "title": "春日大社 開運厄除祈祷",
    "tag": "SPIRIT",
    "note": "2 月個人申請，可與瑠璃絵同日；與石切二選一減輕行程",
    "type": "sight",
    "cityId": null,
    "address": "奈良市春日野町160",
    "addressLocal": null,
    "coords": [
      34.6805,
      135.8461
    ],
    "nearEventId": "evt_d3_09",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_007",
    "title": "太閤の湯",
    "tag": "BACKUP",
    "note": "金の湯閉館備案：約 10:00–22:00，2 月無休館；巴士套票 ¥3,870",
    "type": "rest",
    "cityId": null,
    "address": "神戸市北区有馬町",
    "addressLocal": null,
    "coords": [
      34.7978,
      135.2512
    ],
    "nearEventId": "evt_d4_04",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_008",
    "title": "銀座天一 大阪店（晚市）",
    "tag": "BACKUP",
    "note": "2/10 晚餐備案：吧枱コース「花」¥9,900",
    "type": "food",
    "cityId": null,
    "address": "大阪市北区梅田2-2-22 ハービスPLAZA ENT 5F",
    "addressLocal": null,
    "coords": [
      34.6998,
      135.4946
    ],
    "nearEventId": "evt_d4_09",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_009",
    "title": "國立國際美術館「コトバの重なる場所」",
    "tag": "RAINY",
    "note": "2/11 中之島美術館人多時改去（至 2027/3/14）",
    "type": "sight",
    "cityId": null,
    "address": "大阪市北区中之島4-2-55",
    "addressLocal": null,
    "coords": [
      34.6917,
      135.4922
    ],
    "nearEventId": "evt_d5_03",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_010",
    "title": "Ojas spa 梅田店（乾式頭療）",
    "tag": "TIRED",
    "note": "ものさし約不到時：11:00–24:00 不定休",
    "type": "rest",
    "cityId": null,
    "address": "大阪市北区豊崎3-14-6 M-style 301",
    "addressLocal": null,
    "coords": [
      34.7105,
      135.4983
    ],
    "nearEventId": "evt_d5_09",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_011",
    "title": "懐石 北瑞苑 四季彩ランチ",
    "tag": "BACKUP",
    "note": "午餐備案：¥3,960 起，日祝午市照開",
    "type": "food",
    "cityId": null,
    "address": "大阪市北区曽根崎新地2-3-21 axビル3F",
    "addressLocal": null,
    "coords": [
      34.698,
      135.4944
    ],
    "nearEventId": "evt_d6_04",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_012",
    "title": "十三市（神津神社）",
    "tag": "MARKET",
    "note": "2/13 B 案早上：阪急十三站 5 分；官方未寫時間",
    "type": "shop",
    "cityId": null,
    "address": "大阪市淀川区",
    "addressLocal": null,
    "coords": [
      34.7205,
      135.4846
    ],
    "nearEventId": "evt_d7_03",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_013",
    "title": "白鹿 西宮蔵開",
    "tag": "SAKE",
    "note": "2/13 A 案另一選項：10:00–15:00，只收現金（2027 日期待公布）",
    "type": "sight",
    "cityId": null,
    "address": "西宮市建石町2-10",
    "addressLocal": null,
    "coords": [
      34.7292,
      135.3358
    ],
    "nearEventId": "evt_d7_03",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_014",
    "title": "白雪 蔵まつり（伊丹）",
    "tag": "SAKE",
    "note": "若確定 2/14：JR 大阪→伊丹 16 分；10:00–16:00",
    "type": "sight",
    "cityId": null,
    "address": "伊丹市中央3-4-15",
    "addressLocal": null,
    "coords": [
      34.7811,
      135.4172
    ],
    "nearEventId": "evt_d8_07",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_015",
    "title": "なら瑠璃絵 最後一晚（2/14）",
    "tag": "PHOTO",
    "note": "2026 年模式有煙花，人多，不建議重複去",
    "type": "sight",
    "cityId": null,
    "address": "奈良公園",
    "addressLocal": null,
    "coords": [
      34.6829,
      135.8546
    ],
    "nearEventId": "evt_d8_07",
    "status": "wishlist",
    "source": "ai"
  }
];

// 7. 🛒 每日購物
const DAILY_EXTRAS = {
  "1": {
    "shopping": [
      "Visit Japan Web QR",
      "ICOCA／信用卡拍卡",
      "LUCUA 熟食＋清酒"
    ]
  },
  "2": {
    "shopping": [
      "古物市現金",
      "vintage 皮具（查品相分級）"
    ],
    "inspiration": [
      {
        "title": "燗の美穂",
        "tag": "SAKE",
        "note": "燙酒溫度可請店主推薦",
        "type": "food"
      }
    ]
  },
  "3": {
    "shopping": [
      "にぎり墨（桐箱，3 個月勿開）",
      "奈良地酒"
    ],
    "inspiration": [
      {
        "title": "保暖",
        "tag": "WEATHER",
        "note": "瑠璃絵夜間在戶外，2 月夜晚冷",
        "type": "note"
      }
    ]
  },
  "4": {
    "shopping": [
      "溫泉毛巾",
      "阪急 B2 試飲後買酒"
    ]
  },
  "5": {
    "shopping": [
      "古董首飾／cameo",
      "日本產精油"
    ]
  },
  "6": {
    "shopping": [
      "阪神 B1 清酒",
      "自調香水",
      "精油 GC-MS 成分表"
    ]
  },
  "7": {
    "shopping": [
      "藏開き限定新酒",
      "酒粕",
      "現金（白鹿只收現金）"
    ]
  },
  "8": {
    "shopping": [
      "四天会古皮具／古首飾",
      "最後一批清酒"
    ]
  },
  "9": {
    "shopping": [
      "清酒防震包裝",
      "回程 32kg 行李"
    ]
  }
};

// 8. 💰 預算
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
    "total": 269860,
    "currency": "JPY",
    "byCategory": {
      "hotel": 130330,
      "food": 92540,
      "transport": 14640,
      "ticket": 12350,
      "shop": 0,
      "other": 20000
    },
    "note": "JPY 為日本當地估算；hotel＝Elcient 8 晚推算 ¥127,330＋宿泊稅約 ¥3,000；transport 另加市內鐵路約 ¥8,000（估算）；other＝頭療、香薰療程預留（價錢待確認）；shop 未估。機票 HK$5,223（HK$2,773＋HK$2,450）＋行李約 HK$740 另計（HKD）。"
  },
  "expenses": []
};

// 9. 🗣️ 常用短語
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
        "term_secondary": "我有預約，姓陳",
        "term_pronounce": "Yoyaku shita Chan desu"
      },
      {
        "term_primary": "カウンター席でお願いします",
        "term_secondary": "麻煩坐吧枱",
        "term_pronounce": "Kauntā-seki de onegai shimasu"
      },
      {
        "term_primary": "おすすめは？",
        "term_secondary": "有甚麼推薦？",
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
        "term_secondary": "請溫到 ぬる燗（約 40°C）",
        "term_pronounce": "Nurukan de onegai shimasu"
      },
      {
        "term_primary": "試飲できますか",
        "term_secondary": "可以試飲嗎？",
        "term_pronounce": "Shiin dekimasu ka"
      },
      {
        "term_primary": "蔵開き限定のお酒はどれですか",
        "term_secondary": "哪款是藏開き限定酒？",
        "term_pronounce": "Kurabiraki gentei no osake wa dore desu ka"
      }
    ]
  },
  {
    "category": "購物／古物",
    "items": [
      {
        "term_primary": "これを見せてください",
        "term_secondary": "請讓我看這個",
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
        "term_primary": "免税できますか",
        "term_secondary": "可以退稅嗎？",
        "term_pronounce": "Menzei dekimasu ka"
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
