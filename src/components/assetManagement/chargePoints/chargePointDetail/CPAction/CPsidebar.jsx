import { useState } from 'react';
import { Box, Button, Drawer, Stack, Typography, useMediaQuery } from '@mui/material';

const items = [
    'Charger Avilability',
    'Trigger Message',
    'Get Diagnostics',
    'send Localist',
    'Update Fiemware'
]

export default function CPSidebar({ open, onClose, ...props }) {
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
        defaultMatches: true,
        noSsr: false
    });

    const [activeIndex, setActiveIndex] = useState(-1);
    const indexChange = () => {
        setActiveIndex(-1)
    }
    const content = (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                }}
            >
                <Box sx={{ flexGrow: 1, maxHeight: 'calc(100vh - 15px)', overflowY: 'auto' }}>
                    {items.map((item, index) => {
                        return (
                            <Button sx={{ color: '#fff' }}>{item}</Button>
                        )
                    })}
                </Box>

            </Box>
        </>
    );

    if (lgUp) {
        return (
            <Box sx={{height:'100%'}}>
                <Stack
                    sx={{
                        backgroundColor: 'secondary.main',
                        color: 'secondary.contrastText',
                        width: 260,
                        border: 'none'
                    }} 
                    direction={'row'}
                >
                    {content}
                </Stack >
            </Box>
        );
    }

    return (
        <Drawer
            anchor="right"
            onClose={onClose}
            open={true}
            PaperProps={{
                sx: {
                    backgroundColor: 'secondary.main',
                    color: 'secondary.contrastText',
                    width: 260
                }
            }}
            sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
            variant="temporary"
        >
            {content}
        </Drawer>
    );
}