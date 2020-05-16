import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity } from 'react-native'

export default class Signin extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={require('../../assets/signin.png')}/>
                </View>
                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <Text>Email</Text>
                        <TextInput placeholder='xyz@codetrain.com' placeholderTextColor='#aaa'/>
                    </View>
                    <View style={styles.inputNBContainer}>
                        <Text>Password</Text>
                        <TextInput placeholder='Password' placeholderTextColor='#aaa' secureTextEntry={true}/>
                    </View>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>SIGN IN</Text>
                    </TouchableOpacity>
                    <View style={styles.resetContainer}>
                        <Text>Forgot Password?</Text>
                        <TouchableOpacity style={styles.underline}>
                            <Text style={styles.reset}>Reset Password</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff'
    },

    imgContainer: {
        width:'100%',
        height:250,
    },

    img: {
        width:'100%',
        height:250,
        resizeMode:'center'
    },

    formContainer: {
        marginVertical:50,
        marginHorizontal:50
    },

    inputContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderBottomColor:'#d0d0d0',
        paddingVertical:15
    },

    inputNBContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:15,
    },

    btn:{
        paddingVertical:20,
        alignItems:'center',
        backgroundColor: '#cf53b2',
        marginVertical:20,
        borderRadius:4
    },

    btnText: {
        color:'#fff',
        letterSpacing:3,
        fontWeight:'400'
    },

    resetContainer: {
        flexDirection:'row',
        marginVertical:30,
    },

    underline: {
        borderBottomColor:'#cf53b2',
        borderBottomWidth:1,
        marginStart:10
    },
    
    reset: {
        paddingBottom:3
    }
})