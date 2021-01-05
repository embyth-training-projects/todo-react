import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app'

const rootNode = document.querySelector(`#root`);

const todoData = [
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



ReactDOM.render(<App data={todoData} />, rootNode);
