import React, { useState } from 'react';
import { Instagram, Camera, Eye, Heart, Share2 } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { useIsMobile } from '@/hooks/use-mobile';
import Layout from '@/components/Layout';
import ImageWithOverlay from '@/components/ImageWithOverlay';
import SectionTitle from '@/components/SectionTitle';
import GalleryGrid from '@/components/GalleryGrid';
import CTAButton from '@/components/CTAButton';
import { EventCalendar } from '@/components/EventCalendar';
import DividerGallery from '@/components/DividerGallery';
import { getLovableUploadPath } from '@/lib/paths';
import { getStructuredData } from '@/lib/structuredData';

// Gallery categories and images with enhanced data
const galleryCategories = [
  { id: 'all', label: 'Tutti', icon: '🎯' },
  { id: 'structure', label: 'Struttura', icon: '🏛️' },
  { id: 'food', label: 'Cucina', icon: '🍽️' },
  { id: 'events', label: 'Eventi', icon: '🎉' },
  { id: 'details', label: 'Dettagli', icon: '✨' }
];

// Nuove immagini fornite dall'utente
const structureImages = [
  { 
    src: '/lovable-uploads/1e9ae6fe-2ae4-4dd1-9ccb-6c27db8de957.png', 
    alt: 'Vista attraverso arco di pietra con cortile per eventi e tavolo dolci', 
    category: 'structure',
    title: 'Cortile degli Archi',
    description: 'L\'elegante cortile visto attraverso l\'arco di pietra, ideale per cerimonie e ricevimenti all\'aperto.'
  },
  { 
    src: '/lovable-uploads/220304d4-3d21-4d55-9ea1-ddd780157fc9.png', 
    alt: 'Coppia di sposi che cammina mano nella mano attraverso corridoio con archi', 
    category: 'structure',
    title: 'Corridoio Romantico',
    description: 'Il suggestivo corridoio con archi in pietra, perfetto per foto romantiche e momenti indimenticabili.'
  },
  { 
    src: '/lovable-uploads/e8714e13-20c8-476a-9952-dc8c6c85d5f0.png', 
    alt: 'Elegante sala ristorante con tavoli rotondi, sedie thonet e soffitto in legno', 
    category: 'structure',
    title: 'Sala Principale',
    description: 'La raffinata sala principale con tavoli rotondi, sedie thonet e soffitto in legno con travi a vista.'
  },
  { 
    src: '/lovable-uploads/8e4c9a6e-8fa7-47ad-90c2-9aacd48ddd4c.png', 
    alt: 'Vista panoramica della sala ristorante con allestimento completo', 
    category: 'structure',
    title: 'Sala Panoramica',
    description: 'Vista d\'insieme della sala con la sua atmosfera accogliente e l\'allestimento elegante per eventi.'
  },
  { 
    src: '/lovable-uploads/09808235-095f-4e3e-96ee-7999e281f10f.png', 
    alt: 'Vista panoramica del cortile con tavoli rotondi apparecchiati e palme', 
    category: 'structure',
    title: 'Cortile Panoramico',
    description: 'Suggestiva vista del cortile principale con l\'allestimento per eventi all\'aperto e l\'atmosfera magica del tramonto.'
  }
];

const foodImages = [
  { 
    src: '/lovable-uploads/ab451fc1-8d8e-4c0a-b118-a723071c313b.png', 
    alt: 'Dettaglio tavolo con tovagliolo Baglio Abbate e anelli di matrimonio', 
    category: 'food',
    title: 'Dettagli Eleganti',
    description: 'Raffinati dettagli della mise en place con tovaglioli personalizzati e atmosfera dorata.'
  },
  { 
    src: '/lovable-uploads/7aa53d04-cc12-421f-9ba6-fb53d80aec2d.png', 
    alt: 'Ricco buffet con piatti tradizionali siciliani e specialità del territorio', 
    category: 'food',
    title: 'Buffet Siciliano',
    description: 'Il nostro ricco buffet con specialità siciliane, antipasti di mare e terre, dolci tradizionali.'
  },
  { 
    src: '/lovable-uploads/bf92be82-1679-4263-9ee4-a459b6320a83.png', 
    alt: 'Elegante buffet di mare con ostriche, crostacei e specialità ittiche', 
    category: 'food',
    title: 'Buffet di Mare',
    description: 'Raffinato buffet con le migliori specialità di mare: ostriche fresche, crostacei e prelibatezze ittiche del territorio.'
  }
];

