
import React from 'react';
import { Heart, Camera, Music, Flower, Crown, Car, Star, Bus, User, Home, ShoppingBag, Smile, Music2, PartyPopper, Wine, Users, Check, Sparkles } from 'lucide-react';
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
      ],
      gradient: "from-blue-500 to-indigo-600",
      recommended: false
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
      ],
      gradient: "from-purple-500 to-pink-600",
      recommended: true
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
      ],
      gradient: "from-amber-500 to-orange-600",
      recommended: false
    }
  ];

  const services = [
    { icon: <Heart size={20} />, text: "Cerimonia simbolica in location", gradient: "from-red-500 to-pink-600" },
    { icon: <Flower size={20} />, text: "Allestimenti floreali", gradient: "from-green-500 to-emerald-600" },
    { icon: <Music size={20} />, text: "Musica e intrattenimento", gradient: "from-purple-500 to-violet-600" },
    { icon: <Camera size={20} />, text: "Servizi fotografici e video", gradient: "from-blue-500 to-cyan-600" },
    { icon: <Crown size={20} />, text: "Suite nuziale", gradient: "from-yellow-500 to-amber-600" },
    { icon: <Car size={20} />, text: "Servizi trasporto sposi", gradient: "from-gray-500 to-slate-600" },
    { icon: <Star size={20} />, text: "Servizio prova menù Sposi", gradient: "from-orange-500 to-red-600" },
    { icon: <Bus size={20} />, text: "Servizio trasporto ospiti con pullman g.t.", gradient: "from-teal-500 to-cyan-600" },
    { icon: <User size={20} />, text: "Make-up artist & hair stylist", gradient: "from-pink-500 to-rose-600" },
    { icon: <Home size={20} />, text: "Camerino sposi o area preparazione", gradient: "from-indigo-500 to-purple-600" },
    { icon: <ShoppingBag size={20} />, text: "Noleggio abiti o accessori", gradient: "from-violet-500 to-purple-600" },
    { icon: <Smile size={20} />, text: "Trucco/parrucchiere anche per invitati VIP", gradient: "from-emerald-500 to-teal-600" },
    { icon: <Music2 size={20} />, text: "Musica dal vivo (quartetto, jazz band, DJ, folk siciliano)", gradient: "from-blue-500 to-indigo-600" },
    { icon: <PartyPopper size={20} />, text: "Spettacoli serali (fuochi d'artificio, fuochi freddi, danza del fuoco)", gradient: "from-red-500 to-orange-600" },
    { icon: <Wine size={20} />, text: "Corner esperienziali (cigar bar, wine tasting, angolo limoncello o granita)", gradient: "from-purple-500 to-pink-600" },
    { icon: <Users size={20} />, text: "Animazione per bambini", gradient: "from-green-500 to-lime-600" },
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
      <div className="bg-baglio-ebano min-h-screen">
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
        <section className="section-padding bg-gradient-to-br from-baglio-ebano via-baglio-ebanoIntenso to-baglio-ebano shadow-2xl shadow-baglio-oro/10">
          <div className="baglio-container">
            <div className="max-w-4xl mx-auto text-center backdrop-blur-sm bg-baglio-ebano/30 rounded-2xl p-8 border border-baglio-oro/20 shadow-xl shadow-baglio-oro/15">
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

        {/* Modern Packages Section */}
        <section className="py-20 bg-gradient-to-br from-baglio-cremaIntonacata via-baglio-cremaIntonacata/95 to-baglio-cremaIntonacata relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-40 h-40 bg-baglio-oro rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-56 h-56 bg-baglio-oroImperiale rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-baglio-ebano rounded-full blur-2xl"></div>
          </div>
          
          <div className="baglio-container relative z-10">
            <div className="text-center mb-16">
              <SectionTitle 
                title="I nostri pacchetti matrimonio" 
                subtitle="Dal sogno alla realtà, scegliete l'esperienza che fa per voi a Balestrate"
                center
              />
              {/* Modern accent line */}
              <div className="flex items-center justify-center mt-8">
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent to-baglio-oro"></div>
                <div className="w-3 h-3 bg-baglio-oro rounded-full mx-6 shadow-lg shadow-baglio-oro/30"></div>
                <div className="w-24 h-0.5 bg-gradient-to-l from-transparent to-baglio-oro"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
              {packages.map((pkg, index) => (
                <div key={index} className="group relative">
                  {/* Recommended badge */}
                  {pkg.recommended && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="bg-baglio-oro text-baglio-ebano px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                        <Sparkles size={16} />
                        <span>PIÙ SCELTO</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Card */}
                  <div className={`relative bg-baglio-ebano rounded-3xl overflow-hidden shadow-2xl border-2 transition-all duration-500 group-hover:-translate-y-2 ${
                    pkg.recommended 
                      ? 'border-baglio-oro/60 shadow-baglio-oro/20 group-hover:shadow-baglio-oro/40 scale-105' 
                      : 'border-baglio-oro/30 shadow-baglio-oro/10 group-hover:shadow-baglio-oro/25 group-hover:border-baglio-oro/50'
                  }`}>
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${pkg.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    {/* Content */}
                    <div className="relative p-8">
                      {/* Header */}
                      <div className="text-center mb-8">
                        <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${pkg.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Heart size={32} className="text-white" />
                        </div>
                        <h3 className="text-3xl font-playfair font-bold text-baglio-oro mb-3 group-hover:text-baglio-oroImperiale transition-colors duration-300">
                          {pkg.name}
                        </h3>
                        <p className="text-baglio-oro/80 font-semibold text-xl bg-baglio-oro/10 rounded-full px-4 py-2 inline-block">
                          {pkg.price}
                        </p>
                      </div>
                      
                      {/* Benefits */}
                      <div className="space-y-4">
                        {pkg.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start text-baglio-crema group-hover:text-white transition-colors duration-300">
                            <div className="w-6 h-6 rounded-full bg-baglio-oro/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                              <Check size={14} className="text-baglio-oro" />
                            </div>
                            <span className="text-sm md:text-base leading-relaxed">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Hover effect border */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-baglio-oro/30 transition-colors duration-300 pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <DividerSottoEventi />

        {/* Modern Services Section */}
        <section className="py-20 bg-gradient-to-br from-baglio-ebano via-baglio-ebanoIntenso to-baglio-ebano relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-32 right-20 w-48 h-48 bg-baglio-oro rounded-full blur-3xl"></div>
            <div className="absolute bottom-32 left-20 w-64 h-64 bg-baglio-oroImperiale rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-baglio-crema rounded-full blur-2xl"></div>
          </div>
          
          <div className="baglio-container relative z-10">
            <div className="text-center mb-16">
              <SectionTitle 
                title="Servizi dedicati agli sposi" 
                subtitle="Ogni dettaglio pensato per il vostro giorno più bello a Balestrate"
                center
                light={true}
              />
              {/* Modern accent line */}
              <div className="flex items-center justify-center mt-8">
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent to-baglio-oro"></div>
                <div className="w-3 h-3 bg-baglio-oro rounded-full mx-6 shadow-lg shadow-baglio-oro/30"></div>
                <div className="w-24 h-0.5 bg-gradient-to-l from-transparent to-baglio-oro"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
              {services.map((service, index) => (
                <div key={index} className="group relative">
                  {/* Card */}
                  <div className="relative bg-baglio-ebano rounded-2xl overflow-hidden shadow-lg border border-baglio-oro/20 hover:border-baglio-oro/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-baglio-oro/25 backdrop-blur-sm p-6">
                    {/* Gradient background overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    {/* Content */}
                    <div className="relative flex items-center gap-4">
                      {/* Modern icon container */}
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        <div className="text-white">
                          {service.icon}
                        </div>
                      </div>
                      
                      {/* Text */}
                      <span className="text-baglio-crema group-hover:text-white font-medium text-sm leading-relaxed transition-colors duration-300">
                        {service.text}
                      </span>
                    </div>
                    
                    {/* Hover effect border */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-baglio-oro/20 transition-colors duration-300 pointer-events-none"></div>
                  </div>
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
