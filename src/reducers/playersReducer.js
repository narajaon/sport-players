const initState = () => [];

const actions = {
  'INIT_PLAYERS': (state, { players }) => players,
};

export default (state = initState(), action) => {
	return actions[action.type] ? actions[action.type](state, action) : state;
};