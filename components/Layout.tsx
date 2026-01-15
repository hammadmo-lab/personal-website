import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface LayoutProps {
  children: React.ReactNode;
  activePage: string;
  onNavigate: (page: string) => void;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'radly', label: 'Radly App' },
  { id: 'travel', label: 'Travel' },
  { id: 'books', label: 'Books' },
  { id: 'contact', label: 'Contact' },
];

export const Layout: React.FC<LayoutProps> = ({ children, activePage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Monogram */}
          <button onClick={() => handleNavClick('home')} className="group relative z-50">
            <img
              src="/logo.png"
              alt="Mohamed Hammad Logo"
              className="h-28 w-auto object-contain transition-all duration-300 group-hover:scale-105"
              style={{
                filter: isTransparentHeader
                  ? 'drop-shadow(0 0 10px rgba(255,255,255,1)) drop-shadow(0 0 20px rgba(255,255,255,0.8))'
                  : 'none'
              }}
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm uppercase tracking-widest transition-colors relative group ${activePage === item.id
                  ? (isTransparentHeader ? 'text-white font-bold' : 'text-stone-900 font-bold')
                  : (isTransparentHeader ? 'text-white/70 hover:text-white' : 'text-stone-500 hover:text-stone-900')
                  }`}
              >
                {item.label}
                <span className={`absolute -bottom-2 left-0 h-px transition-all duration-300 ${isTransparentHeader ? 'bg-white' : 'bg-stone-900'
                  } ${activePage === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden z-50 transition-colors ${isTransparentHeader ? 'text-white' : 'text-stone-900'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-stone-100 z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-2xl font-serif text-stone-800 hover:text-stone-500 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      </header>

      {/* Main Content */}
      <main className={`flex-grow ${isDarkPage ? 'pt-0' : 'pt-24'}`}>
        {children}
      </main>

      {/* Footer */}
      {/* Footer */}
      <footer className={`py-16 transition-colors duration-500 ${activePage === 'radly'
        ? 'bg-slate-950 text-slate-400 border-t border-slate-800'
        : 'bg-stone-900 text-stone-400'
        }`}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h4 className={`font-serif text-lg ${activePage === 'radly' ? 'text-white' : 'text-white'}`}>Dr. Mohamed Amin Hammad</h4>
            <p className="text-sm font-light leading-relaxed">
              Radiologist, Founder, Traveler, Author.<br />
              Bringing clarity to medicine and life through technology and exploration.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className={`font-serif text-lg ${activePage === 'radly' ? 'text-white' : 'text-white'}`}>Quick Links</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <button onClick={() => handleNavClick('radly')} className={`text-left transition-colors ${activePage === 'radly' ? 'hover:text-cyan-400' : 'hover:text-white'}`}>Radly App</button>
              <button onClick={() => handleNavClick('travel')} className={`text-left transition-colors ${activePage === 'radly' ? 'hover:text-cyan-400' : 'hover:text-white'}`}>Passport Trails</button>
              <button onClick={() => handleNavClick('books')} className={`text-left transition-colors ${activePage === 'radly' ? 'hover:text-cyan-400' : 'hover:text-white'}`}>Books</button>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className={`font-serif text-lg ${activePage === 'radly' ? 'text-white' : 'text-white'}`}>Connect</h4>
            <div className="flex space-x-4">
              <a href="https://radly.app" target="_blank" rel="noopener noreferrer" className={`transition-colors ${activePage === 'radly' ? 'hover:text-cyan-400' : 'hover:text-white'}`}>Radly</a>
              <a href="https://passporttrails.com" target="_blank" rel="noopener noreferrer" className={`transition-colors ${activePage === 'radly' ? 'hover:text-cyan-400' : 'hover:text-white'}`}>Blog</a>
              <a href="https://www.amazon.com/Unraveling-INFJ-Enigma-Understanding-Compassionate/dp/B0BS1FNS7F" target="_blank" rel="noopener noreferrer" className={`transition-colors ${activePage === 'radly' ? 'hover:text-cyan-400' : 'hover:text-white'}`}>Amazon</a>
            </div>
            <p className="text-xs pt-4 opacity-50">
              © {new Date().getFullYear()} Mohamed Amin Hammad. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
