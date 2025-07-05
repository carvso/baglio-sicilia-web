
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log('main.tsx - Starting application initialization');
console.log('Environment:', {
  mode: import.meta.env.MODE,
  baseUrl: import.meta.env.BASE_URL,
  dev: import.meta.env.DEV,
  prod: import.meta.env.PROD
});

const rootElement = document.getElementById("root");
console.log('Root element found:', !!rootElement);

if (!rootElement) {
  console.error('Root element not found!');
} else {
  console.log('Creating React root...');
  const root = createRoot(rootElement);
  
  console.log('Rendering App component...');
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log('App component rendered successfully');
}
