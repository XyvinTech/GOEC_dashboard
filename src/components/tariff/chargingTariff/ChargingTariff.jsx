import React from "react";
import StyledButton from "../../../ui/styledButton";
import { Box } from "@mui/material";
import StyledTable from "../../../ui/styledTable";
import LastSynced from "../../../layout/LastSynced";
function ChargingTariff({ data, headers }) {

  return (
    <>
      <LastSynced heading="Charge Stations" />
      <Box sx={{ p: 3 }}>
        <StyledTable headers={headers} data={data} />
      </Box>
    </>
  );
}

export default ChargingTariff;
