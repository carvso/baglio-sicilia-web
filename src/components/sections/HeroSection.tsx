
import React from 'react';
import { ChevronDown } from 'lucide-react';
import CTAButton from '../CTAButton';

type HeroSectionProps = {
  title: string;
  subtitle: string;
  imageSrc: string;
};

const HeroSection = ({ title, subtitle, imageSrc }: HeroSectionProps) => {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="hero-section">
      <div className="absolute inset-0">
        <img 
          src={imageSrc} 
          alt="Baglio Abbate" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-playfair">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <CTAButton to="/contatti">Prenota un tavolo</CTAButton>
          <CTAButton to="/eventi" outline={true}>Organizza il tuo evento</CTAButton>
        </div>
        <button 
          onClick={scrollToNextSection}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white hover:text-baglio-terracotta transition-colors duration-300"
          aria-label="Scroll down"
        >
          <ChevronDown size={36} className="animate-bounce" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
