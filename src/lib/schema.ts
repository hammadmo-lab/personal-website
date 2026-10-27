import { AMAZON_AUTHOR_URL, BOOKS, LINKS, type Locale } from '../i18n';
import { SITE_URL, absoluteUrl, copyFor } from './site';

/** Stable id so every page can point at the same person entity. */
export const PERSON_ID = `${SITE_URL}/#person`;

const RADLY_IOS = 'https://apps.apple.com/us/app/radly/id6754604993';
const RADLY_ANDROID = 'https://play.google.com/store/apps/details?id=com.radly.app';
const TRAILS_IOS = 'https://apps.apple.com/us/app/passport-trails/id6761397513';
const TRAILS_ANDROID = 'https://play.google.com/store/apps/details?id=com.passporttrails.app';

const TRAILER = {
  name: 'The Light Under the Door — Official Book Trailer',
  embedUrl: 'https://www.youtube.com/embed/l21uSBvPd6k',
  contentUrl: 'https://www.youtube.com/watch?v=l21uSBvPd6k',
  thumbnailUrl: 'https://i.ytimg.com/vi/l21uSBvPd6k/hqdefault.jpg',
} as const;

const jobTitle: Record<Locale, string> = {
  en: 'Consultant Radiologist',
  ar: 'استشاري أشعة',
  es: 'Radiólogo consultor',
};

type BookData = (typeof BOOKS)[keyof typeof BOOKS];

const bookEntry = (book: BookData) => ({
  '@type': 'Book',
  name: book.title,
  alternativeHeadline: book.subtitle,
  author: { '@type': 'Person', '@id': PERSON_ID, name: book.author },
  url: book.kindle.url,
  image: `${SITE_URL}${book.cover}`,
  isbn: book.paperback.isbn,
  workExample: [
    {
      '@type': 'Book',
      name: book.title,
      bookFormat: 'https://schema.org/EBook',
      url: book.kindle.url,
      identifier: { '@type': 'PropertyValue', propertyID: 'ASIN', value: book.kindle.asin },
    },
    {
      '@type': 'Book',
      name: book.title,
      bookFormat: 'https://schema.org/Paperback',
      url: book.paperback.url,
      isbn: book.paperback.isbn,
      identifier: { '@type': 'PropertyValue', propertyID: 'ASIN', value: book.paperback.asin },
    },
  ],
});

/** Book entities shared by the person graph and the books page. */
export const bookSchema = () => [
  {
    ...bookEntry(BOOKS.lightUnderDoor),
    description: BOOKS.lightUnderDoor.summary,
    position: 1,
    isPartOf: { '@type': 'BookSeries', name: 'Behind the Door' },
  },
  {
    ...bookEntry(BOOKS.iSwear),
    description: BOOKS.iSwear.description,
  },
];

export const bookTrailerSchema = () => ({
  '@type': 'VideoObject',
  name: TRAILER.name,
  description: BOOKS.lightUnderDoor.summary,
  thumbnailUrl: TRAILER.thumbnailUrl,
  embedUrl: TRAILER.embedUrl,
  contentUrl: TRAILER.contentUrl,
  publisher: { '@id': PERSON_ID },
  about: {
    '@type': 'Book',
    name: BOOKS.lightUnderDoor.title,
    isbn: BOOKS.lightUnderDoor.paperback.isbn,
  },
});

/** Books page graph: both titles, plus the Light Under the Door trailer only. */
export const booksSchema = (url: string) => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': url,
      url,
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: bookSchema().map((book, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: book,
        })),
      },
    },
    bookTrailerSchema(),
  ],
});

const personNode = (locale: Locale, url: string) => ({
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Dr. Mohamed Amin Hammad',
  url,
  image: `${SITE_URL}/images/portrait.jpg`,
  jobTitle: jobTitle[locale],
  description: copyFor(locale).meta.schemaDescription,
  sameAs: [
    LINKS.linkedin,
    LINKS.x,
    LINKS.facebook,
    AMAZON_AUTHOR_URL,
    LINKS.radly,
    LINKS.passportTrails,
    'https://www.youtube.com/@ThisIsHammadMo',
    RADLY_IOS,
    RADLY_ANDROID,
    TRAILS_IOS,
    TRAILS_ANDROID,
  ],
  knowsAbout: ['Radiology', 'Medical Imaging', 'Artificial Intelligence in Healthcare', 'Travel', 'Writing'],
  founder: [
    {
      '@type': 'Organization',
      name: 'Radly',
      url: LINKS.radly,
      description: 'AI-powered radiology reporting assistant',
    },
    {
      '@type': 'Organization',
      name: 'Passport Trails',
      url: LINKS.passportTrails,
      description: 'Arabic travel writing and a planning app for Egyptian and Arab travellers',
    },
  ],
  author: bookSchema(),
});

export const personSchema = (locale: Locale, url: string) => ({
  '@context': 'https://schema.org',
  ...personNode(locale, url),
});

export const radlySchema = (locale: Locale, url: string) => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      '@id': `${LINKS.radly}#app`,
      name: 'Radly',
      applicationCategory: 'MedicalApplication',
      operatingSystem: 'Web, iOS, Android',
      url: LINKS.radly,
      downloadUrl: [RADLY_IOS, RADLY_ANDROID],
      sameAs: [RADLY_IOS, RADLY_ANDROID],
      description: copyFor(locale).pages.radly.description,
      founder: { '@id': PERSON_ID },
      author: { '@id': PERSON_ID },
    },
    personNode(locale, absoluteUrl(locale, 'home')),
    {
      '@type': 'WebPage',
      '@id': url,
      url,
      mainEntity: { '@id': `${LINKS.radly}#app` },
    },
  ],
});

export const travelSchema = (locale: Locale, url: string) => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Blog',
      '@id': `${LINKS.passportTrails}#blog`,
      name: 'Passport Trails',
      url: LINKS.passportTrails,
      inLanguage: 'ar',
      description: copyFor(locale).pages.travel.description,
      author: { '@id': PERSON_ID },
    },
    {
      '@type': 'MobileApplication',
      name: 'Passport Trails',
      operatingSystem: 'iOS, Android',
      applicationCategory: 'TravelApplication',
      url: LINKS.passportTrails,
      downloadUrl: [TRAILS_IOS, TRAILS_ANDROID],
      sameAs: [TRAILS_IOS, TRAILS_ANDROID],
      author: { '@id': PERSON_ID },
    },
    personNode(locale, absoluteUrl(locale, 'home')),
    {
      '@type': 'WebPage',
      '@id': url,
      url,
      about: { '@id': `${LINKS.passportTrails}#blog` },
    },
  ],
});

export const aboutSchema = (locale: Locale, url: string) => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfilePage',
      '@id': url,
      url,
      name: copyFor(locale).pages.about.title,
      description: copyFor(locale).pages.about.description,
      mainEntity: { '@id': PERSON_ID },
    },
    personNode(locale, absoluteUrl(locale, 'home')),
  ],
});

export const contactSchema = (locale: Locale, url: string) => ({
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': url,
  url,
  name: copyFor(locale).pages.contact.title,
  description: copyFor(locale).pages.contact.description,
  mainEntity: { '@id': PERSON_ID },
});
