import React, { Component } from 'react';
import '../bootstrap.min.css';
import '../mytimerform.css';
import './App.js';



class TimerForm extends Component {
    state = {
        title : this.props.title || '',
        project : this.props.project || ''
    };
    onChangeTitle = (e)=> {
        this.setState({title : e.target.value} );
    };
    onChangeProject = (e)=> {
        this.setState({project:  e.target.value} );
    };

    mysubmit = () =>{
        this.props.onFormSubmit({
            id : this.props.id,
            title: this.state.title,
            project: this.state.project,
        });

    };

    render(){
        const msubmit = this.props.id ? 'Update' :'create' ;
        return(
            <div className={'container'}>
                <div className={'card'} id={'formcard'}>
                    <div className={'card-body'} >
                        <form >
                            <div className={'form-group'}>
                                <label for="title">Title</label>
                                <input type={'text'} className={'form-control'} Value={this.state.title} onChange={this.onChangeTitle}></input>
                            </div>
                            <div className={'form-group'}>
                                <label for="project">Project</label>
                                <input type={'text'} className={'form-control'} Value={this.state.project} onChange={this.onChangeProject}></input>
                            </div>
                            <div className={'row'}>
                                <div className={'col'}>
                                    <button type="submit" class="btn btn-outline-primary" onClick={this.mysubmit}>{msubmit}</button>
                                </div>
                                <div className={'col'}>
                                    <button type="submit" class="btn btn-outline-danger" onClick={this.props.onFormClose}>Cancel</button>
                                </div>
                            </div>


                        </form>
                    </div>
                </div>

            </div>
        );
    }
}
export default TimerForm;