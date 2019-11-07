import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet, KeyboardAvoidingView, Image, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {Container,Header, Thumbnail, Left, Right, Title,Body, Card, Input, Item, Content, Button , Spinner} from 'native-base'
import { Platform } from '@unimodules/core';

export default class Profile extends Component{
    render(){
        return(
            <ScrollView style={{flex: 1}}>
                 <View style={{margin: 20,justifyContent: 'center', alignItems: 'center'}}>
                    <Thumbnail
                        source={require('../images/profile.jpg')}
                    ></Thumbnail>
                    <Text style={{
                        fontWeight: "bold",
                        marginTop: 20
                    }}>Khine Win</Text>
                 </View>
            </ScrollView>
        )
    }
}