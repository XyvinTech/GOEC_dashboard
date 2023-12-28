import { Box, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Stack } from '@mui/system'
import { ArrowBackIosNew } from '@mui/icons-material'
import StyledTab from '../../../ui/styledTab'
import CPAction from './chargePointDetail/CPAction'
import CPConfig from './chargePointDetail/CPConfig'
import Transactions from './chargePointDetail/transactions'

export default function ChargePointDetail() {
    const [toggleOption, setToggleoption] = useState(0)
    const onChangeToggleOption = (e) => {
        setToggleoption(e.index)
    }
    return (
        <>
            <Stack direction={'row'} sx={{ backgroundColor: 'secondary.main', p: 3 }} spacing={2}>
                <ArrowBackIosNew sx={{ cursor: 'pointer' }} />
                <Typography variant='h6' color={'secondary.contrastText'}>Charge Point Details</Typography>
            </Stack>
            <Box sx={{ p: { xs: 1, md: 4 } }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={12} lg={6}>
                        G014
                    </Grid>
                    <Grid item xs={12} md={12} lg={6}>
                        <Stack direction={'column'} spacing={2}>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
            <StyledTab buttons={['CP Action', 'CP config', 'Transaction', 'Charger logs', 'Alarm', 'Tariff']} onChanged={onChangeToggleOption} />
            {toggleOption === 0 ? <CPAction /> : toggleOption === 1 ? <CPConfig/> : <Transactions/>}
        </>
    )
}
