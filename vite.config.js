import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import istanbul from 'vite-plugin-istanbul';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    istanbul({
      include: 'src/**', // Instrument files within the src directory
      exclude: ['node_modules', 'cypress/**'], // Exclude these directories
      extension: ['.js', '.ts', '.jsx', '.tsx'], // File extensions to include
    }),
  ],
  server: {
    port: 3000,
  },
})