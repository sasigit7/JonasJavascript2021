'use strict';
// Use Math.random method to generate random numbers between 0 and 20 inclusive
// Use Math.trunc method to return the truncated integer part of a number.
const secretNumber = Math.trunc(Math.random() * 20) + 1;
// Render the secret number
document.querySelector('.number').textContent = secretNumber;

let score = 20; // score variable initial value is 20

document.querySelector('.check').addEventListener(
  // Select check button
  'click',
  function (e) {
    // when user clicks check button
    // get the user input from the guess input field
    // since it's a string, convert it into a number using Number method
    const guess = Number(document.querySelector('.guess').value);
    // Use typeof method to check the user input datatype, in this case - we need a number
    // console.log(guess, typeof guess); // number

    if (!guess) {
      // If user types nothing or anything other than a number in the guess input
      document.querySelector('.message').textContent = 'No Number'; // Notify the user with a "No Number" message
    } else if (guess === secretNumber) {
      // If user's guessing number matches the secret number
      document.querySelector('.message').textContent = 'Correct Number'; // Notify the user with a "Correct Number" message
    } else if (guess > secretNumber) {
      // If user's guessing number is higher than the secret number
      if (score > 1) {
        // When the user hits the "1" score, execute the following code
        document.querySelector('.message').textContent = 'Too high'; // Notify the user with a "Too high" message
        score--; // decrease score value by 1 everytime user gets incorrect guess
        document.querySelector('.score').textContent = score; // render the score change
      } else {
        document.querySelector('.message').textContent = 'You lost the game 😬'; // Notify the user with "You lost the game 😬" message
        document.querySelector('.score').textContent = 0; // When the user hits the "0" score
      }
    } else if (guess < secretNumber) {
      // If user's guessing number is lower than the secret number
      if (score > 1) {
        // When the user hits the "1" score, execute the following code
        document.querySelector('.message').textContent = 'Too low'; // Notify the user with a "Too low" message
        score--; // decrease score value by 1 everytime user gets incorrect guess
        document.querySelector('.score').textContent = score; // render the score change
      } else {
        document.querySelector('.message').textContent = 'You lost the game 😬'; // Notify the user with "You lost the game 😬" message
        document.querySelector('.score').textContent = 0; // When the user hits the "0" score
      }
    }
  }
);
