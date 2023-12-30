import { Box, Container, Grid, Typography, IconButton } from '@mui/material'
import React, { useState } from 'react'
import StationDetail from './chargeStationDetail/stationDetail'
import OwnerDetail from './chargeStationDetail/ownerDetail'
import Analytics from './chargeStationDetail/analytics'
import { Stack } from '@mui/system'
import { ArrowBackIosNew } from '@mui/icons-material'
import StyledTab from '../../../ui/styledTab'
import ChargePoints from './chargeStationDetail/chargePoints'
import Reviews from './chargeStationDetail/reviews'
import { useNavigate } from 'react-router-dom'


export default function ChargeStationDetail() {
    const [toggleOption, setToggleoption] = useState(0)
    const navigate = useNavigate()
    const onChangeToggleOption = (e) => {
        setToggleoption(e.index)
    }
    return (
        <><Stack direction={'row'} sx={{ backgroundColor: 'secondary.main', p: 3 }} spacing={2}>
            <ArrowBackIosNew sx={{ cursor: 'pointer' }} onClick={() => { navigate(-1) }} />
            <Typography variant='h6' color={'secondary.contrastText'}>Charge Station Details</Typography></Stack>
            <Box sx={{ p: { xs: 1, md: 4 } }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={12} lg={6}>
                        <StationDetail />
                    </Grid>
                    <Grid item xs={12} md={12} lg={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12} lg={12}>
                                <OwnerDetail />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12}>
                            <Analytics />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <StyledTab buttons={['Charge-points', 'Reviews']} onChanged={onChangeToggleOption} />
            {toggleOption === 0 ? <ChargePoints /> : <Reviews />}
        </>
    )
}

