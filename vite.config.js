import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "./", // Относительные пути для статики
  build: {
    outDir: "dist",
    assetsDir: "assets", // Папка для ассетов
    emptyOutDir: true,
    rollupOptions: {
      output: {
        // Правильное именование файлов
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name.split(".")[1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return "assets/images/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
  },
});
