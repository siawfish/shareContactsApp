import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import QRCode from 'react-native-qrcode-svg'
import { connect } from 'react-redux'
import { syncUser } from '../store/actions/authActions'

class HomeScreen extends Component {

    componentDidMount(){
        this.props.syncUser(this.props.auth.uid)
    }
    
    scan = () => {
        const { navigation } = this.props
        navigation.navigate('Scanner')
    }

    gotoPro = () => {
        const { navigation, user } = this.props
        navigation.navigate('My Profile', {...user})
    }
    render() {
        {this.props.loggedIn == false ? navigation.navigate('Welcome') : null}
        return (
            <View style={styles.container}>
                <View style={styles.infoArea}>
                    <Text style={styles.infoHeader}>Exchange Contact Information</Text>
                    <Text style={styles.info}>Scan this QR below to share your contacts</Text>
                </View>
                {
                    this.props.auth ? 
                    <View style={styles.barcodeArea}>
                        <QRCode value={this.props.auth.uid && this.props.auth.uid} size={300}/>
                    </View> :
                    null
                }
                {
                this.props.user ? 
                <TouchableOpacity onPress={this.gotoPro} style={styles.profileArea}>
                    <Image source={require('../../assets/pp.jpg')} style={styles.avatar}/>
                    <View>
                        <Text style={styles.name}>{this.props.user.name && this.props.user.name}</Text>
                        <Text style={styles.title}>{this.props.user.role && this.props.user.role}</Text>
                    </View>
                </TouchableOpacity> : null
                }
                <View style={styles.addConnectArea}>
                    <Text>Want to add new connection?</Text>
                    <TouchableOpacity onPress={this.scan} style={styles.btn}>
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
        marginTop:40
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
    },

    barcodeArea: {
        flexDirection: "row",
        justifyContent:"center"
    }
})

const mapStateToProps = (state) => {   
    return {
        loggedIn:state.loggedIn,
        auth:state.persistedReducer.creds,
        user:state.usersReducer.user
    }
}

const mapDispatchToProps = {
    syncUser
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
