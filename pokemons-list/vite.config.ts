import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from '@module-federation/vite';

export default defineConfig({
  plugins: [
    federation({
      name: 'pokemon_list',
      // type: 'module',
      filename: 'remoteEntry.js',
      manifest: true,
      exposes: {
        './App': './src/main.tsx',
        './ListComponent': './src/ListComponent.tsx'
      },
      shared: ['react', 'react-dom']
    }),
    react(),
  ],
  optimizeDeps: {
    include: [], 
    needsInterop: [
      '@module-federation/runtime',
      'react',
      'react-dom',
      'react/jsx-runtime',
      'remoteEntry.js',
      '__mf__virtual/pokemon_list__prebuild__react_mf_2_dom__prebuild__.js', 
      '__mf__virtual/pokemon_list__prebuild__react__prebuild__.js'
    ]
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
