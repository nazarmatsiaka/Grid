import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import './index.css';
import App from './App';
import createStore from './store/store';


ReactDOM.render(
    <Provider store={createStore()}>
        <App />
    </Provider>,
  document.getElementById('root')
);
