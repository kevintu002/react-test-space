import React, { useState } from 'react';

export default function QuizNavBar({ questions }) {
  const [questionIndex, setQuestionIndex] = useState(0);

  // define event handlers 
  const goBack = () => setQuestionIndex(prevQuestionIndex => prevQuestionIndex - 1);
  const goToNext = () => setQuestionIndex(prevQuestionIndex => prevQuestionIndex + 1);
  // determine if on the first question or not 
  const onFirstQuestion = true;
  const onLastQuestion = questionIndex === questions.length - 1;

  return (
    <nav>
      <span>Question #{questionIndex + 1}</span>
      <div>
        <button onClick={goBack} disabled={onFirstQuestion}>
          Go Back
        </button>
        <button onClick={goToNext} disabled={onLastQuestion}>
          Next Question
        </button>
      </div>
    </nav>
  );
}

// import React, { useState } from 'react';

// export default function QuizNavBar() {
//   let [questionIndex, setQuestionIndex] = useState(0);

//   // define event handlers 
//   let goBack = () => {
//       if (questionIndex != 0) {
//           onFirstQuestion = false;
//           console.log("GRAPPA")
//       }
//       setQuestionIndex(prevQuestionIndex => prevQuestionIndex - 1);
//   };
//   let goToNext = () => {
//       if (questionIndex == 5) {
//           this.onLastQuestion = true;
//           this.onFirstQuestion = false;
//           console.log("GRAPPA2")
//       }
//       setQuestionIndex(prevQuestionIndex => prevQuestionIndex + 1);
//   };
//   // determine if on the first question or not 
//   let onFirstQuestion = true;
//   let onLastQuestion = false;

//   return (
//     <nav>
//       <span>Question #{questionIndex + 1}</span>
//       <div>
//         <button onClick={goBack} disabled={onFirstQuestion}>
//           Go Back
//         </button>
//         <button onClick={goToNext} disabled={onLastQuestion}>
//           Next Question
//         </button>
//       </div>
//     </nav>
//   );
// }
