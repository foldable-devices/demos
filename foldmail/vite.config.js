import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/demos/foldmail/',
  build: {
    outDir: '../docs/foldmail',
    emptyOutDir: true,
  }
})
