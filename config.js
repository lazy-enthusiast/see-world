// buildTime: 2026-11-27T10:53:29.386Z
// ============================================================
// Spectrum 岸上 Nov 25–28, 2026（候補預覽，未部署）
// 本檔給現 main 的 index.html／schema.json 使用，不依賴 PR 才加的時間欄
// 自訂文案或頁首常駐橫額（Worker 不能改 UI）。部署時由 Worker 在檔首加 // buildTime:。
// 舊大阪 config 仍在 versions/config/；本檔不要當可照表執行。
// 行程以核准 v2 為準；預約句以 Nov 15, 2026 官方複核為準。
// 船時 UTC+9（香港＋1小時），四港當地鐘相同。ふくや13:00、Songdo Kitchen 12:30已確認；勝鹿現場候位。福岡午餐改節ちゃんラーメン，未訂。
// 座標不填景點 pin。天氣依當日城市（鹿兒島／長崎／福岡／釜山）取 CITIES 座標與時區；不改行程標題，不把 DESTINATION.name 當天氣城市。
// ============================================================

const THEME_CONFIG = {
  accentColor: "#2E5344",
  accentText: "#F6F4EE",
  backgroundColor: "#F4F2EB",
  cardColor: "#E6E8E0",
  textColor: "#2A3330",
  textSubColor: "#3A4640",
  borderColor: "#C9CFC4",
  googleFontsUrl: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;600;700&family=Noto+Sans+KR:wght@400;600;700&family=Noto+Sans+TC:wght@400;600;700&display=swap",
  fontHeading: '"Noto Sans TC", "Noto Sans JP", "Noto Sans KR", sans-serif',
  fontBody: '"Noto Sans TC", "Noto Sans JP", "Noto Sans KR", sans-serif'
};

const CONFIG = {
  ui: {
    browserTitle: "海洋光譜號岸上行程",
    headerTitle: "海洋光譜號岸上行程",
    homeTimezone: "Asia/Hong_Kong",
    homeTimeLabel: "香港",
    shipTimezone: "Asia/Tokyo"
  },
  startDate: "2026-11-25",
  duration: 4,
  travelers: {
    type: "family",
    count: 3,
    note: "3 位成人，含父母。爸爸不吃蝦／蟹；媽媽不吃牛。全席禁煙。媽媽約走 30 分鐘平路或溫和下坡後休 5 分鐘；避上坡與長陡下坡。"
  },
  baseCurrency: "HKD",
  tripCurrency: "JPY"
};

const DESTINATION = {
  name: "海洋光譜號岸上行程",
  slug: "spectrum-shore",
  lat: 31.6,
  lon: 130.56,
  timezone: "Asia/Tokyo",
  currency: "jpy",
  currencyLabel: "JPY",
  baseCurrency: "HKD"
};

const CITIES = [
  { id: "kagoshima", name: "鹿兒島", lat: 31.6, lon: 130.56, timezone: "Asia/Tokyo", days: [1], color: "#3E5C4C" },
  { id: "nagasaki", name: "長崎", lat: 32.75, lon: 129.88, timezone: "Asia/Tokyo", days: [2], color: "#4A5963" },
  { id: "fukuoka", name: "福岡", lat: 33.59, lon: 130.4, timezone: "Asia/Tokyo", days: [3], color: "#5C5348" },
  { id: "busan", name: "釜山", lat: 35.18, lon: 129.08, timezone: "Asia/Seoul", days: [4], color: "#3D5348" }
];

const TRANSIT_CONFIG = { providers: [] };

const TRIP_INFO = {
  visa: {
    type: "岸上通關",
    number: null,
    note: "日本／韓國入境資格未在本輪岸上事實重核，出發前自行向主管機關確認。靠港不等於立刻能下船。夜宿在船上，岸上不另訂酒店，艙號不寫入。",
    expiry: null
  },
  flights: [],
  hotels: [],
  emergency: [
    { name: "日本警察", phone: "110" },
    { name: "日本救護／消防", phone: "119" },
    { name: "日本觀光局訪日旅客熱線", phone: "+81-50-3816-2787" },
    { name: "韓國警察", phone: "112" },
    { name: "韓國救護／消防", phone: "119" },
    { name: "韓國旅遊諮詢", phone: "1330" },
    { name: "香港入境處協助在外居民", phone: "+852 1868" }
  ]
};

const CHECK = "核對 Nov 15, 2026";
const SCOPE = "【範圍】一般 3 名成人自由觀看；不是團體預約，不是付費手作。";
const CLOCK = "時間欄：標「排序」的只為排在當天前面，不是約定時刻。標「當地JST／當地KST」的是當地營業錨點，用來排序，尚未接上船鐘。兩者都不是碼頭期限。日本與韓國當地都是 UTC+9；船鐘差 Δ 未核，不假設相同，也不自行加減 1 小時。";
const SHOW = "司機卡先向船方確認 Δ，把當地期限空白填好才出示。未填不能拿船時 17:00 或 16:00 當成當地鐘。船方若要求更早，以船方為準。這是到碼頭，不是已登船。";
const WALK = "3 位成人。媽媽約走 30 分鐘平路或溫和下坡後休 5 分鐘；避上坡、長陡下坡和樓梯。短休不為拍照取消。椅子未核就先問入口職員，不假設每處都有椅。";
const MAIL = "黒豚ふくや本店13:00、博多華味鳥筑紫口店11:45、Songdo Kitchen 12:30已確認；勝鹿新地店現場候位。";

function venueClock(sentence) {
  return /17:00/.test(sentence)
    ? "句裡的時刻是場館當地營業或入館時間，不是船時家庭到碼頭線。"
    : "";
}
function book(sentence, urls, extra) {
  void urls;
  return ["【預約】" + sentence, venueClock(sentence), "【核對】" + CHECK, SCOPE, extra || ""]
    .filter(Boolean)
    .join("\n");
}
function ride(kind) {
  return "【預約】這段只是交通，本身不是門票。目的地屬免費免約、現場買票，或當日才能判斷，只寫在到達那一站，避免和叫車混成一句。" + (kind || "");
}

const JP_WALK = "大人3名です。母は、平らな道・緩い下り坂を約30分歩いたら5分ほど座って休みます。上り坂、長い急な下り坂、階段は避けてください。";
const K_BACK = "帰港先はマリンポートかごしま（鹿児島県鹿児島市中央港新町1-10）、船内時刻17:00までに到着が必要です。日本時間の到着期限：___時___分【船との時差確認後に記入。未記入では使用不可】。船会社の指定が早ければそちらを優先します。各区間ごとに別途配車します。";
const N_BACK = "帰港先は長崎港松が枝国際ターミナル（長崎県長崎市松が枝町7番16号）、船内時刻17:00までに到着が必要です。日本時間の到着期限：___時___分【船との時差確認後に記入。未記入では使用不可】。船会社の指定が早ければそちらを優先します。各区間ごとに別途配車します。";
const F_BACK = "帰港先は中央ふ頭クルーズセンター（福岡県福岡市博多区沖浜町24番25号）、船内時刻17:00までに到着が必要です。日本時間の到着期限：___時___分【船との時差確認後に記入。未記入では使用不可】。船会社の指定が早ければそちらを優先します。各区間ごとに別途配車します。";

const CARD_K_RET = `行き先：マリンポートかごしま
住所：鹿児島県鹿児島市中央港新町1-10
ターミナル前の、タクシーが合法的に降車できる場所までお願いします。岸壁への進入は当日の係員の指示に従ってください。
大人3名。母のため階段・坂を避けたいです。船内時刻17:00までにターミナル到着（乗船完了ではありません）。日本時間の到着期限：___時___分【船との時差確認後に記入。未記入では使用不可】。船会社が早い時刻を指定した場合はそちらを優先します。今の交通状況で間に合うか確認してください。`;
const CARD_K_RET_ZH = "返回海洋港及上述地址，希望合法下客。船時 17:00 到碼頭，不是已登船。日本當地換算空白未填就不要用。船方更早從早。先請司機看路況。";

const CARD_K1 = `行き先：仙巌園
住所：鹿児島県鹿児島市吉野町9700-1
駐車場・タクシー乗り場付近の合法的な降車場所へお願いします。受付で、近いベンチと坂を避ける青いルートを確認します。入口までの距離は未確認です。
${JP_WALK}
${K_BACK}`;
const CARD_K1_ZH = "希望到停車場／的士乘場合法落客。受付指最近長椅和避坡的藍線；未保證幾分鐘到座位。不是全園零坡。回港船時 17:00，當地空白未填不要用。每段另叫車。";

const CARD_K2 = `行き先：とんかつと、しゃぶしゃぶ。黒豚ふくや 本店
住所：鹿児島県鹿児島市東千石町1-32 レム鹿児島2F
レストラン正面の階段は使えません。右側のホテル入口に近い合法的な場所で降ろしてください。ホテルのエレベーターで2階へ行き、帰りも使えるか、先にスタッフに確認します。利用できなければ別の店へ変更します。
${JP_WALK}
${K_BACK}`;
const CARD_K2_ZH = "本店，不是千日町店。經酒店入口自行用電梯上2F，不走餐廳正門樓梯。已訂11/25 13:00、3人、SANDY LI。";

const CARD_K3 = `行き先：黒かつ亭／黒べぇ
住所：鹿児島県鹿児島市山下町2-2
店の入口に近い合法的な降車場所へお願いします。普通の椅子席を希望し、掘りごたつ席は避けます。入口の段差と本日の昼営業・空席は先に確認します。
${JP_WALK}
${K_BACK}`;
const CARD_K3_ZH = "只在ふくや電梯不能用時作備選，不是改選的第五間、也沒有另寄電郵。希望普通椅，不是掘式。當日午市和空位先問。未訂位。";

const CARD_K4 = `行き先：いおワールドかごしま水族館
住所：鹿児島県鹿児島市本港新町3-1
水族館入口に近い合法的な降車場所へお願いします。エレベーターを使って5階の休憩展望スペースへ行く予定です。降車場所から入口までの距離は未確認です。
${JP_WALK}
${K_BACK}`;
const CARD_K4_ZH = "這張是雨天替代仙巌園用，不兩者都去。希望入口附近合法落客，電梯上 5F。車到入口的步分未核。";

const CARD_K_AQ = `行き先：いおワールドかごしま水族館
住所：鹿児島県鹿児島市本港新町3-1
水族館入口に近い合法的な降車場所へお願いします。エレベーターを使って5階の休憩展望スペースへ行く予定です。降車場所から入口までの距離は未確認です。
これは午後の本線です。午前の庭園を済ませたあとです。雨で庭園へ行かない代替カードではありません。
${JP_WALK}
${K_BACK}`;
const CARD_K_AQ_ZH = "午後主線用卡，不是 K4。不要跟司機說「不要兩邊都去」。雨天才改出示 K4。";

const CARD_N_RET = `行き先：長崎港松が枝国際ターミナル
住所：長崎県長崎市松が枝町7番16号
松が枝のクルーズ船ターミナルの合法的な降車場所までお願いします。別のフェリー乗り場ではありません。
大人3名。母のため階段・坂を避けたいです。船内時刻17:00までにターミナル到着（乗船完了ではありません）。日本時間の到着期限：___時___分【船との時差確認後に記入。未記入では使用不可】。船会社が早い時刻を指定した場合はそちらを優先します。今の交通状況で間に合うか確認してください。`;
const CARD_N_RET_ZH = "回松が枝郵輪碼頭，不是別的渡輪碼頭。船時 17:00 到碼頭，不是已登船。當地空白未填不要用。";

const CARD_N6 = `行き先：長崎水辺の森公園・水の庭園側
住所：長崎県長崎市常盤町1-60。管理事務所の移転先（松が枝町7-16）は公園入口ではありません。
水の庭園側の合法的な降車場所を確認してください。公園は24時間開園ですが、降車場所から海辺までの距離や細かな傾斜は未確認です。整備された硬い舗装の通路と園内の木・石のベンチを利用し、坂や階段は避けます。大人3名、約30分歩いたら5分休みます。
帰港先：長崎港松が枝国際ターミナル／長崎県長崎市松が枝町7番16号。船内時刻17:00までに到着、日本時間の期限___時___分（時差確認後に記入、未記入では使用不可）。船会社の指定が早ければ優先します。`;
const CARD_N6_ZH = "水之庭園側、常盤町 1-60。不要去管理處搬遷地址。24 小時開園、硬鋪和長椅已核；下客到海邊的步分和局部坡度未量。";

const CARD_N4 = `行き先：瑠璃庵（RURIAN GLASS STUDIOS）
住所：長崎県長崎市松が枝町5-11
店に近い合法的な場所で降ろしてください。無理のない店内見学の予定です。予約なしでの制作見学、入口の段差、休憩席は未確認です。長時間立って待つことはできません。
${JP_WALK}
${N_BACK}`;
const CARD_N4_ZH = "不保證免約看製作。當日職員確認可以看才短停，否則刪掉。本次不訂付費手作。工作椅不是休息椅。";

const CARD_N2 = `行き先：勝鹿 新地店（本店）
住所：長崎県長崎市新地町12-10 ラハイナビル1F
2026年移転後の新地町12-10です。古い籠町の住所や万屋町の別店舗ではありません。入口近くの合法的な場所で降ろしてください。
${JP_WALK}
${N_BACK}`;
const CARD_N2_ZH = "2026 新址，不是舊籠町，也不是万屋町分店。不接受預約，現場候位。";

const CARD_N3 = `行き先：眼鏡橋
住所：長崎県長崎市魚の町と諏訪町の間（番地・降車点は未確定）
階段を使わず橋を遠くから見たいです。橋の上や川底へは降りません。近くの合法的な降車場所と、平らで短い経路を確認してください。難しければ立ち寄りを取りやめます。
${JP_WALK}
${N_BACK}`;
const CARD_N3_ZH = "只有區域地址，沒有已核下客 pin。請司機找合法落客和短平路。不能在橋階或河階下車。做不到就刪。";

const CARD_N_MUSE = `行き先：長崎県美術館
住所：長崎県長崎市出島町2-1
美術館の段差を避けられる入口付近で、合法的に降ろしてください。2階の運河上の回廊で建物と橋を撮る予定です。展示は見ません。カフェは店内が禁煙で喫煙室がないと確認できるまで飲食しません。入口から回廊までの距離は未確認です。
${JP_WALK}
${N_BACK}`;
const CARD_N_MUSE_ZH = "午後主線是回廊拍照，不看展。咖啡要等禁煙核對過才入店飲食。這張不是「只去喝咖啡」。";

const CARD_N1 = `行き先：長崎県美術館 カフェ
住所：長崎県長崎市出島町2-1（カフェは2F）
美術館の段差を避けられる入口付近で、合法的に降ろしてください。エレベーターで2階の運河上のカフェへ行く予定です。全席禁煙で館内に喫煙室がないか、事前確認が必要です。入口から席までの距離は未確認です。
${JP_WALK}
${N_BACK}`;
const CARD_N1_ZH = "咖啡條件卡。禁煙／館內煙室未核對前不要出示成去用餐。未核就不入店飲食，仍可走公共回廊。";

const CARD_N5 = `行き先：Restaurant Pavé／ANAクラウンプラザホテル長崎グラバーヒル
住所：長崎県長崎市南山手町1-18（レストラン2F）
ホテル玄関の乗降場所までお願いします。エレベーターで2階へ行きます。ランチのビュッフェ利用を家族が了承した場合だけ使うカードです。坂道を歩いてホテルへ向かう経路は避けてください。
${JP_WALK}
${N_BACK}`;
const CARD_N5_ZH = "只有家人接受 buffet 才用。尚未接受，不自動切換，也不是本日改選。酒店玄關落客、電梯上 2F，不要從街上走坡。未訂位。";

const CARD_F_RET = `行き先：中央ふ頭クルーズセンター
住所：福岡県福岡市博多区沖浜町24番25号
沖浜町24-25のクルーズセンター前の合法的な降車場所までお願いします。14-1の博多港国際ターミナルではありません。入場方法は当日の係員の指示に従ってください。
大人3名。母のため階段・坂を避けたいです。船内時刻17:00までにターミナル到着（乗船完了ではありません）。日本時間の到着期限：___時___分【船との時差確認後に記入。未記入では使用不可】。船会社が早い時刻を指定した場合はそちらを優先します。今の交通状況で間に合うか確認してください。`;
const CARD_F_RET_ZH = "回沖浜町 24-25 的郵輪中心，不是 14-1 渡輪樓。船時 17:00 到碼頭，不是已登船。當地空白未填不要用。";

const CARD_F1 = `行き先：大濠公園・明治通り側北入口
目印：ボートハウス大濠パーク（福岡市中央区大濠公園1-3）
北側駐車場付近の合法的な場所で降ろしてください。
${JP_WALK}
${F_BACK}`;
const CARD_F1_ZH = "明治通側北入口；Boathouse為辨識地標。離開另叫車。";

const CARD_F2 = `行き先：博多華味鳥 博多駅筑紫口店
住所：福岡県福岡市博多区博多駅東1-13-31 駅東サンシティビル1F
「筑紫口店」です。「筑紫口店 別館」「祇園店」「博多駅前店」ではありません。入口に近い合法的な場所で降ろしてください。店内の段差と3名の席は到着時に確認します。
${JP_WALK}
${F_BACK}`;
const CARD_F2_ZH = "只去筑紫口店，不是別館、祇園店或駅前店。1F 不等於門內零高差。已訂11:45、3人。";

const CARD_F4 = `行き先：博多町家ふるさと館
住所：福岡県福岡市博多区冷泉町6-10
館の入口に近い合法的な場所で降ろしてください。織物実演と町家の建物を見学する予定です。入口の段差・館内の椅子は未確認です。神社参拝はしません。
${JP_WALK}
${F_BACK}`;
const CARD_F4_ZH = "午後主線。看織實演和町家，不參拜。入口和椅子未核。實演可能停，不保證不停。";

const CARD_F3 = `行き先：ロイヤルガーデンカフェ大濠公園
住所：福岡県福岡市中央区大濠公園1-3 ボートハウス大濠パーク1F
明治通り側の公園入口から店へ向かう予定です。短く平らな経路に近い合法的な降車場所を確認してください。車で店のテーブルまで行けるとは考えていません。店内の喫煙室の有無と経路は使用前に確認します。
${JP_WALK}
${F_BACK}`;
const CARD_F3_ZH = "湖景咖啡備案；週五11:00開門，上午不等開門。";

const KR_WALK = "성인 3명이고 어머니는 평지나 완만한 내리막을 약 30분 걸으면 5분 정도 앉아서 쉬십니다. 오르막, 긴 급경사 내리막, 계단과 오래 서서 기다리는 것은 피하고 싶습니다.";

const CARD_B0 = `LOYQU 예약: 9시간, 1–4인 상품 / 실제 성인 3명, 짐 0개입니다. 차량 종류와 기사님 사용 언어는 아직 확인되지 않았습니다.
예약서에는 픽업 시간이 09:00으로 적혀 있습니다. 이 시간의 시간대는 공급업체에 재확인이 필요합니다. 장소 표기는 부산항 국제여객터미널, 부산광역시 동구 충장대로 206입니다. 예약서에는 “1F Arrival Hall”이라고 되어 있지만, 항만 안내에는 일반 입국장이 2층으로 나옵니다. 예약 문구를 임의로 바꾸지 않고, 실제 만날 층과 위치를 확인하고 싶습니다.
08:00은 희망 시간일 뿐 확정이 아니며 입국 수속에 따라 달라집니다. 같은 터미널로 돌아옵니다. 선내 시각 16:00까지 터미널 도착 / 한국 현지 도착 마감 ___시 ___분（시차 확인 후 기입, 미기입 시 사용 금지）이 필요하고 9시간을 모두 사용할 필요는 없습니다. 배에서 더 이른 시간을 안내하면 그 시간을 따릅니다.`;
const CARD_B0_ZH = "9 小時 1–4 人方案，實際 3 人 0 行李。車型和司機使用的語言都還沒有列出來，不要猜。原訂單寫 09:00，該時間採用哪個時區仍須供應商核對；08:00 提早要求未確認。訂單寫 1F，港方常見入境在 2F，請供應商確認，不改樓層。船時 16:00 回到同一北港，不是已上船。KST 空白未填不要用。不必用完 9 小時。";

const CARD_B1 = `목적지: 송도해상케이블카 송도베이스테이션（Songdo Bay Station）
주소: 부산광역시 서구 송도해변로 171
1층 정문 또는 송림주차장 근처에서 합법적으로 내릴 수 있는 곳을 부탁드립니다. 정문 앞 정차 가능 여부는 현장에서 확인해 주세요. 차량이 4층 승강장까지 갈 수 있다고 생각하지 않습니다. 1층 매표소에서 표를 사고 엘리베이터 안내를 받아 4층 승강장으로 가려고 합니다.
${KR_WALK} 장시간 서야 하면 탑승을 생략하겠습니다.
오늘은 송도 서쪽 일정만 갑니다. 한국 현지 ___시 ___분까지 송도에서 차량에 이미 탑승하여 출발（현지 귀항 마감 75분 전, 시차 확인 후 기입）, 선내 시각 16:00 전 부산항 국제여객터미널（동구 충장대로 206）도착 / 한국 현지 마감 ___시 ___분（확인 후 기입）이 필요합니다. 배의 더 이른 안내가 있으면 우선합니다.`;
const CARD_B1_ZH = "松島出發站 171。希望 1F 正門或松林停車場附近合法落客，未保證能停在門前，車不到 4F。只去西側。KST 離區空白和到港空白都要先填。船時 16:00 不是 KST。";

const CARD_B2 = `목적지: 페어필드 바이 메리어트 부산 송도 비치 / 22층 송도키친（Songdo Kitchen）
주소: 부산광역시 서구 송도해변로 113
호텔 정문 근처의 합법적인 승하차 장소를 부탁드립니다. 케이블카에서 호텔까지는 차량으로 이동하고, 부모님은 해변을 따라 걷지 않겠습니다. 정문에서 엘리베이터를 타고 22층으로 갑니다.
점심 운영은 12:00–14:30, 마지막 주문은 14:00입니다. 12시쯤 도착을 희망하지만 3인 좌석은 아직 예약되지 않았습니다. 케이블카가 운휴하거나 오래 서야 하면 식사와 앉아서 보는 바다 경치를 우선하겠습니다.
성인 3명, 짐 0개. ${KR_WALK} 한국 현지 ___시 ___분까지 호텔 정문에서 이미 차에 타고 출발하여, 선내 시각 16:00에 해당하는 한국 현지 ___시 ___분까지 부산항 국제여객터미널（동구 충장대로 206）에 도착（시차 확인 후 기입, 미기입 시 사용 금지）해야 합니다. 배의 더 이른 안내가 있으면 우선합니다.`;
const CARD_B2_ZH = "Fairfield 松島 113、22F Songdo Kitchen。包車短送正門，不要沿著沙灘走。已訂11/28 12:30、3人、SANDY。請提早10分鐘到。";

const CARD_B3 = `목적지: 부산항 국제여객터미널（북항 / MBF-1）
주소: 부산광역시 동구 충장대로 206
성인 3명, 짐 0개입니다. 선내 시각 16:00까지 터미널에 도착 / 한국 현지 마감 ___시 ___분（시차 확인 후 기입, 미기입 시 사용 금지）해야 합니다. 승선 완료 시간이 아니라 터미널 도착 기준이며, 배에서 더 이른 시간을 안내하면 그 시간을 따릅니다. 영도나 다른 여객터미널로 가지 말아 주세요.
출발지에서 부모님이 오래 걷지 않도록 합법적인 장소에서 태워 주세요. 송도에서는 한국 현지 ___시 ___분까지 이미 차에 타고 출발（귀항 마감 75분 전, 시차 확인 후 기입）해야 합니다. 교통이 막히면 더 일찍 출발하겠습니다. 터미널 내 실제 하차 지점은 당일 안내에 따라 주세요.`;
const CARD_B3_ZH = "回北港 MBF-1、忠壯大路 206，不要去影島。船時 16:00 到碼頭，KST 空白未填不要用。松島要在到港線前 75 分鐘已坐在車上，但那個 KST 時刻也還沒填，不能自己減 12:00 午餐。塞車就更早走。";

const CARD_B_BACK = `목적지: 송도해상케이블카 송도베이스테이션
주소: 부산광역시 서구 송도해변로 171
호텔에서 출발역 쪽으로 같은 예약 차량이 짧게 이동합니다. 1층 정문 또는 송림주차장 근처의 합법적인 하차를 부탁드립니다. 차량이 4층까지 간다고 생각하지 않습니다. 해변을 따라 걷지 않습니다.
${KR_WALK}
송도에서는 한국 현지 ___시 ___분까지 이미 차에 타고 북항으로 출발해야 합니다. 선내 시각 16:00까지 충장대로 206에 도착 / 한국 현지 ___시 ___분（확인 후 기입, 미기입 시 사용 금지）。`;
const CARD_B_BACK_ZH = "午餐後同一輛包車短送回出發站一帶，不是另叫一台車，也不是新的下車 pin。車不到 4F。離區時刻仍是空白。";

const CARD_B4 = `현재 위치: 송도스카이파크, 부산광역시 서구 암남공원로 181.
케이블카로 베이스테이션에 돌아갈 수 없는 상황입니다. 역 직원과 기사님이 안전한 귀환 방법 및 합법적인 승차 지점을 먼저 확인해 주세요. 이 주소가 차량 승차 가능 지점으로 확인된 것은 아닙니다. 부모님과 걸어서 공원·구름다리를 지나 돌아가지는 않겠습니다.
성인 3명, 짐 0개. 어머니는 평지나 완만한 내리막을 약 30분 걸은 뒤 5분 정도 쉬시며, 계단·오르막은 피해야 합니다. 선내 시각 16:00까지 부산항 국제여객터미널（동구 충장대로 206）도착 / 한국 현지 마감 ___시 ___분（확인 후 기입）이 필요하며, 배의 더 이른 안내가 우선입니다.`;
const CARD_B4_ZH = "對岸 Skypark 只是人在的位置，不是已核接車點。請站方和司機一起找合法上車處。不要自己穿過公園或吊橋走回去。仍是船時 16:00 回北港。不要等到離區線才處理。";

const DIET_DAD = `父の料理について：えび・かには食べません。料理、だし、スープ、ソース、付け合わせに、えび・かに、えびペースト等が入っていないか確認してください。今回は食事制限のお願いです。店全体からそれらをなくすお願いではありません。分からない料理は注文前に教えてください。

아버지가 드실 음식은 새우와 게를 먹지 않습니다. 음식, 육수, 수프, 소스, 반찬에 새우·게·새우젓 등이 들어가는지 확인해 주세요. 이번 요청은 식사 제한에 대한 안내이며, 가게 전체에 해당 재료가 없어야 한다는 뜻은 아닙니다. 확인이 어려운 음식은 주문 전에 알려 주세요.`;
const DIET_DAD_ZH = "只針對爸爸的菜。不吃蝦和蟹，請核高湯、醬和配菜，包括蝦醬。不是全店禁用，也不是嚴重過敏聲明。沒有把所有魚貝都列為不吃。";

const DIET_MOM = `母の料理について：牛肉は食べません。牛肉、ビーフエキス、牛骨だし等が料理、スープ、ソース、付け合わせに入っていないか確認してください。今回は食事制限のお願いで、店全体から牛肉をなくすお願いではありません。豚肉・鶏肉・魚などの候補から、材料を確認して選びたいです。

어머니가 드실 음식은 소고기를 먹지 않습니다. 음식, 국물, 소스, 반찬에 소고기·쇠고기 엑기스·사골 육수 등이 들어가는지 확인해 주세요. 식사 제한에 대한 안내이며, 가게 전체에 소고기가 없어야 한다는 뜻은 아닙니다. 돼지고기·닭고기·생선 요리 중 재료를 확인하고 고르겠습니다.`;
const DIET_MOM_ZH = "只針對媽媽的菜。不吃牛、牛萃取和牛骨湯。豬、雞、魚只是選菜方向，不是已保證的配方。";

const DIET_ROOM = `全席禁煙で、店内に喫煙室のないお店を希望しています。母のため、床に座る席ではなく、背もたれのある普通の椅子を希望します。長く立って待てません。辛いものは避け、柚子こしょう・からし・辛いソースは入れず、別添えにできるか教えてください。

전 좌석 금연이고 실내 흡연실이 없는 곳을 원합니다. 어머니를 위해 바닥 좌석이 아닌 등받이 있는 일반 의자를 부탁드립니다. 오래 서서 기다리기는 어렵습니다. 매운 음식은 피하고, 고추 양념 등은 넣지 말고 따로 받을 수 있는지 알려 주세요.`;
const DIET_ROOM_ZH = "希望全席禁煙，而且店內沒有吸煙室。要靠背普通椅，不能久站。少辣：柚胡椒、芥末、辣醬不要拌進去，可以另放。預醃若拿不掉要先說。這是請求，不保證店家一定做得到。";

const A_KIRIKO = "薩摩切子工場見學免費、無需事前預約；Nov 25 不在 Nov 定休日，但須避開 12:00–13:00 等休息時段，機器維護可能臨時休業，不保證當下正在作業；此為工場見學，不是另址磯工芸館商店，也不是付費手作。";
const A_MACHI = "博多町家一般入館 200 円、3 人屬個人票、無需事前預約，現場購票即可；町家棟博多織實演本身免費且無需預約，午後場 13:30–15:00，但週三及 Jul–Sep 休演，Nov 27 依規則應有實演、不是保證不停演。這是觀看實演，不是付費繪付／曲物體驗，也不是要預約的英語導覽。";
const A_RURI = "瑠璃庵週二休、Nov 26（四）依規則應開；付費玻璃手作須預約，本次不訂體驗。未確認「免預約即可看製作」，也未確認隔窗或場內見學，故不保證可看製作，只在當日確認能免約觀看才短停，否則刪點。";
const A_SEN = "仙巌園庭園需買入場券（一般 1,600 円，含御殿・尚古集成館），3 人可當日售票機購買，也可選網上預購，無需強制事前預約；9:00–17:00、最終入園 16:30，年中無休，但不保證園內全線平路或無等候。";
const A_AQ = "水族館一般入館（非市民）大人 2,000 円，3 人屬個人、可現場購票，無需強制事前預約；Nov 25 不在已公布休館日，9:30–18:00、入館至 17:00，不保證無排隊，也不把市民價當成適用。";
const A_YUS = "大濠公園普通湖岸免費，無需預約。";
const A_PARK = "水辺の森公園／水之庭園是免費公園，24 小時開園、入園料免費，無需預約；管理處曾移址，不要把事務所新地址當成園區入口，也不保證全線無坡。";
const A_STREET = "眼鏡橋遠看與博多冷泉町／上川端街景、櫛田神社山笠外觀均屬公共街道景觀，無需預約或門票；不上橋階、不入神社參拜。";
const A_MUSE = "美術館入館免費、不看展則不必另購展覽票；2F 運河橋咖啡為店內消費（11:00–17:00），3 人無需為進館預約。Nov 26（四）不是第 2／第 4 星期一休館，但仍可能因事業變更開館日。";
const A_OHORI = "大濠公園湖邊短段是公園公共空間，無需預約門票；Royal Garden Cafe 是飲食店，不作「免約見學」標註。";
const A_CABLE = "松島海上纜車不必網上預約，可現場購票；網上預售須翌日起用、當日買當日不可用。Nov 當地 09:00–21:00，售票至結束前 30 分；惡天候或售票情況可提早收班或停駛，週六可能候乘，不保證準點或有座可坐等。";
const A_SEA = "出發站附近海邊馬路側看海屬公共平路，無需預約；1F Photo Zone 與 3F Bay Terrace 是否必須持纜車票才能進入，尚未確認，不得寫成已確認的免費免約室內點，現場再看標示。不上沙灘、吊橋或公園爬坡。";

