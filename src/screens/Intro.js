import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'


export default class Intro extends Component {
    signIn = () => {
        const { navigation } = this.props
        navigation.navigate('Sign In')
    }

    register = () => {
        const { navigation } = this.props
        navigation.navigate('Register')
    }
    render() {
        return (
            <View style={styles.container}>
                
                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={require('../../assets/welcome.png')}/>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.textHeading}>
                        KEEP IN TOUCH WITH PEOPLE IN THE MOST CONVENIENT WAY EVER
                    </Text>
                    <Text style={styles.text}>
                        Sign in or register with your email
                    </Text>
                </View>

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity onPress={this.register} style={styles.btn}>
                        <Text style={styles.btnText}>REGISTER</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.signIn} style={styles.btn}>
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
        height:500,
    },

    img: {
        width:'100%',
        height:500,
    },

    textContainer: {
        marginVertical:30,
        marginHorizontal:30
    },

    textHeading: {
        fontWeight: '600',
        fontSize: 20,
        marginVertical:20,
        letterSpacing:3
    },
    
    text: {
        fontWeight:'100',
        fontSize:18
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
