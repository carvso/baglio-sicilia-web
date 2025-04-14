
import React from 'react';
import SectionTitle from '../SectionTitle';

const IntroSection = () => {
  return (
    <section className="section-padding bg-baglio-cream bg-opacity-20">
      <div className="baglio-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <SectionTitle 
              title="Benvenuti al Baglio Abbate" 
              subtitle="Una storica struttura siciliana nel cuore di Balestrate"
            />
            <p className="text-gray-700 mb-6">
              Situato in un'antica masseria restaurata con amore e passione, il Baglio Abbate è un luogo dove storia, 
              tradizione e innovazione si fondono in un'esperienza indimenticabile. I nostri spazi, immersi nel 
              fascino senza tempo della Sicilia, offrono un'atmosfera unica per ogni momento speciale.
            </p>
            <p className="text-gray-700 mb-6">
              Dal nostro ristorante che celebra i sapori autentici della cucina siciliana al lounge bar 
              dove gustare cocktail artigianali al tramonto, ogni elemento è pensato per regalare 
              emozioni e ricordi che durano nel tempo.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <img 
              src="https://images.unsplash.com/photo-1583227061267-8428fb76fbfd?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
              alt="Esterni del Baglio Abbate" 
              className="rounded-lg shadow-md h-full object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
              alt="Interni del Baglio Abbate" 
              className="rounded-lg shadow-md h-full object-cover mt-6 md:mt-12"
            />
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
              alt="Dettagli architettonici" 
              className="rounded-lg shadow-md h-full object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1611424564056-d7c670f71e2f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
              alt="Piatti tipici siciliani" 
              className="rounded-lg shadow-md h-full object-cover mt-6 md:mt-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
