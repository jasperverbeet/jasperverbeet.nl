import PostListItemLatest from "../blog/components/PostListItemLatest";
import getAllPosts from "../blog/data/getAllPosts";
import Section from "../root/components/Section";
import Typography from "../ui/components/Typography/Typography";

const SectionLatest = async () => {
  const posts = (await getAllPosts())
    .sort((a, b) => {
      return b.meta.date.getTime() - a.meta.date.getTime();
    })
    .slice(0, 5);

  return (
    <Section>
      <div className="space-y-4">
        <Typography variant="headingSm">Latest</Typography>
        <ul className="space-y-4">
          {posts.map((post) => (
            <PostListItemLatest
              key={post.slug}
              title={post.meta.title}
              href={post.route}
              date={post.meta.date}
            />
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default SectionLatest;
