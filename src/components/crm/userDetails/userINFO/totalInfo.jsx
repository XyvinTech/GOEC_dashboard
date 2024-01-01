import { CalendarMonth } from '@mui/icons-material'
import { Box, Dialog, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const data = [
    {
        label: 'Total Charging',
        sub: 'sessions',
        value: '999'
    },
    {
        label: 'Total Amount',
        sub: 'billed (INR)',
        value: '24234345'
    },
    {
        label: 'Total units',
        sub: 'Consumed(kWh)',
        value: '43274523'
    }

]

export default function TotalInfo() {
    return (
        <Box sx={{ backgroundColor: 'secondary.main', borderRadius: '4px', p: 5 }}>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2, md: 15 }} sx={{ justifyContent: 'center' }}>
                {
                    data.map(({ label, sub, value }) => (
                        <Stack direction={'column'}>
                            <Typography variant='caption' sx={{ color: 'primary.DimText', fontSize: '14px', fontWeight: '400' }}>{label}</Typography>
                            <Typography variant='caption' sx={{ color: 'primary.DimText', fontSize: '14px', fontWeight: '400' }}>{sub}</Typography>
                            <Box sx={{ height: '91 px' }}>
                                <Box direction={'column'} spacing={'5px'} sx={{ mt: 2, borderLeft: '3px solid ', borderImage: 'linear-gradient(100deg, #ED5DCD -2.24%, rgba(95, 93, 215, 0.71) 98.06%) 10', borderRadius: 8, pl: 2, py: 0 }}>
                                    <Typography variant='h5'>{value}</Typography>
                                </Box>
                            </Box>
                        </Stack>
                    ))
                }
            </Stack>
        </Box>
    )
}
