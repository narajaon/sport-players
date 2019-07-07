import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import rootReducer from '../reducers'
import App from '../App';

const store = createStore(
    rootReducer,
);

it('renders without crashing', () => {
    shallow(
        <Provider store={ store }>
            <App />
        </Provider>);
});
