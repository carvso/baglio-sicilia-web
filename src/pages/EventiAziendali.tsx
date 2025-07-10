
import React from 'react';
import { Briefcase, Presentation, Coffee, Video, Users, Wifi, Instagram } from 'lucide-react';
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
      <Helmet>
        <title>Eventi Aziendali a Balestrate | Baglio Abbate - Meeting e Convention Palermo</title>
        <meta name="description" content="Organizza il tuo evento aziendale a Balestrate: meeting, convention, team building. Location business vicino Palermo con tecnologia avanzata e servizi professionali." />
        <meta name="keywords" content="eventi aziendali balestrate, meeting palermo, convention sicilia, team building, baglio abbate business" />
        <link rel="canonical" href="https://www.baglioabbate.it/eventi-aziendali" />
        <meta property="og:title" content="Eventi Aziendali a Balestrate | Baglio Abbate - Meeting e Convention Palermo" />
        <meta property="og:description" content="Organizza il tuo evento aziendale a Balestrate: meeting, convention, team building. Location business vicino Palermo con tecnologia avanzata." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.baglioabbate.it/eventi-aziendali" />
        <meta property="og:image" content={getLovableUploadPath("1a152ccf-f53d-47a9-8d2f-f43edceba327.png")} />
        
        {/* Dati Strutturati Schema.org per Eventi Aziendali */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EventVenue",
            "name": "Baglio Abbate - Eventi Aziendali",
            "description": "Location per eventi aziendali e business a Balestrate, vicino Palermo. Meeting, convention e team building con tecnologia avanzata.",
            "url": "https://www.baglioabbate.it/eventi-aziendali",
            "image": "https://www.baglioabbate.it/public/lovable-uploads/1a152ccf-f53d-47a9-8d2f-f43edceba327.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Via Palermo 4",
              "addressLocality": "Balestrate",
              "addressRegion": "PA",
              "postalCode": "90041",
              "addressCountry": "IT"
            },
            "telephone": "+39 331 8286888",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 38.0495,
              "longitude": 13.0025
            },
            "openingHours": "Mo-Su 09:00-20:00",
            "priceRange": "€€",
            "amenityFeature": [
              {
                "@type": "LocationFeatureSpecification",
                "name": "Wi-Fi ad alta velocità",
                "value": true
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Sale Meeting",
                "value": true
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Attrezzature A/V",
                "value": true
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Catering Business",
                "value": true
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Parcheggio Riservato",
                "value": true
              }
            ],
            "offers": {
              "@type": "Offer",
              "name": "Pacchetto Eventi Aziendali Base",
              "price": "600",
              "priceCurrency": "EUR",
              "description": "Sala meeting fino a 50 persone con Wi-Fi e coffee break"
            }
          })}
        </script>
      </Helmet>
      
      <BreadcrumbNavigation />
      <div className="bg-baglio-ebano min-h-screen">
        {/* Hero Section */}
        <ImageWithOverlay 
          src="/lovable-uploads/1a152ccf-f53d-47a9-8d2f-f43edceba327.png"
          alt="Eventi aziendali al Baglio Abbate Balestrate - Location business per meeting e convention in Sicilia"
          className="h-[70vh]"
          overlayOpacity={60}
          priority={true}
          sizes="100vw"
        >
          <div className="baglio-container text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair text-baglio-oro drop-shadow-2xl">
              Eventi Aziendali
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-lg text-baglio-crema">
              Dove business e tradizione si incontrano a Balestrate
            </p>
          </div>
        </ImageWithOverlay>

        {/* Introduction */}
        <section className="section-padding bg-gradient-to-br from-baglio-ebano via-baglio-ebanoIntenso to-baglio-ebano shadow-2xl shadow-baglio-oro/10">
          <div className="baglio-container">
            <div className="max-w-4xl mx-auto text-center backdrop-blur-sm bg-baglio-ebano/30 rounded-2xl p-8 border border-baglio-oro/20 shadow-xl shadow-baglio-oro/15">
              <p className="text-lg md:text-xl text-baglio-crema leading-relaxed">
                Lontani dal caos della città ma connessi al mondo, il Baglio Abbate a Balestrate offre l'ambiente ideale per i vostri 
                eventi aziendali. Meeting strategici, presentazioni importanti, team building o cene di gala: la nostra 
                location unisce la professionalità dei servizi business con il fascino autentico della Sicilia occidentale, 
                creando l'atmosfera perfetta per il successo dei vostri progetti.
              </p>
            </div>
          </div>
        </section>
        <DividerSottoEventi />

        {/* Packages */}
        <section className="section-padding bg-gradient-to-br from-baglio-ebano to-baglio-ebanoIntenso">
          <div className="baglio-container">
            <SectionTitle 
              title="Soluzioni business" 
              subtitle="Pacchetti studiati per ogni esigenza aziendale a Balestrate"
              center
              light={true}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {packages.map((pkg, index) => (
                <Card key={index} className="bg-gradient-to-br from-baglio-ebano via-baglio-ebanoIntenso to-baglio-ebano border border-baglio-oro/40 hover:border-baglio-oro/70 transition-all duration-500 group shadow-xl shadow-baglio-oro/25 hover:shadow-2xl hover:shadow-baglio-oro/35 hover:-translate-y-1 rounded-xl backdrop-blur-sm">
                  <CardHeader className="text-center pb-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-baglio-oro/10 to-baglio-oro/5 rounded-t-xl"></div>
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
        <section className="section-padding bg-gradient-to-br from-baglio-ebanoIntenso via-baglio-ebano to-baglio-ebanoIntenso shadow-2xl shadow-baglio-oro/10">
          <div className="baglio-container">
            <SectionTitle 
              title="Servizi business" 
              subtitle="Tecnologia e ospitalità per il successo del vostro evento a Balestrate"
              center
              light={true}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {services.map((service, index) => (
                <div key={index} className="flex items-center p-6 bg-gradient-to-br from-baglio-ebano to-baglio-ebanoIntenso rounded-xl border border-baglio-oro/40 shadow-lg shadow-baglio-oro/15 hover:shadow-xl hover:shadow-baglio-oro/25 transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm">
                  <div className="text-baglio-oro mr-4 p-2 bg-gradient-to-br from-baglio-oro/15 to-baglio-oro/10 rounded-lg border border-baglio-oro/20">
                    {service.icon}
                  </div>
                  <span className="text-baglio-crema font-medium">{service.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <DividerSottoEventi />

        {/* Calendario Eventi Section */}
        <section className="py-16 bg-baglio-ebano">
          <div className="baglio-container">
            <EventCalendar compact={false} />
          </div>
        </section>

        {/* Instagram CTA */}
        <section className="py-12 bg-gradient-to-br from-baglio-ebano to-baglio-ebanoIntenso">
          <div className="baglio-container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-baglio-ebano/80 to-baglio-ebanoIntenso/80 backdrop-blur-sm rounded-2xl p-8 border border-baglio-oro/30 shadow-xl shadow-baglio-oro/20">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-baglio-oro to-baglio-oroImperiale mr-4">
                    <Instagram size={24} className="text-baglio-ebano" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-baglio-oro">
                    Seguici su Instagram
                  </h3>
                </div>
                <p className="text-baglio-crema mb-6">
                  Guarda i nostri eventi aziendali di successo a Balestrate e scopri come possiamo rendere speciale anche il tuo
                </p>
                <a
                  href="https://instagram.com/baglioabbateevents"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-baglio-oro to-baglio-oroImperiale text-baglio-ebano font-semibold rounded-lg hover:shadow-lg hover:shadow-baglio-oro/30 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Instagram size={20} className="mr-2" />
                  @baglioabbateevents
                </a>
              </div>
            </div>
          </div>
        </section>
        <DividerSottoEventi />

        {/* CTA */}
        <section className="section-padding bg-gradient-to-br from-baglio-ebanoIntenso to-baglio-ebano relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-baglio-oro/5 to-transparent"></div>
          <div className="baglio-container text-center relative z-10">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-baglio-ebano/90 to-baglio-ebanoIntenso/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-baglio-oro/20 border border-baglio-oro/30">
              <SectionTitle 
                title="Il vostro successo è il nostro obiettivo" 
                subtitle="Contattaci per organizzare un evento aziendale di successo"
                center
                light={true}
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

export default EventiAziendali;
