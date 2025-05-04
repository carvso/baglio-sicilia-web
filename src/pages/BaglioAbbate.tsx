import React from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import ImageWithOverlay from '@/components/ImageWithOverlay';
import CTAButton from '@/components/CTAButton';
import OpenTableReservation from '@/components/OpenTableReservation';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const BaglioAbbate = () => {
  const testimonials = [
    {
      name: "Maria e Giuseppe",
      event: "Matrimonio",
      text: "Il nostro matrimonio al Baglio Abbate è stato un sogno. La location, il cibo, il servizio... tutto perfetto! I nostri ospiti continuano a parlarne."
    },
    {
      name: "Azienda Rossi",
      event: "Evento aziendale",
      text: "Abbiamo organizzato il nostro evento aziendale al Baglio e possiamo dire che è stata la scelta giusta. Professionalità e attenzione ai dettagli hanno reso l'evento memorabile."
    },
    {
      name: "Famiglia Bianchi",
      event: "Compleanno",
      text: "La festa di compleanno per i 50 anni di mio marito è stata indimenticabile grazie allo splendido scenario del Baglio e al servizio impeccabile."
    }
  ];
  
  const eventTypes = [
    {
      title: "Matrimoni",
      description: "La cornice perfetta per il giorno più importante della vostra vita. Dal rito civile al ricevimento, tutto in un'unica location da sogno.",
      image: "/lovable-uploads/47aec7fc-7c64-4fac-b4eb-63d4913afc3a.png"
    },
    {
      title: "Eventi privati",
      description: "Compleanni, anniversari, battesimi o qualsiasi occasione speciale merita una location all'altezza. Il Baglio Abbate è la risposta.",
      image: "/lovable-uploads/75cf2578-451c-46db-8c39-c3dcc02f7157.png"
    },
    {
      title: "Eventi aziendali",
      description: "Team building, conferenze, cene di gala aziendali in un'atmosfera elegante e professionale, con servizi personalizzati.",
      image: "/lovable-uploads/dbe1c6fb-b0fd-4f46-b937-20e7e2e4c8cc.png"
    }
  ];

  return (
    <Layout>
      <ImageWithOverlay 
        src="/lovable-uploads/dbe1c6fb-b0fd-4f46-b937-20e7e2e4c8cc.png" 
        alt="Baglio Abbate" 
        className="h-[70vh]"
        overlayOpacity={50}
      >
        <div className="baglio-container text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair animate-fade-in">
            Baglio Abbate
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 animate-fade-in">
            Tradizione e raffinatezza per i tuoi eventi più importanti
          </p>
          <CTAButton to="#reservation" fullWidth>Prenota la tua visita</CTAButton>
        </div>
      </ImageWithOverlay>

      <section className="section-padding bg-white">
        <div className="baglio-container">
          <SectionTitle 
            title="La Nostra Storia" 
            subtitle="Un angolo di Sicilia dove il tempo racconta storie di tradizione"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <p className="text-gray-700 mb-4">
                Il Baglio Abbate è un'antica struttura siciliana risalente al XVIII secolo, magistralmente restaurata per conservare il fascino della tradizione pur offrendo tutti i comfort moderni.
              </p>
              <p className="text-gray-700 mb-4">
                Situato tra le colline che abbracciano Balestrate, il Baglio domina un paesaggio mozzafiato che spazia dalla campagna siciliana fino al mare, creando un'atmosfera suggestiva e senza tempo.
              </p>
              <p className="text-gray-700">
                Oggi, il Baglio Abbate è la location ideale per chi desidera celebrare i momenti più importanti della vita in un contesto elegante e ricco di storia, dove ogni dettaglio viene curato con passione e professionalità.
              </p>
            </div>
            <div>
              <img 
                src="/lovable-uploads/75cf2578-451c-46db-8c39-c3dcc02f7157.png" 
                alt="Storia del Baglio Abbate" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-baglio-cream bg-opacity-20">
        <div className="baglio-container">
          <SectionTitle 
            title="I Nostri Eventi" 
            subtitle="Creiamo esperienze indimenticabili per ogni occasione speciale"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {eventTypes.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 font-playfair">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <CTAButton to="/contatti" outline className="w-full justify-center">
                    Richiedi informazioni
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="baglio-container">
          <SectionTitle 
            title="Galleria" 
            subtitle="Immagini che raccontano l'atmosfera unica del Baglio Abbate"
            center
          />
          
          <div className="mt-8">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <img 
                      src="/lovable-uploads/dbe1c6fb-b0fd-4f46-b937-20e7e2e4c8cc.png" 
                      alt="Baglio esterno" 
                      className="rounded-lg w-full h-64 object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <img 
                      src="/lovable-uploads/75cf2578-451c-46db-8c39-c3dcc02f7157.png" 
                      alt="Interno del Baglio" 
                      className="rounded-lg w-full h-64 object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <img 
                      src="/lovable-uploads/47aec7fc-7c64-4fac-b4eb-63d4913afc3a.png" 
                      alt="Area eventi" 
                      className="rounded-lg w-full h-64 object-cover"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      <section className="section-padding bg-baglio-cream bg-opacity-20">
        <div className="baglio-container">
          <SectionTitle 
            title="Testimonianze" 
            subtitle="Le parole di chi ha vissuto l'esperienza del Baglio Abbate"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <svg className="text-baglio-terracotta h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="text-baglio-terracotta h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="text-baglio-terracotta h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="text-baglio-terracotta h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="text-baglio-terracotta h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-baglio-terracotta">{testimonial.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reservation" className="section-padding">
        <div className="baglio-container">
          <SectionTitle 
            title="Prenota la tua visita" 
            subtitle="Scopri di persona la magia del Baglio Abbate"
            center
          />
          
          <div className="mt-8">
            <OpenTableReservation restaurantId="1234" className="max-w-2xl mx-auto" isEventVenue={true} />
          </div>
        </div>
      </section>
      
      <WhatsAppButton message="Ciao! Sono interessato a maggiori informazioni sul Baglio Abbate per un evento." />
    </Layout>
  );
};

export default BaglioAbbate;
