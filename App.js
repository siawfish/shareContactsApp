import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/screens/Splash';
import Intro from './src/screens/Intro';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          options={{
            headerShown:false
          }} 
          name='Splash' 
          component={Splash}
        /> */}
        <Stack.Screen
          options={{
            headerShown:false
          }} 
          name='Welcome'
          component={Intro}
        />
        {/* <Stack.Screen/>
        <Stack.Screen/>
        <Stack.Screen/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


