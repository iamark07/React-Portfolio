import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/React-Portfolio/', // Add this line for GitHub Pages deployment
  server: {
    host: "0.0.0.0",
    fs: {
      strict: false,
    },
  },
  plugins: [react()],
});
