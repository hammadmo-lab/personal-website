import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import {
  Home,
  About,
  Radly,
  Travel,
  Books,
  Gallery,
  Contact,
} from './components/Sections';
import {
  DEFAULT_LOCALE,
  LOCALES,
  Locale,
  getLocaleFromPath,
  getLocalePath,
  getPageUrl,
  isLocale,
  localeConfig,
  translations,
} from './i18n';

const BASE_URL = 'https://mohamedhammad.com';

const setMeta = (selector: string, attribute: string, value: string) => {
  const element = document.querySelector(selector);
  if (element) element.setAttribute(attribute, value);
};

const updateAlternateLinks = (activePage: string) => {
  document.querySelectorAll('link[data-locale-alternate="true"]').forEach((link) => link.remove());

  LOCALES.forEach((item) => {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = localeConfig[item].lang;
    link.href = `${BASE_URL}${getPageUrl(item, activePage)}`;
    link.dataset.localeAlternate = 'true';
    document.head.appendChild(link);
  });

  const xDefault = document.createElement('link');
  xDefault.rel = 'alternate';
  xDefault.hreflang = 'x-default';
  xDefault.href = `${BASE_URL}${getPageUrl(DEFAULT_LOCALE, activePage)}`;
  xDefault.dataset.localeAlternate = 'true';
  document.head.appendChild(xDefault);
};

const updateStructuredData = (locale: Locale, activePage: string) => {
  const script = document.querySelector<HTMLScriptElement>('script[type="application/ld+json"]');
  if (!script) return;

  const copy = translations[locale];
  const url = `${BASE_URL}${getPageUrl(locale, activePage)}`;
  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dr. Mohamed Amin Hammad',
    url,
    image: `${BASE_URL}/assets/hero-portrait.jpg`,
    jobTitle: locale === 'ar' ? 'استشاري أشعة' : locale === 'es' ? 'Radiólogo consultor' : 'Consultant Radiologist',
    description: copy.meta.schemaDescription,
    sameAs: [
      'https://www.linkedin.com/in/hammadmo',
      'https://twitter.com/hammadmo',
      'https://www.facebook.com/hammadmo',
      'https://www.amazon.com/stores/Mohamed-Amin-Hammad/author/B0DLCXNQND',
    ],
    knowsAbout: [
      'Radiology',
      'Medical Imaging',
      'Artificial Intelligence in Healthcare',
      'Travel',
      'Writing',
    ],
    founder: {
      '@type': 'Organization',
      name: 'Radly',
      url: 'https://radly.app',
      description: 'AI-powered radiology platform',
    },
    author: [
      {
        '@type': 'Book',
        name: 'Unraveling the INFJ Enigma',
        url: 'https://www.amazon.com/stores/Mohamed-Amin-Hammad/author/B0DLCXNQND',
      },
      {
        '@type': 'Book',
        name: 'Finding Your Soulmate',
        url: 'https://www.amazon.com/stores/Mohamed-Amin-Hammad/author/B0DLCXNQND',
      },
    ],
  });
};

const App: React.FC = () => {
  const [locale, setLocale] = useState<Locale>(() => getLocaleFromPath(window.location.pathname));
  const [activePage, setActivePage] = useState('home');
  const copy = translations[locale];

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const nextLocale = getLocaleFromPath(window.location.pathname);
      const nextPage = event.state?.page || window.location.hash.replace('#', '') || 'home';
      setLocale(nextLocale);
      setActivePage(nextPage);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const pathLocale = getLocaleFromPath(window.location.pathname);
    const hash = window.location.hash.replace('#', '');
    setLocale(pathLocale);
    if (hash) setActivePage(hash);
  }, []);

  useEffect(() => {
    const config = localeConfig[locale];
    const canonicalUrl = `${BASE_URL}${getPageUrl(locale, activePage)}`;

    document.documentElement.lang = config.lang;
    document.documentElement.dir = config.dir;
    document.title = copy.meta.title;

    setMeta('meta[name="title"]', 'content', copy.meta.title);
    setMeta('meta[name="description"]', 'content', copy.meta.description);
    setMeta('meta[name="keywords"]', 'content', copy.meta.keywords);
    setMeta('link[rel="canonical"]', 'href', canonicalUrl);
    setMeta('meta[property="og:url"]', 'content', canonicalUrl);
    setMeta('meta[property="og:title"]', 'content', copy.meta.title);
    setMeta('meta[property="og:description"]', 'content', copy.meta.description);
    setMeta('meta[property="og:image:alt"]', 'content', copy.meta.ogImageAlt);
    setMeta('meta[property="og:locale"]', 'content', config.ogLocale);
    setMeta('meta[property="twitter:url"]', 'content', canonicalUrl);
    setMeta('meta[property="twitter:title"]', 'content', copy.meta.title);
    setMeta('meta[property="twitter:description"]', 'content', copy.meta.description);

    updateAlternateLinks(activePage);
    updateStructuredData(locale, activePage);
  }, [activePage, copy, locale]);

  const handleNavigate = (pageId: string) => {
    setActivePage(pageId);
    window.history.pushState({ page: pageId, locale }, '', getPageUrl(locale, pageId));
    window.scrollTo(0, 0);
  };

  const handleLocaleChange = (nextLocale: Locale) => {
    if (!isLocale(nextLocale)) return;
    setLocale(nextLocale);
    window.history.pushState(
      { page: activePage, locale: nextLocale },
      '',
      `${getLocalePath(nextLocale)}#${activePage}`,
    );
  };

  const sectionProps = {
    locale,
    copy,
    isRtl: localeConfig[locale].dir === 'rtl',
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <Home {...sectionProps} onNavigate={handleNavigate} />;
      case 'about': return <About {...sectionProps} />;
      case 'radly': return <Radly {...sectionProps} />;
      case 'travel': return <Travel {...sectionProps} />;
      case 'books': return <Books {...sectionProps} />;
      case 'gallery': return <Gallery {...sectionProps} />;
      case 'contact': return <Contact {...sectionProps} />;
      default: return <Home {...sectionProps} onNavigate={handleNavigate} />;
    }
  };

  return (
    <Layout
      activePage={activePage}
      onNavigate={handleNavigate}
      locale={locale}
      copy={copy}
      onLocaleChange={handleLocaleChange}
    >
      {renderPage()}
    </Layout>
  );
};

export default App;
