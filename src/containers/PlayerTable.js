import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import { fetchPlayers } from '../actions/Players';
import PlayerTable from '../components/PlayerTable'

const mapStateToProps = ({ playersReducer }) => {
  const { players } = playersReducer;
	return { players };
};

const mapDispatchToProps = { fetchPlayers };

export const PlayerTableContainer  = ({ players, fetchPlayers }) => {
  useEffect(() => {
    fetchPlayers();
  });

  return (
    <PlayerTable players={ players }/>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerTableContainer);