import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/demos/foldship/',
  build: {
    outDir: '../docs/foldship',
    emptyOutDir: true,
  }
})
