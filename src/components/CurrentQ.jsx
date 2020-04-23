import React from 'react'
import {quizQuestions} from '../api/quizQuestions'

const CurrentQ = props => {
  return (
    <div className="content">
      {props.quizQuestions.map((question) => {
        return <div key={question.id}>{question.question}</div>
      })}
    </div>
  )
}

export default CurrentQ