import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@mantine/core/styles.css";
import App from "./App.tsx";
import { MantineProvider } from "@mantine/core";
import { backofficeTheme } from "@repo/ui-theme";

const theme = {
  ...backofficeTheme,
  colors: {
    ...backofficeTheme.colors,
    primary: (backofficeTheme.colors as any).indigo,
  },
  primaryColor: "primary",
  components: {
    Button: {
      defaultProps: {
        color: "primary",
        variant: "filled",
      },
    },
  },
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </StrictMode>
);
