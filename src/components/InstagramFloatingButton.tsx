import React from "react";
import { Instagram } from 'lucide-react';

const InstagramFloatingButton = () => (
  <a
    href="https://instagram.com/baglioabbateevents"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-baglio-oro to-baglio-oroImperiale text-baglio-ebanoIntenso hover:from-baglio-oroImperiale hover:to-baglio-oro p-4 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 group focus:ring-4 focus:ring-baglio-oro/40 focus:outline-none"
    aria-label="Seguici su Instagram"
    role="button"
    tabIndex={0}
    style={{ minHeight: 56, minWidth: 56 }}
  >
    <Instagram size={28} className="drop-shadow-sm" />
  </a>
);

export default InstagramFloatingButton; 