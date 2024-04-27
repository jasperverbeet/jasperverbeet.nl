import { forwardRef } from "react";
import Button, { type ButtonProps } from "./Button";
import ButtonContent, { type ButtonContentProps } from "./ButtonContent";

export interface ButtonActionProps extends ButtonProps, ButtonContentProps {}

const ButtonAction = forwardRef<HTMLButtonElement, ButtonActionProps>(
  (
    {
      role,
      variant,
      size,
      className,
      iconLeft,
      iconRight,
      stretch,
      children,
      ...props
    }: ButtonActionProps,
    ref,
  ) => {
    return (
      <Button role={role} variant={variant} size={size} className={className} ref={ref} {...props}>
        <ButtonContent iconLeft={iconLeft} iconRight={iconRight} stretch={stretch}>
          {children}
        </ButtonContent>
      </Button>
    );
  },
);

export default ButtonAction;
