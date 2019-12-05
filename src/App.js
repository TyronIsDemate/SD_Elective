
import React from 'react';
import './App.css';
import userView from './views/userView';
import adminView from './views/adminView';
import Countdown from './components/Countdown';
import { BrowserRouter,Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/userview" component={userView} />
        <Route path="/adminView" component={adminView} />
        <Route path="/countdown" component={Countdown} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;