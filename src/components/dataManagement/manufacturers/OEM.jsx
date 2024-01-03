import React, { useState } from 'react'
import StyledTable from "../../../ui/styledTable";
import LastSynced from "../../../layout/LastSynced";
import { Box } from "@mui/material";
import { DummyVehicle } from '../../../assets/json/DummyVehicle';
import StyledSearchField from '../../../ui/styledSearchField';
import StyledButton from '../../../ui/styledButton';
import { Height } from '@mui/icons-material';
import { searchAndFilter } from '../../../utils/search';
export default function OEM() {
  const [filterValue, setFilterValue] = useState('')

  const tableHeader = [
    "Company Name",
    "Created On"
  ];

  return (
    <>
      <LastSynced heading="OEM"  >
        <StyledSearchField placeholder={"Search"} onChange={(e) => {
          setFilterValue(e.target.value)
        }}/>
        <StyledButton variant={'primary'} style={{ width: '100%',minWidth:'160px' }}>Add</StyledButton>
      </LastSynced>

      <Box sx={{ p: 3 }}>
        <StyledTable headers={tableHeader} data={searchAndFilter(DummyVehicle, filterValue)} />
      </Box>
    </>)
}
