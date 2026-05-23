import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './content' }),
  schema: z.object({
    type: z.enum(['research', 'patent', 'media', 'press', 'post', 'project', 'milestone']),
    date: z.coerce.date(),
    title: z.string(),
    summary: z.string(),
    venue: z.string().optional(),
    meta: z.string().optional(),
    href: z.string().optional(),
    hidden: z.boolean().optional()
  })
});

export const collections = { posts };
