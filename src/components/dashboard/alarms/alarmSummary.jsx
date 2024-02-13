import React from 'react'
import LastSynced from '../../../layout/LastSynced'
import { Box, Grid, Stack, Typography } from '@mui/material'



export default function AlarmSummary({ data, dataReload }) {

    const chargePointerErrors = [
        {
            label: 'ConnectorLockFailure',
            value: data.ConnectorLockFailure ? data.ConnectorLockFailure : 0
        },
        {
            label: 'EVCommunicationError',
            value: data.EVCommunicationError ? data.EVCommunicationError : 0
        },
        {
            label: 'GroundFailure',
            value: data.GroundFailure ? data.GroundFailure : 0
        },
        {
            label: 'HighTemperature',
            value: data.HighTemperature ? data.HighTemperature : 0
        },
        {
            label: 'InternalError',
            value: data.InternalError ? data.InternalError : 0
        },
        {
            label: 'LocalListConflict',
            value: data.LocalListConflict ? data.LocalListConflict : 0
        },
        {
            label: 'NoError',
            value: data.NoError ? data.NoError : 0
        },
        {
            label: 'OtherError',
            value: data.OtherError ? data.OtherError : 0
        },
        {
            label: 'OverCurrentFailure',
            value: data.OverCurrentFailure ? data.OverCurrentFailure : 0
        },
        {
            label: 'OverVoltage',
            value: data.OverVoltage ? data.OverVoltage : 0
        },
        {
            label: 'PowerMeterFailure',
            value: data.PowerMeterFailure ? data.PowerMeterFailure : 0
        },
        {
            label: 'PowerSwitchFailure',
            value: data.PowerSwitchFailure ? data.PowerSwitchFailure : 0
        },
        {
            label: 'ReaderFailure',
            value: data.ReaderFailure ? data.ReaderFailure : 0
        },
        {
            label: 'ResetFailure',
            value: data.ResetFailure ? data.ResetFailure : 0
        },
        {
            label: 'UnderVoltage',
            value: data.UnderVoltage ? data.UnderVoltage : 0
        },
        {
            label: 'WeakSignal',
            value: data.WeakSignal ? data.WeakSignal : 0
        },

    ]
    return (
        <>
            <LastSynced heading={'Alarms Summary'} reloadHandle={dataReload}/><Box>
                <Grid container p={2}>
                    <Grid item xs={12} md={4} sx={{ backgroundColor: '#1D1B20' }}>
                        <Stack direction={'row'} justifyContent={'space-between'} p={2}>
                            <Typography variant='subtitle2'>ChargePoint Error Codes</Typography>
                            <Typography variant='subtitle2'>Counts</Typography>
                        </Stack>

                        {
                            chargePointerErrors.map((item, index) => (
                                <Stack direction={'row'} sx={{ backgroundColor: index % 2 == 0 ? '#211F26' : '#2B2930' }} justifyContent={'space-between'} py={1} px={2}>
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
