
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
      <div 
        className="flex w-full h-full transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
          width: `${images.length * 100}%`
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 relative"
            style={{ width: `${100 / images.length}%` }}
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
    </div>
  );
};

export default HeroCarousel;
