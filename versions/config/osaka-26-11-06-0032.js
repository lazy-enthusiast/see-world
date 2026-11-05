// buildTime: 2026-10-22T08:59:55.272Z
// ============================================================
// 🧳 客製化設定檔 config.js —— 大阪二月（v5p WIP：按 facts.md／hotel_price.md 更新事實（酒店價、稅、すみえもん、營業時間、刪香雪）；v5o_final：v5o＋酒店【預約】不寫平台名、宿泊稅門檻字眼、出處字眼、神社經過註明；v5o：修 QA v5n 2 項（酒店價錢去渠道名、Feb 10 繩手通入口）＋minor；v5n：修 QA v5m 2 項（cityId、白川口路線）＋minor；房價 ¥129,205（Oct 22, 2026 較高報價）；v5m：Feb 14 回酒店即收工（下午改道勝café＋空堀商店街）；房價 Oct 22 價 ¥127,125；v5l：修 QA v5k 2 項；Feb 10 加鴨川河畔＋鍵善良房休息；Feb 14 長壽藏 13:30–15:00、回酒店休息後晚餐；v5k：修 QA v5j 11 項；Feb 14 老松（星期日休）移入靈感池、長壽藏延至 16:00；Feb 10 改祇園白川南通；日期「Nov 1, 2026」寫法；v5j：Feb 14 杯麵博物館 大阪池田＋長壽藏午餐、Feb 10 漢字博物館移入靈感池改祇園新橋散步、全檔 note 精簡、交通 note 去候車字眼（SCHEMA v1.16）；v5i：靈感池全部掛上 nearEventId、日期改 Feb 7 寫法、全席禁煙更正；Feb 9 晚餐大和野菜串燒 Yamato、Feb 10 午餐備案祇園 Kirara、Feb 11 下午淺野日本酒店＋中崎町＋天滿市場、Feb 13 雅釀備案燒鳥 Sumiemon（第二備案玄盛）；v5h：嚴格重審後重排；Feb 9 奈良縣立美術館＋奈良町、Feb 10 京都美術館＋漢字博物館＋月桂冠、Feb 14 伊丹白雪長壽藏、白鹿西宮藏開、Feb 12 神戶珍珠、Feb 7 生日蛋糕、KIX 退稅順序；v5g：京都日、神戶梵高展 4 小時＋HINO、雅釀改 Feb 13、只用網上預約；v5f：UO 航班、大梵高展、5 間店資料更新、QA 7aaae12 修正；v5：酒店改 Dormy Inn 大阪谷町、全程交通重排、超市宵夜；按 SCHEMA v1.12 調整）
// 結構契約見 schema.json／SCHEMA.md（v1.16；v5d：聯絡欄位、靈感攻略、標題只寫地點、去出處字眼、取消皮革工作坊；v5e：加入歷史文化點、古物點減至兩個、早餐改酒店免費咖啡、KIX 手信）
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
      "dep": "HKG 11:50",
      "arr": "KIX 16:25",
      "note": "香港一號客運大樓 → 關西第 1 航廈；HK$2,773；寄艙 20kg 首次訂票 HK$310",
      "bookingRef": null
    },
    {
      "type": "回程",
      "flight": "HK Express UO851",
      "date": "Feb 15",
      "dep": "KIX 15:15",
      "arr": "HKG 19:00",
      "note": "約 12:30 到關西第 1 航廈；HK$2,450；回程建議加購 32kg（約 HK$430）",
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
      "checkOut": "Feb 15, 2027（11:00 前）",
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
      "note": "【入境】出發前填好 Visit Japan Web；入境連提行李預留 45–60 分鐘。\n【攻略】便利店 ATM 提備用現金；利木津巴士在第 1 航廈 1 樓 7 號站。\n【實用】刷卡一律選日圓（JPY），不選港幣（DCC）；ICOCA 用現金增值。",
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
      "note": "【上車】第 1 航廈 1 樓 7 號站（近鐵上本町線），先在售票機買票（可刷卡）；18:30 前上車就趕得及 19:00 取蛋糕。\n【下車】近鐵上本町 2 樓巴士總站，直入近鐵百貨地庫。\n【車資】成人 ¥1,800。\n【備案】南海空港急行往難波 → 天下茶屋轉堺筋線 → 堺筋本町轉中央線到谷町四丁目（IC ¥1,210）；B2 蛋糕店開到 20:00。",
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
      "note": "【攻略】先到 B2 Henri Charpentier（アンリ・シャルパンティエ）取 12cm 草莓鮮奶油蛋糕（シャンティ・フレーズ）¥4,536 並付款（報 E 字頭預約號碼）；再上 B1 鮮魚西淺（西浅）買刺身拼盤、清酒賣場揀一支四合瓶地酒，有試飲就先試。\n【預約】網店「店舖取貨」（店舗受取）：先註冊會員，Feb 4 日本時間 17:00 前下單，取貨 Feb 7 19:00；蠟燭、生日牌、保冷劑在下單頁選。取貨日 3 日前 17:59 前可網上取消，之後前一日、當日取消收全額。要準時取貨，取貨時可刷恒生 travel+ 卡。\n【實用】刺身要保冷劑（保冷剤をお願いします）；蛋糕回房即放冰箱。\n【備案】錯過下單：B2 現場買單件草莓蛋糕（ザ・ショートケーキ）¥853；20:00 後才到就回酒店樓下 KOHYO 買。",
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
      "note": "【上車】近鐵百貨地庫經地下通道步行約 5 分鐘到谷町九丁目站，2 號月台，谷町線往大日。\n【下車】谷町四丁目站 4 號出口，步行約 4 分鐘回酒店。\n【車資】IC ¥190。\n【備案】行李多就在上本町乘的士（約 ¥1,000）。",
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
      "note": "【攻略】8 晚同一間：標準方案（ドーミーインスタンダードプラン＜素泊まり＞）禁煙雙人房；13 樓天然溫泉浪華之湯連桑拿，住客免費；酒店對面 KOHYO 超市。\n【免費服務】歡迎飲品、浴後雪條、夜鳴蕎麥麵（夜鳴きそば，21:30–23:00）、朝早乳酸菌飲品；沒有免費酒精飲品。\n【預約】網上訂房、到店付款（現地払い）；Feb 6 取消收 50%，當日取消收 100%。\n【實用】到店用恒生 travel+ 實體卡付款；宿泊稅 Feb 13 ¥500，其餘每晚 ¥200，共 ¥1,900；入湯稅每晚 ¥150，共 ¥1,200；兩項入住時付。房間 14㎡、淋浴間、全部禁煙；1、4、13 樓有吸煙亭（13 樓同層有浴場和餐廳），訂房備註要求遠離吸煙亭。",
      "phone": "+81-6-6945-5489",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "Check-in 15:00／Check-out 11:00；大浴場「浪華之湯」（13 樓，男女分開）15:00–翌日 10:00；桑拿 01:00–05:00 暫停",
      "price": "8 晚 ¥112,500（標準方案素泊、禁煙雙人房；Oct 22, 2026 報價，房價會浮動；含消費稅）＋宿泊稅 ¥1,900＋入湯稅 ¥1,200（入住時付）",
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
      "note": "【今次】生日宵夜：房間裏刺身、地酒、12cm 蛋糕。\n【攻略】紙杯問前台借；想加壽司、沙律就入住前在酒店對面 KOHYO 買。\n【實用】大浴場禁酒，留在房間吃；喝酒後休息 30 分鐘、多喝水才泡湯。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "酒店房間（20:15 起）；KOHYO 07:00–23:00",
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
      "note": "【攻略】室內天然溫泉 → 露天風呂、一人壺湯 → 桑拿、冷水池、外氣浴；13 樓 HATAGO 免費夜鳴蕎麥麵，22:15 後較空。\n【實用】浴場不可帶食物和酒；有紋身不可入浴。",
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
      "note": "【出門前】1 樓 Lounge 免費咖啡（紙杯可帶走）。\n【攻略】由 10 樓向下看：10 樓 7 世紀難波宮大極殿（窗外就是遺址）、9 樓豐臣大坂城和「天下廚房」、7 樓「大大阪」心齋橋街景；8 樓特集「探索中世大阪的城」（中世・大阪の城をさぐる），門票已包。\n【實用】約 1–1.5 小時；中英文語音導覽 ¥400。門票可刷卡就用卡，另帶現金。",
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
      "note": "【上車】谷町四丁目站 1 號月台，谷町線往八尾南。\n【下車】谷町九丁目站 3 號出口，步行約 4 分鐘。\n【車資】IC ¥190。\n【備案】天氣好可步行約 20 分鐘。",
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
      "note": "【今次】每月 8 日的小型古物市；只逛攤位，不參拜。\n【攻略】約 10 檔古道具攤沿參道擺開，翻舊皮件、小首飾；議價客氣問「可以便宜一點嗎？（少し安くなりますか）」。\n【實用】多數只收現金。",
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
      "note": "【上車】由蚤之市沿生玉町住宅街向南。\n【下車】步行約 3–5 分鐘到和sai。\n【車資】免費。\n【備案】下雨撐傘，路程很短。途經小神社，只經過、不參拜。",
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
      "note": "【Tabelog】3.57\n【攻略】古民家和食，天然魚；點當日魚料理定食配一杯冷酒。\n【預約】Tabelog 網上訂 12:00、1 位，只訂座位（不選 2 名起的魚鍋套餐）；約 Dec 中旬開放。\n【實用】Feb 8（一）營業；全席禁煙（吸煙室不明）。\n【備案】訂不到就 11:30 開門時直接問一人位。",
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
      "note": "【上車】谷町九丁目站千日前線 2 號月台，往野田阪神。\n【轉車】難波轉御堂筋線 1 號月台，往天王寺 1 個站。\n【下車】大國町站 2 號出口，向西步行約 6 分鐘。\n【車資】IC ¥190。\n【備案】千日前線約 5–7 分鐘一班。",
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
      "note": "【今次】自助試飲＋買地酒。\n【攻略】2 樓試飲室用代幣（每個 ¥350／60ml）自助試 50 款以上；喜歡就買一合瓶或四合瓶。3 樓是分三室的日本酒雪櫃，很冷，帶外套。\n【實用】入口在正面右手樓梯；要防震包裝（緩衝材で包んでください）。配對試飲只在星期二至五，今日只做自助試飲。",
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
      "note": "【上車】大國町站，御堂筋線往新大阪。\n【轉車】心齋橋轉長堀鶴見綠地線 1 號月台，往門真南 2 個站。\n【下車】松屋町站，步行約 5 分鐘到空堀商店街西端。\n【車資】IC ¥240。\n【備案】酒多就由大國町乘的士（約 15 分鐘）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，不用趕指定班次",
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
      "note": "【歷史】「空堀」是 1594 年豐臣秀吉築大坂城外圍「惣構」時挖的乾壕；這一帶避過空襲，留下戰前長屋和坡道。\n【攻略】由松屋町向東慢行空堀商店街；土居只用天然真昆布，天然真昆布（寸切）30g ¥550 輕身好帶。\n【實用】Feb 8（一）營業。",
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
      "note": "【Tabelog】3.78（居酒屋 WEST 百名店 2026）\n【攻略】必點蟹膏可樂餅（蟹味噌コロッケ）；刺身配冷酒，比內地雞配燙酒，請店方按菜配酒。\n【預約】Tabelog 網上訂吧枱一人位；約 Dec 中旬開放，最遲 2 星期前訂好。\n【實用】Aug 2026 起星期三休、星期一營業；出發前一星期看臨時休息。沒有招牌（白色倉庫風獨棟），先存好地圖位置。全席禁煙（吸煙室不明）。\n【備案】Ponshutagram The Bar（谷町六丁目，星期一 18:00 開，只訂座位）。",
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
      "note": "【上車】步行約 15 分鐘到谷町六丁目站，2 號月台，谷町線往大日。\n【下車】谷町四丁目站 4 號出口，步行約 4 分鐘回酒店。\n【車資】IC ¥190。\n【備案】門口截的士回酒店約 10 分鐘。",
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
      "note": "【攻略】喝過酒先休息 30 分鐘、多喝水才泡；21:30 後有夜鳴蕎麥麵。\n【實用】浴場不可帶食物和酒；有紋身不可入浴。",
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
      "note": "【Tabelog】3.72（パン WEST 百名店 2026）\n【今次】全程唯一一頓專程早餐。\n【攻略】國產小麥麵包；早餐套餐有 3 款麵包、沙律、小菜和飲品。\n【實用】Feb 9（二）營業；不收信用卡，用 PayPay 或現金；全席禁煙（吸煙室不明）。",
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
      "note": "【上車】谷町四丁目站 1 號月台，中央線往生駒（直通近鐵）。\n【轉車】生駒同站轉近鐵奈良線快速急行。\n【下車】近鐵奈良站東改札 2 號出口，沿登大路向東約 5 分鐘。\n【車資】IC ¥860。\n【備案】谷町九丁目轉近鐵上本町，快速急行直達近鐵奈良。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，不用趕指定班次",
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
      "note": "【今次】特別展「傳統文化的現在：墨與和紙的世界」（伝統文化の現在 墨と和紙の世界）。\n【攻略】奈良墨佔全國約九成產量，配吉野手漉和紙；看四位當代作家作品和職人工具，明白一塊墨、一張紙怎樣做。\n【實用】Feb 9（二）照開；門票可刷卡就用卡，另帶現金。之後經東向商店街步行約 15 分鐘到岡田。",
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
      "note": "【Tabelog】3.82\n【攻略】午市懷石 ¥8,000：大和野菜、季節魚、奈良地酒；13 座，以吧枱為主。\n【預約】Tabelog 網上可訂 1 位，選 12:15 吧枱；約 Dec 中旬開放。\n【實用】全席禁煙（吸煙室不明）。\n【備案】Harishin（はり新）（網上訂；全席禁煙）。",
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
      "note": "【今次】舊八木酒造，代表酒「升平」；免費試飲＋買酒。\n【攻略】比較「升平」純米和當季新酒，買一兩支四合瓶。\n【注意】酒藏參觀暫停，只試飲和買酒；不用預約。",
      "phone": "+81-742-26-2300",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "平日 10:00–17:00；逢星期六、日及假期休",
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
      "note": "【今次】1917 年古董商大隅家町家，免費。\n【攻略】主屋、離屋、土藏保留大正模樣：格子窗、挑高廚房、緣側看小庭院。\n【實用】Feb 9（二）照開；脫鞋入內。",
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
      "note": "【攻略】重建的奈良町商家：密格子窗、由門口直通後院的通庭（通り庭）、樓梯下是抽屜的箱階段（箱階段）；出來再看街上的蟲籠窗（虫籠窓）和老招牌。\n【實用】免費，約 15 分鐘；脫鞋入內。",
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
      "note": "【攻略】約 120 款奈良地酒付費試飲（每杯 50cc，¥200 起）；晚餐前試 3–4 杯，揀兩三款帶走。\n【實用】偶有臨時休息。",
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
      "id": "trp_d3_19",
      "day": 3,
      "time": "16:50",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "前往大和野菜串燒 Yamato（步行）",
      "cityId": "nara",
      "address": null,
      "addressLocal": null,
      "coords": [
        34.6797,
        135.8294
      ],
      "tags": [
        "步行"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】由泉勇齋向北經東向商店街。\n【下車】約 6 分鐘到東向南町，餐廳在 2 樓。\n【車資】免費。\n【備案】下雨走商店街有蓋路段。",
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
        "from": "奈良泉勇齋",
        "to": "大和野菜串燒 Yamato",
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
      "id": "evt_d3_19",
      "day": 3,
      "time": "17:00",
      "timeHint": "evening",
      "type": "food",
      "title": "大和野菜串燒 Yamato 近鐵奈良店（大和野菜と串焼き やまと 近鉄奈良店）",
      "cityId": "nara",
      "address": "日本奈良縣奈良市東向南町23 2 樓",
      "addressLocal": "奈良県奈良市東向南町23 2F 大和野菜と串焼き やまと 近鉄奈良店",
      "coords": [
        34.6826,
        135.8285
      ],
      "tags": [
        "奈良地酒",
        "串燒",
        "全席禁煙",
        "網上預約"
      ],
      "moodColor": "#A0785A",
      "note": "【Tabelog】3.23\n【攻略】先點利酒套組（利き酒セット）飲比奈良酒，再配大和野菜燒物、串燒和飛鳥鍋（飛鳥鍋）。\n【預約】Tabelog 網上只訂座位 17:00、1 位；約 Dec 中旬開放。當日取消每位 ¥2,000，沒通知 ¥3,000。\n【實用】桌席（沒有吧枱），歡迎一人；全席禁煙，沒有吸煙室；可刷恒生 travel+ 卡。Feb 9（二）營業。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "星期一至五 17:00–23:00（L.O. 22:30）；星期六、日及假期 15:00–23:00；沒有固定休息日",
      "price": "晚市預算 ¥3,000–4,999（估算）",
      "website": "https://tabelog.com/nara/A2901/A290101/29012490/",
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
      "id": "trp_d3_11",
      "day": 3,
      "time": "18:55",
      "timeHint": "evening",
      "type": "transport",
      "title": "前往谷町四丁目（近鐵奈良線 → 近鐵京阪奈線直通地鐵中央線）",
      "cityId": "nara",
      "address": "近鐵奈良站（往大阪難波方向月台）",
      "addressLocal": "近鉄 奈良駅（大阪難波方面）",
      "coords": [
        34.6844,
        135.8279
      ],
      "tags": [
        "近鐵",
        "地鐵"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】步行約 3 分鐘到近鐵奈良站，坐往大阪難波的快速急行或急行（月台看站內顯示）。\n【轉車】生駒同站轉近鐵京阪奈線（直通中央線），不用出閘。\n【下車】谷町四丁目站 4 號出口，步行約 4 分鐘回酒店。\n【車資】IC ¥860。\n【備案】坐到大阪上本町，步行到谷町九丁目轉谷町線 2 個站（IC 約 ¥800）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "約 10–15 分鐘一班",
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
        "operator": "近鐵／大阪地鐵",
        "line": "近鐵奈良線快速急行 → 近鐵京阪奈線（直通中央線）",
        "durationMin": 50,
        "stopCount": 13,
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
      "note": "【攻略】奈良走得多，泡露天風呂和壺湯舒緩雙腳，早點休息。\n【實用】浴場不可帶食物和酒；有紋身不可入浴。",
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
      "note": "【上車】谷町四丁目站 2 號月台，谷町線往大日 1 個站到天滿橋。\n【轉車】天滿橋轉京阪本線特急往出町柳，三條下車，轉地鐵東西線往六地藏 1 個站。\n【下車】東山站，沿東大路通、二條通步行約 15 分鐘到美術館西入口。\n【車資】IC ¥900。\n【備案】三條站乘的士到美術館約 5 分鐘。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，不用趕指定班次",
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
      "note": "【今次】冬季館藏特集「塗出時光：京都漆藝映照的近代」（時を塗る－京都のうるしが映した近代）；今日唯一一間博物館。\n【攻略】明治到戰後的京漆器：博覽會出品、宮殿用具到日常器物；另有竹內栖鳳、上村松園館藏。1933 年帝冠樣式本館也值得看。\n【實用】Feb 10（三）照開；可網上買票，現場可刷卡就用卡，另帶現金。",
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
      "note": "【上車】東山站 1 號月台，東西線往太秦天神川 1 個站到三條京阪。\n【轉車】步行約 3 分鐘到京阪三條站，京阪本線往淀屋橋 1 個站。\n【下車】祇園四條站，過四條大橋向東再入南側小路，步行約 7 分鐘。\n【車資】IC ¥400。\n【備案】東山站一帶乘的士約 10 分鐘。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，不用趕指定班次",
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
      "note": "【今次】百年西京漬老店的祇園新店（May 2026 開）。\n【攻略】點銀鱈藏味噌燒御膳（銀だらの蔵みそ焼御膳）¥4,900，一人一份剛好。\n【預約】完全預約制：Tabelog 網上訂 12:30 那輪（每輪 1 小時）、1 名，前一日之前；約 Dec 中旬開放。\n【實用】全席禁煙（吸煙室不明）。\n【備案】祇園 Kirara（祇をん きらら）：花見小路南側女料理長京料理，午市彩御膳約 ¥2,000–3,000；全席禁煙（吸煙室不明）；Tabelog 網上訂，Feb 10 的空位約 Nov 上旬開放查詢，可訂即代表當日營業。",
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
      "title": "前往祇園白川南通（步行）",
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
      "note": "【上車】由餐廳回四條通向西，到繩手通口（未到四條大橋）向北入繩手通。\n【下車】步行約 6 分鐘到白川南通西口（繩手通）。\n【車資】免費。\n【備案】下雨沿四條通簷下走。",
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
        "to": "祇園白川南通",
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
      "id": "evt_d4_39",
      "day": 4,
      "time": "13:40",
      "timeHint": "afternoon",
      "type": "sight",
      "title": "祇園白川南通・鴨川河畔（白川南通り・鴨川）",
      "cityId": "kyoto",
      "address": "日本京都府京都市東山區末吉町 白川南通（繩手通入口）",
      "addressLocal": "京都府京都市東山区末吉町 白川南通（縄手通側）",
      "coords": [
        35.0054,
        135.7729
      ],
      "tags": [
        "散步",
        "傳統街區"
      ],
      "moodColor": "#6B7F7A",
      "note": "【今次】飯後散步：祇園新橋傳統建築保存地區的白川南通，再沿鴨川東岸慢行。\n【攻略】由繩手通入白川南通，行約 60 m 看茶屋格子窗就折返（不行到東端小橋）；回繩手通向南過大和橋，沿白川南岸小路（末吉町側）向西到川端通，在白川匯入鴨川處落東岸河畔步道，向北行到三條大橋，原路返回上街（約 1.2 km；連步行去鍵善良房共約 1.5 km、約 25–30 分鐘，河邊只坐一陣）。\n【實用】免費；上街後沿白川南岸小路回繩手通，向南到四條通再向東，步行約 5 分鐘到鍵善良房。\n【備案】下雨就直接去鍵善良房；想入室內就改去漢字博物館（見靈感池）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "隨時",
      "price": "免費",
      "website": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "evt_d4_40",
      "day": 4,
      "time": "14:15",
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
      "note": "【今次】坐低休息：江戶中期創業的和菓子老店。\n【攻略】點名物葛切（くずきり）¥1,600 蘸黑蜜；冬季另有紅豆湯（おしるこ）¥1,400。\n【預約】喫茶不設預約，人多要排一陣。\n【實用】全席禁煙；可刷卡（VISA、Master、JCB、AMEX）或 PayPay；甜品不可外帶。\n【備案】排隊超過 15 分鐘就只買和菓子，提早去伏見。",
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
      "note": "【上車】由鍵善良房沿四條通向西步行約 5 分鐘到京阪祇園四條站，2 號月台，京阪本線特急往淀屋橋。\n【下車】中書島站北口，過橋沿濠川向北步行約 5 分鐘。\n【車資】IC ¥320。\n【備案】坐準急或普通車（約 20 分鐘）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，不用趕指定班次",
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
      "note": "【今次】清酒試飲站：月桂冠的酒藏資料館＋試飲。\n【攻略】重點是最後的試飲，比較幾款月桂冠和伏見「軟水」的柔和口感；1909 年酒藏改建的展示看過工具就好，留意力給試飲。和 Feb 13 灘五鄉的「男酒」作對照。\n【實用】16:00 前入館；不收現金，只收信用卡（Visa、Mastercard）。",
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
      "note": "【上車】由記念館沿南濱酒藏白牆向北。\n【下車】約 10 分鐘到伏水酒藏小路。\n【車資】免費。\n【備案】下雨走大手筋商店街有蓋路段。途經小神社，只經過、不參拜。",
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
      "note": "【今次】伏見清酒飲比。\n【攻略】日本酒吧「酒藏」23 米吧枱，常備伏見 18 間酒藏 120 款以上；點十八藏飲比（十八蔵のきき酒セット）¥3,280（約 2 合，清爽到濃厚），配一碟小菜。先逛小路、吃一兩款小吃，飲比之後不再加點。\n【預約】不用預約；想穩陣用 TableCheck 訂吧枱（要輸入信用卡）。\n【實用】Feb 10（三）全館營業。全席禁煙；戶外有吸煙處，避開即可。坐「酒藏」吧枱。附近有小神社，只經過、不參拜。\n【備案】出發前一週再核實；如室內可吸煙，就改去鳥清本店（鳥せい 本店）：步行約 4 分鐘，山本本家酒藏改建，坐吧枱點神聖生原酒（¥520 起）配燒鳥；全席禁煙，吸煙室分開；星期一休。",
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
      "note": "【上車】京阪中書島站 2 號月台，特急往淀屋橋。\n【轉車】天滿橋轉谷町線 1 號月台，往八尾南 2 個站。\n【下車】谷町六丁目站，步行約 5 分鐘。\n【車資】IC ¥650。\n【備案】特急約 10–15 分鐘一班，晚餐順延即可。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，不用趕指定班次",
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
      "note": "【Tabelog】3.60\n【攻略】一人坐吧枱：招牌蓮藕饅頭或釜飯，配一合燙酒。\n【預約】Tabelog 網上只訂座位，不訂套餐；約 Dec 中旬開放。\n【實用】單點限 2 小時；全席禁煙（吸煙室不明）。\n【備案】Ponshutagram（ポン酒タグラム）（谷町六丁目，只訂座位）。",
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
      "note": "【上車】步行約 5 分鐘到谷町六丁目站，2 號月台，谷町線往大日。\n【下車】谷町四丁目站 4 號出口，步行約 4 分鐘回酒店。\n【車資】IC ¥190。\n【備案】天氣好步行約 15 分鐘回酒店。",
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
      "note": "【攻略】先喝水休息再泡湯；今晚不再外出。\n【實用】浴場不可帶食物和酒；有紋身不可入浴。",
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
      "note": "【上車】谷町四丁目站 2 號月台，谷町線往大日。\n【下車】中崎町站，步行約 5 分鐘。\n【車資】IC ¥240。\n【備案】約 5–7 分鐘一班。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，不用趕指定班次",
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
      "note": "【攻略】一人經營的私人香薰沙龍，用日本產精油 Kaorito（かおりと）；選 60 分鐘精油按摩（附碳酸乾式頭療），問店主試哪幾款日本精油。\n【預約】Square 網上預約 10:15。",
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
      "note": "【上車】沿中崎町小路向東。\n【下車】約 6 分鐘到今雪（神山町）。\n【車資】免費。\n【備案】下雨撐傘，路程很短。",
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
      "note": "【Tabelog】3.73（烏冬 WEST 百名店）\n【攻略】招牌讚岐烏冬冷熱都得，配一杯日本酒。\n【預約】Tabelog 網上「只訂座位」11:55 吧枱 1 位；每人一碗烏冬＋一杯飲品；遲到 15 分鐘自動取消；約 Dec 中旬開放。\n【實用】不定休，Feb 11 假期營業與否看當月休息日；全席禁煙（吸煙室不明）。\n【備案】梅田 釜竹烏冬（梅田 釜たけうどん）（見靈感池）。",
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
      "id": "trp_d5_34",
      "day": 5,
      "time": "12:50",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "前往淺野日本酒店（步行）",
      "cityId": "osaka",
      "address": null,
      "addressLocal": null,
      "coords": [
        34.703,
        135.5061
      ],
      "tags": [
        "步行"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】由今雪走到神山交差點。\n【下車】約 2 分鐘到扇町通淺野日本酒店。\n【車資】免費。\n【備案】下雨撐傘走一小段。",
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
        "to": "淺野日本酒店 UMEDA",
        "fromEventId": null,
        "toEventId": null,
        "operator": null,
        "line": null,
        "durationMin": 2,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "id": "evt_d5_35",
      "day": 5,
      "time": "12:55",
      "timeHint": "afternoon",
      "type": "food",
      "title": "淺野日本酒店 UMEDA（浅野日本酒店 UMEDA）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區太融寺町2-17 太融寺大廈 1 樓",
      "addressLocal": "大阪府大阪市北区太融寺町2-17 太融寺ビル 1F 浅野日本酒店 UMEDA",
      "coords": [
        34.7022,
        135.5053
      ],
      "tags": [
        "清酒",
        "飲比",
        "全席禁煙"
      ],
      "moodColor": "#A0785A",
      "note": "【今次】立飲試飲＋買酒。\n【攻略】約 150 款純米酒幾乎都可試：先點利酒套組（3 款＋1 碟小食，¥720 起），再指冰櫃揀（45ml ¥330 起）；喜歡就買四合瓶。\n【預約】一人直接去；想穩陣用 Tabelog 網上訂，約 Dec 中旬開放。\n【實用】Feb 11 營業；每人最少一杯；全席禁煙，沒有吸煙室；可刷恒生 travel+ 卡。大廈名借用附近寺院名，店本身與寺院無關。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "11:00–23:00（L.O. 22:40）；Dec 31–Jan 3 休",
      "price": "利酒套組 ¥720 起；45ml ¥330 起（約 ¥1,000–2,000，估算）",
      "website": "https://tabelog.com/osaka/A2701/A270101/27082007/",
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
      "id": "trp_d5_36",
      "day": 5,
      "time": "14:00",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "前往中崎町（步行）",
      "cityId": "osaka",
      "address": null,
      "addressLocal": null,
      "coords": [
        34.7022,
        135.5053
      ],
      "tags": [
        "步行"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】沿扇町通旁小路向北。\n【下車】約 10 分鐘到中崎二丁目長屋一帶。\n【車資】免費。\n【備案】下雨坐谷町線東梅田 → 中崎町 1 個站。途經小神社，只經過、不參拜。",
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
        "from": "淺野日本酒店 UMEDA",
        "to": "中崎町",
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
      "id": "evt_d5_37",
      "day": 5,
      "time": "14:10",
      "timeHint": "afternoon",
      "type": "sight",
      "title": "中崎町",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區中崎 1–3 丁目一帶",
      "addressLocal": "大阪府大阪市北区中崎2丁目",
      "coords": [
        34.7089,
        135.5064
      ],
      "tags": [
        "長屋",
        "散步",
        "老街"
      ],
      "moodColor": "#6B7F7A",
      "note": "【今次】中崎町長屋小巷＋天五中崎通商店街。\n【攻略】戰火倖存的木造長屋改成小咖啡店、雜貨店；看格子門、盆栽、舊招牌，再向東走進商店街到天神橋筋。\n【實用】免費；小店多數中午後才開。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "街道全日開放；小店約 12:00 後營業（各店不同）",
      "price": "免費",
      "website": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d5_38",
      "day": 5,
      "time": "14:45",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "前往天滿市場（步行）",
      "cityId": "osaka",
      "address": null,
      "addressLocal": null,
      "coords": [
        34.7089,
        135.5064
      ],
      "tags": [
        "步行"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】沿天五中崎通商店街向東到天神橋筋五丁目。\n【下車】再向東南，約 13 分鐘到天滿市場。\n【車資】免費。\n【備案】下雨沿天神橋筋有蓋路段走。",
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
        "from": "中崎町",
        "to": "天滿市場",
        "fromEventId": null,
        "toEventId": null,
        "operator": null,
        "line": null,
        "durationMin": 13,
        "stopCount": null,
        "liveApi": null
      }
    },
    {
      "id": "evt_d5_39",
      "day": 5,
      "time": "15:00",
      "timeHint": "afternoon",
      "type": "shop",
      "title": "天滿市場（ぷららてんま）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區池田町3-1",
      "addressLocal": "大阪府大阪市北区池田町3-1 天満市場（ぷららてんま）",
      "coords": [
        34.7068,
        135.5135
      ],
      "tags": [
        "市場",
        "昆布",
        "帶備現金"
      ],
      "moodColor": "#8C8378",
      "note": "【今次】延續「天下的廚房」（天下の台所）的本地市場，遊客少。\n【攻略】逐檔看鮮魚、乾貨；老店天滿小倉屋的昆布輕身好帶。\n【實用】Feb 11 營業；部分小店傍晚早收，16:30 前逛；帶現金。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "大樓 Jan 1–4 休；各店約 08:00–18:00（各店不同）",
      "price": "免費入場；按貨品標價",
      "website": "https://www.tenmaichiba.com/",
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d5_40",
      "day": 5,
      "time": "15:40",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "前往天神橋筋四丁目（步行）",
      "cityId": "osaka",
      "address": null,
      "addressLocal": null,
      "coords": [
        34.7068,
        135.5135
      ],
      "tags": [
        "步行"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】由天滿市場向西。\n【下車】約 5 分鐘到天神橋筋四丁目。\n【車資】免費。\n【備案】下雨撐傘即可。",
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
        "from": "天滿市場",
        "to": "天神橋筋四丁目",
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
      "id": "evt_d5_11",
      "day": 5,
      "time": "15:45",
      "timeHint": "afternoon",
      "type": "sight",
      "title": "天神橋筋商店街",
      "cityId": "osaka",
      "address": "日本大阪府大阪市北區天神橋 4–6 丁目（天神橋筋商店街北段）",
      "addressLocal": "大阪府大阪市北区天神橋4丁目〜6丁目 天神橋筋商店街",
      "coords": [
        34.7046,
        135.5117
      ],
      "tags": [
        "散步",
        "商店街",
        "清酒"
      ],
      "moodColor": "#8C8378",
      "note": "【今次】天四 → 天六散步。\n【攻略】只走北段四至六丁目，街坊味重；可樂餅、玉子燒淺嚐（留肚晚餐），可買乾貨、漬物、廚具小物。\n【清酒】可選小站：稻田酒店（見靈感池）立飲區有開就喝一兩杯；假日營業不確定，只收現金，沒開照逛。\n【實用】小店多只收現金。",
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
      "id": "trp_d5_41",
      "day": 5,
      "time": "17:20",
      "timeHint": "evening",
      "type": "transport",
      "title": "前往黑兔食堂（步行）",
      "cityId": "osaka",
      "address": null,
      "addressLocal": null,
      "coords": [
        34.7098,
        135.5119
      ],
      "tags": [
        "步行"
      ],
      "moodColor": "#2A7F7A",
      "note": "【上車】由天神橋筋六丁目一帶沿天神橋筋向南。\n【下車】約 5 分鐘到天神橋五丁目。\n【車資】免費。\n【備案】下雨走商店街有蓋路段。",
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
        "from": "天神橋筋六丁目",
        "to": "黑兔食堂",
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
      "note": "【Tabelog】3.68（居酒屋 WEST 百名店 2025、2026）\n【攻略】中華技法配清酒；坐吧枱點當日小菜，請店員配酒。\n【預約】Tabelog 網上訂 17:30 吧枱 1 位；約 Dec 中旬開放，假期晚上一開放就訂。\n【實用】Feb 11 營業；全席禁煙（店外吸煙）。",
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
      "note": "【上車】步行約 5 分鐘到天神橋筋六丁目站，1 號月台，谷町線往八尾南。\n【下車】谷町四丁目站 4 號出口，步行約 4 分鐘回酒店。\n【車資】IC ¥240。\n【備案】的士回酒店約 15 分鐘。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，不用趕指定班次",
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
      "note": "【攻略】內湯＋露天壺湯＋桑拿，之後在 13 樓湯上處休息；今晚不再外出。\n【實用】浴場不可帶食物和酒；有紋身不可入浴。",
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
      "note": "【上車】谷町四丁目站 2 號月台，谷町線往大日 3 個站到東梅田。\n【轉車】步行約 6 分鐘到 JR 大阪站 5 號月台，JR 神戶線新快速往姬路。\n【下車】JR 三之宮站西口，向南步行約 10 分鐘到舊居留地江戶町。\n【車資】IC ¥660。\n【備案】坐 JR 神戶線快速，晚 15 分鐘也不影響午餐。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，不用趕指定班次",
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
      "note": "【今次】陳列室直接比較單顆珍珠（ルース）和整條連材（連材）；可以只看、只問、只報價。\n【攻略】參考價：Akoya 耳夾 ¥7,700–8,800、Akoya 戒指約 ¥14,300–16,500、7.5–8mm Akoya 項鏈連耳環約 ¥153,450。\n【攻略】防假貨：①Akoya（あこや）正圓、光澤（テリ）強；貝殼粉核仿珠（貝パール）、棉珠（コットンパール）、仿製品（イミテーション）都不是真珠。②「花珠」只認獨立機構的鑑別書。③問珠層厚度（巻き），看鑽孔邊有沒有翹皮。④「無調色」較貴。⑤耳環兩顆要配對。⑥看清 K18、Pt900 等刻印。⑦收據寫明種類、mm、金屬。\n【日文】「これはあこや真珠ですか？淡水ですか？」（是 Akoya 還是淡水？）；「鑑別書はありますか？」（有鑑別書嗎？）；「巻きは厚いですか？」（珠層厚嗎？）；「左右のバランスを見せてください」（請讓我看左右是否配對）；「免税できますか？」（可以免稅嗎？）\n【實用】Feb 12（五）營業；有英文服務；可刷恒生 travel+ 卡。退稅：出示護照、先付含稅價，離境時在關西機場寄艙前到海關確認；珍珠放手提。入口不顯眼，認住東町・江戶町大廈 6 樓。\n【備案】再比較：SHINYU SHOP、PELMOIR（見靈感池）。",
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
      "note": "【上車】由大廈門口沿舊居留地向西，經大丸神戶店。\n【下車】約 12 分鐘到元町通 1 丁目。\n【車資】免費。\n【備案】下雨走大丸和元町商店街有蓋路段。途經小神社，只經過、不參拜。",
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
      "note": "【Tabelog】3.68（洋食 WEST 百名店 2025）\n【攻略】1923 年創業的神戶洋食：炸牛排（ビフカツ）或燉牛舌，坐吧枱看鐵板。\n【預約】Tabelog 網上只訂座位 11:30、1 位；約 Dec 中旬開放，名額少，一開放就訂。\n【實用】另收 10% 服務費；Feb 休息日約前月底公告；全席禁煙（吸煙室不明）。\n【備案】Propeller 牛扒（見靈感池；11:00 入座，要 10:50 前離開陳列室）。",
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
      "note": "【今次】「大梵高展：阿爾勒的吊橋」（大ゴッホ展 アルルの跳ね橋），第 II 期晚年作品；今日留足 4 小時。\n【攻略】必看《阿爾勒的吊橋》（約 70 年來首次在日本展出）、《夜間普羅旺斯的鄉間小路》、《約瑟夫．魯蘭肖像》、《悲傷的老人（在永恆之門）》、《盛開的栗樹》。\n【預約】e-tix 預售票 ¥2,600，賣到 Feb 5 23:59（日本時間）；之後當日票 ¥2,800。Feb 12 是平日，不用預約。\n【實用】Feb 12（五）開到 20:00；14:00 前後最多人，中段可坐館內休息區。1935 年舊橫濱正金銀行大樓，入館前看一眼。",
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
      "note": "【今次】春節祭（Feb 7、Feb 11–14, 2027）。\n【攻略】看舞獅採青和舞台表演；春節小吃淺嚐即止，留肚晚餐。\n【實用】免費；春節祭期間人多，慢行、手袋放前面；當日節目約 Jan 公佈。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "春節祭期間，節目時間約 Jan 公布",
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
      "note": "【上車】由南京町廣場向北，經元町商店街、JR 元町站東口。\n【下車】約 15 分鐘到北長狭通 2 丁目 TSK 三宮大廈 4 樓。\n【車資】免費。\n【備案】改去稻妻的話，由南京町約 5–7 分鐘。",
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
      "note": "【Tabelog】3.64（居酒屋 WEST 百名店 2024–2026）\n【攻略】兵庫地酒 150 款以上：點刺身五點和冬季播州關東煮，請店員配酒，和明天灘五鄉對照。\n【預約】Tabelog 網上訂 18:30 吧枱 1 位；約 Jan 15 開放。\n【實用】席料 ¥500；全席禁煙（吸煙室不明）。\n【備案】稻妻（見靈感池）。",
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
      "note": "【上車】步行約 8 分鐘到 JR 三之宮站，JR 神戶線新快速往大阪。\n【轉車】大阪站步行約 10 分鐘到東梅田 1 號月台，谷町線往八尾南 3 個站。\n【下車】谷町四丁目站 4 號出口，步行約 4 分鐘回酒店。\n【車資】IC ¥660。\n【備案】阪急神戶三宮 → 大阪梅田（IC ¥330）再轉谷町線；或大阪站乘的士約 10–15 分鐘。出發前看 Feb 12 尾班車。",
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
      "note": "【攻略】喝過酒先喝水休息；想泡湯就明早再泡。\n【實用】浴場不可帶食物和酒；有紋身不可入浴。",
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
      "note": "【出門前】今日試飲多，先在 KOHYO 買個飯糰墊胃。\n【上車】谷町四丁目站 2 號月台，谷町線往大日，坐前中段車廂。\n【轉車】東梅田站內步行約 6 分鐘到阪神大阪梅田 2 號月台，阪神本線特急往須磨浦公園。\n【下車】魚崎站，步行約 10 分鐘。\n【車資】IC ¥540。\n【備案】特急約 10 分鐘一班。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，不用趕指定班次",
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
      "note": "【攻略】生酛辛口；看國家重要有形民俗文化財的釀酒工具，試季節生原酒；記念館限定「奉献」「菊絵徳利」適合做手信。\n【額外】藏開往年在 Feb 第一個星期六；若 Dec 公佈改在 Feb 13，就順道參加。\n【實用】Feb 13（六）照開。",
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
      "note": "【上車】由菊正宗記念館向南。\n【下車】約 7 分鐘到浜福鶴吟釀工房（魚崎南町）。\n【車資】免費。\n【備案】下雨在記念館門口截的士約 3 分鐘。",
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
      "note": "【攻略】隔玻璃看蒸米、製麴、榨酒，Feb 是旺季；入口免費試生酒，付費區比較吟釀、大吟釀；可買工房限定秘藏酒。\n【實用】免費、不用預約；Feb 13（六）照開。",
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
      "note": "【上車】步行約 8 分鐘到阪神魚崎站 1 號月台，快速急行或特急往大阪梅田。\n【下車】阪神西宮站，向南步行約 20 分鐘，或站前巴士到「交通公園前」。\n【車資】IC ¥200。\n【備案】人多或下雨乘的士約 5 分鐘。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，不用趕指定班次",
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
      "note": "【今次】午餐；白鹿一年一度「西宮藏開」（往年 Feb 第 2 個星期六）。\n【攻略】有料試飲當日限定無濾過生原酒；午餐在攤位吃壽司、粕汁、出汁卷蛋。\n【實用】免費入場；只收現金，帶散紙和保冷袋；13:00 後人較少。2027 年日期約 Dec 中旬公佈。戶外吸煙安排未知，有煙就去 4 分鐘外全店禁煙的白鹿 Classics 暫避。\n【備案】藏開不在 Feb 13、取消或 2027 年主題不合：酒林（さかばやし）御影膳 13:15（見靈感池）。",
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
      "note": "【上車】由藏開會場向北。\n【下車】約 10 分鐘到鞍掛町酒博物館。\n【車資】免費。\n【備案】下雨或酒袋重就截的士約 3 分鐘。",
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
      "note": "【攻略】明治酒藏改建的酒蔵館，看木桶、酒槽，明白西宮「宮水」和灘酒的關係；藏開後在這裏慢慢坐。\n【實用】共通券 ¥500；¥100 退還式儲物櫃可放酒袋；門票可刷卡就用卡，另帶現金。",
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
      "note": "【攻略】即場入瓶（量り売り）原酒只在這裏有；另有直營店限定「西宮郷」系列。下午只買不喝。\n【實用】全店禁煙，沒有吸煙室。",
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
      "note": "【上車】步行約 15 分鐘到阪神西宮站 2 號月台，直通特急或特急往大阪梅田（月台看站內顯示）。\n【下車】阪神大阪梅田，經地下街向南步行約 10 分鐘；17:55 前到店。\n【車資】IC ¥280。\n【備案】酒袋重就截的士到站；阪神停駛就乘的士到 JR 西宮，JR 神戶線快速 → 尼崎轉 JR 東西線到北新地（IC ¥320）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "約 10 分鐘一班",
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
      "note": "【Tabelog】3.72\n【攻略】8 座吧枱，18:00 一齊開始，約 20:15 完；選日本酒配對（ペアリング）¥29,000（8 款約 2 合）。\n【預約】TableCheck 網上訂 1 位；約 Dec 15, 2026 18:00（日本時間）開放，一開放就訂；登記信用卡作預先授權。取消費 Feb 10 起 50%、Feb 11 起 70%、Feb 12 起 100%；遲到 15 分鐘當取消。訂前看 Feb 13 有沒有休息。\n【實用】填過敏資料；不搽濃烈香水；smart casual；全席禁煙（吸煙室不明）。\n【備案】燒鳥 Sumiemon（見靈感池）；再訂不到才去玄盛（見靈感池）。",
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
      "note": "【上車】步行約 8 分鐘到東梅田站 1 號月台，谷町線往八尾南。\n【下車】谷町四丁目站 4 號出口，步行約 4 分鐘回酒店。\n【車資】IC ¥240。\n【備案】北新地截的士約 15 分鐘。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，不用趕指定班次",
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
      "note": "【攻略】試飲加配對晚餐，先喝水休息半小時；泡短一點，或明早再泡。\n【實用】浴場不可帶食物和酒；有紋身不可入浴。",
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
      "time": "08:00",
      "timeHint": "morning",
      "type": "rest",
      "title": "Dormy Inn 大阪谷町 Lounge",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區內本町2-1-9（Dormy Inn 大阪谷町）",
      "addressLocal": "大阪府大阪市中央区内本町2-1-9 ドーミーイン大阪谷町 1F",
      "coords": [
        34.6835,
        135.5139
      ],
      "tags": [
        "咖啡",
        "早餐"
      ],
      "moodColor": "#9AA8A3",
      "note": "【今次】早餐咖啡，08:30 出門。\n【攻略】1 樓 Lounge 免費咖啡；想泡湯就 07:30 快泡 20 分鐘。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "Lounge 免費咖啡 06:00–11:00",
      "price": "住客免費",
      "website": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
    },
    {
      "id": "trp_d8_41",
      "day": 8,
      "time": "08:30",
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
      "note": "【上車】谷町四丁目站 2 號月台，谷町線往大日 3 個站到東梅田。\n【轉車】步行 8–10 分鐘到阪急大阪梅田 4・5 號月台，寶塚線急行 5 個站到池田（約 18 分鐘）。\n【下車】池田站東口，步行約 5 分鐘。\n【車資】IC ¥520。\n【備案】坐寶塚線準急或普通車，多約 5–10 分鐘。",
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
      "id": "evt_d8_40",
      "day": 8,
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
      "note": "【今次】安藤百福發明即食麵的紀念館；免費入場，09:20 到門口排隊。\n【攻略】入館先領 My CUPNOODLES Factory（マイカップヌードルファクトリー）號碼票（先到先得），設計杯身、揀 4 款配料，做一個自己的杯麵（約 45 分鐘）；其餘時間看發明館和杯麵隧道。不做雞湯拉麵工房。\n【實用】My CUP ¥500，用售票機付現金；館內沒有儲物櫃（阪急池田站閘外有）；全場禁煙。",
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
      "id": "trp_d8_42",
      "day": 8,
      "time": "11:35",
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
      "note": "【上車】阪急池田站 1 號月台，坐 1 個站到川西能勢口。\n【轉車】經天橋步行約 7 分鐘到 JR 川西池田站，JR 寶塚線往大阪，普通 2 個站（快速 1 個站）到伊丹。\n【下車】JR 伊丹站，步行約 5 分鐘。\n【車資】IC ¥350。\n【備案】阪急經十三、塚口轉伊丹線（IC ¥290，約 40 分鐘）；或的士約 ¥2,500–3,000。",
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
      "id": "evt_d8_43",
      "day": 8,
      "time": "12:15",
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
      "note": "【Tabelog】3.49\n【攻略】酒藏梁柱下的酒藏餐廳：點 KONISHI 精釀啤酒 4 杯飲比（¥1,150）配白酒煮青口，或一杯白雪清酒。\n【預約】Gurunavi（ぐるなび）「只訂座位」（席のみ），1 名起；Feb 14 的位約 Nov 16 開放；當日取消每位 ¥3,000，前一日取消免費。若白雪藏祭（約 Jan 上旬公佈）在 Feb 14 就一定要訂。\n【實用】午市 14:00 前落單；全席禁煙（吸煙處在飲食區外）；可刷 VISA、Master、JCB、AMEX。\n【備案】稻川風味（いながわ風味）（見靈感池）。",
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
      "id": "evt_d8_22",
      "day": 8,
      "time": "13:30",
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
      "note": "【今次】小西酒造「白雪」：商店試飲＋買酒，13:30–15:00；2 樓資料館今次略過。\n【攻略】伊丹是「諸白」清酒發祥地之一；商店有料試飲藏元限定酒和精釀啤酒，揀一兩支常溫可放的加熱殺菌酒（火入れ）四合瓶，不買要冷藏的生酒；之後沿門外石板酒藏通慢行，看老酒藏白牆。\n【實用】Feb 14（日）照開；白雪藏祭（白雪蔵まつり）可能在 Feb 14（約 13,000 人），約 Jan 上旬公佈。\n【備案】白雪藏祭如在 Feb 14：鏡開、記念枡，攤檔只收現金。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "商店 10:00–18:00（Sep 9, 2026 起）；逢星期二休",
      "price": "試飲約 ¥1,500（估算）",
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
      "time": "15:00",
      "timeHint": "afternoon",
      "type": "transport",
      "title": "前往阪急伊丹站大樓（步行）",
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
      "note": "【上車】由長壽藏門口沿石板酒藏通向西。\n【下車】約 6 分鐘到阪急伊丹站大樓（伊丹 Reita）1 樓。\n【車資】免費。\n【備案】下雨撐傘慢行；酒袋重就走慢一點。途經路邊地藏，只經過、不參拜。",
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
        "to": "阪急伊丹站大樓",
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
      "id": "evt_d8_31",
      "day": 8,
      "time": "15:10",
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
      "note": "【今次】阪神老牌高級超市：買手信和明早麵包。\n【攻略】自家品牌果醬、醬汁、餅乾輕身好帶；晚餐 18:00，現在只買不吃；不買重物。\n【實用】不買要冷藏的；液體回酒店放寄艙。上 3 樓就是阪急伊丹站。",
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
      "time": "15:50",
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
      "note": "【上車】阪急伊丹站（大樓 3 樓，始發），伊丹線往塚口。\n【轉車】塚口轉阪急神戶本線往大阪梅田；步行約 10 分鐘到東梅田 1 號月台，谷町線往八尾南 4 個站。\n【下車】谷町六丁目站 4 號出口，步行約 3 分鐘到道勝café。\n【車資】IC ¥480。\n【備案】酒袋重就由大阪梅田乘的士到谷町六丁目（約 15 分鐘）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "班次頻密，不用趕指定班次",
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
      "id": "evt_d8_46",
      "day": 8,
      "time": "16:40",
      "timeHint": "afternoon",
      "type": "food",
      "title": "谷町六丁目 道勝咖啡（谷町六丁目 道勝café）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區谷町6-4-20",
      "addressLocal": "〒542-0012 大阪府大阪市中央区谷町6丁目4-20",
      "coords": [
        34.6736,
        135.5155
      ],
      "tags": [
        "古民家咖啡",
        "休息"
      ],
      "moodColor": "#A0785A",
      "note": "【Tabelog】3.46\n【今次】晚餐前坐低休息：四軒長屋改建的古民家咖啡店，滿室彩色玻璃，後面有坪庭。\n【攻略】坐 1 樓坪庭前；點道勝特調咖啡（大馬克杯）配北海道軟雪糕，晚餐前不點芭菲。\n【預約】不用預約，直接入座。\n【實用】全席禁煙；可刷卡；17:00 前落單。\n【備案】不定休：出發前一週看官方 Instagram；休息就直接逛商店街。",
      "phone": "+81-6-6796-9017",
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "10:00–17:30（L.O. 17:00）；星期二至 16:00；不定休",
      "price": "咖啡 ¥450 起；季節芭菲 ¥2,000",
      "website": "https://michimasacafe.com/",
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
      "id": "evt_d8_47",
      "day": 8,
      "time": "17:25",
      "timeHint": "evening",
      "type": "sight",
      "title": "空堀商店街（からほり商店街）",
      "cityId": "osaka",
      "address": "日本大阪府大阪市中央區谷町6丁目 空堀商店街（谷町筋以東）",
      "addressLocal": "大阪府大阪市中央区谷町6丁目 空堀商店街",
      "coords": [
        34.6737,
        135.5175
      ],
      "tags": [
        "老街",
        "散步"
      ],
      "moodColor": "#6B7F7A",
      "note": "【今次】晚餐前散步：戰火中倖存的老街，長屋店面和坂道。\n【攻略】由道勝café 向東過谷町筋，走商店街東段，到五十間筋（有蓋商店街盡頭）折返；慢慢看東段的長屋小店，只逛不買重物。\n【實用】免費；之後沿谷町筋向北到長堀通，向東約 2 分鐘（谷町六丁目站 6 號出口旁）到 Ponshutagram。\n【備案】下雨就留在咖啡店多坐一陣。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "隨時；各店時間不一",
      "price": "免費",
      "website": null,
      "cost": null,
      "status": "pending",
      "source": "ai",
      "transport": null
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
      "note": "【Tabelog】3.59\n【今次】最後一晚的清酒總結。\n【攻略】16 座吧枱，每月換產地主題（約 30–40 款）；點名物下酒菜拼盤，配三四杯小杯比較。\n【預約】Tabelog 網上訂 18:00–18:30 入座 1 位，只訂座位；約 Dec 中旬開放。\n【實用】席料 ¥1,000（包一杯酒＋一款小菜）；全席禁煙（門外有煙灰缸）。\n【備案】和 Demekin（和デメキン）（星期日營業，只訂座位）；或 Imanara（見靈感池）。",
      "phone": null,
      "whatsapp": null,
      "line": null,
      "messenger": null,
      "openHours": "18:00–24:00（L.O. 23:30；星期二至 22:30）；無定休",
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
      "note": "【上車】步行約 2 分鐘到谷町六丁目站 2 號月台，谷町線往大日。\n【下車】谷町四丁目站 4 號出口，步行約 4 分鐘回酒店。\n【車資】IC ¥190。\n【備案】天氣好步行約 15 分鐘回酒店。",
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
      "note": "【攻略】桑拿＋冷水池＋外氣浴兩輪；之後回房用防震包裝包好清酒、量行李重量；今晚不再外出。\n【實用】浴場不可帶食物和酒；有紋身不可入浴。",
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
      "note": "【攻略】最後一次朝湯（開到 10:00），泡完喝乳酸菌飲品，再到 Lounge 拿杯咖啡。\n【實用】浴場不可帶食物和酒；有紋身不可入浴。",
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
      "note": "【攻略】退房前檢查清酒包裝和行李重量；行李重就請前台叫的士到近鐵上本町（約 ¥1,000）。",
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
      "note": "【上車】谷町四丁目站 4 號出口（帶行李找升降機），1 號月台，谷町線往八尾南。\n【下車】谷町九丁目站，經地下通道約 5 分鐘到近鐵百貨。\n【車資】IC ¥190。\n【備案】酒店乘的士約 10 分鐘。",
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
      "note": "【攻略】B1 和洋酒賣場最後補買奈良、大阪地酒；要防震包裝（緩衝材で包んでください）；退稅帶護照。\n【實用】行李可放大阪上本町站投幣儲物櫃；11:30 前到 2 樓巴士總站。",
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
      "note": "【上車】近鐵上本町 2 樓巴士總站 UH1，售票機買單程票；不設預約，先到先上，大件行李放車底。\n【下車】第 1 航廈國際線出發層。\n【車資】成人 ¥1,800。\n【備案】谷町九丁目 → 天王寺轉 JR 特急 HARUKA 或關空快速。",
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
      "note": "【攻略】手提清酒要在出境保安後買：KIX DUTY FREE 有機場限定關西地酒，例如梅乃宿桐箱純米大吟釀 ¥3,600、大門機場限定純米大吟釀 ¥4,000、莊之鄉（荘の郷）大吟釀金標 ¥8,700（免稅價，以當日為準）；有試飲就試。可在出發前 25 日至 3 小時網上預訂，到櫃枱付款取貨。\n【實用】直飛香港，免稅酒直接手提；保留收據。HK Express 手提合共 7kg，免稅酒計入，超重要在閘口付費寄艙。保安前買的酒超過 100ml 要放寄艙。\n【其他手信】寄艙後、保安前：551 蓬萊豬肉包（出境區沒有）。出境後：關西三機場限定 Mukashin Kubomi（むか新 くぼみ）酥餅、Malebranche 茶之菓（茶の菓）、海鮮仙貝；都可手提。\n【入境香港】30% 或以下的酒類免稅；30% 以上烈酒每位 18 歲以上旅客免稅 1 公升，持香港身份證要離港滿 24 小時。",
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
      "note": "【Tabelog】3.02（樣本極少）\n【攻略】出境後的和食 food court：和牛、海鮮、季節定食，方便之選。\n【實用】可刷卡；全席禁煙（吸煙室不明）。",
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
      "note": "【攻略】先到海關確認退稅才寄艙，寄艙後就不能辦；珍珠放手提，買酒留到出境後。\n【登機流程】約 12:30 到第 1 航廈 4 樓 → 海關確認退稅（護照、免稅品、收據）→ HK Express 櫃位寄艙（12:15 開、14:15 截止）→ 保安及出境 → KIX DUTY FREE → 禁區午餐 → 14:30 前到閘口（14:45 關）。\n【實用】Nov 1, 2026 起免稅改退稅制：款項由店舖或代理退回；購物時登記退款方式（如恒生 travel+ 卡）；同一收據貨品要齊；每店每日滿 ¥5,000（不含稅）。回程建議加購 32kg（約 HK$430）。",
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
    "note": "【Tabelog】3.49\n【攻略】昭和風立食串炸，椰菜任吃：若雞、豬肉、蓮藕串，再試巨型大蝦串；醬汁共用，不可二度蘸。\n【備案】Feb 11 中崎町一帶想吃平價立食時。\n【實用】不設預約，一人最自然；可刷卡、IC 卡；全店禁煙（吸煙室不明）。",
    "type": "food",
    "cityId": "osaka",
    "address": "日本大阪府大阪市北區角田町9-20 新梅田食道街 1 樓",
    "addressLocal": "大阪府大阪市北区角田町9-20 新梅田食道街1F 串かつ専門店 松葉 総本店",
    "coords": [
      34.7035,
      135.4977
    ],
    "nearEventId": "evt_d5_35",
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
    "note": "【攻略】1922 年創業的蛋包飯（オムライス）發祥店，1950 年數寄屋造老屋座敷；點雞肉蛋包飯（チキンオムライス）和唐揚。\n【備案】Feb 8 和sai 沒位時：千日前線到難波再步行；一般席不設預約。\n【實用】店內全面禁煙（店外吸煙）。",
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
    "note": "【攻略】山中酒之店出身的女店主，米芝蓮 Bib Gourmand；60–70 款適合燙熱的西日本酒。點三款前菜（¥600）、炙燒鴨里脊，試生原酒熱燗配芝士。\n【備案】Feb 8 長堀訂不到時；沒有網上預約，16:00 開門時直接問一人吧枱位。\n【實用】全席禁煙（吸煙室不明）；可刷卡。",
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
    "note": "【攻略】名品展看奈良佛教美術；青銅器館免費。\n【備案】Feb 9 下雨時：Feb 6–Mar 14 有「新收藏品」特集；佛像館翻新閉館。",
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
    "id": "ins_010",
    "title": "Ojas spa 梅田店",
    "tag": "TIRED",
    "note": "【攻略】私人房乾式頭療（ドライヘッドスパ）75 分鐘，不用濕頭，做完直接出街。\n【備案】物差約不到時。",
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
    "note": "【Tabelog】3.77（烏冬 WEST 百名店 2024）\n【攻略】竹輪半熟蛋天婦羅冷汁烏冬（ちく玉天ぶっかけ）發祥店，點冷的。先在門外食券機買券（只收現金）再排隊，賣完即止。\n【備案】Feb 11 今雪沒位或休息時；Feb 11 營業；步行約 12 分鐘到淺野日本酒店。\n【實用】全席禁煙（吸煙室不明）。",
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
    "note": "【重點】每月 13 日的小型市集；只逛攤位，不參拜。\n【攻略】古道具、花和小物攤，街坊味重；找舊皮件、小物，帶現金和環保袋。\n【備案】Feb 13 未排入（開市時間未定、灘五鄉全日）。想去就 09:00 前後到（阪急梅田 → 十三 ¥170），逛 30 分鐘再由十三坐神戶本線到御影，菊正宗改最後一站。",
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
    "id": "ins_023",
    "title": "稻田酒店",
    "tag": "SHOP",
    "note": "【攻略】地酒、燒酎專門酒屋，附立飲區配關東煮；不用訂位，歡迎一人。\n【備案】Feb 11 天神橋筋散步的可選小站；Feb 11 假日營業不確定，Feb 初再查；休息就去 Eki Marché 山中酒之店（見靈感池）。\n【實用】立飲區只收現金；天神橋筋六丁目站步行約 3 分鐘。",
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
    "note": "【攻略】JR 大阪站的自助試飲機，常設 54 款；試完喜歡再買。\n【備案】Feb 12 早上在 JR 大阪站轉車時順路。\n【實用】JR 大阪站 1 樓櫻橋口附近。",
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
    "note": "【攻略】米芝蓮必比登店 Utsutsuyo（うつつよ）的立飲店，附設大阪市內首間濁酒醸造所（大阪どぶろく醸造所）；自家濁酒 ¥800 一杯，3 款套裝 ¥2,200，可買瓶外賣。\n【備案】Feb 10 晚餐後回酒店前想再喝一杯時；不設預約；谷町四丁目站 6 號出口步行約 5 分鐘。\n【實用】全席禁煙（吸煙室不明）；不收信用卡，用現金或 PayPay；暫時不定休。",
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
    "note": "【攻略】酒店隔鄰的鮮魚超市：刺身、壽司、關東煮和清酒做宵夜；傍晚後減價貼紙較多。",
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
    "note": "【攻略】營業到午夜的後備超市，有食品及酒；不接受 PiTaPa。\n【實用】堺筋本町站 3、6 號出口向南約 3 分鐘；酒店步行約 11 分鐘。",
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
    "note": "【Tabelog】3.37\n【攻略】50 款以上日本酒原價供應（新政、九平次、寫樂等）；連鎖居酒屋。\n【備案】Feb 14 Ponshutagram、和 Demekin 都沒位時：星期日 12:00 開，網上訂位，吃完步行回酒店。\n【實用】入場費 ¥540；遲到 15 分鐘沒通知會取消；全席禁煙（吸煙室不明）。",
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
    "note": "【攻略】大樓 8 樓天台天然溫泉：源泉湯、壺湯、岩風呂、寢湯。\n【備案】Feb 11 下午想改泡湯（代替淺野日本酒店）：今雪不要喝酒；扇町站坐堺筋線 1 個站到天神橋筋六丁目，再步行約 10 分鐘；泡完步行約 15 分鐘到黑兔食堂。\n【實用】假期大人 ¥1,000，毛巾另買，帶現金約 ¥1,650；全館禁煙；喝過酒、有紋身不可入浴；浴室不可用手機。附近有小神社，只經過、不參拜。出發前一個月查休館日。",
    "type": "rest",
    "cityId": "osaka",
    "address": "日本大阪府大阪市北區長柄西1-7-31",
    "addressLocal": "大阪府大阪市北区長柄西1-7-31 天然温泉 なにわの湯",
    "coords": [
      34.7154,
      135.5138
    ],
    "nearEventId": "evt_d5_13",
    "phone": "+81-6-6882-4126",
    "whatsapp": null,
    "line": "@911ukflz",
    "messenger": null,
    "openHours": "平日 10:00–翌日 01:00；週末及假期 08:00–翌日 01:00（最後入場 24:00）",
    "price": "假期大人 ¥1,000；毛巾 ¥150、浴巾 ¥500",
    "website": "https://naniwanoyu.com/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_034",
    "title": "大阪中之島美術館",
    "tag": "RAINY",
    "note": "【重點】展覽「創作女性的 100 年」（つくる女性の100年，Jan 9–Mar 22）。\n【攻略】約 50 位日本女性作家（上村松園、草間彌生、小野洋子等），看一百年日本近代生活史；看完沿中之島河岸散步。\n【備案】Feb 11 下雨時代替中崎町散步：淺野日本酒店乘的士約 10 分鐘，看約 1.5 小時，再乘的士到天神橋筋四丁目。\n【預約】網上買票：前售 ¥1,700 賣到 Jan 8, 2027，之後 ¥1,900。\n【實用】Feb 11 照開。",
    "type": "sight",
    "cityId": "osaka",
    "address": "日本大阪府大阪市北區中之島4-3-1",
    "addressLocal": "大阪府大阪市北区中之島4-3-1 大阪中之島美術館",
    "coords": [
      34.6924,
      135.4914
    ],
    "nearEventId": "evt_d5_35",
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
    "id": "ins_036",
    "title": "Wayanpuri 大阪梅田店（ワヤンプリ）",
    "tag": "TIRED",
    "note": "【攻略】60 分鐘頭皮護理（診斷、毛孔清洗、頸膊），私人房。\n【備案】Feb 11 物差約不到時；Hot Pepper Beauty 網上預約。",
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
    "note": "【Tabelog】3.66（大阪燒 百名店 2025）\n【攻略】吧枱看鐵板，點招牌牛筋大阪燒。\n【備案】Feb 11 想吃平價大阪燒時：不設預約、只收現金，假日排隊長；吧枱 7 位。\n【實用】全席禁煙（吸煙室不明）；一人可坐吧枱。",
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
    "id": "ins_043",
    "title": "炸豬扒與葡萄酒 日月（トンカツとワイン 日月）",
    "tag": "FOOD",
    "note": "【Tabelog】4.06（炸豬扒百名店 2026）\n【攻略】6 座吧枱廚師發辦（おまかせ），不同部位分次上，配葡萄酒或日本酒。\n【備案】Feb 12 想吃隆重午餐時：11:30 那輪（¥5,900＋手續費 ¥390），才不影響梵高展；只用 OMAKASE 網上預約，約 Jan 1, 2027 12:00（日本時間）開放；4 日前起取消收 50%。\n【實用】全席禁煙，建築內沒有吸煙區。",
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
    "note": "【Tabelog】3.65（牛扒百名店 2025）\n【攻略】午市牛扒或漢堡扒定食，坐近鐵板。\n【備案】Feb 12 伊藤 Grill 訂不到時：午市只有 11:00、一人可訂，Tabelog 或 Hot Pepper 網上訂，約 Dec 中旬開放；12:15 吃完，步行約 8 分鐘到博物館。\n【實用】全席禁煙（吸煙室不明）。",
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
    "note": "【Tabelog】3.53\n【攻略】米農家經營的日本酒吧（バル）：網上限定日本酒配對套餐（日本酒ペアリングセット）¥2,980，配炭燒和自家米白飯。\n【備案】Feb 12 HINO 訂不到，或想留南京町久一點時：Tabelog 或 Hitosara（ヒトサラ）網上訂（店方寫 1–2 人坐吧枱）；約 Dec 中旬開放；JR 元町站步行 3 分鐘。\n【實用】全席禁煙（戶外有吸煙處）。",
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
    "note": "【Tabelog】3.50\n【攻略】河內鴨蕎麥或炭燒拼盤，配一兩杯日本酒；連鎖店。\n【備案】Feb 14 晚餐 Ponshutagram 訂不到時（同在谷町六丁目）：每日 17:00 開，Tabelog 或 Hot Pepper 網上訂座位，約 Dec 中旬開放；谷町六丁目站 3 號出口步行 1 分鐘。\n【實用】吧枱 10 座；全席禁煙（店外後院吸煙）。",
    "type": "food",
    "cityId": "osaka",
    "address": "日本大阪府大阪市中央區谷町6-2-21",
    "addressLocal": "大阪府大阪市中央区谷町6-2-21 炭と蕎麦と酒 今なら 谷町本店",
    "coords": [
      34.6741,
      135.5174
    ],
    "nearEventId": "evt_d8_14",
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
    "note": "【重點】藏開不在 Feb 13 或取消時的午餐（指定備案）。\n【Tabelog】3.48\n【攻略】御影膳（みかげ膳）¥3,500，加自家製手舀豆腐（¥680）和酒粕雪糕（¥500），配福壽生原酒。\n【備案】Hot Pepper 網上訂 13:15、1 名起（已開放訂位）；前一日 17:00 截止、15:00 起取消收全額。浜福鶴之後由魚崎坐特急到御影轉普通車到石屋川（IC ¥160），步行約 6 分鐘；下午接東明藏、白鶴，再由 JR 住吉經尼崎轉 JR 東西線到北新地（IC ¥410）。\n【實用】全席禁煙（吸煙室不明）。",
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
    "note": "【攻略】福壽藏元商店：免費試飲生酒和微發泡 FUKUJU KEG DRAFT，買藏元限定酒和酒粕。\n【備案】走酒林備案路線時午餐後順路。",
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
    "openHours": "10:00–18:30（Jan 1–3 休）",
    "price": "免費試飲",
    "website": "https://www.shushinkan.co.jp/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_049",
    "title": "白鶴酒造資料館",
    "tag": "TIME",
    "note": "【攻略】大正初年本店壹號藏改建：按洗米、蒸米、製麴、搾酒看真實工具；季節限定酒免費試一杯。\n【備案】走酒林備案路線時的下午點；免費，16:00 前入館；之後向北約 15 分鐘到 JR 住吉站。",
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
    "note": "【攻略】平價 Akoya 入門：¥1,000–3,000 的字母吊墜、細粒耳環做手信；先問是 Akoya 還是淡水。\n【備案】梵高展後、去南京町前有空就順路：三宮中心街 2 丁目，三宮站向西約 5 分鐘。\n【實用】英文服務不明，可指商品、用計算機；免稅現場問（免税できますか？）。",
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
    "note": "【重點】三重珍珠批發商直營（1 点から卸価格）；神戶沒有分店，只在大阪心齋橋。\n【攻略】作 Feb 12 神戶看珍珠的比價：8–8.5mm Akoya 項鏈 ¥74,800–96,800；同尺寸、同等級拿來比較 Pearl Pearl Kobe 的報價。\n【備案】神戶想換一間看：PELMOIR 或 SHINYU SHOP（見靈感池）。\n【實用】可辦免稅，流程現場問。",
    "type": "shop",
    "cityId": "osaka",
    "address": "日本大阪府大阪市中央區南船場3-3-28 1 樓",
    "addressLocal": "大阪府大阪市中央区南船場3-3-28 1F 三重真珠専門店 Mie Royal Pearl",
    "coords": [
      34.6767,
      135.5031
    ],
    "nearEventId": "evt_d6_23",
    "phone": "+81-80-2680-3763",
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
    "id": "ins_058",
    "title": "大阪水上巴士 Aqua Liner（アクアライナー）",
    "tag": "TIME",
    "note": "【重點】八軒家濱出發的大川周遊船，約 55 分鐘。\n【攻略】八軒家濱是江戶時代京都和大坂之間三十石船的碼頭；船經造幣局、大阪城一帶和中之島，坐着看大阪靠水運起家。\n【備案】Feb 11 天氣好時代替中崎町散步：谷町線到天滿橋；周遊船約每小時一班，最後一班 15:30。\n【預約】全部劃位；Feb 的船 Dec 1 起網上請求式預約（リクエスト予約），收到確認電郵才算訂到；開船前 2 日 23:59 前免費取消，之後收 30%，開船後收全額；天氣差或河水情況會停航。\n【實用】集合點：京阪天滿橋站西口售票處（B1，17 號出口附近），提前 15 分鐘到，出示 E-ticket 換船票。大人 ¥2,000；船內禁煙。Feb 停航日只有 Feb 3、Feb 4。",
    "type": "sight",
    "cityId": "osaka",
    "address": "日本大阪府大阪市中央區天滿橋京町 八軒家濱碼頭",
    "addressLocal": "大阪府大阪市中央区天満橋京町 八軒家浜船着場",
    "coords": [
      34.6903,
      135.5161
    ],
    "nearEventId": "evt_d5_11",
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "周遊船 10:30–15:30（約每小時一班）",
    "price": "周遊一圈大人 ¥2,000",
    "website": "https://suijo-bus.osaka/cruiselist/aqualiner/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_057",
    "title": "石挽十割蕎麥 玄盛 北新地本店（石挽き十割蕎麦 玄盛 北新地本店）",
    "tag": "FOOD",
    "note": "【Tabelog】3.49\n【攻略】石磨十割蕎麥：一兩款下酒菜（天婦羅、京鴨）配日本酒，冷蕎麥收尾；較大眾的店。\n【備案】Feb 13 第二備案（雅釀和燒鳥 Sumiemon 都訂不到）：北新地站步行約 1 分鐘；預算約 ¥3,000–4,000。\n【預約】Tabelog 網上只訂座位，17:15–19:00 時段、1 名；不選碗仔蕎麥（わんこそば）或半個室；約 Dec 中旬開放，沒網上名額就不去。\n【實用】全店禁煙（包括電子煙，吸煙室不明）；可刷恒生 travel+ 卡。",
    "type": "food",
    "cityId": "osaka",
    "address": "日本大阪府大阪市北區曾根崎新地1-10-6 北新地 Sirius 大廈 1–4 樓",
    "addressLocal": "大阪府大阪市北区曽根崎新地1-10-6 北新地シリウスビル 1〜4F 石挽き十割蕎麦 玄盛 北新地本店",
    "coords": [
      34.698,
      135.4975
    ],
    "nearEventId": "evt_d7_14",
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "星期一至五 11:30–14:30、17:30–翌日 03:30；星期六、日及假期 11:30–14:30、15:00–21:30（L.O. 21:00）",
    "price": "晚市預算 ¥3,000–3,999",
    "website": "https://tabelog.com/osaka/A2701/A270101/27104902/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_059",
    "title": "燒鳥 Sumiemon（焼き鳥すみえもん）",
    "tag": "FOOD",
    "note": "【Tabelog】3.62\n【攻略】京都銘柄雞京美白雞（京美白どり）炭火燒鳥，Apr 2025 開；點 7 串燒鳥＋沙律＋收尾的套餐（¥6,280，另收席料 ¥550）。U 字形吧枱看師傅燒。\n【備案】Feb 13 雅釀休息或訂不到時的首選：18:00 入座；訂不到改玄盛（見靈感池）。\n【預約】Tabelog 網上訂 Feb 13 18:00、1 名；日曆約 Nov 中旬至 Dec 中旬開放，沒網上名額就不去。\n【實用】20 個吧枱位；全席禁煙（吸煙室不明）；可刷恒生 travel+ 卡。Feb 13（六）營業。",
    "type": "food",
    "cityId": "osaka",
    "address": "日本大阪府大阪市北區曾根崎新地1-3-3 好陽大廈 1 樓",
    "addressLocal": "大阪府大阪市北区曽根崎新地1-3-3 好陽ビル 1F 焼き鳥すみえもん",
    "coords": [
      34.6973,
      135.4969
    ],
    "nearEventId": "evt_d7_14",
    "phone": "+81-6-6616-8683",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "星期一至六 18:00–23:00；星期日及假期休",
    "price": "套餐 ¥6,280＋席料 ¥550（約 ¥6,830，飲品另計）",
    "website": "https://tabelog.com/osaka/A2701/A270101/27148344/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_060",
    "title": "稻川風味（いながわ風味）",
    "tag": "FOOD",
    "note": "【Tabelog】3.20\n【攻略】十割蕎麥配天婦羅，阪急伊丹站旁的小店。\n【備案】Feb 14 長壽藏餐廳訂不到或太多人時的午餐：Tabelog 或 Hot Pepper 網上只訂座位，1 名起；Hot Pepper 前一日 17:00 截止；阪急伊丹站步行約 1 分鐘。\n【實用】只收現金；全席禁煙，沒有吸煙室。",
    "type": "food",
    "cityId": "osaka",
    "address": "日本兵庫縣伊丹市中央1-1-1 伊丹購物百貨 2 樓",
    "addressLocal": "兵庫県伊丹市中央1-1-1 伊丹ショッピングデパート 2F いながわ風味",
    "coords": [
      34.7807,
      135.4134
    ],
    "nearEventId": "evt_d8_43",
    "phone": "+81-90-3711-4539",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "10:00–18:00（L.O. 17:30）；沒有固定休息日",
    "price": "約 ¥1,000–2,000",
    "website": "https://tabelog.com/hyogo/A2803/A280306/28069586/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_061",
    "title": "漢字博物館（漢字ミュージアム）",
    "tag": "RAINY",
    "note": "【重點】Feb 10 備案：下雨或想加一間室內點時，代替白川南通和鴨川散步。\n【攻略】甲骨文、金文到日本假名和國字；2 樓有互動展示，香港人的漢字底子最易看出中日寫法分別。\n【實用】一之傳沿四條通步行約 3 分鐘；約 1 小時。出發前查 Feb 10 是否開館和當期企畫展。",
    "type": "sight",
    "cityId": "kyoto",
    "address": "日本京都府京都市東山區祇園町南側551",
    "addressLocal": "京都府京都市東山区祇園町南側551 漢字ミュージアム",
    "coords": [
      35.0033,
      135.7766
    ],
    "nearEventId": "evt_d4_33",
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "09:30–17:00（入場至 16:30）；逢星期一休",
    "price": "平日 ¥900",
    "website": "https://www.kanjimuseum.kyoto/",
    "status": "wishlist",
    "source": "ai"
  },
  {
    "id": "ins_062",
    "title": "伊丹老松酒造直賣所（伊丹老松酒造直売所）",
    "tag": "SHOP",
    "note": "【重點】只在營業日（星期一至六）：Feb 14（日）休息，今次不排。\n【攻略】1688 年創業、江戶時代將軍的「御免酒」；試飲比較伊丹酒淡麗偏辛，門口有釀酒地下水。\n【備案】改日再到伊丹時，由長壽藏沿酒藏通步行約 3 分鐘。",
    "type": "shop",
    "cityId": "osaka",
    "address": "日本兵庫縣伊丹市中央3-1-8",
    "addressLocal": "兵庫県伊丹市中央3-1-8 伊丹老松酒造 直売所",
    "coords": [
      34.7807,
      135.417
    ],
    "nearEventId": "evt_d8_22",
    "phone": "+81-72-782-2470",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "星期一至五 09:00–18:00；星期六 09:00–17:00；星期日及假期休",
    "price": "有料試飲約 ¥200 一杯",
    "website": "https://oimatsu.biz/",
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
      "退稅：帶護照（Nov 2026 起出境時退稅）"
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
      "淺野日本酒店：試飲後買四合瓶",
      "天滿市場、天神橋筋：帶備現金",
      "天神橋筋商店街小吃（少量，留肚晚餐）"
    ]
  },
  "6": {
    "shopping": [
      "梵高展預售票（e-tix，Feb 5 前買）",
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
      "杯麵博物館 My CUP：¥500 現金（硬幣）",
      "白雪藏祭：攤檔要帶現金",
      "清酒防震包裝（明早近鐵百貨上本町 B1 最後補買）",
      "保暖：圍巾、手套、暖包"
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
    "total": 258166,
    "currency": "JPY",
    "byCategory": {
      "hotel": 115600,
      "food": 115716,
      "transport": 13570,
      "ticket": 7780,
      "shop": 0,
      "other": 5500
    },
    "note": "日圓估算：酒店 Dormy Inn 大阪谷町 8 晚 ¥112,500（Oct 22, 2026 報價，房價會浮動；素泊含消費稅）＋宿泊稅 ¥1,900＋入湯稅 ¥1,200（入住時付）；早餐用 Lounge 免費咖啡；交通＝IC／巴士車資；門票＝入場、體驗、試飲；其他＝香薰按摩；購物未估。機票 HK$5,223＋行李約 HK$740 另計。"
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
