import { Avatar, Box, Stack, Typography } from '@mui/material'
import React from 'react'

export default function CustomerCard({ data, ...props }) {
  return (
    <Stack direction={'column'} spacing={4} sx={{ alignItems: 'center', backgroundColor: 'secondary.main', borderRadius: '6px', p: 3 }}>
      <Box>
        <Avatar sx={{ width: 100, height: 100, backgroundColor: 'secondary.button' }} />
      </Box>
      <Stack direction={'column'} spacing={1} sx={{alignItems:'center'}}>
        <Typography variant='h6'>{data.name}</Typography>
        <Typography>{data.name}</Typography>
        <Typography>{data.name}</Typography>
      </Stack>
      <Box sx={{ backgroundColor: 'secondary.button', borderRadius: '30px', py:1.5 ,px:4,mt:3, display: 'flex', justifyContent: 'center' }}>
        <Typography variant='h6'>View Profile</Typography>
      </Box>
    </Stack>
  )
}
