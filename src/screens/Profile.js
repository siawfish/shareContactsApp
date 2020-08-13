import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, Alert } from 'react-native'
import { Entypo, Feather, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { connect } from 'react-redux'
import { clearErr } from '../store/actions/authActions'

class Profile extends Component {

    componentWillUnmount(){
        this.props.clearErr()
    }

    render() { 
          
        {this.props.auth == false ? this.props.navigation.navigate('Welcome') : null}
        const { name, role, twitter, linkedIn, phone, email, loc } = this.props.route.params
        
        return (
            
            <View style={styles.container}>
                <View style={styles.profileArea}>
                    <Image source={require('../../assets/pp.jpg')} style={styles.avatar}/>
                    <View>
                        <Text style={styles.name}>{name && name}</Text>
                        <Text style={styles.title}>{role && role}</Text>
                    </View>
                </View>

                <View style={styles.profileIcons}>
                    <View style={styles.iconContainer}>
                        <Entypo name="twitter-with-circle" size={24} color="black" /><Text> {twitter && twitter}</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Entypo name="linkedin-with-circle" size={24} color="black" /><Text> {linkedIn && linkedIn}</Text>
                    </View>
                </View>

                <View style={styles.fields}>
                    <Feather name="phone" size={18} color="black" />
                    <Text style={styles.info}>{phone && phone}</Text>
                </View>
                <View style={styles.fields}>
                    <MaterialCommunityIcons name="email-open-outline" size={18} color="black" />
                    <Text style={styles.info}>{email && email}</Text>
                </View>
                <View style={styles.fields}>
                    <SimpleLineIcons name="location-pin" size={18} color="black" />
                    <Text style={styles.info}>{loc && loc}</Text>
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
        flexDirection:'row',
        alignItems:"center"
    },

    fields: {
        flexDirection:'row',
        paddingVertical:15
    },
    
    info: {
        marginLeft:15
    }
})

const mapStateToProps = (state) =>{
    return {
        auth:state.loggedIn,
    }
}

const mapDispatchToProps= {
    clearErr
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
