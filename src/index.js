import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/home';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';

  ReactDOM.render(
    <Provider store={store}><Home /></Provider>,
      document.getElementById('root'));
  registerServiceWorker();
