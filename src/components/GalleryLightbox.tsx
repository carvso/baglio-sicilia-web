
import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Instagram, Share2 } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import CTAButton from './CTAButton';

type GalleryImage = {
  src: string;
  alt: string;
  category: string;
  title?: string;
  description?: string;
};

type GalleryLightboxProps = {
  images: GalleryImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

const GalleryLightbox = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev
}: GalleryLightboxProps) => {
  const isMobile = useIsMobile();
  const [isLoading, setIsLoading] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const currentImage = images[currentIndex];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 300);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, currentIndex]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrev();
          break;
        case 'ArrowRight':
          onNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  // Handle touch swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      onNext();
    } else if (isRightSwipe) {
      onPrev();
    }
  };

  if (!isOpen || !currentImage) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      aria-modal="true"
      role="dialog"
      aria-labelledby="lightbox-title"
    >
      {/* Header with close button and image info */}
      <div className="absolute top-0 left-0 right-0 z-60 bg-gradient-to-b from-black/80 to-transparent p-4 md:p-6">
        <div className="flex justify-between items-start">
          <div className="text-white">
            <h3 id="lightbox-title" className="text-lg md:text-xl font-playfair text-baglio-oro">
              {currentImage.title || currentImage.alt}
            </h3>
            <p className="text-sm text-baglio-cremaIntonacata/90 mt-1">
              {currentImage.category} • {currentIndex + 1} di {images.length}
            </p>
          </div>
          <button 
            onClick={onClose}
            className="text-white hover:text-baglio-oro transition-colors p-2 -m-2"
            aria-label="Chiudi galleria"
          >
            <X size={24} />
          </button>
        </div>
      </div>

      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-60 bg-baglio-oro/90 hover:bg-baglio-oro text-baglio-ebanoIntenso p-3 rounded-full transition-all duration-200 hover:scale-110"
            aria-label="Immagine precedente"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-60 bg-baglio-oro/90 hover:bg-baglio-oro text-baglio-ebanoIntenso p-3 rounded-full transition-all duration-200 hover:scale-110"
            aria-label="Immagine successiva"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Main image */}
      <div 
        className="max-w-[90vw] max-h-[80vh] relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-baglio-ebanoIntenso/50 rounded-lg">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-baglio-oro"></div>
          </div>
        )}
        <img 
          src={currentImage.src} 
          alt={currentImage.alt}
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border-2 border-baglio-oro/30"
          loading="eager"
        />
      </div>

      {/* Bottom CTA section */}
      <div className="absolute bottom-0 left-0 right-0 z-60 bg-gradient-to-t from-black/90 to-transparent p-4 md:p-6">
        <div className="text-center">
          {currentImage.description && (
            <p className="text-baglio-cremaIntonacata text-sm md:text-base mb-4 max-w-2xl mx-auto">
              {currentImage.description}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
            <CTAButton to="/eventi" className="bg-baglio-oro hover:bg-baglio-oroImperiale text-baglio-ebanoIntenso">
              ✨ Organizza il tuo evento qui
            </CTAButton>
            <CTAButton to="/contatti" outline className="border-baglio-oro text-baglio-oro hover:bg-baglio-oro hover:text-baglio-ebanoIntenso">
              📩 Contattaci per info
            </CTAButton>
          </div>
          
          {/* Instagram CTA prominente */}
          <div className="bg-gradient-to-r from-baglio-oro/20 to-baglio-oroImperiale/20 rounded-lg p-4 border border-baglio-oro/30">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Instagram size={20} className="text-baglio-oro" />
              <span className="text-baglio-oro font-semibold">Seguici su Instagram</span>
            </div>
            <p className="text-baglio-cremaIntonacata/80 text-sm mb-3">
              @baglioabbateevents - Scopri altre foto esclusive!
            </p>
            <a 
              href="https://instagram.com/baglioabbateevents" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-baglio-oro hover:bg-baglio-oroImperiale text-baglio-ebanoIntenso font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Instagram className="mr-2" size={16} />
              Seguici ora
            </a>
          </div>
        </div>
      </div>

      {/* Image thumbnails navigation */}
      {images.length > 1 && !isMobile && (
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 p-2 rounded-lg border border-baglio-oro/30">
          {images.slice(Math.max(0, currentIndex - 2), currentIndex + 3).map((image, index) => {
            const actualIndex = Math.max(0, currentIndex - 2) + index;
            return (
              <button
                key={actualIndex}
                onClick={() => {/* Navigate to specific image */}}
                className={`w-12 h-12 rounded overflow-hidden border-2 transition-all ${
                  actualIndex === currentIndex 
                    ? 'border-baglio-oro scale-110' 
                    : 'border-transparent hover:border-baglio-oro/50'
                }`}
              >
                <img 
                  src={image.src} 
                  alt="" 
                  className="w-full h-full object-cover"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default GalleryLightbox;
