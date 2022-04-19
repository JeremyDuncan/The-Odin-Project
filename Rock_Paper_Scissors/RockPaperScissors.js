//========= Rock Paper Scissors Program =====================

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


// calls game() function that plays 5 games of "Rock Paper Scissors"
// calls playRound() and computerPlay() 
function game() {
  var gameCount = 0;

  while (gameCount < 5) {
    // asks for player's input, then used as playRound() Parameter.
    var input = prompt("Select Rock, Paper, or Scissors.");
    // displays on console who won match.
    console.log(playRound(input, computerPlay()))
    gameCount++;
  }
}

game()