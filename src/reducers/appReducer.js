import { APP_STATES } from '../constants';

const initState = () => ({
    appState: APP_STATES.NORMAL,
});

const actions = {
    'SWITCH_APP_STATE': (state, { newState }) => ({
        ...state,
        appState: newState,
    }),
};
  
export default (state = initState(), action) => {
    return actions[action.type] ? actions[action.type](state, action) : state;
};