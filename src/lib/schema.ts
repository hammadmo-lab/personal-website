import { AMAZON_AUTHOR_URL, BOOKS, LINKS, type Locale } from '../i18n';
import { SITE_URL, copyFor } from './site';

const jobTitle: Record<Locale, string> = {
  en: 'Consultant Radiologist',
  ar: 'استشاري أشعة',
  es: 'Radiólogo consultor',
};

const bookEntry = (book: (typeof BOOKS)[keyof typeof BOOKS]) => ({
  '@type': 'Book',
  name: book.title,
  alternativeHeadline: book.subtitle,
  author: { '@type': 'Person', name: book.author },
  url: book.kindle.url,
  image: `${SITE_URL}${book.cover}`,
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
      identifier: { '@type': 'PropertyValue', propertyID: 'ASIN', value: book.paperback.asin },
    },
  ],
});

export const bookSchema = () => [
  {
    ...bookEntry(BOOKS.lightUnderDoor),
    description: BOOKS.lightUnderDoor.summary,
    position: 1,
    isPartOf: { '@type': 'BookSeries', name: 'Behind the Door' },
  },
  bookEntry(BOOKS.iSwear),
];

export const personSchema = (locale: Locale, url: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dr. Mohamed Amin Hammad',
  url,
  image: `${SITE_URL}/images/portrait.jpg`,
  jobTitle: jobTitle[locale],
  description: copyFor(locale).meta.schemaDescription,
  sameAs: [LINKS.linkedin, LINKS.x, LINKS.facebook, AMAZON_AUTHOR_URL],
  knowsAbout: ['Radiology', 'Medical Imaging', 'Artificial Intelligence in Healthcare', 'Travel', 'Writing'],
  founder: {
    '@type': 'Organization',
    name: 'Radly',
    url: LINKS.radly,
    description: 'AI-powered radiology reporting assistant',
  },
  author: bookSchema(),
});
