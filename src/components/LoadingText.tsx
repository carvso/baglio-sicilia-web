import React from "react";
import LoadingBar from "./LoadingBar";

const LoadingText = () => (
  <div className="flex flex-col justify-center items-center min-h-screen bg-baglio-ebano">
    <h1 className="text-4xl md:text-5xl font-playfair font-bold text-baglio-oro mb-8 animate-fade-in">Baglio Abbate</h1>
    <div className="w-64 mb-8">
      <LoadingBar />
    </div>
    <span className="text-2xl font-playfair text-baglio-oro animate-shimmer mt-2">Caricamento in corso...</span>
    <style>{`
      @keyframes shimmer {
        0% { opacity: 0.5; }
        50% { opacity: 1; }
        100% { opacity: 0.5; }
      }
      .animate-shimmer {
        animation: shimmer 1.5s infinite;
      }
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in {
        animation: fade-in 1s ease;
      }
    `}</style>
  </div>
);

export default LoadingText; 