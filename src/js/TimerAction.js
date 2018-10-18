import React, { Component } from 'react';
import '../bootstrap.min.css';
import '../timer.css'

class TimerAction extends Component {


    render() {
        if (this.props.timerIsRunning){
            return(
                <div>
                    <a href="#" class="btn btn-outline-danger btn-block" id={'mybtn1'} onClick={this.props.onStopClick} >Stop</a>
                </div>
            );
        }
        else{
            return (
                <div>
                    <a href="#" class="btn btn-outline-success btn-block" id={'mybtn1'} onClick={this.props.onStartClick} >Start</a>
                </div>
            )
        }
    }
}

export default TimerAction