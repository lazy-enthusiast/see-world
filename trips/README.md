# 單趟備註（trips）

規劃某一趟時，除了長期偏好 `preferences.md`，再讀這一趟的備註檔。

## 命名

`trips/<city>-<YYYY-MM>.md`

- 全小寫、只用連字號
- 例：`trips/osaka-2027-02.md`（大阪、2027 年 2 月）

## 放什麼

只記**這一趟**的決定與調整（去哪、改期、這次例外）。跨旅程都適用的習慣仍寫在 `preferences.md`。

## 優先順序

規劃該趟時兩份都要讀。若有衝突，**這一趟的 `trips/` 備註覆蓋 `preferences.md`**，而且只對這一趟有效，不改長期偏好。

App 不顯示這些備註。由 Grok Bot 經 Deploy Worker 寫入（直接覆蓋，不歸檔、不加 `buildTime`）。
