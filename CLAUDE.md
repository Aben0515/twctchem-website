# twctchem.com 公司官網

Astro 靜態網站，push 到 GitHub `main` 後由 GitHub Actions（`.github/workflows/deploy.yml`）自動部署到 GitHub Pages。中英雙語：英文是預設語言，在 `/`；繁中在 `/zh/`。舊的 `/en/...` 網址由 `astro.config.mjs` 的 `redirects` 轉回根目錄。風格是「暖色人文」。

## 指令
- `npm run dev`：開發伺服器，網址 http://localhost:4321
- `npm run build`：建置並輸出到 `dist/`，每次改完都要確認能成功建置
- `node scripts/generate-images.mjs`：重新產生 `og-image.png` 和 `apple-touch-icon.png`

## 架構慣例（新增頁面時務必遵守）
- **頁面拆成兩層**
  - `src/views/Xxx.astro` 放實際內容，接收 `lang` prop
  - `src/pages/xxx.astro`（英文）和 `src/pages/zh/xxx.astro`（中文）只放一行 `<Xxx lang="en" />` 或 `<Xxx lang="zh-TW" />`
  - 範例：`src/views/Home.astro`，對應 `src/pages/index.astro` 和 `src/pages/zh/index.astro`
  - `astro.config.mjs` 的 `legacyEnglish` 只列改版前就有 `/en/xxx/` 網址的頁面，新頁面不用加
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
- **對比**：文字至少 4.5:1；`--ink-subtle` 在 `--bg-alt` 上不夠（4.15:1），淺米色底的小字改用 `--ink-muted`
- **字體**：Google Fonts 用 `preload` + `onload` 非阻擋載入（`BaseLayout.astro` 的 `fontsHref`），中文字體很大，不要改回一般的 stylesheet 連結
- **現成的 class**
  - `.container`、`.section`、`.section--alt`、`.section--surface`
  - `.eyebrow`、`.lead`、`.btn btn--primary|secondary|light|sm`
  - `.link-arrow`、`.badge badge--live|beta|coming-soon`、`.tag`
- **區塊標題**：用 `<SectionHeading eyebrow title lead />`
- **頁尾 CTA**：用 `<CTABanner />`
- **進場動畫**：在元素上加 `data-reveal`，錯開時間用 `style="--reveal-delay: .08s"`。**第一屏（hero）不要加**：它會讓內容在 JS 執行前保持透明，拖慢 LCP
- **質感原則**：留白多、圓角 12–20px、細米灰框線、陰影要很淡，不用圖庫照片

## 進度
完成：設計系統、Logo、favicon、OG 圖、Header、Footer、首頁、`/products/`、`/about/`、`/faq/`、`/contact/`、`/privacy/`、`/terms/`、404（皆中英文）

補充：
- Logo 圖形是「Mentor Bubble」（戴學士帽的對話框，框內是火花）。路徑在 `src/data/logo.ts`（`Logo.astro`、`HeroIntro.astro`、`HeroWatermark.astro` 共用），`public/favicon.svg`、`scripts/generate-images.mjs` 各有一份副本，改圖形要一起改；網站以外用的檔案（SVG／PNG、單色版、App 圖示、使用規範）在 `brand/cyber-tutor/`
- 首頁開場動畫是 `HeroIntro.astro`：大 logo 畫出後飛進頁首 logo。是否播放由 `Home.astro` 放進 `<head>`（BaseLayout 的 `head` slot）的 inline script 決定：每個工作階段只播一次（sessionStorage `ct-intro`），減少動態時不播；點擊、按鍵或滾動會跳過。開場期間 hero 文字不改 opacity，以免拖慢 LCP。hero 右側會轉向游標的大型線稿是 `HeroWatermark.astro`
- FAQ 資料在 `src/data/faq.ts`；法律頁條文在 `i18n` 的 `privacy` / `terms`，由 `LegalLayout.astro` 渲染，條文裡的 `{company}`、`{email}` 會自動代入，最後更新日期在 `site.config.ts` 的 `legalUpdated`
- 文案裡的 `{days}` 等佔位字串用 `fill()`（`i18n/utils.ts`）代入
- 聯絡表單是 `ContactForm.astro`，用 Web3Forms 寄到 sales@twctchem.com（key 在 `site.config.ts`）
- 404 同時有 `src/pages/404.astro`（英文）與 `src/pages/zh/404.astro`（GitHub Pages 只會用 `/404.html`，所以頁面上同時顯示兩種語言）

待完成：
1. 隱私權政策、服務條款（公司目前沒有法務，頁面已不標註「請法務確認」；上線前由負責人逐條對照實際營運情形確認）
2. 部署後實際送出一次聯絡表單，確認 sales@twctchem.com 收得到

已驗證（2026-10-09，Lighthouse 12.8）：無障礙 100、最佳做法 100、SEO 100（首頁、產品、FAQ、關於、聯絡）。效能：線上實測電腦版首次繪製約 0.7 秒。Lighthouse 模擬手機的分數偏低（約 55–70），主因是約 2MB 的中文網路字體；負責人決定不處理手機效能，不要為此更換字體
