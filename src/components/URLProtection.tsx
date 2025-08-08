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
        
        // Solo per parametri realmente problematici
        if (currentURL.includes('?p=') || currentURL.includes('%3Fp%3D')) {
          console.warn('🚨 URL problematico rilevato');
          const cleanPath = window.location.pathname;
          window.history.replaceState(null, '', cleanPath);
          console.log('✅ URL pulito:', cleanPath);
        }
      } catch (error) {
        console.error('Errore in URLProtection:', error);
      }
    };

    // Pulizia una tantum
    cleanURL();
  }, []);

  return <>{children}</>;
};

export default URLProtection; 