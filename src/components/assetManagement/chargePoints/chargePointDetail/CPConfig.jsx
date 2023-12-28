import React from 'react'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { ReactComponent as ReloadIcon } from '../../../../assets/icons/reload.svg'
import StyledSelectField from '../../../../ui/styledSelectField'
import StyledButton from '../../../../ui/styledButton'
import ConfigElement from './CPConfig/configElement'
import ConfigSwitch from './CPConfig/configSwitch'

const configList = [
    {
        'label': 'Blink repeat',
        'data': '100',
    },
    {
        'label': 'Heart beat interval',
        'data': '100',
    },
    {
        'label': 'Connection timeout',
        'data': '100',
    },
    {
        'label': 'Max energy on invalid ID',
        'data': '100',
    },
    {
        'label': 'Clock aligned data interval',
        'data': '100',
    },
    {
        'label': 'Light intensity',
        'data': '100',
    },
    {
        'label': 'Max value sample interval',
        'data': '100',
    },
    {
        'label': 'Max energy on invalid ID',
        'data': '100',
    },
    {
        'label': 'Minimum status duration',
        'data': '100',
    },
    {
        'label': 'Reset retires',
        'data': '100',
    },
    {
        'label': 'Transaction message attempts',
        'data': '100',
    }
    ,
    {
        'label': 'Transaction message retry interval',
        'data': '100',
    }
    ,
    {
        'label': 'Web socket ping interval',
        'data': '100',
    }

]

const switchList = [
    'Allow offline transaction for unknown ID',
    '',
    'Authorization remote transaction requests',
    'Local authorize offline',
    'Local pre-authorize',
    'Stop transaction on EV side disconnect',
    'Stop transaction on invalid ID',
    'Unlock connector on EV side disconnect',
    'Open charge mode enable'
]


export default function CPConfig() {

    return (
        <><Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'primary.grey',
                p: 2
            }}>
            <Stack direction={'column'} sx={{ ml: 2 }}>
                <Typography variant='body1' sx={{ color: 'secondary.contrastText' }}>Charge Stations</Typography>
                <Stack direction={'row'} spacing={1}>
                    <Typography sx={{ color: 'secondary.greytext', fontSize: 12 }}>Last synced</Typography>
                    <Typography sx={{ color: 'success.main', fontSize: 12 }}>4 minutes ago</Typography>
                    <ReloadIcon style={{ cursor: 'pointer' }} />
                </Stack>
            </Stack>
        </Box>
            <Box sx={{ backgroundColor: 'secondary.main', borderRadius: '4px', mx: { xs: 2, md: 30 }, mt: { xs: 2, md: 3 } }}>
                <Stack direction={'column'} sx={{ px: {xs:3,md:8}}} >
                    <Stack direction={'row'} sx={{ alignItems: 'center',my:5 }} spacing={{ xs: 2, md: 5 }}>
                        <Typography variant='subtitle2' sx={{ color: 'primary.contrastText', fontSize: '14px', fontWeight: 400 }}>Configuration</Typography>
                        <StyledSelectField placeholder={'Core profile'} />
                        <StyledButton variant='primary'>Get Configuration</StyledButton>
                    </Stack>
                    <configureElement label={'dff'} data={'dfsg'} />
                    <Stack direction={'column'} spacing={2} my={2}>
                        {
                            configList.map((item) => {
                                return (
                                    <ConfigElement label={item.label} data={item.data} />
                                )
                            })
                        }
                    </Stack>
                    <Grid container spacing={2} my={2}>
                        {
                            switchList.map((item) => (
                                <Grid item md={6} xs={12}>
                                    <ConfigSwitch label={item}/>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Stack>
            </Box>
        </>
    )
}
