import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      name: "index",
      fileName: "index",
      entry: "src/components/Cursors.tsx",
      formats: ["es", "umd", "cjs"],
    },
    minify: true,
    emptyOutDir: true,
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        dir: "dist",
        exports: "named",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    assetsDir: "assets",
  },
  plugins: [
    react(),
    cssInjectedByJsPlugin(),
    dts({
      rollupTypes: true,
      outDir: "dist/@types",
      insertTypesEntry: true,
      include: ["src/**/*.ts", "src/**/*.tsx"],
    }),
  ],
  assetsInclude: ["**/*.cur"],
});
