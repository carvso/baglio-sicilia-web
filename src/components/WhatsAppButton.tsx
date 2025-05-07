
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
      className="fixed bottom-6 right-6 bg-baglio-salvia hover:bg-baglio-salvia/90 text-white rounded-full p-4 shadow-lg z-50 transition-transform duration-300 hover:scale-110"
      aria-label="Contattaci su WhatsApp"
    >
      <MessageCircle size={38} />
    </a>
  );
};

export default WhatsAppButton;
