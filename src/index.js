import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Provider from 'react-redux';
import CreateStore from 'redux';
import items from './Reducers/foodItems'

let store = CreateStore(items)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
