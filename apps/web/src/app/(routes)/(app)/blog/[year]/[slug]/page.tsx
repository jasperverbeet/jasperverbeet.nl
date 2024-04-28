import remarkGfm from "remark-gfm";
import MdxA from "@/modules/blog/components/MdxA";
import MdxH1 from "@/modules/blog/components/MdxH1";
import MdxH2 from "@/modules/blog/components/MdxH2";
import MdxImage from "@/modules/blog/components/MdxImage";
import MdxP from "@/modules/blog/components/MdxP";
import getAllPosts from "@/modules/blog/data/getAllPosts";
import getPost from "@/modules/blog/data/getPost";
import getAppUrl from "@/modules/root/utils/getAppUrl";
import ButtonLink from "@/modules/ui/components/Button/ButtonLink";
import Typography from "@/modules/ui/components/Typography/Typography";
import { IconMail } from "@tabler/icons-react";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import rehypeShiki from "@shikijs/rehype";
import MdxPre from "@/modules/blog/components/MdxPre";
import { rehypeInlineShiki } from "@/modules/blog/rehype/inline-shiki";

type Props = { params: { year: string; slug: string } };

export const generateMetadata = async ({ params: { slug } }: Props): Promise<Metadata> => {
  const post = await getPost(`${slug}.mdx`);

  return {
    title: post.meta.title,
    description: post.meta.description,
    openGraph: {
      type: "article",
      title: `${post.meta.title} - Jasper Verbeet's Blog`,
      description: post.meta.description,
      publishedTime: post.meta.date.toISOString(),
      url: new URL(post.route, getAppUrl().origin),
      authors: ["Jasper Verbeet"],
    },
  };
};

export const generateStaticParams = async () => {
  const posts = await getAllPosts();

  return posts.map((post) => {
    return [
      {
        year: post.meta.date.getFullYear().toString(),
        slug: post.slug,
      },
    ];
  });
};

const BlogPage = async ({ params: { year, slug } }: Props) => {
  const post = await getPost(`${slug}.mdx`);

  /**
   * If the date doesn't match the year, return a 404
   */
  if (post.meta.date.getFullYear() !== Number.parseInt(year, 10)) {
    return notFound();
  }

  return (
    <>
      <article className="container mx-auto mb-20 max-w-prose">
        <header className="mx-auto my-20">
          <div className="flex flex-col gap-1">
            <Typography variant="headingMd">{post.meta.title}</Typography>
            <Typography variant="bodyMd" color="secondary" asChild>
              <time dateTime={post.meta.date.toISOString()}>
                {post.meta.date.toLocaleDateString()}
              </time>
            </Typography>
          </div>
        </header>
        <div className="prose prose-code:font-normal prose-code:bg-fill-code prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-code:px-1 prose-code:py-0.5 prose-code:text-text-code">
          <MDXRemote
            components={{
              p: MdxP,
              h1: MdxH1,
              h2: MdxH2,
              pre: MdxPre,
              img: MdxImage,
              a: MdxA,
            }}
            source={post.content}
            options={{
              parseFrontmatter: true,
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  [
                    // @ts-expect-error - somehow the types dont match
                    rehypeShiki,
                    {
                      themes: {
                        light: "github-light",
                        dark: "github-dark",
                        paper: "github-light",
                      },
                      defaultColor: "light",
                    },
                  ],

                  [
                    // @ts-expect-error - somehow the types dont match
                    rehypeInlineShiki,
                    {
                      themes: {
                        light: "github-light",
                        dark: "github-dark",
                        paper: "github-dark",
                      },
                      defaultColor: "light",
                    },
                  ],
                ],
              },
            }}
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
