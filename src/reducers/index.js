import { combineReducers } from 'redux';
import playersReducer from './playersReducer'
import appReducer from './appReducer'

export default combineReducers({
    appReducer,
    playersReducer,
});