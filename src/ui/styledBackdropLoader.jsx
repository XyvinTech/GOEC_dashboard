import { Backdrop, CircularProgress } from '@mui/material'
import React from 'react'

export default function StyledBackdropLoader({open}) {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1,backgroundColor:'#0009' }}
            open={open}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}
