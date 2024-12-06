import React, { Component } from 'react';
import TableComponent from './TableComponent';

class TasksComponent extends Component {
  render() { 
    return (<TableComponent heading ="Sampple Heading" tasks={this.props.tasks} />);
  }
}
 
export default TasksComponent;
