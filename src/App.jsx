import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Questions from './components/Questions'
import Home from './components/Home';
import Quiz from './components/Quiz'
import { HashRouter as Router, Route } from 'react-router-dom'


class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>NZ Covid19 Wage Subsidy Quizz</h2>
        </div>

        <div className="container">
          <div className="middleContainer">
          <Route exact path='/' component={Home}/>
          <Route path='/quiz' render={() => {
              return (<Quiz/>)
            }} />
          </div>
        </div>
      </div> 
      </Router>   
    ); 
  }
}
export default App;
