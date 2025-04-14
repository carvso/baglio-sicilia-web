
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/sections/HeroSection';
import IntroSection from '@/components/sections/IntroSection';
import TeaserSection from '@/components/sections/TeaserSection';
import ImageWithOverlay from '@/components/ImageWithOverlay';
import CTAButton from '@/components/CTAButton';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <Layout>
      <HeroSection 
        title="Dove la Sicilia si fa esperienza" 
        subtitle="Tradizione, sapori autentici e momenti indimenticabili nel cuore di Balestrate" 
        imageSrc="/lovable-uploads/dbe1c6fb-b0fd-4f46-b937-20e7e2e4c8cc.png"
      />
      
      <IntroSection />
      
      <TeaserSection />
      
      <section className="relative py-12 md:py-20">
        <ImageWithOverlay 
          src="/lovable-uploads/ac14664b-cf42-46ec-90e4-d0461e9f18a2.png" 
          alt="Eventi speciali al Baglio Abbate" 
          className="h-[400px] md:h-[500px]"
        >
          <div className="baglio-container text-center text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-semibold mb-3 md:mb-4">
              Rendi speciale il tuo evento
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
              Dalle cerimonie intime alle grandi celebrazioni, creiamo l'atmosfera perfetta per i tuoi momenti più importanti.
            </p>
            <CTAButton to="/contatti" fullWidth={isMobile}>Contattaci per un preventivo</CTAButton>
          </div>
        </ImageWithOverlay>
      </section>
    </Layout>
  );
};

export default Index;
