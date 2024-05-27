import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import LoginWithAws from 'pages/authentication/LoginWithAws';

// render - login
// const AuthLogin = Loadable(lazy(() => import('pages/authentication/login')));
const AuthRegister = Loadable(lazy(() => import('pages/authentication/register')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: '/',
  children: [
    {
      path: '/login',
      element: <LoginWithAws />
    },
    {
      path: '/register',
      element: <AuthRegister />
    }
  ]
};

export default LoginRoutes;
