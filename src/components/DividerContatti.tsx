import React from "react";

const DividerContatti = () => (
  <div className="flex items-center justify-center my-12 select-none">
    <div className="flex-1 h-0.5 bg-baglio-oro/25 rounded-full" />
    <div className="flex items-center mx-4 gap-2">
      <span className="w-2 h-2 bg-baglio-oro/40 block" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
      <span className="w-5 h-5 bg-baglio-oro block" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }} />
      <span className="w-2 h-2 bg-baglio-oro/40 block" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
    </div>
    <div className="flex-1 h-0.5 bg-baglio-oro/25 rounded-full" />
  </div>
);

export default DividerContatti; 