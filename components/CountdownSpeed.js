import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class CountdownSpeed extends Component {
    render() {
        let { countdown, speed, start} = this.props
        console.log(speed)
        return (
            <View style={styles.container}>
                <Text>
                    <TouchableOpacity
                        style={countdown <= 0 || !start ? styles.disabledButton : speed == 1 ? styles.buttonStyle1 : styles.buttonStyle2}
                        onPress={() => this.props.setStates('speed',1)}
                        disabled={countdown <= 0 || !start}
                    ><Text style={countdown <= 0 || !start ? styles.disabledButtonText : speed == 1 ? styles.buttonText1 : styles.buttonText2}>1x</Text></TouchableOpacity>
                    <TouchableOpacity
                        style={countdown <= 0 || !start ? styles.disabledButton : speed == 1.5 ? styles.buttonStyle1 : styles.buttonStyle2}
                        onPress={() => this.props.setStates('speed',1.5)}
                        disabled={countdown <= 0 || !start}
                    ><Text style={countdown <= 0 || !start ? styles.disabledButtonText : speed == 1.5 ? styles.buttonText1 : styles.buttonText2}>1.5x</Text></TouchableOpacity>
                    <TouchableOpacity
                        style={countdown <= 0 || !start ? styles.disabledButton : speed == 2 ? styles.buttonStyle1 : styles.buttonStyle2}
                        onPress={() => this.props.setStates('speed',2)}
                        disabled={countdown <= 0 || !start}
                    ><Text style={countdown <= 0 || !start ? styles.disabledButtonText : speed == 2 ? styles.buttonText1 : styles.buttonText2}>2x</Text></TouchableOpacity>
                </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        padding: '100',
        marginTop:50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    disabledButton:{
        height: 50,
        width:100,
        marginTop:10,
        paddingTop:15,
        paddingBottom:15,
        marginLeft:10,
        backgroundColor:'#C0C0C0',
        borderRadius:10,
        borderWidth: 1,
        borderColor: 'grey',
        color:'grey',
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android
    },
    buttonStyle1:{
        height: 50,
        marginTop:10,
        width:100,
        paddingTop:15,
        paddingBottom:15,
        marginLeft:10,
        backgroundColor:'white',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#000',
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android
    },
    buttonStyle2:{
        height: 50,
        marginTop:10,
        width:100,
        paddingTop:15,
        paddingBottom:15,
        marginLeft:10,
        backgroundColor:'black',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#000',
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android
    },
    buttonText1: {
        color:'black',
        fontSize:'16px',
        fontWeight:500,
        alignContent:'center',
        alignSelf: 'center'
    },
    buttonText2: {
        color:'white',
        fontSize:'16px',
        fontWeight:500,
        alignContent:'center',
        alignSelf: 'center'
    },
    disabledButtonText: {
        color:'grey',
        fontSize:'16px',
        fontWeight:500,
        alignContent:'center',
        alignSelf: 'center'
    },
})