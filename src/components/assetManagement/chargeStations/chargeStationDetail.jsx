import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import StationDetail from './chargeStationDetail/stationDetail'
import OwnerDetail from './chargeStationDetail/ownerDetail'
import Analytics from './chargeStationDetail/analytics'
import { Stack } from '@mui/system'
import { ArrowBackIosNew } from '@mui/icons-material'
import StyledTab from '../../../ui/styledTab'
import ChargePoints from './chargeStationDetail/chargePoints'
import Reviews from './chargeStationDetail/reviews'

export default function ChargeStationDetail() {
    const [toggleOption, setToggleoption] = useState(0)
    const onChangeToggleOption = (e) => {
        setToggleoption(e.index)
    }
    return (
        <><Stack direction={'row'} sx={{ backgroundColor: 'secondary.main', p: 3 }} spacing={2}>
            <ArrowBackIosNew sx={{ cursor: 'pointer' }}  />
            <Typography variant='h6' color={'secondary.contrastText'}>Charge Station Details</Typography></Stack>
            <Box sx={{ p: { xs: 1, md: 4 } }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={12} lg={6}>
                        <StationDetail />
                    </Grid>
                    <Grid item xs={12} md={12} lg={6}>
                        <Stack direction={'column'} spacing={2}>
                            <OwnerDetail />
                            <Analytics />
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
            <StyledTab buttons={['Charge-points', 'Reviews']} onChanged={onChangeToggleOption} />
            {toggleOption===0 ? <ChargePoints/>:<Reviews/>}
        </>
    )
}

