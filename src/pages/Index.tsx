import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import HeroSection from '@/components/sections/HeroSection';
import HeroCarousel from '@/components/HeroCarousel';
import EventiInEvidenza from '@/components/EventiInEvidenza';
import { useIsMobile } from '@/hooks/use-mobile';
import SectionTitle from '@/components/SectionTitle';
import CTAButton from '@/components/CTAButton';
import { MessageCircle } from 'lucide-react';
import { getLovableUploadPath } from '@/lib/paths';
import { EventCalendar } from '@/components/EventCalendar';
import DividerDecorativo from '@/components/DividerDecorativo';
import { useStructuredData, useMetaTags } from '@/hooks/useStructuredData';
import ImageWithOverlay from '@/components/ImageWithOverlay';

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
      {/* Hero Carousel with Beautiful Images */}
      <div className="relative min-h-screen">
        <HeroCarousel
          images={[
            {
              src: "/lovable-uploads/d65e9f1e-b4d3-46a3-bef4-c104c4f6d279.png",
              alt: "Coppia di sposi attraversa eleganti archetti illuminati al Baglio Abbate"
            },
            {
              src: "/lovable-uploads/819c5cc8-a41a-49dd-b92c-9901415d12ad.png", 
              alt: "Elegante tavola all'aperto con decorazioni floreali e luci soffuse"
            },
            {
              src: "/lovable-uploads/888c9d74-7439-4430-a323-f2052fcabcf1.png",
              alt: "Sala interna del Baglio con sposi e ospiti, tavoli elegantemente apparecchiati"
            },
            {
              src: "/lovable-uploads/8b75dfa2-4cde-41a3-9086-dd13e03e23b8.png",
              alt: "Vista panoramica del cortile del Baglio con tavoli rotondi per il ricevimento"
            }
          ]}
          autoplaySpeed={5000}
        />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
          {/* Main Title */}
          <div className="mb-8 animate-gentle-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 drop-shadow-lg">
              Baglio Abbate
            </h1>
            
            {/* Subtitle */}
            <div className="space-y-3 max-w-3xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-crimson font-light text-white leading-relaxed drop-shadow-md">
                Un giorno da favola, in un luogo senza tempo.
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/90 font-crimson font-light italic drop-shadow-md">
                La dimora storica per i tuoi eventi di classe
              </p>
            </div>
          </div>

          {/* Primary CTA Button */}
          <div className="mb-8 animate-gentle-fade-in delay-200">
            <Link 
              to="/eventi"
              className="group bg-baglio-oro hover:bg-baglio-oroImperiale text-baglio-ebano font-semibold px-8 py-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center space-x-2 text-lg font-inter"
            >
              <span>Scopri la location</span>
            </Link>
          </div>

          {/* Secondary Navigation Menu */}
          <div className="animate-gentle-fade-in delay-300">
            <nav className="flex flex-wrap justify-center items-center space-x-1 sm:space-x-6 text-sm sm:text-base">
              <Link 
                to="/eventi"
                className="px-3 py-2 text-white hover:text-baglio-oro transition-colors duration-300 border-b-2 border-transparent hover:border-baglio-oro font-medium font-inter"
              >
                Eventi
              </Link>
              <span className="text-white/50 hidden sm:inline">•</span>
              <Link 
                to="/gallery"
                className="px-3 py-2 text-white hover:text-baglio-oro transition-colors duration-300 border-b-2 border-transparent hover:border-baglio-oro font-medium font-inter"
              >
                Gallery
              </Link>
              <span className="text-white/50 hidden sm:inline">•</span>
              <Link 
                to="/contatti"
                className="px-3 py-2 text-white hover:text-baglio-oro transition-colors duration-300 border-b-2 border-transparent hover:border-baglio-oro font-medium font-inter"
              >
                Contatti
              </Link>
            </nav>
          </div>
        </div>

        {/* Enhanced Scroll Hint */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center z-30">
          <button 
            onClick={() => {
              const target = document.getElementById('eventi-in-evidenza');
              if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
              }
            }}
            className="text-white hover:text-baglio-oro transition-all duration-300 animate-gentle-fade-in delay-500 group p-4 rounded-full hover:bg-white/10 backdrop-blur-sm"
            aria-label="Scroll down"
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm font-medium tracking-wider opacity-80 group-hover:opacity-100 transition-opacity font-inter">
                Scopri di più
              </span>
              <div className="relative">
                <svg className="w-8 h-8 animate-bounce group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <div className="absolute inset-0 bg-baglio-oro/20 rounded-full blur-md scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </button>
        </div>
      </div>
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
      
      {/* Una Location da Sogno - Cutting Edge Design */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-baglio-oro/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-baglio-ebanoIntenso/3 rounded-full blur-3xl"></div>
        </div>
        
        <div className="baglio-container relative z-10">
          <SectionTitle 
            title="Una Location da Sogno" 
            subtitle="Il Baglio Abbate è il luogo perfetto per i tuoi eventi più speciali, immerso nella bellezza della campagna siciliana con vista mare." 
            center={true}
          />
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-16">
            {/* Hero Image with Advanced Effects */}
            <div className="lg:col-span-7">
              <div className="relative group">
                {/* Decorative Frame */}
                <div className="absolute -inset-4 bg-gradient-to-r from-baglio-oro/20 to-baglio-ebanoIntenso/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                
                <ImageWithOverlay
                  src="/lovable-uploads/36812540-16ae-478e-9ab2-3dbe56471c4f.png"
                  alt="Location eventi Baglio Abbate Balestrate - Spazi interni ed esterni per matrimoni e eventi"
                  className="relative rounded-2xl overflow-hidden shadow-2xl transform group-hover:-translate-y-2 transition-all duration-500"
                  imgClassName="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                  overlayOpacity={0.1}
                  overlayClassName="bg-gradient-to-t from-baglio-ebanoIntenso/30 via-transparent to-transparent"
                >
                  {/* Floating Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                      <span className="text-sm font-semibold text-baglio-ebanoIntenso">✨ Location Esclusiva</span>
                    </div>
                  </div>
                  
                  {/* Experience Badge */}
                  <div className="absolute bottom-6 right-6">
                    <div className="bg-baglio-oro/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                      <span className="text-sm font-bold text-white">30+ Anni di Esperienza</span>
                    </div>
                  </div>
                </ImageWithOverlay>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="lg:col-span-5 space-y-8">
              {/* Glass Card Container */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-baglio-oro to-baglio-oro/80 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">👑</span>
                  </div>
                  <h3 className="text-2xl font-bold text-baglio-ebanoIntenso font-playfair">
                    Eleganza <span className="text-baglio-oro">Senza Tempo</span>
                  </h3>
                </div>
                
                <p className="text-lg text-baglio-ebanoIntenso/80 leading-relaxed font-crimson mb-6">
                  L'organizzazione è concepita e curata da uno <strong className="text-baglio-oro">staff di rilievo con oltre 30 anni di esperienza</strong> nell'organizzazione di eventi di classe.
                </p>
                <p className="text-lg text-baglio-ebanoIntenso/80 leading-relaxed font-crimson mb-6">
                  L'amore per i prodotti agroalimentari ed enologici della <em className="text-baglio-ebanoIntenso">terra Siciliana</em>, si fonde con la passione dell'arte della cucina, garantendo così <strong className="text-baglio-oro">esperienze uniche</strong>.
                </p>
                <p className="text-lg text-baglio-ebanoIntenso/80 leading-relaxed font-crimson mb-8">
                  Ogni singolo aspetto che riguarda la bellezza degli allestimenti e dei temi viene sapientemente curato da una delle <strong className="text-baglio-oro">wedding planner più preparate della Sicilia</strong>.
                </p>
                
                {/* Enhanced Features List */}
                <div className="grid grid-cols-1 gap-4 mb-8">
                  {[
                    { icon: "🏛️", text: "Spazi interni ed esterni personalizzabili", highlight: "personalizzabili" },
                    { icon: "🌊", text: "Vista panoramica sulla costa siciliana", highlight: "vista mare" },
                    { icon: "🏰", text: "Architettura storica restaurata", highlight: "patrimonio storico" },
                    { icon: "👨‍🍳", text: "Cucina tradizionale siciliana d'eccellenza", highlight: "chef esperti" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-xl bg-white/40 backdrop-blur-sm hover:bg-white/60 transition-colors duration-300">
                      <div className="text-2xl">{item.icon}</div>
                      <div className="flex-1 text-baglio-ebanoIntenso/80">
                        {item.text.replace(item.highlight, "")}
                        <span className="text-baglio-oro font-semibold">{item.highlight}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Enhanced CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <CTAButton 
                    to="/gallery" 
                    className="flex-1 bg-gradient-to-r from-baglio-oro to-baglio-oro/80 hover:from-baglio-oro/90 hover:to-baglio-oro/70 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <span className="flex items-center gap-2">
                      📸 Scopri la Gallery
                    </span>
                  </CTAButton>
                  
                  <CTAButton 
                    to="/contatti" 
                    outline={true}
                    className="flex-1 transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <span className="flex items-center gap-2">
                      💎 Richiedi Preventivo
                    </span>
                  </CTAButton>
                </div>
              </div>
              
              {/* Stats Card */}
              <div className="bg-gradient-to-r from-baglio-oro/10 to-baglio-ebanoIntenso/10 rounded-2xl p-6 border border-baglio-oro/20">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-baglio-oro">500+</div>
                    <div className="text-sm text-baglio-ebanoIntenso/70">Eventi Realizzati</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-baglio-oro">30+</div>
                    <div className="text-sm text-baglio-ebanoIntenso/70">Anni Esperienza</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-baglio-oro">98%</div>
                    <div className="text-sm text-baglio-ebanoIntenso/70">Clienti Soddisfatti</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mini Gallery Preview */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h4 className="text-xl font-semibold text-baglio-ebanoIntenso mb-2">Esplora i Nostri Spazi</h4>
              <p className="text-baglio-ebanoIntenso/70">Scorri per vedere di più</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { src: getLovableUploadPath("dbe1c6fb-b0fd-4f46-b937-20e7e2e4c8cc.png"), label: "Sala Ricevimenti" },
                { src: getLovableUploadPath("82698643-0369-4ee1-9b14-cf38c7d570df.png"), label: "Spazi Esterni" },
                { src: getLovableUploadPath("97ade15d-9a2b-4fa8-89b8-847a2ea33c4c.png"), label: "Vista Mare" },
                { src: getLovableUploadPath("ef5bc2e9-f908-4ff9-8544-e6823fa9b0a9.png"), label: "Terrazza" }
              ].map((item, index) => (
                <div key={index} className="group relative">
                  <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={item.src} 
                      alt={item.label}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white font-semibold text-sm">{item.label}</span>
                    </div>
                  </div>
                </div>
              ))}
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
                  Dall'autostrada A29 (Palermo-Mazara del Vallo), prendi l'uscita Balestrate. Segui le indicazioni per la stazione, poi per via Palermo.<br/>
                  Dalla strada Statale SS113, prendi l'uscita per Balestrate e prosegui fino alla stazione, poi per via Palermo.
                </p>
              </div>
              
              <div className="bg-baglio-ebano/50 p-6 rounded-lg border border-baglio-oro/20">
                <h3 className="text-xl font-semibold mb-3 text-baglio-oro font-playfair">✈️ Dagli Aeroporti</h3>
                <p className="text-baglio-cremaIntonacata/70">
                  Falcone-Borsellino di Palermo (30 km), prendi l'uscita Balestrate<br/>
                  Vincenzo Florio di Trapani-Birgi (60 km), prendi l'uscita Balestrate
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