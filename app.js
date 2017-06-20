// Nice to Haves
// 1. randomize questions
// 2. 

// Create your initial state object
var appState = {
    questions: [],
    currentQuestion: 0,
    score: 0,
    correctAnswer: [],
    view: 'question'
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

// State manipulation functions

function isUserInputCorrect() {

}

function randomQuestion(state) {

}

function updateViewToQuestionPage(state, view) {
	//move from start page to the questions page
	//move from 0 to 1
  state.view = view;
	renderPage(state, $('body'));
}

function updateViewToFeedbackPage(state, view) {
  //move from question page to the feedback page
  state.view = 'feedback';
  renderPage(state, $('body'));
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
function renderQuestion(state, element) {
  console.log(`I am on question: ${state.currentQuestion}`);

  $('.js-questions-page').removeClass('hidden');

  const myHTML = element.find('.js-questions-page');
  $(myHTML).html(questionTemplate(state, state.currentQuestion));
}

//This function renders the feedback page (if the button worked)
function renderFeedback(state, element) {
  console.log(`I am looking at results after question: ${state.currentQuestion}`);

  $('.js-questions-page').addClass('hidden');
  $('.js-feedback-page').removeClass('hidden');

  const myHTML = element.find('.js-feedback-page');
  $(myHTML).html(feedbackTemplate(state, state.currentQuestion));
}

  //Render Templates:
let questionTemplate = (state, index) => {
  return (`
    <h2>Question: ${state.questions[index].question}</h2>
      <form class="js-form">
        <fieldset>
          <legend> Question: </legend>
          <input id="answer0" type="radio" name="answer" value="0" required>  
          <label for="answer0">${state.questions[index].choice[0]}</label>
          <input id="answer0" type="radio" name="answer" value="1">
          <label for="answer1">${state.questions[index].choice[1]}  </label>        
          <input for="answer0" type="radio" name="answer" value="2">
          <label id="answer2">${state.questions[index].choice[2]}</label>         
          <input for="answer0" type="radio" name="answer" value="3">
          <label id="answer3">${state.questions[index].choice[3]}</label>     
        </fieldset>
        <button type="submit" class="js-question-submit">Submit Answer</button>
      </form>
      <p class="js-current-question">Current Question: ${state.currentQuestion} out of 5</p>
      <p class="js-score">Score: ${state.score}</p>
      `);
  };


let feedbackTemplate = (state, index) => {
  //todo : create ternary / if what outputs return You were right or You were wrong depending on answer
  return (`
      <h3>You were right!</h3>
      <p>Press next to proceed to next question:</p>
      <button type="submit">Next Question</button>
  `);
};

function renderPage(state, element) {
  //Start visible; 3 hidden
  $('div[class$="-page"').addClass('hidden');

     if (state.view === 'start' ) {
      //startPageRenderFunction():
     } else if (state.view === 'question') {
        console.log('we in here');
        renderQuestion(state, $('body'));
        $('.js-questions-page').removeClass('hidden');
        // update score
    } else if (state.view === 'feedback') {
        console.log('derp')
        renderFeedback(state, $('body'))
        $('.js-feedback-page')
    } else if (state.view === 'final') {

    }
   
}


// Event handlers
// When start button is submitted
function handlesStart () {
	$('.start').on('click', function(event) {
  // 1. Update page view to question page
  	updateViewToQuestionPage(appState,'question');
	});
}

//Handleanswersubmit does not detect button clicks
function handlesAnswerSubmit() {
    $('.js-question-submit').submit(function(event) {
    // 1. Retrieve from DOM - which answer was clicked?
    let userChoice =  $(this).closest('input[type=radio]');
    console.log(userChoice);
    // 2. Change state view to feedback page
  updateViewToFeedbackPage(appState,'feedback');
  });
}

$(function() {
	handlesStart();
  handlesAnswerSubmit();
  //When will currentQuestion be incremented?
})

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