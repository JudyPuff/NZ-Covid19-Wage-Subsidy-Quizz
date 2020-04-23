import React from 'react';
// import {quizQuestions} from '../api/quizQuestions'
import Questions from './Questions'
// import currentQ from './CurrentQ'

class Question extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // answer:true
    }
    // this.grabAnswer = this.grabAnswer.bind(this)
  }
  // grabAnswer (answer)

render() {
  return(
  <div className="middleContainer">
    <Questions/>
  </div>

  )}
}

// function Question(props) {
//   return (
//     <h2 className="question">{props.content}</h2>
//   )
// }

// import {Route, Link} from 'react-router-dom'

// class Question extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       finishied: false,
//       questions:[
//         question1: {
//         question: "Are you employed at an essential business?",
//         btn1: {isTrue:true, text:'Yes'},
//         butn2: {isTrue:false, text:'No'}
//       },
//       question2: {
//         question: "Is your role a part of your employer's essential function?",
//         btn1: {isTrue:true, text:'Yes'},
//         butn2: {isTrue:false, text:'No'}
//       },
//       question3: {
//         question: "Are you able to perform your role from home?",
//         btn1: {isTrue:true, text:'Yes'},
//         butn2: {isTrue:false, text:'No'}
//       },
//       question4: {
//         question: "Are you being asked to wor your normal hours, at normal pay?",
//         btn1: {isTrue:true, text:'Yes'},
//         butn2: {isTrue:false, text:'No'}
//       },
//       question5: {
//         question: "Are you receiving your normal pay, at your full hours?",
//         btn1: {isTrue:true, text:'Yes'},
//         butn2: {isTrue:false, text:'No'}
//       },
//       question6: {
//         question: "Are you being asked to work your normal hours, at normal pay?",
//         btn1: {isTrue:true, text:'Yes'},
//         butn2: {isTrue:false, text:'No'}
//       },
//       question7: {
//         question: "Has there been, or is there expected to be, a 30% drop in revenue for your employer as a result of COVID-19?",
//         btn1: {isTrue:true, text:'Yes'},
//         butn2: {isTrue:false, text:'No'}
//       },
//       question8: {
//         question: "Has your empployer applied for the government wage subsidy? Your employer is required to notify you of this, and seek your consent to release certain information to the Ministry of Social Development.",
//         btn1: {isTrue:true, text:'Yes'},
//         butn2: {isTrue:false, text:'No'}
//       },
//       question9: {
//         question: "Have you consented to any changes to your pay, hours, or other employment conditions? Your employer is required to seek your consent, both at law and as a condition of receiving the wage subsidy.",
//         btn1: {isTrue:true, text:'Yes'},
//         butn2: {isTrue:false, text:'No'}
//       },
//       question10: {
//         question: "Are you being paid at least 80% of your normal wages? Note: It likely does not make any difference if you are being paid 80% of your wages on normal hours, or 80% of your hours on normal pay.",
//         btn1: {isTrue:true, text:'Yes'},
//         butn2: {isTrue:false, text:'No'}
//       }  
//       ],
//       currentQ:[]
//     }
//     this.updatePage = this.updatePage.bind(this)

//     updatePage (q) {
//       if (this.state.questions) {
//         this.setState({

//         })
//       } else {
//         this.setState({
//           finished: true
//         })
//       }
//     }

//     showEssentialQ () {
//       return (
//         <div>
//           {this.state.questions.question1.question}
//         </div>
//       )
//     }

//     showEssentialFunctionQ () {
//       if (this.state.questions.question1 ==true){
//         return(
//           this.state.questions.question2.question
//         )
//       } 
//     }

//     render () {
//       if (this.state.finished) {
//       //   return <Redirect to='/result'/>
//       // }
//       return (
//         <div className='App'>
//           <h1>{this.state.questions}</h1>
//           <button onClick={() => this.updatePage(this.state.questions.btn1.isTrue)}> {this.state.questions.btn2.text}
//             </button>

//         </div>
//       )
//     }
//   }
// }

// function Question(props) {
//   return (
//     <h2 className="question">{props.content}</h2>
//   );
// }

// Questions.propTypes = {
//   content: PropTypes.string.isRequired
// };

export default Question