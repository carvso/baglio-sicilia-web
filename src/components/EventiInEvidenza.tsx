
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, MapPin, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getLovableUploadPath } from '@/lib/paths';

const EventiInEvidenza = () => {
  const eventiInEvidenza = [
    {
      id: 1,
      title: "Degustazione Vini Siciliani",
      date: "28 Maggio 2025",
      time: "19:00",
      image: getLovableUploadPath("47aec7fc-7c64-4fac-b4eb-63d4913afc3a.png"),
      description: "Un viaggio sensoriale attraverso i migliori vini della tradizione enologica siciliana negli eleganti interni del Baglio",
      participants: "25 posti disponibili",
      isHighlight: true,
      price: "€45 a persona"
    },
    {
      id: 2,
      title: "Open Day Matrimoni",
      date: "10 Giugno 2025",
      time: "16:00",
      image: getLovableUploadPath("abd0f4fc-88b2-4370-b75c-a060e0f81d76.png"),
      description: "Visita il Baglio Abbate e scopri la sala allestita per matrimoni con tovaglie color pesca, perfetta per il tuo giorno speciale",
      participants: "Evento gratuito",
      isHighlight: false,
      price: "Ingresso libero"
    },
    {
      id: 3,
      title: "Workshop di Ceramica",
      date: "15 Giugno 2025",
      time: "10:00",
      image: getLovableUploadPath("82698643-0369-4ee1-9b14-cf38c7d570df.png"),
      description: "Scopri l'arte della ceramica siciliana nella nostra elegante sala con allestimento professionale",
      participants: "15 posti disponibili",
      isHighlight: false,
      price: "€35 a persona"
    }
  ];

  return (
    <section className="py-16 bg-baglio-ebano relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 heritage-pattern opacity-10"></div>
      
      <div className="baglio-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-baglio-oro/20 px-4 py-2 rounded-full mb-4">
            <Calendar className="w-5 h-5 text-baglio-oro" />
            <span className="text-baglio-oro font-semibold text-sm uppercase tracking-wide">Eventi in Evidenza</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-6 text-baglio-cremaIntonacata">
            Prossimi Eventi al Baglio
          </h2>
          <p className="text-lg text-baglio-cremaIntonacata/80 max-w-2xl mx-auto">
            Scopri le esperienze uniche che ti aspettano nella nostra dimora storica con i suoi eleganti interni
          </p>
        </div>

        {/* Eventi Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 filter blur-sm pointer-events-none select-none opacity-60">
            {eventiInEvidenza.map((evento, index) => (
              <div
                key={evento.id}
                className={cn(
                  "eventi-card-premium animate-gentle-fade-in",
                  evento.isHighlight && "lg:col-span-2 lg:row-span-1",
                  index === 0 && "delay-100",
                  index === 1 && "delay-200",
                  index === 2 && "delay-300"
                )}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={evento.image} 
                    alt={evento.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-baglio-ebano/80 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-baglio-oro text-baglio-ebano px-3 py-1 rounded-full text-sm font-semibold">
                    {evento.price}
                  </div>
                  {evento.isHighlight && (
                    <div className="absolute top-4 left-4 bg-baglio-oro text-baglio-ebano px-3 py-1 rounded-full text-sm font-bold animate-shimmer">
                      ⭐ In Evidenza
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-baglio-oro text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{evento.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{evento.time}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-playfair font-bold mb-3 text-baglio-cremaIntonacata">
                    {evento.title}
                  </h3>
                  <p className="text-baglio-cremaIntonacata/80 mb-4 leading-relaxed">
                    {evento.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-baglio-oro text-sm">
                      <Users className="w-4 h-4" />
                      <span>{evento.participants}</span>
                    </div>
                    <Link 
                      to="/eventi"
                      className="inline-flex items-center gap-2 bg-baglio-oro text-baglio-ebano px-4 py-2 rounded-md font-semibold transition-all duration-300 hover:bg-baglio-oroImperiale hover:shadow-lg transform hover:scale-105"
                    >
                      Scopri di più
                      <MapPin className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
            <div className="bg-baglio-ebano/80 rounded-xl px-8 py-12 shadow-2xl text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-baglio-oro mb-4">Stiamo lavorando sui prossimi eventi</h3>
              <p className="text-baglio-cremaIntonacata/80 text-lg">Torna presto per scoprire le nuove esperienze in programma al Baglio Abbate.</p>
            </div>
          </div>
        </div>

        {/* CTA Bottom */}
        <div className="text-center mt-12">
          <Link 
            to="/eventi"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-baglio-oro text-baglio-oro px-8 py-4 rounded-md font-semibold transition-all duration-300 hover:bg-baglio-oro hover:text-baglio-ebano hover:shadow-xl transform hover:scale-105"
          >
            <Calendar className="w-5 h-5" />
            Vedi Tutti gli Eventi
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventiInEvidenza;
