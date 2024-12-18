import { defineConfig } from 'vite';
import { angular } from '@nitedani/vite-plugin-angular/plugin';
import { federation } from '@module-federation/vite';

const federationConfig = {
  name: 'host',
  remotes: {
    '@namespace/viteViteRemote': 'http://localhost:5173/mf-manifest.json',
  },
  manifest: true,
  filename: 'remoteEntry.js',
  shared: [
    '@angular/core',
    'react',
    'react-dom'
  ],
};

export default defineConfig({
  plugins: [angular(), federation(federationConfig)],
  optimizeDeps: {
    needsInterop: ['@module-federation/runtime']
  }
});
