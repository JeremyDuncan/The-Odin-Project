//========= Rock Paper Scissors Program =====================
var gameCount = 0;
var playerWins = 0;
var cpuWins = 0;
var ties = 0;
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
      ties++
    } else if (cpuSelection == "scissors") {
      gameResult = "You Win! Rock beats Scissors!";
      playerWins++
    } else if (cpuSelection == "paper") {
      gameResult = "You Lose! Paper beats Rock!";
      cpuWins++
    }
  }
  if (humanSelection == "paper") {
    if (cpuSelection == "paper") {
      gameResult = "It's a tie! You both selected Paper!";
      ties++
    } else if (cpuSelection == "rock") {
      gameResult = "You Win! Paper beats Rock!";
      playerWins++
    } else if (cpuSelection == "scissors") {
      gameResult = "You Lose! Scissors beats Paper!";
      cpuWins++
    }
  }
  if (humanSelection == "scissors") {
    if (cpuSelection == "scissors") {
      gameResult = "It's a tie! You both selected Scissors!";
      ties++
    } else if (cpuSelection == "paper") {
      gameResult = "You Win! Scissors beats Paper!";
      playerWins++
    } else if (cpuSelection == "rock") {
      gameResult = "You Lose! Rock beats Scissors!";
      cpuWins++
    }
  }

  return gameResult; //return who won as a string.
}


// calls game() function that plays 5 games of "Rock Paper Scissors"
// calls playRound() and computerPlay() 
function game(selection) {
  var result = "";
  gameCount++; // increment
  var input = selection;
  if (gameCount < 11) {
    var match = playRound(input, computerPlay())
    document.getElementById("results").innerHTML =`<span class='announcement'>${match}</span>` ;
  }
  else {
    if (playerWins > cpuWins) {
      result = "Win!";
    } else {
      result = "Lose!"
    }
    document.getElementById("results").innerHTML =`<span class='announcement'>GAME OVER You ${result}</span>`;
    document.getElementById("press-reload").innerHTML = `<div onclick='location.reload()' class='retry'><span class='press'>RETRY</span></div>`;
  }
  document.getElementById("counter").innerHTML = `Player wins: ${playerWins} // Computer wins: ${cpuWins} // Ties: ${ties}`;
}