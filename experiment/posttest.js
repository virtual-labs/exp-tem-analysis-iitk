/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "1.	What is the advantage of cross-sectional sample preparation over conventional TEM sample preparation?",  ///// Write the question inside double quotes
      answers: {
        a: "Cross-sectional TEM sample preparation process makes available larger region of interest available for imaging ",                  ///// Write the option 1 inside double quotes
        b: "Cross-sectional TEM sample preparation process makes usage of higher kV for imaging and can provide higher resolution ",                  ///// Write the option 2 inside double quotes
        c: "Cross-sectional TEM sample preparation process requires lesser number of steps ",                  ///// Write the option 2 inside double quotes
        d: "Cross-sectional TEM sample preparation process is faster as it uses electrochemical etching. ",                  ///// Write the option 2 inside double quotes

              },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

    {
      question: "2.	Cross-sectional TEM sample preparation is NOT preferred for imaging:",  ///// Write the question inside double quotes
      answers: {
        a: "Modified top-surface via chemical treatment",                  ///// Write the option 1 inside double quotes
        b: "Nano-crystallites in a bulk matrix  ",                  ///// Write the option 2 inside double quotes
        c: "Interface between coating and substrate",                  ///// Write the option 2 inside double quotes
        d: "d.	Nano-textured layers during multi-pass rolling of samples",                  ///// Write the option 2 inside double quotes
        },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    
{
      question: "3.	An important precaution to be observed for processing the cross-sectional TEM sample is:",
      answers: {
        a: "To preserve the sliced pieces in protected atmosphere and avoid their oxidation",
        b: "Carefully slicing the samples to thickness of less than 1 mm",
        c: "Utilising liquid nitrogen for the dimpling of samples",
        d: "Preparing the surface for TEM observation using electrochemical etching"
      },
      correctAnswer: "a"
    },
      {
      question: "4.	What problem may NOT crop up during mounting of the sliced samples for cross-sectional TEM:",
      answers: {
        a: "Buoyancy effects may lift the samples up during pouring of epoxy/resin",
        b: "Shifting of samples may occur during ",
        c: "Alignment of interface region may occur during mounting ",
        d: "Ion beam etching will not work on the mounted samples"
      },
      correctAnswer: "d"
    },

      {
      question: "5.	The sectioned samples are kept placed on the mount with the interface region facing:<br>Note: Larger region of interest is exposed for imaging.",
      answers: {
        a: "Parallel to top surface",
        b: "Perpendicular to top surface",
       
      },
      correctAnswer: "b"
    },
    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////