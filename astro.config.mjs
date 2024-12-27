import { defineConfig } from "astro/config";

// Astro Plugins
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// Vite Plugins
import lightningcss from "vite-plugin-lightningcss";
import prefetch from "@astrojs/prefetch";

export default defineConfig({
	output: "server",
	adapter: vercel({
		webAnalytics: { enabled: true },
		includeFiles: [
			"./node_modules/shiki/languages/*.tmLanguage.json",
			"./node_modules/shiki/themes/*.json",
		].map((path) => new URL(path, import.meta.url).pathname),
	}),
	integrations: [tailwind(), mdx(), prefetch()],
	vite: {
		plugins: [
			lightningcss({
				minify: true,
			}),
		],
	},
});
