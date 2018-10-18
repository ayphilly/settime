import React, { Component } from 'react';
import '../App.css';

import EditableTimerList from './EditableTimerList'
import ToggleableTimerForm from './ToggleableTimerForm'
import uuid from 'uuid';
import helpers from "../helpers";
import client from "../clients";
class App extends Component {


    state = {
           timers:[]

    };
    componentDidMount(){
        this.myserver();
        setInterval(this.myserver,5000);
    }
    myserver = ()=>{
        client.getTimers((server)=>{
            this.setState({timers: server});
        })
    }


    handleFormSubmit = (timer) =>{
        this.createTimer(timer);

    };
    handleEditFormSubmit = (attr) =>{
        this.updateTimer(attr);

    };

    createTimer = (timer) =>{
        const t = helpers.newTimer(timer);
        this.setState({
            timers : this.state.timers.concat(t)
        });

        client.createTimer(t);

    };

    handleStart = (myid) => {
        this.Starter(myid)
    }

    handleStop = (myid) => {
        this.Stopper(myid)
    }

    Starter = (myid) =>{
        const now = Date.now()

        this.setState ({
            timers: this.state.timers.map((timer)=> {
                if(timer.id === myid){
                    return Object.assign({},timer,{
                        runningSince : now,
                    })
                }else{
                    return timer;
                }

            })
        })
        client.startTimer({id:myid, start:now})
    }

    Stopper = (myid) =>{
        const now = Date.now()

        this.setState({
            timers : this.state.timers.map((timer) =>{
                if (timer.id === myid){
                    const lastelapsed = now - timer.runningSince;
                    return Object.assign({}, timer, {
                        elapsed : timer.elapsed + lastelapsed,
                        runningSince : null,
                    })
                }
                else {
                    return timer;
                }
            })
        })
        client.stopTimer({id:myid, stop:now})
    }
    //instead of making the start/stop timer manual
    /*
    * mystart =(myid) =>{
    *   const now = Date.now();
    *   client.startTimer({id:myid, start:now})=>{
    *   }.then(myServer)
    * }*/

    updateTimer = (attr) =>{
        this.setState({
            timers : this.state.timers.map((timer)=>{
                if (timer.id === attr.id){
                    return Object.assign({}, timer,{
                        title : attr.title,
                        project : attr.project,
                    });
                }
                else {
                    return timer;
                }
            })
        })
        client.updateTimer(attr)
    };



    mydelete = (timerId)=>{
      this.setState({
          timers : this.state.timers.filter((tt) =>tt.id !== timerId),
      })
      client.deleteTimer({id:timerId})
    };

    onDelete = (timerId)=>{
        this.mydelete(timerId)
    }
  render() {
    return (
        <div className="container">

            <div>
                <h2 className="App-title">TimerDashBoard </h2>
                <EditableTimerList
                   timer = {this.state.timers}
                   onFormSubmit = {this.handleEditFormSubmit}
                   deleteCheck = {this.onDelete}
                   onStartClick = {this.handleStart}
                   onStopClick = {this.handleStop}
                />

                <ToggleableTimerForm
                    onFSubmit = {this.handleFormSubmit}
                />
            </div>
        </div>
    );
  }
}

export default App;
