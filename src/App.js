import React, {Component} from 'react';
import './App.css';
import Home from './views/Datelocation';
import Tickets from './views/Tickets';
import Checkout from './views/Checkout';
import Confirm from  './views/Confirm';

function App() {
  return (
    <div className="App">
      <Tickets/>
    </div>
  );
}

export default App;
