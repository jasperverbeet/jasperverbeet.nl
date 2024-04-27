import Link from "@/modules/ui/components/Link/Link";
import Typography from "@/modules/ui/components/Typography/Typography";

export interface PostListItemProps {
  title: React.ReactNode;
  href: string;
  stat: React.ReactNode;
}

const PostListItem = ({ title, href, stat }: React.PropsWithChildren<PostListItemProps>) => {
  return (
    <li className="flex w-full justify-between items-start gap-3">
      <Link href={href} variant="labelMd" color="brand" className="flex-grow">
        {title}
      </Link>
      <Typography variant="bodySm" color="secondary" className="flex-shrink-0 mt-0.5 text-right">
        {stat}
      </Typography>
    </li>
  );
};

export default PostListItem;
