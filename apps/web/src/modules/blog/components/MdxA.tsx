import Link from "@/modules/ui/components/Link/Link";
import { forwardRef } from "react";

const MdxA = forwardRef<HTMLAnchorElement, Omit<React.HTMLProps<HTMLAnchorElement>, "color">>(
  ({ href, children, ...props }, ref) => {
    if (!href) {
      throw new Error("Link href is required");
    }

    return (
      <Link href={href} ref={ref} {...props} variant="bodyLg" color="brand" showUnderline>
        {children}
      </Link>
    );
  },
);

export default MdxA;
