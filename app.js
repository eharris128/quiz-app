// Nice to Haves
// 1. randomize questions
// 2. 

var appState = {
    questions: [],
    currentQuestion: 0,
    score: 0,
    lastQuestionCorrect: false,
    userChoice: [],
    view: 'start' || 'question' || 'feedback' || 'results'
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
        question:'What is cube root of 10,000?', 
        choice: ['300','10000','10','100'], 
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

let questionTemplate = (state, index) => {
  return (`<h3>Question # ${state.currentQuestion+1}:</h3> <h2>${state.questions[index].question}</h2>
      <form action="/#" id="js-form">
        <fieldset>
          <legend> Pick one: </legend>
          <input id="answer0" type="radio" name="answer" value="0" required>  
          <label for="answer0">${state.questions[index].choice[0]}</label></input>
          <input id="answer1" type="radio" name="answer" value="1">
          <label for="answer1">${state.questions[index].choice[1]}</label></input>      
          <input id="answer2" type="radio" name="answer" value="2">
          <label for="answer2">${state.questions[index].choice[2]}</label></input>       
          <input id="answer3" type="radio" name="answer" value="3">
          <label for="answer3">${state.questions[index].choice[3]}</label></input>
        </fieldset>
        <button class = "button" id="js-question-submit" type="submit">Submit Answer</button>
      </form>
   
      <p class="js-score">Score: ${state.score} / 5</p>`);
  }

let correctAnswerTemplate = (state, index) => {
  return (`
      <h3>You were right!</h3>
      <p>Press "Next" to proceed to next question:</p>
      <button class="button" type="submit">Next</button>
  `);
};

let wrongAnswerTemplate = (state, index) => {
  return (`
      <h3>Oops, you got that one wrong.</h3>
      <p>The correct answer was: ${state.questions[index].choice[state.questions[index].answer]}</p>
      <p>Press "Next" to proceed to next question:</p>
      <button class="button" type="submit">Next</button>
  `);
};

let resultsTemplate = (state) => {
  return (`
    <h2>Your Quiz Results</h2>
    <h3>You got: ${state.score} correct, ${5- state.score} incorrect</h3>
    <p>Would you like to play again?</p>
    <button type="button" class="button">Play Again</button>
    `)
};

// State manipulation functions

//passed in : isUserInputCorrect(appState, userChoice);
function isUserInputCorrect(state, userInput) {
  // Creates userInput array
  // state.userChoice.push(userInput);

  state.lastQuestionCorrect = false;
  if(state.questions[state.currentQuestion].answer === parseInt(userInput,10)) {
    state.score++;
    state.lastQuestionCorrect = true;
  }
  updateViewToFeedbackPage(state, 'feedback');
}

function updateViewToQuestionPage(state, view) {
  state.view = view;
  renderPage(state, $('body'));
}

function updateViewToFeedbackPage(state, view) {
  state.view = view;
  renderPage(state, $('body'));
}

function updateViewToResultsPage (state, view) {
  state.view = view;
  renderPage(state, $('body'));
}

function resetQuiz (state, view) {
  state.view = view;
  state.score = 0;
  state.currentQuestion = 0;
  renderPage(state, $('body'));
}

// Render functions...
function renderQuestion(state, element) {
    $('.js-questions-page').removeClass('hidden');

    const myHTML = element.find('.js-questions-page');
    $(myHTML).html(questionTemplate(state, state.currentQuestion));
  } 
  
function renderFeedback(state,element) {
    $('.js-feedback-page').removeClass('hidden');

    const myHTML = element.find('.js-feedback-page');

    if(state.lastQuestionCorrect) {
      $(myHTML).html(correctAnswerTemplate(state, state.currentQuestion));
    } else {
      $(myHTML).html(wrongAnswerTemplate(state, state.currentQuestion));
    }
}

function renderResults(state,element) {
   $('.js-results-page').removeClass('hidden');
    const myHTML = element.find('.js-results-page');
    $(myHTML).html(resultsTemplate(state));
}

function renderPage(state, element) {

  $('div[class$="-page"').addClass('hidden');
     if (state.view === 'start' ) {
      $('.js-results-page').addClass('hidden');
      $('.js-start-page').removeClass('hidden');
     } else if (state.view === 'question') {
        renderQuestion(state, $('body'));
        $('.js-questions-page').removeClass('hidden');
    } else if (state.view === 'feedback') {
        renderFeedback(state, $('body'))
        $('.js-feedback-page').removeClass('hidden');
    } else if (state.view === 'results') {
        renderResults(state, $('body'));
        $('.js-results-page').removeClass('hidden');
    }
   
}

// Event handlers
// When start button is submitted
function handlesStart () {
  $('#button').on('click', function(event) {
    updateViewToQuestionPage(appState,'question');
  });
}

  $('.js-questions-page').submit(function(event) {
    // 1. Retrieve from DOM - which answer was clicked?
    event.preventDefault();
    let userChoice = $(this).find("form input[name=answer]:checked").val();
    // 2. Change state with state mod function
    isUserInputCorrect(appState, userChoice);
  });


// Answer is submitted
$('.js-feedback-page').on("click", "button", function(event) {
  event.preventDefault();
  appState.currentQuestion++;
  if (appState.currentQuestion > 4) {
    updateViewToResultsPage(appState,'results');
  } else {
    updateViewToQuestionPage(appState,'question');
  }
});

//Listen for restart
$('.js-results-page').on("click","button",function(event){
  event.preventDefault();
  resetQuiz(appState, 'start');
});


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
