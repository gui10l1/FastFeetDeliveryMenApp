import 'react-native-gesture-handler';
import React, { FC } from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Routes } from './routes';
import { AuthContextProvider } from './contexts/authContext';

const App: FC = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthContextProvider>
        <View style={{ backgroundColor: '#4C33CC', flex: 1 }}>
          <Routes />
        </View>
      </AuthContextProvider>
    </NavigationContainer>
  );
};

export default App;
