import type { CollectionEntry } from "astro:content";

export function galleryPostPath(post: CollectionEntry<"galleryPosts">): string {
  const prefix = {
    "laser-works": "laser-works",
    electronics: "blog",
    "school-projects": "school-projects",
  }[post.data.category];
  return `/${prefix}/${post.id}/`;
}