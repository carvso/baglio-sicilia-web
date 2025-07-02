
import React from 'react';
import { ArrowRight, Heart, Users, Building, Camera, CheckCircle, Star, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import ImageWithOverlay from '@/components/ImageWithOverlay';
import OptimizedImage from '@/components/OptimizedImage';
import SectionTitle from '@/components/SectionTitle';
import CTAButton from '@/components/CTAButton';
import SocialMediaBanners from '@/components/SocialMediaBanners';

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
    <Layout heroLayout={true} hideBreadcrumb={false}>
      <ImageWithOverlay 
        src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
        alt="Eventi al Baglio Abbate"
        className="h-screen -mt-16 pt-16"
        heroSection={true}
      >
        <div className="baglio-container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair text-white drop-shadow-lg">
            Eventi <span className="text-baglio-oro">Indimenticabili</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-white/95 leading-relaxed drop-shadow-md mb-8">
            Trasformiamo i tuoi momenti speciali in ricordi eterni, 
            in una cornice d'eccellenza che riflette la bellezza della Sicilia
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

      <section className="py-16 bg-baglio-ebano">
        <div className="baglio-container">
          <SectionTitle 
            title="I nostri eventi di eccellenza" 
            subtitle="Ogni celebrazione è unica e merita un'attenzione particolare. Scopri le nostre specialità."
            center
            light
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <EventCategory 
              icon={<Heart size={28} />}
              title="Matrimoni da Sogno"
              description="Il vostro giorno più bello merita una location che rispecchi l'importanza del momento."
              features={[
                "Cerimonia religiosa e civile",
                "Ricevimento fino a 200 ospiti",
                "Coordinamento completo evento",
                "Fotografie incluse"
              ]}
              imageSrc="/lovable-uploads/ac14664b-cf42-46ec-90e4-d0461e9f18a2.png"
              linkTo="/matrimoni"
            />
            <EventCategory 
              icon={<Users size={28} />}
              title="Celebrazioni Private"
              description="Compleanni, anniversari, lauree: ogni traguardo personale diventa speciale."
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
              title="Corporate Events"
              description="Meeting, convention, team building: il successo aziendale ha bisogno del giusto ambiente."
              features={[
                "Sale meeting attrezzate",
                "Catering business",
                "Supporto tecnico",
                "Parcheggio riservato"
              ]}
              imageSrc="/lovable-uploads/1a152ccf-f53d-47a9-8d2f-f43edceba327.png"
              linkTo="/eventi-aziendali"
            />
          </div>
        </div>
      </section>

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
              description="Chef specializzati in tradizione siciliana con ingredienti locali premium"
            />
            <WhyChooseUsCard
              icon={<Camera size={24} />}
              title="Foto Incluse"
              description="Servizio fotografico professionale per immortalare i momenti più belli"
            />
          </div>
        </div>
      </section>

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

      {/* UPDATED: Sapori Autentici with Caponata background and Amuni CTA */}
      <section className="relative py-20">
        <ImageWithOverlay 
          src="https://www.themediterraneandish.com/wp-content/uploads/2020/07/caponata-recipe-11.jpg"
          alt="Caponata siciliana tradizionale - Sapori autentici della Sicilia" 
          className="h-[700px]"
          sizes="100vw"
          overlayOpacity={75}
        >
          <div className="baglio-container text-center">
            <div className="mb-4">
              <span className="bg-baglio-oro text-baglio-ebanoIntenso px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                Prossimamente
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6 text-white drop-shadow-2xl">
              Sapori Autentici della <span className="text-baglio-oro">Sicilia</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-baglio-oro drop-shadow-xl">
              Presentazione linea "Amuni"
            </h3>
            <p className="text-xl mb-8 max-w-4xl mx-auto text-white leading-relaxed drop-shadow-lg">
              Presto potrai portare a casa i veri sapori della Sicilia con la nostra nuova linea di prodotti surgelati "Amuni". 
              Dalle ricette tradizionali del Baglio Abbate, ora anche nella tua cucina: caponata, arancini, pasta alla norma 
              e tutte le specialità che ami, pronte in pochi minuti senza rinunciare all'autenticità.
            </p>
            
            <div className="mb-12">
              <CTAButton 
                to="/contatti" 
                className="bg-baglio-oro hover:bg-baglio-oroImperiale text-baglio-ebanoIntenso text-xl px-10 py-5 shadow-2xl"
              >
                Scopri "Amuni" - Resta aggiornato
              </CTAButton>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
              <div className="bg-baglio-ebano/80 backdrop-blur-md p-8 rounded-xl border-2 border-baglio-oro/40 shadow-2xl">
                <h4 className="text-baglio-oro font-playfair text-xl font-bold mb-3 drop-shadow-lg">Ricette Autentiche</h4>
                <p className="text-white leading-relaxed">Le stesse ricette del nostro chef, ora surgelate per mantenere intatti sapori e tradizione siciliana</p>
              </div>
              <div className="bg-baglio-ebano/80 backdrop-blur-md p-8 rounded-xl border-2 border-baglio-oro/40 shadow-2xl">
                <h4 className="text-baglio-oro font-playfair text-xl font-bold mb-3 drop-shadow-lg">Comodità Premium</h4>
                <p className="text-white leading-relaxed">Pronti in pochi minuti, perfetti per chi vuole gustare la vera cucina siciliana senza tempo di preparazione</p>
              </div>
              <div className="bg-baglio-ebano/80 backdrop-blur-md p-8 rounded-xl border-2 border-baglio-oro/40 shadow-2xl">
                <h4 className="text-baglio-oro font-playfair text-xl font-bold mb-3 drop-shadow-lg">Ingredienti Selezionati</h4>
                <p className="text-white leading-relaxed">Solo i migliori prodotti siciliani: pomodori pachino, melanzane locali, olio EVO e ricotta di pecora</p>
              </div>
            </div>
          </div>
        </ImageWithOverlay>
      </section>

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
                    <label htmlFor="name" className="block text-sm font-semibold text-baglio-ebanoIntenso mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border-2 border-baglio-oro/20 rounded-lg focus:ring-2 focus:ring-baglio-oro focus:border-baglio-oro transition-colors text-baglio-ebanoIntenso"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="surname" className="block text-sm font-semibold text-baglio-ebanoIntenso mb-2">
                      Cognome *
                    </label>
                    <input
                      type="text"
                      id="surname"
                      className="w-full px-4 py-3 border-2 border-baglio-oro/20 rounded-lg focus:ring-2 focus:ring-baglio-oro focus:border-baglio-oro transition-colors text-baglio-ebanoIntenso"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-baglio-ebanoIntenso mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border-2 border-baglio-oro/20 rounded-lg focus:ring-2 focus:ring-baglio-oro focus:border-baglio-oro transition-colors text-baglio-ebanoIntenso"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-baglio-ebanoIntenso mb-2">
                      Telefono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border-2 border-baglio-oro/20 rounded-lg focus:ring-2 focus:ring-baglio-oro focus:border-baglio-oro transition-colors text-baglio-ebanoIntenso"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="event-type" className="block text-sm font-semibold text-baglio-ebanoIntenso mb-2">
                      Tipo di Evento *
                    </label>
                    <select
                      id="event-type"
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
                    <label htmlFor="guests" className="block text-sm font-semibold text-baglio-ebanoIntenso mb-2">
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
                  <label htmlFor="date" className="block text-sm font-semibold text-baglio-ebanoIntenso mb-2">
                    Data Preferita
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="w-full px-4 py-3 border-2 border-baglio-oro/20 rounded-lg focus:ring-2 focus:ring-baglio-oro focus:border-baglio-oro transition-colors text-baglio-ebanoIntenso"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-baglio-ebanoIntenso mb-2">
                    Messaggio *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-baglio-oro/20 rounded-lg focus:ring-2 focus:ring-baglio-oro focus:border-baglio-oro transition-colors text-baglio-ebanoIntenso"
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
