import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/React-Portfolio/', // Use your repository name here
  server: {
    host: "0.0.0.0",
    fs: {
      strict: false,
    },
  },
  plugins: [react()],
})
