import { HTMLProps } from "react";

export type ButtonProps = Omit<HTMLProps<HTMLButtonElement>, "type"> & {
  route?: string;
  buttonText: string;
  type?: "button" | "submit" | "reset";
};
