import React from "react";
import { Paper as MantinePaper, PaperProps } from "@mantine/core";

export const Paper: React.FC<PaperProps> = (props) => {
  return <MantinePaper {...props} />;
};

export default Paper;
