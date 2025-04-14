
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageWithOverlay from '../ImageWithOverlay';

type TeaserCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
};

const TeaserCard = ({ title, description, imageSrc, link }: TeaserCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
      <ImageWithOverlay 
        src={imageSrc} 
        alt={title} 
        overlayOpacity={30}
        className="h-96"
      >
        <div className="p-6 text-white w-full absolute bottom-0 left-0">
          <h3 className="text-2xl font-playfair font-semibold mb-3">{title}</h3>
          <p className="mb-4 opacity-90">{description}</p>
          <Link 
            to={link}
            className="inline-flex items-center font-medium text-white hover:text-baglio-terracotta transition-colors"
          >
            Scopri di più <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </ImageWithOverlay>
    </div>
  );
};

const TeaserSection = () => {
  return (
    <section className="section-padding">
      <div className="baglio-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">Le nostre esperienze</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Scopri tutto ciò che Baglio Abbate ha da offrire, dalle delizie culinarie ai momenti indimenticabili.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TeaserCard 
            title="Ristorante" 
            description="Sapori autentici della tradizione siciliana rivisitati con creatività e passione dai nostri chef."
            imageSrc="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
            link="/ristorante"
          />
          <TeaserCard 
            title="Lounge Bar" 
            description="Cocktail artigianali e selezione di vini in un'atmosfera raffinata e accogliente."
            imageSrc="https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
            link="/ristorante"
          />
          <TeaserCard 
            title="Eventi" 
            description="La cornice ideale per matrimoni, cerimonie ed eventi speciali da ricordare."
            imageSrc="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
            link="/eventi"
          />
        </div>
      </div>
    </section>
  );
};

export default TeaserSection;
