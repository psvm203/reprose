import { defineConfig } from "vite";
import RubyPlugin from "vite-plugin-ruby";
import tailwindcss from "tailwindcss";

export default defineConfig({
  build: {
    outDir: 'dist'
  },
  plugins: [RubyPlugin()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
