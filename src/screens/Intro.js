import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'


export default class Intro extends Component {
    render() {
        return (
            <View style={styles.container}>
                
                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={require('../../assets/welcome.png')}/>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.textHeading}>
                        KEEP IN TOUCH WITH PEOPLE WITH THE MOST CONVENIENT WAY EVER
                    </Text>
                    <Text style={styles.text}>
                        Sign in or register with your email
                    </Text>
                </View>

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>REGISTER</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>SIGN IN</Text>
                    </TouchableOpacity>
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
        height:450,
    },

    img: {
        width:'100%',
        height:450,
    },

    textContainer: {
        marginVertical:30,
        marginHorizontal:30
    },

    textHeading: {
        fontWeight: '400',
        fontSize: 18,
        marginVertical:20
    },
    
    text: {
        color:'#aaa'
    },

    buttonsContainer: {
        flexDirection:'row',
        justifyContent:"space-between",
        marginHorizontal:60,
        marginVertical:70
    },

    btnText: {
        fontWeight: '400',
        fontSize: 18,
        padding:0
    },

    btn: {
        borderBottomWidth: 3,
        borderBottomColor: '#cf53b2',
        padding:3
    }
})
