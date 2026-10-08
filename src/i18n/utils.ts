import zh from './zh-TW';
import en from './en';

export const languages = {
  'zh-TW': '中文',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;
export type Localized<T> = Record<Lang, T>;

/** 預設語言（英文）放在網站根目錄，中文放在 `/zh/` */
export const defaultLang: Lang = 'en';

/** 非預設語言的網址前綴 */
const ZH_PREFIX = '/zh';

const dictionaries = { 'zh-TW': zh, en };

export function useTranslations(lang: Lang) {
  return dictionaries[lang];
}

export function getLangFromUrl(url: URL): Lang {
  const { pathname } = url;
  return pathname === ZH_PREFIX || pathname.startsWith(`${ZH_PREFIX}/`) ? 'zh-TW' : defaultLang;
}

/** 把不含語言前綴的路徑（例如 `/about/`）轉成指定語言的路徑 */
export function localizePath(lang: Lang, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return clean === '/' ? `${ZH_PREFIX}/` : `${ZH_PREFIX}${clean}`;
}

/** 去掉 `/zh` 前綴，取得兩種語言共用的路徑 */
export function stripLangPrefix(pathname: string): string {
  if (pathname === ZH_PREFIX || pathname === `${ZH_PREFIX}/`) return '/';
  return pathname.startsWith(`${ZH_PREFIX}/`) ? pathname.slice(ZH_PREFIX.length) : pathname;
}

/** 取代文案裡的 `{key}` 佔位字串，例如 `fill(t.faq.cta.body, { days: '1–2' })` */
export function fill(text: string, values: Record<string, string>): string {
  return text.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);
}

/** 把 ISO 日期（YYYY-MM-DD）格式化成各語言習慣的寫法 */
export function formatDate(lang: Lang, iso: string): string {
  const [year, month, day] = iso.split('-').map(Number);
  return lang === 'en'
    ? new Date(Date.UTC(year, month - 1, day)).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC',
      })
    : `${year} 年 ${month} 月 ${day} 日`;
}
