import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'


import Login from './views/Login'
import Register from './views/Register.js'
import Home from './views/Home.js'

export default class App extends Component {

  render(){

    const StackApp=createBottomTabNavigator({
        Login: {
          screen: Login,
          navigationOptions:{
            tabBarLabel: "Sign In",
            tabBarIcon:({tintColor})=><Icon name="sign-in-alt" color={tintColor}></Icon>
            
            
          }
        },
        Register: {
          screen: Register,
          navigationOptions:{
            tabBarLabel: "Sign Up",
            tabBarIcon:({tintColor})=><Icon name="user-plus" color={tintColor}></Icon>
           
          }
        },
        Home: {
          screen: Home,
          navigationOptions:{
            tabBarLabel: "Dashboard",
            tabBarIcon:({tintColor})=><Icon name="tachometer-alt" color={tintColor}></Icon>
           
          }
        }
    },
    {
      initialRouteName: "Login",
    
      tabBarOptions:{
        activeTintColor: "red",
        inactiveTintColor: "#000",
        labelStyle:{
          fontSize: 12
        },
       
      },
      
    })
    const AppContriner=createAppContainer(StackApp)

    return(<AppContriner></AppContriner>)
  }
}

