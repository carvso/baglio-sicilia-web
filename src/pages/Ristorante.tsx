
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from '@/components/Layout';
import ImageWithOverlay from '@/components/ImageWithOverlay';
import SectionTitle from '@/components/SectionTitle';
import CTAButton from '@/components/CTAButton';

const menuCategories = [
  { id: 'antipasti', label: 'Antipasti' },
  { id: 'primi', label: 'Primi Piatti' },
  { id: 'secondi', label: 'Secondi Piatti' },
  { id: 'dessert', label: 'Dessert' },
  { id: 'drinks', label: 'Cocktail' }
];

const menuItems = {
  antipasti: [
    { name: 'Caponata Siciliana', description: 'Melanzane, pomodori, olive, sedano e capperi in agrodolce', price: '10' },
    { name: 'Arancini Misti', description: 'Selezione di arancini con ragù, burro e pistacchio', price: '12' },
    { name: 'Parmigiana di Melanzane', description: 'Melanzane fritte, pomodoro, basilico e caciocavallo', price: '11' },
    { name: 'Tagliere di Salumi e Formaggi', description: 'Selezione di salumi e formaggi siciliani con confetture', price: '16' }
  ],
  primi: [
    { name: 'Pasta alla Norma', description: 'Pasta con melanzane fritte, pomodoro, ricotta salata e basilico', price: '14' },
    { name: 'Spaghetti ai Ricci di Mare', description: 'Spaghetti con crema di ricci di mare freschi', price: '18' },
    { name: 'Risotto al Nero di Seppia', description: 'Risotto mantecato con nero di seppia e frutti di mare', price: '16' },
    { name: 'Casarecce al Pesto di Pistacchio', description: 'Pasta con pesto di pistacchio di Bronte e gamberi', price: '17' }
  ],
  secondi: [
    { name: 'Involtini di Pesce Spada', description: 'Involtini ripieni di pane aromatizzato, pinoli e uvetta', price: '22' },
    { name: 'Tagliata di Tonno', description: 'Tonno scottato con crosta di sesamo e riduzione di Marsala', price: '24' },
    { name: 'Agnello al Finocchietto', description: 'Costolette di agnello marinate e cotte con finocchietto selvatico', price: '26' },
    { name: 'Pescato del Giorno', description: 'Pescato locale servito secondo la tradizione del giorno', price: '28' }
  ],
  dessert: [
    { name: 'Cannolo Siciliano', description: 'Cialda croccante ripiena di ricotta di pecora e scaglie di cioccolato', price: '8' },
    { name: 'Cassata Siciliana', description: 'Dolce tradizionale con ricotta, pan di Spagna, frutta candita e glassa', price: '9' },
    { name: 'Gelo di Melone', description: 'Budino di anguria profumato ai gelsomini', price: '7' },
    { name: 'Semifreddo al Pistacchio', description: 'Semifreddo con pistacchio di Bronte e salsa al cioccolato', price: '10' }
  ],
  drinks: [
    { name: 'Spritz Siciliano', description: 'Amaro agli agrumi, Prosecco, acqua tonica e arancia', price: '10' },
    { name: 'Etna Negroni', description: 'Gin, Bitter siciliano, Vermouth rosso locale e scorza d\'arancia', price: '12' },
    { name: 'Mojito al Basilico', description: 'Rum, lime, zucchero di canna, basilico fresco e soda', price: '11' },
    { name: 'Marsala Sour', description: 'Marsala, succo di limone, zucchero, albume e bitter aromatico', price: '11' }
  ]
};

