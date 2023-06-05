import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";
import vercel from "@astrojs/vercel/static";

// Markdown Plugins
import remarkToc from "remark-toc";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";

export default defineConfig({
	output: "static",
	adapter: vercel({ analytics: true }),
	integrations: [tailwind(), mdx(), image(), prefetch()],
	markdown: {
		shikiConfig: {
			theme: "rose-pine-moon",
			wrap: true,
		},
		remarkPlugins: [remarkToc],
		rehypePlugins: [rehypeAccessibleEmojis],
	},
});
