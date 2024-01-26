import { Box, Button, Dialog, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import StyledDivider from './styledDivider'
import { Transition } from '../utils/DialogAnimation'

export default function StyledPayloadTableCell({ value }) {

    const [open, setOpen] = useState(false)
    return (
        <Box>
            <Dialog
                open={open}
                onClose={() => { setOpen(false) }}
                maxWidth='sm'
                fullWidth
                TransitionComponent={Transition}
            >
                <Box sx={{ backgroundColor: 'secondary.main' }}>
                    <Box sx={{ p: 1 }}>
                        <Typography variant='h6' sx={{ color: 'primary.contrastText' }}>Payload Data</Typography>
                    </Box>
                    <StyledDivider />
                    <Typography variant='body1' sx={{ color: 'secondary.contrastText', p: 2 }}>
                        {value}
                    </Typography>
                </Box>

            </Dialog>
            <Stack direction={'column'} >
                {`${value.substring(0, 15)}........`}
                <Button sx={{ color: '#2D9CDB',justifyContent:'start' }} onClick={() => { setOpen(true) }}>Show more</Button>
            </Stack>

        </Box>
    )
}
