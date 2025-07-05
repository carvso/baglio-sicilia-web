
import React from 'react';
import { MessageCircle } from 'lucide-react';

type WhatsAppButtonProps = {
  message?: string;
  phone?: string;
};

const WhatsAppButton = ({ 
  message = "Ciao! Sono interessato a maggiori informazioni su Baglio Abbate.", 
  phone = "+393318286888" 
}: WhatsAppButtonProps) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
  
  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-500 active:bg-green-700 text-white rounded-full shadow-xl z-50 transition-all duration-200 group focus:ring-4 focus:ring-green-500/50 focus:outline-none touch-none"
      aria-label="Contattaci su WhatsApp"
      role="button"
      tabIndex={0}
      style={{
        minHeight: '56px',
        minWidth: '56px',
        padding: '14px',
        touchAction: 'manipulation',
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      <div className="relative flex items-center justify-center">
        <MessageCircle size={28} className="drop-shadow-sm" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
      </div>
      
      {/* Tooltip hover - hidden on mobile, shown on desktop */}
      <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block">
        <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
          Chatta con noi su WhatsApp
          <div className="absolute top-full right-4 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
