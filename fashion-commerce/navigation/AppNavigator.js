// navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }} // Hide the header for HomeScreen
      />
        <Stack.Screen name="Cart"
           component={CartScreen}
           options={{headerShown: false}}
        />
    </Stack.Navigator>
  );
};

export default AppNavigator;
