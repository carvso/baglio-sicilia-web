
import React from 'react';
import { MessageCircle } from 'lucide-react';

type WhatsAppButtonProps = {
  message?: string;
  phone?: string;
};

const WhatsAppButton = ({ 
  message = "Ciao! Sono interessato a maggiori informazioni su Baglio Abbate.", 
  phone = "+393399876543" 
}: WhatsAppButtonProps) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
  
  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-500 text-white rounded-full p-4 shadow-xl z-50 transition-all duration-300 hover:scale-110 group focus:ring-4 focus:ring-green-500/50 focus:outline-none"
      aria-label="Contattaci su WhatsApp"
      role="button"
      tabIndex={0}
    >
      <div className="relative">
        <MessageCircle size={28} className="drop-shadow-sm" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
      </div>
      
      {/* Tooltip hover */}
      <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
          Chatta con noi su WhatsApp
          <div className="absolute top-full right-4 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
