import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: "./setupTests.js",
    provider: "c8",
    coverage: {
      reporter: ['text', 'html'],
      exclude: [
        'node_modules/',
        'setupTests.js',
      ],
    },
  },
});
