import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles(
  createStyles({
    bigAvatar: {
      margin: 5,
      width: 60,
      height: 60,
    },
    smallAvatar: {
      width: 30,
      height: 30,
      top: 50,
      border: '2px solid white',
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),
);

export default function ImageAvatars({ avatarURL, countryURL }) {
  const classes = useStyles();
  const countryImg = <Avatar alt="badge" src={ countryURL } className={ classes.smallAvatar }/>;

  return (
    <div className={ classes.container }>
      <Badge badgeContent={ countryImg } className={ classes.badge }>
        <Avatar alt="avatar" src={ avatarURL } className={ classes.bigAvatar } />
      </Badge>
    </div>
  );
}