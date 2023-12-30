import React from 'react';
import LastSynced from "../../../layout/LastSynced";
import StyledTable from "../../../ui/styledTable";
import { Box } from "@mui/material";

const tableHeader = [
  "CPID",
  "Time",
  "Command",
  "Payload Data",
  "Unique ID"
];

export default function AllChargerLogs({ChargerLogsData}) {
  return (
    <>
    
    <LastSynced heading="Charging Transactions" showSearchField showFilterButton/>
      <Box sx={{ p: 3 }}>
        <StyledTable
        showActionCell={false}
          headers={tableHeader}
          data={ChargerLogsData}
        
        />
      </Box>
    
    
    </>
  )
}
