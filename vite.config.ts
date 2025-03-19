import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import reactRefresh from "@vitejs/plugin-react-refresh"; // Nova importação

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    reactRefresh(), // Substituição
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
