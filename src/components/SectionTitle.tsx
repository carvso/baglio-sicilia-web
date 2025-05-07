
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
        'text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-4 font-playfair',
        light ? 'text-baglio-crema' : 'text-baglio-oro'
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'text-base md:text-lg',
          light ? 'text-baglio-grigio' : 'text-baglio-grigio dark:text-baglio-grigio'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
