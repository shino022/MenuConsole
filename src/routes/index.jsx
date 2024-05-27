import { createBrowserRouter } from 'react-router-dom';

// project import
import MainRoutes from './MainRoutes';
import LoginRoutes from './LoginRoutes';
import ProtectedRoute from './ProtectedRoutes';
import AuthCallback from 'pages/authentication/AuthCallback';
import HomeRoute from './HomeRoutes';

const AuthCallbackRoute = {
  path: '/auth-callback',
  element: <AuthCallback />
};

// ==============================|| ROUTING RENDER ||============================== //
const router = createBrowserRouter([ProtectedRoute(MainRoutes), LoginRoutes, AuthCallbackRoute, HomeRoute], { basename: import.meta.env.VITE_APP_BASE_NAME });
export default router;
