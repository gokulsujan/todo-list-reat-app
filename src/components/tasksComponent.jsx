import React, { Component } from 'react';
import TableComponent from './TableComponent';
import CreateTaskComponent from './CreateTaskComponent';
import DeleteTaskButtonComponent from './DeleteTaskButtonComponent';
import CompleteTaskButtonComponent from './CompleteTaskButtonComponent';

class TasksComponent extends Component {
  render() { 
    return (
      <div className="container mt-5">
        <CreateTaskComponent onCreateTask={this.props.onCreateTask} />
        <TableComponent onDeleteTask={this.props.onDeleteTask} heading ="Pending Tasks" tasks={this.props.tasks.filter(task => task.status == 'pending')} pending={true} />
        <TableComponent  onDeleteTask={this.props.onDeleteTask} heading ="Completed Tasks" tasks={this.props.tasks.filter(task => task.status == 'completed')} />

      </div>
    );
  }
}
 
export default TasksComponent;
