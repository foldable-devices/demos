import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    dedupe: ['lit']
  },
  base: '/photo-gallery/',
})
