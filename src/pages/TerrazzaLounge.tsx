import React from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import ImageWithOverlay from '@/components/ImageWithOverlay';
import CTAButton from '@/components/CTAButton';
import OpenTableReservation from '@/components/OpenTableReservation';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const TerrazzaLounge = () => {
  const weeklyEvents = [
    {
      day: "Giovedì",
      title: "Aperitivo Italiano",
      description: "I migliori cocktail italiani accompagnati da finger food gourmet e musica lounge selezionata dai nostri DJ resident.",
      time: "18:00 - 22:00"
    },
    {
      day: "Venerdì",
      title: "Sunset DJ Set",
      description: "Vivi l'emozione del tramonto con i migliori DJ della scena locale e cocktail signature creati dai nostri mixologist.",
      time: "19:00 - 01:00"
    },
    {
      day: "Sabato",
      title: "Terrazza by Night",
      description: "La serata più esclusiva della costa con guest DJ internazionali, spettacoli dal vivo e un'atmosfera unica.",
      time: "20:00 - 02:00"
    },
    {
      day: "Domenica",
      title: "Brunch & Chill",
      description: "Un rilassante brunch domenicale con vista mare, deliziosi piatti e musica ambient in sottofondo.",
      time: "11:00 - 16:00"
    }
  ];

  return (
    <Layout>
      <ImageWithOverlay 
        src="/lovable-uploads/82698643-0369-4ee1-9b14-cf38c7d570df.png" 
        alt="Terrazza Elite Sunset Lounge Bar" 
        className="h-[70vh]"
        overlayOpacity={50}
      >
        <div className="baglio-container text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair animate-fade-in">
            Terrazza Elite
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 animate-fade-in">
            Sunset Lounge Bar: vivi il tramonto in un'atmosfera esclusiva
          </p>
          <CTAButton to="#reservation" fullWidth>Prenota il tuo tavolo</CTAButton>
        </div>
      </ImageWithOverlay>

      <section className="section-padding bg-white">
        <div className="baglio-container">
          <SectionTitle 
            title="L'Atmosfera" 
            subtitle="Dove ogni tramonto diventa un'esperienza indimenticabile"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <p className="text-gray-700 mb-4">
                La Terrazza Elite è il luogo dove l'eleganza incontra la modernità, dove ogni tramonto diventa una celebrazione di bellezza e convivialità.
              </p>
              <p className="text-gray-700 mb-4">
                Con vista panoramica sul mare di Sicilia, il nostro lounge bar offre un'esperienza sensoriale unica: cocktail artigianali creati dai nostri talentuosi mixologist, una selezione musicale curata dai migliori DJ e un'atmosfera che unisce raffinatezza e relax.
              </p>
              <p className="text-gray-700">
                Che sia per un aperitivo al tramonto, una serata con amici o una celebrazione speciale, la Terrazza Elite è il luogo ideale per chi cerca qualcosa di più di un semplice drink, ma un'esperienza da ricordare.
              </p>
            </div>
            <div>
              <img 
                src="/lovable-uploads/abd0f4fc-88b2-4370-b75c-a060e0f81d76.png" 
                alt="Terrazza Elite Lounge Bar" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-900 text-white relative">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="/lovable-uploads/d7dc3f33-bd94-4e1b-b910-8a09026f94bf.png" 
            alt="Sunset background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="baglio-container relative z-10">
          <SectionTitle 
            title="La Nostra Selezione" 
            subtitle="I migliori cocktail e tapas con vista sul tramonto"
            center
            light={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
            <div>
              <h3 className="text-2xl font-playfair mb-6 border-b border-baglio-terracotta pb-2">Signature Cocktails</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl mb-2 font-semibold">Sicilian Sunset</h4>
                  <p className="text-gray-300 mb-1">Gin al rosmarino, liquore di arance rosse, succo di limone fresco, sciroppo di mandorla</p>
                  <p className="text-baglio-terracotta">€12</p>
                </div>
                <div>
                  <h4 className="text-xl mb-2 font-semibold">Elite Negroni</h4>
                  <p className="text-gray-300 mb-1">Gin siciliano, Vermouth rosso artigianale, Bitter all'arancia, scorza d'arancia</p>
                  <p className="text-baglio-terracotta">€14</p>
                </div>
                <div>
                  <h4 className="text-xl mb-2 font-semibold">Mediterranean Mojito</h4>
                  <p className="text-gray-300 mb-1">Rum bianco, menta fresca, lime, sciroppo di basilico, acqua tonica</p>
                  <p className="text-baglio-terracotta">€12</p>
                </div>
                <div>
                  <h4 className="text-xl mb-2 font-semibold">Etna Spritz</h4>
                  <p className="text-gray-300 mb-1">Prosecco, liquore alle erbe siciliane, soda, fetta di pompelmo</p>
                  <p className="text-baglio-terracotta">€10</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-playfair mb-6 border-b border-baglio-terracotta pb-2">Gourmet Tapas</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl mb-2 font-semibold">Tagliere Siciliano</h4>
                  <p className="text-gray-300 mb-1">Selezione di formaggi e salumi locali, olive, miele, confetture artigianali</p>
                  <p className="text-baglio-terracotta">€18</p>
                </div>
                <div>
                  <h4 className="text-xl mb-2 font-semibold">Arancini Gourmet</h4>
                  <p className="text-gray-300 mb-1">Mini arancini assortiti: nero di seppia, pistacchio, ragù tradizionale</p>
                  <p className="text-baglio-terracotta">€14</p>
                </div>
                <div>
                  <h4 className="text-xl mb-2 font-semibold">Tartare di Tonno</h4>
                  <p className="text-gray-300 mb-1">Tonno fresco, avocado, lime, cipolla rossa caramellata, maionese al wasabi</p>
                  <p className="text-baglio-terracotta">€16</p>
                </div>
                <div>
                  <h4 className="text-xl mb-2 font-semibold">Bruschette del Mare</h4>
                  <p className="text-gray-300 mb-1">Selezione di bruschette con pesce fresco locale marinato e condito in vari modi</p>
                  <p className="text-baglio-terracotta">€15</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="baglio-container">
          <SectionTitle 
            title="Eventi Settimanali" 
            subtitle="La miglior selezione di musica ed eventi sulla costa"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {weeklyEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-baglio-terracotta">
                <h3 className="text-xl font-semibold mb-1 font-playfair">{event.day}</h3>
                <p className="text-baglio-terracotta text-sm mb-3">{event.time}</p>
                <h4 className="text-lg font-medium mb-3">{event.title}</h4>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <CTAButton to="/contatti" outline className="w-full justify-center">
                  Prenota
                </CTAButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-baglio-cream bg-opacity-20">
        <div className="baglio-container">
          <SectionTitle 
            title="Galleria" 
            subtitle="Momenti indimenticabili alla Terrazza Elite"
            center
          />
          
          <div className="mt-8">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <img 
                      src="/lovable-uploads/82698643-0369-4ee1-9b14-cf38c7d570df.png" 
                      alt="Terrazza panoramica" 
                      className="rounded-lg w-full h-64 object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <img 
                      src="/lovable-uploads/abd0f4fc-88b2-4370-b75c-a060e0f81d76.png" 
                      alt="Lounge bar" 
                      className="rounded-lg w-full h-64 object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <img 
                      src="/lovable-uploads/d7dc3f33-bd94-4e1b-b910-8a09026f94bf.png" 
                      alt="DJ set al tramonto" 
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

      <section id="reservation" className="section-padding">
        <div className="baglio-container">
          <SectionTitle 
            title="Prenota il tuo tavolo" 
            subtitle="Assicurati il posto migliore per goderti il tramonto"
            center
          />
          
          <div className="mt-8">
            <OpenTableReservation restaurantId="5678" className="max-w-2xl mx-auto" theme="dark" />
          </div>
        </div>
      </section>
      
      <WhatsAppButton message="Ciao! Sono interessato a prenotare un tavolo alla Terrazza Elite Sunset Lounge Bar." />
    </Layout>
  );
};

export default TerrazzaLounge;
