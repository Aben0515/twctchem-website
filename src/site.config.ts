/**
 * 全站共用的公司資訊。換公司名稱、統編、聯絡方式時只需要改這裡。
 * 標有【】或 [ ] 的欄位是佔位字串，正式上線前請替換。
 */
export const site = {
  url: 'https://twctchem.com',
  /** 品牌名稱：Logo、網頁標題、頁尾版權都用這個（依語言切換） */
  name: {
    'zh-TW': '賽先生',
    en: 'Cyber Tutor',
  },
  /** 公司登記名稱：只放在隱私權政策、服務條款與關於我們的公司資訊表，不放在顯眼處 */
  legalName: {
    'zh-TW': '康庭有限公司',
    en: 'Counting Co.',
  },
  /** 統一編號；留空字串則全站不顯示 */
  taxId: '' as string,
  /** 留空字串則不顯示 */
  founded: '',
  email: 'sales@twctchem.com',
  /** 留空字串則不顯示 */
  phone: '',
  address: {
    'zh-TW': '',
    en: '',
  },
  /** 到 https://web3forms.com 用 sales@twctchem.com 申請，此 key 設計上可公開放在前端 */
  web3formsKey: '2806ed23-259e-48b8-aea9-19324d6b448f',
  /** 一般客服回覆時間（工作天） */
  replyWithinDays: '1–2',
  /** 隱私權政策與服務條款的最後更新日期（ISO 格式），修改條文時一併更新 */
  legalUpdated: '2026-10-09',
} as const;
