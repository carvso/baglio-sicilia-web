import React from 'react';
import { Users, Music, Camera, Gift, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import ImageWithOverlay from '@/components/ImageWithOverlay';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const EventiPrivati = () => {
  const packages = [
    {
      name: "Base",
      price: "A partire da €800",
      benefits: [
        "Location esclusiva per 4 ore",
        "Drink di benvenuto per tutti gli ospiti",
        "Setup base tavoli e sedie",
        "Assistenza staff dedicato",
        "Parcheggio riservato",
        "Pulizia finale inclusa"
      ]
    },
    {
      name: "Premium",
      price: "A partire da €1.400",
      benefits: [
        "Tutto incluso nel pacchetto Base",
        "Catering completo con menu personalizzato",
        "Servizio musica e impianto audio",
        "Decorazioni floreali di stagione",
        "Servizio fotografico (2 ore)",
        "Open bar per tutta la durata"
      ]
    },
    {
      name: "Exclusive",
      price: "Su preventivo",
      benefits: [
        "Tutto incluso nel pacchetto Premium",
        "Fotografo professionale intera giornata",
        "Setup su misura con design personalizzato",
        "Animazione e intrattenimento",
        "Servizio di hostess/maggiordomo",
        "Trasferimenti VIP per gli ospiti"
      ]
    }
  ];

  const services = [
    { icon: <Users size={20} />, text: "Fino a 150 ospiti" },
    { icon: <MapPin size={20} />, text: "Parcheggio riservato" },
    { icon: <Music size={20} />, text: "Impianto audio professionale" },
    { icon: <Camera size={20} />, text: "Servizi fotografici" },
    { icon: <Gift size={20} />, text: "Allestimenti personalizzati" },
    { icon: <Clock size={20} />, text: "Flessibilità oraria" }
  ];

  return (
    <Layout>
      <div className="bg-baglio-crema min-h-screen">
        {/* Hero Section */}
        <ImageWithOverlay 
          src="/lovable-uploads/abd0f4fc-88b2-4370-b75c-a060e0f81d76.png"
          alt="Eventi Privati al Baglio Abbate"
          className="h-[70vh]"
          overlayOpacity={50}
          priority={true}
          sizes="100vw"
        >
          <div className="baglio-container text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair text-baglio-oro">
              Eventi Privati
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Ogni ricorrenza ha la sua cornice perfetta
            </p>
          </div>
        </ImageWithOverlay>

        {/* Introduction */}
        <section className="section-padding bg-baglio-ebano">
          <div className="baglio-container">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg md:text-xl text-baglio-crema leading-relaxed">
                Dal compleanno importante all'anniversario speciale, ogni momento della vita merita di essere celebrato 
                in grande stile. Il Baglio Abbate trasforma i vostri eventi privati in esperienze indimenticabili, 
                dove l'eleganza della location si fonde con la calorosa ospitalità siciliana per creare ricordi che 
                dureranno per sempre.
              </p>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="section-padding bg-baglio-crema">
          <div className="baglio-container">
            <SectionTitle 
              title="I nostri pacchetti" 
              subtitle="Soluzioni pensate per ogni esigenza e budget"
              center
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {packages.map((pkg, index) => (
                <Card key={index} className="bg-baglio-ebano border-baglio-oro/30 hover:border-baglio-oroImperiale transition-all duration-300 group">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-playfair text-baglio-oro mb-2">
                      {pkg.name}
                    </CardTitle>
                    <p className="text-baglio-oro font-semibold text-lg">
                      {pkg.price}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {pkg.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-baglio-crema">
                          <span className="text-baglio-oro mr-2 mt-1">✓</span>
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
        <section className="section-padding bg-baglio-ebano">
          <div className="baglio-container">
            <SectionTitle 
              title="Servizi inclusi" 
              subtitle="Tutto quello di cui avete bisogno per un evento perfetto"
              center
              light={true}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {services.map((service, index) => (
                <div key={index} className="flex items-center p-4 bg-baglio-crema rounded-lg border border-baglio-oro/20">
                  <div className="text-baglio-oro mr-4">
                    {service.icon}
                  </div>
                  <span className="text-baglio-ebanoIntenso">{service.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-baglio-crema">
          <div className="baglio-container text-center">
            <SectionTitle 
              title="Pronto a celebrare?" 
              subtitle="Contattaci per un preventivo personalizzato del tuo evento privato"
              center
            />
            
            <div className="mt-8">
              <Link to="/contatti">
                <Button className="bg-baglio-oro hover:bg-baglio-oroImperiale text-baglio-ebanoIntenso font-bold py-3 px-8 text-lg">
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

export default EventiPrivati;
