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

// Gallery categories and images with enhanced data
const galleryCategories = [
  { id: 'all', label: 'Tutti', icon: '🎯' },
  { id: 'structure', label: 'Struttura', icon: '🏛️' },
  { id: 'food', label: 'Cucina', icon: '🍽️' },
  { id: 'events', label: 'Eventi', icon: '🎉' },
  { id: 'details', label: 'Dettagli', icon: '✨' }
];

// Enhanced image data with the new interior images
const structureImages = [
  { 
    src: '/lovable-uploads/d7dc3f33-bd94-4e1b-b910-8a09026f94bf.png', 
    alt: 'Arco interno con soffitto in legno - Architettura storica siciliana', 
    category: 'structure',
    title: 'Sala degli Archi',
    description: 'Gli eleganti archi in pietra e i soffitti in legno creano un\'atmosfera unica per le vostre cerimonie.'
  },
  { 
    src: '/lovable-uploads/dbe1c6fb-b0fd-4f46-b937-20e7e2e4c8cc.png', 
    alt: 'Ingresso del Baglio con piante ornamentali', 
    category: 'structure',
    title: 'Ingresso Principale',
    description: 'L\'accogliente ingresso del Baglio circondato da rigogliose piante mediterranee.'
  },
  { 
    src: '/lovable-uploads/7c87682b-32e2-45e6-b99b-3b4bce99f00f.png', 
    alt: 'Vista esterna del Baglio con ciminiera storica', 
    category: 'structure',
    title: 'Vista Esterna',
    description: 'La storica architettura siciliana con la caratteristica ciminiera che domina il panorama.'
  },
  { 
    src: '/lovable-uploads/75cf2578-451c-46db-8c39-c3dcc02f7157.png', 
    alt: 'Ingresso principale con decorazioni floreali', 
    category: 'structure',
    title: 'Cortile Fiorito',
    description: 'Il cortile principale adornato con decorazioni floreali per eventi speciali.'
  },
  { 
    src: '/lovable-uploads/097078d4-e512-4c97-b039-a82f102e8608.png', 
    alt: 'Cortile principale del Baglio Abbate', 
    category: 'structure',
    title: 'Cortile Centrale',
    description: 'Lo spazio principale per cerimonie e ricevimenti all\'aperto.'
  },
  {
    src: '/lovable-uploads/97ade15d-9a2b-4fa8-89b8-847a2ea33c4c.png',
    alt: 'Sala ricevimenti con tovaglie rosa cipria',
    category: 'structure',
    title: 'Sala Ricevimenti Rosa',
    description: 'Un ambiente raffinato con tavoli rotondi e tovaglie rosa cipria, perfetto per matrimoni ed eventi eleganti.'
  },
  {
    src: '/lovable-uploads/75cf2578-451c-46db-8c39-c3dcc02f7157.png',
    alt: 'Sala ricevimenti con tovaglie bianche e dettagli oro',
    category: 'structure',
    title: 'Sala Ricevimenti Oro',
    description: 'Tavoli rotondi con tovaglie bianche e runner oro, ideali per eventi luminosi e raffinati.'
  },
  {
    src: '/lovable-uploads/47aec7fc-7c64-4fac-b4eb-63d4913afc3a.png',
    alt: 'Sala ricevimenti con tovaglie blu navy',
    category: 'structure',
    title: 'Sala Ricevimenti Blu Navy',
    description: 'Atmosfera elegante con tovaglie blu navy e dettagli dorati, per eventi esclusivi.'
  },
  {
    src: '/lovable-uploads/a64af1b5-6d30-4760-80df-66af10202399.png',
    alt: 'Sala ricevimenti con illuminazione calda e pianoforte',
    category: 'details',
    title: 'Lounge & Piano Bar',
    description: 'Un angolo lounge con pianoforte e bar, illuminazione calda per momenti di relax e musica.'
  },
  {
    src: '/lovable-uploads/ac14664b-cf42-46ec-90e4-d0461e9f18a2.png',
    alt: 'Sala ricevimenti con tovaglie gialle e atmosfera accogliente',
    category: 'structure',
    title: 'Sala Ricevimenti Gialla',
    description: 'Tavoli rotondi con tovaglie gialle, ambiente solare e accogliente per ogni occasione.'
  },
  {
    src: '/lovable-uploads/abd0f4fc-88b2-4370-b75c-a060e0f81d76.png',
    alt: 'Sala ricevimenti con tovaglie rosa cipria e sedie chiare',
    category: 'structure',
    title: 'Sala Ricevimenti Rosa Pastello',
    description: 'Un tocco di romanticismo con tovaglie rosa pastello e sedie chiare, ideale per eventi intimi.'
  },
  {
    src: '/lovable-uploads/82698643-0369-4ee1-9b14-cf38c7d570df.png',
    alt: 'Sala ricevimenti con tovaglie blu navy e atmosfera serale',
    category: 'structure',
    title: 'Sala Ricevimenti Notturna',
    description: 'Un allestimento serale con tovaglie blu navy, luci soffuse e atmosfera elegante.'
  },
  {
    src: '/lovable-uploads/d7dc3f33-bd94-4e1b-b910-8a09026f94bf.png',
    alt: 'Arco interno con soffitto in legno',
    category: 'details',
    title: 'Archi e Soffitti',
    description: 'Dettagli architettonici con archi in pietra e soffitti in legno, simbolo della tradizione siciliana.'
  }
];

