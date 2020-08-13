import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { register, clearErr } from '../store/actions/authActions'

class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:'',
            email:'',
            pass:'',
            phone:'',
            role:'',
            twitter:'',
            linkedIn:'',
            err:''
        }
    }

    componentDidMount(){
        this.props.clearErr()
    }

    handleInputChange = (name, value) => {
        this.setState({
            [name]:value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.setState({
            err:''
        })

        let cred = {
            name : this.state.name,
            email : this.state.email,
            pass: this.state.pass,
            phone : this.state.phone,
            role : this.state.role,
            twitter : this.state.twitter,
            linkedIn : this.state.linkedIn,
            loc:"Kumasi, Ghana"
        }
        const validateName = /^[a-zA-Z ]+$/
        const validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        const validateTwitter = /^[A-Za-z0-9_]{1,15}$/
        const validatePass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
        if(cred.name==""){
            this.setState({
                err:'Enter your name'
            })
            return false
        }
        if(!cred.name.match(validateName)){
            this.setState({
                err:'Enter a valid name'
            })
            return false
        }
        if(!validateEmail.test(cred.email)){
            this.setState({
                err:'Enter a valid email address'
            })
            return false
        }
        if(cred.role==""){
            this.setState({
                err:'Enter your role'
            })
            return false
        }
        if(!cred.twitter.match(validateTwitter)){
            this.setState({
                err:'Enter a valid twitter handle'
            })
            return false
        }
        if(!cred.pass.match(validatePass)){
            this.setState({
                err:'Password must be 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character'
            })
            return false
        }
        this.props.register(cred)
    }
    render() {
        if(this.props.loggedIn){
            this.props.navigation.navigate('Home')
        }
        return (
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
                <TouchableOpacity style={styles.addImgContainer}>
                    <FontAwesome name="image" size={50} color="black" />
                    <Text style={styles.addPhoto}>ADD PROFILE PHOTO</Text>
                </TouchableOpacity>
                <View style={styles.form}>
                    {this.state.err ? <Text style={styles.err}>{this.state.err}</Text> : null}
                    {this.props.err ? <Text style={styles.err}>{this.props.err}</Text> : null}
                    <ScrollView style={styles.inputsContainer} showsVerticalScrollIndicator='false'>
                        <View style={styles.inputContainer}>
                            <Text>Full Name</Text>
                            <TextInput autoFocus={true} autoCapitalize='words' onChangeText={(text)=>{this.handleInputChange('name', text)}} placeholder='Wolfie Siaw' placeholderTextColor='#aaa'/>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text>Email</Text>
                            <TextInput keyboardType='email-address' onChangeText={(text)=>{this.handleInputChange('email', text)}} placeholder='wolfiesiaw@mail.com' placeholderTextColor='#aaa'/>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text>Password</Text>
                            <TextInput secureTextEntry={true} onChangeText={(text)=>{this.handleInputChange('pass', text)}} placeholderTextColor='#aaa'/>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text>Phone Number</Text>
                            <TextInput keyboardType='number-pad' onChangeText={(text)=>{this.handleInputChange('phone', text)}} placeholder='+233 577 009 890' placeholderTextColor='#aaa'/>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text>Role</Text>
                            <TextInput onChangeText={(text)=>{this.handleInputChange('role', text)}} placeholder='Software Engineer' placeholderTextColor='#aaa'/>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text>Twitter</Text>
                            <TextInput keyboardType='twitter' onChangeText={(text)=>{this.handleInputChange('twitter', text)}} placeholder='@siawfish' placeholderTextColor='#aaa'/>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text>LinkedIn</Text>
                            <TextInput onChangeText={(text)=>{this.handleInputChange('linkedIn', text)}} placeholder='mcamanor' placeholderTextColor='#aaa'/>
                        </View>

                    </ScrollView>
                    <TouchableOpacity onPress={this.onSubmit} style={styles.registerBtn}>
                        <Text style={styles.register}>REGISTER</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
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

    err: {
        paddingVertical:10,
        alignSelf:"center",
        color:'red',
        fontWeight:'bold'
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
        borderRadius:4,
        marginTop:20,
        marginBottom: 40
    },

    register: {
        color:'#fff',
        letterSpacing:3,
        fontSize:18,
        fontWeight:'400'
    }
})

const mapStateToProps = (state) => {    
    return {
        err:state.err,
        authStatus:state.userCred,
        loggedIn:state.loggedIn
    }
}

const mapDispatchToProps = {
    register,
    clearErr
}

export default connect (mapStateToProps, mapDispatchToProps)(Register)
