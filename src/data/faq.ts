import type { Localized } from '../i18n/utils';

export type FaqCategory = 'product' | 'cooperation' | 'privacy';

export interface FaqItem {
  category: FaqCategory;
  question: Localized<string>;
  /** 每個元素是一段文字 */
  answer: Localized<string[]>;
}

/**
 * 內容依據 PDF-Tutor 的 README.md 與 ADMIN-CENTER.md，只寫實際存在的功能。
 * 改動功能描述前請先對照那兩份文件。
 */
export const faqs: FaqItem[] = [
  // ---------- 產品與功能 ----------
  {
    category: 'product',
    question: {
      'zh-TW': 'PDF-Tutor 是什麼？怎麼使用？',
      en: 'What is PDF-Tutor and how does it work?',
    },
    answer: {
      'zh-TW': [
        'PDF-Tutor 是一個 AI 作業講解器。把作業 PDF 丟進瀏覽器，直接點你想問的題目，右邊的 AI 家教就會講解那一題，並且可以繼續追問。',
      ],
      en: [
        'PDF-Tutor is an AI homework explainer. Drop a homework PDF into your browser, tap the question you want to ask about, and the AI tutor on the right explains it — and you can keep asking follow-up questions.',
      ],
    },
  },
  {
    category: 'product',
    question: {
      'zh-TW': '掃描檔、手寫或數學式的作業也能用嗎？',
      en: 'Does it work with scans, handwriting and math?',
    },
    answer: {
      'zh-TW': [
        '可以。PDF-Tutor 是把頁面轉成圖片再交給 AI 判讀，所以掃描檔、手寫、數學式與附圖都能處理。',
        '題目位置是由模型判斷的，掃描品質差、版面極度複雜或手寫潦草時，可能會框錯。這時可以改用紅圈標記，或用「框選區域提問」圈出想問的地方。',
      ],
      en: [
        'Yes. PDF-Tutor turns each page into an image for the AI to read, so scans, handwriting, math and figures all work.',
        'Question positions are detected by the model, so very poor scans, extremely complex layouts or untidy handwriting can lead to a wrongly drawn box. In that case use the red-circle marker, or select a region to ask about.',
      ],
    },
  },
  {
    category: 'product',
    question: {
      'zh-TW': 'AI 會直接把答案給學生嗎？',
      en: 'Will the AI just hand students the answer?',
    },
    answer: {
      'zh-TW': [
        '看你選的模式。「提示模式」一步步引導，並可以用「給我一點提示」只點出下一步的觀念，或用「寫出下一步」每次只推進一步；「完整解答」模式則會寫出完整解法，並提供「驗算」讓 AI 獨立檢查答案。模式可以在中途切換，只影響之後的回答。',
        '在題庫中，官方答案預設是遮住的，要按下才會顯示，提示模式也不會洩漏答案。',
      ],
      en: [
        'It depends on the mode. Hint mode guides step by step: “Give me a hint” points out only the idea for the next step, and “Write the next step” moves forward one step at a time. Full-solution mode writes out the whole solution and offers a self-check where the AI independently verifies the answer. You can switch modes mid-way; it only affects later replies.',
        'In the exam bank, official answers stay hidden until you reveal them, and hint mode never gives them away.',
      ],
    },
  },
  {
    category: 'product',
    question: {
      'zh-TW': '可以附上自己寫的解答請 AI 批改嗎？',
      en: 'Can I attach my own work for the AI to check?',
    },
    answer: {
      'zh-TW': [
        '可以。在輸入框附上手寫解答的照片、截圖或 PDF（每則訊息最多 4 張），AI 會先辨識你寫了什麼（看不清楚會直說），再指出第一個錯誤。提示模式只會引導你修正，完整解答模式才會給出正確做法。',
        '雲端版還可以用手機拍照，掃描 QR code 傳到電腦，一次最多 12 張。',
      ],
      en: [
        'Yes. Attach a photo, screenshot or PDF of your handwritten work in the input box (up to 4 images per message). The AI first reads what you wrote — and says so if it is unclear — then points out the first mistake. Hint mode only guides you toward the fix; full-solution mode shows the correct method.',
        'In the cloud version you can also scan a QR code to send photos from your phone to your computer, up to 12 at a time.',
      ],
    },
  },
  {
    category: 'product',
    question: {
      'zh-TW': '閱讀室與考古題題庫是什麼？',
      en: 'What are the Reading Room and the Exam Bank?',
    },
    answer: {
      'zh-TW': [
        '閱讀室可以閱讀最大 300MB 的原文書 PDF，提供螢光筆、筆記、書籤與目錄，並可選字查詢、逐段對照翻譯，還能從閱讀內容產生測驗與生字複習卡。密碼保護的 PDF 暫不支援。',
        '考古題題庫由管理員發布，學生可依試卷與單元篩選，做整卷或單元練習，交卷後依官方答案自動計分。這兩項功能目前為 Beta 測試中。',
      ],
      en: [
        'The Reading Room lets you read textbook PDFs up to 300MB with highlights, notes, bookmarks and a table of contents, look up selected words, read side-by-side translations, and generate quizzes and vocabulary review cards from what you read. Password-protected PDFs are not supported yet.',
        'The Exam Bank is published by administrators. Students filter papers by exam and topic, practise whole papers or single topics, and get automatic scoring against the official answers after submitting. Both are currently in beta.',
      ],
    },
  },
  {
    category: 'product',
    question: {
      'zh-TW': '「Beta 測試中」是什麼意思？',
      en: 'What does “in beta” mean?',
    },
    answer: {
      'zh-TW': ['表示功能已經可以使用，但還在持續調整，介面與細節可能會變動。如果你遇到問題或有建議，歡迎來信告訴我們。'],
      en: ['The feature is ready to use but still being refined, so the interface and details may change. If you run into a problem or have a suggestion, please write to us.'],
    },
  },

  // ---------- 合作與導入 ----------
  {
    category: 'cooperation',
    question: {
      'zh-TW': '學校或教師想導入，要怎麼開始？',
      en: 'How can a school or teacher get started?',
    },
    answer: {
      'zh-TW': [
        '請透過「聯絡我們」表單或直接寄信給我們，說明你的使用情境與人數。學生帳號可由管理員以邀請碼開通，或由教師在教師後台批量建立；管理員可個別設定每日使用額度，教師可批量啟用或停用自己教室的學生。',
      ],
      en: [
        'Use the contact form or write to us directly and tell us how you would use it and for how many people. Student accounts can be opened by an administrator with invite codes or created in bulk by teachers in the Teacher Console. Administrators can set each account’s daily limit, and teachers can enable or disable the students in their own classrooms.',
      ],
    },
  },
  {
    category: 'cooperation',
    question: {
      'zh-TW': '教師後台可以做什麼？',
      en: 'What can the Teacher Console do?',
    },
    answer: {
      'zh-TW': [
        '教師後台分成兩部分。教師帳號由管理員指定，登入教師專用頁面後可以開設教室：貼上「座號 姓名」名單就能批量建立學生帳號（帳號為「教室代號-座號」，臨時密碼只顯示一次，可下載 CSV 或列印帳密條），也能把既有帳號加入教室、批量啟用或停用學生，並查看每位學生今日與近 7 天的 AI 用量。教師只看得到自己教室學生的帳號狀態與用量，看不到作業或對話內容。',
        '管理中心給學校的管理員使用，有總覽、帳號、用量與費用、AI 服務、邀請碼與操作紀錄六個分頁：可以搜尋與管理所有帳號、設定每日額度、查看近 7 天、30 天或自訂區間的使用情形並匯出 CSV，也能上傳試卷 PDF 建置考古題題庫，由 AI 協助切題、擷取答案與標註單元，審核後再發布。教師的每一項操作也都會記錄在操作紀錄裡。',
      ],
      en: [
        'The Teacher Console has two parts. Teacher accounts are designated by an administrator and sign in to a dedicated teacher page to set up classrooms: paste a list of seat numbers and names to create student accounts in bulk (usernames follow “class code-seat number”, and temporary passwords are shown only once, ready to download as CSV or print as slips). Teachers can also add existing accounts to a classroom, enable or disable students in bulk and see each student’s AI usage today and over the last 7 days. Teachers only see the account status and usage of students in their own classrooms — never their homework or conversations.',
        'The admin center is for the school’s administrators and has six tabs: overview, accounts, usage & cost, AI service, invite codes and audit log. Administrators can search and manage every account, set daily limits, review usage over the last 7 or 30 days or a custom range and export it as CSV, and upload exam PDFs to build an exam bank — AI helps split questions, extract answers and tag topics, and everything is reviewed before publishing. Every teacher action is also recorded in the audit log.',
      ],
    },
  },
  {
    category: 'cooperation',
    question: {
      'zh-TW': '每個帳號每天可以用多少次 AI？',
      en: 'How much AI use does each account get per day?',
    },
    answer: {
      'zh-TW': [
        '雲端版每個帳號有每日 AI 使用次數上限，由管理員設定，可對個別帳號調整，以台灣時間計算，午夜重置。這是真正的額度保護，超過後當日就無法再呼叫 AI。',
      ],
      en: [
        'In the cloud version every account has a daily AI usage limit set by the administrator, adjustable per account. It is counted on Taiwan time and resets at midnight. It is a hard cap: once it is reached, AI calls stop for the day.',
      ],
    },
  },

  // ---------- 資料與隱私 ----------
  {
    category: 'privacy',
    question: {
      'zh-TW': '學生的作業和對話存放在哪裡？',
      en: 'Where are students’ homework and conversations stored?',
    },
    answer: {
      'zh-TW': [
        '這取決於使用方式。單機模式下，所有作業與對話只存在使用者自己瀏覽器的本機儲存空間，不會上傳到我們的伺服器；但使用 AI 功能需要自備 AI 服務金鑰（例如 Google Gemini），選取的內容會由瀏覽器直接傳給你設定的 AI 服務。雲端模式下，作業、錯題本與學習檔案會存放在雲端儲存空間，登入後可跨裝置同步；每個帳號的資料彼此隔離。',
      ],
      en: [
        'It depends how it is used. In standalone mode, homework and conversations stay in the user’s own browser storage and are never uploaded to our servers — but AI features need your own AI service key (for example Google Gemini), and what you select goes straight from your browser to the AI service you set up. In cloud mode, homework, the mistake notebook and the learning profile are kept in cloud storage and sync across devices after sign-in; each account’s data is isolated.',
      ],
    },
  },
  {
    category: 'privacy',
    question: {
      'zh-TW': '送給 AI 的有哪些內容？',
      en: 'What is sent to the AI?',
    },
    answer: {
      'zh-TW': [
        '點題講解時，頁面圖片、你選取的文字或截圖、附上的照片與對話內容，會傳送給 AI 服務以產生回答。雲端版使用的 AI 服務與模型由管理員設定。請避免在作業或附圖中放入與學習無關的敏感個人資料。',
      ],
      en: [
        'When you ask for an explanation, the page images, the text or screenshots you select, any attached photos and the conversation are sent to an AI service to produce the answer. In the cloud version the AI service and model are set by the administrator. Please avoid putting sensitive personal data unrelated to learning into homework or attachments.',
      ],
    },
  },
  {
    category: 'privacy',
    question: {
      'zh-TW': '教師或管理員看得到學生的作業嗎？',
      en: 'Can teachers or administrators see students’ work?',
    },
    answer: {
      'zh-TW': [
        '管理員可以唯讀查閱學生雲端的作業、閱讀室資料與已同步的對話。「唯讀」表示無法編輯、刪除或下載這些內容，而且每一次查閱都會留下操作紀錄。單機模式的資料不在雲端，管理員看不到。',
      ],
      en: [
        'Administrators can view students’ cloud homework, Reading Room data and synced conversations in read-only mode. Read-only means they cannot edit, delete or download this content, and every view is recorded in an audit log. Data from standalone mode is not in the cloud, so administrators cannot see it.',
      ],
    },
  },
  {
    category: 'privacy',
    question: {
      'zh-TW': '資料可以刪除嗎？',
      en: 'Can data be deleted?',
    },
    answer: {
      'zh-TW': [
        '可以。刪除作業時，會同時刪除伺服器與本機的副本；管理員刪除帳號時，也會連同該帳號的資料一併刪除。單機模式下，也可以在瀏覽器設定中清除這個網站的資料。詳細請見隱私權政策。',
      ],
      en: [
        'Yes. Deleting a homework file removes both the server and local copies, and when an administrator deletes an account all of that account’s data goes with it. In standalone mode you can also clear this site’s data in your browser settings. See the Privacy Policy for details.',
      ],
    },
  },
];