const URL_KIRIKO = "https://www.senganen.jp/how-to-walk/adjacent-facility/shimadzu-satsuma-kiriko-glassworks/ ；https://www.senganen.jp/satsuma-kiriko-factory-closed-days-in-november/ ；https://www.senganen.jp/faq/";
const URL_MACHI = "https://hakatamachiya.com/access/ ；https://hakatamachiya.com/experience/ ；https://hakatamachiya.com/news/opening-hours/";
const URL_RURI = "https://rurian.com/ ；https://www.rurian.com/blowglass.html";
const URL_SEN = "https://www.senganen.jp/faq/";
const URL_AQ = "https://ioworld.jp/information ；https://ioworld.jp/faq";
const URL_YUS = "https://www.ohorikouen.jp/map/";
const URL_PARK = "https://www.pref.nagasaki.jp/uploads/2025/11/1764121203-3.pdf ；https://nagasaki-p.com/mizube/ ；https://nagasaki-p.com/mizube/stone/";
const URL_BRIDGE = "https://www.at-nagasaki.jp/barrierfree/64024";
const URL_YAMA = "https://yokanavi.com/spots/26906";
const URL_MUSE = "https://www.nagasaki-museum.jp/visitor/info ；https://www.nagasaki-museum.jp/visitor/cafe";
const URL_OHORI = "https://www.royal-gardencafe.com/store-menu/ohoripark.html";
const URL_CABLE = "https://busanaircruise.co.kr/cmm/faq.html?BD_CD=FAQ2&rank=4 ；https://busanaircruise.co.kr/info/time?rank=2 ；https://busanaircruise.co.kr/info/use";
const URL_FLOOR = "https://busanaircruise.co.kr/about/floor?rank=4";
const URL_FUKU = "https://www.hotpepper.jp/strJ004050226/ ；https://r.gnavi.co.jp/f73zjf3v0000/lunch/";
const URL_KATSU = "https://www.katsu-shika.com/tonkatsu";
const URL_HM = "https://www.hanamidori.net/menu-lunch/";
const URL_SONG = "https://www.songdokitchen.com/our-menus";
const URL_KURO = "https://f189601.gorp.jp/";
const URL_PAVE = "https://www.anacrowneplaza-nagasaki.jp/restaurants/pave";

function evt(o) {
  return {
    id: o.id,
    day: o.day,
    time: Object.prototype.hasOwnProperty.call(o, "time") ? o.time : null,
    timeHint: o.timeHint || null,
    type: o.type,
    title: o.title,
    cityId: o.cityId || null,
    address: o.address == null ? null : o.address,
    addressLocal: o.addressLocal == null ? null : o.addressLocal,
    coords: null,
    tags: o.tags || [],
    moodColor: o.moodColor || null,
    note: o.note || null,
    phone: o.phone == null ? null : o.phone,
    whatsapp: null,
    line: null,
    messenger: null,
    openHours: o.openHours == null ? null : o.openHours,
    price: o.price == null ? null : o.price,
    website: o.website == null ? null : o.website,
    cost: null,
    status: "pending",
    source: "ai",
    transport: o.transport == null ? null : o.transport
  };
}
function taxi(from, to, operator) {
  return {
    mode: "taxi",
    from: from,
    to: to,
    fromEventId: null,
    toEventId: null,
    operator: operator,
    line: null,
    durationMin: null,
    stopCount: null,
    liveApi: null
  };
}
const OP_JP = "";
const OP_KR = "LOYQU 已購 9 小時、1–4 人方案；實際 3 人、行李 0。車型與語言未列。";

function dietNote() {
  return [
    "三張分開給餐廳，不要合成「全桌都不能吃」。不是司機卡。",
    "【爸爸】",
    DIET_DAD,
    DIET_DAD_ZH,
    "【媽媽】",
    DIET_MOM,
    DIET_MOM_ZH,
    "【禁煙／椅子／少辣】",
    DIET_ROOM,
    DIET_ROOM_ZH,
    "【預約】這張不是訂位，也不代表店已留位。",
    MAIL
  ].join("\n");
}

const ITINERARY = {
  items: [
    evt({
      id: "evt_d1_to_garden", day: 1, time: "08:50", timeHint: "morning", type: "note",
      title: "放行後叫的士前往仙巌園｜09:00不是已核出門鐘", cityId: "kagoshima", moodColor: "#6B5E52",
      tags: ["放行後出發", "非已核出門鐘", "逐段叫車"],
      address: "Sengan-en, Yoshino-cho 9700-1",
      addressLocal: "鹿児島県鹿児島市吉野町9700-1 仙巌園",
      website: null,
      transport: taxi("海洋港", "仙巌園", OP_JP),
      note: [CLOCK, SHOW, "【候車】碼頭大型船日常見約 30 分鐘，不是保證。", "【車程暫抓】30–45 分鐘，不是實測。", "目標是當地約 09:00 到可開放的點。早到而園未開，不承諾能進。", ride(""), CARD_K1, CARD_K1_ZH].join("\n")
    }),
    evt({
      id: "evt_d1_garden", day: 1, time: "09:00", timeHint: "morning", type: "sight",
      title: "仙巌園", cityId: "kagoshima", moodColor: "#3E5C4C",
      tags: ["當地JST", "現場買票"],
      address: "Sengan-en, Yoshino-cho 9700-1",
      addressLocal: "鹿児島県鹿児島市吉野町9700-1 仙巌園",
      openHours: "當地 JST 09:00–17:00，最終入園 16:30。年中無休這句不保證園內無等候。",
      price: "一般 1,600 円（含御殿・尚古集成館）。當日售票機，也可另選網上預購。免強制事前預約 ≠ 免費 ≠ 免排隊。",
      website: "https://www.senganen.jp/faq/",
      note: [CLOCK, WALK, "分段看庭園，以及櫻島／錦江灣可以平路或溫和下坡到達的構圖。不走高處，不走鶴嶺神社。", "【照片】前景和櫻島換幾個構圖，用長焦，不追坡。", "每約 30 分鐘在已問過的園內長椅休 5 分鐘。請受付標出要避開的橙色介助坡、紅色砂石和階梯。不是全園零坡。", "只看旁邊切子工場不必買這張門票；用園內停車場則停車費另計。不要把工場免費寫成這園也免費。", "輪椅／WHILL 是現場限量、不可預約，本次不假設要租。茶屋個室和傳統文化體驗不是一般入園規則。", book(A_SEN, URL_SEN)].join("\n")
    }),
    evt({
      id: "evt_d1_kiriko", day: 1, time: "11:00", timeHint: "morning", type: "sight",
      title: "薩摩切子工場", cityId: "kagoshima", moodColor: "#3E5C4C",
      tags: ["當地JST", "免費免約"],
      address: "Satsuma kiriko glassworks, next to Sengan-en",
      addressLocal: "鹿児島県鹿児島市吉野町9700-1 薩摩切子工場",
      openHours: "當地 JST 見學 09:00–16:30。休息 10:00–10:15、12:00–13:00、15:00–15:15。",
      price: "見學免費，無需事前預約。不是仙巌園門票，也不是付費手作。",
      website: "https://www.senganen.jp/how-to-walk/adjacent-facility/shimadzu-satsuma-kiriko-glassworks/",
      note: [CLOCK, WALK, "看玻璃製作，不只逛商店。入口步程未核。途中休 5 分鐘。", "【見學】Nov 25 不在 Nov 定休（Nov 2、Nov 9、Nov 15、Nov 16、Nov 24、Nov 30）。仍須避開休息，尤其 12:00–13:00。機器維護可能臨時休業。休息或停工時只能看場地，不能當成正在製作。不保證當下有人在作業。", "不是另址磯工芸館（吉野町 9688-24）。", "【照片】只在允許的位置拍製作，不為工藝加訂體驗。", "雨天若上午已改去水族館，13:00 後才視雨勢回來看可遮蔽的見學。", book(A_KIRIKO, URL_KIRIKO, "【區別】A：見學本身免費且免事前預約。這一句不能套到仙巌園。")].join("\n")
    }),
    evt({
      id: "evt_d1_to_fukuya", day: 1, time: "11:35", timeHint: "morning", type: "transport",
      title: "前往黒豚ふくや本店", cityId: "kagoshima",
      tags: ["當地JST", "逐段叫車"],
      address: null,
      addressLocal: "鹿児島県鹿児島市吉野町9700-1 仙巌園",
      transport: taxi("仙巌園", "ふくや本店", OP_JP),
      note: [CLOCK, SHOW, "【候車】20–30 分鐘，暫抓，不是保證。偏遠，離開前請受付代叫。", "【車程暫抓】25–40 分鐘。", "保底才是仙巌園前巴士，不預設媽媽走到車站。", ride(""), CARD_K2, CARD_K2_ZH].join("\n")
    }),
    evt({
      id: "evt_d1_diet", day: 1, time: "12:40", timeHint: "afternoon", type: "note",
      title: "餐廳忌口卡", cityId: "kagoshima", moodColor: "#6A5348",
      tags: ["給餐廳", "排序"],
      note: dietNote()
    }),
    evt({
      id: "evt_d1_fukuya", day: 1, time: "12:45", timeHint: "afternoon", type: "food",
      title: "黒豚ふくや本店", cityId: "kagoshima", moodColor: "#6A5348",
      tags: ["未訂位", "當地JST"],
      address: "Kurobuta Fukuya main shop, Remm Kagoshima 2F",
      addressLocal: "鹿児島県鹿児島市東千石町1-32 レム鹿児島2F",
      phone: "099-201-3210",
      openHours: "當地 JST。正常午市 11:30 起；14:30 前用完較保守。Nov 25 未見臨休，仍非當日保證。",
      price: "純豬炸排約 ¥2,600–2,900／人；生姜燒定食 ¥1,300。未訂位，不是已確認的帳單。",
      website: "https://r.gnavi.co.jp/f73zjf3v0000/lunch/",
      note: ["建議菜：豬腰肉或里脊炸排，或生姜燒定食。不要咖喱、蝦 mix、肉種不明的メンチ。湯和醬當場問。", "全席禁煙，沒有室內吸煙專室。希望靠背椅。", "用餐約 60–65 分鐘，不要拉成 90 分鐘。若改備選或等位，先縮短下午水族館。", "不要改去華蓮：店內有吸煙空間，不因黑豚肉回到主線。", "【預約】午餐仍是建議，不是已訂位。", MAIL, "【核對】" + CHECK].join("\n")
    }),
    evt({
      id: "evt_d1_to_aq", day: 1, time: "13:50", timeHint: "afternoon", type: "transport",
      title: "前往鹿兒島水族館", cityId: "kagoshima",
      tags: ["當地JST", "逐段叫車"],
      address: null,
      addressLocal: "鹿児島県鹿児島市東千石町1-32 レム鹿児島",
      transport: taxi("ふくや本店", "鹿兒島水族館", OP_JP),
      note: [CLOCK, SHOW, "【候車】15–25 分鐘。【車程暫抓】10–20 分鐘。這是另一程，不是上一程的車在等。", ride(""), CARD_K_AQ, CARD_K_AQ_ZH].join("\n")
    }),
    evt({
      id: "evt_d1_aq", day: 1, time: "14:35", timeHint: "afternoon", type: "sight",
      title: "鹿兒島水族館", cityId: "kagoshima", moodColor: "#3E5C4C",
      tags: ["當地JST", "現場買票"],
      address: "Io World Kagoshima Aquarium",
      addressLocal: "鹿児島県鹿児島市本港新町3-1 いおワールドかごしま水族館",
      openHours: "當地 JST 09:30–18:00，入館至 17:00。這個 17:00 不是船時回港。",
      price: "非市民大人 2,000 円。現場可付。免強制事前預約 ≠ 免費 ≠ 免排隊。不要用市民價。",
      website: "https://ioworld.jp/information",
      note: [CLOCK, WALK, "平層可到的展示，加上電梯上 5F 看錦江灣／櫻島。入口無段差和 5F 展望有記錄；未核的展區名稱不預告。", "走約 30 分鐘休 5 分鐘，再看景，不是坐一小時。", "【照片】5F 不同窗面拍海灣和火山，鏡頭靠近玻璃減少反光。", "14:35 不是不可改的硬時間。回港叫車見下一段，受 H 倒推。", "已公布休館在 Dec，Nov 25 不在名單；臨時休仍可能另公告。", book(A_AQ, URL_AQ, "【區別】B：免事前預約，但要現場買票，可能排隊。")].join("\n")
    }),
    evt({
      id: "evt_d1_return", day: 1, time: null, timeHint: "afternoon", type: "note",
      title: "必須於船時17:00到海洋港碼頭｜當地時未填", cityId: "kagoshima", moodColor: "#6B5E52",
      tags: ["船時17:00到碼頭", "當地時未填"],
      address: "Marine Port Kagoshima, Chuo-ko Shinmachi 1-10",
      addressLocal: "鹿児島県鹿児島市中央港新町1-10 マリンポートかごしま",
      transport: taxi("水族館", "海洋港", OP_JP),
      note: [SHOW, "最遲在 H 前 95 分鐘開始叫車。H 未填，所以這裡不印當地鐘點，也不把 15:30 當成硬時間。", "【候車】20–30 分鐘，已含在回程，不要再加一小時。", "【車程暫抓】25–40 分鐘，再留 25–50 分鐘餘量。即時估計更長就提前走。", "若人還在仙巌園、不繞水族館：最遲 H 前 80 分鐘走（配車暫抓 40–60 分鐘加至少 20 分鐘餘量）。", CARD_K_RET, CARD_K_RET_ZH, ride("")].join("\n")
    }),

    evt({
      id: "evt_d2_to_park", day: 2, time: "08:50", timeHint: "morning", type: "note",
      title: "放行後叫的士前往水之庭園｜09:00不是已核出門鐘", cityId: "nagasaki", moodColor: "#6B5E52",
      tags: ["放行後出發", "非已核出門鐘", "逐段叫車"],
      address: "Water Garden side, Tokiwa-machi 1-60",
      addressLocal: "長崎県長崎市常盤町1-60 長崎水辺の森公園",
      transport: taxi("松が枝", "水之庭園", OP_JP),
      note: [CLOCK, SHOW, "【候車】15–25 分鐘。【車程暫抓】5–15 分鐘。不是實測。", "放行就走，不要等 11:00 的咖啡。", ride(""), CARD_N6, CARD_N6_ZH].join("\n")
    }),
    evt({
      id: "evt_d2_park", day: 2, time: "09:00", timeHint: "morning", type: "sight",
      title: "水之庭園", cityId: "nagasaki", moodColor: "#4A5963",
      tags: ["當地JST", "免費免約"],
      address: "Water Garden side, Tokiwa-machi 1-60",
      addressLocal: "長崎県長崎市常盤町1-60 長崎水辺の森公園",
      openHours: "免費公園。24 小時開園。這不是船時。",
      price: "入園免費，無需預約。不是免坡保證。",
      website: "https://nagasaki-p.com/mizube/",
      note: [CLOCK, WALK, "海港硬鋪短段，拍海港和船。每約 30 分鐘用園內木椅或石椅休 5 分鐘。", "【照片】海港和船，不追高處。", "管理處遷到松が枝町 7-16，那不是入口。下客到海邊的步分和局部坡度未量。", book(A_PARK, URL_PARK, "【區別】A：免費，且無需預約。園內活動仍聽現場。")].join("\n")
    }),
    evt({
      id: "evt_d2_to_rurian", day: 2, time: "10:00", timeHint: "morning", type: "transport",
      title: "前往瑠璃庵", cityId: "nagasaki",
      tags: ["當地JST", "逐段叫車", "可刪"],
      address: null,
      addressLocal: "長崎県長崎市常盤町1-60 長崎水辺の森公園",
      transport: taxi("水之庭園", "瑠璃庵", OP_JP),
      note: [CLOCK, SHOW, "【候車】15–20 分鐘。【車程暫抓】5–10 分鐘。", "不承諾可以從公園平路走到店。放行若晚，先刪這段，不砍午後拍照。", ride(""), CARD_N4, CARD_N4_ZH].join("\n")
    }),
    evt({
      id: "evt_d2_rurian", day: 2, time: "10:30", timeHint: "morning", type: "sight",
      title: "瑠璃庵", cityId: "nagasaki", moodColor: "#4A5963",
      tags: ["當地JST", "當日再判斷", "可刪"],
      address: "Rurian Glass Studios",
      addressLocal: "長崎県長崎市松が枝町5-11 瑠璃庵",
      openHours: "當地 JST 09:30–17:00。週二休。Nov 26 週四依規則應開，不是當日保證，也不等於可以看製作。",
      price: "付費吹玻璃等手作要預約。本次不訂。觀看製作沒有免約保證。",
      website: "https://rurian.com/",
      note: [CLOCK, WALK, "只在當日職員確認可以免約觀看時短停約 30 分鐘，先休 5 分鐘。否則刪掉，保留午後眼鏡橋或運河。", "不保證隔窗或場內見學。商店開著不等於工場見學已鎖定。工作椅不是自由休息椅。入口段差未核。不能久站。", "【照片】只有確認看得到時，才拍玻璃和光。不為工藝加訂體驗。", book(A_RURI, URL_RURI, "【區別】C：不得寫成已保證免約可看製作。")].join("\n")
    }),
    evt({
      id: "evt_d2_to_katsu", day: 2, time: "11:10", timeHint: "morning", type: "transport",
      title: "前往勝鹿新地店", cityId: "nagasaki",
      tags: ["當地JST", "逐段叫車"],
      address: null,
      addressLocal: "長崎県長崎市松が枝町5-11 瑠璃庵",
      transport: taxi("瑠璃庵一帶", "勝鹿新地店", OP_JP),
      note: [CLOCK, SHOW, "【候車】15–20 分鐘。【車程暫抓】5–10 分鐘。若已刪瑠璃庵，就從公園或碼頭另叫，不假設原車等候。", ride(""), CARD_N2, CARD_N2_ZH].join("\n")
    }),
    evt({
      id: "evt_d2_diet", day: 2, time: "11:35", timeHint: "morning", type: "note",
      title: "餐廳忌口卡", cityId: "nagasaki", moodColor: "#6A5348",
      tags: ["給餐廳", "排序"],
      note: dietNote()
    }),
    evt({
      id: "evt_d2_katsu", day: 2, time: "11:40", timeHint: "morning", type: "food",
      title: "勝鹿新地店", cityId: "nagasaki", moodColor: "#6A5348",
      tags: ["未訂位", "當地JST"],
      address: "Katsushika Shinchi main shop, Lahaina Building 1F",
      addressLocal: "長崎県長崎市新地町12-10 ラハイナビル1F",
      phone: "095-825-0188",
      openHours: "當地 JST 正常午市 11:30–15:00。不定休，不是當日保證。",
      price: "豬排或雞排約 ¥1,000–1,600／人。未訂位。",
      website: URL_KATSU,
      note: ["建議：午市豬腰肉、里脊或雞排。不要蝦排、海鮮 mix、牛肉。湯醬和芥末當場問，芥末可另放。", "全席禁煙；吸煙室不明。1F 普通靠背椅有 2026 實訪，門檻未量，所以不稱已核無障礙。", "用餐約 65 分鐘。普通午餐可以 walk-in，3 人要不要等未知。walk-in 不是免排隊，也不是已訂位。", "不要改去吉宗：茶碗蒸含蝦。Pavé 的 buffet 家人尚未接受，不自動切換。", "【預約】午餐仍是建議，不是已訂位。", MAIL, "【核對】" + CHECK].join("\n")
    }),
    evt({
      id: "evt_d2_to_megane", day: 2, time: "12:45", timeHint: "afternoon", type: "transport",
      title: "前往眼鏡橋", cityId: "nagasaki",
      tags: ["當地JST", "逐段叫車", "可刪"],
      address: null,
      addressLocal: "長崎県長崎市新地町12-10",
      transport: taxi("勝鹿新地店", "眼鏡橋", OP_JP),
      note: [CLOCK, SHOW, "【候車】15–25 分鐘。【車程暫抓】5–10 分鐘。", ride(""), CARD_N3, CARD_N3_ZH].join("\n")
    }),
    evt({
      id: "evt_d2_megane", day: 2, time: "13:20", timeHint: "afternoon", type: "sight",
      title: "眼鏡橋", cityId: "nagasaki", moodColor: "#4A5963",
      tags: ["當地JST", "免費免約", "可刪"],
      address: "Meganebashi, between Uo-no-machi and Suwa-machi",
      addressLocal: "長崎県長崎市魚の町 眼鏡橋",
      openHours: "戶外橋。沒有另設開館時間。遠看即可。",
      price: "公共橋樑遠看，無需預約或門票。不是免坡、也不是無車流保證。",
      website: URL_BRIDGE,
      note: [CLOCK, WALK, "平地能到的範圍遠看雙拱和倒影。不上橋階，不下河階。約 30 分鐘後休 5 分鐘。具體坐點仍待核，不保證河邊一下車就能拍。", "【照片】河岸雙拱和倒影。不追階梯高位。", "地址沒有已核門牌 pin。做不到短平路就刪，保留運河回廊。", book(A_STREET, URL_BRIDGE, "【區別】A：公共空間外觀，免費且無需預約。這一句只涵蓋遠看，不含登橋。")].join("\n")
    }),
    evt({
      id: "evt_d2_to_museum", day: 2, time: "14:10", timeHint: "afternoon", type: "transport",
      title: "前往長崎縣美術館", cityId: "nagasaki",
      tags: ["當地JST", "逐段叫車"],
      address: null,
      addressLocal: "長崎県長崎市魚の町 眼鏡橋",
      transport: taxi("眼鏡橋", "長崎縣美術館", OP_JP),
      note: [CLOCK, SHOW, "【候車】15–25 分鐘。【車程暫抓】10–15 分鐘。", "若眼鏡橋已刪，從勝鹿一帶另叫。", ride(""), CARD_N_MUSE, CARD_N_MUSE_ZH, "【咖啡條件卡，未核禁煙不要當餐卡出示】", CARD_N1, CARD_N1_ZH].join("\n")
    }),
    evt({
      id: "evt_d2_museum", day: 2, time: "14:50", timeHint: "afternoon", type: "sight",
      title: "長崎縣美術館回廊", cityId: "nagasaki", moodColor: "#4A5963",
      tags: ["當地JST", "免費進館"],
      address: "Nagasaki Prefectural Art Museum, Dejima-machi 2-1",
      addressLocal: "長崎県長崎市出島町2-1 長崎県美術館",
      openHours: "進館免費。咖啡當地 JST 11:00–17:00，這個 17:00 是咖啡營業，不是船時。",
      price: "不看展不必另買展覽票。咖啡是店內消費，可能要等座位。",
      website: "https://www.nagasaki-museum.jp/visitor/info",
      note: [CLOCK, WALK, "看建築外觀和 2F 運河橋回廊。平坦入口／斜道、電梯、回廊約 30 米、咖啡 40 席有記錄。不看展，不走屋頂坡。", "咖啡最多約 20 分鐘，而且要先確認全席禁煙、館內沒有吸煙室。未補到這句前不入店飲食。回廊仍可看。", "進館或看回廊不必先訂咖啡。本次不打電話訂咖啡。", "【照片】運河和建築線條。不追高處。", "Nov 26 不是第 2 或第 4 個星期一，仍可能因事業改開館日。", book(A_MUSE, URL_MUSE, "【區別】進館免費。咖啡不是免約見學，也未核到無煙室原文。")].join("\n")
    }),
    evt({
      id: "evt_d2_return", day: 2, time: null, timeHint: "afternoon", type: "note",
      title: "必須於船時17:00到松が枝碼頭｜當地時未填", cityId: "nagasaki", moodColor: "#6B5E52",
      tags: ["船時17:00到碼頭", "當地時未填"],
      address: "Nagasaki Port Matsugae International Terminal, Matsugae-machi 7-16",
      addressLocal: "長崎県長崎市松が枝町7-16 長崎港松が枝国際ターミナル",
      transport: taxi("美術館", "松が枝", OP_JP),
      note: [SHOW, "近港：最遲 H 前 65 分鐘叫車。H 未填，不印當地鐘點。", "【候車】15–25 分鐘。【車程暫抓】10–15 分鐘，留 25–40 分鐘餘量。", "人若還在眼鏡橋：含配車 20–35 分鐘，再加至少 25 分鐘餘量，倒推叫車。", "保底是大浦海岸通電車站，步程現場看。不走哥拉巴長下坡。", CARD_N_RET, CARD_N_RET_ZH].join("\n")
    }),

    evt({
      id: "evt_d3_to_yusen", day: 3, time: "08:50", timeHint: "morning", type: "note",
      title: "放行後叫的士前往大濠公園", cityId: "fukuoka", moodColor: "#6B5E52",
      tags: ["放行後出發", "非已核出門鐘", "逐段叫車"],
      address: "Ohori Park, north entrance on Meiji-dori",
      addressLocal: "福岡県福岡市中央区大濠公園 明治通り側北入口",
      transport: taxi("中央碼頭", "大濠公園", OP_JP),
      note: ["通關放行後另叫的士前往明治通側北入口。", CARD_F1, CARD_F1_ZH].join("\n")
    }),
    evt({
      id: "evt_d3_yusen", day: 3, time: "09:00", timeHint: "morning", type: "sight",
      title: "大濠公園", cityId: "fukuoka", moodColor: "#5C5348",
      tags: ["當地JST", "湖岸短線"],
      address: "Ohori Park, north entrance on Meiji-dori",
      addressLocal: "福岡県福岡市中央区大濠公園 明治通り側北入口",
      openHours: "普通湖岸公共區域",
      price: "普通湖岸免費",
      website: "https://www.ohorikouen.jp/map/",
      note: "抵達後湖岸短遊約60–75分鐘，10:35收束。明治通側北入口往Boathouse、觀月橋近岸看湖景，沿原路回接車側。每段步行及站拍20–30分鐘，長椅休5分鐘；不繞全湖。"
    }),
    evt({
      id: "evt_d3_to_hm", day: 3, time: "10:40", timeHint: "morning", type: "transport",
      title: "前往華味鳥筑紫口店", cityId: "fukuoka",
      tags: ["當地JST", "逐段叫車"],
      address: null,
      addressLocal: "福岡県福岡市中央区大濠公園 明治通り側北入口",
      transport: taxi("大濠公園", "華味鳥筑紫口店", OP_JP),
      note: ["另叫的士到華味鳥博多駅筑紫口店。", CARD_F2, CARD_F2_ZH].join("\n")
    }),
    evt({
      id: "evt_d3_diet", day: 3, time: "11:40", timeHint: "morning", type: "note",
      title: "餐廳忌口卡", cityId: "fukuoka", moodColor: "#6A5348",
      tags: ["給餐廳", "排序"],
      note: dietNote()
    }),
    evt({
      id: "evt_d3_hm", day: 3, time: "11:45", timeHint: "morning", type: "food",
      title: "華味鳥筑紫口店", cityId: "fukuoka", moodColor: "#6A5348",
      tags: ["未訂位", "當地JST"],
      address: "Hakata Hanamidori Chikushiguchi",
      addressLocal: "福岡県福岡市博多区博多駅東1-13-31 駅東サンシティビル1F",
      phone: "092-432-8737",
      openHours: "當地 JST 11:30–15:00，最後點餐 14:00。平日限定御膳。Nov 27 週五依規則應有午市，不是臨休保證。",
      price: "水炊御膳 ¥1,980／人。未訂位。",
      website: URL_HM,
      note: ["建議：水炊御膳。品牌湯、雞丸和 ponzu 的公開用料沒有列出牛、蝦、蟹；這不是分店當天每一鍋的保證。當日小鉢、唐揚、湯和高湯仍要問。不要加柚胡椒。預醃若不能去掉，先告訴我們。", "終日禁煙，沒有吸煙專室，有餐桌椅。1F 外觀看不到外梯；門內高差未核，不稱已核無障礙。", "用餐約 75 分鐘，不要拉成 90 分鐘。", "未見普通午餐必須預約。平日御膳頁寫電話詢問，本行不打電話。未必須預約 ≠ 免排隊。3 人桌和等候座位未核。不要說成網訂已開。", "不要去祇園店（沒有午餐）或駅前店（另有電子煙室）。不是別館。", "【預約】午餐仍是建議，不是已訂位。", MAIL, "【核對】" + CHECK].join("\n")
    }),
    evt({
      id: "evt_d3_to_machiya", day: 3, time: "13:00", timeHint: "afternoon", type: "transport",
      title: "前往博多町家", cityId: "fukuoka",
      tags: ["當地JST", "逐段叫車"],
      address: null,
      addressLocal: "福岡県福岡市博多区博多駅東1-13-31",
      transport: taxi("華味鳥筑紫口店", "博多町家", OP_JP),
      note: [CLOCK, SHOW, "【候車】15–25 分鐘。【車程暫抓】10–15 分鐘。", ride(""), CARD_F4, CARD_F4_ZH].join("\n")
    }),
    evt({
      id: "evt_d3_machiya", day: 3, time: "13:40", timeHint: "afternoon", type: "sight",
      title: "博多町家", cityId: "fukuoka", moodColor: "#5C5348",
      tags: ["當地JST", "現場買票"],
      address: "Hakata Machiya Furusato-kan",
      addressLocal: "福岡県福岡市博多区冷泉町6-10 博多町家ふるさと館",
      openHours: "當地 JST 10:00–18:00，入館至 17:30。織實演午後 13:30–15:00。",
      price: "一般入館 200 円，現場買，3 人按個人票。織實演觀看免費且無需預約。整館不是免費。",
      website: "https://hakatamachiya.com/access/",
      note: [CLOCK, WALK, "看博多織實演、町家建築和製品。每 30 分鐘休 5 分鐘。入口和椅子未核，不因此刪掉整個下午。", "週三及 Jul–Sep 休演。Nov 休館含 Nov 24，Nov 27 不在該休館日。週五午後場依規則應有，可能臨時停演。不是保證不停。", "本次只看，不安排機織上手，也不約英語導覽或付費繪付／曲物。", "【照片】格子立面和織機。遵守現場可拍指示。", "不入神社、不參拜。", book(A_MACHI, URL_MACHI, "【區別】入館是 B：200 円現場票。實演觀看是 A：免費且預約不要。兩句不要併成整館免費。")].join("\n")
    }),
    evt({
      id: "evt_d3_street", day: 3, time: "14:45", timeHint: "afternoon", type: "sight",
      title: "冷泉町街景", cityId: "fukuoka", moodColor: "#5C5348",
      tags: ["當地JST", "免費免約"],
      address: "Reisen-machi and Kami-Kawabata streetscape",
      addressLocal: "福岡県福岡市博多区冷泉町 博多町家ふるさと館付近",
      openHours: "街道外觀，沒有開館時間。",
      price: "公共街道，無需預約或門票。不是整區零坡。",
      website: URL_YAMA,
      note: [CLOCK, WALK, "只沿現場確認的平路走一小段。約 30 分鐘後休 5 分鐘。對面山笠只看外觀，不入神社、不參拜。", "【照片】山笠外觀，平地取景。", book(A_STREET, URL_YAMA + "（位置頁，不涉及售票）；街景與 " + URL_BRIDGE + " 同屬公共外觀這一句", "【區別】A：外觀免費、無需預約。不寫成整條街沒有坡。")].join("\n")
    }),
    evt({
      id: "evt_d3_return", day: 3, time: null, timeHint: "afternoon", type: "note",
      title: "必須於船時17:00到中央碼頭｜當地時未填", cityId: "fukuoka", moodColor: "#6B5E52",
      tags: ["船時17:00到碼頭", "當地時未填"],
      address: "Chuo Wharf Cruise Center, Okihama-machi 24-25",
      addressLocal: "福岡県福岡市博多区沖浜町24-25 中央ふ頭クルーズセンター",
      transport: taxi("冷泉町", "中央碼頭郵輪中心", OP_JP),
      note: [SHOW, "町家區最遲 H 前 75 分鐘開始叫車。H 未填，不印當地鐘點。", "【候車】15–25 分鐘。【車程暫抓】15–25 分鐘，留 25–45 分鐘餘量。", "必須講 24-25／クルーズセンター。不要只開到 14-1。若巴士在 14-1 下來，還要再走約 500 米，不預設適合媽媽。", CARD_F_RET, CARD_F_RET_ZH].join("\n")
    }),

    evt({
      id: "evt_d4_b0", day: 4, time: "08:50", timeHint: "morning", type: "note",
      title: "包車會合卡｜原單09:00時區與樓層待核", cityId: "busan", moodColor: "#6B5E52",
      tags: ["行前核對", "訂單09:00時區待核", "非接車時間"],
      address: "Busan Port International Passenger Terminal",
      addressLocal: "부산광역시 동구 충장대로 206 부산항 국제여객터미널",
      website: "https://www.busanpa.com/eng/index.bpa?menuCd=DOM_000000202003001000",
      note: ["08:50 只為排在接車之前，不是 08:00，也不是已改的接車時間。", SHOW, CARD_B0, CARD_B0_ZH, "【預約】包車時段已購買；09:00 的時區、實際會合樓層，以及船方放行是否接得上均待核，所以這張保持待定。沒有把訂單改寫。"].join("\n")
    }),
    evt({
      id: "evt_d4_to_songdo", day: 4, time: "09:00", timeHint: "morning", type: "note",
      title: "原單09:00包車前往松島出發站｜時區與會合樓層待核", cityId: "busan", moodColor: "#6B5E52",
      tags: ["訂單09:00時區待核", "已訂包車", "非已核出門鐘"],
      address: "Songdo Marine Cable Car, Bay Station",
      addressLocal: "부산광역시 서구 송도해변로 171 송도베이스테이션",
      transport: taxi("北港", "松島出發站", OP_KR),
      note: [CLOCK, "原訂單接車文字為 09:00；時區及實際會合位置仍須供應商核對，不能先當成船時或已核 KST。船鐘與入境放行未接妥前，不保證趕得上。", "【車程暫抓】30–50 分鐘。會合和上下車另留約 10 分鐘。", SHOW, ride(" 纜車票見下一站：現場買；當天買的網上票當天不能用。"), CARD_B1, CARD_B1_ZH].join("\n")
    }),
    evt({
      id: "evt_d4_cable", day: 4, time: "10:00", timeHint: "morning", type: "sight",
      title: "松島纜車", cityId: "busan", moodColor: "#3D5348",
      tags: ["當地KST", "現場買票"],
      address: "Songdo Marine Cable Car, Bay Station",
      addressLocal: "부산광역시 서구 송도해변로 171 송도베이스테이션",
      openHours: "當地 KST，Nov 09:00–21:00。售票到結束前 30 分。惡天候可停。",
      price: "須現場購票。票價金額本輪不填。網上預售要翌日才能用，當天買的網上票當天不能用。免網上預約 ≠ 免費 ≠ 免排隊。",
      website: "https://busanaircruise.co.kr/info/time?rank=2",
      note: [CLOCK, WALK, "1F 買票，按電梯指示上 4F 候乘。去對岸，在 1F 廣場看海，再回來。往返要重新排隊。排隊、下車和約 30 分鐘活動之後都算進 5 分鐘休息，不要久站。久站就先休息或不搭。", "車不到 4F。1F 售票和 4F 月台有電梯記錄，不是保證本團的連續無階路線。輪椅 FAQ 只是設施說明，本團不需要輪椅。", "對岸 2F 景觀咖啡可刪。先確認升降和禁煙才用。", "【照片】艙內海灣，以及對岸 1F 廣場。不追吊橋和公園爬坡。", "Nov 28 不在既有紀錄的 Nov 30–Dec 1 檢修段；本輪沒有再打開檢修日曆，所以不把這句寫成保證不停駛。", book(A_CABLE, URL_CABLE, "【區別】B：不必網上預約，現場購票。不是免費，也不保證有位子坐著等。")].join("\n")
    }),
    evt({
      id: "evt_d4_to_hotel", day: 4, time: "11:30", timeHint: "morning", type: "transport",
      title: "前往松島酒店午餐", cityId: "busan",
      tags: ["當地KST", "已訂包車"],
      address: null,
      addressLocal: "부산광역시 서구 송도해변로 171",
      transport: taxi("松島出發站", "Songdo Kitchen", OP_KR),
      note: [CLOCK, SHOW, "同一輛包車短送。聯絡和上下車留 10–15 分鐘。短程未測距。不要讓父母沿著沙灘走。", ride(""), CARD_B2, CARD_B2_ZH].join("\n")
    }),
    evt({
      id: "evt_d4_diet", day: 4, time: "11:50", timeHint: "morning", type: "note",
      title: "餐廳忌口卡", cityId: "busan", moodColor: "#6A5348",
      tags: ["給餐廳", "排序"],
      note: dietNote() + "\n東區鱈魚湯仍在另查，尚未選定，不排進今天，也不換成本日午餐。"
    }),
    evt({
      id: "evt_d4_lunch", day: 4, time: "12:00", timeHint: "afternoon", type: "food",
      title: "Songdo Kitchen", cityId: "busan", moodColor: "#6A5348",
      tags: ["未訂位", "當地KST"],
      address: "Songdo Kitchen, Fairfield Songdo Beach 22F",
      addressLocal: "부산광역시 서구 송도해변로 113 페어필드 바이 메리어트 부산 송도 비치 22F",
      phone: "051-260-0050",
      openHours: "當地 KST 12:00–14:30，最後點餐 14:00。未見 Nov 28 停業公告，不是當日保證。",
      price: "方向是熟熱麵、起司披薩或烤鰻飯。金額本輪不填。未訂位。",
      website: URL_SONG,
      note: ["建議方向：培根奶油麵、起司披薩、烤鰻飯這類熟熱菜。不要海鮮濃湯、蝦麵、牛排或辣菜。醬和副菜當場核。沙拉台不是每樣都適合，可以請同行者取。", "限量、須另約的招牌豬肉不要當成進門就有。", "酒店全棟禁煙。正門到餐廳有電梯的記錄。22F 有桌椅和海景記錄，不保證窗位。", "用餐約 70 分鐘。希望 12:00 左右到，不要 14:00 才進門。", "本日午餐維持這裡。東區鱈魚湯仍在另查，尚未選定，不排進來。", "【預約】午餐仍是建議，不是已訂位。3 人席沒有訂成。", MAIL, "【核對】" + CHECK].join("\n")
    }),
    evt({
      id: "evt_d4_to_base", day: 4, time: "13:10", timeHint: "afternoon", type: "transport",
      title: "返回松島出發站", cityId: "busan",
      tags: ["當地KST", "已訂包車"],
      address: null,
      addressLocal: "부산광역시 서구 송도해변로 113",
      transport: taxi("Songdo Kitchen", "松島出發站", OP_KR),
      note: [CLOCK, SHOW, "同一輛包車短送回出發站一帶。每次聯絡和上下車留 10–15 分鐘。不假定車停在門外等。", ride(""), CARD_B_BACK, CARD_B_BACK_ZH].join("\n")
    }),
    evt({
      id: "evt_d4_sea", day: 4, time: "13:30", timeHint: "afternoon", type: "sight",
      title: "松島海邊平路", cityId: "busan", moodColor: "#3D5348",
      tags: ["當地KST", "部分待核"],
      address: "Songdo Bay Station seaside road",
      addressLocal: "부산광역시 서구 송도해변로 171 송도베이스테이션",
      openHours: "海邊馬路沒有開館時間。站內 1F／3F 是否要票，現場看標示。",
      price: "海邊馬路側無需預約。1F Photo Zone 和 3F Bay Terrace 沒有核成免費入場。",
      website: URL_FLOOR,
      note: [CLOCK, WALK, "最多分兩段，各約 25–30 分鐘，中間休 5 分鐘；最遲 H 前 90 分鐘停止遊覽並開始收尾，H 前 75 分鐘已上車離區。H 未填前不把 13:30 當成確定可開始。先走出發站附近、海邊馬路側已確認的平路看海。", "3F Bay Terrace 是同一棟的替代：有露台／咖啡。升降跟現場標示，不爬梯。座位數和禁煙未核，不當固定吃飯的地方。", "1F Photo Zone 與 3F 是否必須持纜車票，尚未確認。不要當成已確認的免費室內點。", "不上沙灘，不走長海岸，不去吊橋，不在公園爬坡。", "【照片】由出發站和海邊馬路側拍纜車過海，和 22F 俯瞰不同。不靠延長吃飯來充數。", book(A_SEA, URL_FLOOR, "【區別】海邊馬路是 A。站內 1F／3F 是未確認，保持待核。")].join("\n")
    }),
    evt({
      id: "evt_d4_return", day: 4, time: null, timeHint: "afternoon", type: "note",
      title: "必須於船時16:00到北港碼頭｜當地時未填", cityId: "busan", moodColor: "#6B5E52",
      tags: ["船時16:00到碼頭", "當地時未填"],
      address: "Busan Port International Passenger Terminal, Chungjang-daero 206",
      addressLocal: "부산광역시 동구 충장대로 206 부산항 국제여객터미널",
      transport: taxi("松島", "北港", OP_KR),
      note: [SHOW, "最遲在 H 前 75 分鐘已經坐在車上離開松島。上車前另留約 15 分鐘收尾。H 未填，所以不印 KST 鐘點，也不用 12:00 去減。", "【車程暫抓】30–50 分鐘，留 25–45 分鐘餘量。路況更長就更早走。", "不必用完 9 小時。16:30 到碼頭不算達標；達標是船時 16:00 到忠壯大路 206。", CARD_B3, CARD_B3_ZH].join("\n")
    })
  ]
};


