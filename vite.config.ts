import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin({ emitCss: true }), // ✅ Ensure CSS files are generated
    dts({ insertTypesEntry: true }) // ✅ Generates .d.ts files
  ],
  build: {
    outDir: "dist",
    assetsDir: "styles", // ✅ Corrected `assetsDir`
    lib: {
      entry: path.resolve(__dirname, "src/components.tsx"), // Entry point
      name: "OnlineFreecvDesignSystem",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  },
  css: {
    postcss: {
      plugins: []
    }
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@hoc": path.resolve(__dirname, "src/hoc")
    }
  }
});
