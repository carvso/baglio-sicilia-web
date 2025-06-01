
import React from 'react';
import { MessageCircle } from 'lucide-react';

type WhatsAppButtonProps = {
  message?: string;
  phone?: string;
};

const WhatsAppButton = ({ 
  message = "Ciao! Sono interessato a maggiori informazioni.", 
  phone = "+393399876543" 
}: WhatsAppButtonProps) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
  
  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-4 shadow-lg z-50 transition-all duration-300 hover:scale-110 group"
      aria-label="Contattaci su WhatsApp"
    >
      <div className="relative">
        <MessageCircle size={28} className="drop-shadow-sm" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#DCF8C6] rounded-full animate-pulse"></div>
      </div>
      
      {/* Tooltip hover */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
          Chatta con noi su WhatsApp
          <div className="absolute top-full right-4 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