// 現 main 的時間軸只顯示 item.time 或「彈性」，不讀自訂時間欄文案。
// 可見警告改放 headerTitle、每日 note 標題／tags、回港 note 標題與碼頭地址。

const INSPIRATIONS = [
  {
    id: "ins_d1_rain", title: "雨天改水族館上午", tag: "RAINY", type: "sight",
    cityId: "kagoshima", nearEventId: "evt_d1_garden", status: "wishlist", source: "ai",
    address: "Io World Kagoshima Aquarium",
    addressLocal: "鹿児島県鹿児島市本港新町3-1",
    website: "https://ioworld.jp/information",
    price: "非市民大人 2,000 円",
    openHours: "當地 JST 09:30–18:00",
    note: "上午改水族館，午餐後再看雨勢，13:00 後才回切子見學。不要在雨裡走園，也不另加歷史館。\n" + book(A_AQ, URL_AQ) + "\n用這張替代卡，不兩邊都去：\n" + CARD_K4 + "\n" + CARD_K4_ZH
  },
  {
    id: "ins_d1_tired", title: "體力不足時刪切子或縮水族館", tag: "TIRED", type: "note",
    cityId: "kagoshima", nearEventId: "evt_d1_kiriko", status: "wishlist", source: "ai",
    note: "先刪切子，或縮短水族館一段。仍留上午庭園和下午 5F。5 分鐘休息不刪。"
  },
  {
    id: "ins_d1_k3", title: "ふくや電梯不能用才改黒かつ亭", tag: "FOOD", type: "food",
    cityId: "kagoshima", nearEventId: "evt_d1_fukuya", status: "wishlist", source: "ai",
    address: "Kurokatsutei / Kurobee",
    addressLocal: "鹿児島県鹿児島市山下町2-2",
    website: URL_KURO,
    phone: null,
    openHours: "當地 JST 午餐 11:00–14:30",
    price: "未訂位。不是本日改選。",
    note: "只在酒店電梯不能往返時使用。希望普通椅，不是掘式。室內禁煙、吸煙處在屋外。空位不保證。沒有另寄電郵。\n" + CARD_K3 + "\n" + CARD_K3_ZH
  },
  {
    id: "ins_d1_traffic", title: "仙巌園叫不到車就直接回港", tag: "TIME", type: "transport",
    cityId: "kagoshima", nearEventId: "evt_d1_garden", status: "wishlist", source: "ai",
    note: "請受付代叫。巴士只是應急。若還在園裡，最遲 H 前 80 分鐘回港，不繞水族館。H 未填。"
  },
  {
    id: "ins_d2_rain", title: "雨天縮短水之庭園", tag: "RAINY", type: "sight",
    cityId: "nagasaki", nearEventId: "evt_d2_park", status: "wishlist", source: "ai",
    note: "公園縮成約 30 分鐘海港段。大雨不硬走戶外。館未開不說能進。午後仍可留公共回廊。\n" + book(A_PARK, URL_PARK)
  },
  {
    id: "ins_d2_drop_ruri", title: "刪瑠璃庵，保留午後", tag: "TIRED", type: "note",
    cityId: "nagasaki", nearEventId: "evt_d2_rurian", status: "wishlist", source: "ai",
    note: "放行晚或體力不夠，先刪瑠璃庵，縮河岸。保留已核的硬鋪公園，以及午後運河、眼鏡橋至少一處。5 分鐘休息不刪。\n" + book(A_RURI, URL_RURI)
  },
  {
    id: "ins_d2_pave", title: "Pavé 僅在接受自助餐後", tag: "FOOD", type: "food",
    cityId: "nagasaki", nearEventId: "evt_d2_katsu", status: "wishlist", source: "ai",
    address: "Restaurant Pave, ANA Crowne Plaza Nagasaki Gloverhill 2F",
    addressLocal: "長崎県長崎市南山手町1-18",
    website: URL_PAVE,
    phone: "095-818-8012",
    openHours: "當地午市以 14:30 前完成較保守。收店資料有 15:00／14:30 差異，不依賴較晚時段。",
    price: "Nov 自助餐 ¥3,300／成人。未訂位。家人尚未接受。",
    note: "不是本日改選，不自動切換。只在家人接受 buffet、並願意逐道核醬料之後才用。不能寫成午市一定有雞排或豬排單點。全席禁煙、餐廳無吸煙專室有記錄。酒店玄關落客。\n" + CARD_N5 + "\n" + CARD_N5_ZH
  },
  {
    id: "ins_d3_ohori", title: "Royal Garden Cafe 大濠公園", tag: "RAINY", type: "sight",
    cityId: "fukuoka", nearEventId: "evt_d3_yusen", status: "wishlist", source: "ai",
    address: "Ohori Park, short lakeside",
    addressLocal: "福岡県福岡市中央区大濠公園",
    website: URL_OHORI,
    openHours: "咖啡週五當地 11:00 起。公園短段沒有開館時間。",
    price: "湖邊短段無需門票。咖啡是飲食，不標成免約見學。",
    note: "湖景咖啡備案；週五11:00開門，上午不等開門。\n" + book(A_OHORI, URL_OHORI) + "\n" + CARD_F3 + "\n" + CARD_F3_ZH
  },
  {
    id: "ins_d3_tired", title: "下午縮街景，留實演", tag: "TIRED", type: "note",
    cityId: "fukuoka", nearEventId: "evt_d3_sumiyoshi", status: "wishlist", source: "ai",
    note: "縮掉街景，留下織實演和 5 分鐘休息。不加酒販購物。"
  },
  {
    id: "ins_d3_tight", title: "時間不夠就留在町家區", tag: "TIME", type: "note",
    cityId: "fukuoka", nearEventId: "evt_d3_machiya", status: "wishlist", source: "ai",
    note: "H 若容不下跨去大濠，不要硬串三區。町家區回港仍是 H 前 75 分鐘開始叫車。"
  },
  {
    id: "ins_d4_rain", title: "停駛或下雨留在出發站", tag: "RAINY", type: "sight",
    cityId: "busan", nearEventId: "evt_d4_cable", status: "wishlist", source: "ai",
    addressLocal: "부산광역시 서구 송도해변로 171",
    website: URL_FLOOR,
    note: "已放行就能開始的話，先用站內可遮蔽的地方。不要把 1F Photo Zone 或 3F 寫成已確認免費。中午仍吃酒店午餐。午後留同一棟裡、現場標示走得到的看海方向，不要用「一吃完就回港」取代午後。風雨大不硬走海邊。\n" + book(A_SEA, URL_FLOOR)
  },
  {
    id: "ins_d4_b4", title: "對岸停駛緊急卡", tag: "TIME", type: "note",
    cityId: "busan", nearEventId: "evt_d4_cable", status: "wishlist", source: "ai",
    address: "Songdo Sky Park",
    addressLocal: "부산광역시 서구 암남공원로 181",
    note: "只在人已經在對岸、纜車回不去時用。地址不是已核的上車點。\n" + CARD_B4 + "\n" + CARD_B4_ZH
  },
  {
    id: "ins_d4_tired", title: "刪對岸遠端，留近處", tag: "TIRED", type: "note",
    cityId: "busan", nearEventId: "evt_d4_cable", status: "wishlist", source: "ai",
    note: "刪對岸 2F 和下午較遠的一段。留 1F 附近能走的平路，約 30 分鐘後休 5 分鐘。不因此把站內照片區說成免費。"
  },
  {
    id: "ins_d4_photo", title: "午後與 22 樓不同的海", tag: "PHOTO", type: "note",
    cityId: "busan", nearEventId: "evt_d4_sea", status: "wishlist", source: "ai",
    note: "上午艙內和對岸廣場是一種。午後在出發站與海邊馬路側拍纜車過海，是另一種。不靠多坐一會兒吃飯來補照片。1F／3F 免費與否仍未核。"
  }
];

const DAILY_EXTRAS = {
  "1": { shopping: ["日圓現金，給偏遠叫車", "薄雨具", "船方當日船鐘說明，用來填司機卡空白"] },
  "2": { shopping: ["日圓現金", "船方當日船鐘說明"] },
  "3": { shopping: ["日圓現金", "船方當日船鐘說明"] },
  "4": { shopping: ["韓圓現金", "船方當日船鐘說明", "填好當地空白後才出示的包車卡"] }
};

const BUDGET = {
  categories: ["transport", "food", "hotel", "shop", "ticket", "other"],
  estimates: null,
  expenses: []
};

const PHRASE_DATA = [
  { category: "出示前", items: [
    { term_primary: "船内時刻は日本・韓国の現地時刻と同じです。", term_secondary: "船時與日本、韓國當地時間相同。", term_pronounce: "船時對照" }
  ]},
  { category: "鹿兒島司機", items: [
    { term_primary: "仙巌園へ。平坦な降車場所を確認してください。", term_secondary: "完整卡請開本日對應行程或備案備註；先核船鐘。", term_pronounce: "K1 仙巌園" },
    { term_primary: "黒豚ふくや本店へ。ホテル側の入口を使います。", term_secondary: "完整卡請開本日對應行程或備案備註；先核船鐘。", term_pronounce: "K2 ふくや" },
    { term_primary: "午後のかごしま水族館へ。入口近くで降車希望です。", term_secondary: "完整卡請開本日對應行程或備案備註；先核船鐘。", term_pronounce: "午後水族館" },
    { term_primary: "雨天の代替はかごしま水族館です。", term_secondary: "完整卡請開本日對應行程或備案備註；先核船鐘。", term_pronounce: "K4 雨天才用" },
    { term_primary: "黒かつ亭／黒べぇへ。普通の椅子を希望します。", term_secondary: "完整卡請開本日對應行程或備案備註；先核船鐘。", term_pronounce: "K3 電梯失敗" },
    { term_primary: "現地の帰港期限が空欄のカードは使用不可。", term_secondary: "完整卡請開本日對應行程或備案備註；先核船鐘。", term_pronounce: "回海洋港" }
  ]},
  { category: "長崎司機", items: [
    { term_primary: "水辺の森公園・水の庭園側へ。坂と階段は避けます。", term_secondary: "完整卡請開本日對應行程或備案備註；先核船鐘。", term_pronounce: "N6 水之庭園" },
    { term_primary: "瑠璃庵へ。予約なしの制作見学は未確認です。", term_secondary: "完整卡請開本日對應行程或備案備註；先核船鐘。", term_pronounce: "N4 瑠璃庵可刪" },
    { term_primary: "勝鹿新地店へ。新地町12-10です。", term_secondary: "完整卡請開本日對應行程或備案備註；先核船鐘。", term_pronounce: "N2 勝鹿" },
    { term_primary: "眼鏡橋は平地から遠くを見るだけです。", term_secondary: "完整卡請開本日對應行程或備案備註；先核船鐘。", term_pronounce: "N3 眼鏡橋可刪" },
    { term_primary: "長崎県美術館の回廊へ。展示は見ません。", term_secondary: "完整卡請開本日對應行程或備案備註；先核船鐘。", term_pronounce: "回廊" },
    { term_primary: "カフェは禁煙確認後です。未確認なら利用しません。", term_secondary: "完整卡請開本日對應行程或備案備註；先核船鐘。", term_pronounce: "N1 咖啡條件" },
    { term_primary: "Pavéは家族がビュッフェを了承した場合のみです。", term_secondary: "完整卡請開本日對應行程或備案備註；先核船鐘。", term_pronounce: "N5 未接受" },
    { term_primary: "現地の帰港期限が空欄のカードは使用不可。", term_secondary: "完整卡請開本日對應行程或備案備註；先核船鐘。", term_pronounce: "回松が枝" }
  ]},
  { category: "福岡司機", items: [
    { term_primary: "大濠公園の明治通り側北入口へ。", term_secondary: "完整卡請開本日對應行程或備案備註；先核船鐘。", term_pronounce: "F1 大濠公園" },
    { term_primary: "華味鳥筑紫口店へ。", term_secondary: "完整卡請開本日對應行程或備案備註；先核船鐘。", term_pronounce: "F2 筑紫口" },
    { term_primary: "博多町家へ。織物実演を見る予定です。", term_secondary: "完整卡請開本日對應行程或備案備註；先核船鐘。", term_pronounce: "F4 町家" },
    { term_primary: "ロイヤルガーデンカフェ大濠公園へ。", term_secondary: "完整卡請開本日對應行程或備案備註；先核船鐘。", term_pronounce: "F3 大濠咖啡" },
    { term_primary: "現地の帰港期限が空欄のカードは使用不可。", term_secondary: "完整卡請開本日對應行程或備案備註；先核船鐘。", term_pronounce: "回中央碼頭" }
  ]},
  { category: "釜山包車", items: [
    { term_primary: "원래 09:00의 시간대와 만날 층은 미확인입니다.", term_secondary: "完整卡請開本日對應行程或備案備註；先核船鐘。", term_pronounce: "B0 會合" },
    { term_primary: "송도베이스테이션으로 가 주세요.", term_secondary: "完整卡請開本日對應行程或備案備註；先核船鐘。", term_pronounce: "B1 松島" },
    { term_primary: "송도키친 22층으로 가 주세요. 좌석은 미예약입니다.", term_secondary: "完整卡請開本日對應行程或備案備註；先核船鐘。", term_pronounce: "B2 午餐" },
    { term_primary: "같은 예약 차량으로 송도베이스테이션에 돌아갑니다.", term_secondary: "完整卡請開本日對應行程或備案備註；先核船鐘。", term_pronounce: "回出發站" },
    { term_primary: "현지 귀항 마감이 빈 카드는 사용하지 마세요.", term_secondary: "完整卡請開本日對應行程或備案備註；先核船鐘。", term_pronounce: "B3 回北港" },
    { term_primary: "케이블카로 못 돌아갑니다. 직원과 기사님께 도움을 요청합니다.", term_secondary: "完整卡請開本日對應行程或備案備註；先核船鐘。", term_pronounce: "B4 緊急" }
  ]},
  {"category": "餐廳日文", "items": [{"term_primary": "父は海老・蟹を食べません。だし・ソース・付け合わせにも入っていますか？", "term_secondary": "爸爸不吃蝦蟹，包括湯底、醬汁與配菜。", "term_pronounce": "爸爸"}, {"term_primary": "母は牛肉を食べません。だし・ソース・付け合わせにも入っていますか？", "term_secondary": "媽媽不吃牛，包括湯底、醬汁與配菜。", "term_pronounce": "媽媽"}, {"term_primary": "禁煙の椅子席をお願いします。辛くしないでください。", "term_secondary": "禁煙、椅子座位、不要辣。", "term_pronounce": "禁煙椅子"}]},
  {"category": "餐廳韓文", "items": [{"term_primary": "아버지는 새우와 게를 먹지 않습니다. 국물, 소스, 반찬에도 들어 있나요?", "term_secondary": "爸爸不吃蝦蟹，包括湯底、醬汁與配菜。", "term_pronounce": "爸爸"}, {"term_primary": "어머니는 소고기를 먹지 않습니다. 국물, 소스, 반찬에도 들어 있나요?", "term_secondary": "媽媽不吃牛，包括湯底、醬汁與配菜。", "term_pronounce": "媽媽"}, {"term_primary": "금연인 곳의 의자 좌석으로 부탁드립니다. 맵지 않게 해 주세요.", "term_secondary": "禁煙、椅子座位、不要辣。", "term_pronounce": "禁煙椅子"}]}
];

// Compact existing timeline; cards open on demand inside the existing modals.
const SHORE_CARDS = {
  evt_d1_to_garden: [CARD_K1, CARD_K1_ZH],
  evt_d1_to_fukuya: [CARD_K2, CARD_K2_ZH],
  evt_d1_to_aq: [CARD_K_AQ, CARD_K_AQ_ZH],
  ins_d1_rain: [CARD_K4, CARD_K4_ZH],
  ins_d1_k3: [CARD_K3, CARD_K3_ZH],
  evt_d1_return: [CARD_K_RET, CARD_K_RET_ZH],
  evt_d2_to_park: [CARD_N6, CARD_N6_ZH],
  evt_d2_to_rurian: [CARD_N4, CARD_N4_ZH],
  evt_d2_to_katsu: [CARD_N2, CARD_N2_ZH],
  evt_d2_to_megane: [CARD_N3, CARD_N3_ZH],
  evt_d2_to_museum: [CARD_N_MUSE, CARD_N_MUSE_ZH],
  ins_d2_pave: [CARD_N5, CARD_N5_ZH],
  evt_d2_return: [CARD_N_RET, CARD_N_RET_ZH],
  evt_d3_to_yusen: [CARD_F1, CARD_F1_ZH],
  evt_d3_to_hm: [CARD_F2, CARD_F2_ZH],
  evt_d3_to_machiya: [CARD_F4, CARD_F4_ZH],
  ins_d3_ohori: [CARD_F3, CARD_F3_ZH],
  evt_d3_return: [CARD_F_RET, CARD_F_RET_ZH],
  evt_d4_b0: [CARD_B0, CARD_B0_ZH],
  evt_d4_to_songdo: [CARD_B1, CARD_B1_ZH],
  evt_d4_to_hotel: [CARD_B2, CARD_B2_ZH],
  evt_d4_to_base: [CARD_B_BACK, CARD_B_BACK_ZH],
  evt_d4_return: [CARD_B3, CARD_B3_ZH],
  ins_d4_b4: [CARD_B4, CARD_B4_ZH]
};
const SHORE_FULL_TEXTS = Object.values(SHORE_CARDS).flat();
ITINERARY.items = ITINERARY.items.filter(e => !/_diet$/.test(e.id) && e.id !== 'evt_d4_b0');
for (const e of ITINERARY.items) {
  let note = e.note || '';
  for (const text of SHORE_FULL_TEXTS) if (text) note = note.split(text).join('');
  for (const text of [CLOCK, SHOW, WALK]) if (text) note = note.split(text).join('');
  note = note.replace(/\n{3,}/g, '\n\n').trim();
  if (e.transport) {
    e.type = 'transport';
    e.title = /_return$/.test(e.id) ? '返回郵輪碼頭' : e.transport.to;
    e.note = note + '\n司機卡請按下方按鈕。';
    if (/_return$/.test(e.id)) e.note = '到碼頭期限：船時' + (e.day===4?'16:00':'17:00') + '；當地換算待核。\n' + e.note;
    if (/to_garden|to_park|to_yusen/.test(e.id)) {
      e.time = null;
      e.note = '通關放行後即叫車；先核船鐘與當地時間，景點開門時間以當地鐘為準。\n' + e.note;
    }
  } else e.note = note;
  if (e.type==='food') e.note += '\n爸爸不吃蝦蟹；媽媽不吃牛。請用下方忌口卡確認湯底及醬料。';
}
if (typeof window !== 'undefined') window.addEventListener('load', function () {
  const original = window.fillModalActions;
  if (typeof original !== 'function') return;
  function card(title, text) {
    const old = document.getElementById('shore-show-card'); if(old) old.remove();
    const backdrop = document.createElement('div'); backdrop.id='shore-show-card';
    backdrop.style.cssText='position:fixed;inset:0;z-index:20000;background:rgba(0,0,0,.6);display:flex;align-items:center;justify-content:center;padding:18px;';
    const panel=document.createElement('section'); panel.setAttribute('role','dialog');panel.setAttribute('aria-modal','true');panel.setAttribute('aria-label',title);
    panel.style.cssText='background:#f4f2eb;color:#263d32;border-radius:18px;padding:22px;max-width:560px;width:100%;max-height:85vh;overflow-y:auto;box-sizing:border-box;';
    const close=document.createElement('button');close.textContent='關閉';close.className='btn-action btn-outline';close.onclick=()=>backdrop.remove();
    const heading=document.createElement('h2');heading.textContent=title;
    const body=document.createElement('div');body.style.cssText='white-space:pre-wrap;font-size:22px;line-height:1.65;overflow-wrap:anywhere;';body.textContent=text;
    panel.append(close,heading,body);backdrop.append(panel);backdrop.onclick=e=>{if(e.target===backdrop)backdrop.remove();};document.body.append(backdrop);close.focus();
    backdrop.addEventListener('keydown',e=>{if(e.key==='Escape')backdrop.remove();});
  }
  window.fillModalActions=function(data,layout){
    original(data,layout);
    const box=document.getElementById('modal-actions');
    function button(label,text){const b=document.createElement('button');b.type='button';b.className='btn-action btn-outline';b.textContent=label;b.onclick=()=>card(label,text);box.append(b);}
    if(SHORE_CARDS[data.id]) button('顯示司機卡',SHORE_CARDS[data.id].join('\n\n'));
    if(data.type==='food') {
      const ko=data.cityId==='busan';
      button('爸爸：不吃蝦蟹',ko?(data.id==='evt_d4_lunch'?'맵지 않게 가능한가요? 새우·게 육수는 빼 주세요.':'아버지는 새우와 게를 먹지 않습니다. 국물·소스에도 들어 있나요?'):'父は海老・蟹を食べません。だし・ソースにも入っていますか？');
      button('媽媽：不吃牛',ko?(data.id==='evt_d4_lunch'?'소고기 육수는 빼 주세요.':'어머니는 소고기를 먹지 않습니다. 육수·소스에도 들어 있나요?'):'母は牛肉を食べません。だし・ソースにも入っていますか？');
    }
  };
});

