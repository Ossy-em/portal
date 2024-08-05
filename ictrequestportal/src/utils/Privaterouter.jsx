// utils/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './Firebase';

const PrivateRoute = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    // You can render a loading spinner or a loading message here
    return <div>Loading...</div>;
  }

  if (error) {
    // Handle the error state if necessary
    console.error('Error checking authentication state:', error);
    return <div>Error</div>;
  }

  return user ? children : <Navigate to="/" />;
};

export default PrivateRoute;