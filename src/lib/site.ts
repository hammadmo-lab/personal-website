import { DEFAULT_LOCALE, LOCALES, translations, type Locale, type Page, getPageUrl } from '../i18n';

export const SITE_URL = 'https://mohamedhammad.com';

/** Static paths for a page in every locale: `/`, `/ar/`, `/es/` (and `/about/`, `/ar/about/`, …). */
export const localePaths = () =>
  LOCALES.map((locale) => ({
    params: { lang: locale === DEFAULT_LOCALE ? undefined : locale },
    props: { locale },
  }));

export const copyFor = (locale: Locale) => translations[locale];

export const absoluteUrl = (locale: Locale, page: Page) => `${SITE_URL}${getPageUrl(locale, page)}`;
