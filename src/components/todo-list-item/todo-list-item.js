import React, {Component} from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {
  render() {
    const { textContent, important } = this.props;

    const itemStyle = {
      color: important ? `steelblue` : `black`,
      fontWeight: important ? `bold` : `normal`,
    }

    return (
      <li className='list-group-item todo-list-item'>
        <span style={itemStyle} className='todo-list-item-label'>
          {textContent}
        </span>

        <button type='button' className='btn btn-outline-success btn-sm float-right'>
          <i className='fa fa-exclamation' />
        </button>
        <button type='button' className='btn btn-outline-danger btn-sm float-right'>
          <i className='fa fa-trash-o' />
        </button>
      </li>
    );
  }
}
