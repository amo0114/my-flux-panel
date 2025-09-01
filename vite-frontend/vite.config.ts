import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['chrome 80', 'firefox 78', 'edge 80', 'safari 13'] 
    })
  ],
  base: './',    
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: false,  
    rollupOptions: {
      treeshake: false,
    }
  }
});
