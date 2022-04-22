//Loop allows 5 games and stores wins/losses
let wins = 0;
let losses = 0;
for (let i = 0; i < 5; i++){
  let roundResult = playRound();
  //Adds total result to variables outside loop
  if (roundResult.includes("Win")){
    wins++;
  } else if (roundResult.includes("Lose")){
    losses++;
  }
}



//Plays a round and returns Win, Lose or Draw
function playRound(){
  //Gets player input, makes it lowercase and trims to match output of computerPlay()
  let userSelection = prompt("Rock, Paper or Scissors?");
  userSelection = userSelection.toLowerCase().trim();

  //Gets a result from computer play to feed into the game as a string
  let computerSelection = computerPlay();

  //Uses the user and computer input and returns a string stating the result (Player win, PC Win, Tie)
  let result = play(userSelection, computerSelection);
  console.log("User chose: " + userSelection + " and the Computer chose: " + computerSelection + " ," + result);

  return result;
}

//Calculates if the player or computer won
function play(userIn, computerIn){
  if (computerIn == "scissors"){
    if (userIn == "scissors"){
      return "Draw";
    } else if (userIn == "rock"){
      return "You Win!";
    }
  } else if (computerIn == "paper"){
    if (userIn == "paper"){
      return "Draw";
    } else if (userIn == "scissors"){
      return "You Win!";
    }
  } else {
    if (userIn == "rock"){
      return "Draw";
    } else if (userIn == "paper"){
      return "You Win!";
    }
  }
  return "You Lose!"; //Computer wins if no draws or player wins were found and returned first
}

//Selects a random decision for the computer
function computerPlay(){
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber == 1){
    return "rock";
  } else if (randomNumber == 2){
    return "paper";
  } else {
    return "scissors";
  }
}