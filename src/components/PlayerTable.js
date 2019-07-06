import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
}));


export default function PlayerTable({ players }) {
  const classes = useStyles();

  console.log(players);

  if (!players.length) {
    return (
      <div className={classes.root}>
        <Paper className={classes.paper} align="center">
          No data available
        </Paper>
      </div>
    );
  }

  const wins = (player) => player.data.last.reduce((acc, curr) => curr + acc , 0);
  const losses = (player) => player.data.last.length - wins(player);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell align="center">rank</TableCell>
              <TableCell align="center">name</TableCell>
              <TableCell align="center">weight (kg)</TableCell>
              <TableCell align="center">height (cm)</TableCell>
              <TableCell align="center">age</TableCell>
              <TableCell align="center">wins</TableCell>
              <TableCell align="center">losses</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {players.map(player => (
              <TableRow key={player.shortname}>
                <TableCell align="center">{player.data.rank}</TableCell>
                <TableCell align="center">{player.shortname}</TableCell>
                <TableCell align="center">{player.data.weight / 1000}</TableCell>
                <TableCell align="center">{player.data.height }</TableCell>
                <TableCell align="center">{player.data.age}</TableCell>
                <TableCell align="center">{wins(player)}</TableCell>
                <TableCell align="center">{losses(player)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}