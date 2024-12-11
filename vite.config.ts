import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
        '@': resolve(__dirname, 'src'),
        '@features': resolve(__dirname, 'src/features'),
        '@shared': resolve(__dirname, 'src/shared'),
        '@pages': resolve(__dirname, 'src/pages'),
        '@entity': resolve(__dirname, 'src/entity'),
    },
},
})
