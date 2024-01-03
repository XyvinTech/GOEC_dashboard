
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
import RfidCards from "../../pages/RfidCards";
import CTax from "../../pages/cTax";
import VidCards from "../../pages/VidCards";
import EvChargers from "../../pages/EvChargers";
import Vehicles from "../../pages/EvVehicles";
import Manufactures from "../../pages/Manufactures";
import StartRemoteSession from "../../pages/StartRemoteSession";
import ActiveSessionPage from "../../pages/ActiveSession";
import AMSettings from "../../pages/AMSettings";
import AASettings from "../../pages/AASettings";
import RMSettings from "../../pages/RMSettings";
import ChargingTransactions from "../../pages/ChargingTransactions";
import ChargerLogs from "../../pages/ChargerLogs";
import BookingTransactions from "../../pages/BookingTransactions";
import SearchCustomer from "../../pages/SearchCustomer";
import CustomerList from "../../pages/CustomerList";
import LiveStatus from "../../pages/LiveStatus";
import Reports from "../../pages/Reports";
import Notification from "../../pages/Notification";
import FilterNetwork from "../../components/chargingNetwork/FilterNetwork";
import UserDetails from "../../components/crm/userDetails";

const RoutesConfig = () => {

    const routes = [

        {
            path: '/',
            element: <Navigate to="/dashboard/live-status" replace />,
        },
        // Test purpose
        {
            path: '/user-details',
            element: <UserDetails />,
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
                    element: <LiveStatus />,
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
                    element: <ChargingStation />,
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
                    element: <ChargingTransactions />,
                },
                {
                    path: 'charger-logs',
                    element: <ChargerLogs />,
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
                    path: 'financials',
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
                    element: <SearchCustomer />,
                },
                {
                    path: 'customer-list',
                    element: <CustomerList />,
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
                    element: <ActiveSessionPage />,
                },
                {
                    path: 'remote-session',
                    element: <StartRemoteSession />,
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
                    element: <Notification />,
                },
                {
                    path: 'app-notifications',
                    element: <Notification />,
                }

            ]
        },
        //!---------Report
        {
            path: '/report',
            element: <DashboardLayout />,
            children: [
                {
                    path: '',
                    element: <Reports />,
                }
            ]
        },
        //!---------Settings
        {
            path: '/settings',
            element: <DashboardLayout />,
            children: [
                {
                    path: 'admin-manangement',
                    element: <AMSettings />,
                },
                {
                    path: 'role-management',
                    element: <RMSettings />,
                },
                {
                    path: 'admin-activity',
                    element: <AASettings />,
                },

            ]

        },
        //!---------Help
        {
            path: '/help',
            element: <DashboardLayout />,
            children: [
                {
                    path: '',
                    element: <UnderConstruction />,
                }
            ]
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