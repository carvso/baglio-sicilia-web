
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import HeroSection from '@/components/sections/HeroSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useIsMobile } from '@/hooks/use-mobile';
import SectionTitle from '@/components/SectionTitle';
import CTAButton from '@/components/CTAButton';

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <Layout hideNavbar={false} hideFooter={false}>
      {/* Hero Section */}
      <HeroSection 
        title="Baglio Abbate"
        subtitle="Location esclusiva per eventi indimenticabili nel cuore della Sicilia"
        imageSrc="/lovable-uploads/dbe1c6fb-b0fd-4f46-b937-20e7e2e4c8cc.png"
      />
      
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
                Dettagli curati con attenzione, materiali di qualità e servizio impeccabile per ogni evento.
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Event 1 */}
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
                  Un viaggio sensoriale attraverso i migliori vini della tradizione enologica siciliana.
                </p>
                <Link to="/eventi" className="text-baglio-terracotta font-semibold hover:underline">
                  Scopri di più →
                </Link>
              </div>
            </div>
            
            {/* Event 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/lovable-uploads/75cf2578-451c-46db-8c39-c3dcc02f7157.png" 
                alt="Matrimonio al Baglio" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-baglio-terracotta font-semibold mb-2">10 Giugno 2025</div>
                <h3 className="text-xl font-bold mb-2 font-playfair">Open Day Matrimoni</h3>
                <p className="text-gray-600 mb-4">
                  Visita il Baglio Abbate e scopri come organizzare il matrimonio dei tuoi sogni.
                </p>
                <Link to="/eventi" className="text-baglio-terracotta font-semibold hover:underline">
                  Scopri di più →
                </Link>
              </div>
            </div>
            
            {/* Event 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/lovable-uploads/dbe1c6fb-b0fd-4f46-b937-20e7e2e4c8cc.png" 
                alt="Workshop al Baglio" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-baglio-terracotta font-semibold mb-2">15 Giugno 2025</div>
                <h3 className="text-xl font-bold mb-2 font-playfair">Workshop di Ceramica</h3>
                <p className="text-gray-600 mb-4">
                  Scopri l'arte della ceramica siciliana in un'esperienza unica presso il nostro Baglio.
                </p>
                <Link to="/eventi" className="text-baglio-terracotta font-semibold hover:underline">
                  Scopri di più →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <CTAButton to="/baglio-abbate" outline={false}>
              Esplora il Baglio Abbate
            </CTAButton>
          </div>
        </div>
      </section>
      
      <WhatsAppButton message="Ciao! Sono interessato a maggiori informazioni su Baglio Abbate." />
    </Layout>
  );
};

export default Index;
