import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'contexts/AuthContext';

export default function AuthCallback() {
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const token = new URLSearchParams(window.location.hash).get('id_token');
    console.log(token);
    if (token) {
      login({ token }); // Log the user in
      // Check if the redirect location was passed in state
      console.log(location);
      // const from = location.state?.from?.pathname || '/protected';
      navigate('/'); // Redirect to the originally requested page or to a default page
    } else {
      navigate('/home'); // Redirect to home if no token found
    }
  }, [login, navigate]);

  return <div>Loading...</div>;
}
