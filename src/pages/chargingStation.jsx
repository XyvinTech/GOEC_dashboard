import { Box } from '@mui/material'
import React from 'react'
import StyledGroupButton from '../ui/styledGroupButton'

export default function ChargingStation() {
  return (
    <Box>
      <StyledGroupButton buttons={['button1','button2']}/>
    </Box>
  )
}
