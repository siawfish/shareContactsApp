import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { login } from '../store/actions/authActions'

class Signin extends Component {
    constructor(props){
        super(props)
        this.state= {
            email:null,
            pass:null
        }
    }

    handleInputChange = (name, value) => {
        this.setState({
            [name]:value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        
        let email = this.state.email
        let pass = this.state.pass

        this.props.login(email, pass)
    }

    render() {
        {this.props.loggedIn ? this.props.navigation.navigate('Home') : null}
        return (
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={require('../../assets/signin.png')}/>
                </View>
                {this.props.err ? <Text style={styles.err}>{this.props.err}</Text> : null}
                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <Text>Email</Text>
                        <TextInput keyboardType='email-address' onChangeText={(text)=>this.handleInputChange('email', text)} placeholder='xyz@codetrain.com' placeholderTextColor='#aaa'/>
                    </View>
                    <View style={styles.inputNBContainer}>
                        <Text>Password</Text>
                        <TextInput secureTextEntry={true} onChangeText={(text)=>this.handleInputChange('pass', text)} placeholder='Password' placeholderTextColor='#aaa' secureTextEntry={true}/>
                    </View>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>SIGN IN</Text>
                    </TouchableOpacity>
                    <View style={styles.resetContainer}>
                        <Text>Forgot Password?</Text>
                        <TouchableOpacity onPress={this.onSubmit} style={styles.underline}>
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

    err: {
        paddingVertical:10,
        alignSelf:"center",
        color:'red',
        fontWeight:'bold'
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

const mapStateToProps = (state) => {
    return {
        err:state.err,
        loggedIn:state.loggedIn
    }
}

const mapDispatchToProps = {
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)