import React, {Component} from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {
  constructor() {
    super();

    this.state = {
      isImportant: false,
      isDone: false,
    }

    this.onItemLabelClick = this.onItemLabelClick.bind(this);
    this.onImportantButtonClick = this.onImportantButtonClick.bind(this);
  }

  onItemLabelClick() {
    this.setState(({isDone}) => {
      return {
        isDone: !isDone
      }
    });
  }

  onImportantButtonClick() {
    this.setState(({isImportant}) => {
      return {
        isImportant: !isImportant
      }
    });
  }

  render() {
    const { textContent } = this.props;
    const { isImportant, isDone } = this.state;

    let classNames = `list-group-item todo-list-item ${isDone ? `done` : ``} ${isImportant ? `important` : ``}`;

    return (
      <li className={classNames}>
        <span className='todo-list-item-label' onClick={this.onItemLabelClick}>
          {textContent}
        </span>

        <button type='button' className='btn btn-outline-success btn-sm float-right' onClick={this.onImportantButtonClick}>
          <i className='fa fa-exclamation' />
        </button>
        <button type='button' className='btn btn-outline-danger btn-sm float-right'>
          <i className='fa fa-trash-o' />
        </button>
      </li>
    );
  }
}
