import react from "@vitejs/plugin-react";
// vite.config.ts
import { defineConfig } from "vite";

export default defineConfig(({ command }) => {
	if (command === "serve") {
		// Development settings
		return {
			plugins: [react()],
			server: {
				open: "/demo/index.html",
			},
		};
	}
	// Build settings
	return {
		plugins: [react()],
		build: {
			lib: {
				entry: "src/index.ts",
				name: "WellPlayedReactSDK",
				formats: ["es", "cjs", "umd"],
				fileName: (format) => `wp-react-sdk.${format}.js`,
			},
			rollupOptions: {
				external: ["react", "react-dom", "@apollo/client", "graphql"],
				output: {
					globals: {
						react: "React",
						"react-dom": "ReactDOM",
						"@apollo/client": "apolloClient",
						graphql: "graphql",
					},
				},
			},
		},
	};
});
