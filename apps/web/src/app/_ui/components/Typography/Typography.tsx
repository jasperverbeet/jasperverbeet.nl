import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, tv } from "tailwind-variants";

export const typographyStyles = tv({
  base: "font-sans",
  variants: {
    variant: {
      labelSm: "text-base font-medium leading-5",
      labelMd: "text-lg font-medium leading-6",
      headerSm: "font-heading text-xl font-semibold leading-7",
      headerMd: "font-heading text-2xl font-semibold leading-8",
    },
    color: {
      primary: "text-primary-foreground",
      muted: "text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "labelMd",
    color: "primary",
  },
});

export interface TypographyProps
  extends VariantProps<typeof typographyStyles>,
    React.PropsWithChildren {
  className?: string;
  asChild?: boolean;
}

const Typography = ({ variant, color, className, asChild = false, children }: TypographyProps) => {
  const Comp = asChild ? Slot : "p";
  return <Comp className={typographyStyles({ variant, color, className })}>{children}</Comp>;
};

export default Typography;
