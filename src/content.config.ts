import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const galleryPosts = defineCollection({
  loader: glob({ base: "./src/content/gallery-posts", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(["laser-works", "electronics"]),
    pubDate: z.coerce.date().optional(),
    image: z.string().optional(),
    order: z.number().default(0),
    mediaPath: z.string(),
    media: z.array(z.discriminatedUnion("type", [
      z.object({
        type: z.literal("photo"),
        src: z.string(),
        preview: z.string().optional(),
        alt: z.string(),
        caption: z.string().trim().optional(),
        width: z.number().int().positive(),
        height: z.number().int().positive(),
      }),
      z.object({
        type: z.literal("video"),
        src: z.string(),
        poster: z.string().optional(),
        label: z.string(),
        linkText: z.string(),
        caption: z.string().trim().optional(),
        width: z.number().int().positive(),
        height: z.number().int().positive(),
      }),
    ])),
  }),
});

export const collections = { galleryPosts };