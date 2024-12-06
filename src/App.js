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
        <TasksComponent tasks={this.state.tasks}/>
      </React.Fragment>
    );
  }
}

export default App;
