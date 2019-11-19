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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Home from '../views/Datelocation';




export default class DateLocation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bus: 'Bus',
            availableSeat: 'Available Seats',
            departureTime: 'Departure Time',
            arrivalTime: 'Arrival Time',
            duration: 'Duration',

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

        const StyledTableCell = withStyles(theme => ({
            head: {
                backgroundColor: "#0269e8",
                color: theme.palette.common.white,
            },
            body: {
                fontSize: 14,
            },
        }))(TableCell);

        const StyledTableRow = withStyles(theme => ({
            root: {
                '&:nth-of-type(odd)': {
                    backgroundColor: theme.palette.background.default,
                },
            },
        }))(TableRow);

        function createData(bus, availableSeat, departureTime, arrivalTime, duration) {
            return { bus, availableSeat, departureTime, arrivalTime, duration };
        }

        const rows = [
            createData('', ' ', '', ' ',' '),
            createData('', '','', ' ', ' '),
            createData('', '', '', ' ', ' '),
            createData('', '', '', ' ', ' '),
            createData('', '', '', ' ', ' '),
        ];

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
            root: {
                width: '100%',
                marginTop: theme.spacing(3),
                overflowX: 'auto',
            },
            table: {
                minWidth: 700,
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
                                    <h4>&nbsp;Journey from &nbsp;{this.props.from} &nbsp;to {this.props.to}</h4>
                                    <h5 style={{ textAlign: 'left' }}> &nbsp;Date of Departure:</h5>
                                    <Table className={classes.table} aria-label="customized table">
                                        <TableHead>
                                            <TableRow>
                                                <StyledTableCell>Bus</StyledTableCell>
                                                <StyledTableCell align="right">Available Seats</StyledTableCell>
                                                <StyledTableCell align="right">Departure Time</StyledTableCell>
                                                <StyledTableCell align="right">Arrival Time</StyledTableCell>
                                                <StyledTableCell align="right">Duration</StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map(row => (
                                                <StyledTableRow key={row.bus}>
                                                    <StyledTableCell component="th" scope="row">
                                                        {row.bus}
                                                    </StyledTableCell>
                                                    <StyledTableCell align="right">{row.availableSeat}</StyledTableCell>
                                                    <StyledTableCell align="right">{row.departureTime}</StyledTableCell>
                                                    <StyledTableCell align="right">{row.arrivalTime}</StyledTableCell>
                                                    <StyledTableCell align="right">{row.duration}</StyledTableCell>
                                                </StyledTableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </CardContent>
                                <CardActions>
                                    <h4 justify='flex-end'>&nbsp;Price:</h4>
                                    <Grid container justify='flex-end'>
                                        <Button size="small" color="primary">
                                            Check Availability
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
            </div>
        )
    }

}