const Ristorante = () => {
  const [activeTab, setActiveTab] = useState<string>('ristorante');

  return (
    <Layout>
      <ImageWithOverlay 
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
        alt="Ristorante e Lounge Bar del Baglio Abbate"
        className="h-[60vh]"
      >
        <div className="baglio-container text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">
            Ristorante & Lounge Bar
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Un viaggio nei sapori autentici della Sicilia in un'atmosfera unica
          </p>
        </div>
      </ImageWithOverlay>

      <section className="section-padding bg-white">
        <div className="baglio-container">
          <Tabs defaultValue="ristorante" value={activeTab} onValueChange={setActiveTab}>
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="ristorante">Ristorante</TabsTrigger>
                <TabsTrigger value="lounge">Lounge Bar</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="ristorante">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <SectionTitle 
                    title="La nostra cucina" 
                    subtitle="Tradizione e innovazione in ogni piatto"
                  />
                  <p className="text-gray-700 mb-6">
                    Nel nostro ristorante, celebriamo l'eredità culinaria siciliana con un tocco contemporaneo. 
                    I nostri chef, appassionati custodi della tradizione, selezionano con cura ingredienti locali e 
                    di stagione, trasformandoli in piatti che raccontano storie di terra e mare.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Dalla pasta fresca fatta in casa ai frutti di mare appena pescati, ogni piatto è un omaggio 
                    alla ricchezza gastronomica dell'isola. La nostra cantina offre una selezione dei migliori vini 
                    siciliani, perfetti accompagnamenti per un'esperienza culinaria indimenticabile.
                  </p>
                  <CTAButton to="/contatti">Prenota un tavolo</CTAButton>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
                    alt="Piatto tipico siciliano" 
                    className="rounded-lg shadow-md h-full object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1551218372-a8789b81b253?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
                    alt="Sala ristorante" 
                    className="rounded-lg shadow-md h-full object-cover mt-6 md:mt-12"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
                    alt="Ingredienti freschi" 
                    className="rounded-lg shadow-md h-full object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
                    alt="Chef al lavoro" 
                    className="rounded-lg shadow-md h-full object-cover mt-6 md:mt-12"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="lounge">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
                    alt="Cocktail speciale" 
                    className="rounded-lg shadow-md h-full object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1518449645486-2701b0abff7d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
                    alt="Lounge bar area" 
                    className="rounded-lg shadow-md h-full object-cover mt-6 md:mt-12"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1600456899121-68eda5705257?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
                    alt="Terrazza al tramonto" 
                    className="rounded-lg shadow-md h-full object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
                    alt="Barman al lavoro" 
                    className="rounded-lg shadow-md h-full object-cover mt-6 md:mt-12"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <SectionTitle 
                    title="Il nostro lounge bar" 
                    subtitle="Arte e creatività in ogni drink"
                  />
                  <p className="text-gray-700 mb-6">
                    Il nostro lounge bar è il luogo ideale per rilassarsi e socializzare in un'atmosfera elegante 
                    e accogliente. Con la sua vista mozzafiato sulle colline circostanti e sul mare, offre lo 
                    scenario perfetto per aperitivi al tramonto e serate in compagnia.
                  </p>
                  <p className="text-gray-700 mb-6">
                    I nostri talentuosi bartender creano cocktail artigianali che celebrano i sapori e i profumi 
                    siciliani, dall'agrumato al floreale, dal dolce all'aromatico. La nostra carta dei vini 
                    include eccellenze locali e prestigiose etichette internazionali, per soddisfare anche i 
                    palati più esigenti.
                  </p>
                  <CTAButton to="/contatti">Scopri di più</CTAButton>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="section-padding bg-baglio-cream bg-opacity-20">
        <div className="baglio-container">
          <SectionTitle 
            title="Il nostro menù" 
            subtitle="Un viaggio nei sapori della Sicilia"
            center
          />
          
          <Tabs defaultValue="antipasti" className="mt-12">
            <TabsList className="flex justify-center flex-wrap mb-8">
              {menuCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="mx-1 my-1">
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(menuItems).map(([category, items]) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {items.map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-playfair font-semibold mb-2">{item.name}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                        <div className="text-baglio-terracotta font-semibold text-lg ml-4">
                          €{item.price}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 italic mb-8">
              Il nostro menù varia stagionalmente per garantire la freschezza e la qualità degli ingredienti.
              <br />Per informazioni su allergeni o intolleranze, vi preghiamo di contattare il nostro staff.
            </p>
            <CTAButton to="/contatti">Prenota un tavolo</CTAButton>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Ristorante;
