import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "src/ts/main.ts",
      },
      output: {
        entryFileNames: "main.js",
        assetFileNames: "main.css",
      },
    },
  },
});
