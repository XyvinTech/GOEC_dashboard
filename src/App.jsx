import React from "react";
import RouteRenderer from "./core/routes/route-renderer";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/index";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouteRenderer />
    </ThemeProvider>
  );
}
