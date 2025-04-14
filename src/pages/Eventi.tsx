
import React from 'react';
import { ArrowRight, Heart, Users, Building, Camera } from 'lucide-react';
import Layout from '@/components/Layout';
import ImageWithOverlay from '@/components/ImageWithOverlay';
import SectionTitle from '@/components/SectionTitle';
import CTAButton from '@/components/CTAButton';

type EventCategoryProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageSrc: string;
};

const EventCategory = ({ icon, title, description, imageSrc }: EventCategoryProps) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="h-64 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="text-baglio-terracotta mr-3">
            {icon}
          </div>
          <h3 className="text-xl font-playfair font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <a 
          href="#contact-section"
          className="inline-flex items-center font-medium text-baglio-terracotta hover:underline"
        >
          Richiedi informazioni <ArrowRight size={16} className="ml-2" />
        </a>
      </div>
    </div>
  );
};

const Eventi = () => {
  return (
    <Layout>
      <ImageWithOverlay 
        src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
        alt="Eventi al Baglio Abbate"
        className="h-[60vh]"
      >
        <div className="baglio-container text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">
            Eventi Indimenticabili
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Creiamo esperienze uniche in una cornice d'eccezione
          </p>
        </div>
      </ImageWithOverlay>

      <section className="section-padding bg-white">
        <div className="baglio-container">
          <SectionTitle 
            title="I tuoi eventi più speciali" 
            subtitle="Ogni momento importante merita una location straordinaria"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <EventCategory 
              icon={<Heart size={24} />}
              title="Matrimoni e Cerimonie"
              description="Dalla cerimonia intima al grande ricevimento, rendiamo il vostro giorno speciale ancora più magico con ambientazioni suggestive e servizi personalizzati."
              imageSrc="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
            />
            <EventCategory 
              icon={<Users size={24} />}
              title="Eventi Privati"
              description="Compleanni, anniversari, lauree, battesimi: ogni celebrazione diventa memorabile nei nostri spazi eleganti e versatili."
              imageSrc="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
            />
            <EventCategory 
              icon={<Building size={24} />}
              title="Eventi Aziendali"
              description="Meeting, team building, cene di gala: offriamo spazi e servizi su misura per le esigenze del vostro business."
              imageSrc="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
            />
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <ImageWithOverlay 
          src="https://images.unsplash.com/photo-1496318447583-f524534e9ce1?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
          alt="Catering di qualità" 
          className="h-[500px]"
        >
          <div className="baglio-container text-center text-white">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
              Un'esperienza culinaria d'eccellenza
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Il nostro catering personalizzato porta i sapori autentici della Sicilia al vostro evento, 
              con menù creati su misura per soddisfare ogni esigenza e preferenza.
            </p>
          </div>
        </ImageWithOverlay>
      </section>

      <section className="section-padding bg-baglio-cream bg-opacity-20">
        <div className="baglio-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="I nostri spazi" 
                subtitle="Ambienti versatili per eventi di ogni dimensione"
              />
              <p className="text-gray-700 mb-6">
                Il Baglio Abbate offre diversi ambienti, ognuno con il suo carattere distintivo, adattabili 
                a eventi di varia natura e dimensione. Dal suggestivo cortile interno alla sala principale 
                con volte in pietra, dalla terrazza panoramica al giardino, ogni spazio è curato nei minimi 
                dettagli per creare l'atmosfera perfetta.
              </p>
              <p className="text-gray-700 mb-6">
                La nostra location può ospitare fino a 200 persone per eventi con posti a sedere e fino a 
                350 per cocktail party e ricevimenti in piedi. Il nostro team di professionisti vi guiderà 
                nella scelta degli spazi più adatti alle vostre esigenze.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1609587459039-810acb6e7092?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
                alt="Cortile interno" 
                className="rounded-lg shadow-md h-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1519167576308-04f23db61d38?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
                alt="Sala principale" 
                className="rounded-lg shadow-md h-full object-cover mt-6 md:mt-12"
              />
              <img 
                src="https://images.unsplash.com/photo-1572916118970-fb5c8a1b535f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
                alt="Terrazza panoramica" 
                className="rounded-lg shadow-md h-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1522413321085-1ce1010ea094?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
                alt="Giardino" 
                className="rounded-lg shadow-md h-full object-cover mt-6 md:mt-12"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="baglio-container">
          <SectionTitle 
            title="Testimonianze" 
            subtitle="Le parole di chi ha vissuto l'esperienza Baglio Abbate"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/23.jpg" 
                  alt="Maria C." 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-medium">Maria C.</h4>
                  <p className="text-sm text-gray-500">Matrimonio, Giugno 2023</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Il nostro matrimonio al Baglio Abbate è stato semplicemente perfetto. L'atmosfera magica, il cibo delizioso 
                e il servizio impeccabile hanno reso il nostro giorno speciale davvero indimenticabile. Tutto il team è stato 
                attento ad ogni dettaglio, prendendosi cura di noi e dei nostri ospiti in modo straordinario."
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/52.jpg" 
                  alt="Roberto F." 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-medium">Roberto F.</h4>
                  <p className="text-sm text-gray-500">Evento aziendale, Settembre 2023</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Abbiamo scelto il Baglio Abbate per il nostro evento aziendale annuale e non potevamo essere più soddisfatti. 
                Gli spazi versatili, la tecnologia all'avanguardia e la posizione strategica hanno fatto la differenza. 
                Il catering eccellente ha lasciato a bocca aperta tutti i nostri ospiti internazionali."
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/65.jpg" 
                  alt="Giulia M." 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-medium">Giulia M.</h4>
                  <p className="text-sm text-gray-500">Compleanno, Agosto 2023</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Ho festeggiato il mio 40° compleanno al Baglio Abbate e posso dire che è stata una celebrazione memorabile. 
                La location mozzafiato, l'atmosfera rilassata ma elegante e la qualità del cibo hanno creato la combinazione 
                perfetta. Il team è stato flessibile e creativo nell'aiutarmi a realizzare la mia visione."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-section" className="section-padding bg-gray-900 text-white">
        <div className="baglio-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Parliamo del tuo evento" 
                subtitle="Contattaci per un preventivo personalizzato"
                light
              />
              <p className="text-gray-300 mb-6">
                Il nostro team di esperti è a disposizione per aiutarti a pianificare ogni dettaglio del tuo 
                evento speciale. Compila il modulo o contattaci direttamente per discutere delle tue esigenze 
                e ricevere un preventivo personalizzato.
              </p>
              <div className="flex items-center mb-4">
                <Camera size={20} className="text-baglio-terracotta mr-3" />
                <p className="text-gray-300">
                  Possiamo organizzare sopralluoghi su appuntamento
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome e Cognome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-baglio-terracotta focus:border-baglio-terracotta"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-baglio-terracotta focus:border-baglio-terracotta"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-baglio-terracotta focus:border-baglio-terracotta"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="event-type" className="block text-sm font-medium text-gray-700 mb-1">
                      Tipo di Evento *
                    </label>
                    <select
                      id="event-type"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-baglio-terracotta focus:border-baglio-terracotta"
                      required
                    >
                      <option value="">Seleziona...</option>
                      <option value="wedding">Matrimonio</option>
                      <option value="birthday">Compleanno</option>
                      <option value="corporate">Evento Aziendale</option>
                      <option value="other">Altro</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Data Indicativa
                    </label>
                    <input
                      type="date"
                      id="date"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-baglio-terracotta focus:border-baglio-terracotta"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                    Numero Indicativo di Ospiti
                  </label>
                  <input
                    type="number"
                    id="guests"
                    min="1"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-baglio-terracotta focus:border-baglio-terracotta"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Messaggio *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-baglio-terracotta focus:border-baglio-terracotta"
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="cta-button w-full"
                  >
                    Invia Richiesta
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Eventi;
