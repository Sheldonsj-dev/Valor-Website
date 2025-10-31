import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Default to "/" so custom domain works.
// Override with: VITE_BASE=/Valor-Website/ npm run build   (or $env:VITE_BASE on Windows)
const base = process.env.VITE_BASE ?? "/";

export default defineConfig({
  base,
  plugins: [react()],
});
