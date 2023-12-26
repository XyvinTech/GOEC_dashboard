import Home from "../../pages/Home";
import Login from "../../pages/Login";
import AddChargingStation from "../../ui/charging-stations/AddChargingStation";

const RoutesConfig = () => {

    const routes = [

        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/login',
            element: <Login />,
        },
        {
            path:'/test',
            element: <AddChargingStation />,
        }

    ]


    return routes;
}
export default RoutesConfig;