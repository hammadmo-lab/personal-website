#!/usr/bin/env node
/**
 * Generates the social preview cards (1200x630) in public/og/, one per page and language.
 * They use the site's own copy (src/i18n.ts), fonts and photos, so re-run this after changing
 * a page's headline, eyebrow or photo:
 *
 *   npx playwright install chromium   # once
 *   npm run og
 *
 * The cards are committed; the site build does not run this script.
 */
import { mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import { BOOKS, LOCALES, PAGES, localeConfig, translations } from '../src/i18n.ts';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = join(ROOT, 'public', 'og');
const W = 1200;
const H = 630;

const require = createRequire(import.meta.url);
let chromium;
try {
  ({ chromium } = require('playwright'));
} catch {
  console.error('Playwright is missing. Run `npm install` and `npx playwright install chromium` first.');
  process.exit(1);
}

const file = (...parts) => pathToFileURL(join(ROOT, ...parts)).href;
const font = (pkg, name) => file('node_modules', pkg, 'files', name);

const FONT_FACES = `
  @font-face { font-family: 'Bodoni'; font-style: normal; font-weight: 400 900; src: url(${font('@fontsource-variable/bodoni-moda', 'bodoni-moda-latin-opsz-normal.woff2')}); }
  @font-face { font-family: 'Bodoni'; font-style: normal; font-weight: 400 900; src: url(${font('@fontsource-variable/bodoni-moda', 'bodoni-moda-latin-ext-opsz-normal.woff2')}); unicode-range: U+0100-024F, U+1E00-1EFF; }
  @font-face { font-family: 'Bodoni'; font-style: italic; font-weight: 400 900; src: url(${font('@fontsource-variable/bodoni-moda', 'bodoni-moda-latin-opsz-italic.woff2')}); }
  @font-face { font-family: 'Hanken'; font-weight: 100 900; src: url(${font('@fontsource-variable/hanken-grotesk', 'hanken-grotesk-latin-wght-normal.woff2')}); }
  @font-face { font-family: 'Signature'; src: url(${font('@fontsource/herr-von-muellerhoff', 'herr-von-muellerhoff-latin-400-normal.woff2')}); }
  @font-face { font-family: 'Amiri'; font-weight: 400; src: url(${font('@fontsource/amiri', 'amiri-arabic-400-normal.woff2')}); }
  @font-face { font-family: 'Amiri'; font-weight: 700; src: url(${font('@fontsource/amiri', 'amiri-arabic-700-normal.woff2')}); }
  @font-face { font-family: 'Naskh'; font-weight: 400; src: url(${font('@fontsource/noto-naskh-arabic', 'noto-naskh-arabic-arabic-400-normal.woff2')}); }
  @font-face { font-family: 'Naskh'; font-weight: 600; src: url(${font('@fontsource/noto-naskh-arabic', 'noto-naskh-arabic-arabic-600-normal.woff2')}); }
`;

/** Photo, frame size (height is always 490) and crop for each page. */
const PHOTOS = {
  home: { src: 'public/images/portrait.jpg', width: 368, position: '50% 30%' },
  about: { src: 'public/images/at-work.jpg', width: 340, position: '50% 35%' },
  radly: { src: 'public/images/radly-desk.jpg', width: 430, position: '30% 50%' },
  travel: { src: 'public/images/iceland.jpg', width: 368, position: '55% 50%' },
  books: { src: 'public/the-light-under-the-door.jpg', width: 306, position: '50% 50%' },
  contact: { src: 'public/images/portrait.jpg', width: 368, position: '50% 30%' },
};

/** What each card says. `en` marks text that stays English (Latin titles) on every locale. */
function cardText(locale, page) {
  const t = translations[locale];
  const book = t.books.featured[0];
  switch (page) {
    case 'home':
      return { eyebrow: t.home.eyebrow, lead: t.home.titleLead, accent: t.home.titleAccent, sub: t.home.captionName };
    case 'about':
      return { eyebrow: t.about.subtitle, lead: t.about.title, sub: t.pages.about.description };
    case 'radly':
      return { eyebrow: t.radly.eyebrow, lead: t.radly.title, leadEn: true, sub: `${t.radly.titleLead}\n${t.radly.titleAccent}` };
    case 'travel':
      return { eyebrow: t.travel.eyebrow, lead: t.travel.title, leadEn: true, sub: t.travel.quote, subItalic: true };
    case 'books':
      return { eyebrow: t.home.newBook, lead: BOOKS.lightUnderDoor.title, leadEn: true, sub: book.tagline, subItalic: true };
    case 'contact':
      return { eyebrow: t.contact.subtitle, lead: t.contact.title, sub: t.pages.contact.description };
    default:
      throw new Error(`No card text for page "${page}"`);
  }
}

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

function cardHtml(locale, page) {
  const { dir, lang } = localeConfig[locale];
  const rtl = dir === 'rtl';
  const text = cardText(locale, page);
  const photo = PHOTOS[page];
  const titleLang = text.leadEn ? 'en' : lang;
  const latinTitle = !rtl || text.leadEn;

  return `<!doctype html>
<html lang="${lang}" dir="${dir}">
<head>
<meta charset="utf-8">
<style>
  ${FONT_FACES}
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { width: ${W}px; height: ${H}px; overflow: hidden; }
  body {
    background:
      radial-gradient(ellipse 620px 520px at ${rtl ? '22%' : '78%'} 50%, rgba(122, 33, 45, 0.42), transparent 70%),
      #0f0a0b;
    color: #f5eee6;
    font-family: ${rtl ? "'Naskh'" : "'Hanken'"}, sans-serif;
    display: flex;
    gap: 64px;
    padding: 52px 72px 0;
  }
  .copy { flex: 1; min-width: 0; height: ${H - 52}px; display: flex; flex-direction: column; }
  .eyebrow { display: flex; align-items: center; gap: 18px; color: #d6ad72; font-size: var(--eyebrow, ${rtl ? 24 : 19}px); font-weight: 600;
    letter-spacing: ${rtl ? '0' : '0.2em'}; text-transform: ${rtl ? 'none' : 'uppercase'}; margin-top: 18px; white-space: nowrap; overflow: hidden; }
  .eyebrow::before { content: ''; flex: none; width: 52px; height: 1px; background: #d6ad72; }
  .main { flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 22px; padding-bottom: 8px; min-height: 0; }
  h1 { font-family: ${latinTitle ? "'Bodoni'" : "'Amiri'"}, serif; font-weight: ${latinTitle ? 400 : 700};
    font-size: var(--title, 76px); text-wrap: balance; line-height: ${latinTitle ? 1.02 : 1.35}; letter-spacing: ${latinTitle ? '-0.015em' : '0'}; }
  h1 .accent { display: block; color: #d6ad72; font-style: ${rtl ? 'normal' : 'italic'}; }
  .sub { color: #c4b7ab; font-size: var(--sub, ${rtl ? 28 : 26}px); line-height: ${rtl ? 1.7 : 1.45}; max-width: 34em; text-wrap: balance; white-space: pre-line; }
  .sub.italic { font-family: ${rtl ? "'Naskh'" : "'Bodoni'"}, serif; font-style: ${rtl ? 'normal' : 'italic'}; color: #e6dbd0; }
  .base { display: flex; align-items: center; gap: 28px; height: 116px; flex: none; }
  .sign { font-family: 'Signature', cursive; color: #d6ad72; font-size: 66px; line-height: 1; padding: 6px 10px 0 4px; white-space: nowrap; }
  .domain { font-family: 'Hanken', sans-serif; color: #9d9086; font-size: 17px; letter-spacing: 0.24em; text-transform: uppercase; }
  .photo { position: relative; flex: none; width: ${photo.width}px; height: 490px; margin-top: 18px; }
  .photo::before { content: ''; position: absolute; inset: -18px ${rtl ? '-18px' : '18px'} 18px ${rtl ? '18px' : '-18px'};
    border: 1px solid #d6ad72; z-index: 2; }
  .photo::after { content: ''; position: absolute; inset: 52% ${rtl ? '36%' : '-14px'} -14px ${rtl ? '-14px' : '36%'}; background: #7a212d; z-index: 0; }
  .photo img { position: relative; z-index: 1; width: 100%; height: 100%; object-fit: cover; object-position: ${photo.position}; display: block; }
</style>
</head>
<body>
  <div class="copy">
    <p class="eyebrow">${esc(text.eyebrow)}</p>
    <div class="main">
      <h1 lang="${titleLang}">${esc(text.lead)}${text.accent ? ` <span class="accent">${esc(text.accent)}</span>` : ''}</h1>
      ${text.sub ? `<p class="sub${text.subItalic ? ' italic' : ''}">${esc(text.sub)}</p>` : ''}
    </div>
    <div class="base" dir="ltr" style="justify-content: ${rtl ? 'flex-end' : 'flex-start'}">
      <span class="sign" lang="en">Mohamed Hammad</span>
      <span class="domain" lang="en">mohamedhammad.com</span>
    </div>
  </div>
  <figure class="photo"><img src="${file(photo.src)}" alt=""></figure>
</body>
</html>`;
}

/** Shrinks the title, then the subtitle, until the copy fits between the eyebrow and the signature. */
async function fit(pageHandle) {
  return pageHandle.evaluate(() => {
    const main = document.querySelector('.main');
    const root = document.documentElement.style;
    const eyebrow = document.querySelector('.eyebrow');
    const px = (el) => parseFloat(getComputedStyle(el).fontSize);
    const overflows = () => main.scrollHeight > main.clientHeight + 1 || main.scrollWidth > main.clientWidth + 1;
    // Keep the eyebrow on one line.
    let eyebrowSize = px(eyebrow);
    while (eyebrow.scrollWidth > eyebrow.clientWidth + 1 && eyebrowSize > 14) root.setProperty('--eyebrow', `${(eyebrowSize -= 0.5)}px`);
    let title = 76;
    let sub = px(document.querySelector('.sub') ?? main);
    while (overflows() && title > 44) root.setProperty('--title', `${(title -= 2)}px`);
    while (overflows() && sub > 19) root.setProperty('--sub', `${(sub -= 1)}px`);
    const eyebrowFits = eyebrow.scrollWidth <= eyebrow.clientWidth + 1;
    return { title, sub, eyebrow: eyebrowSize, fits: !overflows() && eyebrowFits };
  });
}

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
const tmp = join(tmpdir(), `og-cards-${process.pid}`);
mkdirSync(tmp, { recursive: true });
mkdirSync(OUT_DIR, { recursive: true });

let failed = false;
for (const locale of LOCALES) {
  for (const name of PAGES) {
    const htmlPath = join(tmp, `${locale}-${name}.html`);
    writeFileSync(htmlPath, cardHtml(locale, name));
    await page.goto(pathToFileURL(htmlPath).href, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    const result = await fit(page);
    const out = join(OUT_DIR, `${locale}-${name}.jpg`);
    await page.screenshot({ path: out, type: 'jpeg', quality: 88 });
    console.log(`${result.fits ? 'ok ' : 'OVERFLOW'} public/og/${locale}-${name}.jpg  (eyebrow ${result.eyebrow}px, title ${result.title}px, sub ${result.sub}px)`);
    if (!result.fits) failed = true;
  }
}

await browser.close();
rmSync(tmp, { recursive: true, force: true });
if (failed) {
  console.error('Some cards overflow: shorten their text in src/i18n.ts or adjust cardText() in this script.');
  process.exit(1);
}
