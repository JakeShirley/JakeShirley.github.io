import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { siteConfig } from "../settings";

export async function GET(context: APIContext) {
  const posts = await getCollection("blog");
  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
    })),
  });
}