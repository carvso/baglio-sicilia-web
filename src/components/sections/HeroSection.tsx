
import React from 'react';
import { ChevronDown, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
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
    const target = document.getElementById('eventi-in-evidenza');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <div className={cn("hero-section-enhanced relative overflow-hidden min-h-screen", className)}>
      {/* Background Image with Enhanced Navy Blue Overlay */}
      <div className="absolute inset-0">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Navy blue overlays instead of black */}
        <div className="absolute inset-0 bg-baglio-ebano/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-baglio-ebano/40 via-baglio-ebano/60 to-baglio-ebano/80"></div>
      </div>
      
      {/* Heritage Pattern Overlay */}
      <div className="absolute inset-0 heritage-pattern opacity-10"></div>
      
      {/* Main Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto min-h-screen">
        
        {/* Main Title */}
        <div className="mb-8 animate-gentle-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 drop-shadow-lg">
            {title}
          </h1>
          
          {/* Subtitle */}
          <div className="space-y-3 max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-crimson font-light text-white leading-relaxed drop-shadow-md">
              Il tuo evento tra pietra antica, luce dorata e cielo siciliano.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 font-crimson font-light italic drop-shadow-md">
              Una dimora storica per i momenti che contano davvero.
            </p>
          </div>
        </div>

        {/* Primary CTA Button */}
        <div className="mb-8 animate-gentle-fade-in delay-200">
          <Link 
            to="/eventi"
            className="group bg-baglio-oro hover:bg-baglio-oroImperiale text-baglio-ebano font-semibold px-8 py-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center space-x-2 text-lg font-inter"
          >
            <MapPin size={20} className="group-hover:scale-110 transition-transform duration-300" />
            <span>Scopri la location</span>
          </Link>
        </div>

        {/* Secondary Navigation Menu */}
        <div className="animate-gentle-fade-in delay-300">
          <nav className="flex flex-wrap justify-center items-center space-x-1 sm:space-x-6 text-sm sm:text-base">
            <Link 
              to="/eventi"
              className="px-3 py-2 text-white hover:text-baglio-oro transition-colors duration-300 border-b-2 border-transparent hover:border-baglio-oro font-medium font-inter"
            >
              Eventi
            </Link>
            <span className="text-white/50 hidden sm:inline">•</span>
            <Link 
              to="/gallery"
              className="px-3 py-2 text-white hover:text-baglio-oro transition-colors duration-300 border-b-2 border-transparent hover:border-baglio-oro font-medium font-inter"
            >
              Gallery
            </Link>
            <span className="text-white/50 hidden sm:inline">•</span>
            <Link 
              to="/contatti"
              className="px-3 py-2 text-white hover:text-baglio-oro transition-colors duration-300 border-b-2 border-transparent hover:border-baglio-oro font-medium font-inter"
            >
              Contatti
            </Link>
          </nav>
        </div>
      </div>

      {/* Enhanced Scroll Hint - Now Perfectly Centered */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-30">
        <button 
          onClick={scrollToNextSection}
          className="text-white hover:text-baglio-oro transition-all duration-300 animate-gentle-fade-in delay-500 group p-4 rounded-full hover:bg-white/10 backdrop-blur-sm"
          aria-label="Scroll down"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm font-medium tracking-wider opacity-80 group-hover:opacity-100 transition-opacity font-inter">
              Scopri di più
            </span>
            <div className="relative">
              <ChevronDown 
                size={32} 
                className="animate-bounce group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" 
              />
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-baglio-oro/20 rounded-full blur-md scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
