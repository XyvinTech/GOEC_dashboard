import DashboardLayout from "../../layout/dashboardLayout";
import Home from "../../pages/Home";
import Login from "../../pages/Login";

import ChargingStation from "../../pages/chargeStation";

import UnderConstruction from "../../pages/UnderConstruction";
import NotFoundPage from "../../pages/NotFound";
import ChargeStationDetail from "../../components/assetManagement/chargeStations/chargeStationDetail";
import ChargingPoints from "../../pages/chargePoints";
import ChargeStationDetailsCard from "../../components/assetManagement/chargePoints/chargeStationDetailsCard";


const RoutesConfig = () => {

    const routes = [

        {
            path: '/',
            element: <DashboardLayout />,
            children: [
                {
                    path: 'chargestations',
                    element: <ChargingStation />
                }
            ]
        },
        // Test purpose
        {
            path: 'testCard',
            element: <ChargeStationDetailsCard />,
        },
        // 
        {
            path: '/login',
            element: <Login />,
        },

        {
            path: '/forgot-password',
            element: <UnderConstruction />,
        },
        //!---------Dashboard
        {
            path: '/dashboard',
            element: <DashboardLayout />,
            children: [
                {
                    path: 'live-status',
                    element: <UnderConstruction />,
                },
                {
                    path: 'analytics',
                    element: <UnderConstruction />,
                },
                {
                    path: 'alarms',
                    element: <UnderConstruction />,
                }
            ]
        },
        //!---------Asset management
        {
            path: '/asset-management',
            element: <DashboardLayout />,
            children: [
                {
                    path: 'charge-stations',
                    element: <ChargingStation/>,
                },
                {
                    path: 'charge-points',
                    element: <ChargingPoints />,
                },
                ,
                {
                    path: 'charge-station-detail',
                    element: <ChargeStationDetail />,
                }
            ]
        },
        //!---------Tag management
        {
            path: '/tag-management',
            element: <DashboardLayout />,
            children: [
                {
                    path: 'rfid-cards',
                    element: <UnderConstruction />,
                },
                {
                    path: 'vid-cards',
                    element: <UnderConstruction />,
                }
            ]
        },

        //!---------Data management
        {
            path: '/data-management',
            element: <DashboardLayout />,
            children: [
                {
                    path: 'ev-chargers',
                    element: <UnderConstruction />,
                },
                {
                    path: 'ev-vehicles',
                    element: <UnderConstruction />,
                },
                {
                    path: 'manufacturers',
                    element: <UnderConstruction />,
                }
            ]
        },

        //!---------Charging Network
        {
            path: '/charging-network',
            element: <DashboardLayout />,
            children: [
                {
                    path: 'charging-transaction',
                    element: <UnderConstruction />,
                },
                {
                    path: 'charger-logs',
                    element: <UnderConstruction />,
                },
                {
                    path: 'booking-transaction',
                    element: <UnderConstruction />,
                }
            ]
        },
        //!---------Accounts
        {
            path: '/accounts',
            element: <DashboardLayout />,
            children: [
                {
                    path: 'account-transaction',
                    element: <UnderConstruction />,
                },
                {
                    path: 'customer-list',
                    element: <UnderConstruction />,
                }
            ]
        },
        //!---------CRM
        {
            path: '/crm',
            element: <DashboardLayout />,
            children: [
                {
                    path: 'search-customer',
                    element: <UnderConstruction />,
                },
                {
                    path: 'customer-list',
                    element: <UnderConstruction />,
                }
            ]
        },
        //!---------Tariff
        {
            path: '/tariff',
            element: <DashboardLayout />,
            children: [
                {
                    path: 'charging-tariff',
                    element: <UnderConstruction />,
                },
                {
                    path: 'assign-tariff',
                    element: <UnderConstruction />,
                },
                {
                    path: 'tax',
                    element: <UnderConstruction />,
                },

            ]
        },
        //!---------CPO
        {
            path: '/cpo-support',
            element: <DashboardLayout />,
            children: [
                {
                    path: 'active-session',
                    element: <UnderConstruction />,
                },
                {
                    path: 'remote-session',
                    element: <UnderConstruction />,
                },

            ]
        },
        //!---------Notification
        {
            path: '/notification',
            element: <DashboardLayout />,
            children: [
                {
                    path: 'email-notification',
                    element: <UnderConstruction />,
                },
                {
                    path: 'app-notifications',
                    element: <UnderConstruction />,
                }

            ]
        },
        //!---------Report
        {
            path: '/report',
            element: <UnderConstruction />
        },
        //!---------Settings
        {
            path: '/settings',
            element: <DashboardLayout />,
            children: [
                {
                    path: 'admin-manangement',
                    element: <UnderConstruction />,
                },
                {
                    path: 'role-management',
                    element: <UnderConstruction />,
                },
                {
                    path: 'admin-activity',
                    element: <UnderConstruction />,
                },

            ]

        },
        //!---------Help
        {
            path: '/help',
            element: <UnderConstruction />
        },
        //!---------404 Not Found
        {
            path: '*',
            element: <NotFoundPage />
        },




    ]


    return routes;
}
export default RoutesConfig;