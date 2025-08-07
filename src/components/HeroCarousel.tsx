
import React, { useState, useEffect } from 'react';

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

  // Preload all images
  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image.src;
    });
  }, [images]);
  
  return (
    <div className="w-full h-full relative overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{
            willChange: 'opacity',
            transform: 'translate3d(0, 0, 0)' // GPU acceleration
          }}
        >
          <img 
            src={image.src} 
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
