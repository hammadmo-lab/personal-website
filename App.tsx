import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import {
  Home,
  About,
  Radly,
  Travel,
  Books,
  Gallery,
  Contact
} from './components/Sections';

const App: React.FC = () => {
  // Simple state-based router
  const [activePage, setActivePage] = useState('home');

  // Handle browser back/forward
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.page) {
        setActivePage(event.state.page);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (pageId: string) => {
    setActivePage(pageId);
    window.history.pushState({ page: pageId }, '', `#${pageId}`);
    window.scrollTo(0, 0);
  };

  // Initial load from hash
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) setActivePage(hash);
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <Home onNavigate={handleNavigate} />;
      case 'about': return <About />;
      case 'radly': return <Radly />;
      case 'travel': return <Travel />;
      case 'books': return <Books />;
      case 'gallery': return <Gallery />;
      case 'contact': return <Contact />;
      default: return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <Layout activePage={activePage} onNavigate={handleNavigate}>
      {renderPage()}
    </Layout>
  );
};

export default App;
