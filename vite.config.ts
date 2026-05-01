import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { cloudflareVitePlugin } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tsConfigPaths(),
    cloudflareVitePlugin(),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
