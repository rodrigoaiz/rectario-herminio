import { defineCollection, z } from 'astro:content';

const recipes = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		image: z.string(),
		ingredients: z.array(z.string()),
		tags: z.array(z.string()),
		prepTime: z.string(),
	}),
});

export const collections = { recipes };