// Concise modal copy: hours, prices and actionable notes only.
const SHORE_MODAL_COPY = {"evt_d1_garden": ["09:00–17:00；最終入園16:30（JST）", "成人¥1,600（含御殿、尚古集成館）", "免預約，可現場買票。\n沿無障礙藍線分段看庭園，避開階梯及介助坡。約走30分鐘休5分鐘。\n拍照：以庭園作前景拍櫻島、錦江灣。"], "evt_d1_kiriko": ["09:00–16:30；休息10:00–10:15、12:00–13:00、15:00–15:15（JST）", "見學免費", "免預約，參觀玻璃製作。維修停工時略過。\n拍照前先問職員。雨天備案若上午改水族館，可於13:00後前來。"], "evt_d1_fukuya": ["午市11:30起（JST）", "炸豬排約¥2,600–2,900；生姜燒定食¥1,300", "已確認11/25 13:00、3人，訂位名SANDY LI。請提早10分鐘到。經酒店入口自行用電梯上2F。推薦豬排或生姜燒；套餐含炸蝦，當日再核忌口。全席禁煙。"], "evt_d1_aq": ["09:30–18:00；最終入館17:00（JST）", "成人¥2,000", "免預約，現場購票。\n看平層展示，再乘電梯到5F看錦江灣、櫻島。\n拍照：鏡頭靠近玻璃，減少反光。"], "evt_d2_park": ["24小時", "免費", "免預約。沿水之庭園海港硬鋪步道散步，約30分鐘在長椅休5分鐘。\n拍照：水景、海港與船隻；不走上坡。"], "evt_d2_rurian": ["09:30–17:00；週二休（JST）", null, "短逛玻璃店。先問當日能否觀看製作；不能便略過。\n本次不訂付費手作。"], "evt_d2_katsu": ["11:30–15:00；不定休（JST）", "豬排／雞排約¥1,000–1,600", "推薦豬排或雞排。新地町12-10，1F；全席禁煙。不接受預約，現場候位。"], "evt_d2_megane": ["全日開放", "免費", "免預約。平地遠拍眼鏡橋及河面倒影，不下河床或走階梯。"], "evt_d2_museum": ["咖啡11:00–17:00（JST）", "公共空間免費；咖啡另付", "免預約，不看展，拍運河、回廊及建築。\n咖啡只在確認禁煙後短坐。"], "evt_d3_yusen": ["普通湖岸公共區域", "普通湖岸免費", "抵達後湖岸短遊約60–75分鐘，10:35收束。明治通側北入口往Boathouse、觀月橋近岸看湖景，沿原路回接車側。每段步行及站拍20–30分鐘，長椅休5分鐘；不繞全湖。"], "evt_d3_hm": ["11:30–15:00；最後點餐14:00（JST）", "水炊御膳¥1,980", "水炊御膳，不加柚胡椒。全席禁煙。已訂11:45、3人。"], "evt_d3_machiya": ["10:00–18:00；最終入館17:30；織實演13:30–15:00（JST）", "入館¥200；觀看織實演免費", "入館及觀看實演均免預約。實演若取消便改逛町家。\n拍照：先問織機操作能否拍攝，再拍町家街景。"], "evt_d3_sumiyoshi": ["9:30–18:30；日祝休。11/27週五應開。", "店內購物", "14:40–15:25購物約45分鐘。店內短步。延誤先縮此段，最少約15分鐘；最晚16:05從本店上車。"], "evt_d4_cable": ["09:00–21:00；售票至20:30（KST）", "現場購票", "免預約。網票最早翌日使用，當天請現場買票。\n搭往返纜車，對岸只看1F廣場；不走吊橋或上坡公園。\n天候停駛便用雨天備案；排隊太久先刪對岸停留。"], "evt_d4_lunch": ["12:00–14:30；最後點餐14:00（KST）", null, "22F海景午餐，可選培根奶油麵、起司披薩或烤鰻飯。\n湯醬配菜用忌口卡確認。酒店全面禁煙，正門下車乘電梯。\n訂位詢問已寄，待確認。"], "evt_d4_sea": ["全日開放", "海邊公共路段免費", "走出發站附近海邊平路，不上沙灘。\n拍照：岸邊拍纜車過海。站內1F照片區／3F露台按現場票務標示進入。\n回港截止前90分鐘收尾，前75分鐘已上車離區。"]};
const SHORE_RIDE_COPY = {"evt_d1_to_garden": "通關放行後叫車；候車約30分鐘，車程約30–45分鐘。仙巌園09:00開門。", "evt_d1_to_fukuya": "離開前請受付代叫的士。候車約20–30分鐘，車程約25–40分鐘。", "evt_d1_to_aq": "另叫的士，候車約15–25分鐘，車程約10–20分鐘。", "evt_d1_return": "船時17:00前到海洋港碼頭；當地截止時間待船方核實。\n最遲於截止前95分鐘叫車；候車約20–30分鐘，車程約25–40分鐘。", "evt_d2_to_park": "通關放行後叫車，候車約15–25分鐘，車程約5–15分鐘。", "evt_d2_to_rurian": "另叫的士前往瑠璃庵；若不看製作可略過，直接到午餐。", "evt_d2_to_katsu": "另叫的士到勝鹿新地店：新地町12-10，1F。", "evt_d2_to_megane": "午餐後另叫的士到眼鏡橋，選平地落客。", "evt_d2_to_museum": "另叫的士到長崎縣美術館；於近入口處落客。", "evt_d2_return": "船時17:00前到松が枝碼頭；當地截止時間待船方核實。\n在美術館一帶，最遲於截止前65分鐘叫回港車。", "evt_d3_to_yusen": "通關放行後叫車，前往大濠公園明治通側北入口。", "evt_d3_to_hm": "另叫的士到華味鳥博多駅筑紫口店。", "evt_d3_to_machiya": "午餐後另叫的士到博多町家，銜接13:30–15:00織實演。", "evt_d3_to_sumiyoshi": "町家後另叫的士直達住吉酒販博多本店，預計約14:40到。", "evt_d3_return": "15:30從住吉酒販叫車，約15:55–16:20到中央ふ頭郵輪中心（沖浜町24-25）。船時17:00前到碼頭。\n最遲於截止前75分鐘叫車。", "evt_d4_to_songdo": "LOYQU包車接送。原單09:00，08:00提早接車、時區及會合樓層待確認。\n原單會合地點：北港國際客運站1F Arrival Hall；先與司機確認，不自行改樓層。", "evt_d4_to_hotel": "同一輛包車短送Fairfield松島酒店，正門下車，乘電梯上22F。", "evt_d4_to_base": "午餐後由同一輛包車送回松島出發站附近拍照。", "evt_d4_return": "船時16:00前到北港國際客運站（충장대로206）；當地截止時間待船方核實。\n截止前90分鐘收尾，前75分鐘已上車離區；車程約30–50分鐘。"};
for (const e of ITINERARY.items) {
 if (SHORE_MODAL_COPY[e.id]) [e.openHours,e.price,e.note] = SHORE_MODAL_COPY[e.id];
 if (SHORE_RIDE_COPY[e.id]) e.note = SHORE_RIDE_COPY[e.id];
}

// Place each port-to-first-stop transfer before sightseeing, without a made-up clock.
const SHORE_FIRST_LEGS = ['evt_d1_to_garden','evt_d2_to_park','evt_d3_to_yusen','evt_d4_to_songdo'];
if (typeof window !== 'undefined') window.addEventListener('load', function () {
  const getOriginal = window.getItemsByDay;
  window.getItemsByDay = function(day) {
    const rank = e => Number(SHORE_FIRST_LEGS.includes(e.id));
    return getOriginal(day).sort((a,b) => rank(b) - rank(a));
  };
  const renderOriginal = window.renderTimeline;
  window.renderTimeline = function(key) {
    renderOriginal(key);
    const day = Number(String(key).replace('day',''));
    const items = window.getItemsByDay(day);
    const rows = document.querySelectorAll('#timeline-container .timeline-item');
    rows.forEach((row,i) => {
      const item=items[i];if(!item)return;
      const time=row.querySelector('.card-time');
      if (time && SHORE_FIRST_LEGS.includes(item.id)) time.textContent='放行';
    });
  };
  window.renderTimeline(typeof currentDay === 'string' ? currentDay : 'day1');
});

// Driver-facing cards contain only destination, address and one access request.
for (const [id,pair] of Object.entries(SHORE_CARDS)) {
  const lines=pair[0].split('\n');
  let concise=lines.slice(0,2).map(x=>x.split('。')[0]).join('\n');
  if (id==='evt_d1_to_fukuya') concise+='\nホテル入口側で降ろしてください。';
  else if(id.startsWith('evt_d4')) concise+='\n입구 가까이에 내려 주세요.';
  else concise+='\n入口の近くで降ろしてください。';
  pair[0]=concise;pair[1]='';
}
const SHORE_BACKUP_COPY = {
ins_d1_rain:'雨天先遊水族館；13:00後視天氣到切子工場。仙巌園可刪。',
ins_d1_tired:'保留仙巌園近入口庭園；刪切子或縮短水族館，約走30分鐘休5分鐘。',
ins_d1_k3:'ふくや酒店側電梯不能使用時，改黒かつ亭／黒べぇ，選普通椅座。',
ins_d1_traffic:'先請仙巌園受付代叫的士；交通延誤便刪水族館，直接回海洋港。',
ins_d2_rain:'縮短公園散步，改美術館公共回廊；咖啡先確認禁煙。',
ins_d2_drop_ruri:'瑠璃庵當天不能看製作便略過，保留午餐及午後眼鏡橋。',
ins_d2_pave:'家人接受自助餐後才選Pavé；酒店正門下車，乘電梯上2F。',
ins_d3_ohori:'湖景咖啡備案；週五11:00開門，上午不等開門。',
ins_d3_tired:'刪冷泉町散步，保留博多町家及織實演。',
ins_d3_tight:'時間不足便留在町家區，不再跨區；預留回港叫車時間。',
ins_d4_rain:'纜車停駛或大雨時，改松島站附近室內觀景及酒店午餐。',
ins_d4_b4:'在對岸遇停駛：請站方與包車司機協調接回，不走吊橋或公園坡路。',
ins_d4_tired:'刪對岸遠端及較長散步，保留近站海景、酒店午餐。',
ins_d4_photo:'近站海邊平路拍纜車過海；露台按現場票務標示進入。'
};
for (const e of INSPIRATIONS) if(SHORE_BACKUP_COPY[e.id]) e.note=SHORE_BACKUP_COPY[e.id];
if(typeof window!=='undefined') window.addEventListener('load',function(){
 const original=window.inspirationCardHtml;
 window.inspirationCardHtml=function(ins){return original(ins).replace(/<p class="inspire-note">[\s\S]*?<\/p>/,'');};
 if(typeof window.renderInspirationPage==='function') window.renderInspirationPage();
});

// Backup headings identify the place or option, not acceptance conditions.
const SHORE_BACKUP_TITLES={
 ins_d1_rain:'鹿兒島水族館',ins_d1_tired:'仙巌園輕鬆路線',
 ins_d1_k3:'黒かつ亭／黒べぇ',ins_d1_traffic:'鹿兒島回港交通',
 ins_d2_rain:'長崎縣美術館',ins_d2_drop_ruri:'眼鏡橋與運河攝影',
 ins_d2_pave:'Pavé',ins_d3_ohori:'Royal Garden Cafe 大濠公園',
 ins_d3_tired:'博多町家與織實演',ins_d3_tight:'博多町家街區',
 ins_d4_rain:'松島室內觀景',ins_d4_b4:'松島對岸接車',
 ins_d4_tired:'松島近站海景',ins_d4_photo:'松島海邊攝影'
};
for(const e of INSPIRATIONS){
 if(SHORE_BACKUP_TITLES[e.id])e.title=SHORE_BACKUP_TITLES[e.id];
 if(e.id==='ins_d1_k3') e.note='豬扒午餐備選，選普通椅座。';
 if(e.id==='ins_d2_pave')e.note="自助午餐，電梯上2F。須逐道確認牛肉、蝦蟹及湯醬，未核清不選。";
 if(e.id==='ins_d3_ohori')e.note="湖景咖啡與桌椅休息；週五11:00開門，上午不等開門。";
}


// Approved travel-data delta, Nov 15: no app, schema or rendering changes.
const SHORE_APPROVED_DELTA = (() => {
 const byId = id => ITINERARY.items.find(e => e.id === id);
 const patch = (id, fields) => Object.assign(byId(id), fields);
 const shortCard = (id, text) => { SHORE_CARDS[id] = [text, '']; };
 // Keep all unrelated baseline items and modal behavior unchanged.
 ITINERARY.items = ITINERARY.items.filter(e => !['evt_d1_to_aq','evt_d1_aq'].includes(e.id));
 for (let i=INSPIRATIONS.length-1;i>=0;i--) if(INSPIRATIONS[i].id==='ins_d1_rain') INSPIRATIONS.splice(i,1);
 delete SHORE_CARDS.evt_d1_to_aq; delete SHORE_CARDS.ins_d1_rain;
 patch('evt_d1_kiriko',{note:'免預約，參觀玻璃製作；維修停工時略過。拍照前先問職員。'});
 patch('evt_d1_return',{
   time:null, address:'Marine Port Kagoshima', addressLocal:'鹿児島県鹿児島市中央港新町1-10',
   note:'午餐後另叫的士，從ふくや本店返回マリンポートかごしま。候車約20–30分鐘，車程約25–40分鐘。船時17:00前到碼頭；不另加景點。',
   transport:{...byId('evt_d1_return').transport,from:'黒豚ふくや本店',to:'マリンポートかごしま',fromEventId:'evt_d1_fukuya',toEventId:null,durationMin:40}
 });
 shortCard('evt_d1_return','行き先：マリンポートかごしま\n住所：鹿児島県鹿児島市中央港新町1-10\nターミナル入口近くの合法的な場所で降ろしてください。');
 for(const e of INSPIRATIONS){
   if(e.id==='ins_d1_tired') e.note='保留仙巌園近入口庭園，刪切子；約走30分鐘休5分鐘。午餐後回海洋港。';
   if(e.id==='ins_d1_traffic') e.note='請仙巌園受付代叫的士；延誤先刪切子，午餐後另叫車回海洋港，船時17:00前到。';
 }
 // Retain the hotel restaurant as a normal food backup, including its driver card.
 const song = {...byId('evt_d4_lunch'),id:'ins_d4_songdo_kitchen',tag:'RAINY',status:'wishlist',nearEventId:'evt_d4_lunch'};
 delete song.day; delete song.time; delete song.timeHint;
 song.note="已確認11/28 12:30 KST、3人，訂位名SANDY。請提早10分鐘到。22F海景：培根奶油麵、起司披薩或烤鰻飯；酒店全禁煙，正門乘電梯。";
 INSPIRATIONS.push(song);
 SHORE_CARDS.ins_d4_songdo_kitchen=[...SHORE_CARDS.evt_d4_to_hotel];
 shortCard('ins_d4_songdo_kitchen','목적지: 페어필드 바이 메리어트 부산 송도 비치 22층 송도키친\n주소: 부산광역시 서구 송도해변로 113\n호텔 정문에 내려 주세요.');
 patch('evt_d4_to_hotel',{
   title:'前往松島鱈魚湯',time:null,tags:['船時倒推','已訂包車'],address:null,addressLocal:'부산광역시 서구 송도해변로 79 1F',
   note:'纜車返回Bay Station 1F後，同一輛包車送至鱈魚湯店，車程約3分鐘，另留上下車時間。午餐須在船時13:45前結束並已上車。',
   transport:{...byId('evt_d4_to_hotel').transport,from:'松島Bay Station 1F',to:'속시원해대구탕 송도본점',fromEventId:'evt_d4_cable',toEventId:'evt_d4_lunch',durationMin:3}
 });
 shortCard('evt_d4_to_hotel','목적지: 속시원해대구탕 송도본점\n주소: 부산광역시 서구 송도해변로 79 1층\n입구 가까운 합법적인 곳에 내려 주세요.');
 patch('evt_d4_lunch',{
   title:'松島鱈魚湯（속시원해대구탕 송도본점）',time:null,tags:['船時13:45前離店','未訂位'],
   address:'Soks iwonhae Daegutang, Songdo main branch',addressLocal:'부산광역시 서구 송도해변로 79 1F',phone:'051-257-8867',website:null,
   openHours:'07:00起；週六15:00–15:40休息（KST）',price:'鱈魚湯₩15,000／人，含飯及4款小菜',
   note:'松島本店1F，包車近門合法落客。船時13:45前已上車往BIFF；當地營業時段先對船鐘。禁煙標示仍待核；確認不辣及湯底即可，未訂位。'
 });
 patch('evt_d4_to_base',{
   title:'前往BIFF廣場',time:'13:45',tags:['船時','已訂包車'],address:null,addressLocal:'부산광역시 중구 구덕로 58-1 일대',
   note:'船時13:45已上車離湯店，14:15前到BIFF。週六預測約19分鐘／4.9公里，排程留30分鐘。由司機在구덕로大路側選合法上下客點，不駛入步行街。',
   transport:{...byId('evt_d4_to_base').transport,from:'속시원해대구탕 송도본점',to:'BIFF廣場／劇場街',fromEventId:'evt_d4_lunch',toEventId:'evt_d4_sea',durationMin:30}
 });
 shortCard('evt_d4_to_base','목적지: BIFF광장·극장거리\n주소: 부산광역시 중구 구덕로 58-1 일대\n구덕로 큰길 쪽에서 합법적인 승하차 장소를 골라 주세요.');
 patch('evt_d4_sea',{
   title:'BIFF廣場與劇場街',time:'14:15',tags:['船時','平地短段'],address:'BIFF Square, Gudeok-ro 58-1 area',addressLocal:'부산광역시 중구 구덕로 58-1 일대',
   openHours:'戶外廣場常開；攤店通常10:00–22:00（KST）',price:'戶外廣場免費',website:null,
   note:"拍電影手印與劇場街，原路返回；步行30分鐘、休5分鐘，另留10分鐘集合。15:00上車，不爬龍頭山。"
 });
 patch('evt_d4_return',{
   time:'15:00',tags:['船時','已訂包車'],address:'Busan Port International Passenger Terminal',addressLocal:'부산광역시 동구 충장대로 206',
   note:'船時15:00已在BIFF大路側合法點上車，預留60分鐘回北港；16:00前到碼頭。與司機先對船鐘，路況變差即更早集合離開。',
   transport:{...byId('evt_d4_return').transport,from:'BIFF廣場',to:'北港國際客運站',fromEventId:'evt_d4_sea',toEventId:null,durationMin:60}
 });
 shortCard('evt_d4_return','목적지: 부산항 국제여객터미널（북항）\n주소: 부산광역시 동구 충장대로 206\n터미널 입구 가까운 합법적인 곳에 내려 주세요.');
 for(const e of INSPIRATIONS){
   if(e.id==='ins_d4_rain') e.note="纜車停駛時改室內觀景，保留松島午餐；大雨刪BIFF。";
   if(e.id==='ins_d4_tired') e.note='刪對岸遠端與BIFF步行，保留近站海景及午餐；船時16:00前回北港。';
   if(e.id==='ins_d4_photo') {e.nearEventId='evt_d4_cable';e.note='纜車前後在近站海邊拍纜車過海；不另外折返松島，午後接BIFF。';}
 }
 // Phrase shortcuts follow the new route; hotel lunch remains a backup only.
 const busanPhrases = PHRASE_DATA.find(g => g.category === '釜山包車');
 if(busanPhrases) for(const x of busanPhrases.items){
   if(x.term_pronounce==='B2 午餐'){x.term_primary='속시원해대구탕 송도본점으로 가 주세요. 송도해변로 79, 1층입니다.';x.term_pronounce='松島鱈魚湯';}
   if(x.term_pronounce==='回出發站'){x.term_primary='BIFF광장으로 가 주세요. 구덕로 58-1 큰길 쪽에서 내려 주세요.';x.term_pronounce='BIFF劇場街';}
 }
 // Remove retired destination phrases rather than leave obsolete cards in phrase search.
 for(const group of PHRASE_DATA){
   group.items=group.items.filter(x=>!Object.values(x).some(v=>typeof v==='string'&&/水族館|水族馆|いおワールド|Aquarium/i.test(v)));
   for(const x of group.items){
     if(/Pavé/.test(x.term_primary||'')){x.term_primary='Pavéへ。ホテル正面入口で降ろしてください。';x.term_pronounce='Pavé備案';}
   }
 }
 return true;
})();

// Lunch is a noon meal with an explicit time, never a null-time afternoon item.
{
 const ride=ITINERARY.items.find(e=>e.id==='evt_d4_to_hotel');
 ride.time='11:45';ride.timeHint='morning';ride.tags=['當地KST','已訂包車'];
 ride.note='11:45在松島Bay Station 1F與司機會合，包車送往鱈魚湯店。車程約3分鐘，12:00午餐。';
 const lunch=ITINERARY.items.find(e=>e.id==='evt_d4_lunch');
 lunch.time='12:00';lunch.timeHint='morning';lunch.tags=['午餐','當地KST','未訂位'];
 lunch.note="12:00午餐，預留60–75分鐘。松島本店1F，近門落客；禁煙待核。點清湯、不辣。";
}


// t289: approved afternoon-only travel-data delta; retain Busan's final lunch override.
(() => {
 const find=id=>ITINERARY.items.find(e=>e.id===id);
 const set=(id,o)=>Object.assign(find(id),o);
 const card=(id,text)=>{SHORE_CARDS[id]=[text,''];};
 const toPark=evt({
   id:'evt_d1_to_waterfront',day:1,time:'13:50',timeHint:'afternoon',type:'transport',
   title:'前往本港海濱公園',cityId:'kagoshima',tags:['當地JST候補','逐段叫車'],
   address:'Waterfront Park, Honkoshinmachi',addressLocal:'鹿児島市本港新町 ウォーターフロントパーク',
   transport:taxi('黒豚ふくや本店','本港海濱公園',''),
   note:'午餐約65分鐘後另叫的士。往鄰接縣營停車場側合法上下客處；不把車開入海濱步道。候車及車程待當日配車核對，表列時段為遊覽排程，非實測車程。'
 });
 toPark.transport.fromEventId='evt_d1_fukuya';toPark.transport.toEventId='evt_d1_waterfront';
 const park=evt({
   id:'evt_d1_waterfront',day:1,time:'14:30',timeHint:'afternoon',type:'sight',
   title:'本港海濱公園（ウォーターフロントパーク）',cityId:'kagoshima',tags:['當地JST候補','海濱散策'],
   address:'Waterfront Park, Honkoshinmachi',addressLocal:'鹿児島市本港新町 ウォーターフロントパーク',
   note:'在海邊硬鋪路看櫻島、錦江灣與船隻；走約30分鐘休5分鐘。拍照：以港口船隻作前景拍櫻島，不為構圖走遠。由鄰接縣營停車場側進出；大雨或體力不足便縮短。'
 });
 const ix=ITINERARY.items.findIndex(e=>e.id==='evt_d1_return');
 ITINERARY.items.splice(ix,0,toPark,park);
 card('evt_d1_to_waterfront','行き先：ウォーターフロントパーク\n住所：鹿児島市本港新町\n隣接する県営駐車場側の合法的な場所で降ろしてください。');
 set('evt_d1_return',{
   time:'15:15',timeHint:'afternoon',tags:['當地JST候補','船時17:00到碼頭'],
   note:'海濱散策後另叫的士，從本港海濱公園返回マリンポートかごしま。先聯絡配車核候車及車程，船時17:00前到碼頭；本地15:15只是候補排序時刻，對鐘後按回港餘量提前離開。',
   transport:{...find('evt_d1_return').transport,from:'本港海濱公園',fromEventId:'evt_d1_waterfront',durationMin:null}
 });
 const wharfAddress='長崎県長崎市出島町1-1-109';
 set('evt_d2_to_museum',{
   title:'前往出島ワーフ',address:'Dejima Wharf',addressLocal:wharfAddress,
   note:'眼鏡橋後另叫的士，往出島ワーフ鄰近縣營停車場側合法上下客處，不駛入海濱步道。候車及車程待配車核對；14:10為當地候補出發時段。',
   transport:{...find('evt_d2_to_museum').transport,from:'眼鏡橋',to:'出島ワーフ',fromEventId:'evt_d2_megane',toEventId:'evt_d2_museum',durationMin:null}
 });
 card('evt_d2_to_museum','行き先：出島ワーフ\n住所：長崎市出島町1-1-109\n近隣の県営駐車場側の合法的な場所で降ろしてください。');
 set('evt_d2_museum',{
   title:'出島ワーフ海港景',address:'Dejima Wharf',addressLocal:wharfAddress,
   openHours:null,price:null,website:null,tags:['當地JST候補','海旁散策'],
   note:'眼鏡橋後在海旁看港景，不重走早上水之庭園。走約30分鐘休5分鐘；2F公共平台有椅，電梯在面海中央樓梯右側，不走樓梯。拍照：海港船隻、木平台與海面，不需買咖啡。'
 });
 set('evt_d2_return',{
   time:'15:35',timeHint:'afternoon',tags:['當地JST候補','船時17:00到碼頭'],
   note:'出島ワーフ遊覽後另叫的士返松が枝，船時17:00前到碼頭；候車及車程先向司機核對。本地15:35只是候補排序時刻，對鐘後若餘量不足先縮短海旁停留。',
   transport:{...find('evt_d2_return').transport,from:'出島ワーフ',fromEventId:'evt_d2_museum',durationMin:null}
 });
 for(const e of INSPIRATIONS){
   if(e.id==='ins_d2_rain'){
     Object.assign(e,{title:'出島ワーフ縮短海旁線',address:'Dejima Wharf',addressLocal:wharfAddress,website:null,nearEventId:'evt_d2_museum',note:'雨勢小時縮短海旁散策，按現場電梯指示到2F公共平台；大雨不勉強戶外，先保留午餐並按船時17:00回松が枝。'});
   }
   if(e.id==='ins_d2_drop_ruri')e.title='眼鏡橋與出島海港景';
   if(e.id==='ins_d2_pave')e.price='Nov自助餐¥3,300／成人；未訂位。';
   if(e.id==='ins_d1_tired')e.note='保留仙巌園近入口庭園，刪切子或縮短午後海濱散策；約走30分鐘休5分鐘。';
   if(e.id==='ins_d1_traffic')e.note='請仙巌園受付代叫的士；延誤便刪切子或縮短午後本港海濱，船時17:00前回海洋港。';
 }
 for(const g of PHRASE_DATA){
   g.items=g.items.filter(x=>!Object.values(x).some(v=>typeof v==='string'&&/水族館|水族馆|Aquarium|美術館|美术馆|nagasaki.museum|N1 咖啡條件/i.test(v)));
   if(g.category==='長崎司機')g.items.push({term_primary:'出島ワーフへ。出島町1-1-109、近隣の県営駐車場側で降ろしてください。',term_secondary:'出島海港景；鄰近縣營停車場側合法下客。',term_pronounce:'出島ワーフ'});
 }
 // Update only two-port fallback descriptions; no restaurant or visual changes.
 const k=PHRASE_DATA.find(g=>g.category==='鹿兒島司機');
 if(k)k.items.push({term_primary:'ウォーターフロントパークへ。本港新町、隣接する県営駐車場側で降ろしてください。',term_secondary:'本港海濱公園，鄰接縣營停車場側。',term_pronounce:'本港海濱'});
})();


// t299: Kagoshima slow-paced route only. Other ports retain final approved values.
(() => {
 const find=id=>ITINERARY.items.find(e=>e.id===id);
 const set=(id,o)=>Object.assign(find(id),o);
 const card=(id,text)=>{SHORE_CARDS[id]=[text,''];};
 set('evt_d1_to_garden',{
   note:'通關放行後到terminal前的士待機場配車；行車規劃35–50分鐘，候車另留。目標09:45入園。',
   transport:{...find('evt_d1_to_garden').transport,durationMin:null}
 });
 set('evt_d1_garden',{
   time:'09:45',tags:['當地JST候補','上午慢遊'],
   note:'09:45–12:30留給庭園、尚古集成館、切子與茶寮休息；不加御殿。先庭園與尚古，約11:30轉切子子項，不重複計時。約連續走30分鐘休5分鐘。拍照：庭園前景、櫻島及錦江灣。'
 });
 set('evt_d1_kiriko',{
   time:'11:30',tags:['當地JST候補','上午子項','免費免約'],
   note:"11:30–11:50看玻璃製作，已含園區時段。12:00工場休息；停工便略過，拍照先問。"
 });
 set('evt_d1_to_fukuya',{
   time:'12:30',timeHint:'afternoon',tags:['當地JST候補','逐段叫車'],
   note:'目標12:30離園上車，離園前請受付提早代叫。往ふくや預留25–40分鐘轉移，含配車、交通與酒店電梯；目標13:00午餐，較慢可至13:10，不壓縮園區及用餐。',
   transport:{...find('evt_d1_to_fukuya').transport,durationMin:null}
 });
 set('evt_d1_fukuya',{
   time:'13:00',status:'confirmed',tags:['已訂3人','禁煙'],
   note:"已確認11/25 13:00、3人，訂位名SANDY LI。請提早10分鐘到。經酒店入口自行用電梯上2F。推薦豬排或生姜燒；套餐含炸蝦，當日再核忌口。全席禁煙。"
 });
 const tenmonkan=evt({id:'evt_d1_tenmonkan',day:1,time:'14:15',timeHint:'afternoon',type:'sight',title:'天文館有蓋拱廊',cityId:'kagoshima',tags:['當地JST候補','延誤先刪'],address:'Tenmonkan covered arcade',addressLocal:'鹿児島市 天文館',note:'午餐後14:15–14:45在平地有蓋拱廊散步購物，約走30分鐘休5分鐘。延誤先刪本段，不推遲回港。'});
 const index=ITINERARY.items.findIndex(e=>e.id==='evt_d1_to_waterfront');ITINERARY.items.splice(index,0,tenmonkan);
 set('evt_d1_to_waterfront',{
   id:'evt_d1_to_shiroyama',title:'前往城山展望台停車場',time:'14:45',tags:['當地JST候補','逐段叫車'],address:'Shiroyama Observatory parking area',addressLocal:'鹿児島市城山町 城山展望台駐車場',
   note:'天文館乘的士往城山停車場，15:00到為目標，車程及候車待配車核對。上車時向司機商量付費等候，16:00再直送海洋港。',
   transport:{...find('evt_d1_to_waterfront').transport,from:'天文館',to:'城山展望台停車場',fromEventId:'evt_d1_tenmonkan',toEventId:'evt_d1_shiroyama',durationMin:null}
 });
 set('evt_d1_waterfront',{
   id:'evt_d1_shiroyama',title:'城山展望台',time:'15:00',tags:['當地JST候補','15:45會合回程'],address:'Shiroyama Observatory',addressLocal:'鹿児島市城山町',
   note:"15:00–15:45含停車場往返，拍櫻島、錦江灣與市景。必經局部8–10%坡道；不走登山步道。延誤可縮短停留。"
 });
 card('evt_d1_to_shiroyama','行き先：城山展望台駐車場\n住所：鹿児島市城山町\n登山道の入口ではなく、展望台側の駐車場で降ろしてください。');
 delete SHORE_CARDS.evt_d1_to_waterfront;
 set('evt_d1_return',{
   time:'16:00',timeHint:'afternoon',tags:['當地JST候補','船時17:00到碼頭'],
   note:'15:45開始會合，16:00 JST候補已上車從城山起程；建議去程司機同意付費等候後直送マリンポート，未同意便預先安排另叫車。回程行車留35–50分鐘，約16:35–16:50 JST到港，等車安排在15:45–16:00；17:00船時到碼頭不放寬，對鐘後必要時提早離開。',
   transport:{...find('evt_d1_return').transport,from:'城山展望台停車場',fromEventId:'evt_d1_shiroyama',durationMin:null}
 });
 for(const e of INSPIRATIONS){
   if(e.id==='ins_d1_k3'){
     Object.assign(e,{title:'御膳所 桜華亭',address:'Ohkatei, Sengan-en 2F',addressLocal:'鹿児島市吉野町9700-1 仙巌園内2F',phone:null,website:null,openHours:'11:00–16:00；最後點餐15:30（JST）',price:'黑豚鍋御膳¥3,000／重疊豬排御膳¥2,400',note:"園內午餐備案，電梯上2F，有桌椅。3人現場候位、不接受一般席訂位。菊花套餐含蝦，不選。"});
   }
   if(e.id==='ins_d1_tired')e.note='保留仙巌園與午餐；午後先刪天文館散步，再縮城山，不壓縮上午及用餐。';
   if(e.id==='ins_d1_traffic')e.note='離園前請受付代叫的士；城山去程先商量付費等候再直返港。延誤先刪天文館，再縮城山；船時17:00前到海洋港。';
 }
 card('evt_d1_to_fukuya','行き先：黒豚ふくや本店\n住所：鹿児島市東千石町1-32 レム鹿児島2F\nホテル入口側で降ろしてください。');
 card('ins_d1_k3','行き先：仙巌園内 御膳所 桜華亭\n住所：鹿児島市吉野町9700-1 仙巌園内2階\nエレベーターに近い合法的な場所で降ろしてください。');
 INSPIRATIONS.push({id:'ins_d1_waterfront',title:'本港海濱公園',tag:INSPIRATIONS.find(e=>e.id==='ins_d1_tired').tag,type:'sight',cityId:'kagoshima',nearEventId:'evt_d1_shiroyama',status:'wishlist',source:'ai',address:'Waterfront Park, Honkoshinmachi',addressLocal:'鹿児島市本港新町 ウォーターフロントパーク',note:"城山替代點，拍櫻島、錦江灣與港口。步行約30分鐘休5分鐘；鄰接縣營停車場側上下客。"});
 card('ins_d1_waterfront','行き先：ウォーターフロントパーク\n住所：鹿児島市本港新町\n隣接する県営駐車場側の合法的な場所で降ろしてください。');
 const g=PHRASE_DATA.find(x=>x.category==='鹿兒島司機');
 if(g){g.items=g.items.filter(x=>!/黒かつ亭|黒べぇ|ウォーターフロントパーク/.test(x.term_primary||''));g.items.push({term_primary:'城山展望台駐車場へ。鹿児島市城山町です。',term_secondary:'展望台側停車場下車，不走山腳登山步道。',term_pronounce:'城山展望台'},{term_primary:'仙巌園内の御膳所 桜華亭へ。吉野町9700-1です。',term_secondary:'園內2F午餐備案，用電梯。',term_pronounce:'桜華亭備案'});}
})();



