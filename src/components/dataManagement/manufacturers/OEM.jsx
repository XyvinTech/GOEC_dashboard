import React from 'react'
import StyledTable from "../../../ui/styledTable";
import LastSynced from "../../../layout/LastSynced";
import { Box } from "@mui/material";
import { DummyVehicle } from '../../../assets/json/DummyVehicle';
export default function OEM() {

  const tableHeader = [
    "Company Name",
    "Created On"

  ];

  return (
    <>
    <LastSynced heading="OEM" showSearchField={true} />

    <Box sx={{ p: 3 }}>
      <StyledTable headers={tableHeader} data={DummyVehicle} />
    </Box>
  </>  )
}
