import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const MdxPre = forwardRef<HTMLPreElement, React.HTMLProps<HTMLPreElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <pre
        ref={ref}
        className={twMerge(
          "not-prose p-4 md:rounded border border-border-primary border-b-2 w-[calc(100%_+_2rem)] -translate-x-4 max-w-[initial] text-sm text-wrap",
          className,
        )}
        {...props}
      >
        {children}
      </pre>
    );
  },
);

export default MdxPre;
