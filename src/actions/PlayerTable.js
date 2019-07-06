import axios from 'axios';

export function initPlayers(players) {    
    return { type: 'INIT_PLAYERS', players };
}

export function fetchPlayers() {
    return async (dispatch, any, api) => {
        const { data } = await axios.get(api);
        dispatch(initPlayers(data.players));
    };
}