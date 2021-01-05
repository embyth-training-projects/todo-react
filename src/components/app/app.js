import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import StatusFilter from '../status-filter';
import TodoList from '../todo-list';

import './app.css';

const App = ({ data }) => {
  return (
    <div className='todo-app'>
      <AppHeader toDo={1} done={3} />
      <div className='top-panel d-flex'>
        <SearchPanel />
        <StatusFilter />
      </div>
      <TodoList todos={data} />
    </div>
  )
}

export default App;
