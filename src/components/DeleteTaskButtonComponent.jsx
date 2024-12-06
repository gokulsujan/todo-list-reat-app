import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

class DeleteTaskButtonComponent extends Component {
  render() { 
    return (
      <button onClick={this.handleDelete} type="button" className="btn btn-danger m-2">
        <FontAwesomeIcon icon={faTrash} style={{ color: 'white', cursor: 'pointer' }} />
      </button>
    );
  }

  handleDelete = () => {
    this.props.onDeleteTask(this.props.task)
  }
}
 
export default DeleteTaskButtonComponent;
