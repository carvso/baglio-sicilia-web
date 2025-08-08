
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    // Non fare scroll se stiamo navigando a un anchor link
    if (hash) {
      console.log('🔗 Navigazione con hash, skip scroll to top:', hash);
      return;
    }

    // Scroll immediato
    window.scrollTo(0, 0);
    
    // Backup scroll con delay per gestire rendering asincroni
    const scrollTimeout = setTimeout(() => {
      if (window.scrollY > 0) {
        console.log('🔄 Scroll backup eseguito, posizione era:', window.scrollY);
        window.scrollTo(0, 0);
      }
    }, 100);

    console.log('📍 Scroll to top eseguito per:', pathname);

    return () => clearTimeout(scrollTimeout);
  }, [pathname, hash]);
};
