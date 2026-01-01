import { MantineThemeOverride } from "@mantine/core";

export const baseTheme: MantineThemeOverride = {
  fontFamily: "Inter, system-ui, sans-serif",
};

export const publicTheme = {
  ...baseTheme,
  primaryColor: "brand",
  colors: {
    brand: [
      "#E6F2EF",
      "#CFE7E1",
      "#B8DCD4",
      "#8FC9BF",
      "#5FB2A7",
      "#3C9A8E",
      "#2C7A7B",
      "#256C6D",
      "#1E5B5C",
      "#174748",
    ],
    gold: [
      "#FFF9DB",
      "#FFF3BF",
      "#FFEC99",
      "#FFE066",
      "#FFD43B",
      "#FCC419",
      "#FAB005",
      "#F59F00",
      "#F08C00",
      "#E67700",
    ],
  },
} as MantineThemeOverride;

export const backofficeTheme = {
  ...baseTheme,
  primaryColor: "indigo",
  colors: {
    indigo: [
      "#EEF2FF",
      "#E0E7FF",
      "#C7D2FE",
      "#A5B4FC",
      "#818CF8",
      "#6366F1",
      "#4338CA",
      "#3730A3",
      "#312E81",
      "#1E1B4B",
    ],
  },
} as MantineThemeOverride;
