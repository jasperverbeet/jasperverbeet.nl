import Button, { type ButtonProps } from "./Button";
import RawLink, { type RawLinkProps } from "../Link/RawLink";
import { forwardRef } from "react";

export interface ButtonLinkProps extends ButtonProps, RawLinkProps {}

const ButtonLink = forwardRef<HTMLButtonElement, ButtonLinkProps>(
  ({ role, variant, size, asChild, className, children, ...props }: ButtonLinkProps, ref) => {
    return (
      <Button ref={ref} role={role} variant={variant} size={size} className={className} asChild>
        <RawLink {...props}>{children}</RawLink>
      </Button>
    );
  },
);

export default ButtonLink;
