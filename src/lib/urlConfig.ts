// Configurazione per gestire i parametri URL e evitare errori URI Too Long

export const URL_CONFIG = {
  // Limite massimo per la lunghezza dell'URL
  MAX_URL_LENGTH: 2048,
  
  // Parametri che non devono essere inclusi nell'URL
  EXCLUDED_PARAMS: [
    'structuredData',
    'jsonData',
    'schemaData',
    'metaData',
    'p' // Escludi il parametro p che causa il loop
  ],
  
  // Funzione per pulire l'URL dai parametri problematici
  cleanURL: (url: string): string => {
    try {
      const urlObj = new URL(url);
      const cleanParams = new URLSearchParams();
      
      // Mantieni solo i parametri essenziali
      for (const [key, value] of urlObj.searchParams.entries()) {
        if (!URL_CONFIG.EXCLUDED_PARAMS.includes(key)) {
          cleanParams.set(key, value);
        }
      }
      
      urlObj.search = cleanParams.toString();
      return urlObj.toString();
    } catch (error) {
      console.warn('Errore nella pulizia URL:', error);
      return url;
    }
  },
  
  // Funzione per verificare se l'URL è troppo lungo
  isURLTooLong: (url: string): boolean => {
    return url.length > URL_CONFIG.MAX_URL_LENGTH;
  },
  
  // Funzione per gestire il refresh della pagina
  handlePageRefresh: () => {
    try {
      const currentURL = window.location.href;
      
      // Controlla se ci sono parametri p annidati (loop infinito)
      if (currentURL.includes('?p=') || currentURL.includes('%3Fp%3D') || currentURL.includes('%252F%253Fp%253D')) {
        console.warn('🚨 Loop infinito di parametri p rilevato! Pulizia immediata...');
        
        // Estrai solo il pathname e ricostruisci l'URL pulito
        const pathname = window.location.pathname;
        const cleanURL = window.location.origin + pathname;
        
        // Sostituisci immediatamente l'URL
        window.history.replaceState(null, '', cleanURL);
        console.log('✅ URL pulito:', cleanURL);
        return;
      }
      
      if (URL_CONFIG.isURLTooLong(currentURL)) {
        console.warn('URL troppo lungo rilevato, pulizia in corso...');
        const cleanURL = URL_CONFIG.cleanURL(currentURL);
        
        if (cleanURL !== currentURL) {
          window.history.replaceState(null, '', cleanURL);
          console.log('URL pulito:', cleanURL);
        }
      }
    } catch (error) {
      console.error('Errore nella gestione del refresh:', error);
    }
  },
  
  // Funzione per pulire completamente l'URL da tutti i parametri problematici
  emergencyClean: () => {
    try {
      const currentURL = window.location.href;
      const pathname = window.location.pathname;
      const cleanURL = window.location.origin + pathname;
      
      if (currentURL !== cleanURL) {
        console.warn('🚨 Pulizia di emergenza URL in corso...');
        window.history.replaceState(null, '', cleanURL);
        console.log('✅ URL di emergenza pulito:', cleanURL);
      }
    } catch (error) {
      console.error('Errore nella pulizia di emergenza:', error);
    }
  }
};

// Intercetta il refresh della pagina
if (typeof window !== 'undefined') {
  // Pulizia immediata all'avvio
  URL_CONFIG.emergencyClean();
  
  window.addEventListener('beforeunload', () => {
    URL_CONFIG.handlePageRefresh();
  });
  
  // Gestisci anche il popstate per la navigazione del browser
  window.addEventListener('popstate', () => {
    setTimeout(() => {
      URL_CONFIG.handlePageRefresh();
    }, 100);
  });
  
  // Intercetta anche i cambiamenti di hash
  window.addEventListener('hashchange', () => {
    setTimeout(() => {
      URL_CONFIG.handlePageRefresh();
    }, 100);
  });
} 