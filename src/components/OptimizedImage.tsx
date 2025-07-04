
import React from 'react';
import { getLovableUploadPath } from '@/lib/paths';

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

  return (
    <div className={`${aspectRatio} overflow-hidden ${onClick ? 'cursor-pointer' : ''} ${className}`} onClick={onClick}>
      <picture>
        {finalWebpSrc && (
          <source srcSet={finalWebpSrc} type="image/webp" sizes={sizes} />
        )}
        <img 
          src={finalSrc} 
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
