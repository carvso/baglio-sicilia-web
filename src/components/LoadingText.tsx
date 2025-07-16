import React from "react";
import LoadingBar from "./LoadingBar";

const LoadingText = () => (
  <div className="flex flex-col justify-center items-center min-h-screen bg-baglio-ebano py-12">
    {/* Logo molto grande e centrato */}
    <img
      src="/logo_baglio_black.svg"
      alt="Logo Baglio Abbate Events"
      style={{ height: "240px", width: "auto", maxWidth: "98vw", marginBottom: "1.2rem", marginTop: "2rem", display: "block", marginLeft: "auto", marginRight: "auto" }}
      className="animate-fade-in drop-shadow-2xl"
    />
    <div className="w-72 mb-6 mx-auto">
      <LoadingBar />
    </div>
    <span
      className="text-3xl md:text-4xl font-greatvibes font-semibold text-baglio-oro animate-shimmer mt-2 drop-shadow-lg text-center"
      style={{ letterSpacing: "0.04em", textShadow: "0 2px 16px #c09c46cc", display: "block" }}
    >
      Caricamento in corso...
    </span>
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