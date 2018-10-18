import React, { Component } from 'react';
import '../bootstrap.min.css';
import EditableTimer from './EditableTimer';
class EditableTimerList extends Component {
    render (){
        const timers = this.props.timer.map ((mytime) =>(
            <EditableTimer
                key = {mytime.id}
                id = {mytime.id}
                title ={mytime.title}
                project = {mytime.project}
                elapsed = {mytime.elapsed}
                runningSince = {mytime.runningSince}
                onFormSubmit = {this.props.onFormSubmit}
                onTrashClick = {this.props.deleteCheck}
                onStartClick = {this.props.onStartClick}
                onStopClick = {this.props.onStopClick}
                //editFormOpen = {mytime.editFormOpen}
            />
        ));

     return(
         <div className={'container'}>
             <div className={'row'}>
                 {timers}
             </div>
         </div>

     );
    }
}
export default EditableTimerList;