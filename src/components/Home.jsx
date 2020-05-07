import React from 'react'
import {Link} from 'react-router-dom'
import Quiz from './Quiz'

class Home extends React.Component {
  render () {
    return (
      <div className="middleContainer">
        <div className="content">
          <p>
          Check to see if you are eligible for the Covid19 Wage Subsidy from the New Zealand Government!
          </p>
          <div>
            <Link to='/quiz' Component={<Quiz/>}><button>Start Quiz</button></Link>
          </div>

        </div>
      </div>
    )
  }
}

export default Home;