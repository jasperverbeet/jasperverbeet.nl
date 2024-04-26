import Typography from "@/modules/ui/components/Typography/Typography";
import { forwardRef } from "react";

const MdxH2 = forwardRef<HTMLHeadingElement, React.HTMLProps<HTMLHeadingElement>>(
  ({ children, ...props }, ref) => {
    return (
      <Typography variant="headingXs" asChild>
        <h2 ref={ref} {...props}>
          {children}
        </h2>
      </Typography>
    );
  },
);

export default MdxH2;
