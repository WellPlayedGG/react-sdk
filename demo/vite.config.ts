import react from "@vitejs/plugin-react";
import path from "path";
// demo/vite.config.ts
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react()],
	root: path.resolve(__dirname, "src"),
	resolve: {
		preserveSymlinks: true,
		alias: {
			"@well-played.gg/react-sdk": path.resolve(__dirname, "../src/index.ts"),
		},
	},
});
