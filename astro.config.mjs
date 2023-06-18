import { defineConfig } from "astro/config";

// Astro Plugins
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// Vite Plugins
import lightningcss from "vite-plugin-lightningcss";

export default defineConfig({
	output: "server",
	adapter: vercel({ analytics: true }),
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
