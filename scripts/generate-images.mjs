// 由 SVG 產生 public/og-image.png（1200×630）與 public/apple-touch-icon.png（180×180）。
// 公司名稱或標語定案後修改下方文字，再執行：node scripts/generate-images.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const publicDir = fileURLToPath(new URL('../public/', import.meta.url));

const mark = (x, y, s) => `
  <g transform="translate(${x} ${y}) scale(${s / 32})">
    <rect width="32" height="32" rx="8" fill="#1F4D3A"/>
    <path d="M7.5 10.2c3-1 6-.6 8.5 1.3v11.6c-2.5-1.6-5.5-2-8.5-1.1z" fill="#FAF7F2"/>
    <path d="M24.5 10.2c-3-1-6-.6-8.5 1.3v11.6c2.5-1.6 5.5-2 8.5-1.1z" fill="#FAF7F2" opacity="0.78"/>
    <path d="M19.6 9.4h2.6v5.4l-1.3-1-1.3 1z" fill="#D97757"/>
  </g>`;

const lines = Array.from({ length: 16 }, (_, i) => `<rect x="0" y="${i * 40 + 39}" width="1200" height="1" fill="#D6CEBF" opacity="0.35"/>`).join('');

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#FAF7F2"/>
  ${lines}
  <circle cx="1010" cy="315" r="250" fill="#E5EEE8"/>
  <circle cx="1010" cy="315" r="290" fill="none" stroke="#D6CEBF" stroke-dasharray="3 10"/>
  ${mark(880, 185, 260)}
  ${mark(96, 96, 72)}
  <text x="190" y="149" font-family="'Noto Serif TC', 'Microsoft JhengHei', serif" font-size="46" font-weight="700" letter-spacing="4" fill="#1C1C1A">賽先生</text>
  <text x="362" y="147" font-family="Georgia, 'Times New Roman', serif" font-size="30" font-weight="600" fill="#5B5A55">Cyber Tutor</text>
  <rect x="96" y="300" width="56" height="3" fill="#D97757"/>
  <text x="96" y="380" font-family="Georgia, 'Times New Roman', serif" font-size="58" font-weight="700" fill="#1C1C1A">AI learning tools</text>
  <text x="96" y="450" font-family="Georgia, 'Times New Roman', serif" font-size="58" font-weight="700" fill="#1F4D3A">for every classroom.</text>
  <text x="96" y="530" font-family="'Segoe UI', Arial, sans-serif" font-size="26" fill="#5B5A55">twctchem.com</text>
</svg>`;

const touch = `
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 32 32">
  <rect width="32" height="32" fill="#1F4D3A"/>
  <path d="M7.5 10.2c3-1 6-.6 8.5 1.3v11.6c-2.5-1.6-5.5-2-8.5-1.1z" fill="#FAF7F2"/>
  <path d="M24.5 10.2c-3-1-6-.6-8.5 1.3v11.6c2.5-1.6 5.5-2 8.5-1.1z" fill="#FAF7F2" opacity="0.78"/>
  <path d="M19.6 9.4h2.6v5.4l-1.3-1-1.3 1z" fill="#D97757"/>
</svg>`;

await sharp(Buffer.from(og)).png().toFile(`${publicDir}og-image.png`);
await sharp(Buffer.from(touch)).png().toFile(`${publicDir}apple-touch-icon.png`);
console.log('Generated og-image.png and apple-touch-icon.png');
