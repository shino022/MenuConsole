import { useEffect } from 'react';

const LoginWithAws = () => {
  useEffect(() => {
    // Replace 'https://example.com' with the desired URL
    // window.location.href = 'https://menu.auth.us-east-1.amazoncognito.com/login?client_id=ggb2ql4f7m4dki66882h7mhi1&response_type=token&scope=email+openid&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Ffree%2Fauth-callback';
    window.location.href = 'https://menu.auth.us-east-1.amazoncognito.com/oauth2/authorize?client_id=ggb2ql4f7m4dki66882h7mhi1&response_type=token&scope=email+openid&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth-callback';
  }, []);

  return null;
};

export default LoginWithAws;
