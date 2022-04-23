let playerWins = 0;
let computerWins = 0;

//Listens for button presses, and uses that button to play a round with the user input and outputs result to console
let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.className);
  })
})


function playRound(userSelection){
  //Gets a result from computer play to feed into the game as a string
  let computerSelection = computerPlay();

  //Uses the user and computer input and returns a string stating the result (Player win, PC Win, Tie)
  let result = play(userSelection, computerSelection);
  let results = document.querySelector(".results");

  if (result.includes("Win")){
    playerWins++;
  } else if (result.includes("Lose")){
    computerWins++;
  }

  results.textContent = `You choose: ${userSelection} ... Computer chose: ${computerSelection} ... ${result} Total wins: ${playerWins} losses: ${computerWins}`;

  checkTotals();

  return result;
}


function checkTotals(){
  let overall = document.querySelector(".overall");
  overall.textContent = "";
  if (playerWins >= 5){
    overall.textContent = "Player has won first 5 games";
    playerWins = 0;
    computerWins = 0;
  } else if (computerWins >= 5){
    overall.textContent = "Computer has won first 5 games";
    playerWins = 0;
    computerWins = 0;
  }
}


//Calculates if the player or computer won
function play(userIn, computerIn){
  if (userIn == computerIn){
    return "Draw";
  }

  if ((computerIn == "scissors" && userIn == "rock") || (computerIn == "paper" && userIn == "scissors") || (computerIn == "rock" && userIn == "paper")){
    return "You Win!";
  }

  return "You Lose!"; //Computer wins if no draws or player wins were found and returned first
}


function computerPlay(){ 
  let options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)]; //returns at random a string
}