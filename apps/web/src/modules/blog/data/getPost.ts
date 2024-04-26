import { readFile } from "node:fs/promises";
import { unstable_cache } from "next/cache";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";

const frontMatterSchema = z.object({
  title: z.string(),
  date: z.string().transform((value) => new Date(value).toISOString()),
  description: z.string(),
});

const getPost = async (filename: string) => {
  return unstable_cache(
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

      return {
        slug,
        content,
        meta,
      };
    },
    ["getPost", filename],
  )(filename);
};

export default getPost;
