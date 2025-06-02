
import React from 'react';
import { Heart, Camera, Music, Flower, Crown, Car } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import ImageWithOverlay from '@/components/ImageWithOverlay';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Matrimoni = () => {
  const packages = [
    {
      name: "Base",
      price: "A partire da €2.500",
      benefits: [
        "Location per cerimonia e ricevimento",
        "Allestimento base con sedie e tavoli",
        "Coordinamento giornata matrimonio",
        "Parcheggio riservato per 100 auto",
        "Pulizia e riordino finale",
        "Assistenza staff per 8 ore"
      ]
    },
    {
      name: "Premium",
      price: "A partire da €4.200",
      benefits: [
        "Tutto incluso nel pacchetto Base",
        "Floral design per cerimonia e ricevimento",
        "Musica dal vivo durante l'aperitivo",
        "Menu degustazione per gli sposi",
        "Servizio fotografico reportage (6 ore)",
        "Brindisi di benvenuto per tutti gli ospiti"
      ]
    },
    {
      name: "Exclusive",
      price: "Su preventivo",
      benefits: [
        "Tutto incluso nel pacchetto Premium",
        "Wedding planner dedicato",
        "Suite nuziale per la prima notte",
        "Servizio auto d'epoca per gli sposi",
        "Video matrimonio professionale",
        "Menù personalizzato con chef stellato"
      ]
    }
  ];

  const services = [
    { icon: <Heart size={20} />, text: "Cerimonia simbolica in location" },
    { icon: <Flower size={20} />, text: "Allestimenti floreali" },
    { icon: <Music size={20} />, text: "Musica e intrattenimento" },
    { icon: <Camera size={20} />, text: "Servizi fotografici e video" },
    { icon: <Crown size={20} />, text: "Suite nuziale" },
    { icon: <Car size={20} />, text: "Servizi trasporto sposi" }
  ];

  return (
    <Layout>
      <div className="bg-background min-h-screen">
        {/* Hero Section */}
        <ImageWithOverlay 
          src="/lovable-uploads/ac14664b-cf42-46ec-90e4-d0461e9f18a2.png"
          alt="Matrimoni e Cerimonie al Baglio Abbate"
          className="h-[70vh]"
          overlayOpacity={50}
          priority={true}
          sizes="100vw"
        >
          <div className="baglio-container text-center text-foreground">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair text-elite-gold">
              Matrimoni e Cerimonie
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Il vostro "Sì" in una cornice da sogno
            </p>
          </div>
        </ImageWithOverlay>

        {/* Introduction */}
        <section className="section-padding bg-elite-dark">
          <div className="baglio-container">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                Il vostro matrimonio è l'inizio di una nuova storia d'amore, e ogni storia merita una cornice perfetta. 
                Al Baglio Abbate, tra le antiche mura in pietra e i profumi della campagna siciliana, il vostro "sì" 
                risuonerà per sempre nel tempo. Dall'intimità della cerimonia alla gioia del ricevimento, ogni momento 
                sarà curato nei minimi dettagli per renderlo indimenticabile.
              </p>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="section-padding bg-background">
          <div className="baglio-container">
            <SectionTitle 
              title="I nostri pacchetti matrimonio" 
              subtitle="Dal sogno alla realtà, scegliete l'esperienza che fa per voi"
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
              title="Servizi dedicati agli sposi" 
              subtitle="Ogni dettaglio pensato per il vostro giorno più bello"
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
              title="Il vostro matrimonio da sogno" 
              subtitle="Iniziamo insieme a pianificare il giorno più bello della vostra vita"
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

export default Matrimoni;
