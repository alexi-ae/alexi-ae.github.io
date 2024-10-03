import { defineCollection } from 'astro:content';
import { rssSchema } from '@astrojs/rss';

const blog = defineCollection({
  schema: rssSchema,
});

const project = defineCollection({
  schema: rssSchema,
});

export const collections = { blog ,project };