import React, {Component} from 'react';
import {View, Text, StyleSheet, KeyboardAvoidingView, Image, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {Container,Header, Left, Right, Body, Card, Input, Item, Content, Button , Spinner, Title} from 'native-base'
import { Platform } from '@unimodules/core';


export default class Setting extends Component{
    render(){
        return(
            <View>
                <Header>
                    <Left/>
                    <Body>
                        <Title>Home</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={()=>this.props.navigation.openDrawer()}>
                            <Icon name="bars" color="#000" size={16}></Icon>
                        </Button>
                    </Right>
                </Header>
            </View>
        )
    }
}