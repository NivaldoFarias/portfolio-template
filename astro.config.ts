import { defineConfig } from "astro/config";

// Astro Plugins
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import prefetch from "@astrojs/prefetch";

// Community Plugins
import icon from "astro-icon";

export default defineConfig({
	output: "server",
	adapter: vercel({
		webAnalytics: { enabled: true },
	}),
	integrations: [icon(), tailwind(), mdx(), prefetch()],
});
