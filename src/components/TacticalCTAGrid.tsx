import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Camera, Heart, Utensils, Briefcase } from 'lucide-react';

const TacticalCTAGrid = () => {
  const ctaItems = [
    {
      id: 'eventi-aziendali',
      title: 'Eventi Aziendali',
      description: 'Meeting, conferenze e team building in location esclusiva',
      image: '/lovable-uploads/1a152ccf-f53d-47a9-8d2f-f43edceba327.png',
      link: '/eventi-aziendali',
      icon: Briefcase,
      color: 'from-baglio-oro to-baglio-oroImperiale'
    },
    {
      id: 'eventi',
      title: 'Scopri i Nostri Eventi',
      description: 'Degustazioni, workshop e serate speciali nel nostro Baglio',
      image: '/lovable-uploads/82698643-0369-4ee1-9b14-cf38c7d570df.png',
      link: '/eventi',
      icon: Calendar,
      color: 'from-baglio-oro to-baglio-oroImperiale'
    },
    {
      id: 'gallery',
      title: 'Esplora la Gallery',
      description: 'Scopri tutti gli spazi e i dettagli del nostro Baglio',
      image: '/lovable-uploads/ac14664b-cf42-46ec-90e4-d0461e9f18a2.png',
      link: '/gallery',
      icon: Camera,
      color: 'from-baglio-oro to-baglio-oroImperiale'
    },
    {
      id: 'matrimoni',
      title: 'Il Tuo Matrimonio',
      description: 'Una location da sogno per il giorno più importante',
      image: '/lovable-uploads/abd0f4fc-88b2-4370-b75c-a060e0f81d76.png',
      link: '/matrimoni',
      icon: Heart,
      color: 'from-baglio-oro to-baglio-oroImperiale'
    },
    {
      id: 'ristorante',
      title: 'Prenota un Tavolo',
      description: 'Gusta la cucina siciliana nella nostra terrazza vista mare',
      image: '/lovable-uploads/1a152ccf-f53d-47a9-8d2f-f43edceba327.png',
      backgroundImage: '/lovable-uploads/ac14664b-cf42-46ec-90e4-d0461e9f18a2.png',
      link: '/ristorante',
      icon: Utensils,
      color: 'from-baglio-oro to-baglio-oroImperiale',
      special: true
    }
  ];

  return (
    <section className="py-16 bg-baglio-ebano">
      <div className="baglio-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-baglio-oro">
            Scopri tutto quello che possiamo offrirti
          </h2>
          <p className="text-lg text-baglio-cremaIntonacata max-w-2xl mx-auto">
            Dal matrimonio dei tuoi sogni alla cena romantica, ogni momento diventa speciale al Baglio Abbate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ctaItems.map((item) => {
            const IconComponent = item.icon;
            const isSpecialCTA = item.special;
            
            return (
              <Link
                key={item.id}
                to={item.link}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 border-baglio-oro/30 hover:border-baglio-oro"
              >
                {/* Background Image for special CTA (Prenota un Tavolo) */}
                {isSpecialCTA && (
                  <div className="absolute inset-0 z-0">
                    <img
                      src={item.backgroundImage}
                      alt="Terrazza del ristorante"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-baglio-ebano/95 via-baglio-ebano/70 to-baglio-ebano/50"></div>
                  </div>
                )}

                {/* Regular Image for other CTAs */}
                {!isSpecialCTA && (
                  <>
                    <div className="h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-baglio-ebano/90 via-baglio-ebano/50 to-transparent"></div>
                    </div>
                  </>
                )}

                {/* Content */}
                <div className={`absolute ${isSpecialCTA ? 'inset-0 flex flex-col justify-center' : 'bottom-0 left-0 right-0'} p-4 z-10`}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-full bg-gradient-to-r ${item.color}`}>
                      <IconComponent size={16} className="text-baglio-ebano" />
                    </div>
                    <h3 className="text-baglio-oro font-playfair font-bold text-lg">
                      {item.title}
                    </h3>
                  </div>
                  <p className={`text-baglio-cremaIntonacata text-sm ${isSpecialCTA ? 'text-center' : ''}`}>
                    {item.description}
                  </p>
                  
                  {/* Special CTA button for restaurant */}
                  {isSpecialCTA && (
                    <div className="mt-4 text-center">
                      <span className="inline-flex items-center px-4 py-2 bg-baglio-oro text-baglio-ebano font-semibold rounded-full text-sm group-hover:bg-baglio-oroImperiale transition-colors duration-300">
                        🍽️ Prenota Ora
                      </span>
                    </div>
                  )}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-baglio-oro/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TacticalCTAGrid;
