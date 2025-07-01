
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';
import HeroSection from '@/components/sections/HeroSection';
import EventiInEvidenza from '@/components/EventiInEvidenza';
import { useIsMobile } from '@/hooks/use-mobile';
import SectionTitle from '@/components/SectionTitle';
import CTAButton from '@/components/CTAButton';
import { MessageCircle } from 'lucide-react';

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <Layout hideNavbar={false} hideFooter={false}>
      <Helmet>
        <title>Baglio Abbate | Location per Eventi e Matrimoni in Sicilia</title>
        <meta name="description" content="Scopri Baglio Abbate, una location esclusiva per eventi e matrimoni nel cuore della Sicilia. Una cornice unica per i tuoi momenti speciali con vista sul mare." />
        <meta name="keywords" content="baglio abbate, location matrimoni sicilia, eventi sicilia, matrimonio sicilia, location eventi, balestrate" />
        <link rel="canonical" href="https://www.baglioabbate.it" />
        <meta property="og:title" content="Baglio Abbate | Location per Eventi e Matrimoni in Sicilia" />
        <meta property="og:description" content="Una location esclusiva per eventi indimenticabili nel cuore della Sicilia, con vista sul mare." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.baglioabbate.it" />
        <meta property="og:image" content="/lovable-uploads/dbe1c6fb-b0fd-4f46-b937-20e7e2e4c8cc.png" />
      </Helmet>
      
      {/* Enhanced Hero Section */}
      <HeroSection 
        title="Baglio Abbate"
        subtitle="Location esclusiva per eventi indimenticabili nel cuore della Sicilia"
        imageSrc="/lovable-uploads/dbe1c6fb-b0fd-4f46-b937-20e7e2e4c8cc.png"
      />
      
      {/* Eventi in Evidenza Section */}
      <EventiInEvidenza />
      
      {/* Emotional WhatsApp Invitation */}
      <section className="section-padding bg-baglio-ebanoIntenso relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <MessageCircle size={200} className="absolute top-10 right-10 text-baglio-oro rotate-12" />
          <MessageCircle size={150} className="absolute bottom-10 left-10 text-baglio-oro -rotate-12" />
        </div>
        
        {/* Subtle background image without blur - better for mobile performance */}
        <div 
          className="absolute inset-0 opacity-15 bg-cover bg-center"
          style={{
            backgroundImage: `url('/lovable-uploads/75cf2578-451c-46db-8c39-c3dcc02f7157.png')`,
          }}
        ></div>
        
        <div className="baglio-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-6 text-baglio-oro">
              Ogni evento inizia con una conversazione.
            </h2>
            <div className="space-y-4 text-lg md:text-xl text-baglio-cremaIntonacata max-w-2xl mx-auto">
              <p>
                Parlaci della tua idea. Saremo felici di trasformarla in realtà.
              </p>
              <p className="text-base md:text-lg text-baglio-cremaIntonacata/70">
                Scrivici quando vuoi: ti risponde una persona vera.
              </p>
            </div>
            
            {/* Visual hint pointing to WhatsApp button */}
            <div className="mt-8 flex flex-col items-center space-y-2">
              <div className="text-baglio-oro/70 text-sm font-medium tracking-wide">
                👆 Inizia la conversazione
              </div>
              <div className="w-12 h-0.5 bg-baglio-oro/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Brand Values Section */}
      <section className="py-16 bg-baglio-cremaIntonacata">
        <div className="baglio-container">
          <h2 className="text-3xl md:text-4xl font-playfair text-center mb-12 text-baglio-oro">I Nostri Punti di Forza</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 text-baglio-oro">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 font-playfair text-baglio-oro">Posizione Unica</h3>
              <p className="text-baglio-ebanoIntenso/70">
                Nel cuore di Balestrate, con vista sul mare e sulla costa siciliana, a pochi passi dalla spiaggia.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 text-baglio-oro">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 font-playfair text-baglio-oro">Qualità Superiore</h3>
              <p className="text-baglio-ebanoIntenso/70">
                Dettagli curati con attenzione, materiali di qualità e servizio impeccabile per ogni evento.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 text-baglio-oro">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 font-playfair text-baglio-oro">Esperienza Memorabile</h3>
              <p className="text-baglio-ebanoIntenso/70">
                Ogni momento trascorso con noi diventa un ricordo indelebile, grazie all'atmosfera unica e all'attenzione personalizzata.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Venue Showcase Section */}
      <section className="py-16 bg-white">
        <div className="baglio-container">
          <SectionTitle 
            title="Una Location da Sogno" 
            subtitle="Scopri i nostri spazi versatili per ogni tipo di evento"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
            <div className="rounded-lg overflow-hidden shadow-lg border border-baglio-oro/20">
              <img 
                src="/lovable-uploads/dbe1c6fb-b0fd-4f46-b937-20e7e2e4c8cc.png" 
                alt="Spazi interni" 
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
            
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-playfair font-semibold mb-4 text-baglio-oro">Spazi versatili per ogni occasione</h3>
              <p className="text-baglio-ebanoIntenso/70 mb-4">
                Il Baglio Abbate offre diverse aree modulabili per ospitare eventi di ogni dimensione, dai matrimoni 
                intimi alle grandi celebrazioni aziendali. La nostra struttura storica si adatta perfettamente alle 
                tue esigenze, mantenendo sempre quel tocco di eleganza siciliana che ci contraddistingue.
              </p>
              <p className="text-baglio-ebanoIntenso/70 mb-6">
                Sia che tu stia pianificando un matrimonio da favola, una conferenza aziendale o una festa privata, 
                i nostri spazi interni ed esterni sapranno accogliere i tuoi ospiti in un'atmosfera unica.
              </p>
              <CTAButton to="/gallery" className="self-start">
                Esplora la Gallery
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Come raggiungerci Section */}
      <section className="py-16 bg-baglio-ebanoIntenso border-t border-baglio-oro/30">
        <div className="baglio-container">
          <SectionTitle 
            title="Come raggiungerci" 
            subtitle="Siamo a pochi minuti dal centro di Balestrate, facilmente raggiungibili dalla costa occidentale della Sicilia"
            center
            light
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
            <div className="space-y-6">
              <div className="bg-baglio-ebanoIntenso/50 p-6 rounded-lg border border-baglio-oro/20">
                <h3 className="text-xl font-semibold mb-3 text-baglio-oro font-playfair">📍 Indirizzo</h3>
                <p className="text-baglio-cremaIntonacata mb-2">Via Palermo 2, 90041 Balestrate (PA)</p>
                <p className="text-baglio-cremaIntonacata/70">Sicilia, Italia</p>
              </div>
              
              <div className="bg-baglio-ebanoIntenso/50 p-6 rounded-lg border border-baglio-oro/20">
                <h3 className="text-xl font-semibold mb-3 text-baglio-oro font-playfair">🚗 In Auto</h3>
                <p className="text-baglio-cremaIntonacata/70">
                  Dall'autostrada A29 (Palermo-Mazara del Vallo), prendi l'uscita Balestrate. 
                  Segui le indicazioni per il centro di Balestrate, poi per Via Palermo.
                </p>
              </div>
              
              <div className="bg-baglio-ebanoIntenso/50 p-6 rounded-lg border border-baglio-oro/20">
                <h3 className="text-xl font-semibold mb-3 text-baglio-oro font-playfair">✈️ Dall'Aeroporto</h3>
                <p className="text-baglio-cremaIntonacata/70">
                  Aeroporto di Palermo "Falcone Borsellino" a 30 km. 
                  Servizio taxi disponibile o noleggio auto in loco.
                </p>
              </div>
            </div>
            
            <div className="h-[400px] rounded-lg overflow-hidden shadow-lg border border-baglio-oro/20">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25693.09767224354!2d13.00252508697102!3d38.04952056842693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1319a5f7e09e5681%3A0x5667b56b1021075!2s90041%20Balestrate%2C%20Provincia%20di%20Palermo!5e0!3m2!1sit!2sit!4v1650234567890!5m2!1sit!2sit" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa di Baglio Abbate - Via Palermo 2, Balestrate"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <CTAButton to="/contatti" className="bg-baglio-oro hover:bg-baglio-oroImperiale text-baglio-ebanoIntenso">
              Contattaci per Indicazioni
            </CTAButton>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
