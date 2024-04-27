import MdxA from "@/modules/blog/components/MdxA";
import MdxCode from "@/modules/blog/components/MdxCode";
import MdxH1 from "@/modules/blog/components/MdxH1";
import MdxH2 from "@/modules/blog/components/MdxH2";
import MdxImage from "@/modules/blog/components/MdxImage";
import MdxP from "@/modules/blog/components/MdxP";
import getAllPosts from "@/modules/blog/data/getAllPosts";
import getPost from "@/modules/blog/data/getPost";
import ButtonLink from "@/modules/ui/components/Button/ButtonLink";
import Typography from "@/modules/ui/components/Typography/Typography";
import { IconMail } from "@tabler/icons-react";
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
    <>
      <article className="container mx-auto mb-20 max-w-prose">
        <header className="mx-auto my-20">
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
              a: MdxA,
            }}
            source={post.content}
            options={{ parseFrontmatter: true }}
          />
        </div>
      </article>
      <footer className="container max-w-prose mx-auto mb-20 flex flex-col gap-3 items-start">
        <Typography
          variant="labelSm"
          color="secondary"
          asChild
          className="uppercase tracking-wider"
        >
          <h5>Reply</h5>
        </Typography>
        <ButtonLink
          iconLeft={IconMail}
          size="md"
          href={`mailto:jasperverbeet+blog@gmail.com?subject=Re: ${post.meta.title}`}
        >
          Email
        </ButtonLink>
      </footer>
    </>
  );
};

export default BlogPage;
