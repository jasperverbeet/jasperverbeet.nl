import Button, { type ButtonProps } from "./Button";
import ButtonContent, { type ButtonContentProps } from "./ButtonContent";

export interface ButtonActionProps extends ButtonProps, ButtonContentProps {}

const ButtonAction = ({
  role,
  variant,
  size,
  className,
  iconLeft,
  iconRight,
  children,
  ...props
}: ButtonActionProps) => {
  return (
    <Button role={role} variant={variant} size={size} className={className} {...props}>
      <ButtonContent iconLeft={iconLeft} iconRight={iconRight}>
        {children}
      </ButtonContent>
    </Button>
  );
};

export default ButtonAction;
