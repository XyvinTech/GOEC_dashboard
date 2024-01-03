import React, { useState } from 'react'
import StyledTable from "../../../ui/styledTable";
import LastSynced from "../../../layout/LastSynced";
import { Box } from "@mui/material";
import { DummyVehicle } from '../../../assets/json/DummyVehicle';
import StyledSearchField from '../../../ui/styledSearchField';
import StyledButton from '../../../ui/styledButton';
import { searchAndFilter } from '../../../utils/search';
import AddVehicle from './addVehicle/AddVehicle';
export default function Vehicles() {
  const [open,setOpen] = useState(false)
  const [filterValue, setFilterValue] = useState('')

  const tableHeader = [
    "Company Name",
    "Created On"
  ];

  return (
    <>
    <AddVehicle open={open} onClose={()=>{setOpen(false)}}/>
    <LastSynced heading="Vehicle" >
      <StyledSearchField placeholder={"Search"} onChange={(e) => {
          setFilterValue(e.target.value)
        }}/>
      <StyledButton variant={'primary'} style={{ width: '100%',minWidth:'160px' }} onClick={()=>{setOpen(true)}}>Add</StyledButton>
    </LastSynced>

    <Box sx={{ p: 3 }}>
      <StyledTable headers={tableHeader} data={searchAndFilter(DummyVehicle, filterValue)} />
    </Box>
  </>  )
}
