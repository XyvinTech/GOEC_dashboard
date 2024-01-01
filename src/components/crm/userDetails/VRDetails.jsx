import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import LastSynced from '../../../layout/LastSynced'

const VRCard = () => {
    return (
        <Box sx={{ backgroundColor: '#1D1B20', borderRadius: '24px', p: 3 }}>
            <Grid container padding={3} spacing={2}>
                <Grid item xs={12} md={6}>
                    <img src='https://imgd.aeplcdn.com/227x128/n/cw/ec/47051/compass-exterior-right-front-three-quarter-74.jpeg'
                        style={{ height: '100%',width:"100%",aspectRatio:'2/1', borderRadius: '4px', objectFit: 'cover' }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack direction={'column'} sx={{ justifyContent: 'center' }} spacing={1}>
                        <Typography variant='body1' sx={{ color: 'secondary.contrastText' }}>Jeep</Typography>
                        <Typography variant='h5'>RUBICON</Typography>
                        <Stack direction={'row'}>
                            <Typography variant='body1' sx={{ color: 'secondary.contrastText' }}>Vehicle No:</Typography>
                            <Typography variant='h6'>KL 07 A 6577</Typography>
                        </Stack>
                        <Stack direction={'row'} spacing={1}>
                            <Typography variant='inherit' sx={{ backgroundColor: '#fff3', p: 1, borderRadius: '5px' }}>Type2 CCS</Typography>
                            <Typography variant='inherit' sx={{ backgroundColor: '#fff3', p: 1, borderRadius: '5px' }}>Type2</Typography>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}


export default function VRDetails() {
    return (
        <Box>
            <LastSynced heading={'VR Details'} />
            <Box sx={{ p: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4} lg={6.5}>
                        <VRCard />
                    </Grid>
                    <Grid item xs={12} md={4} lg={6.5}>
                        <VRCard />
                    </Grid>
                </Grid>

            </Box>
        </Box>
    )
}
