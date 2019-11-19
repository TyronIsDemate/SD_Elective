import 'date-fns';
import React, { Component } from 'react';
import Header from '../components/Header';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Navigation from '../components/navigationBar';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Home from '../views/Datelocation';
import ButtonBase from '@material-ui/core/ButtonBase';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import TextField from '@material-ui/core/TextField';



export default class DateLocation extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                {this.tickets()}
            </div>
        )
    }

    tickets() {


        const classes = makeStyles(theme => ({
            root: {
                flexGrow: 1,
            },
            paper: {
                height: 140,
                width: 100,
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
            pos: {
                marginBottom: 12,
            },
            textField: {
                marginLeft: theme.spacing(1),
                marginRight: theme.spacing(1),
            },
        }));
        return (
            <div className={classes.root}>
                <Header />
                <Grid container spacing={3} justify="center" style={{ marginTop: '2%' }}>
                    <Grid item xs={8}>
                        <Navigation />
                        <Paper className={classes.paper}>
                            <Grid container justify='space-around' style={{ height: '10%' }}>
                                <Grid style={{ width: '30%' }}>
                                    <Card className={classes.card} style={{ maxHeight: '300px' }}>
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    Journey
                                                </Typography>

                                                <p>  <b>Date:</b> &nbsp;mm-dd-yyyy</p>
                                                <p> <b>Departure from:</b> &nbsp; Place / Time</p>
                                                <p><b> Arrive to: </b> &nbsp;Place/Time</p>
                                                <b>Bus:</b>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid style={{ width: '30%' }}>
                                    <Card className={classes.card}>
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    Tickets
                                                </Typography>

                                                <p>  <b>Tickets:</b> &nbsp;1 Adult  x Price</p>
                                                <p><b>Seats:</b> &nbsp; (Number of seats)</p>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid style={{ width: '30%' }}>
                                    <Card className={classes.card}>
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    Payment
                                                </Typography>

                                                <p>  <b>Tickets Total:</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ₱ 0 . 00</p>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid container style={{ width: '98%', marginTop:'50px'}} justify="space-around">
                                    <Grid style={{ width: '100%' }}>
                                        <TextField
                                            id="outlined-basic"
                                            className={classes.textField}
                                            label="First Name"
                                            margin="normal"
                                            variant="outlined"
                                            style={{
                                                width:'100%'
                                            }}
                                        />
                                    </Grid>
                                    <Grid style={{ width: '100%' }}>
                                        <TextField
                                            id="outlined-basic"
                                            className={classes.textField}
                                            label="Last Name"
                                            margin="normal"
                                            variant="outlined"
                                            style={{
                                                width:'100%'
                                            }}
                                        />
                                    </Grid>
                                    <Grid style={{ width: '100%' }}>
                                        <TextField
                                            id="outlined-basic"
                                            className={classes.textField}
                                            label="Phone Number"
                                            margin="normal"
                                            variant="outlined"
                                            style={{
                                                width:'100%'
                                            }}
                                        />
                                    </Grid>
                                    <Grid style={{ width: '100%' }}>
                                        <TextField
                                            id="outlined-basic"
                                            className={classes.textField}
                                            label="Email"
                                            margin="normal"
                                            variant="outlined"
                                            style={{
                                                width:'100%'
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Card>
                                <CardActions>
                                    <h4 justify='flex-end'>&nbsp;Price:</h4>
                                    <Grid container justify='flex-end'>
                                        <Button size="small" color="primary">
                                            Preview and Confirm
                                    </Button>
                                        <Grid container justify='flex-end'>
                                            <Button size="small" color="primary">
                                                Back
                                    </Button>
                                        </Grid>
                                    </Grid>
                                </CardActions>
                            </Card>

                        </Paper>
                    </Grid>
                </Grid>
            </div >
        )
    }

}