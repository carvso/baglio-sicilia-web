
import React, { useState, useEffect } from 'react';
import { getLovableUploadPath } from '@/lib/paths';

type HeroCarouselProps = {
  images: Array<{
    src: string;
    alt: string;
  }>;
  autoplaySpeed?: number;
};

const HeroCarousel = ({ images, autoplaySpeed = 4000 }: HeroCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    if (autoplaySpeed > 0 && images.length > 1) {
      const interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % images.length);
      }, autoplaySpeed);
      
      return () => clearInterval(interval);
    }
  }, [autoplaySpeed, images.length]);

  // Preload all images with unified path handling
  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      const imageSrc = image.src.startsWith('/lovable-uploads/') 
        ? getLovableUploadPath(image.src.replace('/lovable-uploads/', ''))
        : image.src;
      img.src = imageSrc;
    });
  }, [images]);

  // Get unified image source
  const getImageSrc = (src: string) => {
    if (src.startsWith('/lovable-uploads/')) {
      const filename = src.replace('/lovable-uploads/', '');
      return getLovableUploadPath(filename);
    }
    return src;
  };
  
  return (
    <div className="w-full h-full relative overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out"
          style={{ 
            opacity: index === activeIndex ? 1 : 0,
            willChange: 'opacity'
          }}
        >
          <img 
            src={getImageSrc(image.src)} 
            alt={image.alt} 
            className="w-full h-full object-cover"
            loading={index <= 1 ? "eager" : "lazy"}
            onError={(e) => {
              console.error(`Failed to load image: ${image.src}`);
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default HeroCarousel;
