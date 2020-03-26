import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default class CountdownInput extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            key: ''
        }
    }


    render() {
        let { countdown, start } = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.inputLabel}>Countdown</Text><br /><br />
                    <Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter minutes"
                        onChange={(e) => {
                            const re = /^[0-9\b]+$/;
                            if (e.target.value === '' || re.test(e.target.value)) {
                                this.props.setStates('countdown',e.target.value)}
                            }
                        }
                        value={countdown}
                        disabled={start}
                    />
                    {start ? 
                    <TouchableOpacity
                        style={countdown <= 0 ? styles.disabledButton : styles.buttonStyle2}
                        onPress={() => {this.props.setStates('start',false), this.props.setStates('countdown',0)} }
                    ><Text style={countdown <= 0 ? styles.disabledButtonText : styles.buttonText}>STOP</Text></TouchableOpacity> : 
                    <TouchableOpacity
                        style={countdown <= 0 ? styles.disabledButton : styles.buttonStyle1}
                        onPress={() => this.props.setStates('start',true)}
                        disabled={countdown <= 0}
                    ><Text style={countdown <= 0 ? styles.disabledButtonText : styles.buttonText}>START</Text></TouchableOpacity>}</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        marginTop:50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputLabel: {
        color:'white',
        backgroundColor:'#0066FF',
        fontSize:'30px',
        width:'100%',
        fontWeight:'700',
        paddingLeft:50,
        paddingRight:50,
        paddingTop:15,
        paddingBottom:15,
        border: '2px solid #0066FF',
        borderRadius:10
    },
    textInput: {
        height: 50,
        width: '150px',
        fontSize:'16px',
        paddingLeft:12,
        border: '1px solid black',
        borderRadius:10,
        alignSelf:'center'
    },
    buttonText: {
        color:'white',
        fontSize:'16px',
        fontWeight:500
    },
    disabledButtonText: {
        color:'grey',
        fontSize:'16px',
        fontWeight:'500',
    },
    disabledButton:{
        height: 50,
        marginTop:10,
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:30,
        paddingRight:30,
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
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:30,
        paddingRight:30,
        marginLeft:10,
        backgroundColor:'green',
        borderRadius:10,
        borderWidth: 1,
        borderColor: 'green',
        color:'black',
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android
    },
    buttonStyle2:{
        height: 50,
        marginTop:10,
        paddingTop:12,
        paddingBottom:12,
        paddingLeft:30,
        paddingRight:30,
        marginLeft:10,
        backgroundColor:'red',
        borderRadius:10,
        borderWidth: 1,
        borderColor: 'red',
        color:'black',
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android
    }
})