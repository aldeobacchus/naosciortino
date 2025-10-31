import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevtools from 'vite-plugin-vue-devtools';
import path from 'path';


// https://vite.dev/config/
export default defineConfig({
  base: '/naosciortino/',
  plugins: [
    vue()
    // vueDevtools()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
