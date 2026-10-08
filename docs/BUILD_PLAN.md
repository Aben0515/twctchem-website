# twctchem.com 公司官網：建置計畫

## Context
使用者在 Google Workspace 買了 `twctchem.com`（信箱是 `sales@twctchem.com`），想自己寫一個公司官網，部署到 Vercel 後綁定這個網域。公司做教育產業，對象是學校、教師和學生，產品有 **PDF-Tutor**、**教師後端**，另外還有幾個建置中的產品。網站風格要專業、成熟又好看，一般公司官網該有的頁面都要有。

目前工作目錄 `C:\Users\yuana\Desktop\claude\twctchem` 是空的，要從頭建立。

### 已確認的決策
| 項目 | 決定 |
|---|---|
| 語言 | 中英雙語：預設繁中，網址在 `/`；英文網址在 `/en/` |
| 技術 | Astro（輸出純靜態網站）+ Vercel |
| 聯絡表單 | 用 Web3Forms 寄到 sales@twctchem.com，不需要後端 |
| 視覺 | 暖色人文：米白 #FAF7F2、墨綠 #1F4D3A、陶土橘 #D97757；字體 Noto Serif TC + Noto Sans TC |
| 產品 | 只做一個產品總覽頁 `/products`，用卡片呈現，建置中的產品標「Coming Soon」 |
| 頁面 | 首頁、關於我們、產品、FAQ、聯絡我們、隱私權政策、服務條款、404 |
| Logo | 由我們做一個簡單的 SVG 文字 Logo |
| 公司名稱 | **使用者稍後提供**，在那之前用 `site.config.ts` 裡的佔位字串 |

---

## 專案結構
```
twctchem/
├─ astro.config.mjs        # site: https://twctchem.com, i18n(defaultLocale zh-TW, prefixDefaultLocale:false), sitemap
├─ package.json
├─ src/
│  ├─ site.config.ts       # 公司名稱、統編、Email、電話、地址、Web3Forms key 集中在這裡（換名稱只改一處）
│  ├─ i18n/
│  │  ├─ zh-TW.ts / en.ts  # 所有介面字串與文案
│  │  └─ utils.ts          # t(lang, key)、getLangFromUrl、localizePath、切換語言用的對應路徑
│  ├─ data/products.ts     # 產品資料：{ id, name, tagline{zh,en}, features[], audience[], status:'live'|'beta'|'coming-soon', icon }
│  ├─ data/faq.ts          # FAQ 資料（雙語）
│  ├─ styles/global.css    # 設計 token（CSS 變數）、字體、基本排版
│  ├─ layouts/BaseLayout.astro   # <head> SEO/OG/hreflang/JSON-LD、Header、Footer、skip link
│  ├─ components/
│  │  Logo.astro, Header.astro (含手機漢堡選單), Footer.astro, LanguageSwitcher.astro,
│  │  Button.astro, SectionHeading.astro, ProductCard.astro, AudienceCard.astro,
│  │  CTABanner.astro, ContactForm.astro, FAQList.astro (<details>), LegalLayout.astro
│  ├─ views/               # 每個頁面的實際內容，接收 lang 參數，兩種語言共用
│  │  Home.astro, About.astro, Products.astro, FAQ.astro, Contact.astro, Privacy.astro, Terms.astro
│  └─ pages/
│     index.astro, about.astro, products.astro, faq.astro, contact.astro, privacy.astro, terms.astro, 404.astro
│     en/ (同名檔案，只是 <View lang="en" />)
└─ public/  favicon.svg, og-image.png (1200×630), robots.txt, apple-touch-icon.png
```
**原則：** `pages/` 和 `pages/en/` 底下都只放一行 wrapper，實際內容寫在 `views/`。這樣兩個語言共用同一份版面，不會重複寫兩遍。

## 設計系統（global.css token）
- **顏色**：`--bg #FAF7F2`、`--surface #FFFFFF`、`--ink #1C1C1A`、`--ink-muted #5B5A55`、`--primary #1F4D3A`、`--primary-hover #173A2C`、`--accent #D97757`、`--line #E7E1D6`
  - 陶土橘只用在小面積的強調（標籤、底線、icon），不拿來當主要按鈕的背景，避免和墨綠搶視覺重點。主要按鈕用墨綠。
  - 先只做淺色模式。暖色人文風格在淺色下最完整，深色模式不列入這次範圍。
- **字體**：標題用 Noto Serif TC，內文用 Noto Sans TC；英文頁標題用 Source Serif 4，內文用 Inter。全部從 Google Fonts 載入，加上 `display=swap` 和 preconnect。
- **排版**：字級刻度 14/16/18/22/28/36/48/60，內文行高 1.75（中文需要寬鬆一點），容器最大寬度 1200px，左右留白手機 16px、桌機 32px。
- **質感**：圓角 12px、陰影要很淡、線條用細的米灰色，留白要多。可以加淡淡的紙張紋理或幾何線條裝飾（用 SVG），不用圖庫照片，避免看起來很廉價。
- **動態**：區塊進場時輕微淡入（IntersectionObserver），並遵守 `prefers-reduced-motion`。

## 頁面內容
1. **首頁**
   - Hero：主標語、副標，兩個按鈕「了解產品」和「聯絡我們」，右側放抽象的書頁或 PDF 插圖（SVG）
   - 服務對象三欄：學校、教師、學生
   - 產品亮點：PDF-Tutor、教師後端，加一張「更多產品建置中」的卡片
   - 為什麼選擇我們：教學現場導向、資料安全與隱私、持續迭代
   - 最後一段 CTA 色帶
