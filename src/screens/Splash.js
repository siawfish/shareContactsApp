import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Splash extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../../assets/logo.png')}/>
                </View>
                <View style={styles.descContainer}>
                    <Text style={styles.desc}>CODETRAIN CONTACTS SHARING APP PROJECT</Text>
                    <Text style={styles.small}>By @wolfiesiaw</Text>
                </View>
                <TouchableOpacity >
                    <Text>GET STARTED</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-between',
    },


});
