import { defineConfig } from "astro/config";

// Astro Plugins
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// Vite Plugins
import lightningcss from "vite-plugin-lightningcss";

export default defineConfig({
	output: "server",
	adapter: vercel({
		analytics: true,
		includeFiles: Object.keys(
			import.meta.glob([
				"./node_modules/shiki/languages/*.tmLanguage.json",
				"./node_modules/shiki/themes/*.json",
			]),
		),
	}),
	integrations: [tailwind(), mdx()],
	experimental: {
		assets: true,
	},
	vite: {
		plugins: [
			lightningcss({
				minify: true,
			}),
		],
	},
});
