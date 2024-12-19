import { defineConfig } from 'vite';
import { angular } from '@nitedani/vite-plugin-angular/plugin';
import { federation } from '@module-federation/vite';

export default defineConfig({
  plugins: [
    federation({
      name: 'host',
      remotes: {
        pokemon_list: {
          type: 'module',
          entry: 'http://localhost:5175/remoteEntry.js',
          name: 'pokemon_list'
        },
        single_spa_shell:{
          type: 'module',
          entry: 'http://127.0.0.1:3000/remoteEntry.js',
          name: 'single_spa_shell'
        }


      },
      shared: {
        'single-spa': {
          singleton: true,
          requiredVersion: '^6.0.3'
        },
        react: {
          singleton: true,
          requiredVersion: '^18.2.0'
        },
        
        'react-dom': {
          singleton: true,
          requiredVersion: '^18.2.0'
        }
      }
    }),
    angular(),

  ],
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
  resolve: {
  },
  optimizeDeps: {
    include: [], 
  }
});
