import chai, { expect } from 'chai';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import reducer from '../../reducers/Players';
import { initPlayers, fetchPlayers } from '../../actions/Players';
import { switchAppState } from '../../actions/App';
import { players } from '../fakePlayers.json';
import { api, APP_STATES } from '../../constants';


chai.config.truncateThreshold = 0;
const middlewares = [
	thunk.withExtraArgument(api)
]
const mockStore = configureMockStore(middlewares)


describe('grid reducers', () => {
	const initState = {
		players: [],
	};

	it('should return the initial state', () => {
		expect(reducer(undefined, initPlayers([]))).to.eql(initState);
		expect(reducer(undefined, { type: 'FAKE_ACTION' })).to.eql(initState);
	});

	it('should contain 2 players', () => {
		expect(reducer(undefined, initPlayers(players))).to.eql({ players });
	});

	it('should fetch data from the api', async () => {
		const store = mockStore({ players: [] })

		try {
			await store.dispatch(fetchPlayers())
			expect(store.getActions()).to.eql([initPlayers(players)]);
		} catch (error) {
			expect(store.getActions()).to.eql([switchAppState(APP_STATES.ERROR)]);
		}
	});
});