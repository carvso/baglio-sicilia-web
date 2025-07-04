import React from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import ImageWithOverlay from '@/components/ImageWithOverlay';
import TacticalCTAGrid from '@/components/TacticalCTAGrid';
import SocialMediaBanners from '@/components/SocialMediaBanners';

const ChiSiamo = () => {
  return (
    <Layout>
      <ImageWithOverlay 
        src="/lovable-uploads/d7dc3f33-bd94-4e1b-b910-8a09026f94bf.png"
        alt="Interni eleganti del Baglio Abbate"
        className="h-[60vh]"
      >
        <div className="baglio-container text-center text-baglio-cremaIntonacata">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">
            La nostra storia
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Un viaggio attraverso il tempo, la tradizione e la bellezza siciliana
          </p>
        </div>
      </ImageWithOverlay>

      <section className="section-padding bg-baglio-ebano">
        <div className="baglio-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Le origini del Baglio Abbate" 
                subtitle="Dove tutto ha avuto inizio, nei primi anni dell'800"
                light
              />
              
              <div className="mb-8">
                <p className="text-baglio-cremaIntonacata text-lg mb-6 italic">
                  "Ogni pietra di questo baglio custodisce oltre 200 anni di storia siciliana, 
                  dove nobiltà e tradizione si fondono in un patrimonio senza tempo."
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-baglio-oro mb-3 font-playfair">
                    La Famiglia Abbate e il suo territorio
                  </h3>
                  <p className="text-baglio-cremaIntonacata/90 leading-relaxed">
                    Nel cuore di Balestrate, agli inizi del XIX secolo, la famiglia Abbate costruì 
                    questa magnifica residenza nobiliare. Proprietari terrieri di grande prestigio, 
                    gli Abbate erano custodi di una visione che univa **eleganza architettonica** 
                    e **produttività agricola**.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-baglio-oro mb-3 font-playfair">
                    Una masseria tra olio e vino
                  </h3>
                  <p className="text-baglio-cremaIntonacata/90 leading-relaxed mb-4">
                    La struttura, con la sua **caratteristica corte interna**, era il cuore pulsante 
                    di un'economia basata sui tesori della terra siciliana:
                  </p>
                  <ul className="text-baglio-cremaIntonacata/90 space-y-2 ml-6">
                    <li className="flex items-start">
                      <span className="text-baglio-oro mr-2">•</span>
                      Produzione di **olio d'oliva extravergine** dai secolari uliveti circostanti
                    </li>
                    <li className="flex items-start">
                      <span className="text-baglio-oro mr-2">•</span>
                      Vinificazione di **uve autoctone** nelle antiche cantine sotterranee
                    </li>
                    <li className="flex items-start">
                      <span className="text-baglio-oro mr-2">•</span>
                      **Mura in pietra viva** che definivano spazi funzionali e residenziali
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-baglio-oro mb-3 font-playfair">
                    Custodi di tradizioni secolari
                  </h3>
                  <p className="text-baglio-cremaIntonacata/90 leading-relaxed">
                    Per generazioni, il Baglio Abbate ha attraversato le trasformazioni della Sicilia, 
                    rimanendo sempre un **simbolo di cultura e tradizione**. Le sue possenti mura 
                    hanno resistito al tempo, custodendo storie, segreti e l'autenticità di un'epoca irripetibile.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg border border-baglio-oro/20">
              <img 
                src="/lovable-uploads/82698643-0369-4ee1-9b14-cf38c7d570df.png" 
                alt="Sala del Baglio allestita per eventi con tovaglie blu navy" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-baglio-cremaIntonacata">
        <div className="baglio-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg border border-baglio-oro/20">
              <img 
                src="/lovable-uploads/ac14664b-cf42-46ec-90e4-d0461e9f18a2.png" 
                alt="Terrazza vista mare del Baglio Abbate" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <SectionTitle 
                title="La rinascita del Baglio" 
                subtitle="Quando l'heritage incontra l'innovazione contemporanea"
              />
              
              <div className="mb-8">
                <p className="text-baglio-ebano/80 text-lg mb-6 italic border-l-4 border-baglio-oro pl-4">
                  "Abbiamo scelto di non restaurare semplicemente un edificio, ma di riportare 
                  in vita l'anima di un luogo che ha sempre celebrato l'ospitalità siciliana."
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-baglio-oro mb-3 font-playfair">
                    Il restauro conservativo del 2019
                  </h3>
                  <p className="text-baglio-ebano/80 leading-relaxed">
                    Dopo un **attento restauro durato oltre due anni**, il Baglio Abbate ha riaperto 
                    le sue porte nel 2019. Ogni intervento è stato guidato dal rispetto per 
                    l'**autenticità architettonica**, preservando elementi originali come le volte a botte, 
                    i pavimenti in cotto antico e i dettagli decorativi ottocenteschi.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-baglio-oro mb-3 font-playfair">
                    Filosofia: tra passato e presente
                  </h3>
                  <p className="text-baglio-ebano/80 leading-relaxed">
                    La nostra filosofia è quella di **creare un ponte tra epoche**, valorizzando 
                    l'heritage siciliano con un tocco contemporaneo. Ogni spazio racconta una storia, 
                    ogni dettaglio celebra la continuità tra tradizione e innovazione.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-baglio-oro mb-3 font-playfair">
                    Un'esperienza autentica oggi
                  </h3>
                  <p className="text-baglio-ebano/80 leading-relaxed">
                    Oggi, il Baglio Abbate è molto più di una location: è un **viaggio sensoriale** 
                    dove gli ospiti si immergono nella cultura siciliana attraverso sapori autentici, 
                    atmosfere suggestive e un servizio che incarna la **calda ospitalità dell'isola**. 
                    Ogni piatto celebra la ricchezza gastronomica della nostra terra.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-baglio-cremaIntonacata">
        <div className="baglio-container text-center">
          <SectionTitle 
            title="I nostri valori" 
            subtitle="Ciò che ci guida ogni giorno"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md border border-baglio-oro/20">
              <div className="text-baglio-oro mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 font-playfair text-baglio-ebano">Qualità e Autenticità</h3>
              <p className="text-baglio-ebano/70">
                Selezioniamo con cura ingredienti locali e di stagione, valorizzando i produttori del territorio 
                e le ricette della tradizione siciliana.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-baglio-oro/20">
              <div className="text-baglio-oro mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 font-playfair text-baglio-ebano">Ospitalità e Accoglienza</h3>
              <p className="text-baglio-ebano/70">
                Mettiamo il cuore in ogni dettaglio per garantire un'esperienza indimenticabile ai nostri ospiti, 
                nel rispetto della calorosa tradizione siciliana.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-baglio-oro/20">
              <div className="text-baglio-oro mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 font-playfair text-baglio-ebano">Innovazione e Rispetto</h3>
              <p className="text-baglio-ebano/70">
                Innoviamo nel rispetto della tradizione, con un approccio sostenibile che valorizza il patrimonio 
                culturale e naturale della Sicilia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Tactical CTA Section */}
      <TacticalCTAGrid />

      {/* New Social Media Banners Section */}
      <SocialMediaBanners />

      {/* Final CTA Section */}
      <section className="py-16 bg-baglio-oro">
        <div className="baglio-container text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-baglio-ebano">
            Pronto a vivere la tua esperienza al Baglio?
          </h2>
          <p className="text-lg text-baglio-ebano/80 mb-8 max-w-2xl mx-auto">
            Contattaci per organizzare il tuo evento speciale o per prenotare una cena indimenticabile
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contatti"
              className="inline-flex items-center justify-center font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 bg-baglio-ebano text-baglio-oro hover:bg-baglio-ebanoIntenso"
            >
              📞 Contattaci Subito
            </a>
            <a 
              href="/eventi"
              className="inline-flex items-center justify-center font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-2 border-baglio-ebano text-baglio-ebano hover:bg-baglio-ebano hover:text-baglio-oro"
            >
              🎉 Scopri gli Eventi
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ChiSiamo;
