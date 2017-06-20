// Nice to Haves
// 1. randomize questions
// 2. 

// Create your initial state object
var appState = {
    questions: [],
    currentQuestion: 0,
    score: 0,
    lastQuestionCorrect: false,
    userChoice: [],
    view: 'start' || 'question' || 'feedback' || 'results'

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

// function randomQuestion(state) {

// }
// function questionRandomizer (arr) {
//   let randomizedQuestions = [];
//   let i
//     let random = (Math.floor(Math.Random()*10);

  
// }

//for Current ?: index+1 edge case for question 5: may produce undefined
let questionTemplate = (state, index) => {
  return (`<h2>Question # ${state.currentQuestion+1}: <br>${state.questions[index].question}</h2>
      <form id="js-form">
        <fieldset>
          <legend> Pick one: </legend>
          <input id="answer0" type="radio" name="answer" value="0" required>  
          <label for="answer0">${state.questions[index].choice[0]}</label>
          <input id="answer0" type="radio" name="answer" value="1">
          <label for="answer1">${state.questions[index].choice[1]}  </label>        
          <input for="answer0" type="radio" name="answer" value="2">
          <label id="answer2">${state.questions[index].choice[2]}</label>         
          <input for="answer0" type="radio" name="answer" value="3">
          <label id="answer3">${state.questions[index].choice[3]}</label>     
        </fieldset>
        <button class = "button" id="js-question-submit" type="submit">Submit Answer</button>
      </form>
   
      <p class="js-score">Score: ${state.score} / 5</p>`);
  };

let correctAnswerTemplate = (state, index) => {
  return (`
    <div class="js-feedback-right-page">
      <h3>You were right!</h3>
      <p>Press next to proceed to next question:</p>
      <button type="submit">Next Question</button>
    </div>
  `);
};

let wrongAnswerTemplate = (state, index) => {
  return (`
    <div class="js-feedback-wrong-page">
      <h3>Oops, you got that one wrong.</h3>
      <p>Press next to proceed to next question:</p>
      <button type="submit">Next Question</button>
    </div>
  `);
};
// State manipulation functions

//passed in : isUserInputCorrect(appState, userChoice);
function isUserInputCorrect(state, userInput) {
  // Creates userInput array
  // state.userChoice.push(userInput);

  // console.log(state.userChoice);
  // console.log(parseInt(userInput,10))
  // console.log(typeof state.questions[state.currentQuestion].answer)

  if(state.questions[state.currentQuestion].answer === parseInt(userInput,10)) {
    state.score++;
    state.lastQuestionCorrect = true;
  }
  updateViewToFeedbackPage(state, 'feedback');
}

function updateViewToQuestionPage(state, view) {
  //move from start page to the questions page
  //move from 0 to 1
  state.view = view;
  renderPage(state, $('body'));
}

function updateViewToFeedbackPage(state, view) {
  //move from question page to the feedback page
  state.view = view;
  renderPage(state, $('body'));
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

function renderFeedback(state,element) {
  console.log(`I am looking at results after question: ${state.currentQuestion}`);

  $('.js-feedback-page').removeClass('hidden');

  const myHTML = element.find('.js-feedback-page');

  if(state.lastQuestionCorrect) {
    $(myHTML).html(correctAnswerTemplate(state, state.currentQuestion));
  } else {
    $(myHTML).html(wrongAnswerTemplate(state, state.currentQuestion));
  }
}

function renderPage(state, element) {
  //Start visible; 3 hidden
  $('div[class$="-page"').addClass('hidden');
     if (state.view === 'start' ) {
      //startPageRenderFunction():
     } else if (state.view === 'question') {
        renderQuestion(state, $('body'));
        $('.js-questions-page').removeClass('hidden');
        // update score
    } else if (state.view === 'feedback') {
        renderFeedback(state, $('body'))
        $('.js-feedback-page').removeClass('hidden');
    } else if (state.view === 'results') {

    }
   
}

// Event handlers
  $('.js-questions-page').submit(function(event) {
    // 1. Retrieve from DOM - which answer was clicked?
    event.preventDefault();
    let userChoice = $(this).find("form input[name=answer]:checked").val();
    console.log(userChoice);
    // 2. Change state with state mod function
    isUserInputCorrect(appState, userChoice);
  });


// When start button is submitted
function handlesStart () {
  $('#button').on('click', function(event) {
  // 1. Change state with state mod functio
    updateViewToQuestionPage(appState,'question');
  // 2. Invoke render function
  });
}

// Answer is submitted


$(function() {
  handlesStart();
  bgAudio = document.getElementById("wav");
  bgAudio.volume = 0.04;
 // $('#wav').get(0).play();

})

document.getElementById("button").onclick = (function() {
    document.getElementsByTagName('audio')[0].play();
    return false;
});

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
