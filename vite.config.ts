import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/PortfolyoSitemiz/', // GitHub Pages için repository adınızı buraya yazın
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});