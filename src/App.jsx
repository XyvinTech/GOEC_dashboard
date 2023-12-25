import React from "react";
import StyledTable from "./ui/styledTable";
import { DummyData } from "./assets/json/TableData";
import "./App.css";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/index";
import DashboardLayout from "./layout/dashboardLayout";

export default function App() {

  const headers = [
    "OCCP Txn ID",
    "User Name",
    "Charge Station Name" ,
    "status"
  ];



  return (
    <ThemeProvider theme={theme}>
      <DashboardLayout>
        <StyledTable headers={headers} data={DummyData} />
      </DashboardLayout>
    </ThemeProvider>

  );
}
