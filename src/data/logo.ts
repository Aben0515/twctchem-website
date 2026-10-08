/**
 * Logo 圖形「Mentor Bubble」的路徑（48 格線）：戴學士帽的對話框，框內是火花。
 * Logo.astro、HeroIntro.astro、HeroWatermark.astro 共用；public/favicon.svg 與 scripts/generate-images.mjs 是另外寫的副本，改圖形時要一起改。
 */
export const logoPaths = {
  /** 對話框；上緣的 V 形缺口讓帽子與框之間留出縫隙 */
  bubble: 'M15 16H16.75L24 19.4 31.25 16H33Q41 16 41 24V32Q41 40 33 40H19L12 45V39.2Q7 37.5 7 32V24Q7 16 15 16Z',
  cap: 'M24 4.5 38.5 11.5 24 18.5 9.5 11.5Z',
  /** 流蘇線，stroke-width 1.6 */
  tassel: 'M24 11.5 34.5 14.2V19.5',
  spark: 'M24 22.5C24.6 26.6 25.9 27.9 30 28.5 25.9 29.1 24.6 30.4 24 34.5 23.4 30.4 22.1 29.1 18 28.5 22.1 27.9 23.4 26.6 24 22.5Z',
} as const;

/** 流蘇末端的圓點 */
export const logoTasselEnd = { cx: 34.5, cy: 21, r: 2 } as const;

/** 圖形實際範圍（裁掉 48 格線四周的留白），用於 viewBox */
export const logoViewBox = '5 3 38 43';
