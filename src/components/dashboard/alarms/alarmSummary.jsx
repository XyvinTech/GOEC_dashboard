import React from 'react'
import LastSynced from '../../../layout/LastSynced'
import { Box, Grid, Stack, Typography } from '@mui/material'

const chargePointerErrors = [
    {
        label: 'ConnectorLockFailure',
        value: 0
    },
    {
        label: 'EVCommunicationError',
        value: 0
    },
    {
        label: 'GroundFailure',
        value: 0
    },
    {
        label: 'High Temperature',
        value: 0
    },
    {
        label: 'InternalError',
        value: 0
    },
    {
        label: 'LocalListConflict',
        value: 0
    },
    {
        label: 'NoError',
        value: 0
    },
    {
        label: 'OtherError',
        value: 0
    },
    {
        label: 'OverCurrentFailure',
        value: 0
    },
    {
        label: 'OverVoltage',
        value: 0
    },
    {
        label: 'PowerMeterFailure',
        value: 0
    },
    {
        label: 'PowerSwitchFailure',
        value: 0
    },
    {
        label: 'ReaderFailure',
        value: 0
    },
    {
        label: 'ResetFailure',
        value: 0
    },
    {
        label: 'UnderVoltage',
        value: 0
    },
    {
        label: 'WeakSignal',
        value: 0
    },

]

export default function AlarmSummary() {
    return (
        <>
            <LastSynced heading={'Alarms Summary'} /><Box>
                <Grid container p={2}>
                    <Grid item xs={6} md={6} sx={{ backgroundColor: '#1D1B20' }}>
                        <Stack direction={'row'} justifyContent={'space-between'} p={2}>
                            <Typography variant='subtitle2'>ChargePoint Error Codes</Typography>
                            <Typography variant='subtitle2'>Counts</Typography>
                        </Stack>

                        {
                            chargePointerErrors.map((item,index) => (
                                <Stack direction={'row'} sx={{backgroundColor:index % 2 == 0 ? '#211F26':'#2B2930'}} justifyContent={'space-between'} py={1} px={2}>
                                    <Typography variant='body2' color={'secondary.contrastText'}>{item.label}</Typography>
                                    <Typography variant='body2' color={'secondary.contrastText'}>{item.value}</Typography>
                                </Stack>
                            ))
                        }
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
