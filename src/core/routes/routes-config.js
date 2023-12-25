import Home from "../../pages/Home";
import Login from "../../pages/Login";

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

    ]


    return routes;
}
export default RoutesConfig;