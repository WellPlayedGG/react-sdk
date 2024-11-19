import path from "path";
import react from "@vitejs/plugin-react";
// demo/vite.config.ts
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react()],
	root: path.resolve(__dirname, "src"),
});
