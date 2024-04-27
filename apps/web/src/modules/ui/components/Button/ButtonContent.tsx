import { type VariantProps, tv } from "tailwind-variants";

import Icon, { type IconProps, type IconProp } from "../Icon/Icon";

export const buttonContentStyles = tv({
  slots: {
    wrapper: "inline-flex items-center justify-center flex-grow",
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
  className?: string;
  stretch?: boolean;
  iconLeft?: IconProp;
  iconLeftVariant?: IconProps["variant"];
  iconRight?: IconProp;
  iconRightVariant?: IconProps["variant"];
}

const {
  wrapper,
  leftFiller,
  iconLeft: iconLeftStyles,
  iconRight: iconRightStyles,
} = buttonContentStyles();

const ButtonContent = ({
  size,
  stretch = false,
  iconLeft,
  iconLeftVariant,
  iconRight,
  iconRightVariant,
  className,
  children,
}: ButtonContentProps) => {
  return (
    <span className={wrapper({ className })}>
      {iconRight && !stretch && <span className={leftFiller()} />}

      {iconLeft && (
        <Icon className={iconLeftStyles({ size })} icon={iconLeft} variant={iconLeftVariant} />
      )}

      {children}

      {iconRight && (
        <span
          className={iconRightStyles({
            size,
          })}
        >
          <Icon icon={iconRight} variant={iconRightVariant} />
        </span>
      )}
    </span>
  );
};

export default ButtonContent;
