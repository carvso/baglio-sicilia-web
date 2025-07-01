
import React, { useState } from 'react';
import { ZoomIn, Eye, Instagram } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import GalleryLightbox from './GalleryLightbox';

type GalleryImage = {
  src: string;
  alt: string;
  category: string;
  title?: string;
  description?: string;
};

type GalleryGridProps = {
  images: GalleryImage[];
  activeCategory: string;
};

const GalleryGrid = ({ images, activeCategory }: GalleryGridProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer border-2 border-baglio-oro/20 hover:border-baglio-oro transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            onClick={() => openLightbox(index)}
          >
            <OptimizedImage
              src={image.src}
              alt={image.alt}
              className="h-48 md:h-64 group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              aspectRatio="aspect-[4/3]"
            />
            
            {/* Overlay with title and category */}
            <div className="absolute inset-0 bg-gradient-to-t from-baglio-ebanoIntenso/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-baglio-oro font-playfair font-semibold text-sm md:text-base mb-1">
                  {image.title || image.alt}
                </h3>
                <p className="text-baglio-cremaIntonacata/90 text-xs md:text-sm">
                  {image.category}
                </p>
              </div>
            </div>

            {/* Zoom icon */}
            <div className="absolute top-3 right-3 bg-baglio-oro/90 text-baglio-ebanoIntenso rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ZoomIn size={16} />
            </div>

            {/* Hover tooltip */}
            <div className="absolute top-3 left-3 bg-baglio-oro text-baglio-ebanoIntenso px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Clicca per ingrandire
            </div>

            {/* Instagram hint */}
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Instagram size={16} className="text-baglio-oro" />
            </div>
          </div>
        ))}
      </div>

      <GalleryLightbox
        images={filteredImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
};

export default GalleryGrid;
