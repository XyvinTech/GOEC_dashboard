import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import StyledInput from '../../../../../ui/styledInput'
import StyledDivider from '../../../../../ui/styledDivider'
import StyledButton from '../../../../../ui/styledButton'

export default function GetDiagnostics() {
    return (
        <Box sx={{ mx: { xs: 2, md: 25 }, backgroundColor: 'secondary.main', borderRadius: '4px' }}>
            <Stack direction={'column'} spacing={5} sx={{ px: { xs: 2, md: 5 }, py: { xs: 2, md: 5 }, }}>
                <Stack direction={'column'} spacing={1}>
                    <Typography>Location</Typography>
                    <StyledInput placeholder={'Change Location'} />
                </Stack>
                <Stack direction={'column'} spacing={1}>
                    <Typography>Retries</Typography>
                    <StyledInput placeholder={'Change Retries'} />
                </Stack>
                <Stack direction={'column'} spacing={1}>
                    <Typography>Retry interval</Typography>
                    <StyledInput placeholder={'Retry Interval'} />
                </Stack>
            </Stack>
            <StyledDivider />
            <Stack direction={'row'} sx={{ p: 2 }}><Box sx={{ flexGrow: 1 }} /><StyledButton variant={'primary'} style={{ width: '160px' }}>Send</StyledButton></Stack>
        </Box>
    )
}
