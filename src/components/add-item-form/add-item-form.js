import React, {Component} from 'react';

import './add-item-form.css';

export default class AddItemForm extends Component {
  render() {
    return (
      <div className='add-item-form'>
        <button type='button' className='btn btn-outline-secondary' onClick={() => this.props.onAddButtonClick(`hi`)}>Add item</button>
      </div>
    )
  }
}
