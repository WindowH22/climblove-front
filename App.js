import React from 'react';
import { StatusBar } from 'react-native';
import { AuthProvider } from './src/contexts/AuthContext';
import AppNavigator from './src/navigation/AppNavigator';
import { THEME } from './src/constants/theme';

const App = () => {
  return (
    <AuthProvider>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor={THEME.colors.primary} 
      />
      <AppNavigator />
    </AuthProvider>
  );
};

export default App;

