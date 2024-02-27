import { defineConfig } from "vite";
import fs from "fs/promises";
import handlebars from "@vituum/vite-plugin-handlebars";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "src/main.ts",
        html:'index.html',
      },
    },
  },
});
