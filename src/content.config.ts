import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date().optional(),
    image: z.string().optional(),
  }),
});

const laserWorks = defineCollection({
  loader: glob({ base: "./src/content/laser-works", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    order: z.number().default(0),
    mediaPath: z.string(),
    media: z.array(z.discriminatedUnion("type", [
      z.object({
        type: z.literal("photo"),
        name: z.string(),
        alt: z.string(),
        caption: z.string().trim().optional(),
        width: z.number().int().positive(),
        height: z.number().int().positive(),
      }),
      z.object({
        type: z.literal("video"),
        name: z.string(),
        label: z.string(),
        linkText: z.string(),
        caption: z.string().trim().optional(),
        width: z.number().int().positive(),
        height: z.number().int().positive(),
      }),
    ])),
  }),
});

export const collections = { blog, laserWorks };