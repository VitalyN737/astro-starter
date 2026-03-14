import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image(),
		}),
});

const pages = defineCollection({
	schema: z.object({
		title: z.string(),
	}),
});

const schedule = defineCollection({
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		city: z.string(),
		venue: z.string(),
	}),
});

const news = defineCollection({
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
	}),
});

const cds = defineCollection({
	schema: z.object({
		title: z.string(),
		year: z.number().optional(),
		label: z.string().optional(),
	}),
});

const media = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			type: z.enum(["video", "audio", "carousel"]).optional(),
			link: z.string().optional(),
			images: z.array(image()).optional(),
		}),
});

const repertoire = defineCollection({
	schema: z.object({
		title: z.string(),
		composer: z.string().optional(),
	}),
});

export const collections = { blog, pages, schedule, news, cds, media, repertoire };
