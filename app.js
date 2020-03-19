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

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)