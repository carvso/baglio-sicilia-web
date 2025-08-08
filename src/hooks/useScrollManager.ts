import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook avanzato per gestire lo scroll durante la navigazione.
 * Gestisce sia React Router che potenziali migrazioni future a Next.js.
 */
export const useScrollManager = () => {
  const { pathname, hash, search } = useLocation();

  useEffect(() => {
    // Funzione per gestire lo scroll
    const handleScroll = () => {
      // Se c'è un hash, lascia che il browser gestisca l'anchor link
      if (hash) {
        console.log('🔗 Hash detected, letting browser handle scroll:', hash);
        // Piccolo delay per assicurarsi che l'elemento sia renderizzato
        setTimeout(() => {
          const element = document.getElementById(hash.slice(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            console.log('✅ Scrolled to anchor:', hash);
          }
        }, 50);
        return;
      }

      // Per navigazione normale, scroll to top
      console.log('📍 Normal navigation detected, scrolling to top');
      
      // Scroll immediato
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      
      // Verifica e retry se necessario
      setTimeout(() => {
        if (window.scrollY > 10) {
          console.log('🔄 Retry scroll to top, current position:', window.scrollY);
          window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        }
      }, 100);

      // Ultimo tentativo dopo render completo
      setTimeout(() => {
        if (window.scrollY > 10) {
          console.log('🔄 Final scroll to top attempt, current position:', window.scrollY);
          window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        }
      }, 300);
    };

    // Esegui scroll management
    handleScroll();

  }, [pathname, hash, search]);

  return null;
};

/**
 * Hook compatibile con Next.js per futuri upgrade
 */
export const useScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Compatibilità Next.js: usa router.events se disponibile
    if (typeof window !== 'undefined' && (window as any).next) {
      console.log('🔄 Next.js router detected');
      // Implementazione Next.js se necessaria in futuro
      return;
    }

    // Implementazione React Router
    if (!location.hash) {
      const scrollToTop = () => {
        window.scrollTo(0, 0);
        console.log('📍 React Router scroll to top:', location.pathname);
      };

      // Immediato
      scrollToTop();
      
      // Backup con delay
      const timeout = setTimeout(scrollToTop, 50);
      return () => clearTimeout(timeout);
    }
  }, [location.pathname, location.hash]);
};