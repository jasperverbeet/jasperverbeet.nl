import Typography, { type TypographyProps } from "../Typography/Typography";
import { type VariantProps, tv } from "tailwind-variants";
import type { RawLinkProps } from "./RawLink";
import RawLink from "./RawLink";

export const linkStyles = tv({
  base: "hover:underline underline-offset-2",
  variants: {
    color: {
      brand: "text-text-brand hover:text-text-brand-hover active:text-text-brand-active",
      primary: "text-text-primary hover:text-text-primary-hover active:text-text-primary-active",
      secondary:
        "text-text-secondary hover:text-text-secondary-hover active:text-text-secondary-active",
    },
    showUnderline: {
      true: "underline",
      false: "",
    },
  },
  defaultVariants: {
    color: "brand",
    showUnderline: false,
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
  iconLeftVariant,
  iconRight,
  iconRightVariant,
  ...props
}: React.PropsWithChildren<LinkProps>) => {
  return (
    <Typography {...props} asChild className={linkStyles({ color, showUnderline, className })}>
      <RawLink
        iconLeft={iconLeft}
        iconRight={iconRight}
        href={href}
        iconLeftVariant={iconLeftVariant}
        iconRightVariant={iconRightVariant}
      >
        {children}
      </RawLink>
    </Typography>
  );
};

export default Link;
