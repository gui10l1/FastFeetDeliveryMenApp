import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SplashScreen } from '../pages/SplashScreen';

const StackNavigator = createStackNavigator();

const Routes: FC = () => {
  return (
    <>
      <StackNavigator.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false, cardStyle: { flex: 1 } }}
      >
        <StackNavigator.Screen name="SplashScreen" component={SplashScreen} />
      </StackNavigator.Navigator>
    </>
  );
};

export { Routes };
