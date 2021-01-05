import React, {Component} from 'react';

import './add-item-form.css';

export default class AddItemForm extends Component {
  constructor() {
    super();

    this.state = {
      textContent: ``,
    };

    this.onAddItemInputChange = this.onAddItemInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onAddItemInputChange(evt) {
    this.setState({
      textContent: evt.target.value
    })
  }

  onFormSubmit(evt) {
    evt.preventDefault();

    const {textContent} = this.state;

    if (textContent === ``) {
      return;
    }

    this.props.onAddButtonClick(textContent);
    this.setState({
      textContent: ``
    })
  }

  render() {
    return (
      <form className='add-item-form d-flex'>
        <input type='text' className='form-control' placeholder='What needs to be done?' onChange={this.onAddItemInputChange} value={this.state.textContent} />
        <button type='button' className='btn btn-outline-secondary' onClick={this.onFormSubmit}>Add item</button>
      </form>
    )
  }
}
