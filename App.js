import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/screens/Splash';
import Intro from './src/screens/Intro';
import Signin from './src/screens/Signin';

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
        {/* <Stack.Screen
          options={{
            headerShown:false
          }} 
          name='Welcome'
          component={Intro}
        /> */}
        <Stack.Screen
          options={{
            headerTitleStyle: {
              fontWeight:'100',
              fontSize:30,
            },
            headerStyle: {
              backgroundColor:'#cf53b2',
              height:100
            },
            headerTintColor:'#fff'
          }} 
          name='Sign In'
          component={Signin}
        />
        {/* <Stack.Screen/>
        <Stack.Screen/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


