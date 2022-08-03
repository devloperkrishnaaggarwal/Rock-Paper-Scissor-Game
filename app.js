let computerChoiceDisplay = document.getElementById("computerChoice");
let playerChoiceDisplay = document.getElementById("playerChoice");
let resultDisplay = document.getElementById("resultDisplay");
let actions = document.querySelectorAll("button");
let playerChoice;
let computerChoice;

//Making images
let playerImg = document.createElement("img");
playerImg.src = "blank.png";
playerImg.classList = "w-1/6 mx-auto md:w-24 md:my-6 lg:w-28 lg:my-10";
document.getElementById(`playerContainer`).appendChild(playerImg);

let computerImg = document.createElement("img");
computerImg.src = "blank.png";
computerImg.classList = "w-1/6 mx-auto md:w-24 md:my-6 lg:w-28 lg:my-10";
document.getElementById(`computerContainer`).appendChild(computerImg);

actions.forEach((action) =>
  action.addEventListener("click", (e) => {
    document.getElementById("playerContainer");
    playerChoice = e.target.id;
    playerChoiceDisplay.innerHTML = playerChoice;
    computerChoice = getRandomMove();
    computerChoiceDisplay.innerHTML = computerChoice;
    let result = resultfunc(computerChoice, playerChoice);
    resultDisplay.innerHTML = finalResult(result);

    playerImg.src = `${playerChoice}.png`;
    computerImg.src = `${computerChoice}.png`;
  })
);

// Getting a move for computer
const getRandomMove = () => {
  randomNumber = Math.ceil(Math.random() * 3);
  switch (randomNumber) {
    case 1:
      computerChoice = "Rock";
      break;
    case 2:
      computerChoice = "Paper";
      break;
    default:
      computerChoice = "Scissor";
      break;
  }
  return computerChoice;
};

//Taking the result
const resultfunc = (computerChoice, playerChoice) => {
  if (computerChoice == "Rock" && playerChoice == "Paper") {
    return " Player Wins";
  } else if (computerChoice == "Paper" && playerChoice == "Scissor") {
    return " Player Wins";
  } else if (computerChoice == "Scissor" && playerChoice == "Rock") {
    return " Player Wins";
  } else if (playerChoice == "Rock" && computerChoice == "Paper") {
    return " Computer Wins";
  } else if (playerChoice == "Paper" && computerChoice == "Scissor") {
    return " Computer Wins";
  } else if (playerChoice == "Scissor" && computerChoice == "Rock") {
    return " Computer Wins";
  } else {
    return " Draw";
  }
};


// Return result in color
const finalResult = (result) => {
  result == " Computer Wins"
    ? (resultDisplay.classList = "text-red-400")
    : (resultDisplay.classList = "text-green-400");
  if (result == " Draw") {
    resultDisplay.classList = "text-yellow-500";
  }
  return result;
};
