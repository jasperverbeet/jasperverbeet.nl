import Typography from "@/modules/ui/components/Typography/Typography";
import { forwardRef } from "react";

const MdxP = forwardRef<HTMLParagraphElement, React.HTMLProps<HTMLParagraphElement>>(
  ({ children, ...props }, ref) => {
    return (
      <Typography variant="bodyLg" asChild>
        <p ref={ref} {...props}>
          {children}
        </p>
      </Typography>
    );
  },
);

export default MdxP;
