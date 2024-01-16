import React, { useState } from "react";
import StyledTable from "../../../ui/styledTable";
import LastSynced from "../../../layout/LastSynced";
import { Box } from "@mui/material";
import { tableHeaderReplace } from "../../../utils/tableHeaderReplace";
import { useNavigate } from "react-router-dom";

const tableHeader = [
  "Company Name",
  "Model name",
  "Output Type",
  "OCPP Version",
  "Charger Type",
  "Capacity (kW)",
  "Number of Ports",
];
export default function AllEvChargers({data}) {

  const navigate = useNavigate()

  const [filterValue, setFilterValue] = useState("");
  const evChargerData = tableHeaderReplace(data,['oem','modelName','output_type','ocpp_version','charger_type','capacity','no_of_ports'],tableHeader) 
  const tableActionClick = (e) => {
    if (e.action === 'View') {
      navigate('/',{state:e.data})
    }
  }

  return (
    <>
      <LastSynced heading="EV Chargers" showSearchField={true} />

      <Box sx={{ p: 3 }}>
        <StyledTable headers={tableHeader} data={evChargerData} onActionClick={tableActionClick} />
      </Box>
    </>
  );
}
