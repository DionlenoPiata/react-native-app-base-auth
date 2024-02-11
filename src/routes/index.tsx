import React from 'react';
import {useAuth} from '../contexts/auth';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import Splash from '../screens/Splash';

const Routes: React.FC = () => {
  const {signed, loading} = useAuth();

  if (loading) {
    return <Splash />;
  }
  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
