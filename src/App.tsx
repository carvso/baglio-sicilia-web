
import React from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { PaletteProvider } from "@/components/PaletteContext";

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
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light">
        <PaletteProvider defaultPalette="default">
          <TooltipProvider>
            <Sonner />
            <BrowserRouter>
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
            </BrowserRouter>
          </TooltipProvider>
        </PaletteProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
