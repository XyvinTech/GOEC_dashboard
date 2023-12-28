import { Stack, Typography } from '@mui/material'
import React from 'react'

export default function ConfigCP({label,value, ...props}) {
  return (
    <Stack direction={'row'} sx={{backgroundColor:'secondary.lightGray',p:2,justifyContent:'space-between',borderRadius:'4px'}}>
        <Typography>{label}</Typography>
        {value !== '' ? <Typography>{value}</Typography> : '-' }
    </Stack>
  )
}
