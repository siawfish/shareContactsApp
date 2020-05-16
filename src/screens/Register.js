import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export default class Register extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.addImgContainer}>
                    <FontAwesome name="image" size={50} color="black" />
                    <Text style={styles.addPhoto}>ADD PROFILE PHOTO</Text>
                </TouchableOpacity>
                <View style={styles.form}>
                    <View style={styles.inputsContainer}>

                        <View style={styles.inputContainer}>
                            <Text>Full Name</Text>
                            <TextInput placeholder='Wolfie Siaw' placeholderTextColor='#aaa'/>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text>Email</Text>
                            <TextInput placeholder='wolfiesiaw@mail.com' placeholderTextColor='#aaa'/>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text>Phone Number</Text>
                            <TextInput placeholder='+233 577 009 890' placeholderTextColor='#aaa'/>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text>Role</Text>
                            <TextInput placeholder='Software Engineer' placeholderTextColor='#aaa'/>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text>Twitter</Text>
                            <TextInput placeholder='@siawfish' placeholderTextColor='#aaa'/>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text>LinkedIn</Text>
                            <TextInput placeholder='mcamanor' placeholderTextColor='#aaa'/>
                        </View>

                    </View>
                    <TouchableOpacity style={styles.registerBtn}>
                        <Text style={styles.register}>REGISTER</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#fff',
        flex:1
    },

    addImgContainer: {
        height:220,
        backgroundColor:'#d0d0d0',
        alignItems:'center',
        justifyContent:'center'
    },

    addPhoto: {
        fontSize:12
    },

    form: {
        flex:1,
        marginHorizontal:30,
    },

    inputContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderBottomColor:'#d0d0d0',
        paddingVertical:15,
        marginVertical:8

    },

    registerBtn: {
        paddingVertical:20,
        backgroundColor:'#cf53b2',
        alignItems:'center',
        marginVertical:20,
        borderRadius:4
    },

    register: {
        color:'#fff',
        letterSpacing:3,
        fontSize:18,
        fontWeight:'400'
    }
})
