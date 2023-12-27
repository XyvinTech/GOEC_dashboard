import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

export default function OwnerDetail() {
    return (
        <Box
            sx={{ px: { xs: 1, md: 5 }, py: 3, backgroundColor: 'secondary.main', borderRadius: '4px' }}>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
                <Stack direction={'column'} sx={{ flexGrow: 1, p: 0 }}>
                    <Typography variant='caption' sx={{ color: 'primary.DimText', fontSize: '14px', fontWeight: '400' }}>Owner Details</Typography>
                    <Box sx={{ height: '125px', border: '1px solid rgba(255, 255, 255, 0.20)', borderRadius: '4px', p: 1 }}>
                        <Stack direction={'column'} spacing={'5px'} sx={{ mt: 2 }}>
                            <Typography variant='h6' fontSize={18}>Oberon Edifice</Typography>
                            <Typography variant='caption' sx={{ color: 'primary.DimText', fontSize: '12px', fontWeight: '400' }}>infosamplemail.com</Typography>
                            <Typography variant='caption' sx={{ color: 'primary.DimText', fontSize: '12px', fontWeight: '400' }}>Ph No : 9999999999</Typography>
                        </Stack>
                    </Box>
                </Stack>
                <Stack direction={'column'} sx={{ flexGrow: 1, p: 0 }}>
                    <Typography variant='caption' sx={{ color: 'primary.DimText', fontSize: '14px', fontWeight: '400' }}>Location Support</Typography>
                    <Box sx={{ height: '125px', border: '1px solid rgba(255, 255, 255, 0.20)', borderRadius: '4px', p: 1 }}>
                        <Stack direction={'column'} spacing={'5px'} sx={{ mt: 2 }}>
                            <Typography variant='h6' fontSize={18}>Jikson</Typography>
                            <Typography variant='caption' sx={{ color: 'primary.DimText', fontSize: '12px', fontWeight: '400' }}>helpsamplemail.com</Typography>
                            <Typography variant='caption' sx={{ color: 'primary.DimText', fontSize: '12px', fontWeight: '400' }}>Ph No : 9999999999</Typography>
                        </Stack>
                    </Box>
                </Stack>
            </Stack>
        </Box>

    )
}
