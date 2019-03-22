import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import groupReducer from './reducers/groupReducer.js';

const store = createStore(groupReducer);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
