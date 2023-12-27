import { Box, Stack } from '@mui/material'
import React,{useState} from 'react'
import StyledGroupButton from '../ui/styledGroupButton'
import AllChargeStation from '../components/assetManagement/chargeStations/allChargeStation';
import AddChargingStation from '../components/assetManagement/chargeStations/AddChargingStation';

export default function ChargingStation() {
const [togglePage,setTogglePage] = useState(0);

  const buttonChanged = (e) => {
    console.log(e);
    setTogglePage(e.index)
  }
  return (
    <Box>
      <Stack direction={'row'} sx={{backgroundColor:'secondary.main'}}>
        <StyledGroupButton
         sx={{mx:2}}
         buttons={['All Charge stations', 'Add Charge Station']} onChanged={buttonChanged} />
      </Stack>
      {togglePage === 0 ?
      
      <AllChargeStation />
    :
    <AddChargingStation/>
    }
    </Box>
  )
}
