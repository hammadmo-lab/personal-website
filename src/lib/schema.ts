import { AMAZON_AUTHOR_URL, BOOKS, LINKS, type Locale } from '../i18n';
import { SITE_URL, copyFor } from './site';

const jobTitle: Record<Locale, string> = {
  en: 'Consultant Radiologist',
  ar: 'استشاري أشعة',
  es: 'Radiólogo consultor',
};

export const bookSchema = () => [
  {
    '@type': 'Book',
    name: BOOKS.iSwear.title,
    alternativeHeadline: BOOKS.iSwear.subtitle,
    author: { '@type': 'Person', name: BOOKS.iSwear.author },
    url: BOOKS.iSwear.kindle.url,
    image: `${SITE_URL}${BOOKS.iSwear.cover}`,
    workExample: [
      {
        '@type': 'Book',
        name: BOOKS.iSwear.title,
        bookFormat: 'https://schema.org/EBook',
        url: BOOKS.iSwear.kindle.url,
        identifier: { '@type': 'PropertyValue', propertyID: 'ASIN', value: BOOKS.iSwear.kindle.asin },
      },
      {
        '@type': 'Book',
        name: BOOKS.iSwear.title,
        bookFormat: 'https://schema.org/Paperback',
        url: BOOKS.iSwear.paperback.url,
        identifier: { '@type': 'PropertyValue', propertyID: 'ASIN', value: BOOKS.iSwear.paperback.asin },
      },
    ],
  },
  {
    '@type': 'Book',
    name: BOOKS.infj.title,
    url: AMAZON_AUTHOR_URL,
  },
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
