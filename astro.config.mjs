// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 舊網址：英文原本在 /en/，改成預設語言後轉到根目錄
const legacyEnglish = ['about', 'contact', 'faq', 'privacy', 'products', 'terms'];

export default defineConfig({
  site: 'https://twctchem.com',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', { path: 'zh', codes: ['zh-TW'] }],
    routing: { prefixDefaultLocale: false },
  },
  redirects: {
    '/en/': '/',
    ...Object.fromEntries(legacyEnglish.map((page) => [`/en/${page}/`, `/${page}/`])),
  },
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/404/') && !page.includes('/en/'),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', zh: 'zh-TW' },
      },
    }),
  ],
});
