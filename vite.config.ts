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
        entryFileNames: "js/[name].js",
        chunkFileNames: "js/[name].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".css")) {
            return "css/[name][extname]";
          }
          return "[name][extname]";
        },
      },
    },
  },
});
