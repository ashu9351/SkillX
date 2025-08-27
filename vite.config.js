import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Use relative paths for better compatibility
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined, // Disable code splitting for better SPA compatibility
      },
    },
  },
  server: {
    historyApiFallback: true, // Enable HTML5 History API fallback
  },
}) 