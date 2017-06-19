// Nice to Haves
// 1. randomize questions
// 2. 

// Create your initial state object
var appState = {
    questions :[],
    score: 0,
    correctAnswer: [],
    page: 0

    //page [start, question, resutls, final]
    //page 0: start; page 1: question; page 2: results; 3: final;
    // User's answer choice(s)	
    // Has quiz started?
    // What is the current question?
    // Other things like score? Anything else?
};
 // Questions (with answers)
    const questions = [
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

// State manipulation functions

function startQuiz(state) {
	//move from start page to the questions page
	//move from 0 to 1
	appState.page++;
	renderPage(state, appState.page)
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
function renderPage(state, currentPage) {
	//Start visible; 3 hidden
	//Questions page visible; 3 hidden
	if(appState.page === 1) {
		console.log("I am on my questions page");
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
$('.answer').submit(function(event) {
  // 1. Retrieve from DOM - which answer was clicked?
  // 2. Change state with state mod function
  // 3. Invoke render function
});

$(function() {
	handlesStart();
})