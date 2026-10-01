# Dr. Mohamed Amin Hammad: personal website

Source for [mohamedhammad.com](https://mohamedhammad.com): radiologist, founder of Radly, author and traveller.

## Stack

- [Astro](https://astro.build) static site, one real URL per page and language
- English (`/`), Egyptian Arabic (`/ar/`, right-to-left) and Spanish (`/es/`)
- Self-hosted fonts: Bodoni Moda, Hanken Grotesk, Amiri, Noto Naskh Arabic
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

"Night Edition": a dark, cinematic base (`#0F0A0B`) with cream type (`#F5EEE6`), gold details (`#D6AD72`)
and a burgundy glow (`#7A212D`). Long reading sections switch to cream bands (`#F3EBE0`).
Headlines are Bodoni Moda (Amiri in Arabic), body text Hanken Grotesk (Noto Naskh Arabic).
The logo is "Mohamed *Hammad*" with a gold italic surname and an "mh" colophon mark.

## Run locally

Requires Node 20 or newer.

```bash
npm install
npm run dev      # http://localhost:4321
npm run check    # type check
npm run build    # production build into dist/
```

© Mohamed Amin Hammad. All rights reserved.