const eventsImages = [
  { 
    src: '/lovable-uploads/0d9a74a2-49b5-433b-a994-142e31afd746.png', 
    alt: 'Tavolo lungo elegantemente apparecchiato con luci sospese e decorazioni verdi', 
    category: 'events',
    title: 'Cena di Gala',
    description: 'Tavolo imperiale con decorazioni verdi, luci sospese e atmosfera magica per eventi speciali.'
  },
  { 
    src: '/lovable-uploads/a78796f0-f9cb-43e8-94c4-69055097e270.png', 
    alt: 'Vista del tavolo lungo con decorazioni e atmosfera serale dorata', 
    category: 'events',
    title: 'Evento Serale',
    description: 'L\'atmosfera dorata della sera avvolge il tavolo imperiale per una cena indimenticabile.'
  },
  { 
    src: '/lovable-uploads/ef5bc2e9-f908-4ff9-8544-e6823fa9b0a9.png', 
    alt: 'Matrimonio all\'aperto con sposi che camminano tra tavoli con luci sospese', 
    category: 'events',
    title: 'Matrimonio en Plein Air',
    description: 'Cerimonia all\'aperto con luci sospese, decorazioni verdi e atmosfera romantica sotto le stelle.'
  },
  { 
    src: '/lovable-uploads/9dd7830f-e6af-478a-89cb-7cb5ee6826e3.png', 
    alt: 'Ricevimento matrimoniale interno con sposi e allestimento elegante', 
    category: 'events',
    title: 'Ricevimento Elegante',
    description: 'Ricevimento matrimoniale nella sala interna con allestimento raffinato e atmosfera intima.'
  }
];

const detailsImages = [
];

// Combine all images
const allImages = [...structureImages, ...foodImages, ...eventsImages, ...detailsImages];

// Instagram CTA component
const InstagramCTA = ({ position = "side", size = "normal" }: { position?: "side" | "inline" | "floating"; size?: "normal" | "large" }) => {
  const baseClasses = "group relative overflow-hidden transition-all duration-300 hover:shadow-xl";
  const sizeClasses = size === "large" ? "p-6 md:p-8" : "p-4 md:p-6";
  const positionClasses = position === "floating" ? "fixed bottom-6 right-6 z-50 rounded-full" : "rounded-xl";
  
  return (
    <div className={`${baseClasses} ${sizeClasses} ${positionClasses} bg-gradient-to-br from-baglio-oro to-baglio-oroImperiale text-baglio-ebanoIntenso border-2 border-baglio-oro/30 hover:border-baglio-oro hover:scale-105`}>
      <div className="flex items-center justify-center gap-3">
        <Instagram size={position === "floating" ? 20 : 24} className="text-baglio-ebanoIntenso" />
        {position !== "floating" && (
          <div className="text-center">
            <h4 className="font-playfair font-bold text-lg mb-1">Seguici su Instagram</h4>
            <p className="text-sm opacity-90">@baglioabbateevents - Scopri le ultime foto!</p>
          </div>
        )}
      </div>
      <a 
        href="https://instagram.com/baglioabbateevents" 
        target="_blank" 
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
        aria-label="Seguici su Instagram"
      />
    </div>
  );
};

