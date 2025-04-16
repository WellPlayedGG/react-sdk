import react from "@vitejs/plugin-react";
// vite.config.ts
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig(({ command }) => {
	// Build settings
	return {
		plugins: [
			react(),
			dts({
				insertTypesEntry: true,
				rollupTypes: true,
				outDir: "dist",
				include: ["src"],
			}),
		],
		build: {
			lib: {
				entry: "src/index.ts",
				name: "WellPlayedReactSDK",
				formats: ["es", "cjs", "umd"],
				fileName: (format) => `wp-react-sdk.${format}.js`,
			},
			rollupOptions: {
				external: ["react", "react-dom", "@well-played.gg/typescript-sdk"],
				output: {
					globals: {
						react: "React",
						"react-dom": "ReactDOM",
					},
				},
			},
		},
	};
});
