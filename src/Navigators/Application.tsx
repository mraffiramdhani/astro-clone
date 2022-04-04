import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '@/Screens/Home';

const Tab = createBottomTabNavigator();

const Application = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Application;
