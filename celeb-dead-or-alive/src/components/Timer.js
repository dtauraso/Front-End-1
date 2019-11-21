import React, { Component } from "react";
import styled from "styled-components";
import {Motion, spring} from "react-motion"

const TimerStyle = styled.span`
font-size: 1.1rem;
margin: 2.5%;
width: 25rem;
padding-left: 2.5%;
background-color: #9ef6ad;
border-radius: 2px;
display: inline-block;
color:  green;
`
class Timer extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
        this.stopTimer = this.stopTimer.bind(this)

    }
    stopTimer() {
        this.setState({isOn: false})
        clearInterval(this.timer)
        console.log("stop")
      }
    render() {
        let stop = (this.state.time == 0 || !this.state.isOn) ?
        null :
        <button onClick={this.stopTimer}>stop</button>
        const {count} = this.state
        return(
            <div>
            <Motion defaultStyle={{ x: -200, opacity: 0}}
             style={{ x: spring(0), opacity: spring(1)}}
             >
                 {style=> (  
                 <TimerStyle style={{ opacity: style.opacity}}>
                    <div>
                        <h1>Time: {count} seconds</h1>
                        <button onClick={this.stopTimer}>stop</button>
                        {stop}
                    </div>
                </TimerStyle>
                )}              
            </Motion>
            </div>
        )
    }


    componentDidMount(){
        this.myInterval = setInterval(() => {
            this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }, 1000)
}
componentWillUnmount(){
    clearInterval(this.myInterval)
    }
}

export default Timer;