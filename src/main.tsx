
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log('🚀 Main.tsx loading...');
console.log('📍 Base URL:', import.meta.env.BASE_URL);
console.log('🌐 Location:', window.location.href);

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error('❌ Root element not found');
  throw new Error('Root element #root not found');
}

console.log('✅ Root element found, creating React app...');

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

console.log('✅ React app rendered successfully');
