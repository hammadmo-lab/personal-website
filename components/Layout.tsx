import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { LOCALES, Locale, Translation, localeConfig } from '../i18n';

interface LayoutProps {
  children: React.ReactNode;
  activePage: string;
  onNavigate: (page: string) => void;
  locale: Locale;
  copy: Translation;
  onLocaleChange: (locale: Locale) => void;
}

const NAV_ITEMS = [
  { id: 'home', labelKey: 'home' },
  { id: 'about', labelKey: 'about' },
  { id: 'radly', labelKey: 'radly' },
  { id: 'travel', labelKey: 'travel' },
  { id: 'books', labelKey: 'books' },
  { id: 'contact', labelKey: 'contact' },
] as const;

export const Layout: React.FC<LayoutProps> = ({
  children,
  activePage,
  onNavigate,
  locale,
  copy,
  onLocaleChange,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isRtl = localeConfig[locale].dir === 'rtl';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const isDarkPage = ['radly', 'gallery'].includes(activePage);
  const isTransparentHeader = !isScrolled && isDarkPage;

  const navColor = (isActive: boolean) => {
    if (isActive) return isTransparentHeader ? 'text-white font-bold' : 'text-stone-900 font-bold';
    return isTransparentHeader ? 'text-white/70 hover:text-white' : 'text-stone-500 hover:text-stone-900';
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50" dir={localeConfig[locale].dir}>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <button onClick={() => handleNavClick('home')} className="group relative z-50">
            <img
              src="/logo.png"
              alt="Mohamed Hammad Logo"
              className="h-28 w-auto object-contain transition-all duration-300 group-hover:scale-105"
              style={{
                filter: isTransparentHeader
                  ? 'drop-shadow(0 0 10px rgba(255,255,255,1)) drop-shadow(0 0 20px rgba(255,255,255,0.8))'
                  : 'none',
              }}
            />
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm uppercase tracking-widest transition-colors relative group ${navColor(activePage === item.id)}`}
              >
                {copy.nav[item.labelKey]}
                <span className={`absolute -bottom-2 left-0 h-px transition-all duration-300 ${isTransparentHeader ? 'bg-white' : 'bg-stone-900'
                  } ${activePage === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
              </button>
            ))}
            <div className={`flex items-center gap-1 border px-2 py-1 ${isTransparentHeader ? 'border-white/30 bg-white/10' : 'border-stone-200 bg-white/70'}`}>
              {LOCALES.map((item) => (
                <button
                  key={item}
                  onClick={() => onLocaleChange(item)}
                  className={`px-2 py-1 text-xs uppercase tracking-wider transition-colors ${locale === item
                    ? (isTransparentHeader ? 'text-white font-bold' : 'text-stone-900 font-bold')
                    : (isTransparentHeader ? 'text-white/60 hover:text-white' : 'text-stone-500 hover:text-stone-900')
                    }`}
                  aria-label={`Switch language to ${localeConfig[item].label}`}
                >
                  {localeConfig[item].shortLabel}
                </button>
              ))}
            </div>
          </nav>

          <button
            className={`lg:hidden z-50 transition-colors ${isTransparentHeader ? 'text-white' : 'text-stone-900'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
          </button>
        </div>

        <div className={`fixed inset-0 bg-stone-100 z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-2xl font-serif text-stone-800 hover:text-stone-500 transition-colors"
            >
              {copy.nav[item.labelKey]}
            </button>
          ))}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4 px-6">
            {LOCALES.map((item) => (
              <button
                key={item}
                onClick={() => {
                  onLocaleChange(item);
                  setIsMobileMenuOpen(false);
                }}
                className={`px-3 py-2 text-sm uppercase tracking-wider border transition-colors ${locale === item
                  ? 'border-stone-900 text-stone-900'
                  : 'border-stone-300 text-stone-500'
                  }`}
              >
                {localeConfig[item].label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className={`flex-grow ${isDarkPage ? 'pt-0' : 'pt-24'}`}>
        {children}
      </main>

      <footer className={`py-16 transition-colors duration-500 ${activePage === 'radly'
        ? 'bg-slate-950 text-slate-400 border-t border-slate-800'
        : 'bg-stone-900 text-stone-400'
        }`}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-white">Dr. Mohamed Amin Hammad</h4>
            <p className="text-sm font-light leading-relaxed whitespace-pre-line">{copy.footer.bio}</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-white">{copy.footer.quickLinks}</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <button onClick={() => handleNavClick('radly')} className={`${isRtl ? 'text-right' : 'text-left'} transition-colors ${activePage === 'radly' ? 'hover:text-cyan-400' : 'hover:text-white'}`}>{copy.nav.radly}</button>
              <button onClick={() => handleNavClick('travel')} className={`${isRtl ? 'text-right' : 'text-left'} transition-colors ${activePage === 'radly' ? 'hover:text-cyan-400' : 'hover:text-white'}`}>Passport Trails</button>
              <button onClick={() => handleNavClick('books')} className={`${isRtl ? 'text-right' : 'text-left'} transition-colors ${activePage === 'radly' ? 'hover:text-cyan-400' : 'hover:text-white'}`}>{copy.nav.books}</button>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-white">{copy.footer.connect}</h4>
            <div className="flex gap-4">
              <a href="https://radly.app" target="_blank" rel="noopener noreferrer" className={`transition-colors ${activePage === 'radly' ? 'hover:text-cyan-400' : 'hover:text-white'}`}>Radly</a>
              <a href="https://passporttrails.com" target="_blank" rel="noopener noreferrer" className={`transition-colors ${activePage === 'radly' ? 'hover:text-cyan-400' : 'hover:text-white'}`}>Blog</a>
              <a href="https://www.amazon.com/Unraveling-INFJ-Enigma-Understanding-Compassionate/dp/B0BS1FNS7F" target="_blank" rel="noopener noreferrer" className={`transition-colors ${activePage === 'radly' ? 'hover:text-cyan-400' : 'hover:text-white'}`}>Amazon</a>
            </div>
            <p className="text-xs pt-4 opacity-50">
              © {new Date().getFullYear()} Mohamed Amin Hammad. {copy.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
