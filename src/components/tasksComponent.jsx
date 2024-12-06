import React, { Component } from 'react';
import TableComponent from './TableComponent';
import CreateTaskComponent from './CreateTaskComponent';

class TasksComponent extends Component {
  render() { 
    return (
      <div className="container mt-5">
        <CreateTaskComponent />
        <TableComponent heading ="Sampple Heading" tasks={this.props.tasks} />
      </div>
    );
  }
}
 
export default TasksComponent;
