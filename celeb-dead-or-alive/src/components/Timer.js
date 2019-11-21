import React, { Component } from "react";
import styled from "styled-components";
import {Motion, spring} from "react-motion"

const TimerStyle = styled.span`
font-size: 2rem;
margin: 2.5%;
width: 25rem;
padding-left: 2.5%;
background-color: #9ef6ad;
border-radius: 2px;
display: inline-block;
color:  green;
`
class Timer extends Component {

    constructor(props, context) {
      super(props, context);
      this.state = {
        timePassed: 0,
        milliseconds: '00',
        seconds: '00',
        minutes: '00'
      }
    }
  
    formatter = (input) => {
      const time = input.toString();
      return time.length < 2 ? '0' + time : time.slice(-2);
    }
  
    formatTime = () => {
      this.setState({
        milliseconds: this.formatter(this.state.timePassed),
        seconds: this.formatter(Math.floor((this.state.timePassed / 100) % 60)),
        minutes: this.formatter(Math.floor((this.state.timePassed / (100 * 60)) % 60))
      });
    }
  
    timeNow = () => {
      let seconds = parseInt(this.state.timePassed, 10) + 1;
      this.setState({ timePassed: seconds });
      this.formatTime();
    }
  
    resetTime = () => {
      this.setState({
        timePassed: 0,
        milliseconds: '00',
        seconds: '00',
        minutes: '00'
      });
    }
  
    startTime = () => {
      if(this.state.started === true){ return; }
      this.interval = setInterval(this.timeNow, 10);
      this.setState({ started: true });
    }
  
    stopTime = () => {
      window.clearInterval(this.interval);
      this.setState({ started: false });
    }
  
    componentWillUnmount = () => {
      window.clearInterval(this.interval);
    }
  
    render(){
      return (
          <TimerStyle>
        <div className="timer">
          <div className="timer__screen">
            {this.state.minutes}<span className="timer__colon">:</span>
            {this.state.seconds}<span className="timer__colon">:</span>
            {this.state.milliseconds}</div>
            <button className="timer__button" onClick={ this.startTime.bind(this) }>Start</button>
            <button className="timer__button" onClick={ this.stopTime.bind(this) }>Stop</button>

        </div>
        </TimerStyle> 
      )
    };
  }
  
  export default Timer;