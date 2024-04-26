import getAllPosts from "@/modules/blog/data/getAllPosts";
import getPost from "@/modules/blog/data/getPost";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  const posts = await getAllPosts();

  return posts.map((post) => {
    const date = new Date(post.meta.date);
    return [
      {
        year: date.getFullYear().toString(),
        slug: post.slug.replace(/\.mdx$/, ""),
      },
    ];
  });
};

const BlogPage = async ({ params: { year, slug } }: { params: { year: string; slug: string } }) => {
  const post = await getPost(`${slug}.mdx`);

  /**
   * If the date doesn't match the year, return a 404
   */
  if (new Date(post.meta.date).getFullYear() !== Number.parseInt(year, 10)) {
    return notFound();
  }

  return <MDXRemote source={post.content} options={{ parseFrontmatter: true }} />;
};

export default BlogPage;
