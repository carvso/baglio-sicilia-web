
import React, { useState } from 'react';
import { X } from 'lucide-react';
import Layout from '@/components/Layout';
import ImageWithOverlay from '@/components/ImageWithOverlay';
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
  { src: 'https://images.unsplash.com/photo-1606402179428-a57976d71fa4?ixlib=rb-1.2.1&auto=format&fit=crop&q=80', alt: 'Facciata del Baglio', category: 'structure' },
  { src: 'https://images.unsplash.com/photo-1629078691977-dc51e9a9a436?ixlib=rb-1.2.1&auto=format&fit=crop&q=80', alt: 'Cortile interno', category: 'structure' },
  { src: 'https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80', alt: 'Sala interna', category: 'structure' },
  { src: 'https://images.unsplash.com/photo-1519167576308-04f23db61d38?ixlib=rb-1.2.1&auto=format&fit=crop&q=80', alt: 'Terrazza', category: 'structure' },
  { src: 'https://images.unsplash.com/photo-1572916118970-fb5c8a1b535f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80', alt: 'Giardino', category: 'structure' },
];

const foodImages = [
  { src: 'https://images.unsplash.com/photo-1560611588-163f49a6bedd?ixlib=rb-1.2.1&auto=format&fit=crop&q=80', alt: 'Pasta alla Norma', category: 'food' },
  { src: 'https://images.unsplash.com/photo-1626711934535-9749ea933cd7?ixlib=rb-1.2.1&auto=format&fit=crop&q=80', alt: 'Pesce al forno', category: 'food' },
  { src: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-1.2.1&auto=format&fit=crop&q=80', alt: 'Dolci siciliani', category: 'food' },
  { src: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?ixlib=rb-1.2.1&auto=format&fit=crop&q=80', alt: 'Cocktail speciali', category: 'food' },
  { src: 'https://images.unsplash.com/photo-1600891965430-12cf8d68da67?ixlib=rb-1.2.1&auto=format&fit=crop&q=80', alt: 'Piatti tipici', category: 'food' },
];

const eventsImages = [
  { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&q=80', alt: 'Matrimonio', category: 'events' },
  { src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80', alt: 'Evento privato', category: 'events' },
  { src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&q=80', alt: 'Evento aziendale', category: 'events' },
  { src: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&auto=format&fit=crop&q=80', alt: 'Cerimonia', category: 'events' },
  { src: 'https://images.unsplash.com/photo-1496318447583-f524534e9ce1?ixlib=rb-1.2.1&auto=format&fit=crop&q=80', alt: 'Celebrazione', category: 'events' },
];

const detailsImages = [
  { src: 'https://images.unsplash.com/photo-1526057565006-20beab8dd2ed?ixlib=rb-1.2.1&auto=format&fit=crop&q=80', alt: 'Dettagli architettonici', category: 'details' },
  { src: 'https://images.unsplash.com/photo-1574172639304-d5144f154c6a?ixlib=rb-1.2.1&auto=format&fit=crop&q=80', alt: 'Decorazioni', category: 'details' },
  { src: 'https://images.unsplash.com/photo-1507652955-f3dcef5a3be5?ixlib=rb-1.2.1&auto=format&fit=crop&q=80', alt: 'Interni', category: 'details' },
  { src: 'https://images.unsplash.com/photo-1542902093-f4c5f7f9b7de?ixlib=rb-1.2.1&auto=format&fit=crop&q=80', alt: 'Particolari del giardino', category: 'details' },
  { src: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-1.2.1&auto=format&fit=crop&q=80', alt: 'Elementi decorativi', category: 'details' },
];

// Combine all images
const allImages = [...structureImages, ...foodImages, ...eventsImages, ...detailsImages];

const Gallery = () => {
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
        src="https://images.unsplash.com/photo-1583396718537-9f59e76ab2b6?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
        alt="Galleria del Baglio Abbate"
        className="h-[60vh]"
      >
        <div className="baglio-container text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">
            La nostra galleria
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Scopri l'essenza del Baglio Abbate attraverso le immagini
          </p>
        </div>
      </ImageWithOverlay>

      <section className="section-padding bg-white">
        <div className="baglio-container">
          <SectionTitle 
            title="Esplora il baglio" 
            subtitle="Un viaggio visivo attraverso i nostri spazi, sapori ed esperienze"
            center
          />
          
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategory === category.id
                    ? 'bg-baglio-terracotta text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
                onClick={() => openModal(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium text-lg">
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-baglio-cream bg-opacity-20">
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
              className="inline-flex items-center text-baglio-terracotta hover:underline font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              @baglioabbate
            </a>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {allImages.slice(0, 6).map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-md group"
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Modal for image viewing */}
      {modalImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <button 
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-baglio-terracotta transition-colors"
            aria-label="Close modal"
          >
            <X size={32} />
          </button>
          <div className="max-w-4xl max-h-90vh overflow-hidden">
            <img 
              src={modalImage.src} 
              alt={modalImage.alt} 
              className="max-w-full max-h-[85vh] object-contain"
            />
            <p className="text-white text-center mt-4 text-lg">{modalImage.alt}</p>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
