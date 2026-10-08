import zh from './zh-TW';
import en from './en';

export const languages = {
  'zh-TW': '中文',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;
export type Localized<T> = Record<Lang, T>;

export const defaultLang: Lang = 'zh-TW';

const dictionaries = { 'zh-TW': zh, en };

export function useTranslations(lang: Lang) {
  return dictionaries[lang];
}

export function getLangFromUrl(url: URL): Lang {
  const { pathname } = url;
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : defaultLang;
}

/** 把不含語言前綴的路徑（例如 `/about/`）轉成指定語言的路徑 */
export function localizePath(lang: Lang, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return clean === '/' ? '/en/' : `/en${clean}`;
}

/** 去掉 `/en` 前綴，取得兩種語言共用的路徑 */
export function stripLangPrefix(pathname: string): string {
  if (pathname === '/en' || pathname === '/en/') return '/';
  return pathname.startsWith('/en/') ? pathname.slice(3) : pathname;
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
