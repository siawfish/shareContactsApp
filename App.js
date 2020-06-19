import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/screens/Splash';
import Intro from './src/screens/Intro';
import Signin from './src/screens/Signin';
import Register from './src/screens/Register';
import Profile from './src/screens/Profile';
import HomeScreen from './src/screens/HomeScreen';
import BarcodeScanner from './src/screens/BarCodeScanner'
import { Ionicons } from '@expo/vector-icons';
import Navigation from './src/screens/Navigation';
import { Provider } from 'react-redux'
import store from './src/store/store'


export default function App() {
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}


