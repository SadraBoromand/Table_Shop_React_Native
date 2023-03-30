import React, { useState } from 'react';

import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// App Screens
import { StatusBar } from 'react-native';
// end App Screens

import SystemNavigationBar from 'react-native-system-navigation-bar';
import Routes from './Routes';

SystemNavigationBar.setNavigationColor('white', 'dark');

export const UserContext = React.createContext();

const App = () => {

  const [user, setUser] = useState();
  console.log('user state', user);

  const isSignedIn = false;

  return (
    <SafeAreaProvider>
      <StatusBar
        backgroundColor="#fff"
        barStyle={'dark-content'}
      />
      <UserContext.Provider value={{ user, setUser }}>
        <Routes />
      </UserContext.Provider>
    </SafeAreaProvider>
  );
};

export default App;

