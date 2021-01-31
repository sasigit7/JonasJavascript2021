/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a "1", all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*
 :::::::::::::::::::::THREE CHALLENGES TO IMPROVE THE GAME EVEN MORE BETTER :::::::::::::::::::::::::::::::
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

// :::::::::::::::::::::FIRST DOM ACCESS AND MANIPULATION:::::::::::::::::::::::

//var score1 = 0;
//var score2 = 0;

var scores, roundScore, activePlayer, gamePlaying; // variables declared for the game
   // scores = [0, 0]; // initial values assigned
   // roundScore = 0; // initial value assigned
    //activePlayer = 0; // initial value assigned. (zero - 1st player/ one - 2nd player).
     init(); // Above variables are initialized in a init function down at the bottom in order to maintain DO NOT REPEAT YOURSELF principle. 

 var lastDice; // declaring a new global variable "lastDice" to store the previous dice roll.

// Working Example of math object using different methods from Console -
    /*
        Math.random() // Picks random decimal number from 0 to 1
        0.04353537196319146
        Math.random() // Picks random decimal number from 0 to 1
        0.12642774943715374
        Math.random() * 6 // Picks random decimal number from 0 to 5
        1.9235757012604062
        Math.random() * 6 // Picks random decimal number from 0 to 5
        1.1502657005281138
        Math.floor(1.1502657005281138) // floor method Removes the decimal part and turns into integer number. 
        1
        Math.floor(Math.random() * 6) // Picks random number from 0 to 5
        1
        Math.floor(Math.random() * 6) // Picks random number from 0 to 5
        4
        Math.floor(Math.random() * 6) + 1 // Picks random number from 1 to 6
        5
        Math.floor(Math.random() * 6) + 1  // Picks random number from 1 to 6
        3

    */

       // dice = Math.floor(Math.random() * 6) + 1; // Picks random number from 1 to 6
          // console.log(dice); // Outputs a random number in console from 1 to 6 

 //   :::::::::::::::::::DOM MANIPULATION USING QUERY SELECTOR:::::::::::::::::::: 

//    document.querySelector("#current-0").textContent = dice; 
      // querySelector returns the first element that is a first descendant of the element that it invokes. 
      // textContent can set only plain text. 

      //document.querySelector("#current-" + activePlayer).textContent = dice; 
      // SETTER - selects the current and active player with plain text content.

//    document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>";  
      // innerHTML sets or gets the HTML syntax describing the element's descendants. 

      // QUERY SELECTOR USED BELOW FOR SETTING AND READING ELEMENTS FROM A WEBPAGE: 
      // var x = document.querySelector("#score-0").textContent; 
       //  console.log(x); // GETTER - We get a value here.

         document.querySelector(".dice").style.display = "none"; 
     // Can use querySelector to change the CSS of some element as well. 

//   :::::::::::::::::::DOM MANIPULATION USING GET ELEMENT BY ID::::::::::::::::::::::::::::
      // The code below sets the player current score and global score to ZERO.
        document.getElementById("score-0").textContent = "0";
        document.getElementById("score-1").textContent = "0";
        document.getElementById("current-0").textContent = "0";
        document.getElementById("current-1").textContent = "0";

//:::::::::::::::::::::::EVENTS AND EVENT HANDLING: ROLLING THE DICE::::::::::::::::::::::::

         document.querySelector(".btn-roll").addEventListener("click", function() {
             
                if(gamePlaying) {
                    // 1. Random Number
                   var dice1 = Math.floor(Math.random() * 6) + 1;
                   var dice2 = Math.floor(Math.random() * 6) + 1;


               // 2. Display the result
                    document.getElementById("dice-1").style.display = "block";
                    document.getElementById("dice-2").style.display = "block";
                   // var diceDOM = document.querySelector(".dice");
                    //diceDOM.style.display = "block";
                    document.getElementById("dice-1").src = "dice-" + dice1 + ".png";
                    document.getElementById("dice-2").src = "dice-" + dice2 + ".png";


               // 3. Update the round score ONLY if the rolled number is NOT 1.
                    
                    if (dice1 !== 1 && dice2 !== 1) { // does type coercion
                         // Player -1 : Adding score while rolling dice till it get 1 ( it will switch to player - 2)
                         roundScore += dice1 + dice2; // roundScore = roundScore + dice;
                         document.querySelector("#current-" + activePlayer).textContent = roundScore;
                         
                     } else  {
                         // next player
                            nextPlayer();
                     }
                    /*
                    if(dice === 6 && lastDice === 6) { // Player looses his ENTIRE score when he rolls two 6 in a row
                        // player looses score
                        scores[activePlayer] = 0; 
                        document.querySelector("#score-" + activePlayer).textContent = "0";
                        nextPlayer(); // next player's turn
 
                    } else if (dice !== 1) { // does type coercion
                         // Player -1 : Adding score while rolling dice till it get 1 ( it will switch to player - 2)
                         roundScore += dice; // roundScore = roundScore + dice;
                         document.querySelector("#current-" + activePlayer).textContent = roundScore;
                         
                     } else  {
                         // next player
                            nextPlayer();
                         // Player - 2: 
//                          if (activePlayer === 0) {
//                              activePlayer = 1;
//                          } else  {
//                              activePlayer = 0;
//                          }
//                         activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; // Using Ternary Operator. 
//                         roundScore = 0; // Player score should start from ZERO. 
//                         
//                         // The code below sets the player current score to ZERO.  
//                            document.getElementById("current-0").textContent = "0";
//                            document.getElementById("current-1").textContent = "0";
//                         
//                         // The code below shifts ACTIVE class from Player-1 to Player-2 only.  
//                         // document.querySelector(".player-0-panel").classList.remove("active");
//                         // document.querySelector(".player-1-panel").classList.add("active");
//                         
//                         // The code below shifts ACTIVE class from Player-1 to Player-2 and vice versa.  
//                            document.querySelector(".player-0-panel").classList.toggle("active");
//                            document.querySelector(".player-1-panel").classList.toggle("active");
//                         
//                         // The code below hides the dice again when the player rolls one. 
//                            document.querySelector(".dice").style.display = "none";
//                         
                    } */
                    
                     lastDice = dice; 

                } 
             
               
         });
    

