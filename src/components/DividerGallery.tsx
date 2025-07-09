import React from "react";

const DividerGallery = () => (
  <div className="flex items-center justify-center my-12 select-none">
    <div className="flex-1 h-0.5 bg-baglio-oro/20 rounded-full" />
    <div className="flex items-center mx-4 gap-2">
      <span className="w-2 h-2 bg-baglio-oro/40 block" style={{ borderRadius: '2px' }} />
      <span className="w-4 h-4 bg-baglio-oro rotate-45 block" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
      <span className="w-2 h-2 bg-baglio-oro/40 block" style={{ borderRadius: '2px' }} />
    </div>
    <div className="flex-1 h-0.5 bg-baglio-oro/20 rounded-full" />
  </div>
);

export default DividerGallery; 