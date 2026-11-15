// buildTime: 2026-11-15T16:53:54.694Z
// ============================================================
// Spectrum 岸上 Nov 25–28, 2026（候補預覽，未部署）
// 本檔給現 main 的 index.html／schema.json 使用，不依賴 PR 才加的時間欄
// 自訂文案或頁首常駐橫額（Worker 不能改 UI）。部署時由 Worker 在檔首加 // buildTime:。
// 舊大阪 config 仍在 versions/config/；本檔不要當可照表執行。
// 行程以核准 v2 為準；預約句以 Nov 15, 2026 官方複核為準。
// 船時與 JST／KST 的差未核。午餐電郵已由本人寄出，不是已訂位。
// 座標不填景點 pin。天氣頁只代表鹿兒島這一點。
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
    homeTimeLabel: "香港"
  },
  startDate: "2026-11-25",
  duration: 4,
  travelers: {
    type: "family",
    count: 3,
    note: "候補預覽，未可照表行。3 位成人，含父母。爸爸不吃蝦／蟹；媽媽不吃牛。全席禁煙。媽媽約走 30 分鐘平路或溫和下坡後休 5 分鐘；避上坡與長陡下坡。"
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
const MAIL = "四間午餐詢問電郵已由本人寄出（黒豚ふくや本店、勝鹿新地店、博多華味鳥筑紫口店、Songdo Kitchen）。回覆前不是已訂位。本日不改店；要換店留待日後再跟。";

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
const CARD_K2_ZH = "本店，不是千日町店。希望酒店側入口，不走餐廳正門樓梯。先請職員確認電梯往返，不能用就改 K3，不要改去華蓮。未保證門前可停。未訂位。";

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
const CARD_N2_ZH = "2026 新址，不是舊籠町，也不是万屋町分店。午餐是建議。電郵已由本人寄出，回覆前不是已訂位。";

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

const CARD_F1 = `行き先：友泉亭公園
住所：福岡県福岡市城南区友泉亭1-46
駐車場・正門付近の合法的な降車場所へお願いします。母が約30分歩いた後に5分ほど休める、一般利用の椅子と、坂・階段を避ける経路を先に確認します。床に座ることを前提にはしません。帰りは別のタクシーを呼びます。
${JP_WALK}
${F_BACK}`;
const CARD_F1_ZH = "希望停車場或正門。一般散客高椅和到座位的坡階先核，不能把包場椅當必有，也不預設坐在地上。離開另叫車。";

const CARD_F2 = `行き先：博多華味鳥 博多駅筑紫口店
住所：福岡県福岡市博多区博多駅東1-13-31 駅東サンシティビル1F
「筑紫口店」です。「筑紫口店 別館」「祇園店」「博多駅前店」ではありません。入口に近い合法的な場所で降ろしてください。店内の段差と3名の席は到着時に確認します。
${JP_WALK}
${F_BACK}`;
const CARD_F2_ZH = "只去筑紫口店，不是別館、祇園店或駅前店。1F 不等於門內零高差。未訂位。電郵已由本人寄出。";

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
const CARD_F3_ZH = "只在友泉亭不適用、而且當日 H 容得下跨區時才考慮。不繞湖。禁煙室、落客和步程未核前不當確定飲食點。不要把友泉亭、町家、大濠串成一天。回港不要套用町家的短車程。";

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
const CARD_B2_ZH = "Fairfield 松島 113、22F Songdo Kitchen。包車短送正門，不要沿著沙灘走。約 12:00 當地午餐，14:00 最後點餐。3 人座未訂位。電郵已由本人寄出，回覆前不是已訂位。停駛時優先坐下來吃飯看海。離區 KST 空白未填不要用。";

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
const A_YUS = "友泉亭一般入園 200 円，3 人屬個人票、無需按 30 人團體申請，現場購票即可，不須為看庭先租和室；9:00–17:00，週一休，Nov 27（五）依規則應開，高椅與近入口座位仍須現場確認，不保證能坐高椅。";
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
const URL_YUS = "https://fukuoka-teien.com/yusentei/information/ ；https://fukuoka-teien.com/yusentei/service/";
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

function clockNote(port) {
  return [CLOCK, SHOW, WALK, port, "放行後就出門，不要在船上等咖啡開門。館還沒開，不假裝可以進去，先用已知的戶外點或對調順序。", MAIL].join("\n");
}
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
      id: "evt_d1_clock", day: 1, time: "08:40", timeHint: "morning", type: "note",
      title: "本日候補未可照表行｜回港須船時17:00到碼頭、當地時未填", cityId: "kagoshima", moodColor: "#6B5E52",
      tags: ["行前核對", "未可照表行", "當地時未填"],
      note: clockNote("Nov 25 鹿兒島。船時靠離港 07:00–19:00。家庭到碼頭線是船時 17:00，返回マリンポートかごしま（鹿児島県鹿児島市中央港新町1-10）。H（當地到碼頭時間）未填。最遲約在 H 前 95 分鐘開始叫回港車；人若還在仙巌園、不繞水族館，則改為 H 前 80 分鐘。這格 08:40 不是出港時刻。")
    }),
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
      id: "evt_d2_clock", day: 2, time: "08:40", timeHint: "morning", type: "note",
      title: "本日候補未可照表行｜回港須船時17:00到碼頭、當地時未填", cityId: "nagasaki", moodColor: "#6B5E52",
      tags: ["行前核對", "未可照表行", "當地時未填"],
      note: clockNote("Nov 26 長崎。船時靠離港 08:00–19:00。家庭到碼頭線是船時 17:00，返回長崎港松が枝国際ターミナル（松が枝町7番16号），不是別的渡輪碼頭。H 未填。人在美術館一帶，最遲約 H 前 65 分鐘叫車；人若還在眼鏡橋，用含配車 20–35 分鐘加至少 25 分鐘餘量倒推。這格 08:40 不是出港時刻。不要用哥拉巴園的長下坡補景。")
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
      id: "evt_d3_clock", day: 3, time: "08:40", timeHint: "morning", type: "note",
      title: "本日候補未可照表行｜回港須船時17:00到碼頭、當地時未填", cityId: "fukuoka", moodColor: "#6B5E52",
      tags: ["行前核對", "未可照表行", "當地時未填"],
      note: clockNote("Nov 27 福岡。船時靠離港 08:00–19:00。家庭到碼頭線是船時 17:00，返回中央ふ頭クルーズセンター（博多区沖浜町24番25号）。不要去沖浜町 14-1。實際靠泊位置仍待核，司機卡只用碼頭名稱與地址。H 未填。町家區最遲約 H 前 75 分鐘叫車。若改大濠，不要套這段短車程，改約 H 前 95 分鐘並看即時路況。福岡是否另辦日本出境未核。這格 08:40 不是出港時刻。")
    }),
    evt({
      id: "evt_d3_to_yusen", day: 3, time: "08:50", timeHint: "morning", type: "note",
      title: "放行後叫的士前往友泉亭｜09:00不是已核出門鐘", cityId: "fukuoka", moodColor: "#6B5E52",
      tags: ["放行後出發", "非已核出門鐘", "逐段叫車"],
      address: "Yusentei Park",
      addressLocal: "福岡県福岡市城南区友泉亭1-46 友泉亭公園",
      transport: taxi("中央碼頭", "友泉亭", OP_JP),
      note: [CLOCK, SHOW, "【候車】20–30 分鐘。【車程暫抓】25–35 分鐘。住宅區，不能假設門口有車。", "不要為了等 09:15 留在船上。", ride(""), CARD_F1, CARD_F1_ZH].join("\n")
    }),
    evt({
      id: "evt_d3_yusen", day: 3, time: "09:00", timeHint: "morning", type: "sight",
      title: "友泉亭", cityId: "fukuoka", moodColor: "#5C5348",
      tags: ["當地JST", "現場買票"],
      address: "Yusentei Park",
      addressLocal: "福岡県福岡市城南区友泉亭1-46 友泉亭公園",
      openHours: "當地 JST 09:00–17:00。週一休。Nov 27 週五依規則應開，不是當日保證。句中 17:00 是閉園，不是船時。",
      price: "一般入園 200 円。抹茶 700 円是另選。免事前預約 ≠ 免費 ≠ 一定有高椅。",
      website: "https://fukuoka-teien.com/yusentei/information/",
      note: [CLOCK, WALK, "看本館大廣間和入口附近能到的池泉。不登高台東屋，不繞全園。每 30 分鐘休 5 分鐘。", "一般抹茶和坐著看庭有記錄。高椅、短休座位和局部坡階現場核。不能坐地就不勉強。包場椅不是散客必有。", "【照片】池庭框景。", "離開前請園方代叫。巴士友泉亭站約 5 分鐘步行只作保底。", book(A_YUS, URL_YUS, "【區別】B：個人票現場買，不必按 30 人團體申請。不是免票。")].join("\n")
    }),
    evt({
      id: "evt_d3_to_hm", day: 3, time: "10:40", timeHint: "morning", type: "transport",
      title: "前往華味鳥筑紫口店", cityId: "fukuoka",
      tags: ["當地JST", "逐段叫車"],
      address: null,
      addressLocal: "福岡県福岡市城南区友泉亭1-46 友泉亭公園",
      transport: taxi("友泉亭", "華味鳥筑紫口店", OP_JP),
      note: [CLOCK, SHOW, "【候車】20–30 分鐘。【車程暫抓】25–35 分鐘。請園方代叫。", "11:30 前到就先問有沒有可以坐著等的位，不站著排。", ride(""), CARD_F2, CARD_F2_ZH].join("\n")
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
      id: "evt_d4_clock", day: 4, time: "08:40", timeHint: "morning", type: "note",
      title: "本日候補未可照表行｜回港須船時16:00到碼頭、當地時未填", cityId: "busan", moodColor: "#6B5E52",
      tags: ["行前核對", "未可照表行", "當地時未填", "非接車"],
      note: clockNote("Nov 28 釜山，只去西側松島。船時靠離港 07:00–18:00。家庭到碼頭線是船時 16:00，返回부산항 국제여객터미널／北港、충장대로 206。這格 08:40 不是接車時刻。08:00 只是未確認的希望，而且要看入境。原訂單寫 09:00，時間採用哪個時區及實際會合位置仍待供應商核對；另須對接船方放行與船鐘，不能用船時 07:00 靠泊保證趕到。H 未填。離松島是 H 前 75 分鐘已坐在車上，另留約 15 分鐘收尾；不把船時直接減成 KST，也不和 12:00 午餐相減。東區、膠囊、青沙浦都不去。匯率頁目前只換 JPY／HKD，不適用於釜山韓圓報價；韓圓費用另按實際報價核對。")
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
    id: "ins_d3_ohori", title: "友泉亭不適用才看大濠", tag: "RAINY", type: "sight",
    cityId: "fukuoka", nearEventId: "evt_d3_yusen", status: "wishlist", source: "ai",
    address: "Ohori Park, short lakeside",
    addressLocal: "福岡県福岡市中央区大濠公園",
    website: URL_OHORI,
    openHours: "咖啡週五當地 11:00 起。公園短段沒有開館時間。",
    price: "湖邊短段無需門票。咖啡是飲食，不標成免約見學。",
    note: "高椅或雨天使不上友泉亭時：可先於町家 10:00 後看建築、11:00 實演，再吃水炊；下午才是大濠室內湖景加店外短段。咖啡約 20 分鐘，不繞湖。\n若 H 容不下跨區，就留在町家和原區街景，不把三區串起來。大濠回港按 H 前 95 分鐘，不套町家車程。\n禁煙室、落客步程未核前，咖啡不當確定飲食點。\n" + book(A_OHORI, URL_OHORI) + "\n" + CARD_F3 + "\n" + CARD_F3_ZH
  },
  {
    id: "ins_d3_tired", title: "下午縮街景，留實演", tag: "TIRED", type: "note",
    cityId: "fukuoka", nearEventId: "evt_d3_street", status: "wishlist", source: "ai",
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
    { term_primary: "船内時刻と現地時刻の差を確認してから、空欄に現地の時刻を書いてください。空欄のままではこのカードは使えません。", term_secondary: "先填當地期限。空白不要用。船時不是當地鐘。", term_pronounce: "先填空白" }
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
    { term_primary: "友泉亭へ。平坦な経路と椅子を先に確認します。", term_secondary: "完整卡請開本日對應行程或備案備註；先核船鐘。", term_pronounce: "F1 友泉亭" },
    { term_primary: "華味鳥筑紫口店へ。別館ではありません。", term_secondary: "完整卡請開本日對應行程或備案備註；先核船鐘。", term_pronounce: "F2 筑紫口" },
    { term_primary: "博多町家へ。織物実演を見る予定です。", term_secondary: "完整卡請開本日對應行程或備案備註；先核船鐘。", term_pronounce: "F4 町家" },
    { term_primary: "大濠は条件付きの代替です。経路と禁煙を先に確認します。", term_secondary: "完整卡請開本日對應行程或備案備註；先核船鐘。", term_pronounce: "F3 大濠條件" },
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
  { category: "餐廳忌口", items: [
    { term_primary: "父は海老・蟹を食べません。 아버지는 새우·게를 먹지 않습니다.", term_secondary: "完整日韓忌口與湯醬配菜核對卡在本日餐廳忌口備註。", term_pronounce: "爸爸" },
    { term_primary: "母は牛肉を食べません。 어머니는 소고기를 먹지 않습니다.", term_secondary: "完整日韓忌口與湯醬配菜核對卡在本日餐廳忌口備註。", term_pronounce: "媽媽" },
    { term_primary: "全席禁煙・椅子席を希望します。 금연·의자석을 원합니다.", term_secondary: "完整日韓忌口與湯醬配菜核對卡在本日餐廳忌口備註。", term_pronounce: "禁煙椅子" }
  ]}
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
const SHORE_CLOCK_NOTES = {};
for (const e of ITINERARY.items) if (/_clock$/.test(e.id)) SHORE_CLOCK_NOTES[e.day] = e.note;
ITINERARY.items = ITINERARY.items.filter(e => !/_(clock|diet)$/.test(e.id) && e.id !== 'evt_d4_b0');
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
const SHORE_MODAL_COPY = {"evt_d1_garden": ["09:00–17:00；最終入園16:30（JST）", "成人¥1,600（含御殿、尚古集成館）", "免預約，可現場買票。\n沿無障礙藍線分段看庭園，避開階梯及介助坡。約走30分鐘休5分鐘。\n拍照：以庭園作前景拍櫻島、錦江灣。"], "evt_d1_kiriko": ["09:00–16:30；休息10:00–10:15、12:00–13:00、15:00–15:15（JST）", "見學免費", "免預約，參觀玻璃製作。維修停工時略過。\n拍照前先問職員。雨天備案若上午改水族館，可於13:00後前來。"], "evt_d1_fukuya": ["午市11:30起（JST）", "炸豬排約¥2,600–2,900；生姜燒定食¥1,300", "建議豬排或生姜燒；避開蝦拼盤及肉種不明的菜式。\n由酒店側電梯上2F，請職員協助往返；無法使用便改備選。\n全席禁煙。訂位詢問已寄，待確認。"], "evt_d1_aq": ["09:30–18:00；最終入館17:00（JST）", "成人¥2,000", "免預約，現場購票。\n看平層展示，再乘電梯到5F看錦江灣、櫻島。\n拍照：鏡頭靠近玻璃，減少反光。"], "evt_d2_park": ["24小時", "免費", "免預約。沿水之庭園海港硬鋪步道散步，約30分鐘在長椅休5分鐘。\n拍照：水景、海港與船隻；不走上坡。"], "evt_d2_rurian": ["09:30–17:00；週二休（JST）", null, "短逛玻璃店。先問當日能否觀看製作；不能便略過。\n本次不訂付費手作。"], "evt_d2_katsu": ["11:30–15:00；不定休（JST）", "豬排／雞排約¥1,000–1,600", "建議豬排或雞排，湯、醬與配菜用忌口卡確認。\n新店址：新地町12-10，1F。全席禁煙。\n訂位詢問已寄，待確認。"], "evt_d2_megane": ["全日開放", "免費", "免預約。平地遠拍眼鏡橋及河面倒影，不下河床或走階梯。"], "evt_d2_museum": ["咖啡11:00–17:00（JST）", "公共空間免費；咖啡另付", "免預約，不看展，拍運河、回廊及建築。\n咖啡只在確認禁煙後短坐。"], "evt_d3_yusen": ["09:00–17:00；週一休（JST）", "成人¥200；抹茶另加¥700", "免預約，現場買票。看平緩庭園與池景，不登高台。\n需要椅子先問職員；若只有地席或路線不合適，改大濠備案。"], "evt_d3_hm": ["11:30–15:00；最後點餐14:00（JST）", "水炊御膳¥1,980", "選水炊御膳，柚胡椒不加；配菜及湯醬用忌口卡確認。\n全席禁煙。訂位詢問已寄，待確認。"], "evt_d3_machiya": ["10:00–18:00；最終入館17:30；織實演13:30–15:00（JST）", "入館¥200；觀看織實演免費", "入館及觀看實演均免預約。實演若取消便改逛町家。\n拍照：先問織機操作能否拍攝，再拍町家街景。"], "evt_d3_street": ["全日開放", "免費", "免預約。沿冷泉町拍町家街景、山笠外觀，不進神社參拜。"], "evt_d4_cable": ["09:00–21:00；售票至20:30（KST）", "現場購票", "免預約。網票最早翌日使用，當天請現場買票。\n搭往返纜車，對岸只看1F廣場；不走吊橋或上坡公園。\n天候停駛便用雨天備案；排隊太久先刪對岸停留。"], "evt_d4_lunch": ["12:00–14:30；最後點餐14:00（KST）", null, "22F海景午餐，可選培根奶油麵、起司披薩或烤鰻飯。\n湯醬配菜用忌口卡確認。酒店全面禁煙，正門下車乘電梯。\n訂位詢問已寄，待確認。"], "evt_d4_sea": ["全日開放", "海邊公共路段免費", "走出發站附近海邊平路，不上沙灘。\n拍照：岸邊拍纜車過海。站內1F照片區／3F露台按現場票務標示進入。\n回港截止前90分鐘收尾，前75分鐘已上車離區。"]};
const SHORE_RIDE_COPY = {"evt_d1_to_garden": "通關放行後叫車；候車約30分鐘，車程約30–45分鐘。仙巌園09:00開門。", "evt_d1_to_fukuya": "離開前請受付代叫的士。候車約20–30分鐘，車程約25–40分鐘。", "evt_d1_to_aq": "另叫的士，候車約15–25分鐘，車程約10–20分鐘。", "evt_d1_return": "船時17:00前到海洋港碼頭；當地截止時間待船方核實。\n最遲於截止前95分鐘叫車；候車約20–30分鐘，車程約25–40分鐘。", "evt_d2_to_park": "通關放行後叫車，候車約15–25分鐘，車程約5–15分鐘。", "evt_d2_to_rurian": "另叫的士前往瑠璃庵；若不看製作可略過，直接到午餐。", "evt_d2_to_katsu": "另叫的士到勝鹿新地店：新地町12-10，1F。", "evt_d2_to_megane": "午餐後另叫的士到眼鏡橋，選平地落客。", "evt_d2_to_museum": "另叫的士到長崎縣美術館；於近入口處落客。", "evt_d2_return": "船時17:00前到松が枝碼頭；當地截止時間待船方核實。\n在美術館一帶，最遲於截止前65分鐘叫回港車。", "evt_d3_to_yusen": "通關放行後叫車；友泉亭09:00開門。", "evt_d3_to_hm": "另叫的士到華味鳥博多駅筑紫口店，非別館或祇園店。", "evt_d3_to_machiya": "午餐後另叫的士到博多町家，銜接13:30–15:00織實演。", "evt_d3_return": "船時17:00前到中央ふ頭郵輪中心（沖浜町24-25）；當地截止時間待船方核實。\n最遲於截止前75分鐘叫車。", "evt_d4_to_songdo": "LOYQU包車接送。原單09:00，08:00提早接車、時區及會合樓層待確認。\n原單會合地點：北港國際客運站1F Arrival Hall；先與司機確認，不自行改樓層。", "evt_d4_to_hotel": "同一輛包車短送Fairfield松島酒店，正門下車，乘電梯上22F。", "evt_d4_to_base": "午餐後由同一輛包車送回松島出發站附近拍照。", "evt_d4_return": "船時16:00前到北港國際客運站（충장대로206）；當地截止時間待船方核實。\n截止前90分鐘收尾，前75分鐘已上車離區；車程約30–50分鐘。"};
for (const e of ITINERARY.items) {
 if (SHORE_MODAL_COPY[e.id]) [e.openHours,e.price,e.note] = SHORE_MODAL_COPY[e.id];
 if (SHORE_RIDE_COPY[e.id]) e.note = SHORE_RIDE_COPY[e.id];
}

// Place each port-to-first-stop transfer before sightseeing, without a made-up clock.
const SHORE_FIRST_LEGS = ['evt_d1_to_garden','evt_d2_to_park','evt_d3_to_yusen','evt_d4_to_songdo'];
if (typeof window !== 'undefined') window.addEventListener('load', function () {
  const getOriginal = window.getItemsByDay;
  window.getItemsByDay = function(day) {
    return getOriginal(day).sort((a,b) => Number(SHORE_FIRST_LEGS.includes(b.id)) - Number(SHORE_FIRST_LEGS.includes(a.id)));
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
      if (time && SHORE_FIRST_LEGS.includes(item.id)) time.textContent='放行後';
      if (time && /_return$/.test(item.id)) time.textContent=item.id==='evt_d4_return'?'船時15:00出發｜16:00前到':'船時17:00前到';
   if (time && item.id==='evt_d4_to_base') time.textContent='船時13:45出發';
   if (time && ['evt_d1_return','evt_d2_return'].includes(item.id)) time.textContent='JST候補'+item.time+'出發｜船時17:00前到';
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
ins_d3_ohori:'友泉亭路線或座椅不適合時，改大濠Royal Garden Cafe湖景桌椅，不繞湖。',
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
 if(e.id==='ins_d2_pave')e.note='自助午餐備選；酒店正門下車，乘電梯上2F。逐道核對牛肉、蝦蟹及湯醬。';
 if(e.id==='ins_d3_ohori')e.note='湖景咖啡與桌椅休息，正門附近下車，不繞湖。';
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
 song.note='22F海景午餐備案：培根奶油麵、起司披薩或烤鰻飯。酒店全物業禁煙；正門下車乘電梯。詢問已寄，未訂位，不取消原詢問。';
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
   note:'看電影手印、星光路面與相連劇場街，再原路返回。走約30分鐘休5分鐘，另留10分鐘集合；船時15:00已上車。拍照：近距拍手印與劇場街招牌。不爬龍頭山、不串整個市場；人潮或交通延誤便縮短。'
 });
 patch('evt_d4_return',{
   time:'15:00',tags:['船時','已訂包車'],address:'Busan Port International Passenger Terminal',addressLocal:'부산광역시 동구 충장대로 206',
   note:'船時15:00已在BIFF大路側合法點上車，預留60分鐘回北港；16:00前到碼頭。與司機先對船鐘，路況變差即更早集合離開。',
   transport:{...byId('evt_d4_return').transport,from:'BIFF廣場',to:'北港國際客運站',fromEventId:'evt_d4_sea',toEventId:null,durationMin:60}
 });
 shortCard('evt_d4_return','목적지: 부산항 국제여객터미널（북항）\n주소: 부산광역시 동구 충장대로 206\n터미널 입구 가까운 합법적인 곳에 내려 주세요.');
 for(const e of INSPIRATIONS){
   if(e.id==='ins_d4_rain') e.note='纜車停駛或大雨時，保留松島午餐；室內用餐可改Songdo Kitchen備案，雨勢大刪BIFF。船時16:00前回北港。';
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
 lunch.note='12:00午餐，預留60–75分鐘用餐。松島本店1F，包車近門合法落客。禁煙標示待核；點餐確認不辣、湯底無牛及蝦蟹。';
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
   note:'通關放行後到terminal前的士待機場配車；行車規劃35–50分鐘，候車另留。目標09:45入園，不把GO即叫或預約當保證。',
   transport:{...find('evt_d1_to_garden').transport,durationMin:null}
 });
 set('evt_d1_garden',{
   time:'09:45',tags:['當地JST候補','上午慢遊'],
   note:'09:45–12:00留給庭園、尚古集成館、切子與茶寮休息；不加御殿。先庭園與尚古，約11:30轉切子子項，不重複計時。約連續走30分鐘休5分鐘。拍照：庭園前景、櫻島及錦江灣。'
 });
 set('evt_d1_kiriko',{
   time:'11:30',tags:['當地JST候補','上午子項','免費免約'],
   note:'上午園區時段內約11:30–11:50看玻璃製作，預留離園轉車，12:00前結束。工場12:00–13:00休息；維修停工時略過，拍照先問職員。'
 });
 set('evt_d1_to_fukuya',{
   time:'12:00',timeHint:'afternoon',tags:['當地JST候補','逐段叫車'],
   note:'目標12:00離園上車，離園前請受付提早代叫。往ふくや預留25–40分鐘轉移，含配車、交通與酒店電梯；目標12:30午餐，較慢可至12:40，不壓縮園區及用餐。',
   transport:{...find('evt_d1_to_fukuya').transport,durationMin:null}
 });
 set('evt_d1_fukuya',{
   time:'12:30',tags:['當地JST候補','待訂位確認'],
   note:'目標12:30–13:45午餐；原詢問12:45，新希望12:30尚未對外更改。WhatsApp身份驗證已完成，仍待訂位確認。建議豬排或生姜燒；湯醬配菜用忌口卡核對。酒店側電梯上2F，請職員協助往返。全席禁煙。延誤先刪天文館，再縮城山，不壓縮午餐。'
 });
 const tenmonkan=evt({id:'evt_d1_tenmonkan',day:1,time:'13:45',timeHint:'afternoon',type:'sight',title:'天文館有蓋拱廊',cityId:'kagoshima',tags:['當地JST候補','延誤先刪'],address:'Tenmonkan covered arcade',addressLocal:'鹿児島市 天文館',note:'午餐後13:45–14:15在平地有蓋拱廊散步購物，約走30分鐘休5分鐘。延誤先刪本段，不推遲回港。'});
 const index=ITINERARY.items.findIndex(e=>e.id==='evt_d1_to_waterfront');ITINERARY.items.splice(index,0,tenmonkan);
 set('evt_d1_to_waterfront',{
   id:'evt_d1_to_shiroyama',title:'前往城山展望台停車場',time:'14:15',tags:['當地JST候補','逐段叫車'],address:'Shiroyama Observatory parking area',addressLocal:'鹿児島市城山町 城山展望台駐車場',
   note:'天文館乘的士往城山停車場，14:30到為目標，車程及候車待配車核對。上車時向司機商量付費等候，15:15再直送海洋港；須司機接受，不是已訂等候車。',
   transport:{...find('evt_d1_to_waterfront').transport,from:'天文館',to:'城山展望台停車場',fromEventId:'evt_d1_tenmonkan',toEventId:'evt_d1_shiroyama',durationMin:null}
 });
 set('evt_d1_waterfront',{
   id:'evt_d1_shiroyama',title:'城山展望台',time:'14:30',tags:['當地JST候補','15:15起回程'],address:'Shiroyama Observatory',addressLocal:'鹿児島市城山町',
   note:'14:30–15:15含停車場往返與看景拍照。停車場至展望位沿途有坡，官方局部8–10%，不是全平；不走2公里登山步道。拍櫻島、錦江灣與市景。延誤先刪天文館，再縮本段，不延後回港。'
 });
 card('evt_d1_to_shiroyama','行き先：城山展望台駐車場\n住所：鹿児島市城山町\n登山道の入口ではなく、展望台側の駐車場で降ろしてください。');
 delete SHORE_CARDS.evt_d1_to_waterfront;
 set('evt_d1_return',{
   time:'15:15',timeHint:'afternoon',tags:['當地JST候補','船時17:00到碼頭'],
   note:'15:15 JST候補從城山起程；建議去程司機同意付費等候後直送マリンポート，未同意便預先安排另叫車，不假設現場有車。回程行車留35–50分鐘，約15:50–16:05 JST到港，等車另留；17:00船時到碼頭不放寬，對鐘後必要時提早離開。',
   transport:{...find('evt_d1_return').transport,from:'城山展望台停車場',fromEventId:'evt_d1_shiroyama',durationMin:null}
 });
 for(const e of INSPIRATIONS){
   if(e.id==='ins_d1_k3'){
     Object.assign(e,{title:'御膳所 桜華亭',address:'Ohkatei, Sengan-en 2F',addressLocal:'鹿児島市吉野町9700-1 仙巌園内2F',phone:null,website:null,openHours:'11:00–16:00；最後點餐15:30（JST）',price:'黑豚鍋御膳¥3,000／重疊豬排御膳¥2,400',note:'園內午餐備案；電梯上2F，有普通桌椅。3人一般席現場候位、不接受普通預約；菊花套餐含蝦不選，湯醬與小菜用忌口卡確認。'});
   }
   if(e.id==='ins_d1_tired')e.note='保留仙巌園與午餐；午後先刪天文館散步，再縮城山，不壓縮上午及用餐。';
   if(e.id==='ins_d1_traffic')e.note='離園前請受付代叫的士；城山去程先商量付費等候再直返港。延誤先刪天文館，再縮城山；船時17:00前到海洋港。';
 }
 card('evt_d1_to_fukuya','行き先：黒豚ふくや本店\n住所：鹿児島市東千石町1-32 レム鹿児島2F\nホテル入口側で降ろしてください。');
 card('ins_d1_k3','行き先：仙巌園内 御膳所 桜華亭\n住所：鹿児島市吉野町9700-1 仙巌園内2階\nエレベーターに近い合法的な場所で降ろしてください。');
 INSPIRATIONS.push({id:'ins_d1_waterfront',title:'本港海濱公園',tag:INSPIRATIONS.find(e=>e.id==='ins_d1_tired').tag,type:'sight',cityId:'kagoshima',nearEventId:'evt_d1_shiroyama',status:'wishlist',source:'ai',address:'Waterfront Park, Honkoshinmachi',addressLocal:'鹿児島市本港新町 ウォーターフロントパーク',note:'午後海濱備案，不與城山疊加；看櫻島、錦江灣及港口船隻，約走30分鐘休5分鐘。鄰接縣營停車場側合法上下客，仍須按船時17:00到港線倒推回程。'});
 card('ins_d1_waterfront','行き先：ウォーターフロントパーク\n住所：鹿児島市本港新町\n隣接する県営駐車場側の合法的な場所で降ろしてください。');
 const g=PHRASE_DATA.find(x=>x.category==='鹿兒島司機');
 if(g){g.items=g.items.filter(x=>!/黒かつ亭|黒べぇ|ウォーターフロントパーク/.test(x.term_primary||''));g.items.push({term_primary:'城山展望台駐車場へ。鹿児島市城山町です。',term_secondary:'展望台側停車場下車，不走山腳登山步道。',term_pronounce:'城山展望台'},{term_primary:'仙巌園内の御膳所 桜華亭へ。吉野町9700-1です。',term_secondary:'園內2F午餐備案，用電梯。',term_pronounce:'桜華亭備案'});}
})();
