import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ScreenNames from './screenNames';
import ProfileScreen from '@screens/profile';
import Services from '@screens/Services';
import Colors from '@common/colors';
import { t } from 'i18next';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: Colors.white,
          borderTopWidth: 0,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          height: 70,
          paddingBottom: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = '';

          if (route.name === ScreenNames.Services) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === ScreenNames.DashBoard) {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === ScreenNames.Profile) {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.gray,
      })}
    >
      <Tab.Screen name={ScreenNames.Services} component={Services} options={{ tabBarLabel: t('tabs.services') }}/>
      {/* <Tab.Screen name={ScreenNames.DashBoard} component={DashBoard} /> */}
      <Tab.Screen name={ScreenNames.Profile} component={ProfileScreen} options={{ tabBarLabel: t('tabs.profile') }}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
