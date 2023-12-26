import { Star, CalendarMonth, AccessTime } from '@mui/icons-material'
import { Box, Chip, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

export default function StationDetail() {
  return (
    <Box
      sx={{ p: 5, backgroundColor: 'secondary.main' }}>
      <Grid container>
        <Grid item xs={3}>
          <img src='https://www.te.com/content/dam/te-com/images/industrial/global/story-hero-rendition/ind-ev-charging-vk-1024x400.jpg/jcr:content/renditions/promo-large.jpg'
            height={'188px'}
            width={'188px'}
            style={{ objectFit: 'cover', borderRadius: '5px' }} />
        </Grid>
        <Grid item sx={{ ml: '20px' }} xs={8}>
          <Stack direction={'column'}>
            <Stack direction={'row'} sx={{ color: '#F2994A', backgroundColor: '#FFFAEA', borderRadius: '15px', width: '67px', justifyContent: 'center' }}>
              <Star />
              <Typography>{4.5}</Typography>
            </Stack>
            <Stack direction={'column'} spacing={'8px'} sx={{ mt: 2 }}>
              <Typography variant='h6'>Oberon Mall, Ernakulam</Typography>
              <Typography variant='subtitle2' sx={{ color: 'secondary.contrastText' }}>NH Bypass Edapally (P.O.) Kochi Kochi Kerala - 682024</Typography>
              <Stack direction={'row'} spacing={'12px'}>
                {['FOCO', 'ON THE GO'].map((item) => (
                  <Chip sx={{ backgroundColor: 'primary.subButton', color: 'primary.contrastText' }} label={item} />
                ))
                }
              </Stack>
              <Stack direction={'row'} spacing={1} sx={{ alignItems: 'center' }}>
                <Typography variant='subtitle2' sx={{ color: 'primary.DimText' }}>Commissioned on :</Typography>
                <CalendarMonth sx={{ color: 'secondary.contrastText', fontSize: '20px' }} />
                <Typography variant='subtitle1' sx={{ color: 'secondary.contrastText' }}>22 Jun 22</Typography>
              </Stack>
              <Stack direction={'row'} spacing={1} sx={{ alignItems: 'center' }}>
                <Typography variant='subtitle2' sx={{ color: 'primary.DimText' }}>Operation between :</Typography>
                <AccessTime sx={{ color: 'secondary.contrastText', fontSize: '20px' }} />
                <Typography variant='subtitle1' sx={{ color: 'secondary.contrastText' }}>4:67 PM</Typography>
                <Typography variant='subtitle2' sx={{ color: 'primary.DimText' }}>to</Typography>
                <AccessTime sx={{ color: 'secondary.contrastText', fontSize: '20px' }} />
                <Typography variant='subtitle1' sx={{ color: 'secondary.contrastText' }}>4:67 PM</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}
