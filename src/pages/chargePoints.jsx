import { Box, Stack } from '@mui/material'
import React,{useState} from 'react'
import StyledTab from '../ui/styledTab'

import AddChargingStation from '../components/assetManagement/chargeStations/AddChargingStation';
import AllChargePoint from '../components/assetManagement/chargePoints/allChargePoint';
import AddChargePoint from '../components/assetManagement/chargePoints/AddChargePoint';
export default function ChargingPoints() {
const [togglePage,setTogglePage] = useState(0);

  const buttonChanged = (e) => {
    console.log(e);
    setTogglePage(e.index)
  }
  return (
    <Box>
      <Stack direction={'row'} sx={{backgroundColor:'secondary.main'}}>
        <StyledTab
         buttons={['All Chargepoints', 'Add chargepoints']} onChanged={buttonChanged} />
      </Stack>
      {togglePage === 0 ?
      
      <AllChargePoint />
    :
    <AddChargePoint/>
    }
    </Box>
  )
}