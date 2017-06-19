// Nice to Haves
// 1. randomize questions
// 2. 

// Create your initial state object
var appState = {
    questions: [],
    score: 0,
    correctAnswer: [],
    page: 0

    //page 0: start; page 1: question; page 2: results; 3: final;
    // User's answer choice(s)	
    // Has quiz started?
    // What is the current question?
    // Other things like score? Anything else?
};


 // Questions (with answers)
    appState.questions = [
      {
        question:'What is 5 % 10?', 
        choice: ['0','1','5','50'], 
        answer: 2,
      },
      {
        question:'I am thinking of a number between 1 & 3, what is it?', 
        choice: ['1','2','3','4'], 
        answer: 1,
      },
      {
        question:'What is 10^3?', 
        choice: ['300','10000','1000','100'], 
        answer: 2,
      },
      {
        question:'What is the square root of 144?', 
        choice: ['9','1440','10','12'], 
        answer: 3
      },
      {
        question:'Please tell me the area of a 3x3 square:', 
        choice: ['33','3','9','6'], 
        answer: 2
      },
    ];


//for Current ?: index+1 edge case for question 5: may produce undefined
let questionTemplate = (state, index) => {
  console.log(index);
  return (`<h2>Question #: ${state.questions[index].question}</h2>
      <form>
        <fieldset>
          <legend> Question: </legend>
          <input id="answer0" type="radio" name="answer" value="0" required>	
          <label for="answer0">${state.questions[index].choice[0]}</label>
          <input id="answer0" type="radio" name="answer" value="1">
          <label for="answer1">${state.questions[index].choice[1]}	</label>				
          <input for="answer0" type="radio" name="answer" value="2">
          <label id="answer2">${state.questions[index].choice[2]}</label>					
          <input for="answer0" type="radio" name="answer" value="3">
          <label id="answer3">${state.questions[index].choice[3]}</label>			
        </fieldset>
        <button type="submit">Submit Answer</button>
		  </form>
      <p class="js-current-question">Current ?: ${state.questions[index+1]} out of 5</p>
      <p class="js-score">Score: </p>`);
  };


let correctAnswerTemplate = (state, index) => {
  return (`
    <div class="js-feedback-right">
      <h3>You were right!</h3>
      <p>Press next to proceed to next question:</p>
      <button type="submit">Next Question</button>
    </div>
  `);
};

let wrongAnswerTemplate = (state, index) => {
  return (`
    <div class="js-feedback-wrong">
      <h3>Oops, you got that one wrong.</h3>
      <p>Press next to proceed to next question:</p>
      <button type="submit">Next Question</button>
    </div>
  `);
};
// State manipulation functions

// function loopsThroughQuestions(state, index) {
//   for(let i = 0; i < state.questions.length; i++) {
//     questionTemplate(state,i);

//     renderQuestion(state,index);
//   }
// }

function isUserInputCorrect() {

}

function randomQuestion(state) {

}

function startQuiz(state) {
	//move from start page to the questions page
	//move from 0 to 1
	appState.page++;
	renderPage(state, appState.page, $('body'))
  loopsThroughQuestions(state);
}

// get question


// get page
const getPage = function(state) {
  state.page;
}

// get score
const getScore = function(state) {
  state.score;
}

// update score
const updateScore = function(state) {
  state.score++;
}

// reset quiz
const resetQuiz = function(state) {
  state.page = 0;
  state.score = 0;
}

// Render functions...
function renderQuestion(state,index) {
  $('.js-questions-page').removeClass('hidden');
}



function renderPage(state, currentPage, element) {
	//Start visible; 3 hidden
	//Questions page visible; 3 hidden
  console.log("renderPage log works");
  const myHTML = element.find('.js-questions-page');

    if(appState.page === 1) {
      console.log("I am on my questions page");
      // update score
      $('.js-questions-page').removeClass('hidden')
      $('.js-start-page').addClass('hidden')
    } else if (appStage.page === 2) {
      $('.js-questions-page').addClass('hidden')
      $('.js-feedback').addClass('hidden')
    }
   
}

// Event handlers
// When start button is submitted
function handlesStart () {
	$('.start').on('click', function(event) {
  // 1. Change state with state mod functio
  	startQuiz(appState);
  // 2. Invoke render function
	});
}

// Answer is submitted
$('.js-questions-submit').submit(function(event) {
  // 1. Retrieve from DOM - which answer was clicked?
  // 2. Change state with state mod function

  // 3. Invoke render function
});

$(function() {
  renderPage(appState, $('body'));
	handlesStart();
})