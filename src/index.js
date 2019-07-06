import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers'
import './index.css';
import App from './App';
import { api } from './constants';

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunk.withExtraArgument(api)
    ),
);

render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);