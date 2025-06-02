
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

type ImageWithOverlayProps = {
  src: string;
  alt: string;
  overlayOpacity?: number;
  children?: React.ReactNode;
  className?: string;
  imgClassName?: string;
  overlayClassName?: string;
  lazyLoad?: boolean;
  priority?: boolean;
  sizes?: string;
  webpSrc?: string;
};

const ImageWithOverlay = ({ 
  src, 
  alt, 
  overlayOpacity = 40,
  children, 
  className = '', 
  imgClassName = '', 
  overlayClassName = '',
  lazyLoad = true,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  webpSrc
}: ImageWithOverlayProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <picture>
        {webpSrc && (
          <source srcSet={webpSrc} type="image/webp" sizes={sizes} />
        )}
        <img 
          src={src} 
          alt={alt} 
          className={`w-full h-full object-cover transition-transform duration-300 hover:scale-105 ${imgClassName}`} 
          loading={priority ? "eager" : (lazyLoad ? "lazy" : "eager")}
          sizes={sizes}
          decoding={priority ? "sync" : "async"}
        />
      </picture>
      <div 
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${overlayClassName}`} 
        style={{ opacity: overlayOpacity / 100 }}
      ></div>
      {children && (
        <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default ImageWithOverlay;
