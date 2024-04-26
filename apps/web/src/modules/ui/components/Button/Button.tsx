import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, tv } from "tailwind-variants";

const buttonStyles = tv({
  base: "box-border flex flex-shrink-0 items-center font-sans font-medium ring-2 ring-transparent focus:outline-none",
  variants: {
    role: {
      primary:
        "bg-fill-primary text-text-primary border-border-primary hover:bg-fill-primary-hover hover:border-border-primary-hover active:bg-fill-primary-active focus-visible:ring-border-primary-selected",
      brand:
        "bg-fill-brand text-text-brand-onFill border-border-brand hover:bg-fill-brand-hover hover:border-border-brand-hover active:bg-fill-brand-active focus-visible:ring-border-brand-selected",
    },
    variant: {
      default: "border border-b-2 active:border-b",
      ghost: null,
      outline: "border",
    },
    size: {
      md: "h-9 px-2.5 text-sm",
      lg: "h-10 px-3.5 text-sm",
    },
    shape: {
      rounded: "rounded-lg",
      circle: "rounded-full",
    },
  },
  compoundVariants: [
    {
      shape: "circle",
      size: "md",
      class: "w-9 p-1",
    },
    {
      shape: "circle",
      size: "lg",
      class: "w-10 p-2",
    },
  ],
  defaultVariants: {
    role: "primary",
    variant: "default",
    size: "md",
    shape: "rounded",
  },
});

export interface ButtonProps
  extends VariantProps<typeof buttonStyles>,
    React.PropsWithChildren,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "size" | "role"> {
  className?: string;
  asChild?: boolean;
}

const Button = ({
  role,
  variant,
  size,
  asChild,
  shape,
  className,
  children,
  ...props
}: ButtonProps) => {
  const ButtonWrapper = asChild ? Slot : "button";
  return (
    <ButtonWrapper className={buttonStyles({ role, variant, shape, size, className })} {...props}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