2. **關於我們**：使命、願景、核心價值（3 到 4 項）、公司資訊表（名稱、統編、成立時間、Email，先放佔位）、團隊區塊（先預留，可以隱藏）。
3. **產品**：產品卡片網格，每張卡片包含名稱、一句話介紹、3 到 4 個功能重點、適用對象標籤、狀態標章（上線中、Beta、Coming Soon），以及按鈕「洽詢 / 預約展示」。按下按鈕會連到 `/contact?product=xxx`，表單會自動選好對應產品。
4. **FAQ**：用 `<details>` 做的手風琴，分成「產品」「合作與採購」「資料與隱私」三類，大約 8 到 10 題範本。
5. **聯絡我們**
   - 表單欄位：姓名、Email、單位、身分（學校/教師/學生/其他）、感興趣的產品、主旨、訊息
   - 防垃圾訊息：加一個 honeypot 欄位
   - 前端檢查必填欄位和 Email 格式；送出時用 fetch 呼叫 Web3Forms，畫面上顯示成功或失敗；沒有 JS 時退回一般的 form POST
   - 旁邊列出 Email `sales@twctchem.com`，並寫明「1–2 個工作天內回覆」
6. **隱私權政策 / 服務條款**：依照台灣《個人資料保護法》寫範本，包含蒐集目的、資料類別、利用期間與方式、當事人權利、Cookie 說明。頁首標註「最後更新日期」，並提醒使用者正式上線前請自行或請法務確認。
7. **404**：雙語，附上回首頁的連結。

**共用區塊：**
- **Header**：Logo、導覽列、語言切換（切換時停在同一頁）。手機版用漢堡選單，捲動時 Header 固定在上方並出現細邊框。
- **Footer**：Logo 和一句簡介、網站地圖、產品連結、聯絡 Email、隱私權政策與服務條款、© 年份 公司名稱、統編。

## SEO 與品質
- 每頁有自己的 title 和 description、canonical、`hreflang`（zh-TW / en / x-default）、OG/Twitter card
- JSON-LD 的 `Organization` 資料（包含 email 和 logo）
- `@astrojs/sitemap` 自動產生 sitemap，加上 robots.txt
- 無障礙：語意化 HTML、skip link、看得到的 focus 樣式、色彩對比達 WCAG AA（墨綠配米白沒問題；陶土橘的文字只用在大字或裝飾上）
- 使用者還沒同意要追蹤，所以不加任何分析工具，也就不需要 Cookie 同意橫幅。之後要加的話，可以用 Vercel Web Analytics（不使用 Cookie）。

## 部署（實作完成後，需要使用者配合）
1. 使用者建立 GitHub repo，並在本機 `git init`、push 上去
2. 在 Vercel 用 GitHub 登入，Import 這個 repo（Framework 選 Astro，維持預設值即可）
3. 到 Vercel 的 Domains 新增 `twctchem.com` 和 `www.twctchem.com`
4. 到 DNS 管理處（Squarespace Domains，或 Google Workspace 指向的地方）**新增** Vercel 指定的 `A @` 和 `CNAME www` 記錄。**MX、SPF/DKIM/DMARC 這幾筆 TXT 一律不動**，否則 sales@ 會收不到信。
5. 使用者用 sales@ 到 web3forms.com 申請 Access Key，填進 `site.config.ts`。這個 key 本來就是設計成放在前端的，可以公開。

## 使用者需要提供的資料（沒提供時一律用明顯的佔位文字，並集中在 site.config.ts / i18n 檔）
- 公司中英文正式名稱、統編、地址或電話（可選）
- PDF-Tutor 和教師後端的一句話介紹與主要功能；建置中產品的名稱（可選）
- 想用的主標語。沒有的話，由我們先擬幾個版本給使用者挑

## 驗證方式
1. 執行 `npm install && npm run build`，確認沒有錯誤也沒有 404 連結
2. 執行 `npm run dev`，用內建瀏覽器逐頁檢查：
   - 桌機和手機（375px）的版面
   - 語言切換後是否停在同一頁
   - 手機選單是否正常
3. 聯絡表單：拿到 Web3Forms key 之後實際送出一次，確認 sales@ 有收到；也測試必填欄位的錯誤提示
4. 用 Lighthouse 檢查 Performance、Accessibility、SEO，目標各 ≥ 95
5. 部署後確認 https://twctchem.com 和 www 都能連上，並寄一封信到 sales@，確認收信沒有受影響

## 模型建議：Sonnet 可以做，美感關鍵處建議 Opus
- 這是標準的 Astro 靜態網站，架構清楚，規格也已經寫細了，**Sonnet 完全能完成程式實作**：元件、i18n、表單、SEO、各頁面都沒問題。
- 使用者特別在意「專業、成熟且兼顧美感」，而視覺細節（排版節奏、留白、插圖、中文文案的語氣）是 Opus 明顯比較強的地方。
- **建議分工：**
  - **Opus**：設計系統（global.css）、Logo、首頁、文案初稿。這幾項決定整體質感。
  - **Sonnet**：其餘頁面、FAQ、法律頁、SEO、部署設定。照著已經定好的設計系統套用即可。
- 如果想單純一點，全部交給 Sonnet 也可以，最後再請 Opus 做一次設計審查。
