import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './Splash';
import Intro from './Intro';
import Signin from './Signin';
import Register from './Register';
import Profile from './Profile';
import HomeScreen from './HomeScreen';
import BarcodeScanner from './BarCodeScanner'
import { connect } from 'react-redux'
import { logout } from '../store/actions/authActions'

const Stack = createStackNavigator()

class Navigation extends Component {
  logout = () => {
    this.props.logout()
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {this.props.loggedIn ? 
          <>
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
                headerTintColor:'#fff',
                headerRight:()=><TouchableOpacity onPress={this.logout} style={{marginRight:30}}><Ionicons name="ios-power" size={24} color="black" /></TouchableOpacity>
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
                headerTintColor:'#fff',
                headerRight:()=><TouchableOpacity onPress={this.logout} style={{marginRight:30}}><Ionicons name="ios-power" size={24} color="black" /></TouchableOpacity>
              }}
              name='My Profile'
              component={Profile}
            />
          </> :
          <>
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
          </>
          }
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn:state.persistedReducer.loggedIn
  }
}

const mapDispatchToProps = {
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)


