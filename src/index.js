import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers'
import './index.css';
import App from './App';
import { api } from './constants';
import ErrorFallback from './components/ErrorFallback'

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunk.withExtraArgument(api)
    ),
);

render(
    <Provider store={ store }>
        <ErrorFallback>
            <App />
        </ErrorFallback>
    </Provider>,
    document.getElementById('root')
);