import React, {Component} from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

export default class TodoList extends Component {
  render() {
    const { todos, onDeleteButtonClick } = this.props;

    const listItems = todos.map((item) => {
      const {id, ...itemProps} = item;

      return (
        <TodoListItem key={id} { ...itemProps } onDeleteButtonClick={() => onDeleteButtonClick(id)} />
      );
    });

    return (
      <ul className='list-group todo-list'>
        { listItems }
      </ul>
    )
  }
}