//::::::::::::::::::::::::::IMPLEMENTING "HOLD" FUNCTION:::::::::::::::::::::::::::::

     document.querySelector(".btn-hold").addEventListener("click", function() {
         if (gamePlaying) {
             // Add the current score to global score
             scores[activePlayer] += roundScore; // scores[activePlayer] = scores[activePlayer] + roundScore;
         
         // Update the User Interface (UI)
             document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
             
             // selecting the new input class from html input tag and storing it in input variable. 
             var input = document.querySelector(".final-score").value;
             // console.log(input);
             var winningScore; // declaring new variable to set up custom winning score. 
             
             //undefined, null, 0 and "" are COERCED to false
             // Anything else is COERCED to true
             if(input) {
                 winningScore = input;
             } else {
                 winningScore = 100;
             }
         
         // Check if player won the game: next player
             if(scores[activePlayer] >= winningScore) {
                 document.querySelector("#name-" + activePlayer).textContent = "winner!";
                 document.getElementById("dice-1").style.display = "none";
                 document.getElementById("dice-2").style.display = "none";
              // document.querySelector(".dice").style.display = "none"; // Dice will disappear after player won the game 
                 document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
                 document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
                 gamePlaying = false;
             } else {
                 // next player
                  nextPlayer();
             }
         }
         
         });

         // Implementig DO NOT REPEAT YOURSELF PRINCIPLE by creating a new function:::::::
          function nextPlayer() { 
              activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; // Using Ternary Operator. 
              roundScore = 0; // Player score should start from ZERO. 

              // The code below sets the player current score to ZERO.  
              document.getElementById("current-0").textContent = "0";
              document.getElementById("current-1").textContent = "0";

              // The code below shifts ACTIVE class from Player-1 to Player-2 only.  
              // document.querySelector(".player-0-panel").classList.remove("active");
              // document.querySelector(".player-1-panel").classList.add("active");

              // The code below shifts ACTIVE class from Player-1 to Player-2 and vice versa.  
              document.querySelector(".player-0-panel").classList.toggle("active");
              document.querySelector(".player-1-panel").classList.toggle("active");

              // The code below hides the dice again when the player rolls one. 
             // document.querySelector(".dice").style.display = "none";
               document.getElementById("dice-1").style.display = "none";
               document.getElementById("dice-2").style.display = "none";
          }


//::::::::::::::::::::::::::::::CREATING A GAME INITIALIZATION FUNCTION::::::::::::::::::::
//          document.querySelector(".btn-new").addEventListener("click", function() {
//                 init();
//          });
            // same as below code 
            document.querySelector(".btn-new").addEventListener("click", init);

          function init() { // Code to reset the game using function init.
              scores = [0, 0];
              activePlayer = 0;
              roundScore = 0;
              gamePlaying = true; // State variable 
              
              document.getElementById("dice-1").style.display = "none";
              document.getElementById("dice-2").style.display = "none";
              
             // document.querySelector(".dice").style.display = "none"; 
              
              document.getElementById("score-0").textContent = "0";
              document.getElementById("score-1").textContent = "0";
              document.getElementById("current-0").textContent = "0";
              document.getElementById("current-1").textContent = "0";
              
              document.getElementById("name-0").textContent = "player 1";
              document.getElementById("name-1").textContent = "player 2";
              // same as below code 
           // document.querySelector("#name-0").textContent = "player 1";
           // document.querySelector("#name-1").textContent = "player 2";
              
              document.querySelector(".player-0-panel").classList.remove("winner");
              document.querySelector(".player-1-panel").classList.remove("winner");
              
              document.querySelector(".player-0-panel").classList.remove("active");
              document.querySelector(".player-1-panel").classList.remove("active");
              
              document.querySelector(".player-0-panel").classList.add("active");

              
          }




















