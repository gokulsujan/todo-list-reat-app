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
        <TableComponent heading ="Pending Tasks" tasks={this.props.tasks.filter(task => task.status == 'pending')} >
          <CompleteTaskButtonComponent />
          <DeleteTaskButtonComponent />
        </TableComponent>
        <TableComponent heading ="Completed Tasks" tasks={this.props.tasks.filter(task => task.status == 'completed')} >
          <DeleteTaskButtonComponent/>
        </TableComponent>

      </div>
    );
  }
}
 
export default TasksComponent;
