
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
};

const ImageWithOverlay = ({ 
  src, 
  alt, 
  overlayOpacity = 40,
  children, 
  className = '', 
  imgClassName = '', 
  overlayClassName = '',
  lazyLoad = true
}: ImageWithOverlayProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className={`w-full h-full object-cover ${imgClassName}`} 
        loading={lazyLoad ? "lazy" : "eager"}
      />
      <div 
        className={`absolute inset-0 bg-black ${overlayClassName}`} 
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
