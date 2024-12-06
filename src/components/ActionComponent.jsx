import React, { Component } from 'react';
import CompleteTaskButtonComponent from './CompleteTaskButtonComponent';
import DeleteTaskButtonComponent from './DeleteTaskButtonComponent';

class ActionComponent extends Component {
  state = {  } 
  render() { 
    if(this.props.pending == true) {
      return(
        <React.Fragment>
          <CompleteTaskButtonComponent task={this.props.task} onCompleteTask={this.props.onCompleteTask} />
          <DeleteTaskButtonComponent onDeleteTask={this.props.onDeleteTask} task={this.props.task} />
        </React.Fragment>
      );
    }
    return (
      <DeleteTaskButtonComponent onDeleteTask={this.props.onDeleteTask} task={this.props.task} />
    );
  }
}
 
export default ActionComponent;
