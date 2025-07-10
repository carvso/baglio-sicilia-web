import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface URLProtectionProps {
  children: React.ReactNode;
}

const URLProtection: React.FC<URLProtectionProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const cleanURL = () => {
      try {
        const currentURL = window.location.href;
        
        // Controlla se ci sono parametri problematici
        if (currentURL.includes('?p=') || 
            currentURL.includes('%3Fp%3D') || 
            currentURL.includes('%252F%253Fp%253D') ||
            currentURL.includes('%2525252F%2525253Fp%2525253D')) {
          
          console.warn('🚨 URL problematico rilevato in URLProtection!');
          
          // Estrai solo il pathname
          const pathname = window.location.pathname;
          const cleanPath = pathname === '/' ? '/' : pathname;
          
          // Se il pathname è diverso dalla location corrente, naviga
          if (location.pathname !== cleanPath) {
            console.log('🔄 Navigazione a URL pulito:', cleanPath);
            navigate(cleanPath, { replace: true });
          } else {
            // Altrimenti, pulisci solo l'URL
            window.history.replaceState(null, '', cleanPath);
            console.log('✅ URL pulito:', cleanPath);
          }
        }
      } catch (error) {
        console.error('Errore in URLProtection:', error);
      }
    };

    // Esegui pulizia immediata
    cleanURL();

    // Aggiungi listener per intercettare cambiamenti
    const handlePopState = () => {
      setTimeout(cleanURL, 50);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [location.pathname, navigate]);

  return <>{children}</>;
};

export default URLProtection; 