import Vue from '@vitejs/plugin-vue'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import ViteFonts from 'unplugin-fonts/vite'
import Components from 'unplugin-vue-components/vite'

import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'


const APP_VERSION = require('./package.json').version


// https://vitejs.dev/config/
export default defineConfig({
  appType: 'spa',
  plugins: [
    Vue({
      template: { transformAssetUrls }
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    Vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/settings.scss',
      },
    }),
    Components(),
    ViteFonts({
      google: {
        families: [{
          name: 'Roboto',
          styles: 'wght@100;300;400;500;700;900',
        }],
      },
    }),
  ],
  base: '/',
  define: {
    'process.env': {
      APP_VERSION: APP_VERSION
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  optimizeDeps: {
    exclude: ['vuetify']
  },
  server: {
    host: true,
    port: 8888,
    watch: {
      usePolling: true
    },
    proxy: {
      '/api': {
        target: 'http://api:8000',
        changeOrigin: true
      }
    },
  },
  // css: {
  //   devSourcemap: true
  // },
  // build: {
  //   sourcemap: true
  // }
})
