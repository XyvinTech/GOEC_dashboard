import React from "react";
import StyledTable from "./ui/styledTable";

import "./App.css";
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './theme/index'
import DashboardLayout from "./layout/dashboardLayout";

export default function App() {

  // Example usage of DynamicTable
  const headers = ['OCCP Txn ID', 'User Name', 'Charge Station Name', /* ... more headers */];

  const data = [
    {
      'OCCP Txn ID': '23202911',
      'User Name': 'Avinash Nazeer',
      'Charge Station Name': 'GOEC Jansons Orchard Inn',
      // ... more key-value pairs for each row
    },
    {
      'OCCP Txn ID': '23202911',
      'User Name': 'Avinash Nazeer',
      'Charge Station Name': 'GOEC Jansons Orchard Inn',
      // ... more key-value pairs for each row
    },
    {
      'OCCP Txn ID': '23202911',
      'User Name': 'Avinash Nazeer',
      'Charge Station Name': 'GOEC Jansons Orchard Inn',
      // ... more key-value pairs for each row
    },
    // ... more rows
  ];

  return (

    <ThemeProvider theme={theme}>
      <DashboardLayout>
        <StyledTable headers={headers} data={data} />
      </DashboardLayout>
    </ThemeProvider>
  )
}
