
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
};

const SectionTitle = ({ title, subtitle, center = false, light = false }: SectionTitleProps) => {
  const isMobile = useIsMobile();

  return (
    <div className={`mb-8 md:mb-12 ${center ? 'text-center' : ''}`}>
      <h2 className={`text-2xl ${isMobile ? '' : 'text-3xl md:text-4xl'} font-semibold mb-3 md:mb-4 font-playfair ${light ? 'text-white' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg ${light ? 'text-gray-300' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
