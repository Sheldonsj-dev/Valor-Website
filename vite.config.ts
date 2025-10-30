import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Valor-Website/', // 👈 Replace this with your repo name (case-sensitive)
  build: {
    outDir: 'dist',
  },
  server: {
    port: 5173,
    open: true,
  },
})
