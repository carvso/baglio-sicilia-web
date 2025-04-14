
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/sections/HeroSection';
import IntroSection from '@/components/sections/IntroSection';
import TeaserSection from '@/components/sections/TeaserSection';
import ImageWithOverlay from '@/components/ImageWithOverlay';
import CTAButton from '@/components/CTAButton';

const Index = () => {
  return (
    <Layout>
      <HeroSection 
        title="Dove la Sicilia si fa esperienza" 
        subtitle="Tradizione, sapori autentici e momenti indimenticabili nel cuore di Balestrate" 
        imageSrc="https://images.unsplash.com/photo-1552242718-c5360894aecd?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
      />
      
      <IntroSection />
      
      <TeaserSection />
      
      <section className="relative py-20">
        <ImageWithOverlay 
          src="https://images.unsplash.com/photo-1596333396910-27982e917247?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
          alt="Eventi speciali al Baglio Abbate" 
          className="h-[500px]"
        >
          <div className="baglio-container text-center text-white">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
              Rendi speciale il tuo evento
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Dalle cerimonie intime alle grandi celebrazioni, creiamo l'atmosfera perfetta per i tuoi momenti più importanti.
            </p>
            <CTAButton to="/contatti">Contattaci per un preventivo</CTAButton>
          </div>
        </ImageWithOverlay>
      </section>
    </Layout>
  );
};

export default Index;
