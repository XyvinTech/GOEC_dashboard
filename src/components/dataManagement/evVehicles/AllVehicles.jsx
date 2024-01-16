import React, { useState } from "react";
import StyledTable from "../../../ui/styledTable";
import LastSynced from "../../../layout/LastSynced";
import { Box } from "@mui/material";
import StyledSearchField from "../../../ui/styledSearchField";
import { useNavigate } from 'react-router-dom'
import { tableHeaderReplace } from "../../../utils/tableHeaderReplace";
import { searchAndFilter } from "../../../utils/search";

const tableHeader = [
  "Company Name",
  "Model name",
  "Charger Type",
  "Number of Ports",
];

export default function AllVehicles({data, ...props}) {

  const navigate = useNavigate()
  const [filterValue, setFilterValue] = useState("");
  const VehicleData = tableHeaderReplace(data,['brand','modelName','charger_types','number_of_ports'],tableHeader) 
 
  const tableActionClick = (e) => {
    if (e.action === 'View') {
      navigate('/',{state:e.data})
    }
  }

  return (
    <>
      <LastSynced heading="EV Vehicles" showSearchField={true}>
        
        <StyledSearchField
          placeholder={"Search"}
          onChange={(e) => {
            setFilterValue(e.target.value);
          }}
        />
      </LastSynced>
      <Box sx={{ p: 3 }}>
        <StyledTable headers={tableHeader} data={searchAndFilter(VehicleData)} onActionClick={tableActionClick}/>
      </Box>
    </>
  );
}
