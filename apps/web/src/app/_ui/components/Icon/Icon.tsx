import type { Icon as TablerIcon, IconProps as TablerIconProps } from "@tabler/icons-react";
import { type VariantProps, tv } from "tailwind-variants";

export const iconStyles = tv({
  variants: {
    size: {
      md: "h-4 w-4",
    },
    variant: {
      primary: "text-text-primary",
      secondary: "text-text-secondary",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "primary",
  },
});

export type IconSvgComponent = React.ForwardRefExoticComponent<
  React.SVGProps<SVGSVGElement> & React.RefAttributes<SVGSVGElement>
>;

export type IconProp =
  | React.ForwardRefExoticComponent<Omit<TablerIconProps, "ref"> & React.RefAttributes<TablerIcon>>
  | IconSvgComponent;

export interface IconProps extends VariantProps<typeof iconStyles> {
  icon: IconProp;
  className?: string;
}

const Icon = ({ icon, size, variant, className }: IconProps) => {
  const Comp = icon;

  return <Comp className={iconStyles({ size, variant, className })} stroke={"2.5"} />;
};

export default Icon;
