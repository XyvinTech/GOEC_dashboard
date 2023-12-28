import React from "react";
import StyledTable from "../../../ui/styledTable";
import LastSynced from "../../../layout/LastSynced";
import { Box } from "@mui/material";
import {evChargerData} from '../../../assets/json/evChargerData'

export default function AllEvChargers() {
  const tableHeader = [
    "Company Name",
    "Model name",
    "Output Type",
    "OCPP Version",
    "Charger Type",
    "Capacity (kW)",
    "Number of Ports",
  ];

  return (
    <>
      <LastSynced heading="EV Chargers" showSearchField={true} />

      <Box sx={{ p: 3 }}>
        <StyledTable headers={tableHeader} data={evChargerData} />
      </Box>
    </>
  );
}
