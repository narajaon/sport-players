import chai, { expect } from 'chai';

import reducer from '../../reducers/playersReducer';
import { initPlayers } from '../../actions/PlayerTable';
import { players } from '../fakePlayers.json';

chai.config.truncateThreshold = 0;

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
});