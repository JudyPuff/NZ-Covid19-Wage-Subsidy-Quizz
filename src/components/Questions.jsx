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
    const currentQuestion = quizQuestions[this.state.questionId]
    const yesButton = quizQuestions[this.state.questionId].answers[0]
    const noButton = quizQuestions[this.state.questionId].answers[1]
    const handleClickYes = () => {
      this.setState({
        questionId: yesButton.nextQuestion
      })
    }
    const handleClickNo = () => {
      this.setState({
        questionId: noButton.nextQuestion
      })
    }
    return (
      <div>
        <div>{quizQuestions[this.state.questionId].question}</div>
        <button onClick={this.handleClickYes}>Yes{yesButton.content}</button>
        <button onClick={this.handleClickNo}>No{noButton.content}</button>
      </div>
    )
  }
}

export default Questions