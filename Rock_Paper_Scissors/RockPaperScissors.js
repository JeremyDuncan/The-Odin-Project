/*
Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!

Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

Important note: you want to return the results of this function call, not console.log() them. You’re going to use what you return later on, so let’s test this function by using console.log to see the results:

function playRound(playerSelection, computerSelection) {
  // your code here!
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
Remember loops? This is a great opportunity to use one to play those five rounds:

At this point you should be using console.log() to display the results of each round and the winner at the end.
Use prompt() to get input from the user. Read the docs here if you need to.
Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
Feel free to create more “helper” functions if you think it would be useful.
*/

function computerPlay() {
  // choices that the computer has to choose from in game
  var computerChoice = ["Rock", "Paper", "Scissors"];
  
  // randomly generates a number based on max (max = 3 [0-2])
  var max = 3; // [0-2]
  var randomNum = Math.floor(Math.random() * max);

  // uses randomly created number to select computerChoice in Array
  // returns rock paper or scissors
  return computerChoice[randomNum];
}

function playRound(playerSelection, computerSelection) {

  //make selection case insensitive. ie. Rock rock ROCK RoCk etc.
  var humanSelection = playerSelection.toLowerCase();
  var cpuSelection = computerSelection.toLowerCase();
  var gameResult = "";
  
  // determines result based on player and computer selection. 
  // puts game result into gameResult as string.
  if (humanSelection == "rock") {
    if (cpuSelection == "rock") {
      gameResult = "It's a tie! You both selected Rock!";
    } else if (cpuSelection == "scissors") {
        gameResult = "You Win! Rock beats Scissors!";
    } else if (cpuSelection == "paper") {
        gameResult = "You Lose! Paper beats Rock!"; 
    }
  }

  if (humanSelection == "paper") {
    if (cpuSelection == "paper") {
      gameResult = "It's a tie! You both selected Paper!";
    } else if (cpuSelection == "rock") {
        gameResult = "You Win! Paper beats Rock!";
    } else if (cpuSelection == "scissors") {
        gameResult = "You Lose! Scissors beats Paper!"; 
    }
  }
 
  if (humanSelection == "scissors") {
    if (cpuSelection == "scissors") {
      gameResult = "It's a tie! You both selected Scissors!";
    } else if (cpuSelection == "paper") {
        gameResult = "You Win! Scissors beats Paper!";
    } else if (cpuSelection == "rock") {
        gameResult = "You Lose! Rock beats Paper!"; 
    }
  }

 return gameResult; //return who won as a string.
}


/*
  //returns string that declares a winner. (Not console)
  const playerSelection = "rock";
  const computerSelection = computerPlay();

}
computerPlay()

function game() {
  playRound()
}
*/
