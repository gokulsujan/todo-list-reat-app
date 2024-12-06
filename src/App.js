import './App.css';
import NavbarComponent from './components/NavbarComponent';
import React, { Component } from 'react';
import TasksComponent from './components/tasksComponent';

class App extends Component {
  state = { 
    tasks:[]
   } 
  render() { 
    return (
      <React.Fragment>
        <NavbarComponent tasks={this.state.tasks}/>
        <TasksComponent tasks={this.state.tasks} onCreateTask={this.handleCreateTask} onDeleteTask={this.handleDeleteTask} onCompleteTask={this.handleCompleteTask} />
      </React.Fragment>
    );
  }

  handleCreateTask = (taskStr) =>{
    const tasks = [...this.state.tasks];
    tasks.push({task: taskStr, status: "pending"});
    this.setState({tasks});
  }

  handleDeleteTask = (task) => {
    let index = this.state.tasks.indexOf(task);
    const tasks = [...this.state.tasks];
    tasks.splice(index, 1);
    this.setState({tasks});
  }

  handleCompleteTask = (task) => {
    let index = this.state.tasks.indexOf(task);
    const tasks = [...this.state.tasks];
    let completedTask = tasks[index];
    tasks.splice(index, 1);
    tasks.push({task:completedTask.task, status:"completed"})
    this.setState({tasks});
  }
}

export default App;
