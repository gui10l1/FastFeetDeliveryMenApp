import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SplashScreen } from '../pages/SplashScreen';
import { ClientRoutes } from './client.routes';
import { useAuth } from '../hooks/useAuth';

const StackNavigator = createStackNavigator();

const Routes: FC = () => {
  const { loading } = useAuth();

  if (loading) {
    return (
      <StackNavigator.Navigator
        screenOptions={{ cardStyle: { flex: 1 }, headerShown: false }}
      >
        <StackNavigator.Screen name="SplashScreen" component={SplashScreen} />
      </StackNavigator.Navigator>
    );
  }

  return <ClientRoutes />;
};

export { Routes };
