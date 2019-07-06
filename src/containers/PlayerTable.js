import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import { fetchPlayers } from '../actions/PlayerTable';
import PlayerTable from '../components/PlayerTable'

const mapStateToProps = ({ playersReducer }) => {
  const { players } = playersReducer;
	return { players };
};

const mapDispatchToProps = { fetchPlayers };

const PlayerTableContainer  = ({ players, fetchPlayers }) => {
  useEffect(() => {
    fetchPlayers();
  }, [fetchPlayers]);

  return (
    <PlayerTable players={ players }/>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerTableContainer);