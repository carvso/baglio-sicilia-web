
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Camera, Heart, Utensils, Briefcase } from 'lucide-react';
import { getLovableUploadPath } from '@/lib/paths';

const TacticalCTAGrid = () => {
  const ctaItems = [
    {
      id: 'eventi-aziendali',
      title: 'Eventi Aziendali',
      description: 'Meeting, conferenze e team building in location esclusiva',
      image: '/lovable-uploads/9ecdc519-b037-4d62-a662-90ab4707a819.png',
      link: '/eventi-aziendali',
      icon: Briefcase,
      color: 'from-baglio-oro to-baglio-oroImperiale'
    },
    {
      id: 'eventi',
      title: 'Scopri i Nostri Eventi',
      description: 'Degustazioni, workshop e serate speciali nel nostro Baglio',
      image: getLovableUploadPath('82698643-0369-4ee1-9b14-cf38c7d570df.png'),
      link: '/eventi',
      icon: Calendar,
      color: 'from-baglio-oro to-baglio-oroImperiale'
    },
    {
      id: 'gallery',
      title: 'Esplora la Gallery',
      description: 'Scopri tutti gli spazi e i dettagli del nostro Baglio',
      image: getLovableUploadPath('ac14664b-cf42-46ec-90e4-d0461e9f18a2.png'),
      link: '/gallery',
      icon: Camera,
      color: 'from-baglio-oro to-baglio-oroImperiale'
    },
    {
      id: 'matrimoni',
      title: 'Il Tuo Matrimonio',
      description: 'Una location da sogno per il giorno più importante',
      image: getLovableUploadPath('abd0f4fc-88b2-4370-b75c-a060e0f81d76.png'),
      link: '/matrimoni',
      icon: Heart,
      color: 'from-baglio-oro to-baglio-oroImperiale'
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
            
            return (
              <Link
                key={item.id}
                to={item.link}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 border-baglio-oro/30 hover:border-baglio-oro"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-baglio-ebano/90 via-baglio-ebano/50 to-transparent"></div>
                </div>
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-full bg-gradient-to-r ${item.color}`}>
                      <IconComponent size={16} className="text-baglio-ebano" />
                    </div>
                    <h3 className="text-baglio-oro font-playfair font-bold text-lg">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-baglio-cremaIntonacata text-sm">
                    {item.description}
                  </p>
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
