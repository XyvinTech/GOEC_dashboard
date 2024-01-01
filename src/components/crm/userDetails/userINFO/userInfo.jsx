import { CalendarMonth } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import { TimeIcon } from '@mui/x-date-pickers'
import React from 'react'

export default function UserInfo() {
    return (
        <Box sx={{ backgroundColor: 'secondary.main', borderRadius: '4px', p: 4 }}>
            <Stack spacing={2}>
                <Stack direction={'row'} spacing={2}>
                    <img style={{ aspectRatio: '1:1', borderRadius: '4px', objectFit: 'cover' }} width='111px' src='https://www.himalmag.com/wp-content/uploads/2019/07/sample-profile-picture.png' />
                    <Stack spacing={1} sx={{ p: 2 }}>
                        <Typography variant='h6'>Anish vikende</Typography>
                        <Typography variant='subtitle2'>9857422220</Typography>
                        <Typography variant='subtitle2'>avinash@gmail.com</Typography>
                    </Stack>
                </Stack>
                <Stack direction={'column'} sx={{ p: {md:0.9,xl:2}, backgroundColor: 'secondary.cardbg', borderRadius: '4px' }}>
                    <Typography variant='subtitle2' sx={{ color: 'secondary.contrastText' }}>Created On :</Typography>
                    <Stack direction={'row'} spacing={2}>
                        <Stack direction={'row'} alignItems={'center'} spacing={0.5}>
                            <CalendarMonth sx={{ fontSize: '14px' }} />
                            <Typography variant='subtitle2'>22 Jun 22</Typography>
                        </Stack>
                        <Stack direction={'row'} alignItems={'center'} spacing={0.5}>
                            <TimeIcon sx={{ fontSize: '14px' }} />
                            <Typography variant='subtitle2'>4:57 PM</Typography>
                        </Stack>
                    </Stack>
                </Stack>

            </Stack>
        </Box>
    )
}
