
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
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import CookiePolicy from './pages/CookiePolicy';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
});

const ScrollToTopHandler = () => { 
  useScrollToTop(); 
  return null; 
};

const App = () => {
  useEffect(() => {
    console.log('🎯 App component mounted successfully!');
    console.log('🌍 Current location:', window.location.href);
    console.log('⚙️ Base URL:', import.meta.env.BASE_URL);
    console.log('🔧 Mode:', import.meta.env.MODE);
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
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/termini-e-condizioni" element={<TermsAndConditions />} />
                    <Route path="/cookie-policy" element={<CookiePolicy />} />
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
