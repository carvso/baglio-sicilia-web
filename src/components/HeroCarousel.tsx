
import React, { useState, useEffect } from 'react';

type HeroCarouselProps = {
  images: Array<{
    src: string;
    alt: string;
  }>;
  autoplaySpeed?: number;
};

const HeroCarousel = ({ images, autoplaySpeed = 3500 }: HeroCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    if (autoplaySpeed > 0 && images.length > 1) {
      const interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % images.length);
      }, autoplaySpeed);
      
      return () => clearInterval(interval);
    }
  }, [autoplaySpeed, images.length]);
  
  return (
    <div className="w-full h-full relative overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out z-[1] ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={image.src} 
            alt={image.alt} 
            className="w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
    </div>
  );
};

export default HeroCarousel;
