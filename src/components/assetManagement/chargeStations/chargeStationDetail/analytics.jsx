import { CalendarMonth } from '@mui/icons-material'
import { Box, Dialog, Modal, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import WeekPicker from '../../../../ui/StyledCalender'

export default function Analytics() {
    return (
        <Box
            sx={{ backgroundColor: 'secondary.main', borderRadius: '4px' }}>
                <Dialog
        open={true}
      >
                    <WeekPicker />
      </Dialog>
            <Stack direction={'row'} sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.20)', justifyContent: 'space-between', px: 3, py: 1 }}>
                <Typography variant='h6' color={'secondary.contrastText'}>Analytics</Typography>
                <CalendarMonth color='secondary.contrastText' />
            </Stack>
            <Box padding={2}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2, md: 15 }} sx={{ justifyContent: 'center' }}>
                    <Stack direction={'column'}>
                        <Typography variant='caption' sx={{ color: 'primary.DimText', fontSize: '14px', fontWeight: '400' }}>Revenue</Typography>
                        <Typography variant='caption' sx={{ color: 'primary.DimText', fontSize: '14px', fontWeight: '400' }}>Earned(INR)</Typography>
                        <Box sx={{ height: '91 px' }}>
                            <Box direction={'column'} spacing={'5px'} sx={{ mt: 2, borderLeft: '3px solid ', borderImage: 'linear-gradient(100deg, #ED5DCD -2.24%, rgba(95, 93, 215, 0.71) 98.06%) 10', borderRadius: 8, pl: 2, py: 0 }}>
                                <Typography variant='h5'>24234345</Typography>
                            </Box>
                        </Box>
                    </Stack>
                    <Stack direction={'column'}>
                        <Typography variant='caption' sx={{ color: 'primary.DimText', fontSize: '14px', fontWeight: '400' }}>Energy</Typography>
                        <Typography variant='caption' sx={{ color: 'primary.DimText', fontSize: '14px', fontWeight: '400' }}>Delivered(kWh)</Typography>
                        <Box sx={{ height: '70px' }}>
                            <Box direction={'column'} spacing={'5px'} sx={{ mt: 2, borderLeft: '3px solid ', borderImage: 'linear-gradient(100deg, #ED5DCD -2.24%, rgba(95, 93, 215, 0.71) 98.06%) 10', borderRadius: 8, pl: 2, py: 0 }}>
                                <Typography variant='h5'>24234345</Typography>
                            </Box>
                        </Box>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    )
}
