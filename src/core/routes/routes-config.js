import Home from "../../pages/Home";
import Login from "../../pages/Login";
import AddRfidCard from "../../components/rfid/AddRfidCard";

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
            path: '/addrfid',
            element: <AddRfidCard />,
        },

    ]


    return routes;
}
export default RoutesConfig;