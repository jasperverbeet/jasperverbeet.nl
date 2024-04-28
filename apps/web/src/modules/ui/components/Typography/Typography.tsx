import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, tv } from "tailwind-variants";

export const typographyStyles = tv({
  base: "",
  variants: {
    variant: {
      monoSm: "text-sm font-mono leading-5",
      monoMd: "text-base font-mono leading-6",
      bodySm: "text-sm font-normal leading-5",
      bodyMd: "text-base font-normal leading-6",
      bodyLg: "text-lg font-normal leading-7",
      labelSm: "text-sm font-medium leading-5",
      labelMd: "text-base font-medium leading-6",
      headingXs: "font-heading text-base font-semibold leading-5",
      headingSm: "font-heading text-lg font-semibold leading-6",
      headingMd: "font-heading text-xl font-semibold leading-7",
      headingLg: "font-heading text-2xl font-semibold leading-8",
    },
    color: {
      primary: "text-text-primary",
      secondary: "text-text-secondary",
    },
  },
  defaultVariants: {
    variant: "labelMd",
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
