import React from "react";
import LastSynced from "../../../layout/LastSynced";
import { Box } from "@mui/material";
import StyledTable from "../../../ui/styledTable";

export default function AdminActivity({ data, headers }) {
  return (
    <>
      <LastSynced heading="Admin Activity" showSearchField={true} />
      <Box sx={{ p: 3 }}>
        <StyledTable headers={headers} data={data} showActionCell={false}/>
      </Box>
    </>
  );
}
