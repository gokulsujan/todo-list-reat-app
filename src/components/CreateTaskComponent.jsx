import React, { Component } from 'react';

class CreateTaskComponent extends Component {
  state = { 
    inputValue : ''
   } 
  render() { 
    return (
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Add your task" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={this.handleInputChange} />
        <button onClick={this.handleCreateTask} className="btn btn-primary" type="button" id="button-addon2">Add</button>
      </div>
    );
  }

  handleInputChange = (event) => {
    this.state.inputValue = event.target.value;
  }

  handleCreateTask = () => {
    this.props.onCreateTask(this.state.inputValue);
  }
}
 
export default CreateTaskComponent;
