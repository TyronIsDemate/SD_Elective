import React from 'react';
import './App.css';
import Home from './views/Datelocation';
import Tickets from './views/Tickets';
import Checkout from './views/Checkout';
import Confirm from './views/Confirm';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'

function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/tickets" component={Tickets} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/confirm" component={Confirm} />
      </Switch>
    </Router>

  );
}

export default App;
