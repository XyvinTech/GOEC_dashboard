import React from "react";
import RouteRenderer from "./core/routes/route-renderer";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/index";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./core/auth/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <RouteRenderer />
        <ToastContainer autoClose={2000} position="bottom-right" />
      </ThemeProvider>
    </AuthProvider>
  );
}
