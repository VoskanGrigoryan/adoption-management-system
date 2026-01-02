import React from "react";
import { Paper as MantinePaper, PaperProps } from "@mantine/core";

interface PaperComponentProps extends PaperProps {
  children?: React.ReactNode;
}

export const Paper = ({ children, ...props }: PaperComponentProps) => {
  return (
    <MantinePaper
      {...props}
      styles={{
        root: {
          backgroundColor: "var(--mantine-color-dark-7)",
          border: "1px solid var(--mantine-color-dark-5)",
        },
      }}
    >
      {children}
    </MantinePaper>
  );
};

export default Paper;
