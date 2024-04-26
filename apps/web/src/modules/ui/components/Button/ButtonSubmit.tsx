"use client";

import { IconArrowRight } from "@tabler/icons-react";
import { useFormStatus } from "react-dom";

import ButtonAction, { type ButtonActionProps } from "./ButtonAction";
import IconSpinner from "../Icon/IconSpinner";

export interface ButtonSubmitProps extends Omit<ButtonActionProps, "type"> {}

const ButtonSubmit = ({ children, ...props }: ButtonSubmitProps) => {
  const { pending } = useFormStatus();

  return (
    <ButtonAction
      iconRight={IconArrowRight}
      iconLeft={pending ? IconSpinner : undefined}
      {...props}
      type="submit"
    >
      {children}
    </ButtonAction>
  );
};

export default ButtonSubmit;
