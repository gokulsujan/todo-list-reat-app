import React, { Component } from 'react';

class TableComponent extends Component {
  state = {  } 
  render() { 
    return (
      <div className="container mt-5">
        <h1 className="text-center mb-4">{this.props.heading}</h1>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <td>#</td>
                <td>Tasks</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {this.props.tasks.map((task, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{task.task}</td>
                  <td>{this.props.children}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
 
export default TableComponent;
