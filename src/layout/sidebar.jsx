import { useState } from "react";
import { Box, Drawer, Typography, useMediaQuery } from "@mui/material";

import { useNavigate  } from 'react-router-dom';
import { NavItem } from "../ui/Navitem";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import { siderbarListItems } from "../assets/json/sidebar";






const Sidebar = ({ open, onClose, ...props }) => {
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
                <div>
                    <Box sx={{ p: 4 }}>
                        <Box
                            sx={{
                                alignItems: 'center',
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: 1,
                                paddingBottom: 3
                            }}
                        >
                            <Logo
                                sx={{
                                    height: 42,
                                    width: 42
                                }}
                            />
                            <Typography
                                color="inherit"
                                variant="caption"

                            >
                                version 2.0
                            </Typography>
                        </Box>
                    </Box>
                </div>
                <Box sx={{ flexGrow: 1, maxHeight: 'calc(100vh - 15px)', overflowY: 'auto' }}>
                    {siderbarListItems.map((item, index) => {
                        return (
                            <NavItem
                                key={item.title}
                                icon={item.icon}
                                href={item.href}
                                title={item.title}
                                sub={item.sub}
                                active={index === activeIndex}
                                extendable={item.extendable}
                                onClick={() => { index !== activeIndex && setActiveIndex(index);  index === activeIndex && onClose();}}
                                indexChange={indexChange}
                            />
                        )
                    })}
                </Box>

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

export default Sidebar