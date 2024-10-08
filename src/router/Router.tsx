// ** Router imports
import { lazy } from 'react';

// ** Router imports
import { useRoutes, Navigate } from 'react-router-dom';

// ** Layouts
import BlankLayout from '../layouts/BlankLayout.tsx';

// ** Components
const Error = lazy(() => import('../views/pages/Error'));
const Login = lazy(() => import('../views/authentication/Login'));
const NotAuthorized = lazy(() => import('../views/pages/NotAuthorized'));

const Router = () => {
  const routes = useRoutes([
    {
      path: '/',
      index: true,
      element: <Navigate replace to="/login" />
    },
    {
      path: '/login',
      element: <BlankLayout />,
      children: [{ path: '/login', element: <Login /> }]
    },
    {
      path: '/auth/not-auth',
      element: <BlankLayout />,
      children: [{ path: '/auth/not-auth', element: <NotAuthorized /> }]
    },
    {
      path: '*',
      element: <BlankLayout />,
      children: [{ path: '*', element: <Error /> }]
    }
  ]);

  return routes;
};

export default Router;
