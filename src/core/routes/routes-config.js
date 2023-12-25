import DashboardLayout from "../../layout/dashboardLayout";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import ChargingStation from "../../pages/chargingStation";

const RoutesConfig = () => {

    const routes = [

        {
            path: '/',
            element: <DashboardLayout/>,
            children:[
                {
                    path:'chargestations',
                    element: <ChargingStation/>
                }
            ]
        },
        {
            path: '/login',
            element: <Login />,
        },

    ]


    return routes;
}
export default RoutesConfig;