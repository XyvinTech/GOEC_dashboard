
import DashboardLayout from "../../layout/dashboardLayout";
import Login from "../../pages/Login";
import { Navigate } from "react-router-dom";

import ChargingStation from "../../pages/chargingStation";

import UnderConstruction from "../../pages/UnderConstruction";
import NotFoundPage from "../../pages/NotFound";
import ChargeStationDetail from "../../components/assetManagement/chargingStations/chargeStationDetail";
import AllActiveSession from "../../components/cpoSupport/activeSession/AllActiveSession"

const RoutesConfig = () => {

    const routes = [

        {
            path: '/',
            element: <DashboardLayout />,
            children: [

                {
                    path: '/',
                    element: <Navigate to="/dashboard/live-status" replace />,
                },
                //!---------Dashboard
                {
                    path: 'dashboard',
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
                    path: 'asset-management',
                    element: <DashboardLayout />,
                    children: [
                        {
                            path: 'charge-stations',
                            element: <ChargingStation />,
                        },
                        {
                            path: 'charge-points',
                            element: <UnderConstruction />,
                        },

                        {
                            path: 'charge-station-detail',
                            element: <ChargeStationDetail />,
                        }
                    ]
                },
                //!---------Tag management
                {
                    path: 'tag-management',
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
                    path: 'data-management',
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
                            path: 'manufactures',
                            element: <UnderConstruction />,
                        }
                    ]
                },

                //!---------Charging Network
                {
                    path: 'charging-network',
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
                    path: 'accounts',
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
                    path: 'crm',
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
                    path: 'tariff',
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
                    path: 'cpo-support',
                    element: <DashboardLayout />,
                    children: [
                        {
                            path: 'active-session',
                            element: <AllActiveSession/>,
                        },
                        {
                            path: 'remote-session',
                            element: <UnderConstruction />,
                        },

                    ]
                },
                //!---------Notification
                {
                    path: 'notification',
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

                //!---------Settings
                {
                    path: 'settings',
                    children: [
                        {
                            path: 'admin-management',
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
                //!---------Report
                {
                    path: 'report',
                    element: <UnderConstruction />
                },
                //!---------Help
                {
                    path: 'help',
                    element: <UnderConstruction />
                },
            ]
        },


        {
            path: '/login',
            element: <Login />,
        },


        {
            path: '/forgot-password',
            element: <UnderConstruction />,
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