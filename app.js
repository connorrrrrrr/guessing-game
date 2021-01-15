'use strict';
var numberOfCorrect = 0
// Get data from the user
function greeting() {
  var name = prompt('What is your name?');
  var response1 = 'Welcome to my site, ';
  alert(response1 + name);
}
greeting();

// display data to the user
// alert(response1 + name);

// log data to your developer console
//console.log('The users name is ' + name);

function question1() {
  var gender = prompt('Am I a female?');
  // This is the same thing as writing .toLowerCase over and over. 
  gender = gender.toLowerCase()
  //console.log('The user chose ' + gender);
  if (gender === 'no' || gender === 'n') {
    //  console.log('The user chose the correct answer.');
    alert('Correct!');
    numberOfCorrect++
  }
  else if (gender === 'yes' || gender === 'y') {
    //  console.log('The user chose the wrong answer');
    alert('Wrong.');
  }
}

question1();

// //Above asks the user if I am a female or not.

function question2() {
  var videoGame = prompt('Do I like video games?');
  videoGame = videoGame.toLowerCase()
  //console.log('The user chose ' + videoGame);
  if (videoGame === 'yes' || videoGame === 'y') {
    //  console.log('The user chose the correct answer.');
    alert('Correct!');
    numberOfCorrect++
  }
  else if (videoGame === 'no' || videoGame === 'n') {
    //  console.log('The user chose the wrong answer.');
    alert('Wrong.');
  }
}
question2();

// //Above asks the user if I like video games or not.

function questions3() {
  var extrovert = prompt('Am I an extrovert?');
  extrovert = extrovert.toLowerCase()
  //console.log('The user chose ' + extrovert);
  if (extrovert === 'no' || extrovert === 'n') {
    //  console.log('The user chose the correct answer.');
    alert('Thats correct!');
    numberOfCorrect++
  }
  else if (extrovert === 'yes' || extrovert === 'y') {
    //  console.log('The user chose the wrong answer.');
    alert('Thats incorrect.');
  }
}
questions3();

// //Above asks the user if I am an extrovert or not.

function question4() {
  var dogs = prompt('Do I like dogs?');
  dogs = dogs.toLowerCase()
  //console.log('The user chose ' + dogs);
  if (dogs === 'yes' || dogs === 'y') {
    //  console.log('The user chose the correct answer.');
    alert('You are correct!');
    numberOfCorrect++
  }
  else if (dogs === 'no' || dogs === 'n') {
    //  console.log('The user chose the wrong answer.');
    alert('That is incorrect.');
  }
}
question4();

// //Above asks the user if I like dogs or not.

function question5() {
  var winter = prompt('Do I enjoy the winter?');
  winter = winter.toLowerCase()
  //console.log('The user chose ' + winter);
  if (winter === 'yes' || winter === 'y') {
    //  console.log('The user chose the correct answer.');
    alert('Thats right!');
    numberOfCorrect++
  }
  else if (winter === 'no' || winter === 'n') {
    //  console.log('The user chose the wrong answer.');
    alert('Incorrect.');
  }
}
question5();



var correctAnswer = 9;
var numberOfGuesses = 0;
while (numberOfGuesses < 4) {
  numberOfGuesses++;
  var guess = parseInt(prompt('Pick a number between 1-15'));
  if (guess === correctAnswer) {
    alert('Nice Job!');
    numberOfCorrect++
    break;
  }
  alert('Sorry, try again! ' + (4 - numberOfGuesses) + '/4 Attempts left.');
  if (guess > correctAnswer) {
    alert('Too high!')
  } else if (guess < correctAnswer) {
    alert('Too low!')
  }
}




numberOfGuesses = 0
var correctGuess = false
var myArray = [1, 2, 3, 4, 6, 8, 10];
while (!correctGuess && numberOfGuesses < 6) {
  var pets = parseInt(prompt('How many pets do I want?'));
  numberOfGuesses++
  for (var i = 0; i < myArray.length; i++) {
    if (pets === myArray[i]) {
      correctGuess = true
      alert('Correct!');
      numberOfCorrect++
      break;
    }
  }
if (!correctGuess) {
  alert('Not quite...')
}
}

alert('The possible answers are ' + myArray)
alert('You got ' + numberOfCorrect + ' /7.')

// alert('Thanks! Have a good day, ' + name)
