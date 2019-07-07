const initState = () => ({
  players: []
});

const actions = {
  'INIT_PLAYERS': (state, { players }) => ({
    ...state,
    players,
  }),
};

export default (state = initState(), action) => {
	return actions[action.type] ? actions[action.type](state, action) : state;
};