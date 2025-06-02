
import React from 'react';

type OptimizedImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  webpSrc?: string;
  aspectRatio?: string;
  onClick?: () => void;
};

const OptimizedImage = ({
  src,
  alt,
  className = '',
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  webpSrc,
  aspectRatio = 'aspect-[4/3]',
  onClick
}: OptimizedImageProps) => {
  return (
    <div className={`${aspectRatio} overflow-hidden ${onClick ? 'cursor-pointer' : ''} ${className}`} onClick={onClick}>
      <picture>
        {webpSrc && (
          <source srcSet={webpSrc} type="image/webp" sizes={sizes} />
        )}
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading={priority ? "eager" : "lazy"}
          sizes={sizes}
          decoding={priority ? "sync" : "async"}
        />
      </picture>
    </div>
  );
};

export default OptimizedImage;
