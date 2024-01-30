import { Box } from "@mui/material";
import React from "react";
import LastSynced from "../../../layout/LastSynced";
import StyledTable from "../../../ui/styledTable";
import { DummyData } from "../../../assets/json/ActiveSessionsData";
const tableHeader = [
  "OCPP Txn ID",
  "User Name",
  "Charge Station Name",
  "Date",
  "CPID",
  "Connector ID",
  "Start Soc",
  "Current Soc",
  "Duration(Min)",
  "Units Consumed(kWh)",
  "Charge Speed(kW)",
  "Last Meter Received",
  "Transaction Mode",
  "Terminate Session",
];
export default function ActiveSession() {
  return (
    <>
      <LastSynced heading="Active Sessions" showSearchField={true} />
      <Box sx={{ p: 3 }}>
        <StyledTable headers={tableHeader} data={DummyData} showActionCell={false} />
      </Box>
    </>
  );
}
