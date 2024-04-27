import { forwardRef } from "react";
import * as Toggle from "@radix-ui/react-toggle";
import Button from "./Button";

const ButtonToggle = forwardRef<HTMLButtonElement, Toggle.ToggleProps>(
  ({ children, asChild, ...props }, ref) => {
    return (
      <Toggle.Root {...props} ref={ref} asChild>
        <Button asChild={asChild}>{children}</Button>
      </Toggle.Root>
    );
  },
);

export default ButtonToggle;
