import { useAuth } from 'contexts/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
// recieve the children and inject it into the RequireAuth component
const ProtectedRoute = (route) => {
  return {
    ...route,
    element: <RequireAuth>{route.element}</RequireAuth>
  };
};
function RequireAuth({ children }) {
  const { user } = useAuth();
  const location = useLocation();
  console.log(user);
  useEffect(() => {
    if (!user) {
      // Redirect to the login page (Hosted UI URL)
      // Assuming '/login' is your route that handles redirection to the Cognito Hosted UI
      // window.location.href =
      // 'https://menu.auth.us-east-1.amazoncognito.com/logout?client_id=ggb2ql4f7m4dki66882h7mhi1&logout_uri=http%3A%2F%2Flocalhost%3A3000%2Fhome';

      return <Navigate to="/home" state={{ from: location }} replace />;
    }
  }, [user, location]);

  return children;
}

export default ProtectedRoute;
