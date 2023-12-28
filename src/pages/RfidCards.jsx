import { Box, Stack } from '@mui/material'
import React, { useState } from 'react'
import StyledTab from "../ui/styledTab";
import AllRfidCards from '../components/tagManagement/Rfid/AllRfidCards';
import AssignRfid from '../components/tagManagement/Rfid/AssignRfid';

const RfidCards = () => {
    const [togglePage, setTogglePage] = useState(0);

  const buttonChanged = (e) => {
    console.log(e);
    setTogglePage(e.index);
  };
  return (
    <Box>
      <Stack direction={"row"} sx={{ backgroundColor: "secondary.main" }}>
        <StyledTab
        buttons={["All RFID cards", "Assign RFID"]}
        onChanged={buttonChanged}
      />
    </Stack>
    {togglePage === 0 ? <AllRfidCards /> : <AssignRfid />}
  </Box>
  )
}

export default RfidCards
