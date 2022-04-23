//Plays a game with a chosen amount of rounds and returns an overall winner
// function game(amountOfRounds){
//   let wins = 0;
//   let losses = 0;
//   for (let i = 0; i < amountOfRounds; i++){
//     let roundResult = playRound();
//     //Adds total result to variables outside loop
//     if (roundResult.includes("Win")){
//       wins++;
//     } else if (roundResult.includes("Lose")){
//       losses++;
//     }
//   }
//   if (wins > losses){
//     return "You won overall";
//   } else if (losses > wins){
//     return "You lost overall";
//   } else {
//     return "It was a draw overall";
//   }
// }


//Listens for button presses, and uses that button to play a round with the user input and outputs result to console
let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.getAttribute("class"))
  })
})



//Plays a round and returns Win, Lose or Draw
function playRound(userSelection){
  //Gets player input, makes it lowercase and trims to match output of computerPlay()

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