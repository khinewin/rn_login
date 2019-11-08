import React, {Component} from 'react';
import {View, Text, StyleSheet, KeyboardAvoidingView, Image, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {Container, Card, Input, Item, Content, Button , Spinner} from 'native-base'
import { Platform } from '@unimodules/core';

export default class Register extends Component{

    constructor(props){
        super(props)
        this.state=({sinnerLoading: false})
    }

    doSignin=()=>{
        this.setState({sinnerLoading: true})
    }

    render(){
        return(
            <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS=="android" ? "padding": ''}>
            <Container style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                    source={require("../images/logo.jpg")}
                    style={{width: 200, height: 200}}
                    ></Image>
                </View>
                <Content style={styles.formContainer}>
                <Item rounded style={styles.inputGroup}>
                        <Input placeholder='Username'/>
                    </Item>
                    <Item rounded style={styles.inputGroup}>
                        <Input placeholder='Email'/>
                    </Item>
                    <Item rounded style={styles.inputGroup}>
                        <Input placeholder='Password'/>
                    </Item>
                    <Item rounded style={styles.inputGroup}>
                        <Input placeholder='Retype Password'/>
                    </Item>
                    <Button rounded light style={{justifyContent:'center'}} onPress={()=>this.doSignin()}>
                        <Text style={{color: "royalblue", fontSize: 20}}>Signup</Text>
                        {this.state.sinnerLoading && (<Spinner color="royalblue"></Spinner>)}
                    </Button>

                    
                    
                </Content>
                
            </Container>
            </KeyboardAvoidingView>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex: 1
    },
    inputGroup:{
        marginBottom: 20
    },
    formContainer:{
        padding: 20
    },
    imageContainer:{
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20
    }
})