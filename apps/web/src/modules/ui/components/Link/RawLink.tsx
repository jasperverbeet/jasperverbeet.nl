import { IconExternalLink } from "@tabler/icons-react";
import type { ButtonContentProps } from "../Button/ButtonContent";
import Link from "next/link";
import ButtonContent from "../Button/ButtonContent";

export interface RawLinkProps extends ButtonContentProps {
  href: string;
}

const RawLink = ({
  href,
  iconRight,
  iconLeft,
  children,
  ...props
}: React.PropsWithChildren<RawLinkProps>) => {
  const isExternal = href.startsWith("http");
  const _iconRight = isExternal ? IconExternalLink : iconRight;

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener" : undefined}
    >
      <ButtonContent {...props} iconLeft={iconLeft} iconRight={_iconRight}>
        {children}
      </ButtonContent>
    </Link>
  );
};

export default RawLink;
