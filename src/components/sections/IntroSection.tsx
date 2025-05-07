
import React from 'react';
import SectionTitle from '../SectionTitle';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

type IntroSectionProps = {
  className?: string;
};

const IntroSection = ({ className }: IntroSectionProps) => {
  const isMobile = useIsMobile();
  
  return (
    <section className={cn("section-padding bg-baglio-crema/20 dark:bg-baglio-blu/20", className)}>
      <div className="baglio-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="animate-fade-up">
            <SectionTitle 
              title="Benvenuti al Baglio Abbate" 
              subtitle="Una storica struttura siciliana nel cuore di Balestrate"
            />
            <p className="text-gray-700 dark:text-baglio-grigio mb-4 md:mb-6">
              Situato in un'antica masseria restaurata con amore e passione, il Baglio Abbate è un luogo dove storia, 
              tradizione e innovazione si fondono in un'esperienza indimenticabile. I nostri spazi, immersi nel 
              fascino senza tempo della Sicilia, offrono un'atmosfera unica per ogni momento speciale.
            </p>
            <p className="text-gray-700 dark:text-baglio-grigio mb-4 md:mb-6">
              Dal nostro ristorante che celebra i sapori autentici della cucina siciliana al lounge bar 
              dove gustare cocktail artigianali al tramonto, ogni elemento è pensato per regalare 
              emozioni e ricordi che durano nel tempo.
            </p>
          </div>
          <div className={cn("grid grid-cols-2 gap-3 md:gap-4 animate-fade-up", isMobile ? 'mt-4' : '')} style={{ animationDelay: '0.2s' }}>
            <img 
              src="/lovable-uploads/d7dc3f33-bd94-4e1b-b910-8a09026f94bf.png" 
              alt="Arco interno con soffitto in legno" 
              className="rounded-lg shadow-md h-full object-cover"
              loading="lazy"
            />
            <img 
              src="/lovable-uploads/75cf2578-451c-46db-8c39-c3dcc02f7157.png" 
              alt="Ingresso con decorazioni floreali" 
              className="rounded-lg shadow-md h-full object-cover mt-4 md:mt-12"
              loading="lazy"
            />
            <img 
              src="/lovable-uploads/47aec7fc-7c64-4fac-b4eb-63d4913afc3a.png" 
              alt="Interni eleganti con archi" 
              className="rounded-lg shadow-md h-full object-cover"
              loading="lazy"
            />
            <img 
              src="/lovable-uploads/abd0f4fc-88b2-4370-b75c-a060e0f81d76.png" 
              alt="Tavolo decorato all'esterno" 
              className="rounded-lg shadow-md h-full object-cover mt-4 md:mt-12"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
