import { Box, Stack } from '@mui/material'
import React from 'react'
import StyledGroupButton from '../ui/styledGroupButton'
import AllChargeStation from '../components/assetManagement/chargingStations/allChargeStation';

export default function ChargingStation() {
  const buttonChanged = (e) => {
    console.log(e);
  }
  return (
    <Box>
      <StyledGroupButton
        buttons={['All Chargepoints', 'Add chargepoints']} 
        onChanged={buttonChanged} />
      <AllChargeStation />
    </Box>
  )
}
