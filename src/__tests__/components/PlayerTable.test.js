import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import PlayerTable from '../../components/PlayerTable';
import { players } from '../fakePlayers.json';

describe('PlayerTable', () => {
    it('should render without crashing', () => {
        shallow(<PlayerTable players={ players } />);
    });

    it('should contain 2 players', () => {
        const wrapper = shallow(<PlayerTable players={ players } />);
        expect(wrapper.find('[data-jest="player-row"]')).to.have.lengthOf(2);
    });

    it('should display no data msg', () => {
        const wrapper = shallow(<PlayerTable players={ [] } />);
        expect(wrapper.find('[data-jest="no-data-table"]')).to.not.be.an('undefined');
    });
});
