import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project site: served at /DashBoard_ERP/
// Build output goes to docs/ so Pages can deploy from main → /docs
export default defineConfig({
  plugins: [react()],
  base: '/DashBoard_ERP/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
