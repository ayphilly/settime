import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        /*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Timer App Incoming</h1>
        </header>*/
        <div className="row">
           <h2 className="App-title">TimerDasBoard </h2>
            <EditableTimerlist/>
            <ToggleTimer
                isOpen={false}
            />
        </div>
      </div>
    );
  }
}

export default App;
