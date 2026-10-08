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
  },
  {
    // 對應 PDF-Tutor 的「管理中心」與題庫發布流程（見 pdf-tutor/ADMIN-CENTER.md）
    id: 'teacher-console',
    name: { 'zh-TW': '教師後台', en: 'Teacher Console' },
    subtitle: { 'zh-TW': 'PDF-Tutor 管理中心', en: 'PDF-Tutor admin center' },
    tagline: {
      'zh-TW': '建置自己的考古題題庫，集中掌握每位學生使用 PDF-Tutor 的情形。',
      en: 'Build your own exam bank and see how every student is using PDF-Tutor.',
    },
    features: {
      'zh-TW': [
        '上傳試卷 PDF，AI 協助切題、擷取答案與標註單元，審核後發布',
        '用邀請碼開通學生帳號，設定每日額度與啟用狀態',
        '總覽所有學生的使用情形與 AI 用量，可匯出 CSV',
        '唯讀查閱學生的作業與講解紀錄，所有查閱都會留下紀錄',
      ],
      en: [
        'Upload exam PDFs — AI helps split questions, extract answers and tag topics for your review',
        'Onboard students with invite codes and set daily limits and access',
        'Overview of every student’s activity and AI usage, with CSV export',
        'Read-only access to students’ work and tutoring history, with every view logged',
      ],
    },
    audience: ['teachers', 'schools'],
    status: 'beta',
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
  },
];
