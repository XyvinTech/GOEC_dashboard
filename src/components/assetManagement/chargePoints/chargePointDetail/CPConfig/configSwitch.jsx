import { Stack, Typography } from '@mui/material'
import React from 'react'
import StyledSwitch from '../../../../../ui/styledSwitch'

export default function ConfigSwitch({label}) {
  return (
    <Stack direction={'row'} sx={{backgroundColor:'secondary.lightGray',justifyContent:'space-between',p:2,borderRadius:'4px'}}>
        <Typography>{label}</Typography>
        <StyledSwitch/>
    </Stack>
  )
}