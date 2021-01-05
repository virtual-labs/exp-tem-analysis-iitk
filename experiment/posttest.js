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
      question: "<img src="images/fig11.PNG">",  ///// Write the question inside double quotes
      answers: {
        a: "A-1, B-2, C-3, D-4",                  ///// Write the option 1 inside double quotes
        b: "A-2, B-1, C-4, D-3 ",                  ///// Write the option 2 inside double quotes
        c: "A-4, B-2, C-3, D-1 ",                  ///// Write the option 2 inside double quotes
        d: "A-2, B-4, C-1, D-3 ",                  ///// Write the option 2 inside double quotes

              },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },

    {
      question: "2. Double side dimpling of sample has advantage of",  ///// Write the question inside double quotes
      answers: {
        a: "Providing very sharp and narrow region of observation",                  ///// Write the option 1 inside double quotes
        b: "Providing very shallow and wide region of observation ",                  ///// Write the option 2 inside double quotes
        c: "Minimised sample damage  ",                  ///// Write the option 2 inside double quotes
        d: "Easier sample handling  ",                  ///// Write the option 2 inside double quotes
        },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    {
      question: "3. The nano-sized powders may be observed under TEM by which technique:",  ///// Write the question inside double quotes
      answers: {
        a: "Using few drops of powder-suspension on carbon coated copper grid",                  ///// Write the option 1 inside double quotes
        b: "By conventional process of slicing, punching, dimpling, and ion beam milling ",                  ///// Write the option 2 inside double quotes
        c: "By putting nano-powders on copper grid  ",                  ///// Write the option 2 inside double quotes
        d: "By making slurry/paste of powders on carbon coated copper grid  ",                  ///// Write the option 2 inside double quotes
        },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
{
      question: "4. The powder samples are suspended in the solution by",  ///// Write the question inside double quotes
      answers: {
        a: "Magnetic stirrer",                  ///// Write the option 1 inside double quotes
        b: "Electric Heater",                  ///// Write the option 2 inside double quotes
        c: "Gravity shaker  ",                  ///// Write the option 2 inside double quotes
        d: "Ultrasonication  ",                  ///// Write the option 2 inside double quotes
        },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
{
      question: "5. A nanocrystalline powder material is usually supported on TEM holder for TEM imaging",  ///// Write the question inside double quotes
      answers: {
        a: "Using copper grid",                  ///// Write the option 1 inside double quotes
        b: "Dispersing on carbon tape ",                  ///// Write the option 2 inside double quotes
        c: "as stand-alone sample  ",                  ///// Write the option 2 inside double quotes
        d: "On carbon coated copper grid  ",                  ///// Write the option 2 inside double quotes
        },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
{
      question: "6. Brittle materials are prepared for TEM imaging using",  ///// Write the question inside double quotes
      answers: {
        a: "Ion beam milling",                  ///// Write the option 1 inside double quotes
        b: "Electrochemical Etching ",                  ///// Write the option 2 inside double quotes
        c: "Physical Vapor deposition  ",                  ///// Write the option 2 inside double quotes
        d: "Disc-slicing ",                  ///// Write the option 2 inside double quotes
        },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
{
      question: "7. Double side dimpling is preferred over one-sided dimpling because",  ///// Write the question inside double quotes
      answers: {
        a: "Double side dimpling has double efficiency of operation",                  ///// Write the option 1 inside double quotes
        b: "Double side dimpling promotes less damage to material ",                  ///// Write the option 2 inside double quotes
        c: "Double side dimpling provides more observable area for imaging  ",                  ///// Write the option 2 inside double quotes
        d: "Double side dimpling reduces charging on the TEM sample",                  ///// Write the option 2 inside double quotes
        },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
                              ///// To add more questions, copy the section below 



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