// t313: approved data delta; contracts_t313 native daily-city weather replaces t311.
(function () {
 const get=id=>ITINERARY.items.find(x=>x.id===id);
 const set=(id,o)=>{const e=get(id);if(!e)throw new Error('Missing existing id '+id);Object.assign(e,o);};
 const backup=(id,o)=>{const e=INSPIRATIONS.find(x=>x.id===id);if(!e)throw new Error('Missing backup '+id);Object.assign(e,o);};
 const card=(id,text,zh='')=>{SHORE_CARDS[id]=[text,zh];};
 DESTINATION.name='鹿兒島';
 set('evt_d1_garden',{note:"09:45–12:30含庭園、尚古集成館、切子與茶休；不加御殿。近入口精選兩段各25–30分鐘，中間休5分鐘。拍庭園框櫻島與錦江灣。"});
 set('evt_d1_tenmonkan',{type:'shop',note:"購物15–20分鐘。延誤先刪，再縮城山；14:45轉車，不壓縮午餐。"});
 set('evt_d2_park',{note:"放行即去，09:00僅參考。硬鋪通道看港口與水景20–25分鐘，長椅休5分鐘；不走上坡。"});
 set('evt_d2_rurian',{tags:['當地JST候補','第一可刪'],note:"短看玻璃製作，不做手作；沒製作便略過。延誤第一個刪。"});
 set('evt_d2_megane',{note:"平地拍雙拱與倒影10–15分鐘，不下河床、不走橋階。連同瑠璃庵累計步行30分鐘休5分鐘。延誤先刪瑠璃庵，再縮此點。"});
 set('evt_d2_to_museum',{title:'前往出島',address:'Dejima front bridge approach, Dejima-machi',addressLocal:'長崎市出島町6-1 出島表門橋側',note:'眼鏡橋後另叫的士；14:10為當地JST候補出發，候車另留，車程由配車核對。請司機選表門橋附近大路合法下客，不把停車場或橋上當的士站；下車後走已核無階通道，橋有坡。',transport:{...get('evt_d2_to_museum').transport,from:'眼鏡橋',to:'出島表門橋側',durationMin:null}});
 set('evt_d2_museum',{title:'出島',time:'14:30',tags:['當地JST候補','核心30分鐘'],address:'Dejima, 6-1 Dejima-machi',addressLocal:'長崎県長崎市出島町6-1',coords:null,openHours:'08:00–21:00；最後入場20:40（JST）；水門08:00–18:00',price:'成人¥1,100',website:'https://nagasakidejima.jp/about/',note:"14:30–15:00看表門橋、復原主街及一間1F展示，長椅休5分鐘。不上2F、不加海旁。走無階通道；橋有坡，斜度未核；疲累便折返。15:35回港前預留集合、候車。"});
 set('evt_d2_return',{note:'從出島附近大路合法上車，15:35 JST是候補起程；叫車與集合另留，車程由配車確認。船時17:00到松が枝碼頭，當地截止待核；對鐘後若餘量不足，先刪瑠璃庵、再縮眼鏡橋，不把17:00當JST。',transport:{...get('evt_d2_return').transport,from:'出島表門橋附近合法上車處',durationMin:null}});
 card('evt_d2_to_museum','行き先：出島・表門橋側\n住所：長崎市出島町6-1\n橋には入らず、近くの大通りの合法的な場所で降ろしてください。','出島表門橋側下車；橋有坡，勿當全平。');
 backup('ins_d2_rain',{title:'出島ワーフ海港景',tag:'TIRED',nearEventId:'evt_d2_museum',address:'Dejima Wharf, 1-1-109 Dejima-machi',addressLocal:'長崎市出島町1-1-109',note:"出島替代海港景，不與主線疊加。縣營停車場側下客；2F平台有椅，面海中央樓梯右側有電梯。大雨不選。"});
 card('ins_d2_rain','行き先：出島ワーフ\n住所：長崎市出島町1-1-109\n近隣の県営駐車場側の合法的な場所で降ろしてください。','替代出島，不與主線疊加。');
 backup('ins_d2_drop_ruri',{title:'長崎減腳程順序',note:'先刪瑠璃庵；眼鏡橋縮為平地短拍或刪除。保留午餐與出島30分鐘核心＋休5，不加第二輪海旁；若出島橋段不適便用Wharf替代，不把有坡寫全平。'});
 set('evt_d3_yusen',{note:"抵達後湖岸短遊約60–75分鐘，10:35收束。明治通側北入口往Boathouse、觀月橋近岸看湖景，沿原路回接車側。每段步行及站拍20–30分鐘，長椅休5分鐘；不繞全湖。"});
 set('evt_d3_machiya',{note:"13:40–14:15看織實演及一個展區20–30分鐘，休5分鐘。14:20叫車往住吉。無實演便看町家，拍織機先問。延誤先縮住吉（最少約15分），再刪展區只留實演。"});
 const toSumi=evt({id:"evt_d3_to_sumiyoshi",day:3,time:"14:20",timeHint:"afternoon",type:"transport",title:"住吉酒販博多本店",cityId:"fukuoka",address:"Sumiyoshi Sake Shop Hakata Honten, 3-8-27 Sumiyoshi",addressLocal:"福岡県福岡市博多区住吉3-8-27 住吉酒販 博多本店",tags:["逐段叫車"],note:"町家後另叫的士直達住吉酒販博多本店，預計約14:40到。",transport:taxi("博多町家","住吉酒販博多本店",OP_JP)});
 const sumi=evt({id:"evt_d3_sumiyoshi",day:3,time:"14:40",timeHint:"afternoon",type:"sight",title:"住吉酒販博多本店",cityId:"fukuoka",moodColor:"#5C5348",address:"Sumiyoshi Sake Shop Hakata Honten, 3-8-27 Sumiyoshi",addressLocal:"福岡県福岡市博多区住吉3-8-27",tags:["購物"],phone:"092-281-3815",website:"https://sumiyoshi-sake.jp/",openHours:"9:30–18:30；日祝休。11/27週五應開。",price:"店內購物",note:"14:40–15:25購物約45分鐘。店內短步。延誤先縮此段，最少約15分鐘；最晚16:05從本店上車。"});
 const streetIdx=ITINERARY.items.findIndex(x=>x.id==="evt_d3_street");
 if(streetIdx<0)throw new Error("Missing evt_d3_street");
 ITINERARY.items.splice(streetIdx,1,toSumi,sumi);
 set("evt_d3_return",{time:"15:30",transport:{...get("evt_d3_return").transport,from:"住吉酒販博多本店"},note:"15:30從住吉酒販叫車，約15:55–16:20到中央ふ頭郵輪中心（沖浜町24-25）。船時17:00前到碼頭。\n最遲於截止前75分鐘叫車。"});
 card("evt_d3_to_sumiyoshi","行き先：住吉酒販 博多本店\n住所：福岡市博多区住吉3-8-27\n店の前の道路側で、合法的に降ろしてください。");
 backup("ins_d3_tired",{nearEventId:"evt_d3_sumiyoshi",note:"延誤先縮住吉購物（最少約15分），再刪町家展區只留織實演；不換成冷泉長散步。最晚16:05從住吉上車。"});
 backup("ins_d3_tight",{note:"時間不足先縮住吉、再留織實演，不再跨區或加冷泉散步。最晚16:05從住吉上車。回港最遲於截止前75分鐘叫車。"});
 set('evt_d4_to_songdo',{tags:['訂單09:00 KST','已訂包車','08:00待確認'],note:'LOYQU已訂09:00 KST服務、3人無行李；08:00僅提早目標，未獲供應商確認，仍視放行與入境。原單北港충장대로206的1F Arrival Hall會合，與常見2F入境不同，先確認樓層，不自行改點。接車與12:00 KST午餐需對照船鐘；船時16:00到港硬線不變。'});
 set('evt_d4_cable',{note:"現場買往返票。對岸1F廣場10–15分鐘，不走吊橋及上坡公園；排隊久先刪對岸停留，保留12:00午餐。"});
 set('evt_d4_lunch',{timeHint:'afternoon'});
 const ng=PHRASE_DATA.find(x=>x.category==='長崎司機');
 const wharf=ng.items.find(x=>x.term_pronounce==='出島ワーフ');if(wharf)wharf.term_pronounce='出島ワーフ備案';
 ng.items.push({term_primary:'出島の表門橋側へ。出島町6-1です。近くの大通りの合法的な場所で降ろしてください。',term_secondary:'出島主線；勿把車開上橋，橋有坡。',term_pronounce:'出島核心'});
 PHRASE_DATA.find(x=>x.category==='福岡司機').items.push({term_primary:'住吉酒販 博多本店へ。住吉3-8-27です。',term_secondary:'完整卡請開本日對應行程或備案備註。',term_pronounce:'住吉酒販'});
 PHRASE_DATA.find(x=>x.category==='釜山包車').items[0].term_primary='예약은 현지 시간 09:00입니다. 08:00 변경과 만날 층은 아직 확인 중입니다.';
 for(const e of [...ITINERARY.items,...INSPIRATIONS]) {
   e.source='ai';
   for(const key of ['coords','phone','whatsapp','line','messenger','openHours','price','website','cost']) if(e[key]===undefined)e[key]=null;
   if(e.transport){e.transport.fromEventId=null;e.transport.toEventId=null;e.transport.liveApi=null;if(!Object.prototype.hasOwnProperty.call(e.transport,'stopCount'))e.transport.stopCount=null;}
 }
})();

// t318/t320: concise transport rows; all four days use confirmed UTC+9 ship time.
(function () {
  for (const e of ITINERARY.items) {
    e.tags = (e.tags || []).filter(t => !/JST|KST|船時/.test(t));
  }
  const names = {
    '城山展望台停車場':'城山展望台',
    'マリンポートかごしま':'海洋港',
    '出島表門橋附近合法上車處':'出島表門橋側',
    '松島Bay Station 1F':'松島出發站',
    '속시원해대구탕 송도본점':'松島鱈魚湯',
    'BIFF廣場／劇場街':'BIFF廣場'
  };
  for (const e of ITINERARY.items) if (e.transport) {
    for (const k of ['from','to']) e.transport[k]=names[e.transport[k]] || e.transport[k];
  }
})();

// t320: remove superseded clock uncertainty; keep booking and access uncertainties.
(function () {
  const replacements = [
    ['，對鐘後必要時提早離開。','；交通延誤時提早離開。'],
    ['，須先按船鐘換算核對。','。'],
    ['，當地截止待核；對鐘後若餘量不足','；若餘量不足'],
    ['，不把17:00當JST。','。'],
    ['；當地截止時間待船方核實。','。'],
    ['接車與12:00 KST午餐需對照船鐘；',''],
    ['，船時回港倒推須先對鐘。','。'],
    ['與司機先對船鐘，',''],
    ['，先換算當地鐘。','。'],
    ['當地JST排序候補','參考時間'],
    ['當地JST候補','參考時間'],
    ['當地JST',''],
    ['（JST）',''],['（KST）',''],
    [' JST候補','參考時間'],[' JST是候補','是參考'],
    [' JST',''],[' KST','']
  ];
  for (const e of [...ITINERARY.items,...INSPIRATIONS]) {
    for (const k of ['note','openHours']) if (typeof e[k] === 'string') {
      for (const [a,b] of replacements) e[k]=e[k].split(a).join(b);
    }
    if (e.tags) e.tags=e.tags.filter(t=>t!=='當地時未填' && !/JST|KST/.test(t));
  }
  for (const e of Object.values(DAILY_EXTRAS)) if(e.shopping) e.shopping=e.shopping.filter(t=>!t.includes('船方當日船鐘說明'));
  for (const g of PHRASE_DATA) for (const e of g.items) if(e.term_secondary) e.term_secondary=e.term_secondary.replace('；先核船鐘。','。');
})();

// Nov21: confirmed correspondence and user decisions; preserve the complete itinerary.
(() => {
 const get=id=>ITINERARY.items.find(e=>e.id===id);
 const set=(id,p)=>Object.assign(get(id),p);
 set('evt_d1_fukuya',{status:'confirmed',tags:['已訂3人','禁煙'],note:'已確認11/25 13:00、3人，訂位名SANDY LI。請提早10分鐘到。經酒店入口自行用電梯上2F。推薦豬排或生姜燒；套餐含炸蝦，當日再核忌口。全席禁煙。'});
 set('evt_d2_rurian',{phone:'095-827-0737',note:'10:00起有體驗，可稍遠觀看但不可拍攝體驗過程；10:30能否看製作仍由當日決定。純參觀不接受預約；店與作品可看，拍攝先問。不做手作；不能看便略過，延誤第一個刪。'});
 set('evt_d2_to_rurian',{note:'另叫的士；到店先問能否遠觀，不等開工。不開放便略過，勝鹿11:30開門後午餐；保留午後出島。'});
 get('evt_d2_to_katsu').note+=' 瑠璃庵略過時可提前出發，勝鹿11:30開門後現場候位。';
 set('evt_d2_katsu',{tags:['現場候位'],note:'不接受預約，現場候位。推薦豬排或雞排；新地町12-10、1F，全席禁煙。湯底、醬料與配菜仍核忌口。'});
 set('evt_d2_megane',{address:'Meganebashi, Uo-no-machi 2',addressLocal:'長崎県長崎市魚の町2'});
 get('evt_d2_to_megane').note='午餐後另叫的士往魚の町2；河邊道路平地合法位置落客，平路遠拍，不下河床。';
 SHORE_CARDS.evt_d2_to_megane=['行き先：眼鏡橋\n住所：長崎県長崎市魚の町2\n平地の道路側の合法的な場所で降ろしてください。川岸へ下りません。',''];
 set('evt_d3_hm',{status:'confirmed',tags:['已訂3人','禁煙桌'],note:'11:45、3人，訂位名Ms. Sandy。禁煙桌已安排；只留15分鐘，遲到可能取消。近入口／避階座位待安排。可選水炊御膳，店方另建議Hana／Aji套餐；不加柚胡椒，湯底、醬料與配菜仍核忌口。'});
 get('evt_d3_to_hm').note+=' 目標11:30到店，11:45已訂。';
 set('evt_d4_to_songdo',{time:'08:00',status:'confirmed',tags:['08:00已確認','已訂包車'],address:'Busan Port International Passenger Terminal, Arrival Hall 1F',addressLocal:'부산광역시 동구 충장대로 206 부산항 국제여객터미널 1층 입국장',note:'LOYQU已改08:00，北港1F Arrival Hall會合，3成人／0行李。延誤即聯絡供應商協調。自訂線已同意，纜車票不含；司機WhatsApp待提供。15:00離BIFF、16:00到北港不變。'});
 get('evt_d4_cable').note+=' 包車不含票；09:00開門，早到等開門。';
 const b4=INSPIRATIONS.find(e=>e.id==='ins_d4_b4');
 b4.note='對岸停駛：供應商已同意Amnam Park停車場接車，請站方與司機協調實際會合及可達路線。此卡地址為纜車對岸站、不是停車場pin；不走吊橋或公園坡路。';
 SHORE_CARDS.ins_d4_b4=['암남공원 주차장에서 픽업할 수 있다고 확인받았습니다. 정확한 만날 곳과 안전한 이동 방법을 안내해 주세요. 부모님과 구름다리나 공원 비탈길로 걷지 않겠습니다.',''];
 SHORE_CARDS.evt_d4_b0=['예약된 픽업은 08:00입니다. 부산항 국제여객터미널 1층 입국장에서 만납니다. 성인 3명, 짐은 없습니다.',''];
 const backup=INSPIRATIONS.find(e=>e.id==='ins_d4_songdo_kitchen');
 backup.tags=['已訂3人','後備'];
 backup.note='已確認11/28 12:30 KST、3人，訂位名SANDY。請提早10分鐘到。22F海景：培根奶油麵、起司披薩或烤鰻飯；酒店全禁煙，正門乘電梯。';
 for(const [category,label,text] of [
  ['鹿兒島司機','回海洋港','マリンポートかごしまへ。17:00までにターミナルへ戻ります。'],
  ['長崎司機','回松が枝','長崎港松が枝国際ターミナルへ。17:00までに戻ります。'],
  ['福岡司機','回中央碼頭','中央ふ頭クルーズセンターへ。17:00までに戻ります。']
 ]) {
  const phrase=PHRASE_DATA.find(g=>g.category===category).items.find(e=>e.term_pronounce===label);
  if(!phrase)throw new Error(label); phrase.term_primary=text;
 }
 const ko=PHRASE_DATA.find(g=>g.category==='釜山包車');
 ko.items.find(e=>e.term_pronounce==='B0 會合').term_primary='예약된 픽업은 08:00입니다. 부산항 국제여객터미널 1층 입국장에서 만납니다.';
 ko.items.find(e=>e.term_pronounce==='B3 回北港').term_primary='부산항 국제여객터미널, 충장대로 206으로 가 주세요. 오후 4시까지 도착해야 합니다.';
 const n4=PHRASE_DATA.find(g=>g.category==='長崎司機').items.find(e=>(e.term_pronounce||'').includes('N4'));
 if(n4)n4.term_primary='瑠璃庵へ。松が枝町5-11です。見学は当日判断で、体験中は撮影しません。';
 DAILY_EXTRAS['4'].shopping=DAILY_EXTRAS['4'].shopping.map(t=>t==='填好當地空白後才出示的包車卡'?'包車會合資料':t);
})();


// t389: Sandy chose Kagoshima A (Amami-no-Sato) and Nagasaki A (Dejima Hosendo).
(function () {
  const get=id=>{const e=ITINERARY.items.find(x=>x.id===id);if(!e)throw new Error('Missing '+id);return e;};
  const backup=id=>{const e=INSPIRATIONS.find(x=>x.id===id);if(!e)throw new Error('Missing backup '+id);return e;};
  const card=(id,text)=>{SHORE_CARDS[id]=[text,''];};

  const toAmami=get('evt_d1_to_shiroyama');
  toAmami.id='evt_d1_to_amami';
  Object.assign(toAmami,{
    title:'奄美の里',time:'14:40',timeHint:'afternoon',tags:['逐段叫車'],
    address:'Amami-no-Sato, 1-8-1 Minamiei',addressLocal:'鹿児島県鹿児島市南栄1-8-1 奄美の里',
    coords:null,phone:null,website:null,openHours:null,price:null,
    note:'14:40從天文館叫的士往奄美の里（南栄1-8-1）。車程未核；運賃表估算約¥3,400。',
    transport:{...toAmami.transport,mode:'taxi',from:'天文館',to:'奄美の里',fromEventId:null,toEventId:null,durationMin:null,stopCount:null,liveApi:null}
  });
  delete SHORE_CARDS.evt_d1_to_shiroyama;
  card('evt_d1_to_amami','行き先：奄美の里\n住所：鹿児島市南栄1-8-1\n入口近くの合法的な場所で降ろしてください。');

  const amami=get('evt_d1_shiroyama');
  amami.id='evt_d1_amami';
  Object.assign(amami,{
    title:'奄美の里',time:'15:00',timeHint:'afternoon',type:'sight',tags:['工藝見學'],
    address:'Amami-no-Sato, 1-8-1 Minamiei',addressLocal:'鹿児島県鹿児島市南栄1-8-1',
    coords:null,phone:'099-268-0331',website:'https://www.amaminosato.jp/',
    openHours:'09:00–17:00；最終受付16:30；年中無休',price:'入園成人¥500',
    note:'約15:00–15:45只看本館與工場及手信，不繞兩庭園。工場入口約8度斜坡，染色工場前3cm段差。'
  });

  const ten=get('evt_d1_tenmonkan');
  ten.note='購物15–20分鐘。14:40轉車往奄美の里。延誤先刪此段，再將奄美の里縮至20分。';

  const ret1=get('evt_d1_return');
  Object.assign(ret1,{
    time:'15:45',timeHint:'afternoon',tags:[],
    note:'15:45從奄美の里叫的士回海洋港，官方目安約10分、約¥1,800。船時17:00前到碼頭。',
    transport:{...ret1.transport,mode:'taxi',from:'奄美の里',to:ret1.transport.to,fromEventId:null,toEventId:null,durationMin:10,stopCount:null,liveApi:null}
  });

  backup('ins_d1_tired').note='保留仙巌園與午餐；午後先刪天文館，再將奄美の里縮至20分。';
  backup('ins_d1_traffic').note='離園前請受付代叫的士。延誤先刪天文館，再將奄美の里縮至20分。船時17:00前到海洋港。';
  Object.assign(backup('ins_d1_waterfront'),{nearEventId:'evt_d1_amami',note:'午後備案，拍櫻島、錦江灣與港口。步行約30分鐘休5分鐘；鄰接縣營停車場側上下客。'});

  const kg=PHRASE_DATA.find(x=>x.category==='鹿兒島司機');
  const sh=kg&&kg.items.find(e=>e.term_pronounce==='城山展望台');
  if(!sh)throw new Error('Missing 城山展望台 phrase');
  Object.assign(sh,{term_primary:'奄美の里へ。鹿児島市南栄1-8-1です。',term_secondary:'入口附近合法下客。',term_pronounce:'奄美の里'});

  const museum=get('evt_d2_museum');
  museum.note='14:30–15:00看表門橋、復原主街及一間1F展示，長椅休5分鐘。不上2F、不加海旁。走無階通道；橋有坡，斜度未核；疲累便折返。其後前往でじま芳扇堂。';

  if(ITINERARY.items.some(e=>e.id==='evt_d2_yoshindo'))throw new Error('evt_d2_yoshindo already present');
  const yoshindo={
    id:'evt_d2_yoshindo',day:2,time:'15:05',timeHint:'afternoon',type:'food',
    title:'でじま芳扇堂',cityId:'nagasaki',status:'pending',source:'ai',
    address:'Dejima Hosendo, 5-24 Dejima-machi',addressLocal:'長崎県長崎市出島町5-24',
    coords:null,tags:[],moodColor:null,
    note:'15:05–15:50。出島旁，通常場15:00起。可選ちょっと飲み¥2,500、どぶろく品飲¥3,500；父母可點甘酒¥1,500。父不食蝦蟹、母不食牛，點前問。不開便直接回港。11/23已電郵詢問三人座位及肴食材，待回覆。',
    phone:'080-7124-4508',whatsapp:null,line:null,messenger:null,
    openHours:'15:00–19:00；定休火、水。11/26週四非定休',
    price:'ちょっと飲み¥2,500；どぶろく品飲¥3,500；甘酒¥1,500',
    website:'https://djm-hosendo.co.jp/store',cost:null,transport:null
  };
  const retIdx=ITINERARY.items.findIndex(e=>e.id==='evt_d2_return');
  if(retIdx<0)throw new Error('Missing evt_d2_return');
  ITINERARY.items.splice(retIdx,0,yoshindo);

  const ret2=get('evt_d2_return');
  Object.assign(ret2,{
    time:'15:55',timeHint:'afternoon',tags:[],
    note:'15:55從でじま芳扇堂叫的士回松が枝；最晚16:00上車。船時17:00前到碼頭。',
    transport:{...ret2.transport,mode:'taxi',from:'でじま芳扇堂',fromEventId:null,toEventId:null,durationMin:null,stopCount:null,liveApi:null}
  });

  backup('ins_d2_drop_ruri').note='先刪瑠璃庵，再縮或刪眼鏡橋，再將芳扇堂縮至20分；最晚16:00從芳扇堂上車。保留午餐與出島30分鐘核心＋休5。出島橋段不適便用Wharf替代。';
})();

// Payment checks: 2026-11-21; onsite acceptance only.
(() => {
 const payments = {
  "evt_d1_garden": "入場可刷 Visa／Mastercard／JCB／Amex／Diners／Discover；園內茶休及購物刷卡未確認，備現金。",
  "evt_d1_kiriko": "見學免費；購物刷卡未確認，備現金。",
  "evt_d1_fukuya": "餐費可刷 Visa／Mastercard／JCB／Amex／Diners。",
  "evt_d1_tenmonkan": "各店刷卡未確認，購物備現金。",
  "evt_d1_amami": "入園成人¥500；刷卡未確認，備現金。",
  "evt_d2_park": "公園散步；如有消費，刷卡未確認。",
  "evt_d2_rurian": "純參觀是否收費及刷卡未確認；購物刷卡未確認，備現金。",
  "evt_d2_katsu": "餐費刷卡未確認，備現金。",
  "evt_d2_megane": "平地遠觀無需門票。",
  "evt_d2_museum": "入場可用信用卡及銀聯（未列個別品牌）；園內餐飲、購物刷卡未確認，備現金。",
  "evt_d2_yoshindo": "餐費刷卡未確認，備現金。",
  "evt_d3_yusen": "普通湖岸免費。",
  "evt_d3_hm": "餐費可刷 Visa／Mastercard／JCB／Amex／Diners。",
  "evt_d3_machiya": "入館及賣店刷卡均未確認，備現金。",
  "evt_d3_sumiyoshi": "現金、Visa／Mastercard／JCB／Diners／Amex、PayPay（店家官方 LINE）。",
  "evt_d4_cable": "現場纜車票刷卡未確認，備韓圓現金；網上付款不代表現場收卡。",
  "evt_d4_lunch": "餐費刷卡未確認，備韓圓現金。",
  "evt_d4_sea": "廣場免費；各攤店刷卡未確認，備韓圓現金。",
  "ins_d1_k3": "餐費刷卡未確認，備現金。",
  "ins_d2_rain": "海港觀景區；各店消費刷卡未確認，備現金。",
  "ins_d2_pave": "餐費可刷 Visa／Mastercard／JCB／Amex／Diners。",
  "ins_d3_ohori": "湖邊短段免費；餐費可刷 Visa／Mastercard／JCB／Amex／Diners／銀聯。",
  "ins_d4_rain": "室內觀景是否收費及刷卡未確認，備韓圓現金。",
  "ins_d4_b4": "接車無需新票；如入店消費，刷卡未確認，備韓圓現金。",
  "ins_d4_tired": "海邊平路無需門票。",
  "ins_d4_photo": "海邊攝影無需門票。",
  "ins_d4_songdo_kitchen": "餐費刷卡未確認，備韓圓現金。",
  "ins_d1_waterfront": "入場收費及刷卡未確認；如有收費，備現金。"
};
 const tips = {
  "evt_d1_garden": "近入口池泉與御殿前草地看借景，讓庭園作前景、櫻島與錦江灣作背景；再看尚古集成館的島津產業遺產展示。受付取無障礙藍線，御殿只看庭外景。",
  "evt_d1_kiriko": "看職人切割、研磨玻璃，留意切子刻紋；經允許後拍作品或作業窗。",
  "evt_d1_tenmonkan": "就近進有蓋拱廊，短逛店舖再原路回；沿街道中線取拱廊縱深與兩側店招。",
  "evt_d1_amami": "看本館大島紬織程與工場，再到手信區。",
  "evt_d2_park": "水の庭園一側看水景，沿臨港硬鋪通道看出島方向港面與船隻；海港作背景拍照後原路回。",
  "evt_d2_rurian": "先看店面與玻璃作品陳列；獲准後拍靜態作品或店面，體驗製作只遠觀、全程不拍。",
  "evt_d2_megane": "在魚の町2一帶河岸平地取雙拱正面，水靜時連同倒影拍成眼鏡形；拍完沿原路回。",
  "evt_d2_museum": "按表門橋、復原主街、一間1F貿易或倉庫展示的順序看，拍橋與主街的歷史街巷線條，再原路回入口。",
  "evt_d3_yusen": "觀月橋近岸拍湖面，遠看中之島與浮見堂，再看Boathouse外觀；留在北側近岸即可取景。",
  "evt_d3_machiya": "先看博多織實演的織機運作，再看一個町家展區；拍織機或町家室內前先問。",
  "evt_d3_sumiyoshi": "看店內貨架與冷藏櫃選購。",
  "evt_d4_cable": "過海車廂內看釜山港與松島海面；到對岸1F廣場回望出發站海岸，返程再拍另一方向海景。",
  "evt_d4_sea": "先找廣場地面電影手印近拍，再取劇場街外觀與街道縱深；沿原路回大路側接車。",
  "ins_d1_waterfront": "海邊鋪面欄杆平視櫻島與錦江灣，把渡輪帶入前景；近處可看南風の泉噴水與草坪。",
  "ins_d2_rain": "乘電梯到2F平台看港面、拍海港與船隻，利用平台座椅休息後原路下樓。",
  "ins_d4_rain": "出發站室內看海；1F Photo Zone及3F Bay Terrace的持票規則現場看標示。",
  "ins_d4_tired": "留在出發站附近海邊馬路側平路，近岸看海拍照，不上沙灘。",
  "ins_d4_photo": "近站海邊以海面作背景、移動纜車作主體取景，只走公共平路。",
  "ins_d3_ohori": "Boathouse 1F玻璃窗看湖，選室內桌椅短坐。"
};
 for (const e of [...ITINERARY.items, ...INSPIRATIONS]) {
  if (tips[e.id]) e.note += "\n看點與拍照：" + tips[e.id];
  if (payments[e.id]) e.note += " 付款：" + payments[e.id];
 }
})();

