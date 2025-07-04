
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { getLovableUploadPath } from '@/lib/paths';

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
  heroSection?: boolean;
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
  webpSrc,
  heroSection = false
}: ImageWithOverlayProps) => {
  const isMobile = useIsMobile();
  
  // Handle lovable-uploads paths for GitHub Pages
  const getImageSrc = (imageSrc: string) => {
    if (imageSrc.startsWith('/lovable-uploads/')) {
      const filename = imageSrc.replace('/lovable-uploads/', '');
      return getLovableUploadPath(filename);
    }
    return imageSrc;
  };

  const finalSrc = getImageSrc(src);
  const finalWebpSrc = webpSrc ? getImageSrc(webpSrc) : undefined;
  
  const heroClasses = heroSection ? 'min-h-screen' : '';
  
  return (
    <div className={`relative overflow-hidden ${heroClasses} ${className}`}>
      <picture>
        {finalWebpSrc && (
          <source srcSet={finalWebpSrc} type="image/webp" sizes={sizes} />
        )}
        <img 
          src={finalSrc} 
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
