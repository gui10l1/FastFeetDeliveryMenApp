import { createStackNavigator } from '@react-navigation/stack';
import React, { FC } from 'react';

import { DeliveriesFinished } from '../pages/DeliveriesFinished';
import { Home } from '../pages/Home';
import { RequestDetails } from '../pages/RequestDetails';
import { Requests } from '../pages/Requests';

const StackNavigator = createStackNavigator();

const AuthRoutes: FC = () => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        cardStyle: { flex: 1, backgroundColor: '#4C33CC' },
        headerShown: false,
      }}
    >
      <StackNavigator.Screen name="HomeScreen" component={Home} />
      <StackNavigator.Screen
        name="FinishedDeliveriesScreen"
        component={DeliveriesFinished}
      />
      <StackNavigator.Screen name="RequestsScreen" component={Requests} />
      <StackNavigator.Screen
        name="RequestDetailsScreen"
        component={RequestDetails}
      />
    </StackNavigator.Navigator>
  );
};

export { AuthRoutes };