// t406: Sandy — keep Fukuya 13:00, Katsu-Shika walk-in, Hanamidori 11:45; add Nagasaki/Fukuoka lunch backups; add Attic and Kawabata Zenzai short stops. No Shirokuma, Fukusaya, Hamakatsu, or food taken onboard. Busan unchanged.
(function () {
  const get=id=>{const e=ITINERARY.items.find(x=>x.id===id);if(!e)throw new Error('Missing '+id);return e;};
  const backup=id=>{const e=INSPIRATIONS.find(x=>x.id===id);if(!e)throw new Error('Missing backup '+id);return e;};
  const card=(id,text)=>{SHORE_CARDS[id]=[text,''];};
  const insertAfter=(afterId,item)=>{
    const i=ITINERARY.items.findIndex(e=>e.id===afterId);
    if(i<0)throw new Error('Missing '+afterId);
    if(ITINERARY.items.some(e=>e.id===item.id))throw new Error(item.id+' already present');
    ITINERARY.items.splice(i+1,0,item);
  };
  const foodItem=(fields)=>({
    cityId:null,address:null,addressLocal:null,coords:null,tags:[],moodColor:null,
    note:null,phone:null,whatsapp:null,line:null,messenger:null,openHours:null,price:null,
    website:null,cost:null,transport:null,status:'pending',source:'ai',
    ...fields
  });
  const foodBackup=(fields)=>({
    tag:'FOOD',type:'food',cityId:null,address:null,addressLocal:null,coords:null,
    nearEventId:null,note:null,phone:null,whatsapp:null,line:null,messenger:null,
    openHours:null,price:null,website:null,status:'wishlist',source:'ai',
    ...fields
  });

  const museum=get('evt_d2_museum');
  museum.tags=['核心參觀'];
  museum.note='14:30–14:45看表門橋、復原主街及一間1F展示。不上2F、不加海旁。走無階通道；橋有坡，斜度未核；疲累便折返。其後前往出島ワーフ1F Attic。\n看點與拍照：按表門橋、復原主街、一間1F貿易或倉庫展示的順序看，拍橋與主街的歷史街巷線條，再原路回入口。 付款：入場可用信用卡及銀聯（未列個別品牌）；園內餐飲、購物刷卡未確認，備現金。';

  insertAfter('evt_d2_museum', foodItem({
    id:'evt_d2_attic',day:2,time:'14:45',timeHint:'afternoon',type:'food',
    title:'出島ワーフ1F Attic',cityId:'nagasaki',
    address:'Attic coffee and dining, Dejima Wharf 1F',
    addressLocal:'長崎市出島町1-1 長崎出島ワーフ 1F',
    tags:['茶點短停'],
    note:'14:45–15:00茶點短停。點咖啡即可。店內全席禁煙，坐店內，不要坐可吸煙露台。不要點海鮮或牛肉餐。',
    phone:'095-820-2366',
    openHours:'11:30–22:00；午餐菜單11:30–15:00；定休週三',
    price:'咖啡／輕食，食べログ～¥999至¥1,999',
    website:'https://dejimawharf.com/attic'
  }));

  const machiya=get('evt_d3_machiya');
  machiya.note='13:40–14:00看織實演。無實演便看町家，拍織機先問。其後前往川端ぜんざい広場。延誤仍先縮住吉（最少約15分）。\n看點與拍照：先看博多織實演的織機運作；拍織機或町家室內前先問。 付款：入館及賣店刷卡均未確認，備現金。';

  insertAfter('evt_d3_machiya', foodItem({
    id:'evt_d3_zenzai',day:3,time:'14:00',timeHint:'afternoon',type:'food',
    title:'川端ぜんざい広場',cityId:'fukuoka',
    address:'Kawabata Zenzai Plaza, Kami-kawabatamachi 6-135',
    addressLocal:'福岡市博多区上川端町6-135',
    tags:['茶點短停'],
    note:'14:00–14:15紅豆年糕甜湯短停。僅金、土、日、祝及商店街活動時營業。予約不可。全席禁煙。付款：現金；卡片／電子支付不可。',
    phone:'092-281-6223',
    openHours:'11:00–18:00；僅金、土、日曜、祝日及商店街活動時營業',
    price:'食べログ～¥999',
    website:'https://hakata.or.jp/zenzaihiroba/'
  }));

  const toSumi=get('evt_d3_to_sumiyoshi');
  toSumi.note='ぜんざい広場後另叫的士直達住吉酒販博多本店，預計約14:40到。';
  toSumi.transport={...toSumi.transport,from:'川端ぜんざい広場'};

  backup('ins_d2_drop_ruri').note='先刪瑠璃庵，再縮或刪眼鏡橋，再刪Attic，再將芳扇堂縮至20分；最晚16:00從芳扇堂上車。保留午餐與出島14:30–14:45。出島橋段不適便用Wharf替代。';
  backup('ins_d3_tired').note='延誤先刪川端ぜんざい広場，再縮住吉購物（最少約15分），再刪町家展區只留織實演；不換成冷泉長散步。最晚16:05從住吉上車。';
  backup('ins_d3_tight').note='時間不足先刪川端ぜんざい広場，再縮住吉、再留織實演，不再跨區或加冷泉散步。最晚16:05從住吉上車。回港最遲於截止前75分鐘叫車。';

  const newBackups=[
    foodBackup({
      id:'ins_d2_amalia',title:'アマリアサロン',cityId:'nagasaki',nearEventId:'evt_d2_katsu',
      address:'Amalia Salon, Hotel Monterey Nagasaki 1F',
      addressLocal:'長崎市大浦町1-22 ホテルモントレ長崎 1F',
      note:'可預約ヴェローナコース¥3,000（前菜、意粉、魚或肉、甜品），預約12:10，未訂。選魚主菜，不要肉主菜；前菜與醬是否含蝦蟹或牛，點前問。全席禁煙。1F，酒店正門。',
      phone:'095-827-7917',
      openHours:'11:30–14:30，LO 14:00；定休週一',
      price:'ヴェローナコース¥3,000（含稅及服務費）',
      website:'https://www.hotelmonterey.co.jp/nagasaki/restaurant/plan/acbd5e396f420a7.html'
    }),
    foodBackup({
      id:'ins_d2_toen',title:'中国料理 桃苑',cityId:'nagasaki',nearEventId:'evt_d2_katsu',
      address:'Chinese restaurant Toen, Hotel JAL City Nagasaki 2F',
      addressLocal:'長崎市新地町13-10 ホテルJALシティ長崎 2F',
      note:'可預約午餐套餐¥1,870（一品＋4小菜＋湯飯＋甜品或咖啡），預約12:10，未訂。點酢豚，不要選A蝦辣醬、海鮮麵、ちゃんぽん。4款小菜與湯是否含蝦蟹或牛，點前問。餐廳全席禁煙。2F，經電梯。',
      phone:'095-825-2580',
      openHours:'月–六 11:30–14:00；定休星期日',
      price:'午餐套餐¥1,870',
      website:'https://www.nagasaki.jalcity.co.jp/restaurant/'
    }),
    foodBackup({
      id:'ins_d2_kairakuen',title:'会楽園',cityId:'nagasaki',nearEventId:'evt_d2_katsu',
      address:'Kairakuen, Shinchi-machi 10-16',
      addressLocal:'長崎市新地町10-16',
      note:'招牌角煮饅頭¥650、午餐定食¥1,000（スブタ／からあげ等）。大廳 walk-in，不訂座敷。點スブタ或からあげ定食，可加角煮饅頭。不要ハトシ、ちゃんぽん、皿うどん及蝦蟹、牛肉、麻婆豆腐。全席禁煙。',
      phone:'095-822-4261',
      openHours:'11:00–15:15，LO 14:30；官方不定休',
      price:'午餐定食¥1,000；角煮饅頭¥650',
      website:'https://www.kairakuen.tv/'
    }),
    foodBackup({
      id:'ins_d2_kyokaen',title:'中国名菜 京華園',cityId:'nagasaki',nearEventId:'evt_d2_katsu',
      address:'Kyokaen, Shinchi-machi 9-7',
      addressLocal:'長崎市新地町9-7',
      note:'招牌角煮丼¥1,200、角煮饅頭¥1,700、酢豚¥1,600。餐廳不接受預約，walk-in。點角煮丼或角煮饅頭，可配酢豚或普通炒飯。不要ちゃんぽん、皿うどん及蝦蟹、牛肉菜。全席禁煙。1F大廳。',
      phone:'095-821-1507',
      openHours:'11:00–15:00，最終入店14:30',
      price:'角煮丼¥1,200；角煮饅頭¥1,700；酢豚¥1,600',
      website:'https://www.kyokaen.co.jp/'
    }),
    foodBackup({
      id:'ins_d2_museumcafe',title:'長崎県美術館カフェ',cityId:'nagasaki',nearEventId:'evt_d2_katsu',
      address:'Nagasaki Prefectural Art Museum Cafe, Dejima-machi 2-1',
      addressLocal:'長崎市出島町2-1',
      note:'招牌いろどり野菜長崎角煮ごはん¥1,300、火腿三明治¥1,050。不要えびのホットサンド。角煮醬與湯是否含蝦蟹或牛，點前問。堂食可否訂未知。禁煙官方未寫。2F回廊，三人要桌子。',
      phone:'095-821-5183',
      openHours:'11:00–17:00；フード至16:00；第2、第4星期一休（遇祝改翌星期二）',
      price:'長崎角煮ごはん¥1,300；火腿三明治¥1,050',
      website:'https://www.nagasaki-museum.jp/visitor/cafe'
    }),
    foodBackup({
      id:'ins_d3_hamadaya',title:'博多水たき 濱田屋 くうてん',cityId:'fukuoka',nearEventId:'evt_d3_hm',
      address:'Mizutaki Hamadaya Kuuten, Amu Plaza 10F',
      addressLocal:'福岡市博多区博多駅中央街1-1 アミュプラザ 10階',
      note:'水炊き。商戶價くうてん御膳¥2,800、水炊きセット¥3,800。可 walk-in 亦可訂。點御膳或水炊きセット；小鉢與一品是否含蝦蟹或牛，點前問。不要含馬刺的課程。全席禁煙。10F。',
      phone:'092-292-3412',
      openHours:'11:00–22:00；官方不定休',
      price:'商戶價くうてん御膳¥2,800；水炊きセット¥3,800',
      website:'https://mizutaki-hamadaya.jp/'
    }),
    foodBackup({
      id:'ins_d3_amano',title:'はかた天乃 KITTE博多店',cityId:'fukuoka',nearEventId:'evt_d3_hm',
      address:'Hakata Ama-no, KITTE Hakata B1F',
      addressLocal:'福岡市博多区博多駅中央街9-1 KITTE博多 B1F',
      note:'招牌明太丼¥2,190、銀ダラ味噌定食¥1,850。午餐不接受預約，walk-in。可點明太丼或燒魚定食。不要海鮮明太丼、海鮮丼、牛すき明太丼、海老料理、もつ鍋。全席終日禁煙。B1，三人要桌子。',
      phone:'092-260-6366',
      openHours:'7:00–23:00；定食10:00起',
      price:'明太丼¥2,190；銀ダラ味噌定食¥1,850',
      website:'https://hakata.jp-kitte.jp/shop/index.jsp?bf=1&fmt=6&shopid=400'
    }),
    foodBackup({
      id:'ins_d3_makino',title:'牧のうどん 博多バスターミナル店',cityId:'fukuoka',nearEventId:'evt_d3_hm',
      address:'Makino Udon, Hakata Bus Terminal B1F',
      addressLocal:'福岡市博多区博多駅中央街2-1 博多バスターミナル B1F',
      note:'當地釜揚烏龍。walk-in，不接受預約。不要姿えび。肉麵肉種與天婦羅配料是否含牛或蝦蟹，點前問或改點ごぼう天、かけ。全席禁煙。付款：現金；卡片／電子支付不可。本店實價未核（分店價不同）。B1。',
      phone:'092-483-1130',
      openHours:'10:00–23:00',
      price:'食べログ～¥999；本店實價未核',
      website:'https://www.makinoudon.jp/cont10/main.html'
    }),
    foodBackup({
      id:'ins_d3_fukufuku',title:'うどん酒場 福福',cityId:'fukuoka',nearEventId:'evt_d3_hm',
      address:'Udon Sakaba Fukufuku, Fukuoka Z Building 1F',
      addressLocal:'福岡市博多区博多駅前3-18-28 福岡Zビル 1F',
      note:'可預約。午餐實價未核，食べログ午市預算～¥999。11:30開門。出汁為昆布、鰹節、するめ、鯖。不要もつ鍋；「肉」麵肉種須問或改點かしわ／ごぼ天。全席禁煙。1F，三人要桌子。付款：PayPay；カード不可。',
      phone:'092-411-7222',
      openHours:'月–六及祝 11:30–14:30，LO 14:00；定休星期日',
      price:'食べログ午市預算～¥999；午餐實價未核',
      website:'https://tabelog.com/fukuoka/A4001/A400101/40053221/'
    }),
    foodBackup({
      id:'ins_d3_matsumoto',title:'鶏匠 松元',cityId:'fukuoka',nearEventId:'evt_d3_hm',
      address:'Torisho Matsumoto, Hakata Deitos B1F',
      addressLocal:'福岡市博多区博多駅中央街1-1 博多デイトス B1F',
      note:'水炊きセット梅¥1,980、親子丼定食¥1,100。可預約或 walk-in。水炊き與親子丼為雞。不要牛筋／おでん；問套餐湯底是否含牛或蝦蟹。全席禁煙。デイトス B1，三人要桌子。',
      phone:'092-409-2992',
      openHours:'9:00–22:30',
      price:'水炊きセット梅¥1,980；親子丼定食¥1,100',
      website:'https://xn--z4q38b609a154c.com/'
    })
  ];
  for (const e of newBackups) {
    if (INSPIRATIONS.some(x=>x.id===e.id)) throw new Error(e.id+' already present');
    INSPIRATIONS.push(e);
  }

  card('ins_d2_amalia','行き先：アマリアサロン／ホテルモントレ長崎 1F\n住所：長崎市大浦町1-22\nホテル正門の合法的な場所で降ろしてください。');
  card('ins_d2_toen','行き先：中国料理 桃苑／ホテルJALシティ長崎 2F\n住所：長崎市新地町13-10\nホテル正門で降ろしてください。');
  card('ins_d2_kairakuen','行き先：会楽園\n住所：長崎市新地町10-16\n入口近くの合法的な場所で降ろしてください。');
  card('ins_d2_kyokaen','行き先：中国名菜 京華園\n住所：長崎市新地町9-7\n入口近くの合法的な場所で降ろしてください。');
  card('ins_d2_museumcafe','行き先：長崎県美術館カフェ\n住所：長崎市出島町2-1\n館の入口近くの合法的な場所で降ろしてください。');
  card('ins_d3_hamadaya','行き先：博多水たき 濱田屋 くうてん\n住所：福岡市博多区博多駅中央街1-1 アミュプラザ 10階\nアミュプラザ入口近くの合法的な場所で降ろしてください。');
  card('ins_d3_amano','行き先：はかた天乃 KITTE博多店\n住所：福岡市博多区博多駅中央街9-1 KITTE博多 B1F\nKITTE入口近くの合法的な場所で降ろしてください。');
  card('ins_d3_makino','行き先：牧のうどん 博多バスターミナル店\n住所：福岡市博多区博多駅中央街2-1 博多バスターミナル B1F\nバスターミナル入口近くの合法的な場所で降ろしてください。');
  card('ins_d3_fukufuku','行き先：うどん酒場 福福\n住所：福岡市博多区博多駅前3-18-28 福岡Zビル 1F\n入口近くの合法的な場所で降ろしてください。');
  card('ins_d3_matsumoto','行き先：鶏匠 松元\n住所：福岡市博多区博多駅中央街1-1 博多デイトス B1F\nデイトス入口近くの合法的な場所で降ろしてください。');

  const phrase=(pronounce,primary,secondary)=>({term_primary:primary,term_secondary:secondary,term_pronounce:pronounce});
  const ng=PHRASE_DATA.find(x=>x.category==='長崎司機');
  const fk=PHRASE_DATA.find(x=>x.category==='福岡司機');
  if(!ng||!fk) throw new Error('Missing phrase category');
  ng.items.push(
    phrase('Amalia備案','アマリアサロンへ。大浦町1-22 ホテルモントレ長崎1Fです。','酒店正門落客。'),
    phrase('桃苑備案','中国料理 桃苑へ。新地町13-10 ホテルJALシティ長崎2Fです。','酒店正門落客。'),
    phrase('会楽園備案','会楽園へ。新地町10-16です。','入口附近合法下客。'),
    phrase('京華園備案','京華園へ。新地町9-7です。','入口附近合法下客。'),
    phrase('県美術館カフェ備案','長崎県美術館カフェへ。出島町2-1です。','入口附近合法下客。')
  );
  fk.items.push(
    phrase('濱田屋備案','博多水たき濱田屋くうてんへ。アミュプラザ10階です。','アミュ入口附近合法下客。'),
    phrase('天乃備案','はかた天乃へ。KITTE博多B1Fです。','KITTE入口附近合法下客。'),
    phrase('牧のうどん備案','牧のうどん博多バスターミナル店へ。バスターミナルB1Fです。','入口附近合法下客。'),
    phrase('福福備案','うどん酒場福福へ。博多駅前3-18-28 福岡Zビル1Fです。','入口附近合法下客。'),
    phrase('松元備案','鶏匠松元へ。博多デイトスB1Fです。','デイトス入口附近合法下客。')
  );
})();

// Nov23: Kagoshima day aligned to final shore draft (Amami-no-Sato main line).
(function () {
  const get=id=>{const e=ITINERARY.items.find(x=>x.id===id);if(!e)throw new Error('Missing '+id);return e;};
  const backup=id=>{const e=INSPIRATIONS.find(x=>x.id===id);if(!e)throw new Error('Missing backup '+id);return e;};
  const card=(id,text)=>{SHORE_CARDS[id]=[text,''];};

  if(DESTINATION.name==='鹿兒島') DESTINATION.name='海洋光譜號岸上行程';

  const show=PHRASE_DATA.find(g=>g.category==='出示前');
  if(!show||!show.items[0])throw new Error('Missing 出示前 phrase');
  Object.assign(show.items[0],{
    term_primary:'船内時刻と現地時刻は同じUTC+9です。',
    term_secondary:'船時與JST／KST同為UTC+9。',
    term_pronounce:'船時核對'
  });

  const toAmami=get('evt_d1_to_amami');
  Object.assign(toAmami,{
    title:'前往奄美の里',
    time:'14:40',timeHint:'afternoon',tags:['逐段叫車'],
    address:'Amami-no-Sato, 1-8-1 Minamiei',
    addressLocal:'鹿児島県鹿児島市南栄1-8-1',
    note:'14:40從天文館叫的士往奄美の里（南栄1-8-1）。車程未核。',
    transport:{...toAmami.transport,mode:'taxi',from:'天文館',to:'奄美の里',fromEventId:null,toEventId:null,durationMin:null,stopCount:null,liveApi:null}
  });
  card('evt_d1_to_amami','行き先：奄美の里\n住所：鹿児島市南栄1-8-1\n入口近くの合法的な場所で降ろしてください。');

  const amami=get('evt_d1_amami');
  Object.assign(amami,{
    title:'奄美の里',time:'15:00',timeHint:'afternoon',type:'sight',tags:['工藝見學'],
    address:'Amami-no-Sato, 1-8-1 Minamiei',addressLocal:'鹿児島県鹿児島市南栄1-8-1',
    phone:'099-268-0331',website:'https://www.amaminosato.jp/',
    openHours:'09:00–17:00；最終受付16:30；年中無休',price:'入園成人¥500',
    note:'約15:00–15:45只看本館與工場及手信，不繞兩庭園。工場入口約8度斜坡，染色工場前3cm段差。\n看點與拍照：看本館大島紬織程與工場，再到手信區。 付款：入園成人¥500；刷卡未確認，備現金。'
  });

  const ten=get('evt_d1_tenmonkan');
  ten.note='購物15–20分鐘。14:40轉車往奄美の里。延誤先刪此段，再將奄美の里縮至20分。\n看點與拍照：就近進有蓋拱廊，短逛店舖再原路回；沿街道中線取拱廊縱深與兩側店招。 付款：各店刷卡未確認，購物備現金。';

  const ret=get('evt_d1_return');
  Object.assign(ret,{
    time:'15:45',timeHint:'afternoon',tags:[],
    address:'Marine Port Kagoshima, Chuo-ko Shinmachi 1-10',
    addressLocal:'鹿児島県鹿児島市中央港新町1-10',
    note:'15:45從奄美の里叫的士回海洋港，官方目安約10分、約¥1,800。船時17:00前到碼頭。',
    transport:{...ret.transport,mode:'taxi',from:'奄美の里',to:'海洋港',fromEventId:null,toEventId:null,durationMin:10,stopCount:null,liveApi:null}
  });
  card('evt_d1_return','行き先：マリンポートかごしま\n住所：鹿児島県鹿児島市中央港新町1-10\nターミナル入口近くの合法的な場所で降ろしてください。');

  backup('ins_d1_tired').note='保留仙巌園與午餐；午後先刪天文館，再將奄美の里縮至20分。';
  backup('ins_d1_traffic').note='離園前請受付代叫的士。延誤先刪天文館，再將奄美の里縮至20分。船時17:00前到海洋港。';
  Object.assign(backup('ins_d1_waterfront'),{
    nearEventId:'evt_d1_amami',
    note:'午後備案，拍櫻島、錦江灣與港口。步行約30分鐘休5分鐘；鄰接縣營停車場側上下客。\n看點與拍照：海邊鋪面欄杆平視櫻島與錦江灣，把渡輪帶入前景；近處可看南風の泉噴水與草坪。 付款：入場收費及刷卡未確認；如有收費，備現金。'
  });

  const kg=PHRASE_DATA.find(g=>g.category==='鹿兒島司機');
  if(!kg)throw new Error('Missing 鹿兒島司機');
  const cardHint='完整司機卡見當日日表／備案。';
  for(const e of kg.items){
    if(['K1 仙巌園','K2 ふくや','回海洋港','桜華亭備案'].includes(e.term_pronounce)) e.term_secondary=cardHint;
  }
  const amamiPhrase=kg.items.find(e=>e.term_pronounce==='奄美の里');
  if(!amamiPhrase)throw new Error('Missing 奄美の里 phrase');
  Object.assign(amamiPhrase,{
    term_primary:'奄美の里へ。鹿児島市南栄1-8-1です。',
    term_secondary:'入口附近合法下客。',
    term_pronounce:'奄美の里'
  });

  // Keep timeline transport titles as destination names (App modal already prefixes 前往).
  get('evt_d1_to_amami').title='奄美の里';
})();

