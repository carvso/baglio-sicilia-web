
import React from 'react';
import { ArrowRight, Heart, Users, Building, Camera, CheckCircle, Star, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';
import ImageWithOverlay from '@/components/ImageWithOverlay';
import OptimizedImage from '@/components/OptimizedImage';
import SectionTitle from '@/components/SectionTitle';
import CTAButton from '@/components/CTAButton';
import SocialMediaBanners from '@/components/SocialMediaBanners';
import { EventCalendar } from '@/components/EventCalendar';
import DividerEventi from '@/components/DividerEventi';
import { getLovableUploadPath } from '@/lib/paths';
import { getStructuredData } from '@/lib/structuredData';

type EventCategoryProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  linkTo: string;
};

const EventCategory = ({ icon, title, description, features, imageSrc, linkTo }: EventCategoryProps) => {
  return (
    <div className="group bg-baglio-ebano rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-baglio-oro/20 hover:border-baglio-oro/60 hover:-translate-y-2">
      <div className="relative">
        <OptimizedImage
          src={imageSrc}
          alt={title}
          className="h-64 group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-baglio-ebanoIntenso/60 via-transparent to-transparent"></div>
        <div className="absolute top-4 left-4 bg-baglio-oro text-baglio-ebanoIntenso px-3 py-1 rounded-full text-sm font-semibold">
          Premium
        </div>
      </div>
      <div className="p-8">
        <div className="flex items-center mb-4">
          <div className="text-baglio-oro mr-3 bg-baglio-oro/10 p-2 rounded-lg">
            {icon}
          </div>
          <h3 className="text-2xl font-playfair font-bold text-baglio-oro">{title}</h3>
        </div>
        <p className="text-baglio-cremaIntonacata mb-6 text-lg leading-relaxed">{description}</p>
        
        <div className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-baglio-cremaIntonacata/80">
              <CheckCircle size={16} className="text-baglio-oro mr-3 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
        
        <Link 
          to={linkTo}
          className="inline-flex items-center font-semibold text-baglio-oro hover:text-baglio-oroImperiale transition-colors group-hover:translate-x-2 duration-300"
        >
          Scopri di più <ArrowRight size={18} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

const WhyChooseUsCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-baglio-ebano p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-baglio-oro/20 hover:border-baglio-oro/40">
    <div className="text-baglio-oro mb-4 bg-baglio-oro/10 w-12 h-12 rounded-lg flex items-center justify-center">
      {icon}
    </div>
    <h4 className="text-xl font-playfair font-semibold text-baglio-oro mb-3">{title}</h4>
    <p className="text-baglio-cremaIntonacata leading-relaxed">{description}</p>
  </div>
);

const TestimonialCard = ({ name, event, image, text }: { name: string; event: string; image: string; text: string }) => (
  <div className="bg-baglio-ebano p-8 rounded-xl shadow-lg border border-baglio-oro/20">
    <div className="flex items-center mb-6">
      <img 
        src={image} 
        alt={name}
        className="w-16 h-16 rounded-full mr-4 border-2 border-baglio-oro/30"
      />
      <div>
        <h4 className="font-playfair font-semibold text-lg text-baglio-oro">{name}</h4>
        <p className="text-baglio-oro/80 text-sm font-medium">{event}</p>
      </div>
    </div>
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} className="text-baglio-oro fill-current" />
      ))}
    </div>
    <p className="text-baglio-cremaIntonacata italic leading-relaxed">"{text}"</p>
  </div>
);

