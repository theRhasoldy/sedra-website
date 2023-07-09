import { defineConfig } from "vite";
import { fileURLToPath } from "url";

export default defineConfig({
  root: "./src",
  publicDir: "../public",
  build: {
    cssCodeSplit: false,
    target: "esnext",
    outDir: "../dist",
    rollupOptions: {
      input: {
        index: fileURLToPath(new URL("/index.html", import.meta.url)),
        booking: fileURLToPath(new URL("/pages/booking.html", import.meta.url)),
        allRetreats: fileURLToPath(
          new URL("/pages/allRetreats.html", import.meta.url)
        ),
      },
      output: {
        preserveModules: false,
      },
    },
  },
});
