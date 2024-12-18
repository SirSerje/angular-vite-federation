import { defineConfig } from 'vite';
import { angular } from '@nitedani/vite-plugin-angular/plugin';
import { federation } from '@module-federation/vite';

export default defineConfig({
  plugins: [
    federation({
      name: 'host',
      // manifest: true,
      remotes: {
        pokemon_list: {
          type: 'module',
          entry: 'http://localhost:5175/remoteEntry.js',
          entryGlobalName: './App',
          // shareScope: 'default',
          name: 'pokemon_list'
        }
      },
      shared: {
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
    needsInterop: [
      '@module-federation/runtime',
      'react',
      'react-dom',
      'react/jsx-runtime',
      'remoteEntry.js',
    ]
  }
});
