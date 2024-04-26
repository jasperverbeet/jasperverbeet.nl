import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, tv } from "tailwind-variants";

import Icon, { type IconProp } from "../Icon/Icon";

const inputStyles = tv({
  slots: {
    root: "box-border flex flex-shrink-0 items-center rounded-lg font-sans font-medium ring-2 ring-transparent transition-colors",
    input:
      "text-text-primary placeholder:text-text-secondary h-full w-full border-none bg-transparent focus:outline-none",
  },
  variants: {
    variant: {
      outline: {
        root: "border-border-primary focus-within:ring-border-primary-selected hover:border-border-primary-hover border",
      },
      ghost: null,
    },
    size: {
      md: {
        root: "h-9 gap-1.5 px-2.5",
        input: "text-sm",
      },
      lg: {
        root: "h-10 gap-2 px-3.5 ",
        input: "text-sm",
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "outline",
  },
});

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "size">,
    VariantProps<typeof inputStyles> {
  asChild?: boolean;
  iconLeft?: IconProp;
}

const { root, input } = inputStyles();

const Input = ({ className, asChild, variant, size, iconLeft, ...props }: InputProps) => {
  const Comp = asChild ? Slot : "input";

  return (
    <div className={root({ variant, className })}>
      {iconLeft && <Icon variant="secondary" icon={iconLeft} />}
      <Comp className={input({ size })} {...props} />
    </div>
  );
};

export default Input;