const foodImages = [
  { 
    src: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 
    alt: 'Antipasto siciliano tradizionale', 
    category: 'food',
    title: 'Antipasti Siciliani',
    description: 'Selezione di antipasti della tradizione siciliana con prodotti locali di eccellenza.'
  },
  { 
    src: 'https://images.unsplash.com/photo-1579349443343-73da56a71a20?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 
    alt: 'Pasta con frutti di mare freschi', 
    category: 'food',
    title: 'Pasta ai Frutti di Mare',
    description: 'Pasta fresca con frutti di mare del golfo di Castellammare, pescati quotidianamente.'
  },
  { 
    src: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 
    alt: 'Pesce alla griglia con erbe aromatiche', 
    category: 'food',
    title: 'Pesce alla Griglia',
    description: 'Pesce fresco grigliato con erbe aromatiche del nostro giardino.'
  },
  { 
    src: 'https://images.unsplash.com/photo-1510148199876-8a856ee41d42?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 
    alt: 'Dessert siciliano tradizionale', 
    category: 'food',
    title: 'Dolci della Tradizione',
    description: 'Cannoli siciliani e cassata preparati secondo le ricette tradizionali.'
  },
  { 
    src: 'https://images.unsplash.com/photo-1621328406700-17f517c790ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 
    alt: 'Cocktail siciliano con agrumi locali', 
    category: 'food',
    title: 'Cocktail agli Agrumi',
    description: 'Cocktail artigianali preparati con agrumi siciliani e distillati locali.'
  },
];

const eventsImages = [
  { 
    src: '/lovable-uploads/82698643-0369-4ee1-9b14-cf38c7d570df.png', 
    alt: 'Sala allestita con eleganti tovaglie blu navy per eventi aziendali', 
    category: 'events',
    title: 'Eventi Aziendali',
    description: 'Allestimento professionale con tovaglie blu navy per meeting e conferenze di alta qualità.'
  },
  { 
    src: '/lovable-uploads/ac14664b-cf42-46ec-90e4-d0461e9f18a2.png', 
    alt: 'Terrazza vista mare per ricevimenti e matrimoni', 
    category: 'events',
    title: 'Ricevimento Vista Mare',
    description: 'La nostra terrazza panoramica con vista mozzafiato sulla costa di Balestrate.'
  },
  { 
    src: '/lovable-uploads/abd0f4fc-88b2-4370-b75c-a060e0f81d76.png', 
    alt: 'Allestimento romantico con tovaglie color pesca per matrimoni', 
    category: 'events',
    title: 'Matrimoni da Sogno',
    description: 'Allestimento romantico con tovaglie color pesca per celebrare l\'amore eterno.'
  },
  { 
    src: '/lovable-uploads/1a152ccf-f53d-47a9-8d2f-f43edceba327.png', 
    alt: 'Sala interna elegante per eventi privati', 
    category: 'events',
    title: 'Eventi Privati',
    description: 'Spazio intimo e raffinato per celebrazioni private e cene esclusive.'
  },
  { 
    src: '/lovable-uploads/059acecc-9864-4084-bb89-9644fd4e4a41.png', 
    alt: 'Area reception elegante del Baglio', 
    category: 'events',
    title: 'Reception Elegante',
    description: 'Spazio di accoglienza raffinato per i vostri ospiti più importanti.'
  },
];

