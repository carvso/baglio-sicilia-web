
import React from 'react';

type OpenTableReservationProps = {
  restaurantId?: string;
  className?: string;
  theme?: 'light' | 'dark';
};

const OpenTableReservation = ({ 
  restaurantId = "1234", // Replace with actual OpenTable restaurant ID
  className = "",
  theme = "light"
}: OpenTableReservationProps) => {
  return (
    <div className={`open-table-container ${className}`}>
      <script 
        type="text/javascript" 
        src="//www.opentable.it/widget/reservation/loader?rid=${restaurantId}&type=standard&theme=${theme}&iframe=true&domain=it&lang=it-IT" 
        dangerouslySetInnerHTML={{__html: ``}}
      ></script>
      <div className="py-4 bg-baglio-cream bg-opacity-20 rounded-sm p-4 text-center">
        <h3 className="text-lg font-semibold mb-2">Prenota il tuo tavolo</h3>
        <p className="text-gray-600 mb-4">Utilizza il widget di OpenTable per prenotare facilmente il tuo tavolo.</p>
        <a 
          href={`https://www.opentable.it/restref/client/?rid=${restaurantId}`}
          target="_blank"
          rel="noopener noreferrer" 
          className="inline-flex items-center justify-center font-semibold py-3 px-6 rounded-sm transition-all duration-300 bg-baglio-terracotta text-white hover:bg-baglio-terracotta/90"
        >
          Prenota ora su OpenTable
        </a>
      </div>
    </div>
  );
};

export default OpenTableReservation;
