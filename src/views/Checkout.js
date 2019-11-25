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
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import TextField from '@material-ui/core/TextField';
import { Redirect } from "react-router-dom";



export default class DateLocation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            phone: "",
            email: "",
            payment: "",
            toCheckout: false,
            fnameColor: null,
            lnameColor: null,
            phoneColor: null,
            emailColor: null,
            paymentColor: null,
            requiredfname: "",
            requiredlname: "",
            requiredgmail: "",
            requiredcp: "",
            requiredpay: ""
        }
    }
    checkInformation = () => {
        if (this.state.firstname !== "" && this.state.lastname !== "" && this.state.phone !== "" && this.state.email !== "" && this.state.payment !== "") {
            this.setState({ toCheckout: true });
        }
        if (this.state.firstname === "") {
            this.setState({ requiredfname: "This field is required" })
            this.setState({
                fnameColor: {
                    color: 'red'
                }
            })
        }
        if (this.state.lastname === "") {
            console.log("lastname color")
            this.setState({ requiredlname: "This field is required" })
            this.setState({
                lnameColor: {
                    color: 'red'
                }
            })
        }
        if (this.state.email === "") {
            this.setState({ requiredgmail: "This field is required" })
            this.setState({
                emailColor: {
                    color: 'red'
                }
            })
        }
        if (this.state.phone === "") {
            this.setState({ requiredcp: "This field is required" })
            this.setState({
                phoneColor: {
                    color: 'red'
                }
            })
        }
        if (this.state.payment === "") {
            console.log("phone color")
            this.setState({ requiredpay: "This field is required" })
            this.setState({
                paymentColor: {
                    color: 'red'
                }
            })
        }
        // if (this.state.firstname === null && this.state.lastname === null && this.state.phone === null && this.state.email === null && this.state.payment) {
        //     this.setState({ requiredfname: "This field is required", requiredlname: "This field is required", requiredgmail: "This field is required", requiredcp: "This field is required", requiredpay: "This field is required" })
        // }
    }

    render() {
        if (this.state.toCheckout) {
            //go to the Checkout Component
            this.setState({ fnameColor: { color: "black" }, lnameColor: { color: "black" }, emailColor: { color: "black" }, phoneColor: { color: "black" }, paymentColor: { color: "black" } })
            return <Redirect to={{ pathname: "/Confirm", state: { fname: this.state.firstname, lname: this.state.lastname, gmail: this.state.email, cp: this.state.phone, pay: this.state.payment } }} />
        }
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
                <Grid container spacing={3} justify="center" style={{ marginTop: '5%%' }}>
                    <Grid item xs={8}>
                        <Navigation />
                        <Paper className={classes.paper}>
                            <Grid container justify='space-around' style={{ height: '10%' }}>
                                <Grid style={{ width: '30%' }}>
                                    <Card className={classes.card} style={{ maxHeight: '300px', marginTop: '8%' }}>
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
                                <Grid style={{ width: '30%', maxHeight: '300px', marginTop: '2.5%' }}>
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
                                <Grid style={{ width: '30%', marginTop: '2.5%', }}>
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
                                <Grid container style={{ width: '98%', marginTop: '50px' }} justify="space-around">
                                    <Grid style={{ width: '98%' }}>
                                        <TextField
                                            id="outlined-basic"
                                            value={this.state.firstname}
                                            className={classes.textField}
                                            label="First Name"
                                            margin="normal"
                                            variant="outlined"
                                            style={{
                                                width: '100%'
                                            }}
                                        />
                                    </Grid>
                                    {/* <Typography gutterBottom variant="h6" component="h6" style={this.state.fnameColor}>{this.state.requiredfname}</Typography> */}
                                        <p style={this.state.fnameColor}>{this.state.requiredfname}</p>
                                    <Grid style={{ width: '98%' }}>
                                        <TextField
                                            id="outlined-basic"
                                            value={this.state.lastname}
                                            className={classes.textField}
                                            label="Last Name"
                                            margin="normal"
                                            variant="outlined"
                                            style={{
                                                width: '100%'
                                            }}
                                        />

                                    </Grid>
                                    {/* <Typography gutterBottom variant="h6" component="h6">{this.state.requiredlname}</Typography> */}
                                        <p style={this.state.lnamecolor}>{this.state.requiredlname}</p>
                                    <Grid style={{ width: '98%' }}>
                                        <TextField
                                            id="outlined-basic"
                                            value={this.state.phone}
                                            className={classes.textField}
                                            label="Phone Number"
                                            margin="normal"
                                            variant="outlined"
                                            style={{
                                                width: '100%'
                                            }}
                                        />
                                    </Grid>
                                    {/* <Typography gutterBottom variant="h6" component="h6">{this.state.requiredcp}</Typography> */}
                                    <p style={this.state.cpColor}>{this.state.requiredcp}</p>
                                    <Grid style={{ width: '98%' }}>
                                        <TextField
                                            id="outlined-basic"
                                            value={this.state.email}
                                            className={classes.textField}
                                            label="Email"
                                            margin="normal"
                                            variant="outlined"
                                            style={{
                                                width: '100%'
                                            }}
                                        />
                                    </Grid>
                                    {/* <Typography gutterBottom variant="h6" component="h6">{this.state.requiredgmail}</Typography> */}
                                    <p style={this.state.emailColor}>{this.state.requiredgmail}</p>
                                    <Grid style={{ width: '98%' }}>
                                        <TextField
                                            id="outlined-basic"
                                            value={this.state.payment}
                                            className={classes.textField}
                                            label="Payment Method"
                                            margin="normal"
                                            variant="outlined"
                                            style={{
                                                width: '100%'
                                            }}
                                        />
                                    </Grid>
                                    {/* <Typography gutterBottom variant="h6" component="h6">{this.state.requiredpay}</Typography> */}
                                    <p style={this.state.paymentColor}>{this.state.requiredlname}</p>
                                </Grid>
                                <br></br>
                                <br></br>
                                <hr style={{ width: '96%' }}></hr>
                            </Grid>
                            <Card>
                                <CardActions>
                                    <Typography gutterBottom variant="h6" component="h6">
                                        &nbsp;&nbsp;Price:
                                                </Typography>
                                    <Grid container justify='flex-end'>
                                        <Button size="small" color="primary" type="submit" onClick={this.checkInformation} >Preview & Confirm</Button>
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