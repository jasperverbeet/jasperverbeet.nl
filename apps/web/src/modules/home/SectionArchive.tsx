import PostListItemLatest from "../blog/components/PostListItemLatest";
import getAllPosts from "../blog/data/getAllPosts";
import Section from "../root/components/Section";
import Typography from "../ui/components/Typography/Typography";

const SectionArchive = async () => {
  const groupedPostsPerYear = (await getAllPosts()).reduce(
    (acc, post) => {
      if (acc[post.meta.date.getFullYear()]) {
        acc[post.meta.date.getFullYear()].push(post);
      } else {
        acc[post.meta.date.getFullYear()] = [post];
      }

      return acc;
    },
    {} as Record<number, Awaited<ReturnType<typeof getAllPosts>>>,
  );

  const sortedYears = Object.entries(groupedPostsPerYear).sort(
    ([a], [b]) => Number.parseInt(b) - Number.parseInt(a),
  );

  return (
    <Section>
      {sortedYears.map(([year, posts]) => (
        <div key={year} className="space-y-4">
          <Typography variant="headingSm">{year}</Typography>
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
      ))}
    </Section>
  );
};

export default SectionArchive;
