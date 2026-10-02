import type { APIRoute } from 'astro';
import { BOOKS, LOCALES, PAGES, localeConfig } from '../i18n';
import { SITE_URL, absoluteUrl } from '../lib/site';

const images: Partial<Record<(typeof PAGES)[number], { loc: string; title: string }[]>> = {
  home: [{ loc: '/images/portrait.jpg', title: 'Dr. Mohamed Amin Hammad' }],
  about: [{ loc: '/images/at-work.jpg', title: 'Dr. Mohamed Amin Hammad at work' }],
  radly: [{ loc: '/images/radly-desk.jpg', title: 'Radly, voice-supported radiology reporting' }],
  travel: [
    { loc: '/images/iceland.jpg', title: 'Iceland, Passport Trails' },
    { loc: '/images/passport-trails-splash.jpg', title: 'Passport Trails app' },
  ],
  books: [
    { loc: BOOKS.iSwear.cover, title: `${BOOKS.iSwear.title} book cover` },
    { loc: BOOKS.infj.cover, title: `${BOOKS.infj.title} book cover` },
  ],
};

const escape = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/'/g, '&apos;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = PAGES.flatMap((page) =>
    LOCALES.map((locale) => {
      const alternates = LOCALES.map(
        (item) => `    <xhtml:link rel="alternate" hreflang="${localeConfig[item].lang}" href="${absoluteUrl(item, page)}" />`,
      ).join('\n');
      const pageImages = (images[page] ?? [])
        .map(
          (image) =>
            `    <image:image>\n      <image:loc>${SITE_URL}${image.loc}</image:loc>\n      <image:title>${escape(image.title)}</image:title>\n    </image:image>`,
        )
        .join('\n');
      return `  <url>
    <loc>${absoluteUrl(locale, page)}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${page === 'home' ? (locale === 'en' ? '1.0' : '0.9') : '0.8'}</priority>
${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="${absoluteUrl('en', page)}" />
${pageImages}
  </url>`;
    }),
  );
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
