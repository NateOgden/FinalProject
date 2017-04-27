import React, { Component } from 'react';
import logo from './logo.svg';
import Form from './Components/Form/Form.js'; 
// import Display from './Components/Display/Display.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>CS 3630 Final Project</h2>
        </div>
        <p className="App-intro">
          Search the Giphy database using key terms to see what joy you can find!
        </p>
        <Form />
      </div> 
    ); 
  }
}

export default App;
 