# Spectrum 岸上｜Nov 25–28, 2026

3 位成人；本趟家庭限制優先於獨遊通用偏好。媽媽約走 30 分鐘平路／溫和下坡後休 5 分鐘，避上坡、長陡下坡及樓梯；美景與照片優先，不以長坐削薄行程。放行即盡早出發，保留午後遊覽；不排政治／戰爭敘事或神社參拜。

Nov 25 鹿兒島船時 07:00–19:00、家庭到マリンポートかごしま線 17:00；Nov 26 長崎船時 08:00–19:00、家庭到松が枝線 17:00；Nov 27 福岡船時 08:00–19:00、家庭到中央ふ頭クルーズセンター（沖浜町24-25）線 17:00；Nov 28 釜山船時 07:00–18:00、家庭到北港 부산항 국제여객터미널（충장대로206）線 16:00。均為到碼頭、非已登船；船方更早從早。

四天 Δ＝當地時－船時及 H＝當地到碼頭線均未填。當地日本／韓國為 UTC+9，不代表船鐘。未核前日表僅候補，司機卡不可直接出示。

日本每段另叫 taxi／Uber，非全天包車。釜山為 LOYQU 9 小時、1–4 人產品，實際 3 人／0 行李；原單 09:00 的時區、實際會合樓層待供應商核對，08:00 提早要求未確認；原單 1F Arrival Hall 不等於已核實際會合點，不擅改 2F。只走西側松島，不跨東區。

爸爸不吃蝦蟹；媽媽不吃牛；分開給忌口卡，核湯醬與配菜，不升格嚴重過敏或要求全店零風險。全席禁煙。

Sandy 已寄出黒豚ふくや本店、勝鹿新地店、華味鳥筑紫口店、Songdo Kitchen 四封詢問信；並非已訂位／已確認。Songdo Kitchen 保留，不自行換店。東區鱈魚湯仍在另查，未選。

免事前預約不等於免費或無排隊；瑠璃庵不保證免約看製作，本次不訂手作。使用現有條件備案及回港倒推線。天氣只代表鹿兒島點。匯率頁只換 JPY／HKD，不適用韓圓報價。

規劃依據是目前這份本地 v2：`cruise_shore_plan_review_v2.md`，加上 `facts.md` 頭部最新更正，以及 `reservation_rules_verified.md`（核對 Nov 15, 2026）。App 裡的時間軸是候補預覽，不是已接上船鐘的可照行時刻表。

## 這次實際改到的檔

- `config.js`：四日岸上候補。`time` 只作排序；畫面上的鐘用 `timeLabel`。常駐句在 `CONFIG.ui.planningNotice`。
- `index.html`：短語卡改為文字節點、長卡可捲動、靈感備註保留換行、主題色跟 `THEME_CONFIG`、短語標籤取消 0.6 透明度。另加兩項設定驅動的顯示：有 `planningNotice` 才顯示頂部提示；有 `timeLabel` 才取代時間軸上的 `time` 或「彈性」。沒有這兩個欄位的行程維持原樣。
- `schema.json`、`SCHEMA.md`：把上述兩個可選欄位寫進契約。
- `trips/spectrum-shore-2026-11.md`：本筆記。
- `versions/config/osaka-26-11-15-2158.js`：現行大阪 config 的位元組封存，內容不改。
- `preferences.md`：只併入 main 上 Nov 15, 2026 的 v8，本趟沒有另改長期偏好。

未合併 main，也未表示可以直接照表行。

## 仍未填

四天的 Δ 與 H、本航次 all-aboard、各港 CIQ 耗時。釜山原單 09:00 的時區、08:00 是否提早、1F 與常見 2F 的實際會合位置。若干合法下客點、坡度與椅子。瑠璃庵當日能否看製作。切子是否正在作業。町家實演會否臨時停。纜車天候、排隊與連續電梯。美術館咖啡與大濠咖啡的禁煙室。四間午餐的回覆、湯醬配菜與 3 人座位。松島 1F Photo Zone 與 3F 是否要持纜車票。

## 證據連結（不放進 App 備註）

- 切子見學：https://www.senganen.jp/how-to-walk/adjacent-facility/shimadzu-satsuma-kiriko-glassworks/ ；https://www.senganen.jp/satsuma-kiriko-factory-closed-days-in-november/ ；https://www.senganen.jp/faq/
- 仙巌園：https://www.senganen.jp/faq/
- 水族館：https://ioworld.jp/information ；https://ioworld.jp/faq
- 水之庭園：https://www.pref.nagasaki.jp/uploads/2025/11/1764121203-3.pdf ；https://nagasaki-p.com/mizube/ ；https://nagasaki-p.com/mizube/stone/
- 眼鏡橋遠看：https://www.at-nagasaki.jp/barrierfree/64024
- 美術館：https://www.nagasaki-museum.jp/visitor/info ；https://www.nagasaki-museum.jp/visitor/cafe
- 瑠璃庵：https://rurian.com/ ；https://www.rurian.com/blowglass.html
- 友泉亭：https://fukuoka-teien.com/yusentei/information/ ；https://fukuoka-teien.com/yusentei/service/
- 町家：https://hakatamachiya.com/access/ ；https://hakatamachiya.com/experience/ ；https://hakatamachiya.com/news/opening-hours/
- 山笠位置（不涉及售票）：https://yokanavi.com/spots/26906
- 大濠咖啡只作位置：https://www.royal-gardencafe.com/store-menu/ohoripark.html
- 松島纜車：https://busanaircruise.co.kr/cmm/faq.html?BD_CD=FAQ2&rank=4 ；https://busanaircruise.co.kr/info/time?rank=2 ；https://busanaircruise.co.kr/info/use ；https://busanaircruise.co.kr/about/floor?rank=4
- 午餐頁：https://r.gnavi.co.jp/f73zjf3v0000/lunch/ ；https://www.katsu-shika.com/tonkatsu ；https://www.hanamidori.net/menu-lunch/ ；https://www.songdokitchen.com/our-menus
