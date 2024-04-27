import { forwardRef } from "react";
import { type VariantProps, tv } from "tailwind-variants";

export const dividerStyles = tv({
  slots: {
    wrapper: "h-1 flex items-center w-full",
    line: "flex-grow h-px border-border-primary",
  },
});

export interface DividerProps extends VariantProps<typeof dividerStyles> {
  className?: string;
}

const { wrapper, line } = dividerStyles();

const Divider = forwardRef<HTMLHRElement, DividerProps>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} {...props} className={wrapper({ className })}>
      <hr className={line()} />
    </div>
  );
});

export default Divider;
