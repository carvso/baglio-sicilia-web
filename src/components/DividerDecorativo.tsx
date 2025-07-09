import React from "react";

const DividerDecorativo = () => (
  <div className="flex items-center justify-center my-12 select-none">
    <div className="flex-1 h-0.5 bg-baglio-oro/30 rounded-full" />
    <div className="flex items-center mx-4 gap-2">
      <span className="w-2 h-2 rounded-full bg-baglio-oro/60 block" />
      <span className="w-3 h-3 rounded-full bg-baglio-oro block shadow-md shadow-baglio-oro/30" />
      <span className="w-2 h-2 rounded-full bg-baglio-oro/60 block" />
    </div>
    <div className="flex-1 h-0.5 bg-baglio-oro/30 rounded-full" />
  </div>
);

export default DividerDecorativo; 