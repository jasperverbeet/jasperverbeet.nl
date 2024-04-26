import Typography, { type TypographyProps } from "../Typography/Typography";
import { type VariantProps, tv } from "tailwind-variants";
import type { RawLinkProps } from "./RawLink";
import RawLink from "./RawLink";

export const linkStyles = tv({
  base: "hover:underline",
  variants: {
    color: {
      brand: "text-text-brand hover:text-text-brand-hover active:text-text-brand-active",
    },
    showUnderline: {
      true: "hover:underline",
      false: "",
    },
  },
  defaultVariants: {
    color: "brand",
    showUnderline: true,
  },
});

export interface LinkProps
  extends VariantProps<typeof linkStyles>,
    Omit<TypographyProps, "color">,
    Omit<RawLinkProps, "size"> {
  href: string;
  className?: string;
}

const Link = ({
  href,
  color,
  showUnderline,
  className,
  children,
  iconLeft,
  iconRight,
  ...props
}: React.PropsWithChildren<LinkProps>) => {
  return (
    <Typography {...props} asChild className={linkStyles({ color, showUnderline, className })}>
      <RawLink iconLeft={iconLeft} iconRight={iconRight} href={href}>
        {children}
      </RawLink>
    </Typography>
  );
};

export default Link;
