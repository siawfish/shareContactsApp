import React, { Component } from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { Entypo, Feather, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';

export default class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.profileArea}>
                    <Image source={require('../../assets/pp.jpg')} style={styles.avatar}/>
                    <View>
                        <Text style={styles.name}>Gerald Amanor</Text>
                        <Text style={styles.title}>Head of Engineering</Text>
                    </View>
                </View>

                <View style={styles.profileIcons}>
                    <View style={styles.iconContainer}>
                        <Entypo name="twitter-with-circle" size={24} color="black" />
                    </View>
                    <View style={styles.iconContainer}>
                        <Entypo name="linkedin-with-circle" size={24} color="black" />
                    </View>
                </View>

                <View style={styles.fields}>
                    <Feather name="phone" size={18} color="black" />
                    <Text style={styles.info}>+233 (245) 234 123</Text>
                </View>
                <View style={styles.fields}>
                    <MaterialCommunityIcons name="email-open-outline" size={18} color="black" />
                    <Text style={styles.info}>xyz@application.com</Text>
                </View>
                <View style={styles.fields}>
                    <SimpleLineIcons name="location-pin" size={18} color="black" />
                    <Text style={styles.info}>+233 (245) 234 123</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"flex-start",
        marginHorizontal:30,
        marginVertical:40
    },

    avatar: {
        width:60,
        height:60,
        borderRadius:30,
        marginRight:10
    },

    profileArea: {
        flexDirection:'row',
        alignItems:'center',
    },

    name: {
        fontSize:18,
        paddingVertical:3
    },

    title: {
        color:'#aaa'
    },

    profileIcons: {
        flexDirection:'row',
        marginVertical:30
    },

    iconContainer: {
        paddingHorizontal: 5,
        
    },

    fields: {
        flexDirection:'row',
        paddingVertical:15
    },
    
    info: {
        marginLeft:15
    }
})