
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
        {/* Icona ufficiale WhatsApp */}
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm">
          <circle cx="16" cy="16" r="16" fill="#25D366"/>
          <path d="M23.472 19.339c-.355-.177-2.104-1.037-2.43-1.155-.326-.119-.563-.177-.8.177-.237.355-.914 1.155-1.122 1.392-.208.237-.415.266-.77.089-.355-.178-1.5-.553-2.86-1.763-1.057-.944-1.77-2.108-1.98-2.463-.208-.355-.022-.546.156-.723.16-.159.355-.414.533-.622.178-.208.237-.355.355-.592.119-.237.06-.444-.03-.622-.089-.178-.8-1.926-1.096-2.64-.289-.695-.583-.601-.8-.612-.208-.009-.444-.011-.68-.011-.237 0-.622.089-.948.444-.326.355-1.24 1.211-1.24 2.955 0 1.744 1.27 3.428 1.447 3.666.178.237 2.5 3.82 6.063 5.209.849.292 1.51.466 2.027.596.851.203 1.626.174 2.24.106.683-.076 2.104-.861 2.403-1.693.296-.832.296-1.545.207-1.693-.089-.148-.326-.237-.68-.414z" fill="#fff"/>
        </svg>
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