const detailsImages = [
  { 
    src: '/lovable-uploads/47aec7fc-7c64-4fac-b4eb-63d4913afc3a.png', 
    alt: 'Interni eleganti con archi in pietra e atmosfera calda', 
    category: 'details',
    title: 'Atmosfera Intima',
    description: 'Gli interni del Baglio creano un\'atmosfera calda e accogliente per ogni occasione.'
  },
  { 
    src: '/lovable-uploads/d7dc3f33-bd94-4e1b-b910-8a09026f94bf.png', 
    alt: 'Dettagli architettonici delle volte storiche', 
    category: 'details',
    title: 'Volte Storiche',
    description: 'Le antiche volte a crociera testimoniano la maestria artigianale del passato.'
  },
  { 
    src: '/lovable-uploads/dbe1c6fb-b0fd-4f46-b937-20e7e2e4c8cc.png', 
    alt: 'Portale d\'ingresso con elementi decorativi originali', 
    category: 'details',
    title: 'Portale d\'Ingresso',
    description: 'L\'elegante portale d\'ingresso adornato con elementi decorativi originali.'
  },
  { 
    src: '/lovable-uploads/7c87682b-32e2-45e6-b99b-3b4bce99f00f.png', 
    alt: 'Ciminiera storica simbolo della tradizione siciliana', 
    category: 'details',
    title: 'Ciminiera Storica',
    description: 'La caratteristica ciminiera, simbolo della tradizione produttiva siciliana.'
  },
  { 
    src: '/lovable-uploads/75cf2578-451c-46db-8c39-c3dcc02f7157.png', 
    alt: 'Dettagli decorativi che impreziosiscono il Baglio', 
    category: 'details',
    title: 'Elementi Decorativi',
    description: 'Dettagli artistici che impreziosiscono ogni angolo del Baglio.'
  },
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
  const isMobile = useIsMobile();
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <Layout hideBreadcrumb={true}>
      <Helmet>
        <title>Gallery Baglio Abbate | Foto Location Eventi Balestrate, Palermo</title>
        <meta name="description" content="Scopri la Gallery del Baglio Abbate a Balestrate: foto degli spazi interni ed esterni, allestimenti per matrimoni, eventi aziendali e celebrazioni private. Location esclusiva vicino Palermo." />
        <meta name="keywords" content="gallery baglio abbate, foto location balestrate, spazi eventi palermo, allestimenti matrimoni sicilia, sala ricevimenti balestrate" />
        <link rel="canonical" href="https://www.baglioabbate.it/gallery" />
        <meta property="og:title" content="Gallery Baglio Abbate | Foto Location Eventi Balestrate, Palermo" />
        <meta property="og:description" content="Scopri la Gallery del Baglio Abbate: foto degli spazi interni ed esterni, allestimenti per matrimoni ed eventi a Balestrate, vicino Palermo." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.baglioabbate.it/gallery" />
        <meta property="og:image" content={getLovableUploadPath("dbe1c6fb-b0fd-4f46-b937-20e7e2e4c8cc.png")} />
        
        {/* Dati Strutturati Schema.org per Gallery */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Gallery Baglio Abbate - Location Eventi Balestrate",
            "description": "Foto degli spazi interni ed esterni del Baglio Abbate a Balestrate, location per eventi e matrimoni vicino Palermo.",
            "url": "https://www.baglioabbate.it/gallery",
            "image": [
              "https://www.baglioabbate.it/public/lovable-uploads/dbe1c6fb-b0fd-4f46-b937-20e7e2e4c8cc.png",
              "https://www.baglioabbate.it/public/lovable-uploads/ac14664b-cf42-46ec-90e4-d0461e9f18a2.png",
              "https://www.baglioabbate.it/public/lovable-uploads/abd0f4fc-88b2-4370-b75c-a060e0f81d76.png"
            ],
            "location": {
              "@type": "Place",
              "name": "Baglio Abbate",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Via Palermo 4",
                "addressLocality": "Balestrate",
                "addressRegion": "PA",
                "postalCode": "90041",
                "addressCountry": "IT"
              }
            },
            "about": {
              "@type": "EventVenue",
              "name": "Baglio Abbate",
              "description": "Location per eventi e matrimoni a Balestrate, Sicilia occidentale"
            }
          })}
        </script>
      </Helmet>
      {/* Hero Section with new interior image */}
      <ImageWithOverlay 
        src="/lovable-uploads/82698643-0369-4ee1-9b14-cf38c7d570df.png"
        alt="Interni eleganti del Baglio Abbate - Sala allestita per eventi"
        className="h-[60vh]"
        heroSection={true}
        priority={true}
        sizes="100vw"
        overlayOpacity={70}
      >
        <div className="baglio-container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 font-playfair text-white drop-shadow-lg">
            La nostra <span className="text-baglio-oro">Galleria</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-white/95 leading-relaxed drop-shadow-md mb-8">
            Scopri l'essenza del Baglio Abbate attraverso le immagini che raccontano la nostra storia di eccellenza
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton to="/eventi" className="bg-baglio-oro hover:bg-baglio-oroImperiale text-baglio-ebanoIntenso text-lg px-8 py-4">
              <Camera className="mr-2" size={20} />
              Organizza il tuo evento
            </CTAButton>
            <a 
              href="https://instagram.com/baglioabbateevents" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 py-4 px-8 text-lg border-2 border-white text-white hover:bg-white hover:text-baglio-ebanoIntonacata"
            >
              <Instagram className="mr-2" size={20} />
              Seguici su Instagram
            </a>
          </div>
        </div>
      </ImageWithOverlay>
      <DividerGallery />

      {/* Gallery principale */}
      <section className="py-16 md:py-24 bg-baglio-cremaIntonacata">
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
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-6 py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 shadow-md hover:shadow-lg ${
                      activeCategory === category.id
                        ? 'bg-baglio-oro text-baglio-ebanoIntenso shadow-lg transform scale-105'
                        : 'bg-white text-baglio-ebanoIntenso hover:bg-baglio-oro/20 hover:text-baglio-oro border border-baglio-oro/30 hover:border-baglio-oro'
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.label}
                  </button>
                ))}
              </div>
              
              <GalleryGrid images={allImages} activeCategory={activeCategory} />
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
