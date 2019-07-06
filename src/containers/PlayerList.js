import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import uuid from 'uuid';

import { fetchPlayers } from '../actions/PlayerList';

const mapStateToProps = ({ playersReducer: players }) => {
	return { players };
};

const mapDispatchToProps = { fetchPlayers };

const PlayerList  = ({ players, fetchPlayers }) => {
  useEffect(() => {
    fetchPlayers();
  });

  if (!players.length) {
    return ( <div>No players found</div> )
  }

  return (
    <ul>
        { players.map(player => <li key={uuid()}>{ player.firstname }</li>) }
    </ul>  
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);