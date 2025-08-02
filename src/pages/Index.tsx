
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import HeroSection from '@/components/sections/HeroSection';
import EventiInEvidenza from '@/components/EventiInEvidenza';
import { useIsMobile } from '@/hooks/use-mobile';
import SectionTitle from '@/components/SectionTitle';
import CTAButton from '@/components/CTAButton';
import { MessageCircle } from 'lucide-react';
import { getLovableUploadPath } from '@/lib/paths';
import { EventCalendar } from '@/components/EventCalendar';
import DividerDecorativo from '@/components/DividerDecorativo';
import { useStructuredData, useMetaTags } from '@/hooks/useStructuredData';

const Index = () => {
  const isMobile = useIsMobile();
  
  // Usa il nuovo hook per i dati strutturati
  useStructuredData('home');
  
  // Usa il nuovo hook per i meta tag
  useMetaTags({
    title: 'Baglio Abbate | Location per Eventi e Matrimoni a Balestrate, Palermo',
    description: 'Baglio Abbate è la location esclusiva per eventi e matrimoni a Balestrate, vicino Palermo, nel cuore della Sicilia occidentale. Scopri spazi unici con vista mare per i tuoi momenti speciali.',
    keywords: 'baglio abbate, location matrimoni sicilia, eventi sicilia, matrimonio sicilia, location eventi, balestrate, palermo, location matrimoni palermo, eventi balestrate',
    canonical: 'https://baglioabbate.it',
    ogTitle: 'Baglio Abbate | Location per Eventi e Matrimoni a Balestrate, Palermo',
    ogDescription: 'Una location esclusiva per eventi indimenticabili a Balestrate, vicino Palermo, nel cuore della Sicilia occidentale, con vista sul mare.',
    ogUrl: 'https://baglioabbate.it',
    ogImage: getLovableUploadPath("dbe1c6fb-b0fd-4f46-b937-20e7e2e4c8cc.png")
  });
  
  return (
    <Layout hideNavbar={false} hideFooter={false} heroLayout={true}>
      {/* Enhanced Hero Section */}
      <HeroSection 
        title="Baglio Abbate"
        subtitle="Location esclusiva per eventi indimenticabili nel cuore della Sicilia occidentale"
        imageSrc={getLovableUploadPath("dbe1c6fb-b0fd-4f46-b937-20e7e2e4c8cc.png")}
      />
      <DividerDecorativo />
      
      {/* Eventi in Evidenza Section */}
      <div id="eventi-in-evidenza">
      <EventiInEvidenza />
      </div>
      <DividerDecorativo />
      
      {/* Calendario Eventi Section */}
      <section className="py-16 bg-baglio-ebano">
        <div className="baglio-container">
          <EventCalendar compact={false} />
        </div>
      </section>
      <DividerDecorativo />
      
      {/* Emotional WhatsApp Invitation - Aggiornato con Blu Navy */}
      <section className="section-padding bg-baglio-ebano relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <MessageCircle size={200} className="absolute top-10 right-10 text-baglio-oro rotate-12" />
          <MessageCircle size={150} className="absolute bottom-10 left-10 text-baglio-oro -rotate-12" />
        </div>
        
        {/* Subtle background image without blur - better for mobile performance */}
        <div 
          className="absolute inset-0 opacity-15 bg-cover bg-center"
          style={{
            backgroundImage: `url('${getLovableUploadPath("75cf2578-451c-46db-8c39-c3dcc02f7157.png")}')`,
          }}
        ></div>
        
        <div className="baglio-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-6 text-baglio-oro">
              Ogni evento inizia con una conversazione.
            </h2>
            <div className="space-y-4 text-lg md:text-xl text-baglio-cremaIntonacata max-w-2xl mx-auto">
              <p>
                Parlaci della tua idea per il tuo evento a Balestrate. Saremo felici di trasformarla in realtà.
              </p>
              <p className="text-base md:text-lg text-baglio-cremaIntonacata/70">
                Scrivici quando vuoi: ti risponde una persona vera.
              </p>
            </div>
            
            {/* Visual hint pointing to WhatsApp button */}
            <div className="mt-8 flex flex-col items-center space-y-2">
              <a
                href="https://wa.me/393318286888?text=Ciao!%20Sono%20interessato%20a%20maggiori%20informazioni%20su%20Baglio%20Abbate%20a%20Balestrate."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-baglio-oro text-baglio-ebanoIntenso font-semibold rounded-lg shadow-lg hover:bg-baglio-oroImperiale transition-all duration-300 mt-4"
              >
                <MessageCircle size={20} className="mr-2" />
                Inizia la conversazione
              </a>
              <div className="text-baglio-oro/70 text-sm font-medium tracking-wide">
                👆 Inizia la conversazione
              </div>
              <div className="w-12 h-0.5 bg-baglio-oro/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
      <DividerDecorativo />
      
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
                Nel cuore di Balestrate, a pochi chilometri da Palermo, con vista sul mare e sulla costa siciliana occidentale, facilmente raggiungibile dall'autostrada A29.
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
                Dettagli curati con attenzione, materiali di qualità e servizio impeccabile per ogni evento, dalla location matrimoni ai meeting aziendali.
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
                Ogni momento trascorso con noi diventa un ricordo indelebile, grazie all'atmosfera unica della Sicilia occidentale e all'attenzione personalizzata.
              </p>
            </div>
          </div>
        </div>
      </section>
      <DividerDecorativo />
      
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
                src="/lovable-uploads/36812540-16ae-478e-9ab2-3dbe56471c4f.png" 
                alt="Location eventi Baglio Abbate Balestrate - Spazi interni ed esterni per matrimoni e eventi" 
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
            
            <div className="flex flex-col justify-center">
              <p className="text-baglio-ebanoIntenso/70 mb-4">
                L’organizzazione degli eventi al <b>Baglio Abbate</b>, antico baglio a <b>Balestrate</b>, è curata da uno staff di rilievo con oltre 30 anni di esperienza nell’organizzazione di eventi di classe.<br/>
                L’amore per i prodotti agroalimentari ed enologici della terra siciliana si fonde con la passione per l’arte della cucina, garantendo così esperienze uniche in un <b>baglio antico</b> immerso nella storia.
              </p>
              <p className="text-baglio-ebanoIntenso/70 mb-6">
                Ogni singolo aspetto che riguarda la bellezza degli allestimenti e dei temi viene sapientemente curato da una delle wedding planner più preparate della Sicilia, per rendere ogni evento al <b>Baglio Abbate</b> davvero indimenticabile.
              </p>
              <CTAButton to="/gallery" className="self-start">
                Esplora la Gallery
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
      <DividerDecorativo />

      {/* Come raggiungerci Section - Aggiornato con Blu Navy */}
      <section className="py-16 bg-baglio-ebano border-t border-baglio-oro/30">
        <div className="baglio-container">
          <SectionTitle 
            title="Come raggiungerci" 
            subtitle="Siamo a Balestrate, ultima cittadina della provincia di Palermo, lato Trapani."
            center
            light
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
            <div className="space-y-6">
              <div className="bg-baglio-ebano/50 p-6 rounded-lg border border-baglio-oro/20">
                <h3 className="text-xl font-semibold mb-3 text-baglio-oro font-playfair">📍 Indirizzo</h3>
                <p className="text-baglio-cremaIntonacata mb-2">Via Palermo 4, 90041 Balestrate (PA)</p>
                <p className="text-baglio-cremaIntonacata/70">Sicilia occidentale, Italia</p>
              </div>
              
              <div className="bg-baglio-ebano/50 p-6 rounded-lg border border-baglio-oro/20">
                <h3 className="text-xl font-semibold mb-3 text-baglio-oro font-playfair">🚗 In Auto</h3>
                <p className="text-baglio-cremaIntonacata/70">
                  Dall’autostrada A29 (Palermo-Mazara del Vallo), prendi l’uscita Balestrate. Segui le indicazioni per la stazione, poi per via Palermo.<br/>
                  Dalla strada Statale SS113, prendi l’uscita per Balestrate e prosegui fino alla stazione, poi per via Palermo.
                </p>
              </div>
              
              <div className="bg-baglio-ebano/50 p-6 rounded-lg border border-baglio-oro/20">
                <h3 className="text-xl font-semibold mb-3 text-baglio-oro font-playfair">✈️ Dagli Aeroporti</h3>
                <p className="text-baglio-cremaIntonacata/70">
                  Falcone-Borsellino di Palermo (30 km), prendi l’uscita Balestrate<br/>
                  Vincenzo Florio di Trapani-Birgi (60 km), prendi l’uscita Balestrate
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
                title="Mappa di Baglio Abbate - Via Palermo 4, Balestrate, Palermo"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <CTAButton to="/contatti" className="bg-baglio-oro hover:bg-baglio-oroImperiale text-baglio-ebano">
              Contattaci
            </CTAButton>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
