import PostListItemLatest from "../blog/components/PostListItemLatest";
import getAllPosts from "../blog/data/getAllPosts";
import Section from "../root/components/Section";
import Typography from "../ui/components/Typography/Typography";

const SectionLatest = async () => {
  const posts = (await getAllPosts())
    .sort((a, b) => {
      return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
    })
    .slice(0, 5);

  return (
    <Section>
      <Typography variant="headingSm">Latest</Typography>
      <ul className="flex gap-4 flex-col">
        {posts.map((post) => (
          <PostListItemLatest
            key={post.slug}
            title={post.meta.title}
            href={post.route}
            date={post.meta.date}
          />
        ))}
      </ul>
    </Section>
  );
};

export default SectionLatest;
