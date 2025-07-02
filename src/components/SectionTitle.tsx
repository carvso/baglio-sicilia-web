
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
};

const SectionTitle = ({ title, subtitle, center = false, light = false, className = '' }: SectionTitleProps) => {
  const isMobile = useIsMobile();

  return (
    <div className={cn(
      'mb-8 md:mb-12', 
      center ? 'text-center' : '', 
      className
    )}>
      <h2 className={cn(
        'text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair leading-tight',
        light ? 'text-white' : 'text-baglio-ebanoIntenso'
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'text-lg md:text-xl leading-relaxed max-w-4xl font-crimson',
          center ? 'mx-auto' : '',
          light ? 'text-white/90' : 'text-baglio-ebanoIntenso/80'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
