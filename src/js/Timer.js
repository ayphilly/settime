import React, { Component } from 'react';
import '../bootstrap.min.css';
import edit from '../pen_3.png';
import tras from '../basket.png';
import '../timer.css';
import helpers from '../helpers.js';
import TimerAction from  './TimerAction';
class Timer extends Component {


    componentDidMount(){
        this.forceUpdateInterval = setInterval(()=> {this.forceUpdate()}, 50)
    }
    componentWillUnmount(){
        clearInterval(this.forceUpdateInterval)
    }

    handleDelete = ()=>{
        this.props.onTrashClick(this.props.id);
    }



    handleStartClick = () => {
        this.props.onStartClick(this.props.id)
    }

    handleStopClick = () => {
        this.props.onStopClick(this.props.id)
    }


    render(){


        const elpasedString = helpers.renderElapsedString(this.props.elapsed, this.props.runningSince);
        return(
            <div class="container" >
                <div class="row">
                    <div class="card" id={'mycard'}>
                            <img class="card-img-top" src="/src/img_avatar1.png" alt=""/>
                            <div class="card-body">
                                <h5 class="card-title">{this.props.title}</h5>
                                <strong>{this.props.project}</strong><br/>
                                <div class="card-text" id={'mycardtxt'}>
                                    <div id={'time'}>
                                        <strong>{elpasedString} </strong><br/><br/><br/>
                                    </div><br/><br/>

                                    <div id={'myicon'}>
                                        <a href={'#delete'} id={'icon1'} onClick={this.handleDelete}><img id={'im1'} src={tras}/></a>
                                        <a href={'#edit'} id={'icon2'} onClick={this.props.editopen}><img id={'im2'} src={edit}/><br/></a>
                                    </div>
                                </div>

                                <TimerAction
                                    timerIsRunning = {!!this.props.runningSince}
                                    onStartClick = {this.handleStartClick}
                                    onStopClick = {this.handleStopClick}
                                />
                            </div>
                    </div>
                </div>
            </div>


        );

    }
}
export default Timer;

