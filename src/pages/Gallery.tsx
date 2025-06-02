
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import Layout from '@/components/Layout';
import ImageWithOverlay from '@/components/ImageWithOverlay';
import OptimizedImage from '@/components/OptimizedImage';
import SectionTitle from '@/components/SectionTitle';

// Gallery categories and images
const galleryCategories = [
  { id: 'all', label: 'Tutti' },
  { id: 'structure', label: 'Struttura' },
  { id: 'food', label: 'Cucina' },
  { id: 'events', label: 'Eventi' },
  { id: 'details', label: 'Dettagli' }
];

// Define different image arrays for each category
const structureImages = [
  { src: '/lovable-uploads/d7dc3f33-bd94-4e1b-b910-8a09026f94bf.png', alt: 'Arco interno con soffitto in legno - Architettura storica siciliana', category: 'structure' },
  { src: '/lovable-uploads/dbe1c6fb-b0fd-4f46-b937-20e7e2e4c8cc.png', alt: 'Ingresso del Baglio con piante ornamentali', category: 'structure' },
  { src: '/lovable-uploads/7c87682b-32e2-45e6-b99b-3b4bce99f00f.png', alt: 'Vista esterna del Baglio con ciminiera storica', category: 'structure' },
  { src: '/lovable-uploads/75cf2578-451c-46db-8c39-c3dcc02f7157.png', alt: 'Ingresso principale con decorazioni floreali', category: 'structure' },
  { src: '/lovable-uploads/097078d4-e512-4c97-b039-a82f102e8608.png', alt: 'Cortile principale del Baglio Abbate', category: 'structure' },
];

const foodImages = [
  { src: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', alt: 'Antipasto siciliano tradizionale', category: 'food' },
  { src: 'https://images.unsplash.com/photo-1579349443343-73da56a71a20?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', alt: 'Pasta con frutti di mare freschi', category: 'food' },
  { src: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', alt: 'Pesce alla griglia con erbe aromatiche', category: 'food' },
  { src: 'https://images.unsplash.com/photo-1510148199876-8a856ee41d42?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', alt: 'Dessert siciliano tradizionale', category: 'food' },
  { src: 'https://images.unsplash.com/photo-1621328406700-17f517c790ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', alt: 'Cocktail siciliano con agrumi locali', category: 'food' },
];

const eventsImages = [
  { src: '/lovable-uploads/82698643-0369-4ee1-9b14-cf38c7d570df.png', alt: 'Allestimento elegante per cerimonia nuziale', category: 'events' },
  { src: '/lovable-uploads/ac14664b-cf42-46ec-90e4-d0461e9f18a2.png', alt: 'Vista mare per eventi e matrimoni', category: 'events' },
  { src: '/lovable-uploads/abd0f4fc-88b2-4370-b75c-a060e0f81d76.png', alt: 'Tavolo decorato per cena all\'esterno', category: 'events' },
  { src: '/lovable-uploads/1a152ccf-f53d-47a9-8d2f-f43edceba327.png', alt: 'Sala interna apparecchiata per eventi', category: 'events' },
  { src: '/lovable-uploads/059acecc-9864-4084-bb89-9644fd4e4a41.png', alt: 'Reception elegante del Baglio', category: 'events' },
];

const detailsImages = [
  { src: '/lovable-uploads/47aec7fc-7c64-4fac-b4eb-63d4913afc3a.png', alt: 'Interni eleganti con archi in pietra', category: 'details' },
  { src: '/lovable-uploads/d7dc3f33-bd94-4e1b-b910-8a09026f94bf.png', alt: 'Dettagli architettonici storici', category: 'details' },
  { src: '/lovable-uploads/dbe1c6fb-b0fd-4f46-b937-20e7e2e4c8cc.png', alt: 'Arco di ingresso con decorazioni', category: 'details' },
  { src: '/lovable-uploads/7c87682b-32e2-45e6-b99b-3b4bce99f00f.png', alt: 'Ciminiera storica del Baglio', category: 'details' },
  { src: '/lovable-uploads/75cf2578-451c-46db-8c39-c3dcc02f7157.png', alt: 'Dettagli decorativi e artistici', category: 'details' },
];

// Combine all images
const allImages = [...structureImages, ...foodImages, ...eventsImages, ...detailsImages];

const Gallery = () => {
  const isMobile = useIsMobile();
  const [activeCategory, setActiveCategory] = useState('all');
  const [modalImage, setModalImage] = useState<null | { src: string; alt: string }>(null);

  const filteredImages = activeCategory === 'all' 
    ? allImages 
    : allImages.filter(img => img.category === activeCategory);

  const openModal = (image: { src: string; alt: string }) => {
    setModalImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <Layout>
      <ImageWithOverlay 
        src="/lovable-uploads/dbe1c6fb-b0fd-4f46-b937-20e7e2e4c8cc.png"
        alt="Galleria del Baglio Abbate - Foto della location eventi in Sicilia"
        className="h-[40vh] md:h-[60vh]"
        priority={true}
        sizes="100vw"
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

      <section className="section-padding bg-background">
        <div className="baglio-container">
          <SectionTitle 
            title="Esplora il baglio" 
            subtitle="Un viaggio visivo attraverso i nostri spazi, sapori ed esperienze"
            center
          />
          
          <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-12">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-1.5 md:px-6 md:py-2 rounded-full text-sm md:text-base transition-colors ${
                  activeCategory === category.id
                    ? 'bg-elite-gold text-elite-darker'
                    : 'bg-card text-muted-foreground hover:bg-elite-gold/20 hover:text-elite-gold border border-elite-gold/20'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group border border-elite-gold/20 hover:border-elite-goldLight transition-colors"
                onClick={() => openModal(image)}
              >
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  className="h-48 md:h-64"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium text-base md:text-lg px-3 text-center">
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="baglio-container text-center">
          <SectionTitle 
            title="Seguici su Instagram" 
            subtitle="Scopri gli ultimi scatti e rimani aggiornato sulle novità"
            center
          />
          
          <div className="mb-8">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-elite-gold hover:text-elite-goldLight transition-colors font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              @baglioabbate
            </a>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
            {allImages.slice(0, isMobile ? 4 : 6).map((image, index) => (
              <OptimizedImage
                key={index}
                src={image.src}
                alt={image.alt}
                className="h-32 md:h-40 rounded-lg shadow-md border border-elite-gold/20 hover:border-elite-goldLight transition-colors"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 16vw"
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Modal for image viewing */}
      {modalImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <button 
            onClick={closeModal}
            className="absolute top-4 right-4 text-foreground hover:text-elite-gold transition-colors"
            aria-label="Chiudi galleria"
          >
            <X size={32} />
          </button>
          <div className="max-w-4xl max-h-90vh overflow-hidden">
            <img 
              src={modalImage.src} 
              alt={modalImage.alt} 
              className="max-w-full max-h-[85vh] object-contain"
              loading="eager"
            />
            <p className="text-foreground text-center mt-4 text-base md:text-lg">{modalImage.alt}</p>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
