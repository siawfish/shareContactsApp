import React, { Component } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Splash extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../../assets/logo.png')}/>
                </View>
                <View style={styles.betterAlign}>
                    <View style={styles.descContainer}>
                        <Text style={styles.desc}>CODETRAIN CONTACTS SHARING APP PROJECT</Text>
                        <Text style={styles.small}>By @wolfiesiaw</Text>
                    </View>
                    <TouchableOpacity style={styles.getStartedContainer}>
                        <Text style={styles.getStarted}>GET STARTED</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems:'center',
    },

    logoContainer: {
        marginTop:150,
    },

    logo: {
        width:300,
        height:60,
        resizeMode:'center'
    },

    betterAlign: {
        flex:1,
        justifyContent:'space-between',
        marginVertical:150,
        alignItems:'center',
    },

    descContainer: {
        alignItems:'center',
        width:300
    },

    desc: {
        fontSize:25,
        textAlign:'center',
        marginVertical:20,
        fontWeight:'300',
        lineHeight:45,
        letterSpacing:3
    },

    small: {
        fontWeight:'100'
    },

    getStartedContainer: {
        borderBottomWidth: 3,
        borderBottomColor: '#cf53b2',
        padding:5
    }
});
