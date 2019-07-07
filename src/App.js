import React from 'react';
import { connect } from 'react-redux'

import PlayerTable from './containers/PlayerTable'

const mapStateToProps = ({ appReducer }) => {
  const { appState } = appReducer;
	return { appState };
};

const App = ({ appState }) => {
  if (appState === 'ERROR') {
    return <h1>Oups, something went wrong.</h1>;
  }

  return (
    <div className="App">
      <PlayerTable />
    </div>
  );
}

export default connect(mapStateToProps)(App);