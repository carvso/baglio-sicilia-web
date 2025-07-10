
import React, { useEffect } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { PaletteProvider } from "@/components/PaletteContext";
import { useScrollToTop } from './hooks/useScrollToTop';
import InstagramFloatingButton from './components/InstagramFloatingButton';
import URLProtection from './components/URLProtection';
import { URL_CONFIG } from './lib/urlConfig';

// Import pages
import Index from "./pages/Index";
import ChiSiamo from "./pages/ChiSiamo";
import Eventi from "./pages/Eventi";
import EventiPrivati from "./pages/EventiPrivati";
import Matrimoni from "./pages/Matrimoni";
import EventiAziendali from "./pages/EventiAziendali";
import Gallery from "./pages/Gallery";
import Contatti from "./pages/Contatti";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
});

const ScrollToTopHandler = () => { useScrollToTop(); return null; };

const App = () => {
  useEffect(() => {
    console.log('🎯 App component mounted successfully!');
    console.log('🌍 Current location:', window.location.href);
    console.log('⚙️ Base URL:', import.meta.env.BASE_URL);
    console.log('🔧 Mode:', import.meta.env.MODE);
    
    // Gestisci il problema URI Too Long e pulisci URL problematici
    URL_CONFIG.handlePageRefresh();
    
    // Pulisci URL con parametri problematici
    const cleanURL = () => {
      try {
        const currentURL = window.location.href;
        
        // Se l'URL contiene parametri p annidati, puliscilo
        if (currentURL.includes('?p=') || currentURL.includes('%3Fp%3D')) {
          console.warn('URL problematico rilevato, pulizia in corso...');
          
          // Estrai solo il pathname senza parametri
          const cleanPath = window.location.pathname;
          const newURL = window.location.origin + cleanPath;
          
          // Sostituisci l'URL senza ricaricare la pagina
          window.history.replaceState(null, '', newURL);
          console.log('URL pulito:', newURL);
        }
      } catch (error) {
        console.error('Errore nella pulizia URL:', error);
      }
    };
    
    // Esegui la pulizia all'avvio
    cleanURL();
    
    // Aggiungi listener per intercettare cambiamenti URL
    const handlePopState = () => {
      setTimeout(cleanURL, 100);
    };
    
    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  console.log('🏗️ App component rendering...');

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light">
        <PaletteProvider defaultPalette="default">
          <TooltipProvider>
            <Sonner />
            <BrowserRouter basename={import.meta.env.BASE_URL}>
              <URLProtection>
                <ScrollToTopHandler />
                <div className="min-h-screen bg-background transition-colors duration-300">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/chi-siamo" element={<ChiSiamo />} />
                    <Route path="/eventi" element={<Eventi />} />
                    <Route path="/eventi-privati" element={<EventiPrivati />} />
                    <Route path="/matrimoni" element={<Matrimoni />} />
                    <Route path="/eventi-aziendali" element={<EventiAziendali />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contatti" element={<Contatti />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </div>
              </URLProtection>
            </BrowserRouter>
          </TooltipProvider>
        </PaletteProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
