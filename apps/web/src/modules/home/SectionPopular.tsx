import getPageViews from "@/lib/posthog/analytics/getPageViews";
import PostListItemPopular from "../blog/components/PostListItemPopular";
import getAllPosts from "../blog/data/getAllPosts";
import Section from "../root/components/Section";
import Typography from "../ui/components/Typography/Typography";

const SectionPopular = async () => {
  const posts = await getAllPosts();
  const pageviews = await getPageViews(posts.map((post) => post.route));

  const _posts = posts
    .map((post) => {
      return {
        ...post,
        pageviews: post.route in pageviews ? pageviews[post.route] : 0,
      };
    })
    .sort((a, b) => {
      return b.pageviews - a.pageviews;
    })
    .slice(0, 5);

  console.log(_posts);
  console.log(pageviews);

  return (
    <Section>
      <div className="space-y-4">
        <Typography variant="headingSm">Popular</Typography>
        <ul className="space-y-4">
          {_posts.map((post) => (
            <PostListItemPopular
              key={post.slug}
              title={post.meta.title}
              href={post.route}
              pageviews={post.pageviews}
            />
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default SectionPopular;
