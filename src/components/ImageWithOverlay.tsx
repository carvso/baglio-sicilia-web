
import React from 'react';

type ImageWithOverlayProps = {
  src: string;
  alt: string;
  overlayOpacity?: number;
  children?: React.ReactNode;
  className?: string;
  imgClassName?: string;
  overlayClassName?: string;
};

const ImageWithOverlay = ({ 
  src, 
  alt, 
  overlayOpacity = 40,
  children, 
  className = '', 
  imgClassName = '', 
  overlayClassName = ''
}: ImageWithOverlayProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className={`w-full h-full object-cover ${imgClassName}`} 
      />
      <div 
        className={`absolute inset-0 bg-black ${overlayClassName}`} 
        style={{ opacity: overlayOpacity / 100 }}
      ></div>
      {children && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          {children}
        </div>
      )}
    </div>
  );
};

export default ImageWithOverlay;
