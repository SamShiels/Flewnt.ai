import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Flewnt.ai/", // <-- replace with your repo name if deploying to GitHub Pages
});
