import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'jquery/dist/jquery.js';
import 'popper.js/dist/popper.js';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import store from './store';
import Routes from './components/routes'

ReactDOM.render(
  <Provider store={store}><Routes /></Provider>,
  document.getElementById('root')
);
