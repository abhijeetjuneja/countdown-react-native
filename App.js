import React, { Component } from 'react'
import { StyleSheet,View } from 'react-native'
import CountdownInput from './components/CountdownInput'
import CountdownDisplay from './components/CountdownDisplay'
import CountdownSpeed from './components/CountdownSpeed'

export default class App extends Component {
    
    constructor() {
        super()
        this.state = {
            countdown: 0,
            speed:1,
            pause: false,
            start: false
        }
        this.setStates = this.setStates.bind(this)
    }

    setStates(key, value) {
        this.setState({[key]: value})
    }
    render() {
        let { countdown, speed, pause, start } = this.state
        return (
            <View style={styles.container}>
                <CountdownInput setStates = {this.setStates} countdown={countdown} start={start}/>
                <CountdownDisplay setStates = {this.setStates} countdown={countdown} speed={speed} pause={pause} start={start}/>
                <CountdownSpeed setStates = {this.setStates} speed={speed} start={start} pause={pause}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
})
