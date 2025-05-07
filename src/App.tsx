
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Ristorante from "./pages/Ristorante";
import Eventi from "./pages/Eventi";
import Gallery from "./pages/Gallery";
import Contatti from "./pages/Contatti";
import NotFound from "./pages/NotFound";
import BaglioAbbate from "./pages/BaglioAbbate";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ristorante" element={<Ristorante />} />
          <Route path="/eventi" element={<Eventi />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/baglio-abbate" element={<BaglioAbbate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
