import { useState } from 'react';
import { Box, Drawer, Typography, useMediaQuery } from '@mui/material';
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
            {
                href: '/alarms',
                title: 'Alarms'
            }
        ]
    },
    {
        icon: (<AssetManageIcon />),
        title: 'Asset Management',
        extendable: true,
        sub: [
            {
                href: '/chargestations',
                title: 'Charge Stations',
            },
            {
                href: '/chargepoints',
                title: 'Charge Points',
            }
        ]
    },
    {
        icon: (<TagManageIcon />),
        title: 'Tag Management',
        extendable: true,
        sub: [
            {
                href: '/rfid',
                title: 'RFID Cards',
            },
            {
                href: '/vid',
                title: 'VID Cards',
            }
        ]
    },
    {
        icon: (<DataManageIcon />),
        title: 'Data Management',
        extendable: true,
        sub: [
            {
                href: '/evchargers',
                title: 'EV chargers',
            },
            {
                href: '/evvehicles',
                title: 'EV vehicles',
            },
            {
                href: '/manufacturers',
                title: 'Manufacturers',
            }
        ]
    },
    {
        icon: (<ChargingIcon />),
        title: 'Charging Network',
        extendable: true,
        sub: [
            {
                href: '/chargingtransaction',
                title: 'Charging Transaction',
            },
            {
                href: '/chargerlogs',
                title: 'Charger Logs',
            },
            {
                href: '/bookingtransation',
                title: 'Booking Transaction',
            }
        ]
    },
    {
        icon: (<AccountIcon />),
        title: 'Accounts',
        extendable: true,
        sub: [
            {
                href: '/accounttransaction',
                title: 'Account Transaction',
            },
            {
                href: '/customerlist',
                title: 'Customer List',
            }
        ]
    },
    {
        icon: (<CRMIcon />),
        title: 'CRM',
        extendable: true,
        sub: [
            {
                href: '/searchcustomer',
                title: 'Search Customer',
            },
            {
                href: '/customerlist',
                title: 'Customer List',
            }
        ]
    },
    {
        icon: (<TariffIcon />),
        title: 'Tariff',
        extendable: true,
        sub: [
            {
                href: '/chargingtariff',
                title: 'Charging Tariff',
            },
            {
                href: '/assigntariff',
                title: 'Assign Tariff',
            },
            {
                href: '/tax',
                title: 'Tax',
            }
        ]
    },
    {
        icon: (<CPOIcon />),
        title: 'CPO Support',
        extendable: true,
        sub: [
            {
                href: '/activesession',
                title: 'Active Session',
            },
            {
                href: '/remotesession',
                title: 'Start remote session ',
            }
        ]
    },
    {
        icon: (<NotificationIcon />),
        title: 'Notification',
        extendable: true,
        sub: [
            {
                href: '/emailnotifiaction',
                title: 'Email Notification',
            },
            {
                href: '/appnotifications',
                title: 'In-App Notifications',
            }
        ]
    },
    {
        icon: (<ReportIcon />),
        title: 'Report',
        extendable: false
    },
    {
        icon: (<SettingsIcon />),
        title: 'Settings',
        extendable: true,
        sub: [
            {
                href: '/adminmanage',
                title: 'Admin Management',
            },
            {
                href: '/roleManagement',
                title: 'Role Management',
            },
            {
                href: '/adminactivity',
                title: 'Admin Activity',
            }
        ]
    },
    {
        icon: (<HelpIcon />),
        title: 'Help',
        extendable: false
    }
];




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
                <Box sx={{ flexGrow: 1, maxHeight: '100%' }}>
                    {items.map((item, index) => {
                        return (
                            <NavItem
                                key={item.title}
                                icon={item.icon}
                                href={item.href}
                                title={item.title}
                                sub={item.sub}
                                active={index === activeIndex}
                                extendable={item.extendable}
                                onClick={() => { index !== activeIndex && setActiveIndex(index) }}
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