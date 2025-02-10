import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    host: true, // Allows access on local network
    port: 5173, // Change port if needed
  }
})
