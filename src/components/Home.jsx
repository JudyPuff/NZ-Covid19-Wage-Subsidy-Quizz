import React from 'react'
import {Link} from 'react-router-dom'
import Question from './Question'

class Home extends React.Component {
  constructor (props){
    super(props)
    this.state={

    }
  }
  render () {
    return (
      <div className="middleContainer">
        <div className="content">
          <p>
          Check to see if you are eligible for the Covid19 Wage Subsidy from the New Zealand Government!
          </p>
          <div>
            <Link to='/question' Component={<Question/>}><button>Start Quizz</button></Link>
          </div>

        </div>
      </div>
    )
  }
}

export default Home;