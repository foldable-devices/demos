import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/demos/starfold/',
  build: {
    outDir: '../docs/starfold',
    emptyOutDir: true,
  }
})
