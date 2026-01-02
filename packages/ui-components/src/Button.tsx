import React from "react";
import { Button as MantineButton, ButtonProps } from "@mantine/core";

export const Button: React.FC<ButtonProps> = (props) => {
  return <MantineButton {...props} />;
};

export default Button;
