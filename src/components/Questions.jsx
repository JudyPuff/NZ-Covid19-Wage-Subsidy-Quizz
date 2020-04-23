import React from 'react';

class Questions extends React.Component {


  
  render() {
    const quizQuestions = [
      {
        id: 1,
        question: "Are you employed at an essential business?"
      },
      {
        id: 2,
        question: "Is your role a part of your employer's essential function?"
      },
      {
        id: 3,
        question: "Are you able to perform your role from home?"
      },
      {
        id: 4,
        question: "Are you being asked to wor your normal hours, at normal pay?"
      },
      {
        id: 5,
        question: "Are you receiving your normal pay, at your full hours?"
      },
      {
        id: 6,
        question: "Has there been, or is there expected to be, a 30% drop in revenue for your employer as a result of COVID-19?"
      },
      {
        id: 7,
        question: "Has your empployer applied for the government wage subsidy? Your employer is required to notify you of this, and seek your consent to release certain information to the Ministry of Social Development."
      },
      {
        id: 8,
        question: "Have you consented to any changes to your pay, hours, or other employment conditions? Your employer is required to seek your consent, both at law and as a condition of receiving the wage subsidy."
      },
      {
        id: 9,
        question: "Are you being paid at least 80% of your normal wages? Note: It likely does not make any difference if you are being paid 80% of your wages on normal hours, or 80% of your hours on normal pay."
      },
    ]
    const list = quizQuestions.map(q=>{
      return (
        <li key={q.id}>{q.question}</li>
      )
    })
    return (
      <ul>
        {list}
      </ul>
    )
  }
}



// export function questionsList(props) {
//   let quizQuestions = props.quizQuestions
//   const listItems = quizQuestions.map((q) => 
//   <li>{q}</li>
// )
//   return (
//     <ul>{listItems}</ul>
//   )
// }

export default Questions