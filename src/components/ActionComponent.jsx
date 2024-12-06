import React, { Component } from 'react';
import CompleteTaskButtonComponent from './CompleteTaskButtonComponent';
import DeleteTaskButtonComponent from './DeleteTaskButtonComponent';

class ActionComponent extends Component {
  state = {  } 
  render() { 
    if(this.props.pending == true) {
      return(
        <React.Fragment>
          <CompleteTaskButtonComponent index={this.props.index} onCompleteTask={this.props.onCompleteTask} />
          <DeleteTaskButtonComponent onDeleteTask={this.props.onDeleteTask} index={this.props.index} />
        </React.Fragment>
      );
    }
    return (
      <DeleteTaskButtonComponent onDeleteTask={this.props.onDeleteTask} index={this.props.index} />
    );
  }
}
 
export default ActionComponent;
