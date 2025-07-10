import { useEffect } from 'react';
import { getStructuredData } from '@/lib/structuredData';

// Hook per gestire i dati strutturati in modo ottimizzato
export const useStructuredData = (page: string) => {
  useEffect(() => {
    try {
      // Ottieni i dati strutturati per la pagina
      const structuredData = getStructuredData(page);
      
      // Crea lo script element
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      
      // Rimuovi script esistenti per evitare duplicati
      const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
      existingScripts.forEach(existingScript => {
        if (existingScript.textContent?.includes('"@type"')) {
          existingScript.remove();
        }
      });
      
      // Aggiungi il nuovo script
      document.head.appendChild(script);
      
      // Cleanup function
      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    } catch (error) {
      console.error('Errore nell\'aggiunta dei dati strutturati:', error);
    }
  }, [page]);
};

// Hook per gestire i meta tag in modo ottimizzato
export const useMetaTags = (metaData: {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  ogImage: string;
}) => {
  useEffect(() => {
    try {
      // Aggiorna il titolo
      document.title = metaData.title;
      
      // Aggiorna i meta tag
      const updateMetaTag = (name: string, content: string) => {
        let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
        if (!meta) {
          meta = document.createElement('meta');
          meta.name = name;
          document.head.appendChild(meta);
        }
        meta.content = content;
      };
      
      // Aggiorna i meta tag Open Graph
      const updateOGMetaTag = (property: string, content: string) => {
        let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('property', property);
          document.head.appendChild(meta);
        }
        meta.content = content;
      };
      
      // Aggiorna i meta tag
      updateMetaTag('description', metaData.description);
      updateMetaTag('keywords', metaData.keywords);
      
      // Aggiorna i meta tag Open Graph
      updateOGMetaTag('og:title', metaData.ogTitle);
      updateOGMetaTag('og:description', metaData.ogDescription);
      updateOGMetaTag('og:url', metaData.ogUrl);
      updateOGMetaTag('og:image', metaData.ogImage);
      updateOGMetaTag('og:type', 'website');
      
      // Aggiorna il link canonico
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = metaData.canonical;
      
    } catch (error) {
      console.error('Errore nell\'aggiornamento dei meta tag:', error);
    }
  }, [metaData]);
}; 