import { useState } from 'react';
import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';
import {
    AccountIcon,
    CPOIcon,
    AssetManageIcon,
    CRMIcon,
    ChargingIcon,
    DashboardIcon,
    DataManageIcon,
    HelpIcon,
    NotificationIcon,
    ReportIcon,
    SettingsIcon,
    TagManageIcon,
    TariffIcon,
} from '../assets/icons/sidebar';
import { NavItem } from '../ui/Navitem';
import { ReactComponent as Logo } from '../assets/Logo.svg';




const items = [
    {
        icon: (<DashboardIcon />),
        title: 'Dashboard',
        extendable: true,
        sub: [
            {
                href: '/livestatus',
                title: 'Live Status',
            },
            {
                href: '/analytics',
                title: 'Analytics'
            },
            ,
            {
                href: '/alarms',
                title: 'Alarms'
            }
        ]
    },
    {
        icon: (<AssetManageIcon />),
        title: 'Asset Management',
        extendable: true
    },
    {
        icon: (<TagManageIcon />),
        title: 'Tag Management',
        extendable: true
    },
    {
        icon: (<DataManageIcon />),
        title: 'Data Management',
        extendable: true
    },
    {
        icon: (<ChargingIcon />),
        title: 'Charging Network',
        extendable: true
    },
    {
        icon: (<AccountIcon />),
        title: 'Accounts',
        extendable: true
    },
    {
        icon: (<CRMIcon />),
        title: 'CRM',
        extendable: true
    },
    {
        icon: (<TariffIcon />),
        title: 'Tariff',
        extendable: true
    },
    {
        icon: (<CPOIcon />),
        title: 'CPO Support',
        extendable: true
    },
    {
        icon: (<NotificationIcon />),
        title: 'Notification',
        extendable: true
    },
    {
        icon: (<ReportIcon />),
        title: 'Report',
        extendable: false
    },
    {
        icon: (<SettingsIcon />),
        title: 'Settings',
        extendable: true
    },
    {
        icon: (<HelpIcon />),
        title: 'Help',
        extendable: false
    }
];




const Sidebar=({ open, onClose, ...props })=> {
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
        defaultMatches: true,
        noSsr: false
    });

    const [activeIndex, setActiveIndex] = useState(-1);
    const indexChange = ()=>{
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
                                flexDirection:'column',
                                borderRadius: 1,
                                paddingBottom:3
                            }}
                        >
                            <a>
                                <Logo
                                    sx={{
                                        height: 42,
                                        width: 42
                                    }}
                                />
                            </a>
                            <Typography
                                color="inherit"
                                variant="caption"
                                
                            >
                                version 2.0
                            </Typography>
                        </Box>
                    </Box>
                </div>
                <Box sx={{ flexGrow: 11 }}>
                    {items.map((item,index) => {
                        return (
                            <NavItem
                                key={item.title}
                                icon={item.icon}
                                href={item.href}
                                title={item.title}
                                sub={item.sub}
                                active= {index===activeIndex}
                                extendable={item.extendable}
                                onClick={()=>{index!= activeIndex && setActiveIndex( index)}}
                                indexChange = {indexChange}
                            />
                        )
                    })}
                </Box>
                <Divider sx={{ borderColor: '#2D3748' }} />
    
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
                        border:'none'
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

export default Sidebar