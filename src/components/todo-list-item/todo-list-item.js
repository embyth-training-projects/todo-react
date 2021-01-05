import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({ textContent, important }) => {
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

export default TodoListItem;
