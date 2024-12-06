import React, { Component } from 'react';

class NavbarComponent extends Component {
  render() {
    return (
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            Todo List
            <span className="badge rounded-pill text-bg-secondary m-2">{this.props.tasks.filter(task => task.status === 'pending').length}</span>
          </span>
        </div>
      </nav>
    );
  }
}
 
export default NavbarComponent;
