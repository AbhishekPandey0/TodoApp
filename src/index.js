import React from 'eact';
import ReactDOM from 'eact-dom';
import { Provider } from 'eact-redux';
import store from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);