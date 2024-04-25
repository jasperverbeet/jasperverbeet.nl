import { type VariantProps, tv } from "tailwind-variants";

import Icon, { type IconProp } from "../Icon/Icon";

export const buttonContentStyles = tv({
  slots: {
    wrapper: "flex w-full items-center justify-center",
    leftFiller: "flex-shrink flex-grow basis-0",
    iconLeft: null,
    iconRight: "flex flex-shrink-0 flex-grow basis-0 justify-end",
  },
  variants: {
    size: {
      md: {
        iconLeft: "mr-1.5",
        iconRight: "ml-1.5",
      },
      lg: {
        iconLeft: "mr-2",
        iconRight: "ml-2",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface ButtonContentProps
  extends VariantProps<typeof buttonContentStyles>,
    React.PropsWithChildren {
  asChild?: boolean;
  className?: string;
  iconLeft?: IconProp;
  iconRight?: IconProp;
}

const {
  wrapper,
  leftFiller,
  iconLeft: iconLeftStyles,
  iconRight: iconRightStyles,
} = buttonContentStyles();

const ButtonContent = ({
  size,
  iconLeft,
  iconRight,

  className,
  children,
}: ButtonContentProps) => {
  return (
    <span className={wrapper({ className })}>
      {iconRight && <span className={leftFiller()} />}

      {iconLeft && <Icon className={iconLeftStyles({ size })} icon={iconLeft} />}

      {children}

      {iconRight && (
        <span
          className={iconRightStyles({
            size,
          })}
        >
          <Icon icon={iconRight} />
        </span>
      )}
    </span>
  );
};

export default ButtonContent;