// Nov25 t433: approved Nagasaki Nov26 v2 data only.
(function updateNagasakiNov26() {
  const day2 = [
  {
    "id": "evt_d2_to_park",
    "day": 2,
    "time": "08:15",
    "timeHint": "morning",
    "type": "transport",
    "title": "長崎歴史文化博物館",
    "cityId": "nagasaki",
    "address": "Ourakaigandori tram stop",
    "addressLocal": "長崎電気軌道 大浦海岸通 電停",
    "coords": null,
    "tags": [
      "放行"
    ],
    "moodColor": "#6B5E52",
    "note": "長崎當日鐘點為建議規劃目標，不是已核到達或車程。\n出發目標08:15，須已放行；按實際放行後到站選班，不指定必趕某班。\n【上車】松が枝步行約3分到大浦海岸通；搭蛍茶屋行，不搭石橋行。\n【下車】市役所步行7分到館；或轉3號赤迫／長崎駅前方向，一站2分到桜町，再步行5分。5號與3號市役所不同停場，停場間步行及各段坡度／樓梯未核。\n【車資】Suica等IC上、下車均拍卡；市役所第一次下車起30分內再上車，第二程免費。現金兩程各¥150。\n【班次】8時05、13、21、29、37※、45、53※；※學校休日停開，Nov 26是否學校休日未核。9時後約11分一班。開館08:30。\n【備案】的士到館，候車／車程／車資未核。",
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": null,
    "price": "大人¥150",
    "website": null,
    "cost": null,
    "status": "pending",
    "source": "ai",
    "transport": {
      "mode": "train",
      "from": "大浦海岸通",
      "to": "市役所",
      "fromEventId": null,
      "toEventId": null,
      "operator": "長崎電気軌道",
      "line": "5号系統",
      "durationMin": 12,
      "stopCount": null,
      "liveApi": null
    }
  },
  {
    "id": "evt_d2_park",
    "day": 2,
    "time": "09:00",
    "timeHint": "morning",
    "type": "sight",
    "title": "長崎歴史文化博物館",
    "cityId": "nagasaki",
    "address": "Nagasaki Museum of History and Culture, 1-1-1 Tateyama",
    "addressLocal": "長崎市立山1-1-1",
    "coords": null,
    "tags": [],
    "moodColor": "#4A5963",
    "note": "參觀目標09:00–10:30，約1–1.5小時。看海外交流史、歷史資料及復原長崎奉行所立山役所。免費APP「ポケット学芸員」簡體中文語音，輸入展品編號播放，無需預約；可借平板，費用未列。館內全平、有電梯。約走30分休5分。刷卡未核，備現金。",
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "08:30–19:00；最後入館18:30",
    "price": "常設展大人¥630",
    "website": "https://www.nmhc.jp/guide-app/",
    "cost": null,
    "status": "pending",
    "source": "ai",
    "transport": null
  },
  {
    "id": "evt_d2_to_katsu",
    "day": 2,
    "time": "10:30",
    "timeHint": "morning",
    "type": "transport",
    "title": "海鮮市場 長崎港 出島ワーフ店",
    "cityId": "nagasaki",
    "address": "Nagasaki Museum of History and Culture entrance",
    "addressLocal": "長崎市立山1-1-1 長崎歴史文化博物館",
    "coords": null,
    "tags": [],
    "moodColor": null,
    "note": "【上車】離館／叫車目標10:30。\n【下車】出島ワーフ1F入口附近。館至店步行／的士分鐘未核；早於11:00到便坐等開市。",
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": null,
    "price": null,
    "website": null,
    "cost": null,
    "status": "pending",
    "source": "ai",
    "transport": {
      "mode": "taxi",
      "from": "長崎歴史文化博物館",
      "to": "海鮮市場 出島ワーフ店",
      "fromEventId": null,
      "toEventId": null,
      "operator": null,
      "line": null,
      "durationMin": null,
      "stopCount": null,
      "liveApi": null
    }
  },
  {
    "id": "evt_d2_katsu",
    "day": 2,
    "time": "11:00",
    "timeHint": "morning",
    "type": "food",
    "title": "海鮮市場 長崎港 出島ワーフ店",
    "cityId": "nagasaki",
    "address": "Nagasakiko, Dejima Wharf 1F, 1-1 Dejima-machi",
    "addressLocal": "長崎市出島町1-1 長崎出島ワーフ1F",
    "coords": null,
    "tags": [
      "未訂・現場候位"
    ],
    "moodColor": "#6A5348",
    "note": "午餐目標11:00–12:30，未訂位。推薦壽司定食、刺身定食。室內全席禁煙，露台可吸煙；室內椅桌席數未核，入店問普通椅。海鮮丼可能有蝦，點菜時問；父不食蝦蟹、母不食牛，屬偏好非過敏，湯醬配菜一併問，不排除整店。可電話或ぐるなび訂；當日空位、日本電話要求未核。出島電停至店步行約2–4分。刷卡未核，備現金。午餐後原地坐休，14:00再出發，不另插新點。",
    "phone": "095-811-1677",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "11:00–22:00；L.O.21:30；年中無休",
    "price": "お寿司定食¥1,298；刺身定食¥1,320",
    "website": "https://tabelog.com/nagasaki/A4201/A420101/42000213/",
    "cost": null,
    "status": "pending",
    "source": "ai",
    "transport": null
  },
  {
    "id": "evt_d2_to_museum",
    "day": 2,
    "time": "14:00",
    "timeHint": "afternoon",
    "type": "transport",
    "title": "出島",
    "cityId": "nagasaki",
    "address": "Dejima Wharf 1F",
    "addressLocal": "長崎市出島町1-1 長崎出島ワーフ1F",
    "coords": null,
    "tags": [],
    "moodColor": null,
    "note": "【上車】14:00往出島出發目標。必要則叫的士。\n【下車】表門橋附近大路，橋上不落客。店至表門橋步行／的士分鐘未核。",
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": null,
    "price": null,
    "website": null,
    "cost": null,
    "status": "pending",
    "source": "ai",
    "transport": {
      "mode": "walk",
      "from": "海鮮市場 出島ワーフ店",
      "to": "出島表門橋側",
      "fromEventId": null,
      "toEventId": null,
      "operator": null,
      "line": null,
      "durationMin": null,
      "stopCount": null,
      "liveApi": null
    }
  },
  {
    "id": "evt_d2_museum",
    "day": 2,
    "time": "14:20",
    "timeHint": "afternoon",
    "type": "sight",
    "title": "出島",
    "cityId": "nagasaki",
    "address": "Dejima, 6-1 Dejima-machi",
    "addressLocal": "長崎県長崎市出島町6-1",
    "coords": null,
    "tags": [
      "核心約30分"
    ],
    "moodColor": "#4A5963",
    "note": "目標14:20–14:55，核心約30分。表門橋→復原主街外觀→一間1F展示；拍橋與主街，不上2F、不逛16棟。橋有無障礙坡，斜度未核；見疲態折返，坐休5分。出島必留，不以其他點取代。無中文耳機或中文APP；不排15:30導覽。出島シアター停映、舊出島神學校不可入室。入場可刷信用卡／銀聯；園內消費刷卡未核。",
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "08:00–21:00；最後入場20:40",
    "price": "成人¥1,100",
    "website": "https://nagasakidejima.jp/about/",
    "cost": null,
    "status": "pending",
    "source": "ai",
    "transport": null
  },
  {
    "id": "evt_d2_to_yoshindo",
    "day": 2,
    "time": "14:55",
    "timeHint": "afternoon",
    "type": "transport",
    "title": "でじま芳扇堂",
    "cityId": "nagasaki",
    "address": "Dejima front bridge approach",
    "addressLocal": "長崎市出島町6-1 出島表門橋側",
    "coords": null,
    "tags": [],
    "moodColor": "#4A5963",
    "note": "【下車】出島町5-24。出島至芳扇堂步行／的士分鐘未核；必要則叫的士。",
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": null,
    "price": null,
    "website": null,
    "cost": null,
    "status": "pending",
    "source": "ai",
    "transport": {
      "mode": "walk",
      "from": "出島表門橋側",
      "to": "でじま芳扇堂",
      "fromEventId": null,
      "toEventId": null,
      "operator": null,
      "line": null,
      "durationMin": null,
      "stopCount": null,
      "liveApi": null
    }
  },
  {
    "id": "evt_d2_yoshindo",
    "day": 2,
    "time": "15:05",
    "timeHint": "afternoon",
    "type": "food",
    "title": "でじま芳扇堂",
    "cityId": "nagasaki",
    "status": "confirmed",
    "source": "ai",
    "address": "Dejima Hosendo, 5-24 Dejima-machi",
    "addressLocal": "長崎県長崎市出島町5-24",
    "coords": null,
    "tags": [
      "三人吧台已保留"
    ],
    "moodColor": null,
    "note": "15:05–15:50。15:00起三人吧台已確認保留。ちょっと飲み¥2,500、どぶろく品飲¥3,500；父母可點甘酒¥1,500。刷卡未核，備現金。",
    "phone": "080-7124-4508",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "15:00–19:00；定休火、水。11/26週四非定休",
    "price": "ちょっと飲み¥2,500；どぶろく品飲¥3,500；甘酒¥1,500",
    "website": "https://djm-hosendo.co.jp/store",
    "cost": null,
    "transport": null
  },
  {
    "id": "evt_d2_return",
    "day": 2,
    "time": "15:55",
    "timeHint": "afternoon",
    "type": "transport",
    "title": "返回郵輪碼頭",
    "cityId": "nagasaki",
    "address": "Dejima Hosendo, 5-24 Dejima-machi",
    "addressLocal": "長崎市出島町5-24",
    "coords": null,
    "tags": [],
    "moodColor": "#6B5E52",
    "note": "【上車】15:55叫的士，最晚16:00上車。\n【下車】17:00船時到松が枝國際ターミナル。車程／車資未核。",
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": null,
    "price": null,
    "website": null,
    "cost": null,
    "status": "pending",
    "source": "ai",
    "transport": {
      "mode": "taxi",
      "from": "でじま芳扇堂",
      "to": "松が枝國際ターミナル",
      "fromEventId": null,
      "toEventId": null,
      "operator": "",
      "line": null,
      "durationMin": null,
      "stopCount": null,
      "liveApi": null
    }
  }
];
  const first = ITINERARY.items.findIndex(e => e.day === 2);
  const retained = ITINERARY.items.filter(e => e.day !== 2);
  retained.splice(first, 0, ...day2);
  ITINERARY.items = retained;
  const backups = [
  {
    "id": "ins_d2_rain",
    "title": "出島ワーフ海港景",
    "tag": "TIRED",
    "type": "sight",
    "cityId": "nagasaki",
    "nearEventId": "evt_d2_museum",
    "status": "wishlist",
    "source": "ai",
    "note": "與午餐同一複合設施，休息看海港，不可取代出島。縣營停車場側下客；2F平台有椅，面海中央梯右側有電梯。消費刷卡未核。",
    "address": "Dejima Wharf, 1-1-109 Dejima-machi",
    "addressLocal": "長崎市出島町1-1-109",
    "website": null,
    "coords": null,
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": null,
    "price": null,
    "cost": null
  },
  {
    "id": "ins_d2_drop_ruri",
    "title": "長崎減腳程順序",
    "tag": "TIRED",
    "type": "note",
    "cityId": "nagasaki",
    "nearEventId": "evt_d2_park",
    "status": "wishlist",
    "source": "ai",
    "note": "先不用眼鏡橋備案；博物館可縮至約1小時。保留出島核心及芳扇堂時段；最晚16:00從芳扇堂上車，17:00到碼頭。",
    "coords": null,
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": null,
    "price": null,
    "website": null,
    "cost": null
  },
  {
    "id": "ins_d2_pave",
    "title": "Pavé",
    "tag": "FOOD",
    "type": "food",
    "cityId": "nagasaki",
    "nearEventId": "evt_d2_katsu",
    "status": "wishlist",
    "source": "ai",
    "address": "Restaurant Pave, ANA Crowne Plaza Nagasaki Gloverhill 2F",
    "addressLocal": "長崎県長崎市南山手町1-18",
    "website": "https://www.anacrowneplaza-nagasaki.jp/restaurants/pave",
    "phone": "095-818-8012",
    "openHours": "當地午市以 14:30 前完成較保守。收店資料有 15:00／14:30 差異，不依賴較晚時段。",
    "price": "Nov自助餐¥3,300／成人；未訂位。",
    "note": "自助午餐，電梯上2F。須逐道確認牛肉、蝦蟹及湯醬，未核清不選。 付款：餐費可刷 Visa／Mastercard／JCB／Amex／Diners。",
    "coords": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "cost": null
  },
  {
    "tag": "FOOD",
    "type": "food",
    "cityId": "nagasaki",
    "address": "Amalia Salon, Hotel Monterey Nagasaki 1F",
    "addressLocal": "長崎市大浦町1-22 ホテルモントレ長崎 1F",
    "coords": null,
    "nearEventId": "evt_d2_katsu",
    "note": "可預約ヴェローナコース¥3,000（前菜、意粉、魚或肉、甜品），預約12:10，未訂。選魚主菜，不要肉主菜；前菜與醬是否含蝦蟹或牛，點前問。全席禁煙。1F，酒店正門。",
    "phone": "095-827-7917",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "11:30–14:30，LO 14:00；定休週一",
    "price": "ヴェローナコース¥3,000（含稅及服務費）",
    "website": "https://www.hotelmonterey.co.jp/nagasaki/restaurant/plan/acbd5e396f420a7.html",
    "status": "wishlist",
    "source": "ai",
    "id": "ins_d2_amalia",
    "title": "アマリアサロン"
  },
  {
    "tag": "FOOD",
    "type": "food",
    "cityId": "nagasaki",
    "address": "Chinese restaurant Toen, Hotel JAL City Nagasaki 2F",
    "addressLocal": "長崎市新地町13-10 ホテルJALシティ長崎 2F",
    "coords": null,
    "nearEventId": "evt_d2_katsu",
    "note": "可預約午餐套餐¥1,870（一品＋4小菜＋湯飯＋甜品或咖啡），預約12:10，未訂。點酢豚，不要選A蝦辣醬、海鮮麵、ちゃんぽん。4款小菜與湯是否含蝦蟹或牛，點前問。餐廳全席禁煙。2F，經電梯。",
    "phone": "095-825-2580",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "月–六 11:30–14:00；定休星期日",
    "price": "午餐套餐¥1,870",
    "website": "https://www.nagasaki.jalcity.co.jp/restaurant/",
    "status": "wishlist",
    "source": "ai",
    "id": "ins_d2_toen",
    "title": "中国料理 桃苑"
  },
  {
    "tag": "FOOD",
    "type": "food",
    "cityId": "nagasaki",
    "address": "Kairakuen, Shinchi-machi 10-16",
    "addressLocal": "長崎市新地町10-16",
    "coords": null,
    "nearEventId": "evt_d2_katsu",
    "note": "招牌角煮饅頭¥650、午餐定食¥1,000（スブタ／からあげ等）。大廳 walk-in，不訂座敷。點スブタ或からあげ定食，可加角煮饅頭。不要ハトシ、ちゃんぽん、皿うどん及蝦蟹、牛肉、麻婆豆腐。全席禁煙。",
    "phone": "095-822-4261",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "11:00–15:15，LO 14:30；官方不定休",
    "price": "午餐定食¥1,000；角煮饅頭¥650",
    "website": "https://www.kairakuen.tv/",
    "status": "wishlist",
    "source": "ai",
    "id": "ins_d2_kairakuen",
    "title": "会楽園"
  },
  {
    "tag": "FOOD",
    "type": "food",
    "cityId": "nagasaki",
    "address": "Kyokaen, Shinchi-machi 9-7",
    "addressLocal": "長崎市新地町9-7",
    "coords": null,
    "nearEventId": "evt_d2_katsu",
    "note": "招牌角煮丼¥1,200、角煮饅頭¥1,700、酢豚¥1,600。餐廳不接受預約，walk-in。點角煮丼或角煮饅頭，可配酢豚或普通炒飯。不要ちゃんぽん、皿うどん及蝦蟹、牛肉菜。全席禁煙。1F大廳。",
    "phone": "095-821-1507",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "11:00–15:00，最終入店14:30",
    "price": "角煮丼¥1,200；角煮饅頭¥1,700；酢豚¥1,600",
    "website": "https://www.kyokaen.co.jp/",
    "status": "wishlist",
    "source": "ai",
    "id": "ins_d2_kyokaen",
    "title": "中国名菜 京華園"
  },
  {
    "tag": "FOOD",
    "type": "food",
    "cityId": "nagasaki",
    "address": "Nagasaki Prefectural Art Museum Cafe, Dejima-machi 2-1",
    "addressLocal": "長崎市出島町2-1",
    "coords": null,
    "nearEventId": "evt_d2_katsu",
    "note": "招牌いろどり野菜長崎角煮ごはん¥1,300、火腿三明治¥1,050。不要えびのホットサンド。角煮醬與湯是否含蝦蟹或牛，點前問。堂食可否訂未知。禁煙官方未寫。2F回廊，三人要桌子。",
    "phone": "095-821-5183",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "11:00–17:00；フード至16:00；第2、第4星期一休（遇祝改翌星期二）",
    "price": "長崎角煮ごはん¥1,300；火腿三明治¥1,050",
    "website": "https://www.nagasaki-museum.jp/visitor/cafe",
    "status": "wishlist",
    "source": "ai",
    "id": "ins_d2_museumcafe",
    "title": "長崎県美術館カフェ"
  },
  {
    "id": "ins_d2_watergarden",
    "type": "sight",
    "title": "水之庭園",
    "cityId": "nagasaki",
    "address": "Water Garden, 1-60 Tokiwa-machi",
    "addressLocal": "長崎市常盤町1-60",
    "coords": null,
    "tags": [],
    "moodColor": "#4A5963",
    "note": "博物館未能入館時用，之後仍接午餐→出島→芳扇堂。硬鋪港景，長椅可坐；落客到海邊步分、局部坡度未核。公園免費，消費刷卡未核。",
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "24小時",
    "price": "免費",
    "website": "https://nagasaki-p.com/mizube/",
    "cost": null,
    "status": "wishlist",
    "source": "ai",
    "nearEventId": "evt_d2_park",
    "tag": "TIME"
  },
  {
    "id": "ins_d2_rurian",
    "type": "sight",
    "title": "瑠璃庵",
    "cityId": "nagasaki",
    "address": "Rurian Glass Studios",
    "addressLocal": "長崎県長崎市松が枝町5-11 瑠璃庵",
    "coords": null,
    "tags": [],
    "moodColor": "#4A5963",
    "note": "博物館未能入館時用。短看店面及玻璃作品；製作依當日作業，體驗製作禁拍。不訂手作，無中文導覽。坡度及純參觀費用未核；刷卡未核，備現金。",
    "phone": "095-827-0737",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "09:30–17:00；週二休",
    "price": null,
    "website": "https://rurian.com/",
    "cost": null,
    "status": "wishlist",
    "source": "ai",
    "nearEventId": "evt_d2_park",
    "tag": "TIME"
  },
  {
    "id": "ins_d2_megane",
    "type": "sight",
    "title": "眼鏡橋",
    "cityId": "nagasaki",
    "address": "Meganebashi, Uo-no-machi 2",
    "addressLocal": "長崎県長崎市魚の町2",
    "coords": null,
    "tags": [],
    "moodColor": "#4A5963",
    "note": "午餐後短拍約10–15分；仍須保留出島約30分及15:05芳扇堂。魚の町2平地拍雙拱倒影，不下河床、不走橋階；拍後叫的士往出島。",
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "全日開放",
    "price": "免費",
    "website": "https://www.at-nagasaki.jp/barrierfree/64024",
    "cost": null,
    "status": "wishlist",
    "source": "ai",
    "nearEventId": "evt_d2_katsu",
    "tag": "TIME"
  },
  {
    "id": "ins_d2_katsu",
    "type": "food",
    "title": "勝鹿新地店",
    "cityId": "nagasaki",
    "address": "Katsushika Shinchi main shop, Lahaina Building 1F",
    "addressLocal": "長崎県長崎市新地町12-10 ラハイナビル1F",
    "coords": null,
    "tags": [],
    "moodColor": "#6A5348",
    "note": "不接受預約，現場候位。推薦豬排或雞排；全席禁煙。步行／的士分鐘未核。刷卡未核，備現金。",
    "phone": "095-825-0188",
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "11:30–15:00；不定休",
    "price": "豬排／雞排約¥1,000–1,600",
    "website": "https://www.katsu-shika.com/tonkatsu",
    "cost": null,
    "status": "wishlist",
    "source": "ai",
    "nearEventId": "evt_d2_katsu",
    "tag": "FOOD"
  },
  {
    "id": "ins_d2_hiiragi",
    "type": "food",
    "title": "らーめん柊 銅座本店",
    "cityId": "nagasaki",
    "address": "Ramen Hiiragi, 6-9 Doza-machi",
    "addressLocal": "長崎市銅座町6-9 徳山銅座ビル1F",
    "coords": null,
    "tags": [],
    "moodColor": "#6A5348",
    "note": "walk-in，不接受預約；全席禁煙。推薦豚骨或あおさ拉麵。觀光通電停步行2分；至出島／芳扇堂步行／的士分鐘未核。四人桌現況、担々配方、稅込與臨時休未核。刷卡未核，備現金。",
    "phone": null,
    "whatsapp": null,
    "line": null,
    "messenger": null,
    "openHours": "日–木11:00–翌3:00；盆、年末年始、其他休",
    "price": "豚骨¥830；あおさ¥900；番茄¥1,000；担々¥900",
    "website": "https://www.ramen-hiiragi.com/douza/",
    "cost": null,
    "status": "wishlist",
    "source": "ai",
    "nearEventId": "evt_d2_katsu",
    "tag": "FOOD"
  }
];
  for (let i = INSPIRATIONS.length - 1; i >= 0; i--) if (INSPIRATIONS[i].cityId === "nagasaki") INSPIRATIONS.splice(i, 1);
  INSPIRATIONS.push(...backups);
  for (const id of ["evt_d2_to_park", "evt_d2_park", "evt_d2_to_rurian", "evt_d2_rurian", "evt_d2_to_katsu", "evt_d2_katsu", "evt_d2_to_megane", "evt_d2_megane", "evt_d2_to_museum", "evt_d2_museum", "evt_d2_attic", "evt_d2_yoshindo", "evt_d2_return"]) delete SHORE_CARDS[id];
  Object.assign(SHORE_CARDS, {
  "evt_d2_to_park": [
    "行き先：長崎歴史文化博物館\n住所：長崎市立山1-1-1\n館の入口近くの合法的な場所で降ろしてください。",
    ""
  ],
  "evt_d2_to_katsu": [
    "行き先：海鮮市場 長崎港 出島ワーフ店\n住所：長崎市出島町1-1 長崎出島ワーフ1F\n入口の近くで降ろしてください。",
    ""
  ],
  "evt_d2_to_museum": [
    "行き先：出島・表門橋側\n住所：長崎市出島町6-1\n橋には入らず、近くの大通りの合法的な場所で降ろしてください。",
    ""
  ],
  "evt_d2_to_yoshindo": [
    "行き先：でじま芳扇堂\n住所：長崎市出島町5-24\n店の近くの合法的な場所で降ろしてください。",
    ""
  ],
  "evt_d2_return": [
    "行き先：長崎港松が枝国際ターミナル\n住所：長崎県長崎市松が枝町7番16号\n入口の近くで降ろしてください。",
    ""
  ],
  "ins_d2_watergarden": [
    "行き先：長崎水辺の森公園・水の庭園側\n住所：長崎県長崎市常盤町1-60\n入口の近くで降ろしてください。",
    ""
  ],
  "ins_d2_rurian": [
    "行き先：瑠璃庵（RURIAN GLASS STUDIOS）\n住所：長崎市松が枝町5-11\n入口の近くで降ろしてください。",
    ""
  ],
  "ins_d2_megane": [
    "行き先：眼鏡橋\n住所：長崎市魚の町2\n平地の道路側の合法的な場所で降ろしてください。川岸へ下りません。",
    ""
  ],
  "ins_d2_katsu": [
    "行き先：勝鹿 新地店（本店）\n住所：長崎市新地町12-10 ラハイナビル1F\n入口の近くで降ろしてください。",
    ""
  ],
  "ins_d2_hiiragi": [
    "行き先：らーめん柊 銅座本店\n住所：長崎市銅座町6-9 徳山銅座ビル1F\n入口の近くで降ろしてください。",
    ""
  ]
});
  const ng = PHRASE_DATA.find(g => g.category === "長崎司機");
  ng.items = ng.items.filter(p => !/勝鹿|水之庭園|瑠璃庵|眼鏡橋/.test(p.term_pronounce || ""));
  ng.items.push(...[
  {
    "term_primary": "長崎歴史文化博物館へ。長崎市立山1-1-1です。",
    "term_secondary": "完整司機卡見對應行程／備案。",
    "term_pronounce": "長崎歴史文化博物館"
  },
  {
    "term_primary": "海鮮市場 長崎港 出島ワーフ店へ。長崎市出島町1-1 長崎出島ワーフ1Fです。",
    "term_secondary": "完整司機卡見對應行程／備案。",
    "term_pronounce": "海鮮市場 長崎港 出島ワーフ店"
  },
  {
    "term_primary": "出島・表門橋側へ。長崎市出島町6-1です。",
    "term_secondary": "完整司機卡見對應行程／備案。",
    "term_pronounce": "出島"
  },
  {
    "term_primary": "でじま芳扇堂へ。長崎市出島町5-24です。",
    "term_secondary": "完整司機卡見對應行程／備案。",
    "term_pronounce": "でじま芳扇堂"
  },
  {
    "term_primary": "長崎水辺の森公園・水の庭園側へ。長崎県長崎市常盤町1-60です。",
    "term_secondary": "完整司機卡見對應行程／備案。",
    "term_pronounce": "水之庭園"
  },
  {
    "term_primary": "瑠璃庵（RURIAN GLASS STUDIOS）へ。長崎市松が枝町5-11です。",
    "term_secondary": "完整司機卡見對應行程／備案。",
    "term_pronounce": "瑠璃庵"
  },
  {
    "term_primary": "眼鏡橋へ。長崎市魚の町2です。",
    "term_secondary": "完整司機卡見對應行程／備案。",
    "term_pronounce": "眼鏡橋"
  },
  {
    "term_primary": "勝鹿 新地店（本店）へ。長崎市新地町12-10 ラハイナビル1Fです。",
    "term_secondary": "完整司機卡見對應行程／備案。",
    "term_pronounce": "勝鹿新地店"
  },
  {
    "term_primary": "らーめん柊 銅座本店へ。長崎市銅座町6-9 徳山銅座ビル1Fです。",
    "term_secondary": "完整司機卡見對應行程／備案。",
    "term_pronounce": "らーめん柊 銅座本店"
  }
]);
})();
// Nov25 t456: Fukuoka tips, inspirations, and official 住吉 facts.
(function () {
  const day3 = [
    evt({
      id: "evt_d3_to_tenjin", day: 3, time: "09:00", timeHint: "morning", type: "transport",
      title: "ソラリアステージ", cityId: "fukuoka",
      address: "Solaria Stage, 2-11-3 Tenjin",
      addressLocal: "〒810-0001 福岡市中央区天神2丁目11番3号 ソラリアステージ",
      tags: [],
      transport: taxi("中央ふ頭クルーズセンター", "ソラリアステージ", OP_JP),
      note: "09:00下船後叫的士去天神ソラリアステージ，約09:30到。魚吉在B2F，07:30已開門。"
    }),
    evt({
      id: "evt_d3_uoichi", day: 3, time: "09:30", timeHint: "morning", type: "food",
      title: "魚吉", cityId: "fukuoka", moodColor: "#6A5348",
      address: "Uoichi, Solaria Stage B2F, 2-11-3 Tenjin",
      addressLocal: "〒810-0001 福岡市中央区天神2丁目11番3号 ソラリアステージ B2F 博多海鮮食堂 魚吉",
      tags: [],
      openHours: "朝食 7:30–10:30；店 7:30–22:00",
      note: "09:30早餐（ソラリアステージB2F）。朝食7:30–10:30，店7:30–22:00。點魚生飯或明太子定食。後備見靈感欄：喜水丸、ドトール（同B2F）。"
    }),
    evt({
      id: "evt_d3_shopping", day: 3, time: "10:15", timeHint: "morning", type: "shop",
      title: "天神購物（大丸、ASICS）", cityId: "fukuoka", moodColor: "#5C5348",
      address: "Daimaru Fukuoka Tenjin, 1-4-1 Tenjin / ASICS Walking Fukuoka, 2-7-22 Tenjin",
      addressLocal: "〒810-8717 福岡市中央区天神1-4-1 大丸福岡天神店（本館＋東館エルガーラ）／〒810-0001 福岡市中央区天神2丁目7番22号 アシックスウォーキング 福岡",
      tags: ["購物"],
      openHours: "大丸本館B2–1F・東館B2–2F 10:00–20:00；本館2–8F・東館3–5F 10:00–19:00。ASICS 10:30–19:00",
      note: "10:15–12:30。大丸福岡天神店看エアウィーヴ（本館B2–1F・東館B2–2F 10:00–20:00；本館2–8F・東館3–5F 10:00–19:00）。アシックスウォーキング 福岡 10:30–19:00，可做腳型測量。"
    }),
    evt({
      id: "evt_d3_lunch", day: 3, time: "12:30", timeHint: "afternoon", type: "food",
      title: "元祖赤のれん 節ちゃんラーメン 天神本店", cityId: "fukuoka", moodColor: "#6A5348",
      address: "Setchan Ramen Tenjin Honten, 2-6-4 Daimyo, Plus Gate Tenjin 1F",
      addressLocal: "〒810-0041 福岡市中央区大名2-6-4 プラスゲート天神1F",
      tags: ["未訂・現場候位"],
      openHours: "11:00–21:00",
      price: "拉麵¥680",
      note: "12:30–13:30午餐，未訂位。11:00–21:00。點拉麵¥680。後備見靈感欄：一風堂 大名本店約5分、喜多方ラーメン坂内 天神大名店約9分、博多らーめん ShinShin 天神本店約7分。"
    }),
    evt({
      id: "evt_d3_kanetora", day: 3, time: "13:30", timeHint: "afternoon", type: "shop",
      title: "麺や兼虎 天神西通り店", cityId: "fukuoka", moodColor: "#5C5348",
      address: "Menya Kanetora Tenjin Nishidori, 1-14-45 Daimyo, Qiz Tenjin 1F",
      addressLocal: "〒810-0041 福岡市中央区大名1-14-45 Qiz Tenjin1F",
      tags: ["購物"],
      openHours: "平日 11:00–21:00",
      price: "お土産つけ麺 濃厚¥1,200、辛辛¥1,300",
      note: "13:30–13:45買お土産つけ麺（濃厚¥1,200、辛辛¥1,300）。要常溫版；冷凍版需雪櫃，帶返香港會溶。平日11:00–21:00。從節ちゃん約5分鐘。"
    }),
    evt({
      id: "evt_d3_nishikawa", day: 3, time: "13:45", timeHint: "afternoon", type: "shop",
      title: "マイまくら 福岡三越店", cityId: "fukuoka", moodColor: "#5C5348",
      address: "Maimakura, Fukuoka Mitsukoshi B1F shop 17, 2-1-1 Tenjin",
      addressLocal: "〒810-8544 福岡市中央区天神2-1-1 福岡三越 B1F（ラシック福岡天神）17號（生活雑貨区）マイまくら 福岡三越店",
      tags: ["購物"],
      phone: "092-406-8285",
      openHours: "10:00–20:00，年中無休",
      price: "度枕 ¥33,000起",
      note: "13:45–15:00。度枕約30分鐘，¥33,000起，計測免費，即日取走，可免稅。10:00–20:00，年中無休。後備見靈感欄：西川ネムリウム 福岡三越店（同層19/20號）。\n【位置】福岡三越在西鐵福岡（天神）站 Solaria Terminal 大樓，與車站直結。\n【由兼虎】向東平路約10分鐘，由1樓北面ライオン口（獅子像入口）入，扶手梯落 B1F，看舖位編號牌找17號；若滿或人多，沿路去19/20號ネムリウム。\n【由大丸】經渡辺通向西約5分鐘，或經天神地下街直入三越 B1F。"
    }),
    evt({
      id: "evt_d3_to_sumiyoshi", day: 3, time: "15:00", timeHint: "afternoon", type: "transport",
      title: "住吉酒販博多本店", cityId: "fukuoka",
      address: "Sumiyoshi Sake Shop Hakata Honten, 3-8-27 Sumiyoshi",
      addressLocal: "〒812-0018 福岡市博多区住吉3-8-27 住吉酒販 博多本店",
      tags: ["逐段叫車"],
      transport: taxi("福岡三越", "住吉酒販博多本店", OP_JP),
      note: "15:00從福岡三越叫的士去住吉酒販博多本店（住吉3-8-27），約15:15到。酒放最後買，不用拿著逛街。"
    }),
    evt({
      id: "evt_d3_sumiyoshi", day: 3, time: "15:15", timeHint: "afternoon", type: "sight",
      title: "住吉酒販博多本店", cityId: "fukuoka", moodColor: "#5C5348",
      address: "Sumiyoshi Sake Shop Hakata Honten, 3-8-27 Sumiyoshi",
      addressLocal: "〒812-0018 福岡市博多区住吉3-8-27",
      tags: ["購物"],
      phone: "092-281-3815",
      website: "https://sumiyoshi-sake.jp/",
      openHours: "9:30–18:30，日祝休",
      price: "店內購物",
      note: "15:15–16:00。看貨架與冷藏櫃，選九州地酒、全國銘酒、燒酎、葡萄酒或食品；走「個性的で澄んだ味わい」，店員可幫忙選。本店沒有角打ち／立飲或店內試飲（官網角打ち只列博多駅店、六本松421店）。9:30–18:30，日祝休。付款：現金、Visa／Mastercard／JCB／Diners／Amex、PayPay。"
    }),
    evt({
      id: "evt_d3_return", day: 3, time: "16:05", timeHint: "afternoon", type: "transport",
      title: "返回郵輪碼頭", cityId: "fukuoka", moodColor: "#6B5E52",
      address: "Chuo Wharf Cruise Center, 24-25 Okihamacho",
      addressLocal: "〒812-0031 福岡市博多区沖浜町24番25号 中央ふ頭クルーズセンター（待合棟／CIQ棟、平屋）",
      tags: [],
      transport: taxi("住吉酒販博多本店", "中央ふ頭クルーズセンター", OP_JP),
      note: "16:05從住吉酒販叫的士回中央ふ頭クルーズセンター（沖浜町24番25号），約16:30到碼頭。船時17:00前到碼頭。"
    })
  ];
  const D3_COORDS = {
    evt_d3_to_tenjin: [33.59042, 130.39890],
    evt_d3_uoichi: [33.59042, 130.39890],
    evt_d3_shopping: [33.58846, 130.40193],
    evt_d3_lunch: [33.58907, 130.39577],
    evt_d3_kanetora: [33.58763, 130.39693],
    evt_d3_nishikawa: [33.58793, 130.40089],
    evt_d3_to_sumiyoshi: [33.58531, 130.41177],
    evt_d3_sumiyoshi: [33.58531, 130.41177],
    evt_d3_return: [33.61105, 130.39769]
  };
  for (const e of day3) e.coords = D3_COORDS[e.id];
  const first = ITINERARY.items.findIndex(e => e.day === 3);
  if (first < 0) throw new Error("Missing day 3 items");
  const retained = ITINERARY.items.filter(e => e.day !== 3);
  retained.splice(first, 0, ...day3);
  ITINERARY.items = retained;

  const backups = [
    {
      id: "ins_d3_kisuimaru", title: "博多の名物料理 喜水丸", tag: "FOOD", type: "food",
      cityId: "fukuoka", nearEventId: "evt_d3_uoichi", status: "wishlist", source: "ai",
      note: "魚吉早餐備案，同ソラリアステージB2F。朝の刺身定食¥1,290。朝食7:30–10:30，店7:30–22:30。",
      address: "Kisuimaru, Solaria Stage B2F, 2-11-3 Tenjin",
      addressLocal: "〒810-0001 福岡市中央区天神2丁目11番3号 ソラリアステージ B2F 博多の名物料理 喜水丸",
      website: null, coords: [33.59042, 130.39890],
      phone: null, whatsapp: null, line: null, messenger: null,
      openHours: "朝食 7:30–10:30；店 7:30–22:30", price: "朝の刺身定食¥1,290", cost: null
    },
    {
      id: "ins_d3_doutor", title: "ドトールコーヒーショップ 天神ソラリアステージ店", tag: "FOOD", type: "food",
      cityId: "fukuoka", nearEventId: "evt_d3_uoichi", status: "wishlist", source: "ai",
      note: "魚吉早餐備案，同ソラリアステージB2F。モーニング¥500起。平日モーニング7:30–10:30，店7:30–22:00。",
      address: "Doutor Coffee, Solaria Stage B2F, 2-11-3 Tenjin",
      addressLocal: "〒810-0001 福岡市中央区天神2丁目11番3号 ソラリアステージ B2F ドトールコーヒーショップ 天神ソラリアステージ店",
      website: null, coords: [33.59042, 130.39890],
      phone: null, whatsapp: null, line: null, messenger: null,
      openHours: "平日モーニング 7:30–10:30；店 7:30–22:00", price: "モーニング¥500起", cost: null
    },
    {
      id: "ins_d3_ippudo", title: "一風堂 大名本店", tag: "FOOD", type: "food",
      cityId: "fukuoka", nearEventId: "evt_d3_lunch", status: "wishlist", source: "ai",
      note: "節ちゃん午餐備案，約步行5分鐘。11:00–22:00（L.O. 21:30）。",
      address: "Ippudo Daimyo Honten, 1-13-14 Daimyo",
      addressLocal: "〒810-0041 福岡市中央区大名1-13-14 一風堂 大名本店",
      website: null, coords: [33.58787, 130.39584],
      phone: null, whatsapp: null, line: null, messenger: null,
      openHours: "11:00–22:00（L.O. 21:30）", price: null, cost: null
    },
    {
      id: "ins_d3_bannai", title: "喜多方ラーメン坂内 天神大名店", tag: "FOOD", type: "food",
      cityId: "fukuoka", nearEventId: "evt_d3_lunch", status: "wishlist", source: "ai",
      note: "節ちゃん午餐備案，約步行9分鐘。11:00–21:00（L.O. 21:00）。",
      address: "Kitakata Ramen Bannai Tenjin Daimyo, 2-10-1 Daimyo, Chambord Daimyo A103",
      addressLocal: "〒810-0041 福岡市中央区大名二丁目10番1号 シャンボール大名A103号 喜多方ラーメン坂内 天神大名店",
      website: null, coords: [33.58976, 130.39311],
      phone: null, whatsapp: null, line: null, messenger: null,
      openHours: "11:00–21:00（L.O. 21:00）", price: null, cost: null
    },
    {
      id: "ins_d3_shinshin", title: "博多らーめん ShinShin 天神本店", tag: "FOOD", type: "food",
      cityId: "fukuoka", nearEventId: "evt_d3_lunch", status: "wishlist", source: "ai",
      note: "節ちゃん午餐備案，約步行7分鐘。11:00–翌3:00（L.O. 2:30）。",
      address: "Hakata Ramen ShinShin Tenjin Honten, 3-2-19 Tenjin 1F",
      addressLocal: "〒810-0001 福岡市中央区天神3-2-19 1F 博多らーめん ShinShin 天神本店",
      website: null, coords: [33.59277, 130.39685],
      phone: null, whatsapp: null, line: null, messenger: null,
      openHours: "11:00–翌3:00（L.O. 2:30）", price: null, cost: null
    },
    {
      id: "ins_d3_nemurium", title: "西川ネムリウム 福岡三越店", tag: "SHOP", type: "shop",
      cityId: "fukuoka", nearEventId: "evt_d3_nishikawa", status: "wishlist", source: "ai",
      note: "マイまくら備案，同福岡三越B1F，舖位19/20號，中間只隔18號 quatre saisons，行幾步就到。西川度身枕¥33,000／¥44,000，有計測機。10:00–20:00。",
      address: "Nishikawa Nemurium, Fukuoka Mitsukoshi B1F shop 19/20, 2-1-1 Tenjin",
      addressLocal: "〒810-8544 福岡市中央区天神2-1-1 福岡三越 B1F（ラシック福岡天神）19/20號 西川ネムリウム 福岡三越店",
      website: null, coords: [33.58793, 130.40089],
      phone: "092-725-7615", whatsapp: null, line: null, messenger: null,
      openHours: "10:00–20:00", price: "西川度身枕 ¥33,000／¥44,000", cost: null
    }
  ];
  for (let i = INSPIRATIONS.length - 1; i >= 0; i--) if (INSPIRATIONS[i].cityId === "fukuoka") INSPIRATIONS.splice(i, 1);
  INSPIRATIONS.push(...backups);

  const card = (id, text) => { SHORE_CARDS[id] = [text, ""]; };
  for (const id of Object.keys(SHORE_CARDS)) if (/^evt_d3_|^ins_d3_/.test(id)) delete SHORE_CARDS[id];
  card("evt_d3_to_tenjin", "行き先：ソラリアステージ（天神）\n住所：〒810-0001 福岡市中央区天神2丁目11番3号\n入口の近くで降ろしてください。");
  card("evt_d3_to_sumiyoshi", "行き先：住吉酒販 博多本店\n住所：〒812-0018 福岡市博多区住吉3-8-27\n店の前の道路側で、合法的に降ろしてください。");
  card("evt_d3_return", "行き先：中央ふ頭クルーズセンター\n住所：〒812-0031 福岡市博多区沖浜町24番25号\n入口の近くで降ろしてください。");

  const ix = SHORE_FIRST_LEGS.indexOf("evt_d3_to_yusen");
  if (ix >= 0) SHORE_FIRST_LEGS.splice(ix, 1);

  const fk = PHRASE_DATA.find(x => x.category === "福岡司機");
  if (!fk) throw new Error("Missing 福岡司機 phrases");
  fk.items = [
    { term_primary: "ソラリアステージ（天神）へ。天神2丁目11番3号です。", term_secondary: "完整司機卡見對應行程／備案。", term_pronounce: "ソラリアステージ" },
    { term_primary: "住吉酒販 博多本店へ。住吉3-8-27です。", term_secondary: "完整司機卡見對應行程／備案。", term_pronounce: "住吉酒販" },
    { term_primary: "中央ふ頭クルーズセンターへ。沖浜町24番25号です。17:00までに戻ります。", term_secondary: "完整司機卡見對應行程／備案。", term_pronounce: "回中央碼頭" }
  ];

  for (const e of [...ITINERARY.items.filter(x => x.day === 3), ...INSPIRATIONS.filter(x => x.cityId === "fukuoka")]) {
    e.source = e.source || "ai";
    for (const key of ["coords", "phone", "whatsapp", "line", "messenger", "openHours", "price", "website", "cost"]) {
      if (e[key] === undefined) e[key] = null;
    }
    if (e.transport) {
      e.transport.fromEventId = null;
      e.transport.toEventId = null;
      e.transport.liveApi = null;
      if (!Object.prototype.hasOwnProperty.call(e.transport, "stopCount")) e.transport.stopCount = null;
    }
  }

  const forbidden = /ココきよ|ぶたまぶし|しゃぶ禅|華味鳥|大濠公園|博多町家|ぜんざい|濱田屋|はかた天乃|牧のうどん|福福|鶏匠 松元/;
  for (const e of ITINERARY.items) {
    if (e.day === 3 && forbidden.test([e.title, e.note, e.address, e.addressLocal].join(" "))) {
      throw new Error("Stale Fukuoka venue remains: " + e.id);
    }
  }
  for (const e of INSPIRATIONS) {
    if (e.cityId === "fukuoka" && forbidden.test([e.title, e.note, e.address, e.addressLocal].join(" "))) {
      throw new Error("Stale Fukuoka backup remains: " + e.id);
    }
  }
})();


