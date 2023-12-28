import { Box, Stack } from '@mui/material'
import React,{useState} from 'react'
import StyledTab from '../ui/styledTab'
import AllEvChargers from '../components/dataManagement/evChargers/AllEvChargers';
import AddEvCharger from '../components/dataManagement/evChargers/AddEvCharger';



export default function EvChargers() {
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
      {togglePage === 0 ? <AllEvChargers /> : <AddEvCharger />}
    </Box>
  );
}
