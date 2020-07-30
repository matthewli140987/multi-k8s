import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';
import panda from './panda.png';
import manager from './manager.jpg';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">
              Ryo Bridge Capital/Associates/Partners
            </h1>
            <Link to="/">Home</Link>
            <Link to="/otherpage">Other Page</Link>
          </header>
          <div>
            {/* <Route exact path="/" component={Fib} /> */}
            <Route path="/otherpage" component={OtherPage} />

            <h1>Currently under construction...</h1>
            <h2>Please enjoy a picture of me in a panda suit</h2>
            <img src={panda} />

            <hr></hr>
            {/* <h2>2/20 nap time after a Maccy D's Happy Meal</h2> */}
            {/* <img src={manager} /> */}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