// Nov27 t473: Sandy's final Busan Nov 28 plan, additive — existing Busan details, backups and driver cards retained.
(function () {
  const byId = id => {
    const e = ITINERARY.items.find(x => x.id === id);
    if (!e) throw new Error("Missing Busan item " + id);
    return e;
  };
  const insById = id => {
    const e = INSPIRATIONS.find(x => x.id === id);
    if (!e) throw new Error("Missing Busan backup " + id);
    return e;
  };
  const PIER = "부산광역시 동구 충장대로 206 부산항 국제여객터미널";

  // 08:30 pier → Songdo Bay Station (first leg, chartered car).
  const toSongdo = byId("evt_d4_to_songdo");
  toSongdo.time = "08:30";
  toSongdo.tags = ["08:30上車", "已訂包車", "已付"];
  toSongdo.phone = "+82 10-8763-7130";
  toSongdo.coords = [35.117439, 129.0489621];
  toSongdo.note = [
    "08:30上車：釜山港國際客運碼頭 1/F Arrival Hall（北港），3成人／0行李。",
    "司機 Choi Dong-hwan 최동환（+82 010-8763-7130），車牌 부산 37바8772；LOYQU 包車（Klook SYT499423）。",
    "包車已付，過路費同停車費現場俾司機。延誤即聯絡供應商協調。自訂線已同意，纜車票不含。",
    "09:00到松島 Bay Station；司機之後喺 Amnam Park 停車場等。15:00開車返碼頭、16:00到。"
  ].join("\n");
  toSongdo.transport.from = "北港 1/F Arrival Hall";
  toSongdo.transport.operator = "LOYQU 包車（Klook SYT499423）；司機 최동환，車牌 부산 37바8772。已購 9 小時、1–4 人方案；實際 3 人、行李 0。";

  // 09:00 cable car, one way Bay Station → Amnam Park.
  const cable = byId("evt_d4_cable");
  cable.time = "09:00";
  cable.tags = ["現場買票", "單程"];
  cable.coords = [35.0763321, 129.0235399];
  cable.price = "Air ₩15,000／Crystal ₩19,000 一位（三人 ₩45,000／₩57,000）";
  cable.note = [
    "09:00 Bay Station → Amnam Park 單程，去到先買飛；Air ₩15,000／Crystal ₩19,000 一位（三人 ₩45,000／₩57,000）。司機喺 Amnam Park 停車場等。",
    "天氣多雲，最高13°C、體感6°C，西風26 km/h：著最暖嗰件褸，帶帽同手套。大風有機會停駛，朝早睇即時狀態。",
    "對岸1F廣場10–15分鐘，不走吊橋及上坡公園；排隊久先刪對岸停留，保留12:00午餐。包車不含票；09:00開門。",
    "看點與拍照：過海車廂內看釜山港與松島海面；到對岸1F廣場回望出發站海岸。 付款：現場纜車票刷卡未確認，備韓圓現金；網上付款不代表現場收卡。"
  ].join("\n");

  // Songdo seaside walk around the cable car, until about 11:45.
  const walk = evt({
    id: "evt_d4_songdo_walk", day: 4, time: "09:00", timeHint: "morning", type: "sight",
    title: "松島海邊散步", cityId: "busan", moodColor: "#3D5348",
    address: "Songdo Beach, Songdo-haebyeon-ro, Seo-gu, Busan",
    addressLocal: "부산광역시 서구 송도해변로 송도해수욕장 일대",
    tags: ["海邊平路"],
    openHours: null, price: "免費",
    note: "纜車前後喺松島海邊散步，約到11:45，之後上車去午餐。\n看點與拍照：近站海邊以海面作背景、移動纜車作主體取景，只走公共平路，不上沙灘。媽媽走30分鐘休5分鐘。"
  });
  walk.coords = [35.0763321, 129.0235399];

  // 11:45 car to lunch.
  const toLunch = byId("evt_d4_to_hotel");
  toLunch.note = "11:45上車（司機喺 Amnam Park 停車場等），包車送往속시원해대구탕 松島本店，12:00午餐。由 Bay Station 一帶車程約3分鐘。";
  toLunch.transport.from = "Amnam Park 停車場";
  toLunch.transport.durationMin = null;

  // 12:00 lunch, walk-in; Songdo Kitchen stays as booked backup.
  const lunch = byId("evt_d4_lunch");
  lunch.tags = ["午餐", "walk-in"];
  lunch.note = "12:00午餐，walk-in，預留60–75分鐘。松島本店1F，近門落客；禁煙待核。點清湯、不辣。後備見靈感欄：Songdo Kitchen（12:30已訂）。 付款：餐費刷卡未確認，備韓圓現金。";

  const sk = insById("ins_d4_songdo_kitchen");
  sk.note = "後備：Songdo Kitchen（Fairfield 酒店 22F）已訂 11/28 12:30 KST、3人，訂位名SANDY；12:20 到。有需要先用，唔用就打去 Visa 取消。22F海景：培根奶油麵、起司披薩或烤鰻飯；酒店全禁煙，正門乘電梯。 付款：餐費刷卡未確認，備韓圓現金。";

  // After lunch, on the way: Samjin Eomuk flagship (Yeongdo).
  const toSamjin = evt({
    id: "evt_d4_to_samjin", day: 4, time: "13:00", timeHint: "afternoon", type: "transport",
    title: "三津魚糕旗艦店", cityId: "busan",
    address: "Samjin Eomuk flagship store, Yeongdo-gu, Busan",
    addressLocal: "부산광역시 영도구 삼진어묵 영도 본점",
    tags: ["已訂包車"],
    transport: taxi("속시원해대구탕", "三津魚糕旗艦店（影島）", OP_KR),
    note: "午餐後順路，包車去影島三津魚糕旗艦店。"
  });
  const samjin = evt({
    id: "evt_d4_samjin", day: 4, time: "13:00", timeHint: "afternoon", type: "shop",
    title: "三津魚糕旗艦店（삼진어묵 영도 본점）", cityId: "busan", moodColor: "#3D5348",
    address: "Samjin Eomuk flagship store, Yeongdo-gu, Busan",
    addressLocal: "부산광역시 영도구 삼진어묵 영도 본점",
    tags: ["手信"],
    note: "午餐後順路買魚糕；店內有魚糕歷史館，可順道看。魚糕要雪藏，返船放入雪櫃。"
  });

  // 13:45 Busan Museum of Modern and Contemporary History.
  const toMuseum = evt({
    id: "evt_d4_to_museum", day: 4, time: "13:45", timeHint: "afternoon", type: "transport",
    title: "釜山近現代歷史館", cityId: "busan",
    address: "Busan Museum of Modern and Contemporary History, 112 Daecheong-ro",
    addressLocal: "부산광역시 중구 대청로 112 부산근현대역사관",
    tags: ["已訂包車"],
    transport: taxi("三津魚糕", "釜山近現代歷史館", OP_KR),
    note: "包車由三津魚糕去近現代歷史館，13:45到。"
  });
  const museum = evt({
    id: "evt_d4_museum", day: 4, time: "13:45", timeHint: "afternoon", type: "sight",
    title: "釜山近現代歷史館（부산근현대역사관）", cityId: "busan", moodColor: "#3D5348",
    address: "Busan Museum of Modern and Contemporary History, 112 Daecheong-ro",
    addressLocal: "부산광역시 중구 대청로 112 부산근현대역사관",
    tags: ["免費", "有電梯"],
    price: "免費",
    note: "13:45–14:30，約45分鐘。免費，有電梯。"
  });

  // 14:30 souvenirs 30 min; BIFF on the way (retains the BIFF leg and its card).
  const toMarket = byId("evt_d4_to_base");
  toMarket.time = "14:30";
  toMarket.title = "前往國際市場／BIFF廣場";
  toMarket.address = "Gukje Market, 32 Jung-gu-ro / BIFF Square, Gudeok-ro 58-1 area";
  toMarket.addressLocal = "부산광역시 중구 중구로 32 국제시장／구덕로 58-1 일대 BIFF광장";
  toMarket.coords = [35.1011643, 129.0281925];
  toMarket.note = "14:30去國際市場乾貨街／BIFF廣場買手信。由司機在구덕로大路側選合法上下客點，不駛入步行街。";
  toMarket.transport.from = "釜山近現代歷史館";
  toMarket.transport.to = "國際市場／BIFF廣場";
  toMarket.transport.durationMin = null;

  const market = byId("evt_d4_sea");
  market.time = "14:30";
  market.type = "shop";
  market.title = "買手信：國際市場乾貨街／BIFF廣場與劇場街";
  market.tags = ["手信", "平地短段"];
  market.address = "Gukje Market dried-goods street, 32 Jung-gu-ro / BIFF Square, Gudeok-ro 58-1 area";
  market.addressLocal = "부산광역시 중구 중구로 32 국제시장 건어물 거리／구덕로 58-1 일대 BIFF광장";
  market.coords = [35.1011643, 129.0281925];
  market.openHours = "國際市場週六09:00–20:00；BIFF戶外廣場常開，攤店通常10:00–22:00";
  market.price = "戶外廣場免費";
  market.note = [
    "14:30–15:00買手信30分鐘：國際市場乾貨街（紫菜、魷魚乾；唔好買蝦乾）或樂天光復店食品層（見靈感欄），BIFF廣場順路行過。",
    "看點與拍照：廣場地面電影手印近拍，再取劇場街外觀與街道縱深；沿原路回大路側接車，不爬龍頭山；媽媽走30分鐘休5分鐘。15:00上車。",
    "付款：全日以碌卡為主；BIFF街邊檔先要現金。廣場免費。"
  ].join("\n");

  // 15:00 back to pier, 16:00 arrive.
  const ret = byId("evt_d4_return");
  ret.coords = [35.117439, 129.0489621];
  ret.note = "15:00喺國際市場／BIFF大路側合法點上車開車返碼頭，16:00到北港。路況變差即更早集合離開。";
  ret.transport.from = "國際市場／BIFF廣場";

  // Insert new items in Busan order.
  const day4Order = ["evt_d4_to_songdo", "evt_d4_cable", "evt_d4_songdo_walk", "evt_d4_to_hotel", "evt_d4_lunch",
    "evt_d4_to_samjin", "evt_d4_samjin", "evt_d4_to_museum", "evt_d4_museum", "evt_d4_to_base", "evt_d4_sea", "evt_d4_return"];
  const added = { evt_d4_songdo_walk: walk, evt_d4_to_samjin: toSamjin, evt_d4_samjin: samjin, evt_d4_to_museum: toMuseum, evt_d4_museum: museum };
  const others = ITINERARY.items.filter(x => x.day !== 4);
  const d4 = day4Order.map(id => added[id] || byId(id));
  ITINERARY.items = [...others, ...d4];

  // New backup: Lotte Gwangbok food hall (Sandy's alternative for souvenirs).
  INSPIRATIONS.push({
    id: "ins_d4_lotte", title: "樂天百貨光復店 食品層", tag: "SHOP", type: "shop",
    cityId: "busan", nearEventId: "evt_d4_sea", status: "wishlist", source: "ai",
    note: "國際市場乾貨街以外嘅手信選擇：樂天光復店食品層買紫菜、魷魚乾（唔好買蝦乾）。",
    address: "Lotte Department Store Gwangbok, food floor",
    addressLocal: "롯데백화점 광복점 식품관",
    coords: null, phone: null, whatsapp: null, line: null, messenger: null,
    openHours: null, price: null, website: null
  });

  // Driver cards: destination, address, one drop-off request (Korean only).
  const card = (id, text) => { SHORE_CARDS[id] = [text, ""]; };
  card("evt_d4_b0", "예약된 픽업은 08:30입니다. 부산항 국제여객터미널 1층 입국장에서 만납니다. 성인 3명, 짐은 없습니다.");
  card("evt_d4_to_samjin", "목적지: 삼진어묵 영도 본점\n주소: 부산광역시 영도구\n입구 가까이에 내려 주세요.");
  card("evt_d4_to_museum", "목적지: 부산근현대역사관\n주소: 부산광역시 중구 대청로 112\n입구 가까이에 내려 주세요.");
  card("evt_d4_to_base", "목적지: 국제시장 건어물 거리·BIFF광장\n주소: 부산광역시 중구 중구로 32（국제시장）／구덕로 58-1 일대（BIFF광장）\n구덕로 큰길 쪽에서 합법적인 승하차 장소를 골라 주세요.");

  // 08:30 is an explicit pickup time: show it instead of the "放行" label.
  const ix = SHORE_FIRST_LEGS.indexOf("evt_d4_to_songdo");
  if (ix >= 0) SHORE_FIRST_LEGS.splice(ix, 1);

  const bk = PHRASE_DATA.find(x => x.category === "釜山包車");
  if (!bk) throw new Error("Missing 釜山包車 phrases");
  const b0 = bk.items.find(x => x.term_pronounce === "B0 會合");
  if (b0) b0.term_primary = "예약된 픽업은 08:30입니다. 부산항 국제여객터미널 1층 입국장에서 만납니다.";
  const retIx = bk.items.findIndex(x => x.term_pronounce === "B3 回北港");
  bk.items.splice(retIx < 0 ? bk.items.length : retIx, 0,
    { term_primary: "삼진어묵 영도 본점으로 가 주세요.", term_secondary: "完整卡請開本日對應行程或備案備註。", term_pronounce: "三津魚糕" },
    { term_primary: "부산근현대역사관으로 가 주세요. 대청로 112입니다.", term_secondary: "完整卡請開本日對應行程或備案備註。", term_pronounce: "近現代歷史館" },
    { term_primary: "국제시장 건어물 거리로 가 주세요. 중구로 32, 구덕로 큰길 쪽에서 내려 주세요.", term_secondary: "完整卡請開本日對應行程或備案備註。", term_pronounce: "國際市場" }
  );

  if (DAILY_EXTRAS && DAILY_EXTRAS["4"]) {
    const s = DAILY_EXTRAS["4"].shopping;
    for (const x of ["最暖外套、帽、手套", "過路費／停車費（現場俾司機）", "魚糕返船放雪櫃"]) if (!s.includes(x)) s.push(x);
  }

  for (const e of [...ITINERARY.items.filter(x => x.day === 4), ...INSPIRATIONS.filter(x => x.cityId === "busan")]) {
    e.source = e.source || "ai";
    for (const key of ["coords", "phone", "whatsapp", "line", "messenger", "openHours", "price", "website", "cost"]) {
      if (e[key] === undefined) e[key] = null;
    }
    if (e.transport) {
      e.transport.fromEventId = null;
      e.transport.toEventId = null;
      e.transport.liveApi = null;
      if (!Object.prototype.hasOwnProperty.call(e.transport, "stopCount")) e.transport.stopCount = null;
    }
  }
})();

// Nov27 t475: Sandy's revised Busan Nov 28 morning (whole morning in Songdo), additive — prior details, backups and driver cards retained.
(function () {
  const byId = id => {
    const e = ITINERARY.items.find(x => x.id === id);
    if (!e) throw new Error("Missing Busan item " + id);
    return e;
  };

  const toSongdo = byId("evt_d4_to_songdo");
  toSongdo.note += "\n明天風大，纜車、雲橋、雲端步道都可能因風暫封：邊樣開就先行邊樣，包車司機全程等埋，次序即場調。";

  const cable = byId("evt_d4_cable");
  cable.note = [
    "09:00纜車開門即上（避開週六人龍）：Bay Station → Amnam Park 單程約10分鐘，去到先買飛；Air ₩15,000／Crystal ₩19,000 一位（三人 ₩45,000／₩57,000）。司機喺 Amnam Park 停車場等。",
    "天氣多雲，最高13°C、體感6°C，西風26 km/h：著最暖嗰件褸，帶帽同手套。大風有機會停駛，朝早睇即時狀態。",
    "排隊久先刪對岸停留，保留12:00午餐。包車不含票；09:00開門。",
    "看點與拍照：過海車廂內看釜山港與松島海面；到對岸1F廣場回望出發站海岸。 付款：現場纜車票刷卡未確認，備韓圓現金；網上付款不代表現場收卡。"
  ].join("\n");

  const skypark = evt({
    id: "evt_d4_skypark", day: 4, time: "09:15", timeHint: "morning", type: "sight",
    title: "天空公園展望台（송도스카이파크 3층 스카이하버 전망대）", cityId: "busan", moodColor: "#3D5348",
    address: "Songdo Sky Park 3F observatory, 181 Amnamgongwon-ro, Seo-gu, Busan",
    addressLocal: "부산광역시 서구 암남공원로 181 송도스카이파크 3층 스카이하버 전망대",
    tags: ["影相位", "唔使點行"],
    note: "09:15–09:45。纜車站3樓，唔使點行就睇到成個松島海景，影相位。2F Ocean Terrace 可坐低看海。"
  });

  const bridge = evt({
    id: "evt_d4_bridge", day: 4, time: "09:45", timeHint: "morning", type: "sight",
    title: "龍宮雲橋（可選）（송도용궁구름다리）", cityId: "busan", moodColor: "#3D5348",
    address: "Songdo Yonggung Cloud Bridge, Amnam Park, Seo-gu, Busan",
    addressLocal: "부산광역시 서구 암남공원 송도용궁구름다리",
    tags: ["可選", "₩1,000"],
    openHours: "11月 09:00–17:00",
    price: "₩1,000 一位",
    note: "09:45–10:15，可選。127米海上吊橋。落橋之前有段落斜小路，橋身會晃，大風會封閉：到時睇媽媽狀態同風勢，唔行就喺公園海邊坐下，一樣好景。"
  });

  const toBeach = evt({
    id: "evt_d4_to_beach", day: 4, time: "10:15", timeHint: "morning", type: "transport",
    title: "松島海灘", cityId: "busan",
    address: "Songdo Beach, Songdo-haebyeon-ro, Seo-gu, Busan",
    addressLocal: "부산광역시 서구 송도해변로 송도해수욕장",
    tags: ["已訂包車"],
    transport: taxi("Amnam Park 停車場", "松島海灘", OP_KR),
    note: "10:15司機喺 Amnam Park 停車場（암남동 620-18 公營停車場）接，車返海灘嗰邊，約10分鐘。"
  });
  toBeach.transport.durationMin = 10;
  toBeach.coords = [35.0763321, 129.0235399];

  const walk = byId("evt_d4_songdo_walk");
  walk.time = "10:30";
  walk.title = "松島雲端步道＋海灘散步";
  walk.tags = ["全平路", "玻璃地板"];
  walk.note = "10:30–11:15。雲端步道365米全平路，有玻璃地板段，行到攰折返就得；沙灘旁都係平路。\n看點與拍照：近站海邊以海面作背景、移動纜車作主體取景，只走公共平路，不上沙灘。媽媽走30分鐘休5分鐘。";

  const cafe = evt({
    id: "evt_d4_cafe", day: 4, time: "11:15", timeHint: "morning", type: "rest",
    title: "海邊咖啡店休息／提早等位", cityId: "busan", moodColor: "#3D5348",
    address: "Songdo Beach area, Songdo-haebyeon-ro, Seo-gu, Busan",
    addressLocal: "부산광역시 서구 송도해변로 송도해수욕장 일대",
    tags: ["休息"],
    note: "11:15–12:00海邊搵間咖啡店坐下唞下，或者提早去속시원해대구탕（송도해변로 79 1F）等位。"
  });
  cafe.coords = [35.0763321, 129.0235399];

  const toLunch = byId("evt_d4_to_hotel");
  toLunch.note = "司機全程等埋；如需要，11:45由海灘一帶上車去속시원해대구탕 松島本店，12:00午餐。由 Bay Station 一帶車程約3分鐘。";
  toLunch.transport.from = "松島海灘";

  // Order Busan morning items; afternoon unchanged.
  const added = { evt_d4_skypark: skypark, evt_d4_bridge: bridge, evt_d4_to_beach: toBeach, evt_d4_cafe: cafe };
  const order = ["evt_d4_to_songdo", "evt_d4_cable", "evt_d4_skypark", "evt_d4_bridge", "evt_d4_to_beach", "evt_d4_songdo_walk", "evt_d4_cafe",
    "evt_d4_to_hotel", "evt_d4_lunch", "evt_d4_to_samjin", "evt_d4_samjin", "evt_d4_to_museum", "evt_d4_museum", "evt_d4_to_base", "evt_d4_sea", "evt_d4_return"];
  const others = ITINERARY.items.filter(x => x.day !== 4);
  ITINERARY.items = [...others, ...order.map(id => added[id] || byId(id))];

  SHORE_CARDS.evt_d4_to_beach = ["목적지: 송도해수욕장\n주소: 부산광역시 서구 송도해변로\n해변 쪽 합법적인 곳에 내려 주세요.", ""];

  const bk = PHRASE_DATA.find(x => x.category === "釜山包車");
  if (!bk) throw new Error("Missing 釜山包車 phrases");
  const at = bk.items.findIndex(x => x.term_pronounce === "松島鱈魚湯");
  bk.items.splice(at < 0 ? bk.items.length : at, 0,
    { term_primary: "암남공원 주차장에서 송도해수욕장으로 가 주세요.", term_secondary: "完整卡請開本日對應行程或備案備註。", term_pronounce: "松島海灘" });

  for (const e of ITINERARY.items.filter(x => x.day === 4)) {
    for (const key of ["coords", "phone", "whatsapp", "line", "messenger", "openHours", "price", "website", "cost"]) {
      if (e[key] === undefined) e[key] = null;
    }
    if (e.transport) {
      e.transport.fromEventId = null; e.transport.toEventId = null; e.transport.liveApi = null;
      if (!Object.prototype.hasOwnProperty.call(e.transport, "stopCount")) e.transport.stopCount = null;
    }
  }
})();

// Nov27 t476: researcher-verified Busan Nov 28 addresses/coords (busan_addresses_1128.md), additive only; times unchanged.
(function () {
  const item = id => {
    const e = ITINERARY.items.find(x => x.id === id) || INSPIRATIONS.find(x => x.id === id);
    if (!e) throw new Error("Missing Busan entry " + id);
    return e;
  };
  const add = (e, s) => { if (!(e.note || "").includes(s)) e.note = (e.note ? e.note + "\n" : "") + s; };

  const SAMJIN = "(우)49035 부산광역시 영도구 태종로99번길 36 삼진어묵 영도본점";
  for (const id of ["evt_d4_to_samjin", "evt_d4_samjin"]) {
    const e = item(id);
    e.address = "Samjin Eomuk Yeongdo main store, 36 Taejong-ro 99beon-gil, Yeongdo-gu, Busan";
    e.addressLocal = SAMJIN;
    e.coords = [35.0929, 129.04276];
  }
  const samjin = item("evt_d4_samjin");
  samjin.openHours = "09:00–19:00，연중무휴";
  add(samjin, "本店＝旗艦（영도본점），09:00–19:00；2F 체험관、3F 역사과학관。");

  const MUSEUM = "(우)48949 부산광역시 중구 대청로 112 부산근현대역사관 본관";
  for (const id of ["evt_d4_to_museum", "evt_d4_museum"]) {
    const e = item(id);
    e.addressLocal = MUSEUM;
    e.coords = [35.10272, 129.03216];
  }
  const museum = item("evt_d4_museum");
  museum.openHours = "09:00–18:00，入場截止17:00；週一休";
  add(museum, "去本館（대청로 112）；別館喺對面대청로 104。");

  const lotte = item("ins_d4_lotte");
  lotte.address = "Lotte Department Store Gwangbok, Main building B1 food hall, 2 Jungang-daero, Jung-gu, Busan";
  lotte.addressLocal = "(우)48944 부산광역시 중구 중앙대로 2 롯데백화점 광복점 본관 B1 식품관";
  lotte.coords = [35.09798, 129.03611];
  lotte.openHours = "週六 10:30–20:30";
  add(lotte, "食品館在本館B1（南浦站8號出口直通），別和아쿠아몰／롯데마트混淆。");

  const SKY = "(우)49276 부산광역시 서구 암남공원로 181 송도스카이파크";
  const sky = item("evt_d4_skypark");
  sky.addressLocal = "(우)49276 부산광역시 서구 암남공원로 181 송도스카이파크 3층 스카이하버 전망대";
  sky.coords = [35.06135, 129.0204];
  const b4 = item("ins_d4_b4");
  b4.addressLocal = SKY;
  b4.coords = [35.06135, 129.0204];

  const bridge = item("evt_d4_bridge");
  bridge.address = "Songdo Yonggung Cloud Bridge, 179-20 Amnamgongwon-ro, Seo-gu, Busan";
  bridge.addressLocal = "(우)49276 부산광역시 서구 암남공원로 179-20 송도용궁구름다리";
  bridge.coords = [35.06192, 129.02197];
  add(bridge, "喺스카이파크隔籬，約150米、行2–3分鐘。");

  const WALK = "부산광역시 서구 암남동 129-4 송도구름산책로（입구: 송도해수욕장 동쪽 끝, 송도베이스테이션 송도해변로 171 근처）";
  const walk = item("evt_d4_songdo_walk");
  walk.address = "Songdo Cloud Trail, 129-4 Amnam-dong, Seo-gu, Busan (entrance at east end of Songdo Beach)";
  walk.addressLocal = WALK;
  walk.coords = [35.07532, 129.02247];
  walk.openHours = "06:00–23:00，免費";
  add(walk, "入口喺海灘東端、近纜車 Bay Station，連거북섬（龜島）。");
  const toBeach = item("evt_d4_to_beach");
  toBeach.addressLocal = WALK;
  toBeach.coords = [35.07532, 129.02247];

  SHORE_CARDS.evt_d4_to_samjin = ["목적지: 삼진어묵 영도본점\n주소: 부산광역시 영도구 태종로99번길 36\n입구 가까이에 내려 주세요.", ""];
  SHORE_CARDS.evt_d4_to_museum = ["목적지: 부산근현대역사관 본관\n주소: 부산광역시 중구 대청로 112\n입구 가까이에 내려 주세요.", ""];
  SHORE_CARDS.evt_d4_to_beach = ["목적지: 송도구름산책로 입구（송도해수욕장 동쪽 끝）\n주소: 부산광역시 서구 암남동 129-4（송도해변로 171 송도베이스테이션 근처）\n해변 쪽 합법적인 곳에 내려 주세요.", ""];
  SHORE_CARDS.ins_d4_lotte = ["목적지: 롯데백화점 광복점 본관\n주소: 부산광역시 중구 중앙대로 2\n본관 입구 가까이에 내려 주세요.", ""];

  const bk = PHRASE_DATA.find(x => x.category === "釜山包車");
  if (!bk) throw new Error("Missing 釜山包車 phrases");
  const set = (k, v) => { const p = bk.items.find(x => x.term_pronounce === k); if (!p) throw new Error("Missing phrase " + k); p.term_primary = v; };
  set("三津魚糕", "삼진어묵 영도본점으로 가 주세요. 태종로99번길 36입니다.");
  set("近現代歷史館", "부산근현대역사관 본관으로 가 주세요. 대청로 112입니다.");
  set("松島海灘", "암남공원 주차장에서 송도구름산책로 입구（송도해수욕장 동쪽 끝）로 가 주세요.");
  if (!bk.items.some(x => x.term_pronounce === "樂天光復")) {
    const at = bk.items.findIndex(x => x.term_pronounce === "B3 回北港");
    bk.items.splice(at < 0 ? bk.items.length : at, 0,
      { term_primary: "롯데백화점 광복점 본관으로 가 주세요. 중앙대로 2입니다.", term_secondary: "完整卡請開本日對應行程或備案備註。", term_pronounce: "樂天光復" });
  }
})();
