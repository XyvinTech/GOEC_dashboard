import React from 'react'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { ReactComponent as ReloadIcon } from '../../../../assets/icons/reload.svg'
import { Star, DeleteOutline } from '@mui/icons-material'


const ReviewComponent = () => {
  return (
    <Box sx={{p:1}}>
      <Stack direction={'column'} spacing={1}>
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Stack direction={'row'} alignItems={'center'} spacing={1}>
            <Typography color={'primary.contrastText'}>Name</Typography>
            <Stack direction={'row'}>
              {[1, 2, 3, 4, 5].map((item) => (
                <Star fontSize='14px' sx={{ color: '#F2C94C' }} />
              ))}
            </Stack>
          </Stack>
          <DeleteOutline sx={{cursor:'pointer',color:'rgba(255,255,255,0.5)',fontSize:'22px'}} />
        </Stack>
        <Typography variant='subtitle2' sx={{ fontWeight: 300,color:'secondary.contrastText' }}>
          Lorem ipsum dolor sit amet consectetur. Adipiscing mauris urna nisl aliquam nibh. Et elementum dignissim dictum nunc quis consequat tristique vulputate. A et odio varius et viverra dis risus.
        </Typography>
        <Typography variant='subtitle2' sx={{color:'rgba(255, 255, 255, 0.50)',fontSize:'12px', fontWeight:300}}>22.03.22</Typography>
      </Stack>
    </Box>
  )
}

export default function Reviews() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'primary.grey',
          p: 2,
        }}>
        <Stack direction={'column'} sx={{ ml: 2 }} >
          <Typography variant='body1' sx={{ color: 'secondary.contrastText' }}>Charge-points</Typography>
          <Stack direction={'row'} spacing={1}>
            <Typography sx={{ color: 'secondary.greytext', fontSize: 12 }}>Last synced</Typography>
            <Typography sx={{ color: 'success.main', fontSize: 12 }}>4 minutes ago</Typography>
            <ReloadIcon style={{ cursor: 'pointer' }} />
          </Stack>
        </Stack>
        <Box sx={{ flexGrow: 1 }} />
      </Box>
      <Box sx={{ backgroundColor: 'secondary.main', /*maxHeight: {xs:'1000px',md:'500px'},*/ borderRadius: '4px', m: {xs:1,md:4}, p: 2 }}>
        <Grid container spacing={{xs:1,md:3}}>
          {
            [1, 2, 3, 4, 5].map((item) => (
              <Grid item XS={12} md={4}>
                <ReviewComponent />
              </Grid>
            ))
          }
        </Grid>

      </Box>
    </>
  )
}
