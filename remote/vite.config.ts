import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from '@module-federation/vite';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: '@namespace/viteViteRemote',
      filename: 'remoteEntry.js',
      manifest: true,
      exposes: {
        './temp2': './src/App.tsx'
      },
      /* shared: {
        'react/': {},
        react: {
          requiredVersion: '18',
        },
        'react-dom/': {},
        'react-dom': {},

        '@module-federation/runtime': {}
      } */
    })
  ],
  build: {
    target: 'chrome89',
    //target: 'esnext',
    minify: false
  },

  optimizeDeps: {
    include: ['react', 'react-dom'],
    needsInterop: [
      '@module-federation/runtime',
      'react',
      'react-dom'
    ],
  }
})
