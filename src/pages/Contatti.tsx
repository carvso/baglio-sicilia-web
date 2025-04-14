
import React from 'react';
import { Phone, Mail, Clock, MapPin, Instagram, Facebook } from 'lucide-react';
import Layout from '@/components/Layout';
import ImageWithOverlay from '@/components/ImageWithOverlay';
import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';

const ContactInfo = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => {
  return (
    <div className="flex items-start mb-6">
      <div className="text-baglio-terracotta mt-1 mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        {children}
      </div>
    </div>
  );
};

const Contatti = () => {
  return (
    <Layout>
      <ImageWithOverlay 
        src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
        alt="Contatta Baglio Abbate"
        className="h-[50vh]"
      >
        <div className="baglio-container text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">
            Contatti
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Siamo qui per rispondere alle tue domande e accoglierti presto
          </p>
        </div>
      </ImageWithOverlay>

      <section className="section-padding bg-white">
        <div className="baglio-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <SectionTitle 
                title="Informazioni di contatto" 
                subtitle="Ecco come raggiungerci e contattarci"
              />
              
              <ContactInfo icon={<MapPin size={24} />} title="Indirizzo">
                <p className="text-gray-600">Via Palermo 2, Balestrate (PA)</p>
                <p className="text-gray-600">90041 - Sicilia, Italia</p>
              </ContactInfo>
              
              <ContactInfo icon={<Phone size={24} />} title="Telefono">
                <p className="text-gray-600">+39 091 123 4567</p>
                <p className="text-gray-600">+39 333 987 6543 (Prenotazioni)</p>
              </ContactInfo>
              
              <ContactInfo icon={<Mail size={24} />} title="Email">
                <p className="text-gray-600">info@baglioabbate.it</p>
                <p className="text-gray-600">eventi@baglioabbate.it (Eventi privati)</p>
              </ContactInfo>
              
              <ContactInfo icon={<Clock size={24} />} title="Orari di apertura">
                <div className="text-gray-600">
                  <p className="mb-1"><span className="font-semibold">Lunedì - Venerdì:</span> 12:00 - 23:00</p>
                  <p className="mb-1"><span className="font-semibold">Sabato:</span> 12:00 - 24:00</p>
                  <p><span className="font-semibold">Domenica:</span> 12:00 - 23:00</p>
                </div>
              </ContactInfo>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-3">Social Media</h3>
                <div className="flex space-x-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-baglio-terracotta transition-colors">
                    <Instagram size={24} />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-baglio-terracotta transition-colors">
                    <Facebook size={24} />
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <SectionTitle 
                title="Mandaci un messaggio" 
                subtitle="Compila il modulo e ti risponderemo al più presto"
              />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="h-[450px] relative">
        <div className="absolute inset-0 z-10">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25693.09767224354!2d13.00252508697102!3d38.04952056842693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1319a5f7e09e5681%3A0x5667b56b1021075!2s90041%20Balestrate%2C%20Provincia%20di%20Palermo!5e0!3m2!1sit!2sit!4v1650234567890!5m2!1sit!2sit" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mappa di Baglio Abbate"
          ></iframe>
        </div>
      </section>

      <section className="section-padding bg-baglio-cream bg-opacity-20">
        <div className="baglio-container text-center">
          <SectionTitle 
            title="Come raggiungerci" 
            subtitle="Indicazioni per arrivare al Baglio Abbate"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-baglio-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h3 className="text-xl font-semibold mb-3 font-playfair">In auto</h3>
              <p className="text-gray-600">
                Dall'autostrada A29 (Palermo-Mazara del Vallo), prendi l'uscita Balestrate. Segui le indicazioni per il centro di Balestrate, poi per Via Palermo. Il Baglio Abbate si trova al civico 2.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-baglio-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h3 className="text-xl font-semibold mb-3 font-playfair">In treno</h3>
              <p className="text-gray-600">
                La stazione ferroviaria di Balestrate è collegata con Palermo e Trapani. Dalla stazione, il Baglio Abbate dista circa 1,5 km ed è raggiungibile in taxi o con una piacevole passeggiata.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-baglio-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h3 className="text-xl font-semibold mb-3 font-playfair">In aereo</h3>
              <p className="text-gray-600">
                L'aeroporto più vicino è quello di Palermo "Falcone Borsellino", a circa 30 km dal Baglio Abbate. Dall'aeroporto, è possibile noleggiare un'auto o prendere un taxi per raggiungere la struttura.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contatti;
