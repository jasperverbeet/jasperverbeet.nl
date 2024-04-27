import { IconExternalLink } from "@tabler/icons-react";
import type { ButtonContentProps } from "../Button/ButtonContent";
import Link from "next/link";
import ButtonContent from "../Button/ButtonContent";
import { forwardRef } from "react";

export interface RawLinkProps extends ButtonContentProps {
  href: string;
}

const RawLink = forwardRef<HTMLAnchorElement, RawLinkProps>(
  (
    {
      href,
      iconLeft,
      iconLeftVariant,
      iconRight,
      iconRightVariant,
      children,
      ...props
    }: RawLinkProps,
    ref,
  ) => {
    const isExternal = href.startsWith("http");
    const _iconRight = isExternal ? IconExternalLink : iconRight;

    return (
      <Link href={href} ref={ref}>
        <ButtonContent
          {...props}
          iconLeft={iconLeft}
          iconRight={_iconRight}
          iconLeftVariant={iconLeftVariant}
          iconRightVariant={iconRightVariant}
        >
          {children}
        </ButtonContent>
      </Link>
    );
  },
);

export default RawLink;
