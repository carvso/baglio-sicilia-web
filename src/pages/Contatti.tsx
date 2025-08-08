import React from 'react';
import { Phone, Mail, Clock, MapPin, Instagram, Facebook, Send, MessageCircle, Calendar, Users } from 'lucide-react';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';
import ImageWithOverlay from '@/components/ImageWithOverlay';
import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';
import CTAButton from '@/components/CTAButton';
import DividerContatti from '@/components/DividerContatti';
import { getLovableUploadPath } from '@/lib/paths';
import { getStructuredData } from '@/lib/structuredData';

const ContactInfo = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => {
  return (
    <div className="flex items-start mb-8 p-4 bg-baglio-ebano rounded-lg shadow-md border border-baglio-oro/20 hover:border-baglio-oro/50 transition-all duration-300 hover:shadow-lg">
      <div className="text-baglio-oro mt-1 mr-4 bg-baglio-oro/10 p-3 rounded-lg">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-2 text-baglio-oro font-playfair">{title}</h3>
        <div className="text-baglio-cremaIntonacata">
          {children}
        </div>
      </div>
    </div>
  );
};

const QuickActionCard = ({ icon, title, description, action }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  action: string;
}) => (
  <div className="bg-baglio-ebano p-6 rounded-xl shadow-lg border-2 border-baglio-oro/20 hover:border-baglio-oro hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <div className="text-baglio-oro mb-4 bg-baglio-oro/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
      {icon}
    </div>
    <h4 className="text-xl font-playfair font-bold text-baglio-oro mb-3 text-center">{title}</h4>
    <p className="text-baglio-cremaIntonacata text-center leading-relaxed mb-4">{description}</p>
    <div className="text-center">
      <span className="text-baglio-oro font-semibold text-sm">{action}</span>
    </div>
  </div>
);

const InstagramCTA = ({ variant = "default" }: { variant?: "default" | "compact" | "hero" }) => {
  const variants = {
    default: "p-6 rounded-xl bg-gradient-to-br from-baglio-oro to-baglio-oroImperiale",
    compact: "p-4 rounded-lg bg-baglio-oro/10 border-2 border-baglio-oro/30",
    hero: "p-8 rounded-2xl bg-gradient-to-r from-baglio-oro/20 to-baglio-oroImperiale/20 border-2 border-baglio-oro/50 bg-baglio-ebano"
  };

  return (
    <div className={`${variants[variant]} text-center hover:shadow-xl transition-all duration-300 hover:scale-105`}>
      <Instagram size={variant === "hero" ? 32 : 24} className={`mx-auto mb-3 ${variant === "default" || variant === "hero" ? "text-black" : "text-baglio-oro"}`} />
      <h4 className={`font-playfair font-bold text-lg mb-2 ${variant === "default" || variant === "hero" ? "text-black" : "text-baglio-oro"}`}>Seguici su Instagram</h4>
      <p className={`text-sm mb-4 ${variant === "default" ? "text-black" : "text-baglio-cremaIntonacata"}`}>
        @baglioabbateevents - Scopri le ultime foto e novità!
      </p>
      <a 
        href="https://instagram.com/baglioabbateevents" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`inline-flex items-center font-semibold px-4 py-2 rounded-lg transition-colors ${variant === "default" ? "bg-black hover:bg-gray-800 text-white" : "bg-baglio-oro hover:bg-baglio-oroImperiale text-baglio-ebanoIntenso"}`}
      >
        <Instagram className="mr-2" size={16} />
        Seguici
      </a>
    </div>
  );
};

