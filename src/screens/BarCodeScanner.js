import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { connect } from 'react-redux'
import { syncCon } from '../store/actions/authActions'


function BarcodeScanner(props) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [valid, setInValid] = useState(false);

    useEffect(() => {
        (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);

    handleBarCodeScanned = ({ type, data }) => {
        props.syncCon(data)
        setScanned(true);
    };

    if (scanned === true){
        if(typeof(props.info)=="undefined"){
            Alert.alert('Sorry!', 'Invalid barcode', [{ text: 'OK', onPress: () => props.navigation.goBack() }], { cancelable: false })
            return false
        }
        console.log(props.info);
        props.navigation.navigate('My Profile', {...props.info});
    }
    
    if (hasPermission === false) {
        // Works on both Android and iOS
        Alert.alert(
            'Camera Access Denied',
            'Allow camera access in your privacy settings',
            [
            { text: 'OK', onPress: () => props.navigation.goBack() }
            ],
            { cancelable: false }
        );
    }

    return (
        <View
        style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-end',
        }}>
        <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
        />

        {scanned && 
        <View style={styles.addConnectArea}>
            <Text>Want to add new connection?</Text>
            <TouchableOpacity onPress={() => setScanned(false)} style={styles.btn}>
                <Text style={styles.btnText}>Scan QR</Text>
            </TouchableOpacity>
        </View>}
        </View>
    );
}

const styles = StyleSheet.create({
    addConnectArea: {
        backgroundColor:'#999',
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

const mapStateToProps = (state)=> {
    return {
        user:state.userInfo,
        info:state.info
    }
}

const mapDispatchToProps = {
    syncCon
}

export default connect(mapStateToProps, mapDispatchToProps)(BarcodeScanner)

