import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './Splash';
import Intro from './Intro';
import Signin from './Signin';
import Register from './Register';
import Profile from './Profile';
import HomeScreen from './HomeScreen';
import BarcodeScanner from './BarCodeScanner'
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator()

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown:false
          }} 
          name='Splash' 
          component={Splash}
        />
        <Stack.Screen
          options={{
            headerShown:false
          }} 
          name='Welcome'
          component={Intro}
        />
        <Stack.Screen
          options={{
            headerTitleStyle: {
              fontWeight:'100',
              fontSize:30,
            },
            headerBackTitleVisible:false,
            headerStyle: {
              backgroundColor:'#cf53b2',
              height:100
            },
            headerTintColor:'#fff'
          }} 
          name='Sign In'
          component={Signin}
        />
        <Stack.Screen
          options={{
            headerTitleStyle: {
              fontWeight:'100',
              fontSize:30,
            },
            headerBackTitleVisible:false,
            headerStyle: {
              backgroundColor:'#cf53b2',
              height:100
            },
            headerTintColor:'#fff'
          }}
          name='Register'
          component={Register}
        />
        <Stack.Screen
          options={{
            headerTitleStyle: {
              fontWeight:'100',
              fontSize:30,
            },
            headerBackTitleVisible:false,
            headerStyle: {
              backgroundColor:'#cf53b2',
              height:100
            },
            headerTintColor:'#fff'
          }}
          name='Home'
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false
          }}
          name='Scanner'
          component={BarcodeScanner}
        />
        <Stack.Screen
          options={{
            headerTitleStyle: {
              fontWeight:'100',
              fontSize:30,
            },
            headerBackTitleVisible:false,
            headerStyle: {
              backgroundColor:'#cf53b2',
              height:100
            },
            headerTintColor:'#fff'
          }}
          name='My Profile'
          component={Profile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


