import Typography from "@/modules/ui/components/Typography/Typography";
import { forwardRef } from "react";

const MdxH1 = forwardRef<HTMLHeadingElement, React.HTMLProps<HTMLHeadingElement>>(
  ({ children, ...props }, ref) => {
    return (
      <Typography variant="headingSm" asChild>
        <h1 ref={ref} {...props}>
          {children}
        </h1>
      </Typography>
    );
  },
);

export default MdxH1;
