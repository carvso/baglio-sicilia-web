
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log('🚀 main.tsx - Application starting...');
console.log('📊 Environment details:', {
  mode: import.meta.env.MODE,
  baseUrl: import.meta.env.BASE_URL,
  dev: import.meta.env.DEV,
  prod: import.meta.env.PROD,
  location: window.location.href,
  pathname: window.location.pathname
});

// Check if we're running in GitHub Pages
const isGitHubPages = window.location.hostname.includes('github.io');
console.log('🌐 Is GitHub Pages:', isGitHubPages);

const rootElement = document.getElementById("root");
console.log('🎯 Root element:', rootElement ? 'FOUND' : 'NOT FOUND');

if (!rootElement) {
  console.error('❌ CRITICAL: Root element #root not found in DOM!');
  document.body.innerHTML = '<div style="color: red; padding: 20px;">Error: Root element not found</div>';
} else {
  try {
    console.log('⚛️ Creating React root...');
    const root = createRoot(rootElement);
    
    console.log('🎨 Rendering App component...');
    root.render(<App />);
    console.log('✅ App component rendered successfully!');
  } catch (error) {
    console.error('❌ Error during React initialization:', error);
    rootElement.innerHTML = `<div style="color: red; padding: 20px;">
      <h2>Initialization Error</h2>
      <p>${error.message}</p>
    </div>`;
  }
}

// Add error boundary for uncaught errors
window.addEventListener('error', (event) => {
  console.error('🚨 Uncaught error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('🚨 Unhandled promise rejection:', event.reason);
});
