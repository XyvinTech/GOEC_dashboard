import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import { ReactComponent as ReloadIcon } from '../../../../assets/icons/reload.svg'
import StyledSelectField from '../../../../ui/styledSelectField'
import StyledButton from '../../../../ui/styledButton'
import StyledInput from '../../../../ui/styledInput'

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

const ConfigureElement = ({ label, data, ...props }) => {
    return (
        <Stack direction={'row'} sx={{justifyContent:'space-between',alignItems:'center'}} props>
            <Typography>{label}</Typography>
            <Stack direction={'row'} spacing={1}>
                <Button sx={{backgroundColor:'secondary.button',color:'primary.DimText',width:'150px'}}>{data}</Button>
                <StyledInput defaultValue={data} style={{width:'150px',textAlign:'center'}}/>
                <StyledButton style={{backgroundColor:'#0047C2',color:'#fffc',width:'150px'}}>Save</StyledButton>
            </Stack>
        </Stack>
    )
}


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
            <Box sx={{ backgroundColor: 'secondary.main', borderRadius: '4px', mx: { xs: 1, md: 30 }, mt: { xs: 1, md: 3 } }}>
                <Stack direction={'column'} sx={{ p: 2 }} >
                    <Stack direction={'row'} sx={{ alignItems: 'center' }} spacing={{ xs: 2, md: 5 }}>
                        <Typography variant='subtitle2' sx={{ color: 'primary.contrastText', fontSize: '14px', fontWeight: 400 }}>Configuration</Typography>
                        <StyledSelectField placeholder={'Core profile'} />
                        <StyledButton variant='primary'>Get Configuration</StyledButton>
                    </Stack>
                    <configureElement label={'dff'} data={'dfsg'} />
                    <Stack direction={'column'} spacing={2} mt={5}>
                        {
                            configList.map((item) => {
                                return (
                                    <ConfigureElement label={item.label} data={item.data} />
                                )
                            })
                        }
                    </Stack>
                </Stack>
            </Box>
        </>
    )
}
