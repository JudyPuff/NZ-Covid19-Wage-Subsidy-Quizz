import resultMsgs from './resultMsgs'

const quizQuestions = [
  {
    id: 1,
    question: "Are you employed at an essential business?",
    answers: [ 
      {
        type: true,
        content: "Yes",
        nextQuestion: 1
      },
      {
        type: false,
        content: "No",
        nextQuestion: 2
      }
    ]
  },
  {
    id: 2,
    question: "Is your role a part of your employer's essential function?",
    answers: [ 
      {
        type: true,
        content: "Yes",
        nextQuestion: 3
      },
      {
        type: false,
        content: "No",
        nextQuestion: 2
      }
    ]
  },
  {
    id: 3,
    question: "Are you able to perform your role from home?",
    answers: [ 
      {
        type: true,
        content: "Yes",
        nextQuestion: 3
      },
      {
        type: false,
        content: "No",
        nextQuestion: 4
      }
    ]
  },
  {
    id: 4,
    question: "Are you being asked to work your normal hours, at normal pay?",
    answers: [ 
      {
        type: true,
        content: "Yes",
        nextQuestion: props.resultMsgs.msgWFH
      },
      {
        type: false,
        content: "No",
        nextQuestion: resultMsgs.msgCondChange
      }
    ]
  },
  {
    id: 5,
    question: "Are you receiving your normal pay, at your full hours?",
    answers: [ 
      {
        type: true,
        content: "Yes",
        nextQuestion: resultMsgs.govtAnnouncement
      },
      {
        type: false,
        content: "No",
        nextQuestion: resultMsgs.msgCondChange
      }
    ]
  },
  {
    id: 6,
    question: "Has there been, or is there expected to be, a 30% drop in revenue for your employer as a result of COVID-19?",
    answers: [ 
      {
        type: true,
        content: "Yes",
        nextQuestion: 6
      },
      {
        type: false,
        content: "No",
        nextQuestion: resultMsgs.msgEmployerNotEligible
      }
    ]
  },
  {
    id: 7,
    question: "Has your empployer applied for the government wage subsidy? Your employer is required to notify you of this, and seek your consent to release certain information to the Ministry of Social Development.",
    answers: [ 
      {
        type: true,
        content: "Yes",
        nextQuestion: 7
      },
      {
        type: false,
        content: "No",
        nextQuestion: resultMsgs.msgAskEmployer
      }
    ]
  },
  {
    id: 8,
    question: "Have you consented to any changes to your pay, hours, or other employment conditions? Your employer is required to seek your consent, both at law and as a condition of receiving the wage subsidy.",
    answers: [ 
      {
        type: true,
        content: "Yes",
        nextQuestion: 8
      },
      {
        type: false,
        content: "No",
        nextQuestion: resultMsgs.msgRedundant
      }
    ]
  },
  {
    id: 9,
    question: "Are you being paid at least 80% of your normal wages? Note: It likely does not make any difference if you are being paid 80% of your wages on normal hours, or 80% of your hours on normal pay.",
    answers: [ 
      {
        type: true,
        content: "Yes",
        nextQuestion: resultMsgs.msgGood
      },
      {
        type: false,
        content: "No",
        nextQuestion: resultMsgs.msgEmployerSubsidy
      }
    ]
  },
]

export default quizQuestions