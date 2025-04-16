// vite.config.ts
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig(({ command }) => {
	// Build settings
	return {
		plugins: [
			dts({
				insertTypesEntry: true,
				rollupTypes: true,
				copyDtsFiles: true,
				outDir: "dist",
				include: ["src"],
			}),
		],
		build: {
			lib: {
				entry: "src/index.ts",
				name: "WellPlayedTypescriptSDK",
				formats: ["es", "cjs", "umd"],
				fileName: (format) => `wp-ts-sdk.${format}.js`,
			},
		},
	};
});
