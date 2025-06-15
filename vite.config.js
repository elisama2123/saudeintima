import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/saudeintima/', // Nome do seu repositório
  build: {
    outDir: 'dist',
  },
})