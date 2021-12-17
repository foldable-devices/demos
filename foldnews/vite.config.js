import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/demos/foldnews/',
  build: {
    outDir: '../docs/foldnews',
    emptyOutDir: true,
  }
})
