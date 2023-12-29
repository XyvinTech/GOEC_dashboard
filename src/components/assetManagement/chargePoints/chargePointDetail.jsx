import { Box, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Stack } from '@mui/system'
import { ArrowBackIosNew } from '@mui/icons-material'
import StyledTab from '../../../ui/styledTab'
import CPAction from './chargePointDetail/CPAction'
import CPConfig from './chargePointDetail/CPConfig'
import Transactions from './chargePointDetail/transactions'

import ChargePointDetailsAnalytics from './chargePointDetail/chargePointDetailsAnalytics'
import ChargePointDetailsCard from './chargePointDetail/chargePointDetailsCard'
import ChargePointDetailsAction from './chargePointDetail/chargePointDetailsAction'
import ChargePointDetailsConnectors from './chargePointDetail/chargePointDetailsConnectors'
import ChargerLog from './chargePointDetail/chargerLog'
import Alarm from './chargePointDetail/alarm'
import Tariff from './chargePointDetail/tariff'

import { useNavigate } from 'react-router-dom'


export default function ChargePointDetail() {
    const navigate = useNavigate()
    const [toggleOption, setToggleoption] = useState(0)
    const onChangeToggleOption = (e) => {
        setToggleoption(e.index)
    }
    return (
        <>
            <Stack direction={'row'} sx={{ backgroundColor: 'secondary.main', p: 3 }} spacing={2}>
                <ArrowBackIosNew sx={{ cursor: 'pointer' }} onClick={() => { navigate(-1) }} />
                <Typography variant='h6' color={'secondary.contrastText'}>Charge Point Details</Typography>
            </Stack>
            <Grid container spacing={2} sx={{ p: { xs: 1, md: 4 }}}>
                <Grid item xs={12} md={6} >
                    <ChargePointDetailsCard />
                </Grid>
                <Grid item xs={12} md={6} >
                    <Stack direction={'column'} spacing={1.5}>
                        <Stack direction={{ sx: 'column', md: 'row' }} spacing={1.5}>
                            <ChargePointDetailsAction />
                            <ChargePointDetailsConnectors />
                        </Stack>
                        <ChargePointDetailsAnalytics />
                    </Stack>
                </Grid>
            </Grid>
            <StyledTab buttons={['CP Action', 'CP config', 'Transaction', 'Charger logs', 'Alarm', 'Tariff']} onChanged={onChangeToggleOption} />
            {toggleOption === 0 ? <CPAction /> : toggleOption === 1 ? <CPConfig /> : toggleOption === 2 ? <Transactions />: toggleOption === 3 ? <ChargerLog/>: toggleOption === 4 ?<Alarm/>:<Tariff/>}
        </>
    )
}
