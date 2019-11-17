import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    const section = {
      height: "70px",
      paddingTop: 5,
      backgroundColor: "#0269e8",
    };
    const classes = makeStyles(theme => ({
      root: {
        flexGrow: 1,
      },
      paper: {
        height:100,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      header:{
        backgroundColor:'pink',
        height:'100px',
      },
    }));
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div style={section}>
      
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }

}
export default Header;