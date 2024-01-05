import { ROUTES } from '../routes';
import { Route } from 'react-router-dom';
import { getRoutePath } from './get-route-path';

export const getRoutes = () => {
  const routes = ROUTES.map(route => {
    const { name, page } = route;

    const path = getRoutePath(name);

    return (
      <Route
        key={path}
        path={path}
        Component={page}
      />
    );
  });

  return {
    routes,
  };
};
