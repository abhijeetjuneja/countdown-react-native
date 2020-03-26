import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import BlinkView from 'react-native-blink-view'
import { Audio, Video } from 'expo-av' 

export default class CountdownDisplay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timer: '00:00',
            started: false,
            speed:1,
            intervalId: null,
            message: ''
        }
        this.startCountdown = this.startCountdown.bind(this)
    }

    componentWillReceiveProps(props) {
        if(props.start && !this.state.started){
            this.setState({started: true})
            this.startCountdown()
        } 
        else if(!props.start && this.state.started){
            let timer = ''
            if(props.countdown == '')
                timer = '00:00'
            else
                timer = props.countdown.length == 2 ? props.countdown + ':00' : parseInt(props.countdown) + ':00'
            this.setState({timer: timer, started: false})
        }
        else if(!this.state.started){
            let timer = ''
            if(props.countdown == '')
                timer = '00:00'
            else
                timer = props.countdown.length == 2 ? props.countdown + ':00' : parseInt(props.countdown) + ':00'
            this.setState({timer: timer})
        }
    }

    async playEndSound(){
        const soundObject = new Audio.Sound();
        try {
            await soundObject.loadAsync(require('../assets/sounds/end.mp3'))
            await soundObject.playAsync()
            // Your sound is playing!
        } catch (error) {
            // An error occurred!
        }
    }

    setMessage(message){
        this.setState({message: message})
    }

    startCountdown() {
        console.log("starting")
        this.setMessage('')
        let duration = parseInt(this.state.timer.split(':')[0]) * 60 + parseInt(this.state.timer.split(':')[1])
        let timer =  duration, minutes, seconds
        const that = this
        var countdownInterval = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            var currentCountdown = parseFloat(minutes + seconds/60)
            if( currentCountdown < that.props.countdown/2){
                if(currentCountdown == 0)
                    that.setMessage("Time's up!")
                else
                    that.setMessage('More than halfway there!')
            }
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            
        
            if(that.props.speed != that.state.speed){
                that.setState({speed: that.props.speed}, () => {
                    clearInterval(countdownInterval)
                    that.startCountdown()
                })
            }

            else {
                if(that.props.pause || !that.props.start)
                    clearInterval(countdownInterval)
                else{
                    that.setState({timer : minutes + ":" + seconds})
                    if (--timer < 0) {
                        timer = duration
                    }
                    
                    if(minutes == '00' && seconds == '00'){
                        clearInterval(countdownInterval)
                        that.playEndSound()
                        that.setState({started: false, timer: '00:00'}, () => {
                            that.props.setStates('start',false)
                            that.props.setStates('countdown',0)
                        })
                    }
                }
                    
            }

        }, 1000/this.state.speed)
        this.setState({intervalId: countdownInterval})
    }

    roundToTwo(value) {
        if(value != null)
            return Number(Math.round(value + 'e' + 2) + 'e-' + 2)
        else
            return Number(Math.round(0 + 'e' + 2) + 'e-' + 2)
    }

    render() {
        let { countdown, start} = this.props
        let { timer, message } = this.state
        let seconds = parseInt(timer.split(':')[0]) * 60 + parseInt(timer.split(':')[1])
        return (
            <View style={styles.container}>
                {seconds < 10 ? 
                <BlinkView blinking={true} delay={500}>
                    <Text style={styles.redText}>{message}</Text>
                </BlinkView>:
                <Text style={seconds < 20 ? styles.redText : styles.normalText} >{message}</Text>}
                <Text style={styles.countdown}> 
                    {timer}
                </Text>
                <br />
                {start ? 
                    this.props.pause ? <Icon
                        name="play-circle-o"
                        size={60}
                        color="black"
                        style={styles.pauseIcon}
                        onPress={() => {this.props.setStates('pause',false), this.startCountdown()}}
                    /> :
                    <Icon
                        name="pause-circle-o"
                        size={60}
                        color="black"
                        style={styles.pauseIcon}
                        onPress={() => this.props.setStates('pause',true)}
                    />: <Icon
                    name="pause-circle-o"
                    size={60}
                    color="white"
                    style={styles.pauseIcon}
                />}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop:30,
        marginBottom:10,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:'18px'
    },
    countdown: {
        margin: '12px',
        fontSize:'90px',
        fontWeight:700,
        textAlignVertical:'center'
    },
    redText:{
        color:'red',
        fontSize:'18px',
        fontWeight:700,
    },
    normalText:{
        color:'grey',
        fontSize:'18px',
        fontWeight:700,
    },
    pauseIcon: {
        margin: '6px',
        textAlignVertical:'center'
    },
    startButton: {
        backgroundColor:'#ffffff'
    }
})