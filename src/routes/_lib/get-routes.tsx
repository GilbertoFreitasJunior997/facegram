import { ROUTES } from '../routes';
import { Route } from 'react-router-dom';

export const getRoutes = () => {
  const routes = ROUTES.map(route => {
    const { name, page } = route;

    const path = `/${name.toLowerCase()}`;

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
