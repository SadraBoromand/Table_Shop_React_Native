import React, { useState, useContext } from 'react';

// Auth Screens
import Splash from './src/screens/auth/Splash';
import Signup from './src/screens/auth/Signup';
import Signin from './src/screens/auth/Signin';
// end Auth Screens

import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from './src/utils/colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// App Screens
import Home from './src/screens/app/Home';
import Favorites from './src/screens/app/Favorites';
import Profile from './src/screens/app/Profile';
import { Image, StatusBar, View } from 'react-native';
// end App Screens

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import SystemNavigationBar from 'react-native-system-navigation-bar';
import ProductDetails from './src/screens/app/ProductDetails';
import Settings from './src/screens/app/Settings';
import CreateListing from './src/screens/app/CreateListing';
import MyListings from './src/screens/app/MyListings';
import { UserContext } from './App';

SystemNavigationBar.setNavigationColor('white', 'dark');

const ProfileStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="CreateListing" component={CreateListing} />
            <Stack.Screen name="MyListings" component={MyListings} />
        </Stack.Navigator>
    )
}

const Tabs = () => (
    <Tab.Navigator screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
            let icon;

            if (route.name === 'Home') {
                icon = focused
                    ? require('./src/assets/tabs/home_active.png')
                    : require('./src/assets/tabs/home.png');
            } else if (route.name === 'ProfileStack') {
                icon = focused
                    ? require('./src/assets/tabs/profile_active.png')
                    : require('./src/assets/tabs/profile.png');
            } else if (route.name === 'Favorites') {
                icon = focused
                    ? require('./src/assets/tabs/bookmark_active.png')
                    : require('./src/assets/tabs/bookmark.png');
            }

            // You can return any component that you like here!
            return <Image style={{ width: 24, height: 24 }} source={icon} />;
        },
        tabBarShowLabel: false,
        tabBarStyle: {
            borderTopColor: colors.lightGrey,
            backgroundColor: colors.white
        }
    })}>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Favorites' component={Favorites} />
        <Tab.Screen name='ProfileStack' component={ProfileStack} />
    </Tab.Navigator>
)

const Routes = () => {

    const { user } = useContext(UserContext);
    console.log('user context', user);

    const theme = {
        colors:
        {
            background: colors.white,
        }
    }

    return (
        <>
            <StatusBar
                backgroundColor="#fff"
                barStyle={'dark-content'}
            />
            <NavigationContainer theme={theme}>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    {user?.token ? (
                        <>
                            <Stack.Screen name="Tabs" component={Tabs} />
                            <Stack.Screen name="ProductDetails" component={ProductDetails} />
                            <Stack.Screen name="Settings" component={Settings} />
                        </>
                    ) : (
                        <>
                            <Stack.Screen name="Splash" component={Splash} />
                            <Stack.Screen name="Signin" component={Signin} />
                            <Stack.Screen name="Signup" component={Signup} />
                        </>
                    )}
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
};

export default React.memo(Routes);

