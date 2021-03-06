import 'react-native-gesture-handler';
import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Routes } from './routes';

const App: FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#4c33cc" />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
