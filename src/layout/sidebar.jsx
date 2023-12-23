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
        href: '/dashboard',
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
        href: '/assetmanagement',
        icon: (<AssetManageIcon />),
        title: 'Asset Management',
        extendable: true
    },
    {
        href: '/tagmanagement',
        icon: (<TagManageIcon />),
        title: 'Tag Management',
        extendable: true
    },
    {
        href: '/datamanagement',
        icon: (<DataManageIcon />),
        title: 'Data Management',
        extendable: true
    },
    {
        href: '/chargingnetwork',
        icon: (<ChargingIcon />),
        title: 'Charging Network',
        extendable: true
    },
    {
        href: '/accounts',
        icon: (<AccountIcon />),
        title: 'Accounts',
        extendable: true
    },
    {
        href: '/crm',
        icon: (<CRMIcon />),
        title: 'CRM',
        extendable: true
    },
    {
        href: '/tariff',
        icon: (<TariffIcon />),
        title: 'Tariff',
        extendable: true
    },
    {
        href: '/cpo',
        icon: (<CPOIcon />),
        title: 'CPO Support',
        extendable: true
    },
    {
        href: '/notification',
        icon: (<NotificationIcon />),
        title: 'Notification',
        extendable: true
    },
    {
        href: '/report',
        icon: (<ReportIcon />),
        title: 'Report',
        extendable: false
    },
    {
        href: '/settings',
        icon: (<SettingsIcon />),
        title: 'Settings',
        extendable: true
    },
    {
        href: '/help',
        icon: (<HelpIcon />),
        title: 'Help',
        extendable: false
    }
];


const content = (
    <>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
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
                {items.map((item) => {
                    return (
                        <NavItem
                            key={item.title}
                            icon={item.icon}
                            href={item.href}
                            title={item.title}
                            sub={item.sub}
                            extendable={item.extendable}
                        />
                    )
                })}
            </Box>
            <Divider sx={{ borderColor: '#2D3748' }} />

        </Box>
    </>
);

export default function Sidebar({ open, onClose, ...props }) {
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
        defaultMatches: true,
        noSsr: false
    });

    if (lgUp) {
        return (
            <Drawer
                anchor="left"
                open
                PaperProps={{
                    sx: {
                        backgroundColor: 'primary.main',
                        color: 'secondary.contrastText',
                        width: 250
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
                    backgroundColor: 'primary.main',
                    color: 'secondary.contrastText',
                    width: 250
                }
            }}
            sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
            variant="temporary"
        >
            {content}
        </Drawer>
    );
}