import 'date-fns';
import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from '../components/Header';
import Navigation from '../components/navigationBar'


export default class Tickets extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                {this.ticket()}
            </div>
        )
    }
    ticket() {
        
        const classes = makeStyles(theme => ({
            root: {
                flexGrow: 1,
            },
            paper: {
                height: 100,
                padding: theme.spacing(2),
                textAlign: 'center',
                color: theme.palette.text.secondary
            },
            formControl: {
                margin: theme.spacing(1),
                minWidth: 120,
            },
            selectEmpty: {
                marginTop: theme.spacing(2),
            },
        }));
        return (
            <div >
                <Header />
                <Grid container spacing={3} justify="center" style={{ marginTop: '7%' }}>
                    <Grid item xs={8}>
                        <Navigation />
                        <Paper className={classes.paper}>
                            <Card>
                                <CardContent>
        <p>Journey from{this.props.from}</p>
                                    
                                </CardContent>
                            </Card>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
