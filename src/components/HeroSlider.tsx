import React, { useState, useEffect } from 'react';

type HeroSliderProps = {
  images: Array<{
    src: string;
    alt: string;
  }>;
  autoplaySpeed?: number;
  children?: React.ReactNode;
};

const HeroSlider = ({ images, autoplaySpeed = 5000, children }: HeroSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    if (autoplaySpeed > 0 && images.length > 1) {
      const interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % images.length);
      }, autoplaySpeed);
      
      return () => clearInterval(interval);
    }
  }, [autoplaySpeed, images.length]);

  // Preload all images for smooth transitions
  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image.src;
    });
  }, [images]);
  
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Image Slider with Fade Effect */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
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
        
        {/* Navy Blue Overlay Filters */}
        <div className="absolute inset-0 bg-baglio-ebano/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-baglio-ebano/40 via-baglio-ebano/60 to-baglio-ebano/80"></div>
      </div>
      
      {/* Heritage Pattern Overlay */}
      <div className="absolute inset-0 heritage-pattern opacity-10"></div>
      
      {/* Content Overlay */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};

export default HeroSlider;