import React from 'react'
import {Route, Link} from 'react-router-dom'
// import Question from './Question'

class Home extends React.Component {
  constructor (props){
    super(props)
    this.state={

    }
  }
  render () {
    return (
      <div className="App-intro">
          <p>
          Check to see if you are eligible for the Covid19 Wage Subsidy from the New Zealand Government!
          </p>
        </div>
    )
  }
}

export default Home;