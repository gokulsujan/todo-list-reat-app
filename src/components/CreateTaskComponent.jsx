import React, { Component } from 'react';

class CreateTaskComponent extends Component {
  state = {  } 
  render() { 
    return (
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Add your task" aria-label="Recipient's username" aria-describedby="button-addon2" />
        <button className="btn btn-primary" type="button" id="button-addon2">Add</button>
      </div>
    );
  }
}
 
export default CreateTaskComponent;
