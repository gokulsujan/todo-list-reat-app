import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

class CompleteTaskButtonComponent extends Component {
  state = {  } 
  render() { 
    return (
      <button type="button" className="btn btn-success m-2">
        <FontAwesomeIcon icon={faCheck} style={{ color: 'white', cursor: 'pointer' }} />
      </button>
    );
  }
}
 
export default CompleteTaskButtonComponent;
