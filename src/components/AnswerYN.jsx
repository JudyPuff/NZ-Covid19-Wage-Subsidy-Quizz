import React from 'react'


function AnswerYN(props) {
  return(
  <div>
    <input 
    type="radio"
    className="buttonContainer"
    name="radioGroup"
    checked={props.answerType === props.answer}
    id={props.answerType}
    value={props.answerType}
    disabled={props.answer}
    onChange={props.onAnswerSelected}
    />
    <label className="buttonContainer" htmlFor={props.answerType}>{props.answerContent}</label>
  </div>
  )
}

export default AnswerYN;