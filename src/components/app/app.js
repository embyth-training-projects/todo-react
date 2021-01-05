import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import StatusFilter from '../status-filter';
import TodoList from '../todo-list';
import AddItemForm from '../add-item-form';

import './app.css';

export default class App extends Component {
  constructor() {
    super();

    this._maxId = 10;
    this.state = {
      todoData: [
        {
          textContent: `Drink Coffee`,
          important: false,
          id: 1,
        },
        {
          textContent: `Build React App`,
          important: true,
          id: 2,
        },
        {
          textContent: `Have a Lunch`,
          important: false,
          id: 3,
        },
      ]
    };

    this.deleteListItemHandler = this.deleteListItemHandler.bind(this);
    this.addListItemHandler = this.addListItemHandler.bind(this);
  }

  deleteListItemHandler(id) {
    this.setState(({todoData}) => {
      const index = todoData.findIndex((item) => item.id === id);

      return {
        todoData: [
          ...todoData.slice(0, index),
          ...todoData.slice(index + 1)
        ]
      }
    })
  }

  addListItemHandler(text) {
    const newItem = {
      textContent: text,
      important: false,
      id: this._maxId++,
    }

    this.setState(({todoData}) => {
      return {
        todoData: [
          ...todoData,
          newItem
        ]
      }
    })
  }

  render() {
    const { todoData } = this.state;

    return (
      <div className='todo-app'>
        <AppHeader toDo={1} done={3} />
        <div className='top-panel d-flex'>
          <SearchPanel />
          <StatusFilter />
        </div>
        <TodoList todos={todoData} onDeleteButtonClick={this.deleteListItemHandler} />
        <AddItemForm onAddButtonClick={this.addListItemHandler} />
      </div>
    );
  }
}
