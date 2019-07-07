import React from 'react';
import { shallow } from 'enzyme';

import { PlayerTableContainer as PlayerTable } from '../../containers/PlayerTable';
import { players } from '../fakePlayers.json';

describe('PlayerTable', () => {
    it('should render without crashing', () => {
        shallow(<PlayerTable players={ players } />);
    });
});