const Eventi = () => {
  return (
    <Layout heroLayout={true} hideBreadcrumb={true}>
      <Helmet>
        <title>Eventi e Matrimoni a Balestrate | Baglio Abbate - Location Palermo</title>
        <meta name="description" content="Organizza il tuo evento perfetto a Balestrate, vicino Palermo. Matrimoni, celebrazioni private ed eventi aziendali in una location esclusiva della Sicilia occidentale con vista mare." />
        <meta name="keywords" content="eventi balestrate, matrimoni palermo, location eventi sicilia, celebrazioni private, eventi aziendali, baglio abbate eventi" />
        <link rel="canonical" href="https://baglioabbate.it/eventi" />
        <meta property="og:title" content="Eventi e Matrimoni a Balestrate | Baglio Abbate - Location Palermo" />
        <meta property="og:description" content="Organizza il tuo evento perfetto a Balestrate, vicino Palermo. Matrimoni, celebrazioni private ed eventi aziendali in una location esclusiva." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://baglioabbate.it/eventi" />
        <meta property="og:image" content={getLovableUploadPath("ac14664b-cf42-46ec-90e4-d0461e9f18a2.png")} />
        
        {/* Dati Strutturati Schema.org per Eventi */}
        <script type="application/ld+json">
          {JSON.stringify(getStructuredData('eventi'))}
        </script>
      </Helmet>
      
      <ImageWithOverlay 
        src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
        alt="Eventi e matrimoni al Baglio Abbate Balestrate - Location esclusiva per eventi in Sicilia"
        className="h-screen -mt-16 pt-16"
        heroSection={true}
      >
        <div className="baglio-container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair text-white drop-shadow-lg">
            Eventi <span className="text-baglio-oro">Indimenticabili</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-white/95 leading-relaxed drop-shadow-md mb-8">
            Trasformiamo i tuoi momenti speciali in ricordi eterni a Balestrate, 
            in una cornice d'eccellenza che riflette la bellezza della Sicilia occidentale
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton to="#contact-section" className="bg-baglio-oro hover:bg-baglio-oroImperiale text-baglio-ebanoIntenso text-lg px-8 py-4">
              Richiedi Preventivo
            </CTAButton>
            <CTAButton to="/gallery" outline className="border-2 border-white text-white hover:bg-white hover:text-baglio-ebanoIntenso text-lg px-8 py-4">
              Guarda la Gallery
            </CTAButton>
          </div>
        </div>
      </ImageWithOverlay>
      <DividerEventi />

      <section className="py-16 bg-baglio-ebano">
        <div className="baglio-container">
          <SectionTitle 
            title="I nostri eventi di eccellenza" 
            subtitle="Ogni evento è unico, e merita attenzioni particolari. Scopri i nostri servizi."
            center
            light
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <EventCategory 
              icon={<Heart size={28} />}
              title="Matrimoni da Sogno"
              description="Il vostro giorno più bello merita una location che rispecchi l'importanza del momento. Matrimoni esclusivi a Balestrate."
              features={[
                "Cerimonia simbolica e civile",
                "Ricevimento fino a 300 ospiti (sala interna) 350 (corte esterna).",
                "Coordinamento completo evento"
              ]}
              imageSrc="/lovable-uploads/ac14664b-cf42-46ec-90e4-d0461e9f18a2.png"
              linkTo="/matrimoni"
            />
            <EventCategory 
              icon={<Users size={28} />}
              title="Celebrazioni Private"
              description="Battesimi, comunioni, lauree, compleanni, anniversari: ogni traguardo personale diventa speciale nella nostra location siciliana."
              features={[
                "Spazi personalizzabili",
                "Menu su misura",
                "Intrattenimento dedicato",
                "Servizio fotografico"
              ]}
              imageSrc="/lovable-uploads/abd0f4fc-88b2-4370-b75c-a060e0f81d76.png"
              linkTo="/eventi-privati"
            />
            <EventCategory 
              icon={<Building size={28} />}
              title="Eventi Aziendali"
              description="Meeting, convention, team building: il successo aziendale ha bisogno del giusto ambiente a Balestrate."
              features={[
                "Sale meeting attrezzate",
                "Catering business",
                "Supporto tecnico",
                "Parcheggio riservato"
              ]}
              imageSrc="/lovable-uploads/97ade15d-9a2b-4fa8-89b8-847a2ea33c4c.png"
              linkTo="/eventi-aziendali"
            />
          </div>
        </div>
      </section>
      <DividerEventi />

      {/* NEW: Servizi Completi Section */}
      <section className="py-16 bg-baglio-cremaIntonacata">
        <div className="baglio-container">
          <SectionTitle 
            title="I nostri servizi completi" 
            subtitle="Tutto quello che serve per rendere il tuo evento indimenticabile"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Organizzazione e Coordinamento */}
            <div className="bg-baglio-ebano p-6 rounded-xl shadow-lg border border-baglio-oro/20 hover:shadow-xl transition-all duration-300">
              <div className="text-baglio-oro mb-4 text-center">
                <span className="text-3xl">💐</span>
              </div>
              <h3 className="text-xl font-playfair font-bold text-baglio-oro mb-4 text-center">Organizzazione e Coordinamento</h3>
              <ul className="space-y-2 text-baglio-cremaIntonacata/80 text-sm">
                <li>• Wedding planner (in-house o partner)</li>
                <li>• Coordinamento del giorno del matrimonio</li>
                <li>• Assistenza alla scelta dei fornitori</li>
                <li>• Servizio di hostess/accoglienza ospiti</li>
                <li>• Gestione logistica e tempistiche</li>
              </ul>
            </div>

            {/* Intrattenimento e Musica */}
            <div className="bg-baglio-ebano p-6 rounded-xl shadow-lg border border-baglio-oro/20 hover:shadow-xl transition-all duration-300">
              <div className="text-baglio-oro mb-4 text-center">
                <span className="text-3xl">🎶</span>
              </div>
              <h3 className="text-xl font-playfair font-bold text-baglio-oro mb-4 text-center">Intrattenimento e Musica</h3>
              <ul className="space-y-2 text-baglio-cremaIntonacata/80 text-sm">
                <li>• Musica dal vivo (quartetto, jazz band, DJ)</li>
                <li>• Spettacoli serali (fuochi d'artificio, danza del fuoco)</li>
                <li>• Corner esperienziali (cigar bar, wine tasting)</li>
                <li>• Animazione per bambini</li>
                <li>• Photo booth o cabina 360°</li>
              </ul>
            </div>

            {/* Catering & Banqueting */}
            <div className="bg-baglio-ebano p-6 rounded-xl shadow-lg border border-baglio-oro/20 hover:shadow-xl transition-all duration-300">
              <div className="text-baglio-oro mb-4 text-center">
                <span className="text-3xl">🍽️</span>
              </div>
              <h3 className="text-xl font-playfair font-bold text-baglio-oro mb-4 text-center">Catering & Banqueting</h3>
              <ul className="space-y-2 text-baglio-cremaIntonacata/80 text-sm">
                <li>• Catering interno</li>
                <li>• Aperitivo di benvenuto e cocktail bar</li>
                <li>• Cena o pranzo serviti, a buffet o street food</li>
                <li>• Torta nuziale personalizzata</li>
                <li>• Menù per intolleranze e diete speciali</li>
                <li>• Open bar / Mixology station</li>
                <li>• Degustazioni pre-matrimonio</li>
              </ul>
            </div>

            {/* Ospitalità e Pernottamento */}
            <div className="bg-baglio-ebano p-6 rounded-xl shadow-lg border border-baglio-oro/20 hover:shadow-xl transition-all duration-300">
              <div className="text-baglio-oro mb-4 text-center">
                <span className="text-3xl">🛏️</span>
              </div>
              <h3 className="text-xl font-playfair font-bold text-baglio-oro mb-4 text-center">Ospitalità e Pernottamento</h3>
              <ul className="space-y-2 text-baglio-cremaIntonacata/80 text-sm">
                <li>• Suite nuziale</li>
                <li>• Camere per ospiti (family & friends)</li>
                <li>• Convenzioni con hotel vicini</li>
                <li>• Servizio navetta o transfer privato</li>
                <li>• Late check-out per gli sposi</li>
              </ul>
            </div>

            {/* Foto e Video */}
            <div className="bg-baglio-ebano p-6 rounded-xl shadow-lg border border-baglio-oro/20 hover:shadow-xl transition-all duration-300">
              <div className="text-baglio-oro mb-4 text-center">
                <span className="text-3xl">📸</span>
              </div>
              <h3 className="text-xl font-playfair font-bold text-baglio-oro mb-4 text-center">Foto e Video</h3>
              <ul className="space-y-2 text-baglio-cremaIntonacata/80 text-sm">
                <li>• Fotografi e videomaker professionisti</li>
                <li>• Servizio drone</li>
                <li>• Servizio social media live</li>
                <li>• Album e video editing post-evento</li>
              </ul>
            </div>

            {/* Allestimenti e Decorazioni */}
            <div className="bg-baglio-ebano p-6 rounded-xl shadow-lg border border-baglio-oro/20 hover:shadow-xl transition-all duration-300">
              <div className="text-baglio-oro mb-4 text-center">
                <span className="text-3xl">🌿</span>
              </div>
              <h3 className="text-xl font-playfair font-bold text-baglio-oro mb-4 text-center">Allestimenti e Decorazioni</h3>
              <ul className="space-y-2 text-baglio-cremaIntonacata/80 text-sm">
                <li>• Progettazione floreale personalizzata</li>
                <li>• Illuminazione scenografica</li>
                <li>• Set up per cerimonia simbolica o civile</li>
                <li>• Tensostrutture, gazebi o pergolati</li>
                <li>• Sedute, cuscini, tappeti, arredi vintage</li>
              </ul>
            </div>

            {/* Servizi per gli sposi */}
            <div className="bg-baglio-ebano p-6 rounded-xl shadow-lg border border-baglio-oro/20 hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="text-baglio-oro mb-4 text-center">
                <span className="text-3xl">👗</span>
              </div>
              <h3 className="text-xl font-playfair font-bold text-baglio-oro mb-4 text-center">Servizi per gli sposi</h3>
              <ul className="space-y-2 text-baglio-cremaIntonacata/80 text-sm">
                <li>• Make-up artist & hair stylist</li>
                <li>• Camerino sposi o area preparazione</li>
                <li>• Noleggio abiti o accessori</li>
                <li>• Trucco/parrucchiere anche per invitati VIP</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <DividerEventi />

      {/* Calendario Eventi Section */}
      <section className="py-16 bg-baglio-ebano">
        <div className="baglio-container">
          <EventCalendar compact={false} />
        </div>
      </section>
      <DividerEventi />

      <section className="py-16 bg-baglio-ebano">
        <div className="baglio-container">
          <SectionTitle 
            title="Perché scegliere Baglio Abbate" 
            subtitle="La differenza che fa la differenza nei vostri eventi"
            center
            light
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <WhyChooseUsCard
              icon={<MapPin size={24} />}
              title="Location Unica"
              description="Architettura storica siciliana in posizione panoramica con vista mare"
            />
            <WhyChooseUsCard
              icon={<Star size={24} />}
              title="Servizio Premium"
              description="Staff dedicato e coordinamento completo per ogni dettaglio del vostro evento"
            />
            <WhyChooseUsCard
              icon={<Heart size={24} />}
              title="Cucina d'Eccellenza"
              description="Chef specializzati in tradizione siciliana con ingredienti locali premium e laboratorio dedicato alle intolleranze, unico per una location per eventi"
            />
            <WhyChooseUsCard
              icon={<Camera size={24} />}
              title="Foto Incluse"
              description="Servizio fotografico professionale per immortalare i momenti più belli"
            />
          </div>
        </div>
      </section>
      <DividerEventi />

      {/* NEW: Social Media Banners - Resta sempre aggiornato */}
      <SocialMediaBanners />

      {/* NEW: CTA Section - Pronto a vivere la tua esperienza al Baglio */}
      <section className="py-16 bg-baglio-oro">
        <div className="baglio-container text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-baglio-ebano">
            Pronto a vivere la tua esperienza al <span className="text-baglio-ebanoIntenso">Baglio Abbate</span>?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-baglio-ebano/80 leading-relaxed">
            Non aspettare oltre. Contattaci oggi stesso per organizzare il tuo evento da sogno 
            o prenota un tavolo per gustare la vera cucina siciliana nella nostra terrazza vista mare.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <CTAButton 
              to="/contatti" 
              className="bg-baglio-ebano hover:bg-baglio-ebanoIntenso text-baglio-oro text-lg px-8 py-4 border-2 border-baglio-ebano"
            >
              Contattaci per il tuo evento
            </CTAButton>
            <CTAButton 
              to="/ristorante" 
              outline 
              className="border-2 border-baglio-ebano text-baglio-ebano hover:bg-baglio-ebano hover:text-baglio-oro text-lg px-8 py-4"
            >
              Prenota un tavolo
            </CTAButton>
          </div>
        </div>
      </section>
      <DividerEventi />

      {/* UPDATED: Sapori Autentici with Caponata background and Amuni CTA */}
      {/* --- SEZIONE RIMOSSA --- */}

      <section className="py-16 bg-baglio-ebano">
        <div className="baglio-container">
          <SectionTitle 
            title="Testimonial dei nostri clienti" 
            subtitle="Le parole di chi ha vissuto l'esperienza Baglio Abbate"
            center
            light
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <TestimonialCard
              name="Maria & Giuseppe"
              event="Matrimonio, Giugno 2023"
              image="https://randomuser.me/api/portraits/women/23.jpg"
              text="Il nostro matrimonio al Baglio Abbate è stato semplicemente perfetto. Ogni dettaglio curato con passione, dal servizio impeccabile alla location mozzafiato. I nostri ospiti sono rimasti incantati dalla bellezza del posto e dalla qualità del cibo. Grazie per aver reso il nostro sogno realtà!"
            />
            <TestimonialCard
              name="Roberto Fontana"
              event="Evento Aziendale, Settembre 2023"
              image="https://randomuser.me/api/portraits/men/52.jpg"
              text="Abbiamo organizzato il nostro meeting annuale al Baglio e siamo rimasti stupiti dalla professionalità del team. La location è elegante, il servizio impeccabile e la tecnologia all'avanguardia. I nostri partner internazionali sono rimasti colpiti dall'atmosfera unica del posto."
            />
            <TestimonialCard
              name="Giulia Marchetti"
              event="Festa di Compleanno, Agosto 2023"
              image="https://randomuser.me/api/portraits/women/65.jpg"
              text="Per i miei 40 anni ho voluto qualcosa di speciale e il Baglio Abbate ha superato ogni aspettativa. L'atmosfera magica, l'attenzione ai dettagli e la gentilezza dello staff hanno reso questa giornata indimenticabile. Lo consiglio vivamente a chiunque cerchi l'eccellenza!"
            />
          </div>
        </div>
      </section>
      <DividerEventi />

      <section id="contact-section" className="py-16 bg-baglio-ebanoIntenso text-white">
        <div className="baglio-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionTitle 
                title="Organizziamo insieme il tuo evento" 
                subtitle="Contattaci per un preventivo personalizzato e senza impegno"
                light
              />
              <p className="text-baglio-cremaIntonacata/90 mb-8 text-lg leading-relaxed">
                Il nostro team di esperti è a disposizione per trasformare la tua visione in realtà. 
                Ogni evento è unico e meritiamo un'attenzione particolare ai dettagli che fanno la differenza.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-baglio-oro mr-3" />
                  <p className="text-baglio-cremaIntonacata">Sopralluogo gratuito su appuntamento</p>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-baglio-oro mr-3" />
                  <p className="text-baglio-cremaIntonacata">Preventivo dettagliato entro 24h</p>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-baglio-oro mr-3" />
                  <p className="text-baglio-cremaIntonacata">Coordinamento completo incluso</p>
                </div>
              </div>
            </div>
            <div className="bg-baglio-ebano p-8 rounded-2xl shadow-2xl border border-baglio-oro/20">
              <h3 className="text-2xl font-playfair font-bold text-baglio-oro mb-6">
                Richiedi Informazioni
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border-2 border-baglio-oro/20 rounded-lg focus:ring-2 focus:ring-baglio-oro focus:border-baglio-oro transition-colors text-white bg-baglio-ebanoIntenso/60 placeholder:text-baglio-crema"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="surname" className="block text-sm font-semibold text-white mb-2">
                      Cognome *
                    </label>
                    <input
                      type="text"
                      id="surname"
                      className="w-full px-4 py-3 border-2 border-baglio-oro/20 rounded-lg focus:ring-2 focus:ring-baglio-oro focus:border-baglio-oro transition-colors text-white bg-baglio-ebanoIntenso/60 placeholder:text-baglio-crema"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border-2 border-baglio-oro/20 rounded-lg focus:ring-2 focus:ring-baglio-oro focus:border-baglio-oro transition-colors text-white bg-baglio-ebanoIntenso/60 placeholder:text-baglio-crema"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                      Telefono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border-2 border-baglio-oro/20 rounded-lg focus:ring-2 focus:ring-baglio-oro focus:border-baglio-oro transition-colors text-white bg-baglio-ebanoIntenso/60 placeholder:text-baglio-crema"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-semibold text-white mb-2">
                      Tipo di Evento *
                    </label>
                    <select
                      id="eventType"
                      className="w-full px-4 py-3 border-2 border-baglio-oro/20 rounded-lg focus:ring-2 focus:ring-baglio-oro focus:border-baglio-oro transition-colors text-baglio-ebanoIntenso"
                      required
                    >
                      <option value="">Seleziona...</option>
                      <option value="wedding">Matrimonio</option>
                      <option value="birthday">Compleanno</option>
                      <option value="corporate">Evento Aziendale</option>
                      <option value="anniversary">Anniversario</option>
                      <option value="other">Altro</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-sm font-semibold text-white mb-2">
                      Numero Ospiti
                    </label>
                    <input
                      type="number"
                      id="guests"
                      min="1"
                      className="w-full px-4 py-3 border-2 border-baglio-oro/20 rounded-lg focus:ring-2 focus:ring-baglio-oro focus:border-baglio-oro transition-colors text-baglio-ebanoIntenso"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-semibold text-white mb-2">
                    Data Preferita
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="w-full px-4 py-3 border-2 border-baglio-oro/20 rounded-lg focus:ring-2 focus:ring-baglio-oro focus:border-baglio-oro transition-colors text-white bg-baglio-ebanoIntenso/60 placeholder:text-baglio-crema"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                    Messaggio *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-baglio-oro/20 rounded-lg focus:ring-2 focus:ring-baglio-oro focus:border-baglio-oro transition-colors text-white bg-baglio-ebanoIntenso/60 placeholder:text-baglio-crema"
                    placeholder="Raccontaci la tua idea per l'evento..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-baglio-oro hover:bg-baglio-oroImperiale text-baglio-ebanoIntenso font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                >
                  Invia Richiesta
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Eventi;
