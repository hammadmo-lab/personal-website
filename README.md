# Dr. Mohamed Amin Hammad: personal website

Source for [mohamedhammad.com](https://mohamedhammad.com): radiologist, founder of Radly, author and traveller.

## Stack

- [Astro](https://astro.build) static site, one real URL per page and language
- English (`/`), Egyptian Arabic (`/ar/`, right-to-left) and Spanish (`/es/`)
- Self-hosted fonts: Newsreader, Instrument Sans, Amiri, Noto Naskh Arabic
- Deployed on Cloudflare Pages (build `npm run build`, output `dist`)

## Where things live

| What | Where |
| --- | --- |
| All page text, in every language | `src/i18n.ts` |
| Pages | `src/pages/[...lang]/` (`index`, `about`, `radly`, `travel`, `books`, `contact`) |
| Header, footer, logo | `src/components/` |
| Colours, type scale, spacing | `src/styles/global.css` |
| Structured data (Person, Books) | `src/lib/schema.ts` |
| Sitemap (generated) | `src/pages/sitemap.xml.ts` |
| Images | `public/images/`, book covers in `public/` |

## Brand

"Editorial", burgundy edition: page `#F7F6F2`, ink `#1B1C1A`, burgundy `#5A2126`
(the title colour of *I Swear I'll Find You*), butterfly gold `#CB9E6D`.
The logo is a lowercase italic "mh" in an oval, like a publisher's colophon.

## Run locally

Requires Node 20 or newer.

```bash
npm install
npm run dev      # http://localhost:4321
npm run check    # type check
npm run build    # production build into dist/
```

© Mohamed Amin Hammad. All rights reserved.
