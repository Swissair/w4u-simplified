import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   cors: {
  //     target: "http://your-api-server.com",
  //     changeOrigin: true,
  //     rewrite: (path) => path.replace(/^\/api/, ""),
  //   },
  // },
});
