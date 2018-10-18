import React, { Component } from 'react';
import '../bootstrap.min.css';
import TimerForm from './TimerForm';
import '../timerform.css';
import './App.js';

class ToggleableTimerForm extends Component {
    state = {isOpen : false};

    myOpen = () => {
        this.setState({isOpen : true });
    };

    myformclose = () =>{
        this.setState({isOpen:false });
    };

    myformsub = (timer) =>{
        this.props.onFSubmit(timer);
        this.setState({isOpen:false});
    };

    render(){
        if (this.state.isOpen){
            return(
                <TimerForm
                onFormClose = {this.myformclose}
                onFormSubmit = {this.myformsub}
                />
            );
        }
        else{
            return(
                <div id={'mybtn'}>
                    <a href={'#'} onClick={this.myOpen} className={'btn btn-outline-primary'}><strong>+</strong></a>
                </div>
            );
        }
    }
}

export default ToggleableTimerForm;