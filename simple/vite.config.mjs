import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/demos/simple/',
  build: {
    outDir: '../docs/simple',
    emptyOutDir: true,
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    hmr: {
        port: 3001,
    },
  }
})
