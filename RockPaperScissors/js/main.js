let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const rock_div = document.querySelector(".r");
const paper_div = document.querySelector(".p");
const scissors_div = document.querySelector(".s");
let result_div = document.querySelector(".result > p");


function main(){
  rock_div.addEventListener('click', () => Compare("r"));
  paper_div.addEventListener('click', () => Compare("p"));
  scissors_div.addEventListener('click', () => Compare("s"));
}

function ComputerRandom(){
  let RockPaperScissors = ['r','p','s'];
  return (RockPaperScissors[(Math.floor(Math.random()*3))]);
}

function convertToWord (letter){
  switch (letter){
    case "r":
      return "Rock";
      break;
    case "p":
      return "Paper";
      break;
    case "s":
      return "Scissors";
  }
}

function win(userChoice, ComputerRandom){
  userScore++;
  userScore_span.innerHTML = userScore;
  const userSmall = "user".fontsize(3).sub();
  const compSmall = "comp".fontsize(3).sub();
  result_div.innerHTML = `${convertToWord(userChoice)} ${userSmall} kills ${convertToWord(ComputerRandom)} ${compSmall} , you win !`;
  document.getElementById(userChoice).classList.add("border-green");
  setTimeout(() => document.getElementById(userChoice).classList.remove("border-green"),500);
}

function lose(userChoice,ComputerRandom){
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  const userSmall = "user".fontsize(3).sub();
  const compSmall = "comp".fontsize(3).sub();
  result_div.innerHTML = `${convertToWord(userChoice)} ${userSmall} die against ${convertToWord(ComputerRandom)} ${compSmall} , you lose !`;
  document.getElementById(userChoice).classList.add("border-red");
  setTimeout(() => document.getElementById(userChoice).classList.remove("border-red"),500);
}

function draw(userChoice,ComputerRandom){
  const userSmall = "user".fontsize(3).sub();
  const compSmall = "comp".fontsize(3).sub();
  result_div.innerHTML = `${convertToWord(userChoice)} ${userSmall}  =  ${convertToWord(ComputerRandom)} ${compSmall} , it's a draw !`;
  document.getElementById(userChoice).classList.add("border-grey");
  setTimeout(() => document.getElementById(userChoice).classList.remove("border-grey"),500);
}

function Compare(userChoice) {

  const compChoice = ComputerRandom();

  switch (userChoice + compChoice) {

    case "rs":
    case "pr":
    case "sp":
      win(userChoice,compChoice);
      break;

    case "sr":
    case "rp":
    case "ps":
      lose(userChoice,compChoice);
      break;

    case "rr":
    case "pp":
    case "ss":
      draw(userChoice,compChoice);
      break;
  }
}

main();