// Gallery component
const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const isMobile = useIsMobile();

  const allImages = [...structureImages, ...foodImages, ...eventsImages, ...detailsImages];
  const filteredImages = selectedCategory === 'all' 
    ? allImages 
    : allImages.filter(img => img.category === selectedCategory);

  return (
    <Layout heroLayout={true} hideBreadcrumb={true}>
      <Helmet>
        <title>Gallery Baglio Abbate | Foto Location Eventi Balestrate, Palermo</title>
        <meta name="description" content="Scopri la Gallery del Baglio Abbate a Balestrate: foto degli spazi interni ed esterni, allestimenti per matrimoni, eventi aziendali e celebrazioni private. Location esclusiva vicino Palermo." />
        <meta name="keywords" content="gallery baglio abbate, foto location balestrate, spazi eventi palermo, allestimenti matrimoni sicilia, sala ricevimenti balestrate" />
        <link rel="canonical" href="https://baglioabbate.it/gallery" />
        <meta property="og:title" content="Gallery Baglio Abbate | Foto Location Eventi Balestrate, Palermo" />
        <meta property="og:description" content="Scopri la Gallery del Baglio Abbate: foto degli spazi interni ed esterni, allestimenti per matrimoni ed eventi a Balestrate, vicino Palermo." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://baglioabbate.it/gallery" />
        <meta property="og:image" content={getLovableUploadPath("dbe1c6fb-b0fd-4f46-b937-20e7e2e4c8cc.png")} />
        
        {/* Dati Strutturati Schema.org per Gallery */}
        <script type="application/ld+json">
          {JSON.stringify(getStructuredData('gallery'))}
        </script>
      </Helmet>
      
      <ImageWithOverlay 
        src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
        alt="Gallery Baglio Abbate Balestrate - Foto location eventi e matrimoni in Sicilia"
        className="h-screen -mt-16 pt-16"
        heroSection={true}
      >
        <div className="baglio-container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair text-white drop-shadow-lg">
            Gallery <span className="text-baglio-oro">Baglio Abbate</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-white/95 leading-relaxed drop-shadow-md mb-8">
            Scopri gli spazi unici della nostra location a Balestrate, 
            dove ogni dettaglio racconta la bellezza della Sicilia occidentale
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton to="#gallery-section" className="bg-baglio-oro hover:bg-baglio-oroImperiale text-baglio-ebanoIntenso text-lg px-8 py-4">
              Esplora la Gallery
            </CTAButton>
            <CTAButton to="/eventi" outline className="border-2 border-white text-white hover:bg-white hover:text-baglio-ebanoIntenso text-lg px-8 py-4">
              Scopri gli Eventi
            </CTAButton>
          </div>
        </div>
      </ImageWithOverlay>
      <DividerGallery />

      {/* Gallery principale */}
      <section id="gallery-section" className="py-16 md:py-24 bg-baglio-cremaIntonacata">
        <div className="baglio-container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar con Instagram CTA */}
            <div className="lg:col-span-1 space-y-6">
              <InstagramCTA position="side" size="large" />
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-baglio-oro/20">
                <h3 className="font-playfair font-bold text-xl text-baglio-ebanoIntenso mb-4">
                  📸 Condividi i tuoi momenti
                </h3>
                <p className="text-baglio-ebanoIntenso/80 mb-4">
                  Usa #BaglioAbbate nei tuoi post e potrai essere featured nella nostra gallery!
                </p>
                <a 
                  href="https://instagram.com/baglioabbateevents" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-baglio-oro hover:text-baglio-oroImperiale font-semibold"
                >
                  <Instagram className="mr-2" size={16} />
                  Vai al profilo
                </a>
              </div>
            </div>

            {/* Main content */}
            <div className="lg:col-span-3">
              <SectionTitle 
                title="Esplora ogni dettaglio" 
                subtitle="Un viaggio visivo attraverso i nostri spazi, sapori ed esperienze uniche"
              />
              
              {/* Category filters con design migliorato */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {galleryCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 shadow-md hover:shadow-lg ${
                      selectedCategory === category.id
                        ? 'bg-baglio-oro text-baglio-ebanoIntenso shadow-lg transform scale-105'
                        : 'bg-white text-baglio-ebanoIntenso hover:bg-baglio-oro/20 hover:text-baglio-oro border border-baglio-oro/30 hover:border-baglio-oro'
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.label}
                  </button>
                ))}
              </div>
              
              <GalleryGrid images={filteredImages} activeCategory={selectedCategory} />
            </div>
          </div>

          {/* CTA inline dopo le prime immagini */}
          <div className="mt-16 text-center bg-gradient-to-r from-baglio-oro/10 to-baglio-oroImperiale/10 rounded-2xl p-8 md:p-12 border-2 border-baglio-oro/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-playfair font-bold text-baglio-ebanoIntenso mb-4">
                  🎉 Ti è piaciuto quello che hai visto?
                </h3>
                <p className="text-baglio-ebanoIntenso/80 text-lg mb-6">
                  Ogni immagine racconta una storia. Saremo felici di aiutarti a creare la tua.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <CTAButton to="/eventi" className="bg-baglio-oro hover:bg-baglio-oroImperiale text-baglio-ebanoIntenso">
                    Organizza il tuo evento qui
                  </CTAButton>
                  <CTAButton to="/contatti" outline className="border-baglio-oro text-baglio-oro hover:bg-baglio-oro hover:text-baglio-ebanoIntenso">
                    Richiedi disponibilità
                  </CTAButton>
                </div>
              </div>
              <div>
                <InstagramCTA position="inline" size="large" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <DividerGallery />

      {/* Sezione Instagram Feed */}
      <section className="py-16 bg-baglio-ebano">
        <div className="baglio-container">
          <SectionTitle 
            title="Seguici su Instagram" 
            subtitle="Scopri gli ultimi scatti e rimani aggiornato sulle novità del Baglio"
            center
            light
            className="text-white"
          />
          
          <div className="text-center mb-8">
            <a 
              href="https://instagram.com/baglioabbateevents" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-baglio-oro to-baglio-oroImperiale text-white hover:text-baglio-ebanoIntenso hover:from-baglio-oroImperiale hover:to-baglio-oro transition-all duration-300 font-semibold text-xl px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Instagram className="mr-3" size={24} />
              @baglioabbateevents
            </a>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 md:gap-4 mb-8">
            {allImages.slice(0, isMobile ? 4 : 6).map((image, index) => (
              <div key={index} className="group cursor-pointer relative overflow-hidden">
                <div className="h-32 md:h-40 rounded-lg overflow-hidden shadow-md border-2 border-baglio-oro/20 hover:border-baglio-oro transition-all duration-300 group-hover:shadow-xl">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-baglio-oro/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Instagram size={24} className="text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Final CTA con design migliorato */}
          <div className="bg-baglio-ebanoIntenso/95 rounded-2xl p-8 md:p-12 border-2 border-baglio-oro/30 text-center">
            <h3 className="text-2xl md:text-3xl font-playfair font-bold text-baglio-oro mb-4">
              📩 Hai domande o vuoi maggiori informazioni?
            </h3>
            <p className="text-baglio-cremaIntonacata/90 text-lg mb-6 max-w-2xl mx-auto">
              Il nostro team è a disposizione per aiutarti a pianificare il tuo evento perfetto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton to="/contatti" className="bg-baglio-oro hover:bg-baglio-oroImperiale text-baglio-ebanoIntenso">
                Contattaci subito
              </CTAButton>
              <a 
                href="https://instagram.com/baglioabbateevents" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 py-3 px-6 text-base border-2 border-baglio-oro text-baglio-oro hover:bg-baglio-oro hover:text-baglio-ebanoIntenso"
              >
                <Instagram className="mr-2" size={18} />
                Seguici su Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Calendario Eventi Section */}
      <section className="py-16 bg-baglio-ebano">
        <div className="baglio-container">
          <EventCalendar compact={false} />
        </div>
      </section>
      <DividerGallery />

      {/* Floating Instagram CTA */}
      <InstagramCTA position="floating" />
    </Layout>
  );
};

export default Gallery;
