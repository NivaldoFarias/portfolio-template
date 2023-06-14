import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";

// Markdown Plugins
import remarkToc from "remark-toc";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";

// Vite Plugins
import lightningcss from "vite-plugin-lightningcss";

export default defineConfig({
	output: "static",
	adapter: vercel({ analytics: true }),
	integrations: [tailwind(), mdx()],
	markdown: {
		shikiConfig: {
			theme: "rose-pine-moon",
			wrap: true,
		},
		remarkPlugins: [remarkToc],
		rehypePlugins: [rehypeAccessibleEmojis],
	},
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
