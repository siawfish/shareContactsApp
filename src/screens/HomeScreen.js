import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.infoArea}>
                    <Text style={styles.infoHeader}>Exchange Contact Information</Text>
                    <Text style={styles.info}>Scan this QR below to share your contacts</Text>
                </View>
                <View style={styles.barcodeArea}>

                </View>
                <View style={styles.profileArea}>
                    <Image source={require('../../assets/pp.jpg')} style={styles.avatar}/>
                    <View>
                        <Text style={styles.name}>Gerald Amanor</Text>
                        <Text style={styles.title}>Head of Engineering</Text>
                    </View>
                </View>
                <View style={styles.addConnectArea}>
                    <Text>Want to add new connection?</Text>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Scan QR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'space-between',
        marginHorizontal: 30,
    },

    avatar: {
        width:50,
        height:50,
        borderRadius:25,
        marginRight:10
    },

    profileArea: {
        flexDirection:'row',
        alignItems:'center',
    },

    infoArea: {
        marginVertical:40
    },

    name: {
        fontSize:18,
        paddingVertical:3
    },

    title: {
        color:'#aaa'
    },

    infoHeader: {
        fontSize:18,
        paddingVertical:10,
        fontWeight:'bold'
    },

    info: {
        color:'#aaa',
        fontSize:18,
        letterSpacing:3
    },

    addConnectArea: {
        flexDirection:'row',
        paddingVertical:30,
        paddingHorizontal:40,
        borderTopWidth:1,
        borderTopColor:'#aaa',
        marginLeft:-30,
        marginRight:-30,
        alignItems:"center",
        justifyContent: "center"
    },

    btn: {
        marginLeft:20,
        backgroundColor:'#cf53b2',
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:4
    }
})
