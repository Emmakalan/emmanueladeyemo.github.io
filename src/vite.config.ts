import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Change this to '/repository-name/' if deploying to GitHub Pages under a repository
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
