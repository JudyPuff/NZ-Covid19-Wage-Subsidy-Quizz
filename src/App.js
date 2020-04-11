import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>NZ Covid19 Wage Subsidy Quizz</h2>
        </div>
        <p className="App-intro">
          Check to see if you are eligible to the Covid19 Wage Subsidy from the New Zealand Government!
        </p>
      </div>
    );
  }
}

export default App;
