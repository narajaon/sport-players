import axios from 'axios';

import { switchAppState } from './App';
import { APP_STATES } from '../constants';

export function initPlayers(players) {    
    return { type: 'INIT_PLAYERS', players };
}

export function fetchPlayers() {
    return (dispatch, any, api) => {
        return axios.get(api)
            .then(data => dispatch(initPlayers(data.players)))
            .catch(() => dispatch(switchAppState(APP_STATES.ERROR)));
        // try {
        //     const { data } = await axios.get(api);
        //     dispatch(initPlayers(data.players));
        // } catch (error) {
        //     dispatch(switchAppState(APP_STATES.ERROR));
        // }
    };
}