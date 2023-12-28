import { useState } from 'react';
import { Box, Button, Drawer, Stack, Typography, useMediaQuery } from '@mui/material';

const items = [
    'Charger Availability',
    'Trigger Message',
    'Get Diagnostics',
    'send Localist',
    'Update Firmware'
]

export default function CPSidebar({ open, onClose, ...props }) {
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
                <Stack sx={{ flexGrow: 1, maxHeight: 'calc(100vh - 15px)', overflowY: 'auto' , justifyContent:'center',p:3 }} spacing={2}>
                    {items.map((item, index) => {
                        return (
                            <Button sx={{
                                backgroundColor: activeIndex === index ? 'secondary.button' : 'secondary.main',
                                borderRadius: 0.5,
                                height: '45px',
                                width: '180px',
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
            <Box sx={{backgroundColor: 'secondary.main',pt:5}}>
                <Box
                    sx={{
                        color: 'secondary.contrastText',
                        width: 230,
                        border: 'none'
                    }} 
                    direction={'row'}
                >
                    {content}
                </Box >
            </Box>
        );
    }

    // return (
    //     <Drawer
    //         anchor="right"
    //         onClose={onClose}
    //         open={open}
    //         PaperProps={{
    //             sx: {
    //                 backgroundColor: 'secondary.main',
    //                 color: 'secondary.contrastText',
    //                 width: 260
    //             }
    //         }}
    //         sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
    //         variant="temporary"
    //     >
    //         {content}
    //     </Drawer>
    // );
}