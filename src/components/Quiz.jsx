import React from 'react';
// import {quizQuestions} from '../api/quizQuestions'
import Questions from './Questions'
// import currentQ from './CurrentQ'

class Quiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question:''
      
    }
    this.qHandler = this.qHandler.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  
  qHandler(newQ){
    this.setState({
      q:newQ
    })
  }

  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  componentDidMount(){
    this.setState({
      question:this.question
    })
  }

render() {
  return(
  <div className="container">
    <div className="middleContainer">
      <Questions changeQ={this.qHandler}/>

    </div>
  </div>

  )}
}

export default Quiz