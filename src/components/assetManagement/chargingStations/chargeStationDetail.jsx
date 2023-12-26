import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import StationDetail from './chargeStationDetail/stationDetail'

export default function ChargeStationDetail() {
    return (
        <Container maxWidth='xl'>
            <Grid container >
                <Grid item xs={12} sm={12} lg={6}>
                    <StationDetail />
                </Grid>
            </Grid>
        </Container>
    )
}

