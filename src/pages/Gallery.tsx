
import React, { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import Layout from '@/components/Layout';
import ImageWithOverlay from '@/components/ImageWithOverlay';
import SectionTitle from '@/components/SectionTitle';
import GalleryGrid from '@/components/GalleryGrid';
import CTAButton from '@/components/CTAButton';

// Gallery categories and images with enhanced data
const galleryCategories = [
  { id: 'all', label: 'Tutti' },
  { id: 'structure', label: 'Struttura' },
  { id: 'food', label: 'Cucina' },
  { id: 'events', label: 'Eventi' },
  { id: 'details', label: 'Dettagli' }
];

// Enhanced image data with titles and descriptions
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
    alt: 'Allestimento elegante per cerimonia nuziale', 
    category: 'events',
    title: 'Cerimonia Nuziale',
    description: 'Allestimento romantico per matrimoni con vista panoramica sul mare siciliano.'
  },
  { 
    src: '/lovable-uploads/ac14664b-cf42-46ec-90e4-d0461e9f18a2.png', 
    alt: 'Vista mare per eventi e matrimoni', 
    category: 'events',
    title: 'Ricevimento Vista Mare',
    description: 'Tavoli allestiti con vista mozzafiato sulla costa di Balestrate.'
  },
  { 
    src: '/lovable-uploads/abd0f4fc-88b2-4370-b75c-a060e0f81d76.png', 
    alt: 'Tavolo decorato per cena all\'esterno', 
    category: 'events',
    title: 'Cena sotto le Stelle',
    description: 'Allestimento intimo per cene private sotto il cielo stellato della Sicilia.'
  },
  { 
    src: '/lovable-uploads/1a152ccf-f53d-47a9-8d2f-f43edceba327.png', 
    alt: 'Sala interna apparecchiata per eventi', 
    category: 'events',
    title: 'Sala Interna',
    description: 'Elegante allestimento per eventi aziendali e celebrazioni private.'
  },
  { 
    src: '/lovable-uploads/059acecc-9864-4084-bb89-9644fd4e4a41.png', 
    alt: 'Reception elegante del Baglio', 
    category: 'events',
    title: 'Reception Elegante',
    description: 'Spazio di accoglienza raffinato per i vostri ospiti.'
  },
];

const detailsImages = [
  { 
    src: '/lovable-uploads/47aec7fc-7c64-4fac-b4eb-63d4913afc3a.png', 
    alt: 'Interni eleganti con archi in pietra', 
    category: 'details',
    title: 'Dettagli Architettonici',
    description: 'I preziosi dettagli in pietra che caratterizzano l\'architettura storica del Baglio.'
  },
  { 
    src: '/lovable-uploads/d7dc3f33-bd94-4e1b-b910-8a09026f94bf.png', 
    alt: 'Dettagli architettonici storici', 
    category: 'details',
    title: 'Volte a Crociera',
    description: 'Le antiche volte a crociera testimoniano la maestria artigianale del passato.'
  },
  { 
    src: '/lovable-uploads/dbe1c6fb-b0fd-4f46-b937-20e7e2e4c8cc.png', 
    alt: 'Arco di ingresso con decorazioni', 
    category: 'details',
    title: 'Portale d\'Ingresso',
    description: 'L\'elegante portale d\'ingresso adornato con elementi decorativi originali.'
  },
  { 
    src: '/lovable-uploads/7c87682b-32e2-45e6-b99b-3b4bce99f00f.png', 
    alt: 'Ciminiera storica del Baglio', 
    category: 'details',
    title: 'Ciminiera Storica',
    description: 'La caratteristica ciminiera, simbolo della tradizione produttiva siciliana.'
  },
  { 
    src: '/lovable-uploads/75cf2578-451c-46db-8c39-c3dcc02f7157.png', 
    alt: 'Dettagli decorativi e artistici', 
    category: 'details',
    title: 'Elementi Decorativi',
    description: 'Dettagli artistici che impreziosiscono ogni angolo del Baglio.'
  },
];

