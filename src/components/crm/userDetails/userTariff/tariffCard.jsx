import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import StyledDivider from '../../../../ui/styledDivider'
import StyledButton from '../../../../ui/styledButton'

export default function TariffCard({ data, ...props }) {
    return (
        <Stack direction={'column'} sx={{ backgroundColor: 'secondary.main', borderRadius: '4px', border: '1px solid #fff3' }}>
            <Typography variant='subtitle2' sx={{color:'secondary.contrastText',textAlign:'center',p:2}}>Assigned Charging Tariff</Typography>
            <Stack direction={'column'}>
                <Stack direction={'row'} sx={{ justifyContent: 'space-between',width:'100%',py:1,px:2 }}>
                    <Typography variant='body2' sx={{ color: '#fff5', fontWeight: 300 }} >Tariff name</Typography>
                    <Typography  variant='body2' sx={{fontWeight: 300 }}>{data?.name}</Typography>
                </Stack>
                <StyledDivider/>

                <Stack direction={'row'} sx={{ justifyContent: 'space-between',width:'100%',py:1,px:2 }}>
                    <Typography variant='body2' sx={{ color: '#fff5', fontWeight: 300 }} >Type</Typography>
                    <Typography  variant='body2' sx={{fontWeight: 300 }}>{data?.tariffType}</Typography>
                </Stack>
                <StyledDivider/>
{/* 
                <Stack direction={'row'} sx={{ justifyContent: 'space-between',width:'100%',py:1,px:2 }}>
                    <Typography variant='body2' sx={{ color: '#fff5', fontWeight: 300 }} >CPID</Typography>
                    <Typography  variant='body2' sx={{fontWeight: 300 }}>{data.CPID}</Typography>
                </Stack>
                <StyledDivider/> */}

                <Stack direction={'row'} sx={{ justifyContent: 'space-between',width:'100%',py:1,px:2 }}>
                    <Typography variant='body2' sx={{ color: '#fff5', fontWeight: 300 }} >Value</Typography>
                    <Typography  variant='body2' sx={{fontWeight: 300 }}>{data?.value}</Typography>
                </Stack>
                <StyledDivider/>

                <Stack direction={'row'} sx={{ justifyContent: 'space-between',width:'100%',py:1,px:2 }}>
                    <Typography variant='body2' sx={{ color: '#fff5', fontWeight: 300 }} >Tax</Typography>
                    <Typography  variant='body2' sx={{fontWeight: 300 }}>{data?.taxDetails?.name}</Typography>
                </Stack>
                <StyledDivider/>

                <Stack direction={'row'} sx={{ justifyContent: 'space-between',width:'100%',py:1,px:2 }}>
                    <Typography variant='body2' sx={{ color: '#fff5', fontWeight: 300 }} >Service Fee</Typography>
                    <Typography  variant='body2' sx={{fontWeight: 300 }}>{data?.serviceAmount}</Typography>
                </Stack>
                <Stack alignItems={'center'} p={2}>
                    <StyledButton variant={'secondary'} style={{width:'150px',height:'48px'}}>Unassign</StyledButton>
                </Stack>
            </Stack>
        </Stack>
    )
}
