import React, { useState } from 'react'
import LastSynced from '../../../layout/LastSynced'
import { Box, Button, Grid, IconButton, Stack } from '@mui/material'
import { Tune } from '@mui/icons-material'
import DashboardDataCard from '../../../ui/dashboardDataCard'
import Revenue from './trends/revenue'
import ChargingTransaction from './trends/chargingTransaction'
import Energy from './trends/energy'


const buttons = [
    'Revenue (INR)',
    'Charging Transactions',
    'Energy'
]

export default function Trends() {
    const [buttonIndex, setbuttonIndex] = useState(0)
    return (
        <>
            <LastSynced heading={'Analytics - Trends'}>
                <IconButton sx={{ backgroundColor: 'secondary.button', borderRadius: '4px', px: 2 }}><Tune /></IconButton>
            </LastSynced>
            <Box sx={{ p: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <DashboardDataCard title={'Revenue'} subTitle={'Earned(INR)'} value={59} />
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <DashboardDataCard title={'Energy'} subTitle={'Delivered (kWh)'} value={128} />
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <DashboardDataCard title={'Charging'} subTitle={'Transactions'} value={8} />
                    </Grid>
                </Grid>
                <Stack direction={'row'} spacing={1} p={2}>
                    {
                        buttons.map((item, ind) => (
                            <Button
                                sx={{
                                    backgroundColor: buttonIndex == ind ? 'secondary.button':'secondary.main',
                                    width: '200px', height: '40px', border: '1px solid #fff6', borderRadius: '4px',
                                    color: buttonIndex == ind ? '#fff' : 'secondary.contrastText',
                                    fontWeight:400
                                }}
                                onClick={() => { setbuttonIndex(ind) }}
                            >
                                {item}
                            </Button>
                        ))
                    }
                </Stack>
                {buttonIndex == 0 ? <Revenue/> : buttonIndex == 1 ? <ChargingTransaction/> : <Energy/>}
            </Box>
        </>
    )
}