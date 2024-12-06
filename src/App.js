import './App.css';
import NavbarComponent from './components/NavbarComponent';
import React, { Component } from 'react';
import TasksComponent from './components/tasksComponent';

class App extends Component {
  state = { 
    tasks:[{task: "sample task 01", status:"pending"},{task: "sample task 01", status:"completed"}]
   } 
  render() { 
    return (
      <React.Fragment>
        <NavbarComponent tasks={this.state.tasks}/>
        <TasksComponent tasks={this.state.tasks} onCreateTask={this.handleCreateTask}/>
      </React.Fragment>
    );
  }

  handleCreateTask = (taskStr) =>{
    const tasks = this.state.tasks;
    tasks.push({task: taskStr, status: "pending"});
    this.setState(tasks);
  }
}

export default App;
