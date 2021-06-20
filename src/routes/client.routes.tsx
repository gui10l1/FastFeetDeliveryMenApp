import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '../pages/Login';

const StackNavigator = createStackNavigator();

const ClientRoutes: FC = () => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        cardStyle: { flex: 1, backgroundColor: '#4C33CC' },
        headerShown: false,
      }}
    >
      <StackNavigator.Screen name="LoginScreen" component={Login} />
    </StackNavigator.Navigator>
  );
};

export { ClientRoutes };