// Combine all images
const allImages = [...structureImages, ...foodImages, ...eventsImages, ...detailsImages];

const Gallery = () => {
  const isMobile = useIsMobile();
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <Layout>
      <ImageWithOverlay 
        src="/lovable-uploads/dbe1c6fb-b0fd-4f46-b937-20e7e2e4c8cc.png"
        alt="Galleria del Baglio Abbate - Foto della location eventi in Sicilia"
        className="h-[40vh] md:h-[60vh]"
        priority={true}
        sizes="100vw"
        overlayOpacity={50}
      >
        <div className="baglio-container text-center text-foreground">
          <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 font-playfair text-elite-gold">
            La nostra galleria
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto">
            Scopri l'essenza del Baglio Abbate attraverso le immagini
          </p>
        </div>
      </ImageWithOverlay>

      {/* Divider decorativo */}
      <div className="h-1 bg-gradient-to-r from-transparent via-elite-gold to-transparent"></div>

      <section className="section-padding bg-elite-darker">
        <div className="baglio-container">
          <SectionTitle 
            title="Esplora ogni dettaglio" 
            subtitle="Un viaggio visivo attraverso i nostri spazi, sapori ed esperienze uniche"
            center
            light
          />
          
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-12">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-elite-gold text-elite-darker shadow-lg transform scale-105'
                    : 'bg-card text-muted-foreground hover:bg-elite-gold/20 hover:text-elite-gold border border-elite-gold/20 hover:border-elite-gold/50'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          
          <GalleryGrid images={allImages} activeCategory={activeCategory} />

          {/* CTA inline dopo le prime immagini */}
          <div className="mt-12 md:mt-16 text-center bg-gradient-to-r from-elite-gold/5 to-elite-gold/10 rounded-2xl p-8 md:p-12 border border-elite-gold/20">
            <h3 className="text-2xl md:text-3xl font-playfair text-elite-gold mb-4">
              🎉 Ti è piaciuto quello che hai visto?
            </h3>
            <p className="text-foreground text-lg mb-6 max-w-2xl mx-auto">
              Ogni immagine racconta una storia. Saremo felici di aiutarti a creare la tua.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton to="/eventi" className="bg-elite-gold hover:bg-elite-goldLight text-elite-darker">
                Organizza il tuo evento qui
              </CTAButton>
              <CTAButton to="/contatti" outline className="border-elite-gold text-elite-gold hover:bg-elite-gold hover:text-elite-darker">
                Richiedi disponibilità
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Divider decorativo */}
      <div className="h-1 bg-gradient-to-r from-transparent via-elite-gold to-transparent"></div>

      <section className="section-padding bg-card">
        <div className="baglio-container text-center">
          <SectionTitle 
            title="Seguici su Instagram" 
            subtitle="Scopri gli ultimi scatti e rimani aggiornato sulle novità del Baglio"
            center
          />
          
          <div className="mb-8">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-elite-gold hover:text-elite-goldLight transition-colors font-medium text-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-3">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              @baglioabbate
            </a>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 md:gap-4 mb-8">
            {allImages.slice(0, isMobile ? 4 : 6).map((image, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="h-32 md:h-40 rounded-lg overflow-hidden shadow-md border border-elite-gold/20 hover:border-elite-goldLight transition-all duration-300 group-hover:shadow-xl">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="bg-elite-darker/50 rounded-xl p-6 md:p-8 border border-elite-gold/30">
            <h3 className="text-xl md:text-2xl font-playfair text-elite-gold mb-3">
              📩 Hai domande o vuoi maggiori informazioni?
            </h3>
            <p className="text-muted-foreground mb-6">
              Il nostro team è a disposizione per aiutarti a pianificare il tuo evento perfetto.
            </p>
            <CTAButton to="/contatti" className="bg-elite-gold hover:bg-elite-goldLight text-elite-darker">
              Contattaci subito
            </CTAButton>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
