import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin-allow-popups",
      "Cross-Origin-Embedder-Policy": "require-corp",
      "Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://apis.google.com https://accounts.google.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://accounts.google.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://www.googleapis.com https://e-sdg.onrender.com https://accounts.google.com https://oauth2.googleapis.com; img-src 'self' data: https:; frame-src 'self' https://accounts.google.com; worker-src 'self' blob:;"
    },
  },
  optimizeDeps: {
    include: ['@fontsource/manrope']
  }
})