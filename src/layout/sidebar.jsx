import { useState } from "react";
import { Box, Drawer, Typography, useMediaQuery } from "@mui/material";
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
} from "../assets/icons/sidebar";
import { useNavigate  } from 'react-router-dom';
import { NavItem } from "../ui/Navitem";
import { ReactComponent as Logo } from "../assets/Logo.svg";

const items = [
    {
        icon: (<DashboardIcon />),
        title: 'Dashboard',
        extendable: true,
        sub: [
            {
                href: 'dashboard/live-status',
                title: 'Live Status',
            },
            {
                href: 'dashboard/analytics',
                title: 'Analytics'
            },
            {
                href: 'dashboard/alarms',
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
                href: 'asset-management/charge-stations',
                title: 'Charge Stations',
            },
            {
                href: 'asset-management/charge-points',
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
                href: 'tag-management/rfid-cards',
                title: 'RFID Cards',
            },
            {
                href: 'tag-management/vid-cards',
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
                href: 'data-management/ev-chargers',
                title: 'EV chargers model',
            },
            {
                href: 'data-management/ev-vehicles',
                title: 'EV vehicles',
            },
            {
                href: 'data-management/manufacturers',
                title: 'Manufacturers',
            }
        ]
    },
    {
        icon: (<ChargingIcon />),
        title: 'charging-network',
        extendable: true,
        sub: [
            {
                href: 'charging-network/charging-transaction',
                title: 'Charging Transaction',
            },
            {
                href: 'charging-network/charger-logs',
                title: 'Charger Logs',
            },
            // {
            //     href: 'charging-network/booking-transaction',
            //     title: 'Booking Transaction',
            // }
        ]
    },
    {
        icon: (<AccountIcon />),
        title: 'Accounts',
        extendable: true,
        sub: [
            {
                href: 'accounts/account-transaction',
                title: 'Account Transactions',
            },
            {
                href: 'accounts/financials',
                title: 'Financials',
            }
        ]
    },
    {
        icon: (<CRMIcon />),
        title: 'CRM',
        extendable: true,
        sub: [
            {
                href: 'crm/search-customer',
                title: 'Search Customer',
            },
            {
                href: 'crm/customer-list',
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
                href: 'tariff/charging-tariff',
                title: 'Charging Tariff',
            },
            {
                href: 'tariff/assign-tariff',
                title: 'Assign Tariff',
            },
            {
                href: 'tariff/tax',
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
                href: 'cpo-support/active-session',
                title: 'Active Session',
            },
            {
                href: 'cpo-support/remote-session',
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
                href: 'notification/email-notification',
                title: 'Email Notification',
            },
            {
                href: 'notification/app-notifications',
                title: 'In-App Notifications',
            }
        ]
    },
    {
        icon: (<ReportIcon />),
        title: 'Report',
        href: 'report',
        extendable: false
    },
    {
        icon: (<SettingsIcon />),
        title: 'Settings',
        extendable: true,
        sub: [
            {
                href: 'settings/admin-manangement',
                title: 'Admin Management',
            },
            {
                href: 'settings/role-management',
                title: 'Role Management',
            },
            {
                href: 'settings/admin-activity',
                title: 'Admin Activity',
            }
        ]
    },
    {
        icon: (<HelpIcon />),
        title: 'Help',
        href: 'help',
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
                <Box sx={{ flexGrow: 1, maxHeight: 'calc(100vh - 15px)', overflowY: 'auto' }}>
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