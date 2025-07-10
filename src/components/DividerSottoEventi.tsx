import React from "react";

const DividerSottoEventi = () => (
  <div className="flex items-center justify-center my-12 select-none">
    <div className="flex-1 h-0.5 bg-baglio-oro/25 rounded-full" />
    <div className="flex items-center mx-4 gap-2">
      <span className="w-3 h-2 bg-baglio-oro/40 block rounded-full" />
      <span className="w-5 h-5 bg-baglio-oro block" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }} />
      <span className="w-3 h-2 bg-baglio-oro/40 block rounded-full" />
    </div>
    <div className="flex-1 h-0.5 bg-baglio-oro/25 rounded-full" />
  </div>
);

export default DividerSottoEventi; 