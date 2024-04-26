import MdxCode from "@/modules/blog/components/MdxCode";
import MdxH1 from "@/modules/blog/components/MdxH1";
import MdxH2 from "@/modules/blog/components/MdxH2";
import MdxImage from "@/modules/blog/components/MdxImage";
import MdxP from "@/modules/blog/components/MdxP";
import getAllPosts from "@/modules/blog/data/getAllPosts";
import getPost from "@/modules/blog/data/getPost";
import Typography from "@/modules/ui/components/Typography/Typography";
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

  return (
    <article className="container mx-auto">
      <header className="mx-auto my-10">
        <Typography variant="headingMd">{post.meta.title}</Typography>
        <Typography variant="labelMd" color="secondary" asChild>
          <time dateTime={post.meta.date}>{new Date(post.meta.date).toLocaleDateString()}</time>
        </Typography>
      </header>
      <div className="prose">
        <MDXRemote
          components={{
            p: MdxP,
            h1: MdxH1,
            h2: MdxH2,
            img: MdxImage,
            code: MdxCode,
            pre: ({ children }) => <>{children}</>,
          }}
          source={post.content}
          options={{ parseFrontmatter: true }}
        />
      </div>
    </article>
  );
};

export default BlogPage;
