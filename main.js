let playerWins = 0;
let computerWins = 0;
let draws = 0;

//Listens for button presses, and uses that button to play a round with the user input and outputs result to console
let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.className);
  })
})


//Plays a game with a chosen amount of rounds and returns an overall winner
function game(amountOfRounds, userSelection){
  let wins = 0;
  let losses = 0;
  for (let i = 0; i < amountOfRounds; i++){
    let roundResult = playRound(userSelection);
    //Adds total result to variables outside loop
    if (roundResult.includes("Win")){
      wins++;
    } else if (roundResult.includes("Lose")){
      losses++;
    }
  }
  if (wins > losses){
    return "You won overall";
  } else if (losses > wins){
    return "You lost overall";
  } else {
    return "It was a draw overall";
  }
}

//Plays a round and returns Win, Lose or Draw
function playRound(userSelection){
  //Gets a result from computer play to feed into the game as a string
  let computerSelection = computerPlay();

  //Uses the user and computer input and returns a string stating the result (Player win, PC Win, Tie)
  let result = play(userSelection, computerSelection);
  let results = document.querySelector(".results");
  results.textContent = "You choose: " + userSelection + " ... Computer chose: " + computerSelection + " ... " + result;

  return result;
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