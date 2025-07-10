
import React from 'react';
import { Heart, Camera, Music, Flower, Crown, Car } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';
import ImageWithOverlay from '@/components/ImageWithOverlay';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EventCalendar } from '@/components/EventCalendar';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';
import DividerSottoEventi from '@/components/DividerSottoEventi';
import { getLovableUploadPath } from '@/lib/paths';
import { getStructuredData } from '@/lib/structuredData';

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
      <Helmet>
        <title>Matrimoni a Balestrate | Baglio Abbate - Location Matrimoni Palermo</title>
        <meta name="description" content="Organizza il tuo matrimonio da sogno a Balestrate, vicino Palermo. Location esclusiva per cerimonie e ricevimenti in Sicilia occidentale. Pacchetti personalizzati." />
        <meta name="keywords" content="matrimoni balestrate, location matrimoni palermo, cerimonie sicilia, ricevimenti matrimonio, baglio abbate matrimoni" />
        <link rel="canonical" href="https://baglioabbate.it/matrimoni" />
        <meta property="og:title" content="Matrimoni a Balestrate | Baglio Abbate - Location Matrimoni Palermo" />
        <meta property="og:description" content="Organizza il tuo matrimonio da sogno a Balestrate, vicino Palermo. Location esclusiva per cerimonie e ricevimenti in Sicilia occidentale." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://baglioabbate.it/matrimoni" />
        <meta property="og:image" content={getLovableUploadPath("ac14664b-cf42-46ec-90e4-d0461e9f18a2.png")} />
        
        {/* Dati Strutturati Schema.org per Matrimoni */}
        <script type="application/ld+json">
          {JSON.stringify(getStructuredData('matrimoni'))}
        </script>
      </Helmet>
      
      <BreadcrumbNavigation />
      <div className="bg-baglio-crema min-h-screen">
        {/* Hero Section */}
        <ImageWithOverlay 
          src="/lovable-uploads/ac14664b-cf42-46ec-90e4-d0461e9f18a2.png"
          alt="Matrimoni e cerimonie al Baglio Abbate Balestrate - Location esclusiva per matrimoni in Sicilia"
          className="h-[70vh]"
          overlayOpacity={50}
          priority={true}
          sizes="100vw"
        >
          <div className="baglio-container text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair text-baglio-oro drop-shadow-2xl">
              Matrimoni e Cerimonie
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-lg">
              Il vostro "Sì" in una cornice da sogno a Balestrate
            </p>
          </div>
        </ImageWithOverlay>

        {/* Introduction */}
        <section className="section-padding bg-gradient-to-br from-baglio-ebano to-baglio-ebanoIntenso shadow-2xl shadow-baglio-oro/5">
          <div className="baglio-container">
            <div className="max-w-4xl mx-auto text-center backdrop-blur-sm bg-baglio-ebano/20 rounded-2xl p-8 border border-baglio-oro/10 shadow-xl shadow-baglio-oro/10">
              <p className="text-lg md:text-xl text-baglio-crema leading-relaxed">
                Il vostro matrimonio è l'inizio di una nuova storia d'amore, e ogni storia merita una cornice perfetta. 
                Al Baglio Abbate a Balestrate, tra le antiche mura in pietra e i profumi della campagna siciliana occidentale, il vostro "sì" 
                risuonerà per sempre nel tempo. Dall'intimità della cerimonia alla gioia del ricevimento, ogni momento 
                sarà curato nei minimi dettagli per renderlo indimenticabile.
              </p>
            </div>
          </div>
        </section>

        <DividerSottoEventi />

        {/* Packages */}
        <section className="section-padding bg-baglio-crema">
          <div className="baglio-container">
            <SectionTitle 
              title="I nostri pacchetti matrimonio" 
              subtitle="Dal sogno alla realtà, scegliete l'esperienza che fa per voi a Balestrate"
              center
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {packages.map((pkg, index) => (
                <Card key={index} className="bg-gradient-to-br from-baglio-ebano to-baglio-ebanoIntenso border border-baglio-oro/30 hover:border-baglio-oro/60 transition-all duration-500 group shadow-lg shadow-baglio-oro/20 hover:shadow-xl hover:shadow-baglio-oro/30 hover:-translate-y-1 rounded-xl backdrop-blur-sm">
                  <CardHeader className="text-center pb-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-baglio-oro/5 to-transparent rounded-t-xl"></div>
                    <CardTitle className="text-2xl font-playfair text-baglio-oro mb-2 relative z-10 drop-shadow-sm">
                      {pkg.name}
                    </CardTitle>
                    <p className="text-baglio-oro font-semibold text-lg relative z-10 drop-shadow-sm">
                      {pkg.price}
                    </p>
                  </CardHeader>
                  <CardContent className="relative">
                    <ul className="space-y-3">
                      {pkg.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-baglio-crema group-hover:text-white transition-colors duration-300">
                          <span className="text-baglio-oro mr-2 mt-1 drop-shadow-sm">✓</span>
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

        <DividerSottoEventi />

        {/* Services */}
        <section className="section-padding bg-gradient-to-br from-baglio-ebano to-baglio-ebanoIntenso shadow-2xl shadow-baglio-oro/5">
          <div className="baglio-container">
            <SectionTitle 
              title="Servizi dedicati agli sposi" 
              subtitle="Ogni dettaglio pensato per il vostro giorno più bello a Balestrate"
              center
              light={true}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {services.map((service, index) => (
                <div key={index} className="flex items-center p-6 bg-baglio-crema rounded-xl border border-baglio-oro/30 shadow-md shadow-baglio-oro/10 hover:shadow-lg hover:shadow-baglio-oro/20 transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm">
                  <div className="text-baglio-oro mr-4 p-2 bg-gradient-to-br from-baglio-oro/10 to-baglio-oro/5 rounded-lg">
                    {service.icon}
                  </div>
                  <span className="text-baglio-ebanoIntenso font-medium">{service.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Calendario Eventi Section */}
        <section className="py-16 bg-baglio-ebano">
          <div className="baglio-container">
            <EventCalendar compact={false} />
          </div>
        </section>

        <DividerSottoEventi />

        {/* CTA */}
        <section className="section-padding bg-baglio-crema relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-baglio-oro/5 to-transparent"></div>
          <div className="baglio-container text-center relative z-10">
            <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-baglio-oro/10 border border-baglio-oro/20">
              <SectionTitle 
                title="Il vostro matrimonio da sogno" 
                subtitle="Iniziamo insieme a pianificare il giorno più bello della vostra vita a Balestrate"
                center
              />
              
              <div className="mt-8">
                <Link to="/contatti">
                  <Button className="bg-baglio-oro hover:bg-baglio-oroImperiale text-baglio-ebanoIntenso font-bold py-3 px-8 text-lg shadow-lg shadow-baglio-oro/30 hover:shadow-xl hover:shadow-baglio-oro/40 transition-all duration-300 hover:-translate-y-0.5">
                    Richiedi un preventivo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Matrimoni;
