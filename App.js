import React,{Component} from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';

import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {Container,Header, Thumbnail, Left, Right, Title,Body, Card, Input, Item, Content, Button , Spinner} from 'native-base'



import Login from './views/Login'
import Register from './views/Register.js'
import Home from './views/Home.js'
import Setting from './views/Setting.js'
import { createDrawerNavigator } from 'react-navigation-drawer';
import Profile from './views/Profile'
import AuthLoading from './views/AuthLoading'

export default class App extends Component {

  render(){  

    const DrawerApp=createDrawerNavigator({    
        
        Dashboard :{
          screen: Home,
          navigationOptions:{            
            drawerLabel:({tintColor})=><Profile></Profile>,
            
           }
        },
        Setting:{
          screen: Setting,
          navigationOptions:{
            drawerLabel: "Setting",
            drawerIcon:({tintColor})=><Icon name="cog" color={tintColor}></Icon>
          }
        }
    },{
       drawerPosition:"right",
       //drawerWidth:150,
       hideStatusBar: false,
       drawerType:"slide",
        contentOptions:{
          activeTintColor: "red",
          inactiveTintColor: "#000"
        }
      
    })

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

    const SwitchNav=createSwitchNavigator({
      AuthLoading: AuthLoading,
      App: DrawerApp,
      Auth: StackApp,
    
    },{
      initialRouteName: "AuthLoading"
    })
    const AppContriner=createAppContainer(SwitchNav)

   

    return(<AppContriner></AppContriner>)
  }
}

