import React from 'react';
import LastSynced from "../../../layout/LastSynced";
import StyledTable from "../../../ui/styledTable";
import { Box } from "@mui/material";
import { tableHeaderReplace } from '../../../utils/tableHeaderReplace';

const tableHeader = [
  "CPID",
  "Time",
  "Command",
  "Payload Data",
  "Unique ID"
];

export default function AllChargerLogs({ data, updateData }) {

  const AllLogsData = tableHeaderReplace(data, ['CPID', 'timestamp', 'messageType', 'payload', '_id'], tableHeader)



  return (
    <>

      <LastSynced heading="Charger Logs" showSearchField showFilterButton reloadHandle={updateData} />
      <Box sx={{ p: 3 }}>
        <StyledTable
          showActionCell={false}
          headers={tableHeader}
          data={AllLogsData}
        />
      </Box>


    </>
  )
}
