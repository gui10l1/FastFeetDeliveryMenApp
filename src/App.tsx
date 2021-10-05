import 'react-native-gesture-handler';
import React, { FC } from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider, QueryClient } from 'react-query';

import { Routes } from './routes';
import { AuthContextProvider } from './contexts/authContext';

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
          <View style={{ backgroundColor: '#4C33CC', flex: 1 }}>
            <Routes />
          </View>
        </QueryClientProvider>
      </AuthContextProvider>
    </NavigationContainer>
  );
};

export default App;
