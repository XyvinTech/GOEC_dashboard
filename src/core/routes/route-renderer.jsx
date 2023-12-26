import { useRoutes } from 'react-router-dom';
import RoutesConfig from './routes-config';

const RouteRenderer = () => {
  const routes = useRoutes(RoutesConfig());
  return routes;
};

export default RouteRenderer;