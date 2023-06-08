import { z, defineCollection } from "astro:content";

const repoCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		tags: z.array(z.string()),
		image: z.string().optional(),
	}),
});

export const collections = {
	repo: repoCollection,
};
