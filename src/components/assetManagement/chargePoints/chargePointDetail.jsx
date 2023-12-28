import { Box, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Stack } from '@mui/system'
import { ArrowBackIosNew } from '@mui/icons-material'
import StyledGroupButton from '../../../ui/styledGroupButton'
import CPAction from './chargePointDetail/CPAction'

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
            <StyledGroupButton buttons={['CP Action', 'CP config', 'Transaction', 'Charger logs', 'Alarm', 'Tariff']} onChanged={onChangeToggleOption} />
            {toggleOption === 0 ? <CPAction /> : "sub2"}
        </>
    )
}
