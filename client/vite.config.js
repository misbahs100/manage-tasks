import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: 3900,
    proxy: {
      "/api": {
        //target: "https://task-manager-beta-silk.vercel.app/",
        target: "http://localhost:8800/api",

        changeOrigin: true,
      },
    },
  },
});
