import React from 'react';
import quizQuestions from '../api/quizQuestions'

class Questions extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      questionId: 0,
    }
    this.nextQHandler = this.nextQHandler.bind(this)
  }

  nextQHandler(evt){
    const newQ = this.state.questionId + 1
    this.setState({
      questionId: newQ
    })
    this.props.changeQ(newQ)
  }

  render() {
    return (
      <div>
        <div>Question: {quizQuestions[this.state.questionId].question}</div>
        <button onClick={this.nextQHandler}>Next Question</button>
      </div>
    )
  }
}

export default Questions