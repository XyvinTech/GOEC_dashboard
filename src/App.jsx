import React from "react";
import StyledTable from "./ui/styledTable";

import "./App.css";
import { ThemeProvider } from '@mui/material/styles'
import {theme} from './theme/index'
import Sidebar from "./layout/sidebar";
import { DashboardNavbar } from "./layout/navbar";
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
    {/* <div> */}
      <Sidebar />
      <DashboardNavbar/>
      <StyledTable headers={headers} data={data} />
      {/* <br/>
      <StyledButton background={bgcolor}>Sign in</StyledButton>
      <br/>
      <StyledButton background={bgcolor2} border="2px solid var(--White-20, rgba(255, 255, 255, 0.20));">Sign in</StyledButton>
      <br/>
      <InputWithIcon
        icon={<SmsIcon  />} 
        placeholder="Enter your email"
      />
      <br/>
      <InputWithIcon
        icon={<LockIcon  />} 
        placeholder="Enter your password"
        iconright={<EyeIcon  />} 
      />
    </div> */}
    </ThemeProvider>
  )
}
