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


// function questionRandomizer (arr) {
//   let randomizedQuestions = [];
//   let i
//     let random = (Math.floor(Math.Random()*10);

  
// }

//for Current ?: index+1 edge case for question 5: may produce undefined
let questionTemplate = (state, index) => {
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
        <button type="submit jq-question-submit">Submit Answer</button>
		  </form>
      <p class="js-current-question">Current ?: ${state.questions[index+1]} out of 5</p>
      <p class="js-score">Score: ${state.score}</p>`);
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

function isUserInputCorrect() {

}

function randomQuestion(state) {

}

function startQuiz(state) {
	//move from start page to the questions page
	//move from 0 to 1
	appState.page++;
	renderPage(state, appState.page, $('body'))
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
function renderQuestion(state,index,element) {
  console.log(`I am on question: ${index}`);

  $('.js-questions-page').removeClass('hidden');

  const myHTML = element.find('.js-questions-page');
  $(myHTML).html(questionTemplate(state, index));
}

function renderResults(state,index,element) {
  console.log(`I am looking at results after question: ${index}`);
}

// X pages:
  //0: start
  //1: question (1)
  //2: Results
  //3: questions (2)
  //4: results
  //5: questions (3)
  //6: results
  //7: questions (4)
  //8: results
  //9: questions (5)
  //10: Final Page

function renderPage(state, currentPage, element) {
	//Start visible; 3 hidden
	//Questions page visible; 3 hidden

     if (currentPage === 0 ) {
      //startPageRenderFunction():
     } else if (currentPage === 1) {
      $('.js-start-page').addClass('hidden')
      renderQuestion(state, 0, $('body'));
      // update score
    } else if (currentPage === 2) {
      $('.js-questions-page').addClass('hidden')
      $('.js-feedback').addClass('hidden')
    } 
   
}

/*      
      // start
      $('.js-start-page').removeClass('hidden')
      $('.js-questions-page').addClass('hidden')
      $('.js-feedback-wrong').addClass('hidden')
      $('.js-feedback-right').addClass('hidden')
      $('.js-results').addClass('hidden')

      // questions
      $('.js-start-page').addClass('hidden')
      $('.js-questions-page').removeClass('hidden')
      $('.js-feedback-wrong').addClass('hidden')
      $('.js-feedback-right').addClass('hidden')
      $('.js-results').addClass('hidden')

      // feedback right
      $('.js-start-page').addClass('hidden')
      $('.js-questions-page').removeClass('hidden')
      $('.js-feedback-wrong').addClass('hidden')
      $('.js-feedback-right').addClass('hidden')
      $('.js-results').addClass('hidden')

      // feedback wrong
      $('.js-start-page').addClass('hidden')
      $('.js-questions-page').addClass('hidden')
      $('.js-feedback-wrong').removeClass('hidden')
      $('.js-feedback-right').addClass('hidden')
      $('.js-results').addClass('hidden')

      // results
      $('.js-start-page').addClass('hidden')
      $('.js-questions-page').addClass('hidden')
      $('.js-feedback-wrong').addClass('hidden')
      $('.js-feedback-right').addClass('hidden')
      $('.js-results').removeClass('hidden')
*/

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
$('.js-question-submit').on('click', function(event) {
  // 1. Retrieve from DOM - which answer was clicked?
  let userChoice =  $(this).closest('input[type=radio]');
  console.log(userChoice);
  // 2. Change state with state mod function

  // 3. Invoke render function
});

$(function() {
  renderPage(appState, appState.page, $('body'));
	handlesStart();
})

//state.questions[index].choice[1]