
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';
import HeroSection from '@/components/sections/HeroSection';
import { useIsMobile } from '@/hooks/use-mobile';
import SectionTitle from '@/components/SectionTitle';
import CTAButton from '@/components/CTAButton';

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
      
      {/* Hero Section */}
      <HeroSection 
        title="Baglio Abbate"
        subtitle="Location esclusiva per eventi indimenticabili nel cuore della Sicilia"
        imageSrc="/lovable-uploads/dbe1c6fb-b0fd-4f46-b937-20e7e2e4c8cc.png"
      />
      
      {/* Premium Callout */}
      <section className="section-padding bg-elite-dark">
        <div className="baglio-container">
          <div className="premium-callout max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4 text-elite-gold">
              Prenota il tuo evento da sogno
            </h2>
            <p className="text-lg text-foreground mb-6">
              Lasciati incantare dalla magia della Sicilia in una location unica che unisce tradizione e eleganza
            </p>
            <CTAButton to="/contatti" className="bg-elite-sunset hover:bg-elite-sunsetLight text-elite-darker">
              Richiedi un preventivo
            </CTAButton>
          </div>
        </div>
      </section>
      
      {/* Brand Values Section */}
      <section className="py-16 bg-card">
        <div className="baglio-container">
          <h2 className="text-3xl md:text-4xl font-playfair text-center mb-12 text-elite-gold">I Nostri Punti di Forza</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 text-elite-gold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 font-playfair text-elite-gold">Posizione Unica</h3>
              <p className="text-muted-foreground">
                Nel cuore di Balestrate, con vista sul mare e sulla costa siciliana, a pochi passi dalla spiaggia.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 text-elite-gold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 font-playfair text-elite-gold">Qualità Superiore</h3>
              <p className="text-muted-foreground">
                Dettagli curati con attenzione, materiali di qualità e servizio impeccabile per ogni evento.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 text-elite-gold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 font-playfair text-elite-gold">Esperienza Memorabile</h3>
              <p className="text-muted-foreground">
                Ogni momento trascorso con noi diventa un ricordo indelebile, grazie all'atmosfera unica e all'attenzione personalizzata.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Upcoming Events Section */}
      <section className="py-16 bg-elite-dark">
        <div className="baglio-container">
          <h2 className="text-3xl md:text-4xl font-playfair text-center mb-12 text-elite-gold">Eventi in Programma</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Event 1 */}
            <div className="event-card overflow-hidden">
              <img 
                src="/lovable-uploads/47aec7fc-7c64-4fac-b4eb-63d4913afc3a.png" 
                alt="Evento al Baglio" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-elite-gold font-semibold mb-2">28 Maggio 2025</div>
                <h3 className="text-xl font-bold mb-2 font-playfair text-elite-gold">Degustazione Vini Siciliani</h3>
                <p className="text-muted-foreground mb-4">
                  Un viaggio sensoriale attraverso i migliori vini della tradizione enologica siciliana.
                </p>
                <Link to="/eventi" className="text-elite-goldLight font-semibold hover:text-elite-gold transition-colors">
                  Scopri di più →
                </Link>
              </div>
            </div>
            
            {/* Event 2 */}
            <div className="event-card overflow-hidden">
              <img 
                src="/lovable-uploads/75cf2578-451c-46db-8c39-c3dcc02f7157.png" 
                alt="Matrimonio al Baglio" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-elite-gold font-semibold mb-2">10 Giugno 2025</div>
                <h3 className="text-xl font-bold mb-2 font-playfair text-elite-gold">Open Day Matrimoni</h3>
                <p className="text-muted-foreground mb-4">
                  Visita il Baglio Abbate e scopri come organizzare il matrimonio dei tuoi sogni.
                </p>
                <Link to="/eventi" className="text-elite-goldLight font-semibold hover:text-elite-gold transition-colors">
                  Scopri di più →
                </Link>
              </div>
            </div>
            
            {/* Event 3 */}
            <div className="event-card overflow-hidden">
              <img 
                src="/lovable-uploads/dbe1c6fb-b0fd-4f46-b937-20e7e2e4c8cc.png" 
                alt="Workshop al Baglio" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-elite-gold font-semibold mb-2">15 Giugno 2025</div>
                <h3 className="text-xl font-bold mb-2 font-playfair text-elite-gold">Workshop di Ceramica</h3>
                <p className="text-muted-foreground mb-4">
                  Scopri l'arte della ceramica siciliana in un'esperienza unica presso il nostro Baglio.
                </p>
                <Link to="/eventi" className="text-elite-goldLight font-semibold hover:text-elite-gold transition-colors">
                  Scopri di più →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <CTAButton to="/gallery" outline={false}>
              Esplora il Baglio Abbate
            </CTAButton>
          </div>
        </div>
      </section>
      
      {/* Venue Showcase Section */}
      <section className="py-16 bg-card">
        <div className="baglio-container">
          <SectionTitle 
            title="Una Location da Sogno" 
            subtitle="Scopri i nostri spazi versatili per ogni tipo di evento"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
            <div className="rounded-lg overflow-hidden shadow-lg border border-elite-gold/20">
              <img 
                src="/lovable-uploads/dbe1c6fb-b0fd-4f46-b937-20e7e2e4c8cc.png" 
                alt="Spazi interni" 
                className="w-full h-64 object-cover"
              />
            </div>
            
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-playfair font-semibold mb-4 text-elite-gold">Spazi versatili per ogni occasione</h3>
              <p className="text-muted-foreground mb-4">
                Il Baglio Abbate offre diverse aree modulabili per ospitare eventi di ogni dimensione, dai matrimoni 
                intimi alle grandi celebrazioni aziendali. La nostra struttura storica si adatta perfettamente alle 
                tue esigenze, mantenendo sempre quel tocco di eleganza siciliana che ci contraddistingue.
              </p>
              <p className="text-muted-foreground mb-6">
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
    </Layout>
  );
};

export default Index;
