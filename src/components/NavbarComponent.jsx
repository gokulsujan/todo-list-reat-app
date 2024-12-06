import React, { Component } from 'react';

class NavbarComponent extends Component {
  state = {
    tasks : []
  };
  render() {
    return (
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            Todo List
            <span class="badge rounded-pill text-bg-secondary m-2">{this.state.tasks.map(task => task.status == 'pending').length}</span>
          </span>
        </div>
      </nav>
    );
  }
}
 
export default NavbarComponent;
