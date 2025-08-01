
import React from 'react';
import { Briefcase, Presentation, Coffee, Video, Users, Wifi, Instagram, Crown, Star, Monitor, Shield, Headphones, Lightbulb, Camera, Zap, Globe, Settings, Clock, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';
import ImageWithOverlay from '@/components/ImageWithOverlay';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EventCalendar } from '@/components/EventCalendar';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';
import DividerSottoEventi from '@/components/DividerSottoEventi';
import DividerDecorativo from '@/components/DividerDecorativo';
import { getLovableUploadPath } from '@/lib/paths';
import { getStructuredData } from '@/lib/structuredData';

const EventiAziendali = () => {
  const packages = [
    {
      name: "Base",
      price: "A partire da €600",
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderGradient: "from-blue-500 to-cyan-500",
      icon: <Briefcase size={24} />,
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
      gradient: "from-baglio-oro/20 to-yellow-400/20",
      borderGradient: "from-baglio-oro to-yellow-400",
      icon: <Crown size={24} />,
      badge: "PIÙ CONSIGLIATO",
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
      gradient: "from-purple-500/20 to-indigo-600/20",
      borderGradient: "from-purple-500 to-indigo-600",
      icon: <Star size={24} />,
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
    { icon: <Briefcase size={20} />, text: "Sale meeting modulari", gradient: "from-blue-500/15 to-cyan-500/15" },
    { icon: <Wifi size={20} />, text: "Connessione internet dedicata", gradient: "from-green-500/15 to-emerald-500/15" },
    { icon: <Presentation size={20} />, text: "Attrezzature A/V professionali", gradient: "from-purple-500/15 to-violet-500/15" },
    { icon: <Coffee size={20} />, text: "Catering business", gradient: "from-amber-500/15 to-orange-500/15" },
    { icon: <Video size={20} />, text: "Streaming e registrazione", gradient: "from-red-500/15 to-pink-500/15" },
    { icon: <Users size={20} />, text: "Team building activities", gradient: "from-indigo-500/15 to-blue-500/15" },
    { icon: <UserCheck size={20} />, text: "Servizio hostess", gradient: "from-rose-500/15 to-pink-500/15" },
    { icon: <Monitor size={20} />, text: "Streaming professionale", gradient: "from-gray-500/15 to-slate-500/15" },
    { icon: <Shield size={20} />, text: "Security service", gradient: "from-red-600/15 to-red-500/15" },
    { icon: <Headphones size={20} />, text: "Assistenza tecnica H24", gradient: "from-yellow-500/15 to-amber-500/15" },
    { icon: <Lightbulb size={20} />, text: "Consulenza eventi", gradient: "from-orange-500/15 to-yellow-500/15" },
    { icon: <Camera size={20} />, text: "Fotografia professionale", gradient: "from-teal-500/15 to-cyan-500/15" },
    { icon: <Zap size={20} />, text: "Setup rapido", gradient: "from-lime-500/15 to-green-500/15" },
    { icon: <Globe size={20} />, text: "Coordinamento logistics", gradient: "from-sky-500/15 to-blue-500/15" },
    { icon: <Settings size={20} />, text: "Personalizzazione completa", gradient: "from-violet-500/15 to-purple-500/15" },
    { icon: <Clock size={20} />, text: "Gestione tempistiche", gradient: "from-emerald-500/15 to-teal-500/15" }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Eventi Aziendali a Balestrate | Baglio Abbate - Meeting e Convention Palermo</title>
        <meta name="description" content="Organizza il tuo evento aziendale a Balestrate: meeting, convention, team building. Location business vicino Palermo con tecnologia avanzata e servizi professionali." />
        <meta name="keywords" content="eventi aziendali balestrate, meeting palermo, convention sicilia, team building, baglio abbate business" />
        <link rel="canonical" href="https://baglioabbate.it/eventi-aziendali" />
        <meta property="og:title" content="Eventi Aziendali a Balestrate | Baglio Abbate - Meeting e Convention Palermo" />
        <meta property="og:description" content="Organizza il tuo evento aziendale a Balestrate: meeting, convention, team building. Location business vicino Palermo con tecnologia avanzata." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://baglioabbate.it/eventi-aziendali" />
        <meta property="og:image" content={getLovableUploadPath("1a152ccf-f53d-47a9-8d2f-f43edceba327.png")} />
        
        {/* Dati Strutturati Schema.org per Eventi Aziendali */}
        <script type="application/ld+json">
          {JSON.stringify(getStructuredData('eventi-aziendali'))}
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

        <DividerSottoEventi />

        {/* Introduction */}
        <section className="section-padding bg-gradient-to-br from-baglio-ebano via-baglio-ebanoIntenso to-baglio-ebano shadow-2xl shadow-baglio-oro/10 relative overflow-hidden">
          {/* Decorative blur elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-baglio-oro/10 rounded-full blur-3xl"></div>
          
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

        {/* Modern Packages Section */}
        <section className="section-padding bg-gradient-to-br from-baglio-ebano to-baglio-ebanoIntenso relative overflow-hidden">
          {/* Decorative blur elements */}
          <div className="absolute top-10 right-20 w-48 h-48 bg-purple-500/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-56 h-56 bg-blue-500/8 rounded-full blur-3xl"></div>
          
          <div className="baglio-container">
            <SectionTitle 
              title="Soluzioni business" 
              subtitle="Pacchetti studiati per ogni esigenza aziendale a Balestrate"
              center
              light={true}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {packages.map((pkg, index) => (
                <div key={index} className="relative group">
                  {pkg.badge && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                      <Badge className="bg-gradient-to-r from-baglio-oro to-yellow-400 text-baglio-ebanoIntenso font-bold px-3 py-1 text-xs shadow-lg">
                        {pkg.badge}
                      </Badge>
                    </div>
                  )}
                  
                  <Card className={`bg-gradient-to-br ${pkg.gradient} backdrop-blur-sm border-2 border-transparent bg-clip-padding relative overflow-hidden transition-all duration-500 group-hover:-translate-y-2 shadow-xl group-hover:shadow-2xl rounded-2xl h-full`}>
                    {/* Gradient border effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${pkg.borderGradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-2xl`}></div>
                    <div className="absolute inset-[2px] bg-gradient-to-br from-baglio-ebano via-baglio-ebanoIntenso to-baglio-ebano rounded-2xl"></div>
                    
                    <CardHeader className="text-center pb-4 relative z-10">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${pkg.borderGradient} text-white mb-4 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {pkg.icon}
                      </div>
                      <CardTitle className="text-2xl font-playfair text-baglio-oro mb-2 drop-shadow-sm group-hover:text-yellow-300 transition-colors duration-300">
                        {pkg.name}
                      </CardTitle>
                      <p className="text-baglio-oro font-semibold text-lg drop-shadow-sm group-hover:text-yellow-300 transition-colors duration-300">
                        {pkg.price}
                      </p>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <ul className="space-y-3">
                        {pkg.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-baglio-crema group-hover:text-white transition-colors duration-300">
                            <span className="text-baglio-oro mr-3 mt-1 drop-shadow-sm group-hover:text-yellow-300">✓</span>
                            <span className="text-sm md:text-base leading-relaxed">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
        <DividerSottoEventi />

        {/* Enhanced Services Section */}
        <section className="section-padding bg-gradient-to-br from-baglio-ebanoIntenso via-baglio-ebano to-baglio-ebanoIntenso shadow-2xl shadow-baglio-oro/10 relative overflow-hidden">
          {/* Decorative blur elements */}
          <div className="absolute top-20 left-10 w-40 h-40 bg-green-500/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/8 rounded-full blur-3xl"></div>
          
          <div className="baglio-container">
            <div className="text-center mb-12">
              <SectionTitle 
                title="Servizi business" 
                subtitle="Tecnologia e ospitalità per il successo del vostro evento a Balestrate"
                center
                light={true}
              />
              {/* Decorative line under title */}
              <div className="flex items-center justify-center mt-6">
                <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-baglio-oro to-transparent"></div>
                <div className="mx-4 w-2 h-2 bg-baglio-oro rounded-full"></div>
                <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-baglio-oro to-transparent"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {services.map((service, index) => (
                <div key={index} className="group relative">
                  <div className={`flex flex-col items-center text-center p-6 bg-gradient-to-br ${service.gradient} backdrop-blur-sm rounded-xl border border-baglio-oro/20 shadow-lg shadow-baglio-oro/10 hover:shadow-xl hover:shadow-baglio-oro/20 transition-all duration-500 hover:-translate-y-1 hover:scale-105 h-full`}>
                    <div className="text-baglio-oro mb-4 p-3 bg-gradient-to-br from-baglio-oro/15 to-baglio-oro/10 rounded-full border border-baglio-oro/30 group-hover:scale-110 transition-transform duration-300 shadow-md">
                      {service.icon}
                    </div>
                    <span className="text-baglio-crema font-medium text-sm group-hover:text-white transition-colors duration-300 leading-relaxed">{service.text}</span>
                  </div>
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

        {/* Modern CTA Section */}
        <section className="section-padding bg-gradient-to-br from-baglio-ebanoIntenso to-baglio-ebano relative overflow-hidden">
          {/* Decorative blur elements */}
          <div className="absolute top-10 left-1/4 w-48 h-48 bg-baglio-oro/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-blue-500/8 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-baglio-oro/5 to-transparent"></div>
          
          <div className="baglio-container text-center relative z-10">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-baglio-ebano/95 to-baglio-ebanoIntenso/95 backdrop-blur-lg rounded-3xl p-12 shadow-2xl shadow-baglio-oro/25 border border-baglio-oro/40 hover:border-baglio-oro/60 transition-all duration-500 group hover:shadow-3xl hover:shadow-baglio-oro/35">
              {/* Decorative elements */}
              <div className="absolute top-8 left-8 w-6 h-6 border-t-2 border-l-2 border-baglio-oro/30 group-hover:border-baglio-oro/50 transition-colors duration-300"></div>
              <div className="absolute top-8 right-8 w-6 h-6 border-t-2 border-r-2 border-baglio-oro/30 group-hover:border-baglio-oro/50 transition-colors duration-300"></div>
              <div className="absolute bottom-8 left-8 w-6 h-6 border-b-2 border-l-2 border-baglio-oro/30 group-hover:border-baglio-oro/50 transition-colors duration-300"></div>
              <div className="absolute bottom-8 right-8 w-6 h-6 border-b-2 border-r-2 border-baglio-oro/30 group-hover:border-baglio-oro/50 transition-colors duration-300"></div>
              
              <SectionTitle 
                title="Il vostro successo è il nostro obiettivo" 
                subtitle="Contattaci per organizzare un evento aziendale di successo"
                center
                light={true}
              />
              
              <DividerDecorativo />
              
              <div className="mt-8">
                <Link to="/contatti">
                  <Button className="bg-gradient-to-r from-baglio-oro to-baglio-oroImperiale hover:from-baglio-oroImperiale hover:to-baglio-oro text-baglio-ebanoIntenso font-bold py-4 px-10 text-lg shadow-xl shadow-baglio-oro/40 hover:shadow-2xl hover:shadow-baglio-oro/50 transition-all duration-500 hover:-translate-y-1 hover:scale-105 rounded-xl">
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
