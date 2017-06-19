//check state at app load
//quiz start page
//question 1 answer
//question 1 answer right or wrong output


// Create your initial state object
var appState = {
    // Questions (with answers)
    questions: [
    {question:'Question 1', choice: ['a','b','c','d'], correctAnswer: 0},
    ],
    score: null,
    correctAnswer: [],
    page: 0
    //page [start, question, resutls, final]
    //page 0: start; page 1: question; page 2: results; 3: final;
    // User's answer choice(s)	
    // Has quiz started?
    // What is the current question?
    // Other things like score? Anything else?
};

// State manipulation functions...
function startQuiz(state) {
	//move from start page to the questions page
	//move fromr 0 to 1
	appState.page++;
	renderPage(state, appState.page)
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