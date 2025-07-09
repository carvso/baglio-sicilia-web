import React from "react";

const DividerEventi = () => (
  <div className="flex items-center justify-center my-12 select-none">
    <div className="flex-1 border-t-2 border-dashed border-baglio-oro/40" />
    <div className="flex items-center mx-4 gap-2">
      <span className="w-2 h-2 rounded-full bg-baglio-oro/50 block" />
      <span className="w-4 h-4 bg-baglio-oro rotate-45 block shadow-md shadow-baglio-oro/30" style={{ borderRadius: '4px' }} />
      <span className="w-2 h-2 rounded-full bg-baglio-oro/50 block" />
    </div>
    <div className="flex-1 border-t-2 border-dashed border-baglio-oro/40" />
  </div>
);

export default DividerEventi; 