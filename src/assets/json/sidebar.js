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
  } from "../icons/sidebar";

export const siderbarListItems = [
    {
        icon: (<DashboardIcon />),
        title: 'Dashboard',
        extendable: true,
       
        sub: [
            {
                href: 'dashboard/live-status',
                title: 'Live Status',
                requiredRoles: ['admin']
            },
            {
                href: 'dashboard/analytics',
                title: 'Analytics',
                
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
            // {
            //     href: 'tag-management/vid-cards',
            //     title: 'VID Cards',
            // }
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
            // {
            //     href: 'accounts/financials',
            //     title: 'Financials',
            // }
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