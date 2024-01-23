import React from 'react'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { ReactComponent as ReloadIcon } from '../../../../assets/icons/reload.svg'
import { Star, DeleteOutline } from '@mui/icons-material'
import LastSynced from '../../../../layout/LastSynced'


const ReviewComponent = ({ review, deleteClickHandle }) => {
  return (
    <Box sx={{ p: 1 }}>
      <Stack direction={'column'} spacing={1}>
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Stack direction={'row'} alignItems={'center'} spacing={1}>
            <Typography color={'primary.contrastText'}>{review.userDetails[0].username}</Typography>
            <Stack direction={'row'}>
              {[ ...Array(review.rating) ].map((item) => (
                <Star fontSize='14px' sx={{ color: '#F2C94C' }} />
              ))}
            </Stack>
          </Stack>
          <DeleteOutline sx={{ cursor: 'pointer', color: 'rgba(255,255,255,0.5)', fontSize: '22px' }} onClick={deleteClickHandle}/>
        </Stack>
        <Typography variant='subtitle2' sx={{ fontWeight: 300, color: 'secondary.contrastText' }}>
          {review.comment}
        </Typography>
        <Typography variant='subtitle2' sx={{ color: 'rgba(255, 255, 255, 0.50)', fontSize: '12px', fontWeight: 300 }}>22.03.22</Typography>
      </Stack>
    </Box>
  )
}

export default function Reviews({ data,deleteClickHandle, ...props }) {
  return (
    <>
    <LastSynced heading={'Reviews'} />
      <Box sx={{ backgroundColor: 'secondary.main', /*maxHeight: {xs:'1000px',md:'500px'},*/ borderRadius: '4px', m: { xs: 1, md: 4 }, p: 2 }}>
        <Grid container spacing={{ xs: 1, md: 4 }}>
          {
            data.map((item) => (
              <Grid item xs={12} md={4}>
                <ReviewComponent review={item} deleteClickHandle={()=>{deleteClickHandle(item)}}/>
              </Grid>
            ))
          }
        </Grid>

      </Box>
    </>
  )
}
