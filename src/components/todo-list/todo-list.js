import React, {Component} from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

export default class TodoList extends Component {
  render() {
    const { todos } = this.props;

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
}
