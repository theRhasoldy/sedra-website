import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "./src",
  build: {
    target: "esnext",
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        pages: resolve(__dirname, "src/pages/booking.html")
      }
    }
  },
  publicDir: "../public",
});
