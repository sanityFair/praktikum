import { defineConfig } from "vite";
import handlebars from "@vituum/vite-plugin-handlebars";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "src/main.ts",
      },
    },
  },
  // plugins: [handlebars()],
});
