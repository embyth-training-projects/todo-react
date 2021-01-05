import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import StatusFilter from '../status-filter';
import TodoList from '../todo-list';

import './app.css';

export default class App extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className='todo-app'>
        <AppHeader toDo={1} done={3} />
        <div className='top-panel d-flex'>
          <SearchPanel />
          <StatusFilter />
        </div>
        <TodoList todos={data} />
      </div>
    );
  }
}
