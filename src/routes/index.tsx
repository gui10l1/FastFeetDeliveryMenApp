import { createStackNavigator } from '@react-navigation/stack';
import React, { FC } from 'react';

import { useAuth } from '../hooks/useAuth';
import { SplashScreen } from '../pages/SplashScreen';
import { AuthRoutes } from './auth.routes';
import { ClientRoutes } from './client.routes';

const StackNavigator = createStackNavigator();

const Routes: FC = () => {
  const { loading, user } = useAuth();

  if (loading) {
    return (
      <StackNavigator.Navigator
        screenOptions={{ cardStyle: { flex: 1 }, headerShown: false }}
      >
        <StackNavigator.Screen name="SplashScreen" component={SplashScreen} />
      </StackNavigator.Navigator>
    );
  }

  return user ? <AuthRoutes /> : <ClientRoutes />;
};

export { Routes };
