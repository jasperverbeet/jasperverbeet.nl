import getAllPosts from "@/modules/blog/data/getAllPosts";
import getAppUrl from "@/modules/root/utils/getAppUrl";
import type { MetadataRoute } from "next";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const posts = await getAllPosts();
  const appUrl = getAppUrl();

  return [
    {
      url: new URL("/", appUrl.origin).toString(),
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: new URL("/blog", appUrl.origin).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...posts.map(
      (post) =>
        ({
          url: new URL(post.route, appUrl.origin).toString(),
          lastModified: post.meta.date,
          changeFrequency: "monthly",
          priority: 0.7,
        }) as const,
    ),
  ];
};

export default sitemap;
