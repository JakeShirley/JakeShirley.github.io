import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { siteConfig } from "../settings";
import { galleryPostPath } from "../gallery-posts";

export async function GET(context: APIContext) {
  const posts = await getCollection("galleryPosts");
  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: galleryPostPath(post),
    })),
  });
}