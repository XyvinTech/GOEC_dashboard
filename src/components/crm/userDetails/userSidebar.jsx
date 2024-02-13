import { useState } from 'react';
import { Box, Button, Drawer, Stack, Typography, useMediaQuery } from '@mui/material';

const items = [
    'User info',
    'Account Transaction',
    'Charging Transactions',
    'Favourites',
    'Reviews',
    'Tariff',
    'Assigned ID Tags',
    'VR details',
]

export default function UserSidebar({ open, onClose, ...props }) {
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
        defaultMatches: true,
        noSsr: false
    });

    const [activeIndex, setActiveIndex] = useState(0);
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
                <Stack sx={{ flexGrow: 1, maxHeight: 'calc(100vh - 15px)',p:3 }} spacing={2}>
                    {items.map((item, index) => {
                        return (
                            <Button sx={{
                                backgroundColor: activeIndex === index ? 'secondary.button' : 'secondary.main',
                                borderRadius: 1,
                                height: '45px',
                                width: '200px',
                                my: 0.5,
                                justifyContent: "flex-start",
                                fontSize:'14px',
                                fontWeight:400,
                                color: activeIndex === index ? '#fff' : 'primary.contrastText',
                                '&:hover': {
                                    backgroundColor: 'rgba(255,255,255, 0.1)'
                                }
                            }}
                            onClick={()=>{
                                setActiveIndex(index)
                                props.onChanged({index:index,item:item})
                                onClose()
                            }}
                            key={index}>
                                {item}
                            </Button>
                        )
                    })}
                </Stack>

            </Box>
        </>
    );

    if (lgUp) {
        return (
            <Drawer
                anchor="left"
                open
                PaperProps={{
                    sx: {
                        backgroundColor: 'secondary.main',
                        color: 'secondary.contrastText',
                        width: 260,
                        mt:8.5,
                        border: 'none'
                    }
                }}
                variant="permanent"
            >
                {content}
            </Drawer>
        );
    }

    return (
        <Drawer
            anchor="left"
            onClose={onClose}
            open={open}
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