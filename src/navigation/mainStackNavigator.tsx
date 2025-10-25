import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ScreenNames from './screenNames';
import AuthStackNavigator from './authStackNavigator';

import SplashScreen from '@screens/splash';
import BottomTabNavigator from './bottomTabNavigator';
import CardDetails from '@screens/CardDetails';

const Stack = createStackNavigator();

const MainStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.Splash}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={ScreenNames.Splash} component={SplashScreen} />
      <Stack.Screen name={ScreenNames.Auth} component={AuthStackNavigator} />
      <Stack.Screen
        name={ScreenNames.BottomTabs}
        component={BottomTabNavigator}
      />
      <Stack.Screen name={ScreenNames.CardDetails} component={CardDetails} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
