import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,                // 👈 Dein lokaler Entwicklungsport
    historyApiFallback: true,  // 👈 Damit React Router alle Pfade kennt
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    outDir: "dist",
  },
  base: "/",
});
