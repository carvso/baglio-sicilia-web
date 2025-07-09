import React from "react";

const LoadingBar = () => (
  <div className="fixed top-0 left-0 w-full h-1.5 z-50">
    <div className="h-full bg-gradient-to-r from-baglio-oro via-baglio-oroImperiale to-baglio-oro animate-loading-bar rounded-full shadow-lg" style={{width: '100%'}} />
    <style>{`
      @keyframes loadingBar {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      .animate-loading-bar {
        animation: loadingBar 1.5s cubic-bezier(0.4,0,0.2,1) infinite;
      }
    `}</style>
  </div>
);

export default LoadingBar; 