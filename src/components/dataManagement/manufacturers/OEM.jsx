import React, { useState } from 'react'
import StyledTable from "../../../ui/styledTable";
import LastSynced from "../../../layout/LastSynced";
import { Box } from "@mui/material";
import { DummyVehicle } from '../../../assets/json/DummyVehicle';
import StyledSearchField from '../../../ui/styledSearchField';
import StyledButton from '../../../ui/styledButton';
import { Height } from '@mui/icons-material';
import { searchAndFilter } from '../../../utils/search';
import AddOEM from './addOEM/AddOEM';
import { tableHeaderReplace } from '../../../utils/tableHeaderReplace';


const tableHeader = [
  "Company Name",
  "Created On"
];




export default function OEM({data}) {
  const [open,setOpen] = useState(false)
  const [filterValue, setFilterValue] = useState('')
  const oemData = tableHeaderReplace(data,['name','createdAt'],tableHeader) 



  return (
    <>
    <AddOEM open={open} onClose={()=>{setOpen(false)}}/>
      <LastSynced heading="OEM"  >
        <StyledSearchField placeholder={"Search"} onChange={(e) => {
          setFilterValue(e.target.value)
        }}/>
        <StyledButton variant={'primary'} style={{ width: '100%',minWidth:'160px' }}  onClick={()=>{setOpen(true)}}>Add</StyledButton>
      </LastSynced>

      <Box sx={{ p: 3 }}>
        <StyledTable headers={tableHeader} data={oemData} />
      </Box>
    </>)
}
