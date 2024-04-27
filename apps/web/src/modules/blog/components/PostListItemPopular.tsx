import PostListItem from "./PostListItem";

export interface PostListItemPopularProps {
  title: string;
  href: string;
  pageviews: number;
}

const PostListItemPopular = ({ title, href, pageviews }: PostListItemPopularProps) => {
  return (
    <PostListItem
      href={href}
      title={title}
      stat={<span>{pageviews.toLocaleString()} pageviews</span>}
    />
  );
};

export default PostListItemPopular;
