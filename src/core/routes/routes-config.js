
import DashboardLayout from "../../layout/dashboardLayout";
import Login from "../../pages/Login";
import { Navigate } from "react-router-dom";

import ChargingStation from "../../pages/chargeStation";

import UnderConstruction from "../../pages/UnderConstruction";
import NotFoundPage from "../../pages/NotFound";
import CTariff from "../../pages/cTariff";
import ATariff from "../../pages/aTariff";
import ChargeStationDetail from "../../components/assetManagement/chargeStations/chargeStationDetail";
import ChargingPoints from "../../pages/chargePoints";
import ChargePointDetail from "../../components/assetManagement/chargePoints/chargePointDetail";
import ChargeStationDetailsCard from "../../components/assetManagement/chargePoints/chargeStationDetailsCard";
import ActiveSession from "../../components/cpoSupport/activeSession/AllActiveSession";
import RfidCards from "../../pages/RfidCards";
import CTax from "../../pages/cTax";
import VidCards from "../../pages/VidCards";
import EvChargers from "../../pages/EvChargers";
import Vehicles from "../../pages/EvVehicles";
import Manufactures from "../../pages/Manufactures";


const RoutesConfig = () => {

    const routes = [

        {
            path: '/',
            element: <Navigate to="/dashboard/live-status" replace />,
        },
        // Test purpose
        {
            path: 'testCard',
            element: <ChargeStationDetailsCard />,
        },
        // 
        {
            path: 'charge-station-detail',
            element: <ChargeStationDetail />,
        }
        ,
        {
            path: 'charge-point-detail',
            element: <ChargePointDetail />,
        },
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
                    element: <RfidCards />,
                },
                {
                    path: 'vid-cards',
                    element: <VidCards />,
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
                    element: < EvChargers />,
                },
                {
                    path: 'ev-vehicles',
                    element: <Vehicles />,
                },
                {
                    path: 'manufacturers',
                    element: <Manufactures />,
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
                    element: <CTariff />,
                },
                {
                    path: 'assign-tariff',
                    element: <ATariff />,
                },
                {
                    path: 'tax',
                    element: <CTax />,
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
                    element: <ActiveSession />,
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