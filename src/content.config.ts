import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    img: z.string(),
    tags: z.array(z.string()),
    category: z.string(),
    date: z.coerce.date().optional(),
  }),
});

export const collections = { projects };
