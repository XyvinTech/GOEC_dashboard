import { Box, Stack } from '@mui/material'
import React,{useState} from 'react'
import StyledTab from '../ui/styledTab'

import AddVehicles from '../components/dataManagement/evVehicles/AddVehicles'
import AllVehicles from '../components/dataManagement/evVehicles/AllVehicles'

export default function Vehicles() {
    const [togglePage, setTogglePage] = useState(0);
  
    const buttonChanged = (e) => {
      console.log(e);
      setTogglePage(e.index);
    };
    return (
      <Box>
        <Stack direction={"row"} sx={{ backgroundColor: "secondary.main" }}>
          <StyledTab
           buttons={['All EV chargers', 'Add EV charger']} onChanged={buttonChanged} />
        </Stack>
        {togglePage === 0 ? <AllVehicles /> : <AddVehicles />}
      </Box>
    );
  }
  