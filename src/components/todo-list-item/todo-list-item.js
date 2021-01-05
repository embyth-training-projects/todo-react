import React, {Component} from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {
  render() {
    const { textContent, isImportant, isDone, onDeleteButtonClick, onImportantToggleClick, onDoneToggleClick } = this.props;

    let classNames = `list-group-item todo-list-item ${isDone ? `done` : ``} ${isImportant ? `important` : ``}`;

    return (
      <li className={classNames}>
        <span className='todo-list-item-label' onClick={onDoneToggleClick}>
          {textContent}
        </span>

        <button type='button' className='btn btn-outline-success btn-sm float-right' onClick={onImportantToggleClick}>
          <i className='fa fa-exclamation' />
        </button>
        <button type='button' className='btn btn-outline-danger btn-sm float-right' onClick={onDeleteButtonClick}>
          <i className='fa fa-trash-o' />
        </button>
      </li>
    );
  }
}
