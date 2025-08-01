
import React from 'react';
import { Users, Music, Camera, Gift, MapPin, Clock, Instagram, PartyPopper, Wine, Utensils, Sparkles, Check, Crown, Flower, Car, Bus, User, Home, ShoppingBag, Smile, Music2, Heart, Cake } from 'lucide-react';
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
      ],
      gradient: "from-blue-500 to-indigo-600",
      recommended: false
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
      ],
      gradient: "from-purple-500 to-pink-600",
      recommended: true
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
      ],
      gradient: "from-amber-500 to-orange-600",
      recommended: false
    }
  ];

  const services = [
    { icon: <Users size={20} />, text: "Fino a 150 ospiti", gradient: "from-blue-500 to-cyan-600" },
    { icon: <MapPin size={20} />, text: "Parcheggio riservato", gradient: "from-green-500 to-emerald-600" },
    { icon: <Music size={20} />, text: "Impianto audio professionale", gradient: "from-purple-500 to-violet-600" },
    { icon: <Camera size={20} />, text: "Servizi fotografici", gradient: "from-blue-500 to-cyan-600" },
    { icon: <Gift size={20} />, text: "Allestimenti personalizzati", gradient: "from-pink-500 to-rose-600" },
    { icon: <Clock size={20} />, text: "Flessibilità oraria", gradient: "from-orange-500 to-red-600" },
    { icon: <PartyPopper size={20} />, text: "Animazione e intrattenimento", gradient: "from-yellow-500 to-amber-600" },
    { icon: <Wine size={20} />, text: "Bar e cocktail personalizzati", gradient: "from-purple-500 to-pink-600" },
    { icon: <Utensils size={20} />, text: "Catering e menu su misura", gradient: "from-green-500 to-lime-600" },
    { icon: <Flower size={20} />, text: "Decorazioni floreali", gradient: "from-emerald-500 to-teal-600" },
    { icon: <Crown size={20} />, text: "Servizio maggiordomo", gradient: "from-yellow-500 to-amber-600" },
    { icon: <Car size={20} />, text: "Servizio trasporto VIP", gradient: "from-gray-500 to-slate-600" },
    { icon: <Music2 size={20} />, text: "Musica dal vivo (DJ, band, folk siciliano)", gradient: "from-blue-500 to-indigo-600" },
    { icon: <User size={20} />, text: "Hostess e staff dedicato", gradient: "from-pink-500 to-rose-600" },
    { icon: <Home size={20} />, text: "Area preparazione privata", gradient: "from-indigo-500 to-purple-600" },
    { icon: <Cake size={20} />, text: "Torte e dolci personalizzati", gradient: "from-red-500 to-pink-600" },
    { icon: <Heart size={20} />, text: "Coordinamento evento completo", gradient: "from-red-500 to-pink-600" },
    { icon: <Sparkles size={20} />, text: "Effetti speciali e spettacoli", gradient: "from-purple-500 to-pink-600" }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Eventi Privati a Balestrate | Baglio Abbate - Celebrazioni Private Palermo</title>
        <meta name="description" content="Organizza il tuo evento privato a Balestrate: compleanni, anniversari, lauree. Location esclusiva per celebrazioni private vicino Palermo. Pacchetti personalizzati." />
        <meta name="keywords" content="eventi privati balestrate, compleanni palermo, anniversari sicilia, celebrazioni private, baglio abbate eventi privati" />
        <link rel="canonical" href="https://baglioabbate.it/eventi-privati" />
        <meta property="og:title" content="Eventi Privati a Balestrate | Baglio Abbate - Celebrazioni Private Palermo" />
        <meta property="og:description" content="Organizza il tuo evento privato a Balestrate: compleanni, anniversari, lauree. Location esclusiva per celebrazioni private vicino Palermo." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://baglioabbate.it/eventi-privati" />
        <meta property="og:image" content={getLovableUploadPath("abd0f4fc-88b2-4370-b75c-a060e0f81d76.png")} />
        
        {/* Dati Strutturati Schema.org per Eventi Privati */}
        <script type="application/ld+json">
          {JSON.stringify(getStructuredData('eventi-privati'))}
        </script>
      </Helmet>
      
      <BreadcrumbNavigation />
      <div className="bg-baglio-ebano min-h-screen">
        {/* Hero Section */}
        <ImageWithOverlay 
          src="/lovable-uploads/abd0f4fc-88b2-4370-b75c-a060e0f81d76.png"
          alt="Eventi privati al Baglio Abbate Balestrate - Location per celebrazioni private in Sicilia"
          className="h-[70vh]"
          overlayOpacity={60}
          priority={true}
          sizes="100vw"
        >
          <div className="baglio-container text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair text-baglio-oro drop-shadow-2xl">
              Eventi Privati
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-lg text-baglio-crema">
              Ogni ricorrenza ha la sua cornice perfetta a Balestrate
            </p>
          </div>
        </ImageWithOverlay>

        {/* Introduction */}
        <section className="section-padding bg-gradient-to-br from-baglio-ebano via-baglio-ebanoIntenso to-baglio-ebano shadow-2xl shadow-baglio-oro/10">
          <div className="baglio-container">
            <div className="max-w-4xl mx-auto text-center backdrop-blur-sm bg-baglio-ebano/30 rounded-2xl p-8 border border-baglio-oro/20 shadow-xl shadow-baglio-oro/15">
              <p className="text-lg md:text-xl text-baglio-crema leading-relaxed">
                Dal compleanno importante all'anniversario speciale, ogni momento della vita merita di essere celebrato 
                in grande stile. Il Baglio Abbate a Balestrate trasforma i vostri eventi privati in esperienze indimenticabili, 
                dove l'eleganza della location si fonde con la calorosa ospitalità siciliana occidentale per creare ricordi che 
                dureranno per sempre.
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
                title="I nostri pacchetti eventi privati" 
                subtitle="Soluzioni pensate per ogni esigenza e budget a Balestrate"
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
                          <PartyPopper size={32} className="text-white" />
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
                title="Servizi per eventi privati" 
                subtitle="Tutto quello di cui avete bisogno per un evento perfetto a Balestrate"
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
                  Scopri le foto più belle dei nostri eventi privati a Balestrate e lasciati ispirare per il tuo prossimo evento speciale
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
        <section className="section-padding bg-baglio-crema relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-baglio-oro/5 to-transparent"></div>
          <div className="baglio-container text-center relative z-10">
            <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-baglio-oro/10 border border-baglio-oro/20">
              <SectionTitle 
                title="Pronto a celebrare?" 
                subtitle="Contattaci per un preventivo personalizzato del tuo evento privato"
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

export default EventiPrivati;
