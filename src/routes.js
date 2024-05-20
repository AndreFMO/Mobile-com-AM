import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Start } from './pages/start';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


export function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Start"
        component={Start}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
