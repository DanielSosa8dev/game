import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import PlayStationPlusScreen from './screens/PlayStationPlusScreen';
import EpicGamesScreen from './screens/EpicGamesScreen';
import XboxGamePassScreen from './screens/XboxGamePassScreen';
import PrimeGamingScreen from './screens/PrimeGamingScreen';
import SteamScreen from './screens/SteamScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PlayStation" component={PlayStationPlusScreen} />
        <Stack.Screen name="Epic Games" component={EpicGamesScreen} />
        <Stack.Screen name="Xbox" component={XboxGamePassScreen} />
        <Stack.Screen name="Prime Gaming" component={PrimeGamingScreen} />
        <Stack.Screen name="Steam" component={SteamScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
