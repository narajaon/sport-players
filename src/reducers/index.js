import { combineReducers } from 'redux';
import Players from './Players'
import App from './App'

export default combineReducers({
    appReducer: App,
    playersReducer: Players,
});