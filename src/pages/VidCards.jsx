import { Box, Stack } from '@mui/material'
import React, { useState } from 'react'
import StyledTab from "../ui/styledTab";
import AllVidCards from '../components/tagManagement/Vid/AllVidCards';
import AssignVid from '../components/tagManagement/Vid/AssignVid';

const VidCards = () => {
    const [togglePage, setTogglePage] = useState(0);

  const buttonChanged = (e) => {
    setTogglePage(e.index);
  };
  return (
     <Box>
      <Stack direction={"row"} sx={{ backgroundColor: "secondary.main" }}>
        <StyledTab
        buttons={['All VID cards', 'Assign VID']} onChanged={buttonChanged} />
      </Stack>
      {togglePage === 0 ? <AllVidCards /> : <AssignVid />}
    </Box>
  )
}

export default VidCards
