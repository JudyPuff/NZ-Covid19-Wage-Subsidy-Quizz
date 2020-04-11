import React from 'react';
import {Route, Link} from 'react-router-dom'

class Question extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      testQs:[
        {
          id:'1',
          question: 'Are you employed at an essential business?',
          btn1: {isTrue: true, text 'Yes'},
          btn2: {isTrue: false, text: 'No'}
        }
      ]

    }
  }
}

// function Question(props) {
//   return (
//     <h2 className="question">{props.content}</h2>
//   );
// }

// Questions.propTypes = {
//   content: PropTypes.string.isRequired
// };

export default Question