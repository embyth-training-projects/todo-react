import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos }) => {
  const listItems = todos.map((item) => {
    return (
      <TodoListItem key={item.id} { ...item } />
    );
  });

  return (
    <ul className='list-group todo-list'>
      { listItems }
    </ul>
  )
}

export default TodoList;
