import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import StyledDivider from '../../../../../ui/styledDivider'
import StyledButton from '../../../../../ui/styledButton'

export default function AssignedTarrif() {
    return (
        <Box sx={{ p: 2 }}>
            <Typography variant='h6' py={1} color={'#fff9'}>Assigned Tariff</Typography>
            <Box sx={{ backgroundColor: 'secondary.main', borderRadius: '4px',border:'1px solid #fff3' }}>
                <Typography sx={{ p: 3, textAlign: 'center', color: 'secondary.contrastText' }}>Assigned charging Tariff</Typography>
                <Stack direction={'column'} spacing={2}>
                    <Stack direction={'row'} sx={{ justifyContent: 'space-between', px: 3}}>
                        <Typography variant='subtitle2' color={'#fff9'}>Tariff name</Typography>
                        <Typography variant='subtitle2' >Default</Typography>
                    </Stack>
                    <StyledDivider />

                    <Stack direction={'row'} sx={{ justifyContent: 'space-between', px: 3 }}>
                        <Typography variant='subtitle2' color={'#fff9'}>Value</Typography>
                        <Typography variant='subtitle2' >15</Typography>
                    </Stack>
                    <StyledDivider />

                    <Stack direction={'row'} sx={{ justifyContent: 'space-between', px: 3}}>
                        <Typography variant='subtitle2' color={'#fff9'}>Tax</Typography>
                        <Typography variant='subtitle2' >GST</Typography>
                    </Stack>
                    <StyledDivider />

                    <Stack direction={'row'} sx={{ justifyContent: 'space-between', px: 3 }}>
                        <Typography variant='subtitle2' color={'#fff9'}>Service Fee</Typography>
                        <Typography variant='subtitle2' >-</Typography>
                    </Stack>
                    <Box sx={{ justifyContent: 'center', px: 8,py:2 }}>
                        <StyledButton varient={'secondary'} style={{ backgroundColor: '#4A4458', color: '#fff8', width: '100%',height:'48px' }}>unassign</StyledButton>
                    </Box>
                </Stack>
            </Box>
        </Box>
    )
}
