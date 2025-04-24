
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import HeroCarousel from '@/components/HeroCarousel';
import CTAButton from '@/components/CTAButton';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  
  const baglioImages = [
    {
      src: "/lovable-uploads/dbe1c6fb-b0fd-4f46-b937-20e7e2e4c8cc.png",
      alt: "Baglio Abbate - Location per eventi"
    },
    {
      src: "/lovable-uploads/75cf2578-451c-46db-8c39-c3dcc02f7157.png",
      alt: "Baglio Abbate - Interni"
    }
  ];
  
  const terrazzaImages = [
    {
      src: "/lovable-uploads/82698643-0369-4ee1-9b14-cf38c7d570df.png",
      alt: "Terrazza Elite - Sunset Lounge Bar"
    },
    {
      src: "/lovable-uploads/abd0f4fc-88b2-4370-b75c-a060e0f81d76.png",
      alt: "Terrazza Elite - Vista panoramica"
    }
  ];
  
  return (
    <Layout hideNavbar={false} hideFooter={false}>
      {/* Hero Split Section */}
      <section className="w-full h-screen flex flex-col md:flex-row">
        {/* Baglio Abbate Section */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <HeroCarousel images={baglioImages} />
          </div>
          <div className="absolute inset-0 flex items-center justify-center p-8 z-10">
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Baglio Abbate</h2>
              <p className="text-lg md:text-xl mb-6 max-w-md mx-auto">
                Dove la tradizione siciliana incontra l'eleganza, per eventi indimenticabili in una location storica.
              </p>
              <CTAButton to="/baglio-abbate" outline={false}>
                Scopri il Baglio
              </CTAButton>
            </div>
          </div>
        </div>
        
        {/* Terrazza Lounge Bar Section */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <HeroCarousel images={terrazzaImages} />
          </div>
          <div className="absolute inset-0 flex items-center justify-center p-8 z-10">
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Terrazza Elite</h2>
              <p className="text-lg md:text-xl mb-6 max-w-md mx-auto">
                Vivi l'emozione dei tramonti siciliani nel nostro esclusivo lounge bar con vista mozzafiato.
              </p>
              <CTAButton to="/terrazza-lounge" outline={false}>
                Scopri la Terrazza
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
      
      {/* Brand Values Section */}
      <section className="py-16 bg-white">
        <div className="baglio-container">
          <h2 className="text-3xl md:text-4xl font-playfair text-center mb-12">I Nostri Valori</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 text-baglio-terracotta">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 font-playfair">Posizione Unica</h3>
              <p className="text-gray-600">
                Nel cuore di Balestrate, con vista sul mare e sulla costa siciliana, a pochi passi dalla spiaggia.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 text-baglio-terracotta">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 font-playfair">Qualità Superiore</h3>
              <p className="text-gray-600">
                Ingredienti freschi e locali, preparazioni curate nei minimi dettagli e servizio impeccabile.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 text-baglio-terracotta">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 font-playfair">Esperienza Memorabile</h3>
              <p className="text-gray-600">
                Ogni momento trascorso con noi diventa un ricordo indelebile, grazie all'atmosfera unica e all'attenzione personalizzata.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Upcoming Events Section */}
      <section className="py-16 bg-baglio-cream bg-opacity-20">
        <div className="baglio-container">
          <h2 className="text-3xl md:text-4xl font-playfair text-center mb-12">Eventi in Programma</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Baglio Event */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/lovable-uploads/47aec7fc-7c64-4fac-b4eb-63d4913afc3a.png" 
                alt="Evento al Baglio" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-baglio-terracotta font-semibold mb-2">28 Maggio 2025</div>
                <h3 className="text-xl font-bold mb-2 font-playfair">Degustazione Vini Siciliani</h3>
                <p className="text-gray-600 mb-4">
                  Un viaggio sensoriale attraverso i migliori vini della tradizione enologica siciliana, accompagnati da finger food gourmet.
                </p>
                <Link to="/baglio-abbate" className="text-baglio-terracotta font-semibold hover:underline">
                  Scopri di più →
                </Link>
              </div>
            </div>
            
            {/* Terrazza Event */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/lovable-uploads/d7dc3f33-bd94-4e1b-b910-8a09026f94bf.png" 
                alt="Evento alla Terrazza" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-baglio-terracotta font-semibold mb-2">4 Giugno 2025</div>
                <h3 className="text-xl font-bold mb-2 font-playfair">Sunset DJ Set</h3>
                <p className="text-gray-600 mb-4">
                  La migliore musica lounge e deep house con vista sul tramonto, accompagnata dai nostri cocktail signature e finger food.
                </p>
                <Link to="/terrazza-lounge" className="text-baglio-terracotta font-semibold hover:underline">
                  Scopri di più →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <WhatsAppButton message="Ciao! Sono interessato a maggiori informazioni su Baglio Abbate e Terrazza Elite." />
    </Layout>
  );
};

export default Index;
