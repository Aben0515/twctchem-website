// 由 SVG 產生 public/og-image.png（1200×630）與 public/apple-touch-icon.png（180×180）。
// 公司名稱或標語定案後修改下方文字，再執行：node scripts/generate-images.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const publicDir = fileURLToPath(new URL('../public/', import.meta.url));

// 圖形「Mentor Bubble」，與 src/components/Logo.astro、public/favicon.svg 相同
const markPaths = (bubble, cap, spark) => `
    <path d="M15 16H16.75L24 19.4 31.25 16H33Q41 16 41 24V32Q41 40 33 40H19L12 45V39.2Q7 37.5 7 32V24Q7 16 15 16Z" fill="${bubble}"/>
    <path d="M24 4.5 38.5 11.5 24 18.5 9.5 11.5Z" fill="${cap}"/>
    <path d="M24 11.5 34.5 14.2V19.5" fill="none" stroke="#D97757" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="34.5" cy="21" r="2" fill="#D97757"/>
    <path d="M24 22.5C24.6 26.6 25.9 27.9 30 28.5 25.9 29.1 24.6 30.4 24 34.5 23.4 30.4 22.1 29.1 18 28.5 22.1 27.9 23.4 26.6 24 22.5Z" fill="${spark}"/>`;

// 淺色底用的圖形；(x, y) 是左上角，h 是高度（裁掉 48 格線四周留白，範圍 x 5–43、y 3–46）
const mark = (x, y, h) => `
  <svg x="${x}" y="${y}" width="${(h * 38) / 43}" height="${h}" viewBox="5 3 38 43">${markPaths('#1F4D3A', '#1C1C1A', '#FAF7F2')}
  </svg>`;

const lines = Array.from({ length: 16 }, (_, i) => `<rect x="0" y="${i * 40 + 39}" width="1200" height="1" fill="#D6CEBF" opacity="0.35"/>`).join('');

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#FAF7F2"/>
  ${lines}
  <circle cx="1010" cy="315" r="250" fill="#E5EEE8"/>
  <circle cx="1010" cy="315" r="290" fill="none" stroke="#D6CEBF" stroke-dasharray="3 10"/>
  ${mark(878, 165, 300)}
  ${mark(100, 92, 76)}
  <text x="190" y="149" font-family="'Noto Serif TC', 'Microsoft JhengHei', serif" font-size="46" font-weight="700" letter-spacing="4" fill="#1C1C1A">賽先生</text>
  <text x="362" y="147" font-family="Georgia, 'Times New Roman', serif" font-size="30" font-weight="600" fill="#5B5A55">Cyber Tutor</text>
  <rect x="96" y="300" width="56" height="3" fill="#D97757"/>
  <text x="96" y="380" font-family="Georgia, 'Times New Roman', serif" font-size="58" font-weight="700" fill="#1C1C1A">AI learning tools</text>
  <text x="96" y="450" font-family="Georgia, 'Times New Roman', serif" font-size="58" font-weight="700" fill="#1F4D3A">for every classroom.</text>
  <text x="96" y="530" font-family="'Segoe UI', Arial, sans-serif" font-size="26" fill="#5B5A55">twctchem.com</text>
</svg>`;

const touch = `
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 48 48">
  <rect width="48" height="48" fill="#1F4D3A"/>
  <g transform="translate(5.61 5.53) scale(0.76)">${markPaths('#FAF7F2', '#FAF7F2', '#1F4D3A')}
  </g>
</svg>`;

await sharp(Buffer.from(og)).png().toFile(`${publicDir}og-image.png`);
await sharp(Buffer.from(touch)).png().toFile(`${publicDir}apple-touch-icon.png`);
console.log('Generated og-image.png and apple-touch-icon.png');
