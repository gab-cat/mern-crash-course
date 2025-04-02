import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy:{
      //whenever you visit /api, prefix it with target
      "/api":{
        target:"http://localhost:5000"
      }
    },
    watch: {
      usePolling: true,
    },
  },
})