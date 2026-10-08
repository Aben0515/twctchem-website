import type { Localized } from '../i18n/utils';
import type { IconName } from '../components/icons';

export type ProductStatus = 'live' | 'beta' | 'coming-soon';
export type AudienceKey = 'schools' | 'teachers' | 'students';

export interface Product {
  id: string;
  name: Localized<string>;
  /** 名稱下方的小字副標，例如中文產品名 */
  subtitle?: Localized<string>;
  tagline: Localized<string>;
  features: Localized<string[]>;
  audience: AudienceKey[];
  status: ProductStatus;
  icon: IconName;
  /** 產品網址；有填才會顯示「前往使用」 */
  url?: string;
  /** 卡片上的補充說明（例如需要邀請碼） */
  note?: Localized<string>;
}

export const products: Product[] = [
  {
    // 對應「PDF 作業講解器」專案（Desktop/PDF作業講解器/pdf-tutor）
    id: 'pdf-tutor',
    name: { 'zh-TW': 'PDF-Tutor', en: 'PDF-Tutor' },
    subtitle: { 'zh-TW': 'PDF 作業講解器', en: 'AI homework explainer' },
    tagline: {
      'zh-TW': '打開作業 PDF，點一下題目，AI 家教就一步步講解，還能隨時追問。',
      en: 'Open a homework PDF, tap a question, and an AI tutor walks you through it — follow-up questions welcome.',
    },
    features: {
      'zh-TW': [
        '直接點選題目講解，掃描檔、手寫與數學式都能看懂',
        '提示模式逐步引導，也可切換完整解答並驗算',
        '附上自己的解答照片，AI 指出第一個錯誤',
        '錯題本、學習進度與講解筆記匯出，複習更有方向',
      ],
      en: [
        'Tap any question to get an explanation — works with scans, handwriting and math',
        'Hint mode guides you step by step, or switch to full solutions with self-checks',
        'Attach a photo of your work and AI points out the first mistake',
        'Mistake notebook, progress tracking and exportable notes for review',
      ],
    },
    audience: ['students', 'teachers'],
    status: 'live',
    icon: 'document',
    url: 'https://pdf-tutor.pdf-tutor.workers.dev/',
    note: {
      'zh-TW': '雲端版需要邀請碼才能建立帳號，請向學校或管理員索取，或來信洽詢。',
      en: 'The cloud version needs an invite code to create an account — ask your school or administrator, or write to us.',
    },
  },
  {
    // 對應 PDF-Tutor 的教師頁面（/teacher/，見 pdf-tutor/TEACHER-CENTER.md）與「管理中心」、題庫發布流程（ADMIN-CENTER.md）；不要連到 /teacher/
    id: 'teacher-console',
    name: { 'zh-TW': '教師後台', en: 'Teacher Console' },
    subtitle: { 'zh-TW': '教室管理與管理中心', en: 'Classrooms & admin center' },
    tagline: {
      'zh-TW': '教師開設教室、批量建立學生帳號並掌握使用情形；管理員統籌全部帳號，並建置考古題題庫。',
      en: 'Teachers set up classrooms, create student accounts in bulk and follow usage; administrators oversee every account and build the exam bank.',
    },
    features: {
      'zh-TW': [
        '開設教室，貼上座號與姓名即可批量建立學生帳號，帳密可下載或列印',
        '勾選學生批量啟用、停用，查看每人今日與近 7 天的 AI 用量',
        '管理員可上傳試卷 PDF，AI 協助切題、擷取答案與標註單元，審核後發布到題庫',
        '管理中心總覽全部帳號與 AI 用量並可匯出 CSV，唯讀查閱都會留下紀錄',
      ],
      en: [
        'Set up classrooms and create student accounts in bulk from seat numbers and names — download or print the sign-in slips',
        'Enable or disable students in bulk and see each student’s AI usage today and over the last 7 days',
        'Administrators can upload exam PDFs — AI helps split questions, extract answers and tag topics, and everything is reviewed before it goes into the exam bank',
        'The admin center shows every account and its AI usage with CSV export; every read-only view of student work is logged',
      ],
    },
    audience: ['teachers', 'schools'],
    status: 'live',
    icon: 'dashboard',
  },
  {
    // PDF-Tutor 內的「原文書閱讀室」與「考古題題庫」，見 pdf-tutor/README.md
    id: 'reading-room',
    name: { 'zh-TW': '閱讀室與題庫', en: 'Reading Room & Exam Bank' },
    subtitle: { 'zh-TW': 'PDF-Tutor 延伸功能', en: 'PDF-Tutor extensions' },
    tagline: {
      'zh-TW': '從讀原文書到刷考古題，在同一個地方完成。',
      en: 'From reading textbooks to practising past papers, all in one place.',
    },
    features: {
      'zh-TW': [
        '原文書閱讀室：最大 300MB，螢光筆、筆記、書籤與目錄',
        '選字查詢與逐段對照翻譯，可固定專有名詞譯名',
        '考古題題庫：依試卷與單元篩選，整卷或單元練習',
        '官方答案預設遮住，講解時提示模式不洩漏答案',
      ],
      en: [
        'Reading room for textbooks up to 300MB, with highlights, notes, bookmarks and contents',
        'Look up selections and read side-by-side translations with fixed terminology',
        'Exam bank: filter papers by exam and topic, practise whole papers or single topics',
        'Official answers stay hidden until you reveal them; hint mode never gives them away',
      ],
    },
    audience: ['students'],
    status: 'beta',
    icon: 'book',
    url: 'https://pdf-tutor.pdf-tutor.workers.dev/',
    note: {
      'zh-TW': '屬於 PDF-Tutor 的一部分，使用同一個網址；考古題題庫需要登入雲端版。',
      en: 'Part of PDF-Tutor at the same address; the exam bank requires signing in to the cloud version.',
    },
  },
];
