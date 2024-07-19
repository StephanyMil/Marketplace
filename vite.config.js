import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import istanbul from 'vite-plugin-istanbul';

export default defineConfig({
  plugins: [
    react(),
    istanbul({
      include: 'src/**/*.{js,ts,jsx,tsx}', // Inclui todos os arquivos .js, .ts, .jsx e .tsx dentro de src
      exclude: ['node_modules', 'cypress/**'], // Exclui node_modules e cypress
    }),
  ],
  server: {
    port: 3000,
  },
});
