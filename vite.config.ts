import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/piracy-megathread-clone/", // 🔑 Update this with your repo name
})
