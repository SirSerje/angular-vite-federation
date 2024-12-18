import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from '@module-federation/vite';

export default defineConfig({
  plugins: [
    federation({
      name: 'pokemon_list',
      filename: 'remoteEntry.js',
      manifest: true,
      exposes: {
        './App': './src/main.tsx',
        './PokemonCard': './src/PokemonCard.tsx'
      },
      shared: ['react', 'react-dom']
    }),
    react(),
  ],
  optimizeDeps: {
    include: [], 

  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        format: 'esm',
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    }
  },
  server: {
    cors: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  }
});
