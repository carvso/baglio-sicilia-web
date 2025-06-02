
import React from 'react';
import { Briefcase, Presentation, Coffee, Video, Users, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import ImageWithOverlay from '@/components/ImageWithOverlay';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const EventiAziendali = () => {
  const packages = [
    {
      name: "Base",
      price: "A partire da €600",
      benefits: [
        "Sala meeting fino a 50 persone",
        "Wi-Fi ad alta velocità",
        "Coffee break mattina e pomeriggio",
        "Proiettore e schermo",
        "Parcheggio riservato",
        "Assistenza tecnica di base"
      ]
    },
    {
      name: "Premium",
      price: "A partire da €1.200",
      benefits: [
        "Tutto incluso nel pacchetto Base",
        "Cena servita al tavolo",
        "Sistema audio/video professionale",
        "Hostess di accoglienza",
        "Servizio catering personalizzato",
        "Spazio networking con aperitivo"
      ]
    },
    {
      name: "Exclusive",
      price: "Su preventivo",
      benefits: [
        "Tutto incluso nel pacchetto Premium",
        "Regia audio/video completa",
        "Servizio logistico dedicato",
        "Tecnico audio/video dedicato",
        "Streaming live dell'evento",
        "Coordinamento completo giornata"
      ]
    }
  ];

  const services = [
    { icon: <Briefcase size={20} />, text: "Sale meeting modulari" },
    { icon: <Wifi size={20} />, text: "Connessione internet dedicata" },
    { icon: <Presentation size={20} />, text: "Attrezzature A/V professionali" },
    { icon: <Coffee size={20} />, text: "Catering business" },
    { icon: <Video size={20} />, text: "Streaming e registrazione" },
    { icon: <Users size={20} />, text: "Team building activities" }
  ];

  return (
    <Layout>
      <div className="bg-background min-h-screen">
        {/* Hero Section */}
        <ImageWithOverlay 
          src="/lovable-uploads/1a152ccf-f53d-47a9-8d2f-f43edceba327.png"
          alt="Eventi Aziendali al Baglio Abbate"
          className="h-[70vh]"
          overlayOpacity={50}
          priority={true}
          sizes="100vw"
        >
          <div className="baglio-container text-center text-foreground">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair text-elite-gold">
              Eventi Aziendali
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Dove business e tradizione si incontrano
            </p>
          </div>
        </ImageWithOverlay>

        {/* Introduction */}
        <section className="section-padding bg-elite-dark">
          <div className="baglio-container">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                Lontani dal caos della città ma connessi al mondo, il Baglio Abbate offre l'ambiente ideale per i vostri 
                eventi aziendali. Meeting strategici, presentazioni importanti, team building o cene di gala: la nostra 
                location unisce la professionalità dei servizi business con il fascino autentico della Sicilia, 
                creando l'atmosfera perfetta per il successo dei vostri progetti.
              </p>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="section-padding bg-background">
          <div className="baglio-container">
            <SectionTitle 
              title="Soluzioni business" 
              subtitle="Pacchetti studiati per ogni esigenza aziendale"
              center
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {packages.map((pkg, index) => (
                <Card key={index} className="bg-elite-dark border-elite-gold/30 hover:border-elite-goldLight transition-all duration-300 group">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-playfair text-elite-gold mb-2">
                      {pkg.name}
                    </CardTitle>
                    <p className="text-elite-goldLight font-semibold text-lg">
                      {pkg.price}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {pkg.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-foreground">
                          <span className="text-elite-gold mr-2 mt-1">✓</span>
                          <span className="text-sm md:text-base">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section-padding bg-elite-dark">
          <div className="baglio-container">
            <SectionTitle 
              title="Servizi business" 
              subtitle="Tecnologia e ospitalità per il successo del vostro evento"
              center
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {services.map((service, index) => (
                <div key={index} className="flex items-center p-4 bg-background rounded-lg border border-elite-gold/20">
                  <div className="text-elite-gold mr-4">
                    {service.icon}
                  </div>
                  <span className="text-foreground">{service.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-background">
          <div className="baglio-container text-center">
            <SectionTitle 
              title="Il vostro successo è il nostro obiettivo" 
              subtitle="Contattaci per organizzare un evento aziendale di successo"
              center
            />
            
            <div className="mt-8">
              <Link to="/contatti">
                <Button className="bg-elite-gold hover:bg-elite-goldLight text-elite-darker font-bold py-3 px-8 text-lg">
                  Richiedi un preventivo
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default EventiAziendali;