const Contatti = () => {
  return (
    <Layout heroLayout={true} hideBreadcrumb={true} hideWhatsAppButton={true}>
      <Helmet>
        <title>Contatti Baglio Abbate | Via Palermo 4, Balestrate - Location Eventi Palermo</title>
        <meta name="description" content="Contatta Baglio Abbate a Balestrate, Via Palermo 4. Telefono, email e informazioni per prenotare la tua location eventi vicino Palermo. Sopralluogo gratuito." />
        <meta name="keywords" content="contatti baglio abbate, telefono balestrate, indirizzo via palermo 4, location eventi palermo, prenotazioni baglio abbate" />
        <link rel="canonical" href="https://baglioabbate.it/contatti" />
        <meta property="og:title" content="Contatti Baglio Abbate | Via Palermo 4, Balestrate - Location Eventi Palermo" />
        <meta property="og:description" content="Contatta Baglio Abbate a Balestrate, Via Palermo 4. Telefono, email e informazioni per prenotare la tua location eventi." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://baglioabbate.it/contatti" />
        <meta property="og:image" content={getLovableUploadPath("a64af1b5-6d30-4760-80df-66af10202399.png")} />
        
        {/* Dati Strutturati Schema.org per Contatti */}
        <script type="application/ld+json">
          {JSON.stringify(getStructuredData('contatti'))}
        </script>
      </Helmet>
      
      <div className="relative h-[75vh] overflow-hidden">
        <ImageWithOverlay 
          src="/lovable-uploads/a64af1b5-6d30-4760-80df-66af10202399.png"
          alt="Contatti Baglio Abbate Balestrate - Comunicazione e informazioni location eventi"
          className="h-full"
          overlayOpacity={30}
          heroSection={true}
        >
          <div className="baglio-container text-center relative z-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 md:mb-8 font-playfair text-white drop-shadow-2xl">
              <span className="text-baglio-oro drop-shadow-lg">Contattaci</span>
            </h1>
            <p className="text-xl md:text-3xl max-w-4xl mx-auto text-white leading-relaxed drop-shadow-lg mb-8 font-medium">
              Siamo qui per rispondere alle tue domande e accoglierti presto nel nostro Baglio a Balestrate
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton to="#contact-form" className="bg-baglio-oro hover:bg-baglio-oroImperiale text-baglio-ebanoIntenso text-xl px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:scale-105">
                <Send className="mr-3" size={24} />
                Scrivi subito
              </CTAButton>
              <a 
                href="https://instagram.com/baglioabbateevents" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 py-4 px-8 text-xl border-3 border-white text-white hover:bg-white hover:text-baglio-ebanoIntenso backdrop-blur-sm"
              >
                <Instagram className="mr-3" size={24} />
                Seguici su Instagram
              </a>
            </div>
          </div>
        </ImageWithOverlay>
      </div>
      <DividerContatti />

      {/* Sezione Quick Actions - ridotto padding */}
      <section className="py-12 bg-baglio-ebano">
        <div className="baglio-container">
          <SectionTitle 
            title="Come possiamo aiutarti?" 
            subtitle="Scegli il modo più veloce per entrare in contatto con noi a Balestrate"
            center
            light
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <QuickActionCard
              icon={<Phone size={28} />}
              title="Chiama ora"
              description="Parla direttamente con il nostro team per informazioni immediate"
              action="✆ +39 331 8286888 / +39 371 584 4048"
            />
            <QuickActionCard
              icon={<Mail size={28} />}
              title="Invia email"
              description="Scrivi nei dettagli la tua richiesta e ti risponderemo entro 24h"
              action="✉ info@baglioabbate.it"
            />
            <QuickActionCard
              icon={<Calendar size={28} />}
              title="Prenota visita"
              description="Vieni a visitare il Baglio e scopri di persona i nostri spazi"
              action="📅 Sopralluogo gratuito"
            />
            <QuickActionCard
              icon={<Instagram size={28} />}
              title="Instagram"
              description="Segui i nostri aggiornamenti quotidiani e le foto degli eventi"
              action="📸 @baglioabbateevents"
            />
          </div>
        </div>
      </section>
      <DividerContatti />

      {/* Sezione principale con layout a due colonne - ridotto padding */}
      <section className="py-12 bg-baglio-ebano">
        <div className="baglio-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Informazioni contatto */}
            <div className="lg:col-span-1 space-y-6">
              <SectionTitle 
                title="Informazioni di contatto" 
                subtitle="Ecco come raggiungerci e contattarci a Balestrate"
                light
              />
              
              <ContactInfo icon={<MapPin size={24} />} title="Indirizzo">
                <p className="font-semibold text-white">Via Palermo 4, Balestrate (PA)</p>
                <p className="text-white">90041 - Sicilia occidentale, Italia</p>
              </ContactInfo>
              
              <ContactInfo icon={<Phone size={24} />} title="Telefono">
                <p className="font-semibold text-white">+39 331 8286888 <span className="text-baglio-oro">(Prenotazioni)</span></p>
                <p className="text-white">+39 371 584 4048 <span className="text-baglio-oro">(Richieste informazioni)</span></p>
              </ContactInfo>
              
              <ContactInfo icon={<Mail size={24} />} title="Email">
                <p className="font-semibold text-white">info@baglioabbate.it</p>
                <p className="text-white">eventi@baglioabbate.it <span className="text-baglio-oro">(Eventi privati)</span></p>
              </ContactInfo>
              
              <ContactInfo icon={<Clock size={24} />} title="Orari di apertura">
                <div>
                  <p className="mb-2"><span className="font-semibold text-baglio-oro">Lunedì - Venerdì:</span> 12:00 - 23:00</p>
                  <p className="mb-2"><span className="font-semibold text-baglio-oro">Sabato:</span> 12:00 - 24:00</p>
                  <p><span className="font-semibold text-baglio-oro">Domenica:</span> 12:00 - 23:00</p>
                </div>
              </ContactInfo>
              
              <div className="bg-baglio-oro/10 p-6 rounded-xl border border-baglio-oro/30">
                <h3 className="text-lg font-semibold mb-4 text-baglio-oro font-playfair">Social Media</h3>
                <div className="flex space-x-4 mb-4">
                  <a href="https://instagram.com/baglioabbateevents" target="_blank" rel="noopener noreferrer" className="text-baglio-oro hover:text-baglio-oroImperiale transition-colors bg-baglio-ebano p-3 rounded-lg shadow-md hover:shadow-lg">
                    <Instagram size={24} />
                  </a>
                  <a href="https://facebook.com/baglioabbate" target="_blank" rel="noopener noreferrer" className="text-baglio-oro hover:text-baglio-oroImperiale transition-colors bg-baglio-ebano p-3 rounded-lg shadow-md hover:shadow-lg">
                    <Facebook size={24} />
                  </a>
                  <a href="https://wa.me/393318286888" target="_blank" rel="noopener noreferrer" className="text-baglio-oro hover:text-baglio-oroImperiale transition-colors bg-baglio-ebano p-3 rounded-lg shadow-md hover:shadow-lg">
                    <MessageCircle size={24} />
                  </a>
                </div>
                <p className="text-baglio-cremaIntonacata text-sm">
                  Seguici per foto esclusive e aggiornamenti sui nostri eventi a Balestrate!
                </p>
              </div>

              <InstagramCTA variant="default" />
            </div>
            
            {/* Form di contatto */}
            <div className="lg:col-span-2">
              <div id="contact-form" className="bg-baglio-ebano p-8 rounded-2xl shadow-lg border border-baglio-oro/20">
                <SectionTitle 
                  title="Mandaci un messaggio" 
                  subtitle="Compila il modulo e ti risponderemo al più presto. È gratuito e senza impegno!"
                  light
                />
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      <DividerContatti />

      {/* Mappa con overlay informativo */}
      <section className="relative">
        <div className="h-[500px] relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25693.09767224354!2d13.00252508697102!3d38.04952056842693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1319a5f7e09e5681%3A0x5667b56b1021075!2s90041%20Balestrate%2C%20Provincia%20di%20Palermo!5e0!3m2!1sit!2sit!4v1650234567890!5m2!1sit!2sit" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mappa di Baglio Abbate - Via Palermo 2, Balestrate"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />
          
          {/* Overlay informativo */}
          <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-baglio-oro/30 max-w-sm">
            <h4 className="font-playfair font-bold text-lg text-baglio-oro mb-2">📍 Baglio Abbate</h4>
            <p className="text-baglio-ebanoIntenso text-sm mb-3">Via Palermo 2, Balestrate (PA)</p>
            <div className="flex items-center gap-2">
              <CTAButton to="/eventi" size="sm" className="bg-baglio-oro hover:bg-baglio-oroImperiale text-baglio-ebanoIntenso text-sm px-4 py-2">
                Prenota evento
              </CTAButton>
              <a 
                href="https://instagram.com/baglioabbateevents" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-baglio-oro hover:text-baglio-oroImperiale text-sm font-semibold"
              >
                <Instagram size={16} className="mr-1" />
                IG
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Come raggiungerci - ridotto padding */}
      <section className="py-12 bg-baglio-ebano">
        <div className="baglio-container">
          <SectionTitle 
            title="Come raggiungerci" 
            subtitle="Indicazioni dettagliate per arrivare al Baglio Abbate"
            center
            light
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-baglio-ebano p-8 rounded-xl shadow-lg border-2 border-baglio-oro/20 hover:border-baglio-oro hover:shadow-xl transition-all duration-300">
              <div className="bg-baglio-oro/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-baglio-oro" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 font-playfair text-baglio-oro text-center">🚗 In auto</h3>
              <p className="text-baglio-cremaIntonacata leading-relaxed text-center">
                Dall'autostrada A29 (Palermo-Mazara del Vallo), prendi l'uscita Balestrate. Segui le indicazioni per il centro di Balestrate, poi per Via Palermo. Il Baglio Abbate si trova al civico 2.
              </p>
            </div>
            
            <div className="bg-baglio-ebano p-8 rounded-xl shadow-lg border-2 border-baglio-oro/20 hover:border-baglio-oro hover:shadow-xl transition-all duration-300">
              <div className="bg-baglio-oro/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-baglio-oro" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 font-playfair text-baglio-oro text-center">🚂 In treno</h3>
              <p className="text-baglio-cremaIntonacata leading-relaxed text-center">
                La stazione ferroviaria di Balestrate è collegata con Palermo e Trapani. Dalla stazione, il Baglio Abbate dista circa 1,5 km ed è raggiungibile in taxi o con una piacevole passeggiata.
              </p>
            </div>
            
            <div className="bg-baglio-ebano p-8 rounded-xl shadow-lg border-2 border-baglio-oro/20 hover:border-baglio-oro hover:shadow-xl transition-all duration-300">
              <div className="bg-baglio-oro/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-baglio-oro" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 font-playfair text-baglio-oro text-center">✈️ In aereo</h3>
              <p className="text-baglio-cremaIntonacata leading-relaxed text-center">
                L'aeroporto più vicino è quello di Palermo "Falcone Borsellino", a circa 30 km dal Baglio Abbate. Dall'aeroporto, è possibile noleggiare un'auto o prendere un taxi per raggiungere la struttura.
              </p>
            </div>
          </div>

          {/* CTA finale con Instagram */}
          <div className="mt-16 text-center">
            <InstagramCTA variant="hero" />
          </div>
        </div>
      </section>

      {/* Floating WhatsApp e Instagram */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a 
          href="https://wa.me/393318286888" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Contattaci su WhatsApp"
        >
          <MessageCircle size={20} />
        </a>
        <a 
          href="https://instagram.com/baglioabbateevents" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gradient-to-br from-baglio-oro to-baglio-oroImperiale text-baglio-ebanoIntenso p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Seguici su Instagram"
        >
          <Instagram size={20} />
        </a>
      </div>
    </Layout>
  );
};

export default Contatti;
