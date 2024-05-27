import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isChecking, setIsChecking] = useState(true); // Renamed for clarity

  const validateToken = (token) => {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.exp * 1000 > Date.now();
  };

  const login = (user) => {
    if (user && user.token && validateToken(user.token)) {
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    // Redirect if needed
    window.location.href =
      'https://menu.auth.us-east-1.amazoncognito.com/logout?client_id=ggb2ql4f7m4dki66882h7mhi1&logout_uri=http%3A%2F%2Flocalhost%3A3000%2Fhome';

    // window.location.href = 'https://...logout_uri...';
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && validateToken(storedUser.token)) {
      console.log('Stored User: ', storedUser);
      setUser(storedUser);
    } else {
      if (!isChecking) logout(); // Only call logout if the initial check is complete
    }
    setIsChecking(false); // Indicate that checking is complete
  }, []); // Remove `isChecking` from dependencies to prevent re-execution

  if (isChecking) {
    return <div>Loading...</div>; // Render loading screen while checking
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};
