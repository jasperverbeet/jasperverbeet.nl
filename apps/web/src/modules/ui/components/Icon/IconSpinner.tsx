import { forwardRef } from "react";
import { type VariantProps, tv } from "tailwind-variants";

export const iconSpinnerStyles = tv({
  base: "animate-spin",
  variants: {
    size: {
      md: "h-4 w-4",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface IconSpinnerProps
  extends VariantProps<typeof iconSpinnerStyles>,
    React.SVGAttributes<SVGElement> {
  className?: string;
}

const IconSpinner = forwardRef<SVGSVGElement, IconSpinnerProps>(({ className, ...props }, ref) => (
  <svg
    ref={ref}
    className={iconSpinnerStyles({ className })}
    viewBox="0 0 512 512"
    fill="currentFill"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Spinner</title>
    <path
      d="M457 372c11.5 6.6 26.3 2.7 31.8-9.3C503.7 330.2 512 294.1 512 256C512 122.7 410.1 13.2 280 1.1C266.8-.1 256 10.7 256 24v0c0 13.3 10.8 23.9 24 25.4C383.5 61.2 464 149.2 464 256c0 29.3-6.1 57.3-17 82.6c-5.3 12.2-1.5 26.8 10 33.5v0z"
      stroke="currentColor"
    />
  </svg>
));
IconSpinner.displayName = "IconSpinner";

export default IconSpinner;
