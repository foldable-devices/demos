import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/demos/photo-gallery/',
  build: {
    outDir: '../docs/photo-gallery',
  }
})
