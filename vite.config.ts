import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: "lib/index.ts",
      formats: ["es", "cjs"],
      name: "brofrong-math",
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`
    },
    outDir: "dist",
  },
  plugins: [dts()],
});
