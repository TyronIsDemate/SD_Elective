import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Countdown from '../components/Countdown';





const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),


    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (


    <Grid container className={classes.root} >
      <Grid item xs={12}>
        <center><Grid container justify="center">
          <div className={classes.root}>
            <div className="Countdown">
              <Countdown />
              <br></br>
              <br></br>
              <center><Button variant="contained" color="primary">
                Send Notification
      </Button></center>
              <br></br>
              <center><Button variant="contained" color="primary">
                Cancel
      </Button></center>
            </div>
            <br></br>
          </div>
          <Paper className={classes.paper} />
        </Grid></center>
      </Grid>
    </Grid>

  );
}





