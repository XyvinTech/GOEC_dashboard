import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import StyledSelectField from '../../../../../ui/styledSelectField'
import StyledDivider from '../../../../../ui/styledDivider'
import StyledButton from '../../../../../ui/styledButton'

export default function SendLocalList() {
    return (
        <Box sx={{ mx: { xs: 2, md: 25 }, backgroundColor: 'secondary.main', borderRadius: '4px' }}>
            <Stack direction={'column'} spacing={5} sx={{ px: { xs: 2, md: 5 }, py: { xs: 2, md: 5 }, }}>
                <Stack direction={'column'} spacing={1}>
                    <Typography>Version</Typography>
                    <StyledSelectField placeholder={'Update Firmware'} />
                </Stack>
                <Stack direction={'column'} spacing={1}>
                    <Typography>Update Type</Typography>
                    <StyledSelectField placeholder={'Select'} />
                </Stack>
            </Stack>
            <StyledDivider />
            <Stack direction={'row'} sx={{ p: 2 }}><Box sx={{ flexGrow: 1 }} /><StyledButton variant={'primary'} style={{ width: '160px' }}>Send</StyledButton></Stack>
        </Box>
    )
}
