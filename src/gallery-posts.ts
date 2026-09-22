import type { CollectionEntry } from "astro:content";

export function galleryPostPath(post: CollectionEntry<"galleryPosts">): string {
  const prefix = post.data.category === "laser-works" ? "laser-works" : "blog";
  return `/${prefix}/${post.id}/`;
}