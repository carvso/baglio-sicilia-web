
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageWithOverlay from '../ImageWithOverlay';
import { useIsMobile } from '@/hooks/use-mobile';

type TeaserCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
};

const TeaserCard = ({ title, description, imageSrc, link }: TeaserCardProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
      <ImageWithOverlay 
        src={imageSrc} 
        alt={title} 
        overlayOpacity={30}
        className={`${isMobile ? 'h-80' : 'h-96'}`}
      >
        <div className="p-4 md:p-6 text-white w-full absolute bottom-0 left-0">
          <h3 className="text-xl md:text-2xl font-playfair font-semibold mb-2 md:mb-3">{title}</h3>
          <p className="mb-3 md:mb-4 opacity-90 text-sm md:text-base">{description}</p>
          <Link 
            to={link}
            className="inline-flex items-center font-medium text-white hover:text-baglio-terracotta transition-colors text-sm md:text-base"
          >
            Scopri di più <ArrowRight size={isMobile ? 16 : 18} className="ml-2" />
          </Link>
        </div>
      </ImageWithOverlay>
    </div>
  );
};

const TeaserSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="section-padding">
      <div className="baglio-container">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-semibold mb-3 md:mb-4">Le nostre esperienze</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Scopri tutto ciò che Baglio Abbate ha da offrire, dalle delizie culinarie ai momenti indimenticabili.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          <TeaserCard 
            title="Ristorante" 
            description="Sapori autentici della tradizione siciliana rivisitati con creatività e passione dai nostri chef."
            imageSrc="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
            link="/ristorante"
          />
          <TeaserCard 
            title="Lounge Bar" 
            description="Cocktail artigianali e selezione di vini in un'atmosfera raffinata e accogliente."
            imageSrc="/lovable-uploads/d7dc3f33-bd94-4e1b-b910-8a09026f94bf.png"
            link="/ristorante"
          />
          <TeaserCard 
            title="Eventi" 
            description="La cornice ideale per matrimoni, cerimonie ed eventi speciali da ricordare."
            imageSrc="/lovable-uploads/82698643-0369-4ee1-9b14-cf38c7d570df.png"
            link="/eventi"
          />
        </div>
      </div>
    </section>
  );
};

export default TeaserSection;
