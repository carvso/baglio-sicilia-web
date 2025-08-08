
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Non fare scroll se stiamo navigando a un anchor link
    if (hash) {
      console.log('🔗 Hash navigation detected, skipping scroll to top:', hash);
      return;
    }

    console.log('🔄 Starting scroll to top for:', pathname);

    // Forza scroll immediato
    const scrollToTop = () => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      console.log('✅ Forced scroll to top completed, current position:', window.scrollY);
    };

    // Scroll immediato
    scrollToTop();

    // Multipli tentativi per garantire il funzionamento
    const timeouts = [
      setTimeout(scrollToTop, 50),
      setTimeout(scrollToTop, 150),
      setTimeout(scrollToTop, 300)
    ];

    // Pulizia timeout
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [pathname]);
};
