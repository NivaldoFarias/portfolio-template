import { defineConfig } from "astro/config";
import icon from "astro-icon";

// Astro Plugins
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";

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
	integrations: [icon(), tailwind(), mdx(), prefetch()],
	vite: {
		plugins: [
			lightningcss({
				minify: true,
			}),
		],
	},
});
