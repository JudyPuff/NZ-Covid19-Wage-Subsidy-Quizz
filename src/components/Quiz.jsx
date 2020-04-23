import React from 'react'
import Question from './components/Question'
import AnswerYN from './components/AnswerYN'

function Quiz(props) {

  function renderAnswerYN(key) {
    return (
      <AnswerYN
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    )
  }

  return (
    <div className="quiz">
      <Question content={props.question}/>
      <div className="answerYN">
        {props.answerYN.map(renderAnswerYN)}
      </div>

    </div>
  )
}

export default Quiz