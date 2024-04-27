import { readFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";
import { cache } from "@/modules/root/utils/cache";

const frontMatterSchema = z.object({
  title: z.string(),
  date: z.string().pipe(z.coerce.date()),
  description: z.string(),
});

const getPost = async (filename: string) => {
  return cache(
    async (slug: string) => {
      /**
       * Read the file content
       */
      const content = await readFile(path.join("src", "posts", slug), "utf-8");

      /**
       * Parse the front matter
       */
      const { data: frontMatter } = matter(content);

      /**
       * Validate the front matter
       */
      const meta = frontMatterSchema.parse(frontMatter);

      /**
       * Remove the .mdx extension from the slug
       */
      const _slug = slug.replace(/\.mdx$/, "");

      /**
       * Generate the route
       */
      const route = `/blog/${meta.date.getFullYear()}/${_slug}`;

      return {
        slug: _slug,
        route,
        content,
        meta,
      };
    },
    ["getPost", filename],
  )(filename);
};

export default getPost;
