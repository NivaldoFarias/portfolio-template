import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";
import vercel from "@astrojs/vercel/static";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      config: {
        path: "tailwind.config.cjs",
      },
    }),
    mdx(),
    image(),
    prefetch(),
  ],
  output: "static",
  adapter: vercel({ analytics: true }),
});
