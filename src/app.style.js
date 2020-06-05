import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },

  root2: {
    background: '#f00',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  root3: {
      flexGrow: 1
  }
});

export function MyButton() {
  const classes = useStyles();
  return <Button className={classes.root}>Hook</Button>;
}

export function MyButton2() {
    const classes = useStyles();
    return <Button className={classes.root2}>Love</Button>;
}

export function Typo() {
    const classes = useStyles();
    return <Typography className={classes.root3}>News</Typography>;
}