
import React from 'react';
import { ChevronDown } from 'lucide-react';
import CTAButton from '../CTAButton';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

type HeroSectionProps = {
  title: string;
  subtitle: string;
  imageSrc: string;
  className?: string;
};

const HeroSection = ({ title, subtitle, imageSrc, className }: HeroSectionProps) => {
  const isMobile = useIsMobile();
  
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className={cn("hero-section", className)}>
      <div className="absolute inset-0">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content animate-fade-in px-4 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-playfair text-white">
          {title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 max-w-2xl text-white">
          {subtitle}
        </p>
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 ${isMobile ? 'w-full' : ''}`}>
          <CTAButton to="/baglio-abbate" fullWidth={isMobile}>Esplora il Baglio</CTAButton>
          <CTAButton to="/eventi" outline={true} fullWidth={isMobile}>Scopri i nostri eventi</CTAButton>
        </div>
        <button 
          onClick={scrollToNextSection}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-baglio-oro transition-colors duration-300"
          aria-label="Scroll down"
        >
          <ChevronDown size={36} className="animate-bounce" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
