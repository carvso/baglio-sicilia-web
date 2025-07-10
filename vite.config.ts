
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig({
  base: '/',
  server: {
    host: "::",
    port: 8080,
    cors: true,
    // Configurazione per gestire il routing SPA
    historyApiFallback: {
      index: '/index.html',
      // Pulisci URL problematici
      rewrites: [
        {
          from: /\/\?p=.*/,
          to: '/'
        },
        {
          from: /.*\?p=.*/,
          to: (context) => {
            const pathname = context.parsedUrl.pathname;
            return pathname || '/';
          }
        }
      ]
    }
  },
  plugins: [
    react(),
    componentTagger(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});
