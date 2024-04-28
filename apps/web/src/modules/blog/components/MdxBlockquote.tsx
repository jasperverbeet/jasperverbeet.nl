import Typography from "@/modules/ui/components/Typography/Typography";
import { forwardRef } from "react";

const MdxBlockquote = forwardRef<HTMLQuoteElement, React.HTMLProps<HTMLQuoteElement>>(
  ({ children, ...props }, ref) => {
    return (
      <Typography variant="bodyMd" asChild>
        <blockquote ref={ref} {...props}>
          {children}
        </blockquote>
      </Typography>
    );
  },
);

export default MdxBlockquote;
