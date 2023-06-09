import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env
  },
  build: {
    lib: {
      entry: fileURLToPath(new URL('src/index.js', import.meta.url)),
      name: 'vueModule',
      // the proper extensions will be added
      fileName: 'vueModule',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled  // into your library  external: ['vue'],  output: {
      // Provide global variables to use in the UMD build    // for externalized deps    globals: {
      vue: 'Vue',
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})