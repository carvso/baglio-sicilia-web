
import React from 'react';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
};

const SectionTitle = ({ title, subtitle, center = false, light = false }: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <h2 className={`text-3xl md:text-4xl font-semibold mb-4 font-playfair ${light ? 'text-white' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${light ? 'text-gray-300' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
