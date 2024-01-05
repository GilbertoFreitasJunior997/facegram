import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from '@/layout';
import { getRoutes } from './_lib';

export const Router = () => {
  const { routes } = getRoutes();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          Component={Layout}>
          {routes}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
