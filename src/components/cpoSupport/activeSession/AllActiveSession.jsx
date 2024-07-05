import { Box } from "@mui/material";
import React from "react";
import LastSynced from "../../../layout/LastSynced";
import StyledTable from "../../../ui/styledTable";
import { DummyData } from "../../../assets/json/ActiveSessionsData";
export default function ActiveSession({data, tableHeader, dataReload}) {
  return (
    <>
      <LastSynced heading="Active Sessions" showSearchField={true} reloadHandle={dataReload}/>
      <Box sx={{ p: 3 }}>
        <StyledTable headers={tableHeader} data={data} showActionCell={false} />
      </Box>
    </>
  );
}
