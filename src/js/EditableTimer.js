import React, { Component } from 'react';
import '../bootstrap.min.css';
import TimerForm from './TimerForm';
import Timer from './Timer';

class EditableTimer extends Component {
    
    state = {
        editFormOpen:false
    };

    // open and close function for reusability
    openForm =()=>{
        this.setState({editFormOpen : true})
    };
    closeForm =()=>{
        this.setState({editFormOpen : false})
    };

    // using open and close function
    handleFormClose = ()=>{
        this.closeForm();
    };
    handleFormOpen = ()=>{
        this.openForm();

    };

    handleEditSubmit = (timer) =>{
        this.props.onFormSubmit(timer);
        this.closeForm();
    };



    render() {
        if(this.state.editFormOpen){
            return(
                <TimerForm
                    id = {this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                    onFormSubmit = {this.handleEditSubmit}
                    onFormClose = {this.handleFormClose}
                />
            );
        }
        else {
            return(
                <Timer
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                    elapsed={this.props.elapsed}
                    runningSince={this.props.runningSince}
                    editopen = {this.handleFormOpen}
                    onTrashClick = {this.props.onTrashClick}
                    onStartClick = {this.props.onStartClick}
                    onStopClick = {this.props.onStopClick}
                />
            );
        }
    }
}

export default EditableTimer;