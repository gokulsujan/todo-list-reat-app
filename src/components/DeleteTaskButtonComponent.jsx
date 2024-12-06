import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

class DeleteTaskButtonComponent extends Component {
  state = {  } 
  render() { 
    return (
      <button type="button" className="btn btn-danger m-2">
        <FontAwesomeIcon icon={faTrash} style={{ color: 'white', cursor: 'pointer' }} />
      </button>
    );
  }
}
 
export default DeleteTaskButtonComponent;
