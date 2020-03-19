'use strict';

const store = {
  questions: [
    {
      question: 'What is Bootes void?',
      answers: [
        'A ‘dead zone’ in space where there are no stars for hundreds of millions of miles in every direction',
        'The outer reaches of space that stretch past the cosmic backdrop of the universe',
        'The event horizon between galactic-level black holes and the nearest star',
        'The space between galaxies'
      ],
      correctAnswer: 'A ‘dead zone’ in space where there are no stars for hundreds of millions of miles in every direction',
    },
    {
      question: 'What is a Pulsar?',
      answers: [
        'A comet that is large enough to destroy our planet if it were to hit.',
        'A subatomic particle that can only be captured under ground in vats of heavy-water',
        'A celestial body that spins extremely fast and emits energy from its poles',
        'A cosmic body that travels as fast as the speed of light'
      ],
      correctAnswer: 'A celestial body that spins extremely fast and emits energy from its poles'
    },
    {
      question: 'What is a supernova?',
      answers: [
        'A planet that has collapsed under its own weight and turned into a black hole',
        'A star that has exploded',
        'Space that has folded in onto itself',
        'A new star being born'
      ],
      correctAnswer: 'A star that has exploded'
    },
    {
      question: 'What does it mean for mercury to be in retrograde?',
      answers: [
        'The planet is moving closer to our sun',
        'The planet appears to have reversed its orbit',
        'The planet is preparing to emit mass from its poles',
        'A cosmological warning that you will have bad luck this month'
      ],
      correctAnswer: 'The planet appears to have reversed its orbit'
    },
    {
      question: ' What is a geo heliocentric universe?',
      answers: [
        'A model for our universe where the sun and earth are at its center',
        'A model for our universe where stars and planets orbit each other instead of planets orbiting stars',
        'A model for our universe where our solar system is orbited by other solar systems',
        'A model for a solar system where planets are slowly sucked in by the sun\'s gravity'
      ],
      correctAnswer: 'A model for our universe where the sun and earth are at its center'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};



/**
 *
 * Technical requirements:
 *
 * Your app should include a render() function, that regenerates the view each time the store is updated.
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 *
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates
function generateStartPageHTML() {
  return `<h2>Welcome to my space Quiz!</h2>
  <h2>Let's see if you can answer some esoteric questions!</h2>

  <button class="start-quiz">
    Start Quiz
  </button>`;
}

function generateQuestionPageFormHTML() {
  const questionArrayNum = store.questionNumber;
  const questionsObj = store.questions[questionArrayNum];
  const answersArray = questionsObj.answers;

  const arrayQuestions = answersArray.map((element, index) => {
    return `<input type="radio" id="ans${index}" name="answer" />
    <label for="asn${index}">${element}</label><br>`;
  });

  return `<section class="question">
  <h3>${store.score} Correct, ${questionArrayNum - store.score} incorrect</h3>
  <h3>Question ${questionArrayNum + 1}</h3>
  <p>What is bootes void?</p>
  <form action="#" id="question-form">
  <div class="radio-buttons">
  ${arrayQuestions.join('')}
  </div>
  <input type="submit" class="submit-button" name="submit-answer" value="Submit Answer">
  </form>
</section>`;
}

function generateCorrectPageHTML() {
  //generate the SpaceQuizHeader
  //Generate the correct message
  //generate the question that was asked
}

function generateIncorrectPageHTML() {
  //generate the SpaceQuizHeader
  //generate the incorrect message
  //generate the question that was asked
  //find the correctAnswer from the store and generate that
}

function generateResultsPageHTML() {
  //generate the SpaceQuizHeader
  //read how many questions they got right and wrong from store
  //update the numbers in thet questions correct/incorrect html
  //calculate the percentage out of total and generate that HTML
  //generate the retake button html
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function render() {
  if (store.quizStarted === false) {
    $('main').html(generateStartPageHTML());
  }
  else {
    $('main').html(generateQuestionPageFormHTML());
  }
  //TODO: need logic to figure out rendering correct and incorrect pages

  handleButtons();
}

function handleButtons() {
  startQuizHandler();
  submitAnswerHandler();
  nextQuestionHandler();
  retakeQuizHandler();
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

function startQuizHandler() {
  $('.start-quiz').click(function (event) {
    console.log('Starting quiz');
    store.quizStarted = true;
    render();
  });
}

function submitAnswerHandler() {
  $('#question-form').submit(function (event) {
    event.preventDefault();
    console.log('Answer submitted');

    const radioValue = $('input[name=\'answer\']:checked + label').text();
    const question = store.questions.find(element => element.answers.find(elementAnswer => elementAnswer === radioValue));
    if (radioValue === '') {
      console.log('User did not select an answer');
      alert('You need to select an answer');
    } else {
      console.log(`Selected value is: ${radioValue}`);
      if (radioValue === store.questions[store.questionNumber].correctAnswer) {
        store.score++;
        console.log('TESTING');
        //TODO: if answer is correct, render correct page
      }
      else {
        console.log('TESTING2');
        //TODO: if answer is incorrect, render the incorrect page
      }
      render();
    }
  });
}

//deals with the submit button for picking an answer to the question
//Accesses the store and questionNumber++
//calculates if answer matches correct answer, if so, access store.score and adds ++
//Runs render()


function nextQuestionHandler() {
  //deals with the next question buttons on the correct and incorrect pages
  // not sure yet...
  //Runs render()
}

function retakeQuizHandler() {
  //resets the store to it's default state
  //Runs render()
}

// -----------Calling render to start the application --------
render();