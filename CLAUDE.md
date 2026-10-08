# twctchem.com 公司官網

Astro 靜態網站，push 到 GitHub `main` 後由 GitHub Actions（`.github/workflows/deploy.yml`）自動部署到 GitHub Pages。中英雙語：繁中在 `/`，英文在 `/en/`。風格是「暖色人文」。

## 指令
- `npm run dev`：開發伺服器，網址 http://localhost:4321
- `npm run build`：建置並輸出到 `dist/`，每次改完都要確認能成功建置
- `node scripts/generate-images.mjs`：重新產生 `og-image.png` 和 `apple-touch-icon.png`

## 架構慣例（新增頁面時務必遵守）
- **頁面拆成兩層**
  - `src/views/Xxx.astro` 放實際內容，接收 `lang` prop
  - `src/pages/xxx.astro` 和 `src/pages/en/xxx.astro` 只放一行 `<Xxx lang="zh-TW" />` 或 `<Xxx lang="en" />`
  - 範例：`src/views/Home.astro`，對應 `src/pages/index.astro` 和 `src/pages/en/index.astro`
- **文案**
  - 全部放在 `src/i18n/zh-TW.ts`，英文放在 `src/i18n/en.ts`
  - `en.ts` 的型別是 `Dictionary`，所以兩邊的 key 必須一致
  - 頁面裡用 `const t = useTranslations(lang)` 取用文案
- **連結**
  - 一律用 `localizePath(lang, '/xxx/')` 產生
  - `trailingSlash: 'always'`，所以路徑結尾一定要加 `/`
- **公司資訊**：名稱、統編、Email、Web3Forms key 只能放在 `src/site.config.ts`，不要寫死在頁面裡
- **產品資料**：放在 `src/data/products.ts`，`ProductCard` 和 `Footer` 都從這裡讀取
- **PDF-Tutor 介紹**：PDF-Tutor 就是 `C:\Users\yuana\Desktop\PDF作業講解器\pdf-tutor`。寫產品頁、FAQ、隱私權政策前，先讀它的 `README.md`（功能說明、隱私說明、限制），只寫實際存在的功能
- **教師後台** = PDF-Tutor 的教師頁面 `/teacher/`（`pdf-tutor/TEACHER-CENTER.md`：開設教室、批量建立學生帳號、批量啟用／停用、查看用量；入口刻意不公開，官網不要放連結）加上管理員用的「管理中心」（`pdf-tutor/ADMIN-CENTER.md`：建置題庫、全部帳號與用量、唯讀查閱）；**閱讀室與題庫**是 PDF-Tutor 的原文書閱讀室與考古題題庫（Beta）
- PDF-Tutor 網址：https://pdf-tutor.pdf-tutor.workers.dev/（寫在 products.ts 的 `url`）
- **版型**：每頁用 `BaseLayout`，傳入 `lang`、`title`、`description`
- **圖示**：在 `src/components/icons.ts` 新增 path，再用 `<Icon name="..." />` 顯示

## 設計系統（`src/styles/global.css`）
- **只用 CSS 變數**：`--bg`、`--bg-alt`、`--surface`、`--ink`、`--ink-muted`、`--primary`、`--accent`、`--accent-strong`、`--line` 等，不要自己寫新的色碼
- **陶土橘**：只用在小面積強調，文字要用 `--accent-strong`；主要按鈕一律用墨綠
- **現成的 class**
  - `.container`、`.section`、`.section--alt`、`.section--surface`
  - `.eyebrow`、`.lead`、`.btn btn--primary|secondary|light|sm`
  - `.link-arrow`、`.badge badge--live|beta|coming-soon`、`.tag`
- **區塊標題**：用 `<SectionHeading eyebrow title lead />`
- **頁尾 CTA**：用 `<CTABanner />`
- **進場動畫**：在元素上加 `data-reveal`，錯開時間用 `style="--reveal-delay: .08s"`
- **質感原則**：留白多、圓角 12–20px、細米灰框線、陰影要很淡，不用圖庫照片

## 進度
完成：設計系統、Logo、favicon、OG 圖、Header、Footer、首頁、`/products/`、`/about/`、`/faq/`、`/contact/`、`/privacy/`、`/terms/`、404（皆中英文）

補充：
- FAQ 資料在 `src/data/faq.ts`；法律頁條文在 `i18n` 的 `privacy` / `terms`，由 `LegalLayout.astro` 渲染，條文裡的 `{company}`、`{email}` 會自動代入，最後更新日期在 `site.config.ts` 的 `legalUpdated`
- 文案裡的 `{days}` 等佔位字串用 `fill()`（`i18n/utils.ts`）代入
- 聯絡表單是 `ContactForm.astro`，需要先把 `site.config.ts` 的 `web3formsKey` 換成真的 key，否則送出會顯示失敗
- 404 同時有 `src/pages/404.astro` 與 `src/pages/en/404.astro`（Vercel 只會用 `/404.html`，所以頁面上同時顯示兩種語言）

待完成：
1. 把 `site.config.ts` 的佔位字串（公司名稱、統編、成立年份、Web3Forms key）換成真實資料
2. 隱私權政策、服務條款（公司目前沒有法務，頁面已不標註「請法務確認」；上線前由負責人逐條對照實際營運情形確認）
3. 驗證：Lighthouse 分數、部署後實際送出一次表單
