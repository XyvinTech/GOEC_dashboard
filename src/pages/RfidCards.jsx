import { Box, Stack } from '@mui/material'
import React, { useState } from 'react'
import StyledGroupButton from "../ui/styledGroupButton";
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
    <Stack direction={"row"} sx={{ backgroundColor: "secondary.main", m: 2 }}>
      <StyledGroupButton
        sx={{ mx: 2 }}
        buttons={["All RFID cards", "Assign RFID"]}
        onChanged={buttonChanged}
      />
    </Stack>
    {togglePage === 0 ? <AllRfidCards /> : <AssignRfid />}
  </Box>
  )
}

export default RfidCards
