import NextLink from "next/link";
import Typography, { type TypographyProps } from "../Typography/Typography";
import { type VariantProps, tv } from "tailwind-variants";

export const linkStyles = tv({
  base: "no-underline hover:underline",
  variants: {
    color: {
      brand: "text-text-brand hover:text-text-brand-hover active:text-text-brand-active",
    },
  },
  defaultVariants: {
    color: "brand",
  },
});

export interface LinkProps extends VariantProps<typeof linkStyles>, Omit<TypographyProps, "color"> {
  href: string;
  className?: string;
}

const Link = ({
  href,
  color,
  className,
  children,
  ...props
}: React.PropsWithChildren<LinkProps>) => {
  return (
    <Typography {...props} asChild className={linkStyles({ color, className })}>
      <NextLink href={href}>{children}</NextLink>
    </Typography>
  );
};

export default Link;
