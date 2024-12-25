import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ProjectOneScreen from '../screens/ProjectOneScreen';
import ProjectTwoScreen from '../screens/ProjectTwoScreen';
// Add more project screens as needed

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Project One" component={ProjectOneScreen} />
        {/* Add more project tabs as needed */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
