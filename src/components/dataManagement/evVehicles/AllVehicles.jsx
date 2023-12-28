import React from "react";
import StyledTable from "../../../ui/styledTable";
import LastSynced from "../../../layout/LastSynced";
import { Box } from "@mui/material";
import { VehicleData } from "../../../assets/json/vehicleData";

export default function AllVehicles() {
  const tableHeader = [
    "Company Name",
    "Model name",
    "Charger Type",
    "Number of Ports",
  ];

  return (
    <>
      <LastSynced heading="EV Vehicles" showSearchField={true} />

      <Box sx={{ p: 3 }}>
        <StyledTable headers={tableHeader} data={VehicleData} />
      </Box>
    </>
  );
}
