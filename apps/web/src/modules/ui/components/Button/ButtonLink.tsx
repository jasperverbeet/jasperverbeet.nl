import Button, { type ButtonProps } from "./Button";
import RawLink, { type RawLinkProps } from "../Link/RawLink";

export interface ButtonActionProps extends ButtonProps, RawLinkProps {}

const ButtonAction = ({
  role,
  variant,
  size,
  asChild,
  className,
  children,
  ...props
}: ButtonActionProps) => {
  return (
    <Button role={role} variant={variant} size={size} className={className} {...props} asChild>
      <RawLink {...props}>{children}</RawLink>
    </Button>
  );
};

export default ButtonAction;
