import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/demos/foldtube/',
  build: {
    outDir: '../docs/foldtube',
    emptyOutDir: true,
  }
})
