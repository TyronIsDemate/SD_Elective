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
import DateFnsUtils from '@date-io/date-fns';
import Navigation from '../components/navigationBar'
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { Redirect } from "react-router-dom";



export default class DateLocation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toISOString(),
            time: Date.now(),
            from: null,
            fromRequire: 'Starting Location',
            to: null,
            toRequired: 'Destination',
            toTickets:false,
            toRequiredColor:null,
            fromRequiredColor:null
        }
    }
    checkCredential = () => {
        if (this.state.from !== null && this.state.to !== null){
            this.setState({toTickets:true});
        }
        if(this.state.from == null){
            this.setState({fromRequire:"Required field"})
            this.setState({fromRequiredColor:{
                color:"red"
            }})
        }
        if(this.state.to == null){
            this.setState({toRequired:"Required Field"});
            this.setState({toRequiredColor:{
                color:"red"
            }})
        }
        if(this.state.from == null && this.state.to == null){
            this.setState({fromRequire:"Required field", toRequired:"Required field"})
        }
      };

    render() {
        if (this.state.toTickets) {
            //go to the Ticket Component
            this.setState({toRequiredColor:{color:"black"},fromRequiredColor:{color:"black"}})
            return <Redirect to={{ pathname: "/Tickets", state: {journeyTo:this.state.to,journeyFrom:this.state.from} }} />
        }
        return (
            <div>
                {this.datelocation()}
            </div>
        )
    }

    datelocation() {
        const date = date => {
            this.setState({ 'date': date })
        };

        const time = time => {
            this.setState({ 'time': time })
        }

        const from = from => event => {
            this.setState({ [from]: event.target.value })
        }
        const to = to => event => {
            this.setState({ [to]: event.target.value })
        }
       


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
            <div className={classes.root}>
                <Header />
                <Grid container spacing={3} justify="center" style={{ marginTop: '7%' }}>
                    <Grid item xs={8}>
                        <Navigation />
                        <Paper className={classes.paper}>
                            <Card>
                                <CardContent>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <Grid container justify='space-around'>
                                            <Grid>
                                                <KeyboardDatePicker
                                                    disableToolbar
                                                    variant="inline"
                                                    format="MM/dd/yyyy"
                                                    margin="normal"
                                                    id="date-picker-inline"
                                                    label="Departure Date"
                                                    value={this.state.date}
                                                    onChange={date}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change date',
                                                    }}
                                                />
                                            </Grid>
                                            <Grid>
                                                <KeyboardTimePicker
                                                    margin="normal"
                                                    id="time-picker"
                                                    label="Departure Time"
                                                    value={this.state.time}
                                                    onChange={time}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change time',
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid container justify="space-around" >
                                            <Grid>
                                                <FormControl className={classes.formControl} style={{ width: '250px' }}>
                                                    <InputLabel shrink htmlFor="age-native-label-placeholder">
                                                        From:
                                                </InputLabel>
                                                    <NativeSelect
                                                        value={this.state.from}
                                                        onChange={from('from')}
                                                        inputProps={{
                                                            name: 'from',
                                                            id: 'age-native-label-placeholder',
                                                        }}
                                                    >
                                                        <option value={''}></option>
                                                        <option value={'Talisay'}>Talisay</option>
                                                        <option value={'Parkmall'}>Parkmall</option>
                                                        <option value={'SM Seaside'}>SM Seaside</option>
                                                        <option value={'SM City'}>SM City</option>
                                                    </NativeSelect>
                                                    <FormHelperText style={this.state.fromRequiredColor}>{this.state.fromRequire}</FormHelperText>
                                                </FormControl>
                                            </Grid>
                                            <Grid>
                                                <FormControl className={classes.formControl} style={{ width: '250px' }}>
                                                    <InputLabel shrink htmlFor="age-native-label-placeholder">
                                                        To:
                                                </InputLabel>
                                                    <NativeSelect
                                                        value={this.state.to}
                                                        onChange={to('to')}
                                                        inputProps={{
                                                            name: 'to',
                                                            id: 'age-native-label-placeholder',
                                                        }}
                                                    >
                                                        <option value={''}></option>
                                                        <option value={'Parkmall'}>Parkmall</option>
                                                        <option value={'SM Seaside'}>SM Seaside</option>
                                                        <option value={'Sanremo'}>Sanremo</option>
                                                        <option value={'Mactan Airport'}>Mactan Airport</option>
                                                    </NativeSelect>
                                                    <FormHelperText style={this.state.toRequiredColor}>{this.state.toRequired}</FormHelperText>
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                    </MuiPickersUtilsProvider>
                                </CardContent>
                                <CardActions>
                                    <Grid container justify='flex-end'>
                                    <Button size="small" color="primary" type="submit" onClick={this.checkCredential} >CHECK AVAILABILITY</Button>
                                    </Grid>
                                </CardActions>
                            </Card>
                        </Paper>
                    </Grid>
                    </Grid>
            </div>
                )
            }
        
}