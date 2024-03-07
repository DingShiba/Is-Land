import { fileURLToPath, URL } from 'node:url'

import  { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    hmr:{
      overlay:true
    },
    proxy:{
      '/zuul/':{
        target:"http://island.cel24.art:3000",
        ws:true,
        changeOrigin:true,
        rewrite:path => path.replace(RegExp('^zuul'),'')
      }
    }
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base:"./",

})

