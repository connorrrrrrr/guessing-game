'use strict';
// Get data from the user
function greeting(){
var name = prompt('What is your name?');
var response1 = 'Welcome to my site, ';
alert(response1 + name);
}
greeting();

// display data to the user
// alert(response1 + name);

// log data to your developer console
//console.log('The users name is ' + name);

function question1(){
var gender = prompt('Am I a female?');
// This is the same thing as writing .toLowerCase over and over. 
gender = gender.toLowerCase()
//console.log('The user chose ' + gender);
if (gender === 'no' || gender === 'n') {
//  console.log('The user chose the correct answer.');
  alert('Correct!');
}
else if (gender === 'yes' || gender === 'y') {
//  console.log('The user chose the wrong answer');
  alert('Wrong.');
}
}

question1();

// //Above asks the user if I am a female or not.
// var videoGame = prompt('Do I like video games?');
// videoGame = videoGame.toLowerCase()
// //console.log('The user chose ' + videoGame);
// if (videoGame === 'yes' || videoGame === 'y') {
// //  console.log('The user chose the correct answer.');
//   alert('Correct!');
// }
// else if (videoGame === 'no' || videoGame === 'n') {
// //  console.log('The user chose the wrong answer.');
//   alert('Wrong.');
// }
// //Above asks the user if I like video games or not.
// var extrovert = prompt('Am I an extrovert?');
// extrovert = extrovert.toLowerCase()
// //console.log('The user chose ' + extrovert);
// if (extrovert === 'no' || extrovert === 'n') {
// //  console.log('The user chose the correct answer.');
//   alert('Thats correct!');
// }
// else if (extrovert === 'yes' || extrovert === 'y') {
// //  console.log('The user chose the wrong answer.');
//   alert('Thats incorrect.');
// }
// //Above asks the user if I am an extrovert or not.
// var dogs = prompt('Do I like dogs?');
// dogs = dogs.toLowerCase()
// //console.log('The user chose ' + dogs);
// if (dogs === 'yes' || dogs === 'y') {
// //  console.log('The user chose the correct answer.');
//   alert('You are correct!');
// }
// else if (dogs === 'no' || dogs === 'n') {
// //  console.log('The user chose the wrong answer.');
//   alert('That is incorrect.');
// }
// //Above asks the user if I like dogs or not.
// var winter = prompt('Do I enjoy the winter?');
// winter = winter.toLowerCase()
// //console.log('The user chose ' + winter);
// if (winter === 'yes' || winter === 'y') {
// //  console.log('The user chose the correct answer.');
//   alert('Thats right!');
// }
// else if (winter === 'no' || winter === 'n') {
// //  console.log('The user chose the wrong answer.');
//   alert('Incorrect.');
// }

// var correctAnswer = 9;

// var guess = prompt('Pick a number between 1-15');
// while (guess < 1 || guess > 15) {
//   guess = prompt('Sorry, try again!');
// }
// var numberOfGuesses = 4






// alert('Thanks! Have a good day, ' + name)
// //Above asks the user if I enjoy the winter.
