import { Avatar, Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function CustomerCard({ data, ...props }) {
  const navigate = useNavigate();
  return (
    <Stack direction={'column'} spacing={4} sx={{ alignItems: 'center', backgroundColor: 'secondary.main', borderRadius: '6px', p: 2 }}>
      <Box>
        <Avatar sx={{ width: 100, height: 100, backgroundColor: 'secondary.button' }} />
      </Box>
      <Stack direction={'column'} spacing={1} sx={{alignItems:'center'}}>
        <Typography variant='h6'>{data.username}</Typography>
        <Typography>{data.mobile}</Typography>
        <Typography>{data.email}</Typography>
      </Stack>
      <Box 
      sx={{ backgroundColor: 'secondary.button', borderRadius: '30px', py:1.5 ,px:4,mt:3, display: 'flex', justifyContent: 'center',cursor:'pointer' }}
      onClick={()=>{navigate(`/user-details/${data._id}`, {state:data._id});}}>
        <Typography variant='h6'>View Profile</Typography>
      </Box>
    </Stack>
  )
}
