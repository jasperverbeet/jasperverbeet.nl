import PostListItem from "./PostListItem";

export interface PostListItemLatestProps {
  title: string;
  href: string;
  date: Date;
}

const PostListItemLatest = ({ title, href, date }: PostListItemLatestProps) => {
  return (
    <PostListItem
      href={href}
      title={title}
      stat={<time dateTime={date.toISOString()}>{date.toLocaleDateString()}</time>}
    />
  );
};

export default PostListItemLatest;
