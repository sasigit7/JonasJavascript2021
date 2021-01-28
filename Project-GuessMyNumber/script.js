'use strict';
// Use Math.random method to generate random numbers between 0 and 20 inclusive
// Use Math.trunc method to return the truncated integer part of a number.
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// Render the secret number
//document.querySelector('.number').textContent = secretNumber;

let score = 20; // score variable initial value is 20

let highscore = 0; // initial high score is always greater than 0

document.querySelector('.check').addEventListener(
  // Select check button
  'click',
  function () {
    // when player clicks check button
    // get the player input from the guess input field
    // since it's a string, convert it into a number using Number method
    const guess = Number(document.querySelector('.guess').value);
    // Use typeof method to check the player input datatype, in this case - we need a number
    // console.log(guess, typeof guess); // number

    if (!guess) {
      // If player types nothing or anything other than a number in the guess input
      document.querySelector('.message').textContent = 'No Number'; // Notify the player with a "No Number" message
    } else if (guess === secretNumber) {
      // If player's guessing number matches the secret number
      document.querySelector('.message').textContent = 'Correct Number!'; // Notify the player with a "Correct Number" message
      // Display correct number only when player matches the guessing number
      document.querySelector('.number').textContent = secretNumber;
      // Change the background color when player wins the game
      document.querySelector('body').style.backgroundColor = '#60b347';
      // Change the width of the score when player wins the game
      document.querySelector('.number').style.width = '30rem';
      // Set the highscore if the current score is higher than the highscore
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess > secretNumber) {
      // If player's guessing number is higher than the secret number
      if (score > 1) {
        // When the player hits the "1" score, execute the following code
        document.querySelector('.message').textContent = 'Too high'; // Notify the player with a "Too high" message
        score--; // decrease score value by 1 everytime player gets incorrect guess
        document.querySelector('.score').textContent = score; // render the score change
      } else {
        document.querySelector('.message').textContent = 'You lost the game 😬'; // Notify the player with "You lost the game 😬" message
        document.querySelector('.score').textContent = 0; // When the player hits the "0" score
      }
    } else if (guess < secretNumber) {
      // If player's guessing number is lower than the secret number
      if (score > 1) {
        // When the player hits the "1" score, execute the following code
        document.querySelector('.message').textContent = 'Too low'; // Notify the player with a "Too low" message
        score--; // decrease score value by 1 everytime player gets incorrect guess
        document.querySelector('.score').textContent = score; // render the score change
      } else {
        document.querySelector('.message').textContent = 'You lost the game 😬'; // Notify the player with "You lost the game 😬" message
        document.querySelector('.score').textContent = 0; // When the player hits the "0" score
      }
    }
  }
);

// Reset functionality, so that player can make a new guess
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
